"use client"

import { useEffect, useState, Fragment } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';

import { Switch } from '@/components/ui/switch';
import { ChevronDown, ChevronRight, Save } from 'lucide-react';
import { useGetOperatorCircles } from '@/hooks/operator-circle/use-get-operator-circles';
import type { OperatorCircleLink, ApiData } from './types';
import { ModifyDialog } from './components/ModifyDialog';
import { CircleRow } from './components/CircleRow';
import { OperatorRow } from './components/OperatorRow';
import { useGetAllCircles } from '@/hooks/circles/use-get-all-circles';
import { useGetAllOperators } from '@/hooks/operators/use-get-all-operators';
import { Separator } from '@/components/ui/separator';
import { axiosInstance } from '@/lib/axios';


export default function ApiManagementPage(): JSX.Element {
    const { data: linking, isLoading, refetch: refetchLinking } = useGetOperatorCircles();
    const { data: circles, isLoading: isLoadingCircles } = useGetAllCircles();
    const { data: operators, isLoading: isLoadingOperators } = useGetAllOperators();

    const [selectedApi, setSelectedApi] = useState<OperatorCircleLink | null>(null);
    const [isModifyDialogOpen, setIsModifyDialogOpen] = useState<boolean>(false);
    const [apiStatuses, setApiStatuses] = useState<Record<string, boolean>>({});
    const [expandedApis, setExpandedApis] = useState<Record<string, boolean>>({});
    const [expandedCircles, setExpandedCircles] = useState<Record<string, boolean>>({});
    const [expandedOperators, setExpandedOperators] = useState<Record<string, boolean>>({});
    const [groupedData, setGroupedData] = useState<ApiData[]>([]);
    const [circleCodes, setCircleCodes] = useState<Record<string, string>>({});
    const [operatorCodes, setOperatorCodes] = useState<Record<string, string>>({});

    useEffect(() => {
        if (linking?.data && circles && operators) {
            // Group the data by API
            const apiMap = new Map<string, ApiData>();

            linking.data.forEach((link) => {
                const apiId = link.provider_api.id;
                if (!apiMap.has(apiId)) {
                    apiMap.set(apiId, {
                        id: apiId,
                        name: link.provider_api.name,
                        circles: [],
                        operators: [],
                        provider_api: link.provider_api,
                    });
                }

                const api = apiMap.get(apiId)!;
                const circle = api.circles.find(c => c.id === link.circle.id);

                if (!circle) {
                    api.circles.push({
                        id: link.circle.id,
                        name: link.circle.name,
                        circle_code: link.circle_code,
                        operators: [{
                            id: link.operator.id,
                            operator_code: link.operator_code
                        }]
                    });
                } else {
                    circle.operators.push({
                        id: link.operator.id,
                        operator_code: link.operator_code
                    });
                }

                if (!api.operators.some(op => op.id === link.operator.id)) {
                    api.operators.push({
                        id: link.operator.id,
                        name: link.operator.name
                    });
                }
            });

            setGroupedData(Array.from(apiMap.values()));
        }
    }, [linking, circles, operators]);

    // Handle API status toggle
    const handleToggleActivate = async (apiId: string) => {
        // TODO: Implement API status toggle
        setApiStatuses(prev => ({
            ...prev,
            [apiId]: !prev[apiId]
        }));
        console.log('Toggle API status:', apiId);
        await refetchLinking();
    };

    // Handle API expansion toggle
    const handleApiExpand = (apiId: string) => {
        setExpandedApis(prev => ({
            ...prev,
            [apiId]: !prev[apiId]
        }));
    };

    // Handle modify dialog
    const handleModify = (link: OperatorCircleLink) => {
        setSelectedApi(link);
        setIsModifyDialogOpen(true);
    };

    // Handle delete
    const handleDelete = async (linkId: string) => {
        if (confirm('Are you sure you want to delete this mapping?')) {
            // TODO: Implement delete API call
            console.log('Delete mapping:', linkId);
            await refetchLinking();
        }
    };


    // Handle circle code change
    const handleCircleCodeChange = (circleId: string, code: string) => {
        setCircleCodes(prev => ({
            ...prev,
            [circleId]: code
        }));
    };

    // Handle operator code change
    const handleOperatorCodeChange = (operatorId: string, code: string) => {
        setOperatorCodes(prev => ({
            ...prev,
            [operatorId]: code
        }));
    };

    const updateCircleCode = async (apiId: string, circleId: string, code: string) => {
        await axiosInstance.patch('/op-circle-link/update-circle-code', {
            provider_api_id: apiId,
            circle_id: circleId,
            code: code,
        });
        await refetchLinking();
    }
    // Handle save for circle
    const handleSaveCircle = async (apiId: string, circleId: string, code: string = '') => {
        const currentCode = circleCodes[circleId] || '';
        try {
            await axiosInstance.patch('/op-circle-link/update-circle-code', {
                provider_api_id: apiId,
                circle_id: circleId,
                code: code|| currentCode,
            });
            // await fetch('/op-circle-link/update-circle-code', {
            //     method: 'PATCH',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //         provider_api_id: apiId,
            //         circle_id: circleId,
            //         code: currentCode,
            //     }),
            // });
            await refetchLinking();
        } catch (error) {
            console.error('Error updating circle code:', error);
        }
    };

    // Handle save for operator
    const handleSaveOperator = async (apiId: string, operatorId: string) => {
        const currentCode = operatorCodes[operatorId] || '';
        try {
            await fetch('https://api.recharge.kashishindiapvtltd.com/op-circle-link/update-operator-code', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                     'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify({
                    provider_api_id: apiId,
                    operator_id: operatorId,
                    code: currentCode,
                }),
            });
            await refetchLinking();
        } catch (error) {
            console.error('Error updating operator code:', error);
        }
    };

    if (isLoading || isLoadingCircles || isLoadingOperators) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-full min-h-screen bg-white">
            <div className="p-4">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[30%]">API Name</TableHead>
                            <TableHead className="w-[15%]">Url</TableHead>
                            <TableHead className="w-[15%]">Method</TableHead>
                            <TableHead className="w-[15%]">Status</TableHead>
                            <TableHead className="w-[25%]">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {groupedData.map((api) => (
                            <Fragment key={api.id} >
                                <TableRow>
                                    <TableCell className="font-medium">
                                        <div className="flex items-center gap-2">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => {
                                                    setExpandedApis((prev) => ({
                                                        ...prev,
                                                        [api.id]: !prev[api.id],
                                                    }));
                                                }}
                                            >
                                                {expandedApis[api.id] ? (
                                                    <ChevronDown className="h-4 w-4" />
                                                ) : (
                                                    <ChevronRight className="h-4 w-4" />
                                                )}
                                            </Button>
                                            {api.name}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        {api.provider_api.url || '---'}
                                    </TableCell>
                                    <TableCell>
                                        {api.provider_api.method || '---'}
                                    </TableCell>
                                    <TableCell>
                                        <Switch
                                            checked={apiStatuses[api.id] ?? true}
                                            onCheckedChange={(checked) =>
                                                setApiStatuses((prev) => ({
                                                    ...prev,
                                                    [api.id]: checked,
                                                }))
                                            }
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <div className='flex gap-2'>
                                            <Button variant='outline' className='text-green-600 font-bold'>Params</Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                                {expandedApis[api.id] && (
                                    <>
                                        <TableRow>
                                            <TableCell className="pl-12">
                                                <div className="flex items-center gap-2">
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        onClick={() => {
                                                            setExpandedCircles((prev) => ({
                                                                ...prev,
                                                                [api.id]: !prev[api.id],
                                                            }));
                                                        }}
                                                    >
                                                        {expandedCircles[api.id] ? (
                                                            <ChevronDown className="h-4 w-4" />
                                                        ) : (
                                                            <ChevronRight className="h-4 w-4" />
                                                        )}
                                                    </Button>
                                                    <span className="font-medium">Circles</span>
                                                </div>
                                            </TableCell>
                                            <TableCell colSpan={2} className="w-full" />
                                        </TableRow>
                                        {expandedCircles[api.id] && circles?.map((circle) => {
                                            const existingLink = linking?.data?.find(
                                                link => link.provider_api.id === api.id && link.circle.id === circle.id
                                            );
                                            return (
                                                <TableRow key={circle.id} className="bg-muted/50">
                                                    <TableCell className="pl-16 w-[40%]">
                                                        <div className="flex items-center gap-2">
                                                            {circle.name}
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="w-[50%]">
                                                        <CircleRow
                                                            circle={circle}
                                                            circleCode={existingLink?.circle_code || circleCodes[circle.id] || ''}
                                                            onCircleCodeChange={(circleId: string, newCode: string) => handleSaveCircle(api.id, circleId, newCode)}
                                                        />
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })}
                                        <TableRow>
                                            <TableCell className="pl-12">
                                                <div className="flex items-center gap-2">
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        onClick={() => {
                                                            setExpandedOperators((prev) => ({
                                                                ...prev,
                                                                [api.id]: !prev[api.id],
                                                            }));
                                                        }}
                                                    >
                                                        {expandedOperators[api.id] ? (
                                                            <ChevronDown className="h-4 w-4" />
                                                        ) : (
                                                            <ChevronRight className="h-4 w-4" />
                                                        )}
                                                    </Button>
                                                    <span className="font-medium">Operators</span>
                                                </div>
                                            </TableCell>
                                            <TableCell colSpan={2} className="w-full" />
                                        </TableRow>
                                        {expandedOperators[api.id] && operators?.map((operator) => {
                                            const existingLink = linking?.data?.find(
                                                link => link.provider_api.id === api.id && link.operator.id === operator.id
                                            );
                                            return (
                                                <TableRow key={operator.id} className="bg-muted/50">
                                                    <TableCell className="pl-16 w-[40%]">
                                                        <div className="flex items-center gap-2">
                                                            {operator.name}
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="w-[50%]">
                                                        <OperatorRow
                                                            operator={operator}
                                                            operatorCode={existingLink?.operator_code || operatorCodes[operator.id] || ''}
                                                            onOperatorCodeChange={handleOperatorCodeChange}
                                                        />
                                                    </TableCell>
                                                    <TableCell className="w-[10%]">
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            onClick={() => handleSaveOperator(api.id, operator.id)}
                                                        >
                                                            <Save className="h-4 w-4" />
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })}
                                    </>
                                )}
                            </Fragment>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <Separator />
            {isModifyDialogOpen && selectedApi && (
                <ModifyDialog
                    isOpen={isModifyDialogOpen}
                    onOpenChange={setIsModifyDialogOpen}
                    link={selectedApi}
                    onSave={async () => {
                        setIsModifyDialogOpen(false);
                        setSelectedApi(null);
                        await refetchLinking();
                    }}
                />
            )}
        </div>
    );
}
import React, { useCallback } from 'react';
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, Edit2, Signal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { IOperatorApi } from '@/types/operator-apis';
import { toast } from 'sonner';
import { IEditOperatorApiRequest } from '@/hooks/operator-apis/use-create-operator-api';

export interface OperatorApiCardProps {
    operatorApis: IOperatorApi[];
    refetchOperatorApis: () => void;
    handleEdit: (operator: IEditOperatorApiRequest) => void;
    isDeleting: boolean;
    deleteOpApi: (id: string) => void;
}


const OperatorApiCard = ({ isDeleting, deleteOpApi, operatorApis, handleEdit, refetchOperatorApis }: OperatorApiCardProps) => {

    const onSuccess = () => {
        toast('Request Successfull!');
        refetchOperatorApis();
    };
    const onError = () => {
        toast('Request Failed!');
        refetchOperatorApis();
    };

    const handleDelete = useCallback((id: string) => {
        if (window.confirm('Are you sure you want to delete this operator?')) {
            deleteOpApi(id);
        }
    }, []);

    return (
        operatorApis.map(({ id, operator, api, code, status, isModified }) => (
            <Card key={id} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-4">
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <Signal className="h-5 w-5 text-gray-500 mr-2" />
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {operator.name}
                                </h3>
                            </div>
                            <div className="flex flex-col  gap-2 justify-between">
                                <Badge variant="secondary" className="text-sm w-fit">
                                    {code}
                                </Badge>
                                <div className="text-sm text-gray-500">
                                    {api.name}
                                </div>
                            </div>
                        </div>

                        <Badge
                            variant={status.toLowerCase() === 'active' ? "outline" : "secondary"}
                            className={`w-fit ${status.toLowerCase() === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}
                        >
                            {status.toLowerCase() === 'active' ? 'ACTIVE' : 'INACTIVE'}
                        </Badge>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2 pt-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit({ id, operator_id: operator.id, api_id: api.id, code, status: status.toLowerCase() === 'active' ? 'ACTIVE' : 'INACTIVE' })}
                    >
                        <Edit2 className="h-4 w-4 mr-1" />
                        Edit
                    </Button>
                    <Button
                        disabled={isDeleting}
                        variant="outline"
                        size="sm"
                        className="text-red-600 border-red-200 hover:bg-red-50"
                        onClick={() => handleDelete(`${id}`)}
                    >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Delete
                    </Button>

                </CardFooter>
            </Card>
        ))

    );
}


export default OperatorApiCard;


// {isModified && (
//     <Button
//         variant="outline"
//         size="sm"
//         className="bg-green-500 text-white hover:bg-green-600"
//         onClick={() => handleSaveChanges(`${id}`)}
//     >
//         <Save className="h-4 w-4 mr-1" />
//         Save
//     </Button>
// )}
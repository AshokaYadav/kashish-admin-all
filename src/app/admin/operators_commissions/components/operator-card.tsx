import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Switch } from '@/components/ui/switch';
import { Signal, Edit2, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { IOperatorCommission } from "@/types/operator-commissions";
import { useUpdateOperatorCommission } from "@/hooks/operator-commission/use-update-operator-commission";
import { toast } from "sonner";



export interface OperatorCommissionCardProps {
    operatorCommission: IOperatorCommission;
    handleDelete: (id: string) => void;
    handleEdit: (operatorCommission: IOperatorCommission) => void;
    refetch: () => void;
}

export default function OperatorCommissionCard({ operatorCommission, handleDelete, handleEdit, refetch }: OperatorCommissionCardProps) {
    const onSuccess = () => {
        toast('Request Successfull!');
        refetch()
    };
    const onError = () => {
        toast('Request Failed!');
    };

    const { update, isUpdating } = useUpdateOperatorCommission(onSuccess, onError);

    const onStatusChange = (operatorCommission: IOperatorCommission, status: 'ACTIVE' | 'INACTIVE') => {
        if (!operatorCommission) return;
        const { id, operator, api_margin: apiMargin,
            admin_margin: adminMargin,
            distributor_margin: distributorMargin,
            retailer_margin: retailerMargin, } = operatorCommission;
        update({ id, apiMargin, adminMargin, distributorMargin, retailerMargin, operatorId: operator.id, status });
    };
    return (
        <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                    <div className="space-y-2">
                        <div className="flex items-center">
                            <Signal className="h-5 w-5 text-gray-500 mr-2" />
                            <h3 className="text-lg font-semibold text-gray-800">
                                {operatorCommission.operator.name}
                            </h3>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Badge
                                variant={operatorCommission.status.toLowerCase() === 'active' ? "outline" : "secondary"}
                                className={`w-fit ${status.toLowerCase() === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}
                            >
                                {operatorCommission.status.toLowerCase() === 'active' ? 'ACTIVE' : 'INACTIVE'}
                            </Badge>
                        </div>
                    </div>
                    <Switch
                        disabled={isUpdating}
                        checked={operatorCommission.status.toString().toLowerCase() === 'active'}
                        onCheckedChange={(val) => onStatusChange(operatorCommission, val ? 'ACTIVE' : 'INACTIVE')}
                        className="ml-4"
                    />
                </div>

                {/* Margins Section */}
                <div className="mt-4 space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="bg-gray-50 p-2 rounded">
                            <div className="text-sm text-gray-600">Admin</div>
                            <div className="font-medium">{operatorCommission.admin_margin}%</div>
                        </div>
                        <div className="bg-gray-50 p-2 rounded">
                            <div className="text-sm text-gray-600">Retailer</div>
                            <div className="font-medium">{operatorCommission.retailer_margin}%</div>
                        </div>
                        <div className="bg-gray-50 p-2 rounded">
                            <div className="text-sm text-gray-600">Distributor</div>
                            <div className="font-medium">{operatorCommission.distributor_margin}%</div>
                        </div>
                        <div className="bg-gray-50 p-2 rounded">
                            <div className="text-sm text-gray-600">API</div>
                            <div className="font-medium">{operatorCommission.api_margin}%</div>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2 pt-2">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(operatorCommission)}
                >
                    <Edit2 className="h-4 w-4 mr-1" />
                    Edit
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    className="text-red-600 border-red-200 hover:bg-red-50"
                    onClick={() => handleDelete(operatorCommission.id)}
                >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Delete
                </Button>
            </CardFooter>
        </Card>
    )
}
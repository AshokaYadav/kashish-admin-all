import { Button } from "@/components/ui/button";
import { Switch } from '@/components/ui/switch';
import { Signal, Edit2, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { IOperatorCommission } from "@/types/operator-commissions";
import { useUpdateOperatorCommission } from "@/hooks/operator-commission/use-update-operator-commission";
import { toast } from "sonner";

export interface OperatorCommissionRowProps {
    operatorCommission: IOperatorCommission;
    handleDelete: (id: string) => void;
    handleEdit: (operatorCommission: IOperatorCommission) => void;
    refetch: () => void;
}

export default function OperatorCommissionRow({
    operatorCommission,
    handleDelete,
    handleEdit,
    refetch
}: OperatorCommissionRowProps) {
    const onSuccess = () => {
        toast('Request Successful!');
        refetch();
    };

    const onError = () => {
        toast('Request Failed!');
    };

    const { update, isUpdating } = useUpdateOperatorCommission(onSuccess, onError);

    const onStatusChange = (operatorCommission: IOperatorCommission, status: 'ACTIVE' | 'INACTIVE') => {
        if (!operatorCommission) return;
        const {
            id,
            operator,
            api_margin: apiMargin,
            admin_margin: adminMargin,
            distributor_margin: distributorMargin,
            retailer_margin: retailerMargin,
        } = operatorCommission;

        update({
            id,
            apiMargin,
            adminMargin,
            distributorMargin,
            retailerMargin,
            operatorId: operator.id,
            status
        });
    };

    return (
        <tr className="border-b hover:bg-gray-50">
            <td className="px-4 py-3">
                <div className="flex items-center">
                    <Signal className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="font-medium text-gray-800">
                        {operatorCommission.operator.name}
                    </span>
                </div>
            </td>
            <td className="px-4 py-3">
                <Badge
                    variant={operatorCommission.status.toLowerCase() === 'active' ? "outline" : "secondary"}
                    className={`w-fit ${operatorCommission.status.toLowerCase() === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}
                >
                    {operatorCommission.status.toLowerCase() === 'active' ? 'ACTIVE' : 'INACTIVE'}
                </Badge>
            </td>
            <td className="px-4 py-3 text-center">
                <span className="font-medium">{operatorCommission.admin_margin}%</span>
            </td>
            <td className="px-4 py-3 text-center">
                <span className="font-medium">{operatorCommission.retailer_margin}%</span>
            </td>
            <td className="px-4 py-3 text-center">
                <span className="font-medium">{operatorCommission.distributor_margin}%</span>
            </td>
            <td className="px-4 py-3 text-center">
                <span className="font-medium">{operatorCommission.api_margin}%</span>
            </td>
            <td className="px-4 py-3">
                <Switch
                    disabled={isUpdating}
                    checked={operatorCommission.status.toString().toLowerCase() === 'active'}
                    onCheckedChange={(val) => onStatusChange(operatorCommission, val ? 'ACTIVE' : 'INACTIVE')}
                />
            </td>
            <td className="px-4 py-3">
                <div className="flex items-center gap-2 justify-end">
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
                </div>
            </td>
        </tr>
    );
}
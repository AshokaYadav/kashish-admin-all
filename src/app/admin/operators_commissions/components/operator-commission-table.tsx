import { IOperatorCommission } from "@/types/operator-commissions";
import OperatorCommissionRow from "./operator-commission-row";

interface OperatorCommissionTableProps {
    operatorCommissions: IOperatorCommission[];
    handleDelete: (id: string) => void;
    handleEdit: (operatorCommission: IOperatorCommission) => void;
    refetch: () => void;
}

export default function OperatorCommissionTable({
    operatorCommissions,
    handleDelete,
    handleEdit,
    refetch,
}: OperatorCommissionTableProps) {
    return (
        <div className="rounded-md border">
            <div className="overflow-x-auto">
                <table className="w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                                Operator
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                                Status
                            </th>
                            <th className="px-4 py-3 text-center text-sm font-medium text-gray-500">
                                Admin %
                            </th>
                            <th className="px-4 py-3 text-center text-sm font-medium text-gray-500">
                                Retailer %
                            </th>
                            <th className="px-4 py-3 text-center text-sm font-medium text-gray-500">
                                Distributor %
                            </th>
                            <th className="px-4 py-3 text-center text-sm font-medium text-gray-500">
                                API %
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                                Active
                            </th>
                            <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {operatorCommissions.length === 0 ? (
                            <tr>
                                <td colSpan={8} className="px-4 py-8 text-center text-gray-500">
                                    No operator commissions found
                                </td>
                            </tr>
                        ) : (
                            operatorCommissions.map((operatorCommission) => (
                                <OperatorCommissionRow
                                    key={operatorCommission.id}
                                    operatorCommission={operatorCommission}
                                    handleDelete={handleDelete}
                                    handleEdit={handleEdit}
                                    refetch={refetch}
                                />
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
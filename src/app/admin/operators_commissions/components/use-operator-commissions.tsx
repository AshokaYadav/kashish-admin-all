import useGetOperatorCommissions from "@/hooks/operator-commission/use-get-operator-commissions";
import { useGetAllOperators } from "@/hooks/operators/use-get-all-operators";
import { IOperatorCommission } from "@/types/operator-commissions";
import { useState } from "react";
import { IEditOperatorCommission } from "./edit-commission-dialog";
import { useDeleteCommission } from "@/hooks/operator-commission/use-delete-commission";
import { toast } from "sonner";
import { useGetDistributors } from "@/hooks/users/use-get-distributors";

export default function useOperatorCommissions() {
    const { isLoading: isLoadingDistributors, refetch: refetchDistributors, distributors } = useGetDistributors();
    const [selectedDistributor, setSelectedDistributor] = useState<string | null>(null);
    const { data: operatorCommissions, isLoading: isLoadingOperatorCommissions, refetch: refetchOperatorCommissions } = useGetOperatorCommissions(selectedDistributor || '');


    // State management
    const [showAddDialog, setShowAddDialog] = useState<boolean>(false);
    const [showEditDialog, setShowEditDialog] = useState<boolean>(false);
    const [editingOperatorMargins, setEditingOperatorMargins] = useState<IEditOperatorCommission | null>(null);

    const { data: operators, isLoading: isLoadingOperators, refetch: refetchOperators } = useGetAllOperators();
    const { delete: deleteOpComm, isDeleting } = useDeleteCommission(refetchOperatorCommissions, (err) => toast('Error Deleting', { description: err }));

    const handleDelete = (id: string) => {
        deleteOpComm(id);
    }

    const handleEdit = (operatorCommission: IOperatorCommission) => {
        const { createdAt, updatedAt, operator, ...rest } = operatorCommission;
        setEditingOperatorMargins({ ...rest, operator_id: operator.id });
        setShowEditDialog(true);
    }

    return {
        handleDelete, handleEdit,
        operatorCommissions, isLoadingOperatorCommissions, refetchOperatorCommissions,
        showAddDialog, showEditDialog, setShowAddDialog, setShowEditDialog,
        editingOperatorMargins, setEditingOperatorMargins,
        operators, isLoadingOperators, refetchOperators,

        selectedDistributor, setSelectedDistributor,
        isLoadingDistributors, refetchDistributors, distributors,
    }
}
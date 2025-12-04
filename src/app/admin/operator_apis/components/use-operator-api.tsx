import { useGetApis } from "@/hooks/apis/use-get-apis";
import { useGetAllCategories } from "@/hooks/categories/use-get-all-category";
import { IEditOperatorApiRequest } from "@/hooks/operator-apis/use-create-operator-api";
import { useDeleteOperatorApi } from "@/hooks/operator-apis/use-delete-op-api";
import { useGetOperatorsApisByOperators } from "@/hooks/operator-apis/use-get-operator-apis-by-operators";
import { useGetOperatorsByCategory } from "@/hooks/operators/use-get-operators-by-category";
import { useEffect, useState } from "react";
import { toast } from "sonner";


export const useOperatorApi = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [showAddDialog, setShowAddDialog] = useState<boolean>(false);
    const [showEditDialog, setShowEditDialog] = useState<boolean>(false);
    const [editingOperatorApi, setEditingOperatorApi] = useState<IEditOperatorApiRequest | null>(null);

    const { data: apis, isLoading: isLoadingApis, refetch: refetchApis } = useGetApis();
    const { data: categories, isLoading: isLoadingCategories, refetch: refetchCategories } = useGetAllCategories();
    const { data: operators, isLoading: isLoadingOperator, refetch: refetchOperator } = useGetOperatorsByCategory(selectedCategory);
    const { data: operatorApis = [], isLoading: isLoadingOperatorApis, refetch: refetchOperatorApis } = useGetOperatorsApisByOperators(operators?.map(({ id }) => id));

    const { isDeleting, delete: deleteOpApi } = useDeleteOperatorApi(refetchOperatorApis, err => toast('Error Deleting', { description: err }))
    useEffect(() => {
        if (categories?.length && !selectedCategory) {
            setSelectedCategory(categories[categories.length - 1].id);
        }
    }, [categories, selectedCategory]);

    const handleEdit = (operator: IEditOperatorApiRequest) => {
        setEditingOperatorApi(operator);
        setShowEditDialog(true);
    };



    return {
        selectedCategory,
        setSelectedCategory,
        deleteOpApi, isDeleting,
        apis, isLoadingApis, refetchApis,
        categories, isLoadingCategories, refetchCategories,
        operators, isLoadingOperator, refetchOperator,
        operatorApis, isLoadingOperatorApis, refetchOperatorApis,
        showAddDialog, setShowAddDialog,
        showEditDialog, setShowEditDialog,
        editingOperatorApi, setEditingOperatorApi,
        handleEdit
    };
}
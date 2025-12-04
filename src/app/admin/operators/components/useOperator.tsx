import { INewOperatorRequest, IUpdateOperator } from "@/apis/operator";
import { useGetAllCategories } from "@/hooks/categories/use-get-all-category";
import { useCreateOperator } from "@/hooks/operators/use-create-operator";
import { useDeleteOperator } from "@/hooks/operators/use-delete-operator";
import { useGetOperatorsByCategory } from "@/hooks/operators/use-get-operators-by-category";
import { useUpdateOperator } from "@/hooks/operators/use-update-operator";
import { useEffect, useState } from "react";
import { toast } from "sonner";


// id, name, category_id, status, createdAt, updatedAt


const defaultNewOperator: INewOperatorRequest = {
    name: '',
    category_id: '',
};

const defaultEditOperator: IUpdateOperator = {
    id: '',
    status: 'ACTIVE',
    name: '',
    category_id: '',
};


export default function useOperator() {
    const { data: categories, isLoading: isLoadingCategories, refetch: refetchCategories } = useGetAllCategories();
    useEffect(() => { setSelectedCategory((categories || [])[0]?.id) }, [categories]);
    const [selectedCategory, setSelectedCategory] = useState<string>();
    const { data: operators, isLoading: isLoadingOperators, refetch: refetchOperators } = useGetOperatorsByCategory(selectedCategory, true);


    const [editingOperator, setEditingOperator] = useState<IUpdateOperator>({ ...defaultEditOperator });
    const [newOperator, setNewOperator] = useState<INewOperatorRequest>({ ...defaultNewOperator });
    const [showAddDialog, setShowAddDialog] = useState<boolean>(false);
    const [showEditDialog, setShowEditDialog] = useState<boolean>(false);

    const handleSuccess = () => {
        toast('Successfull');
        refetchOperators();
        return {
            create: () => {
                setShowAddDialog(false);
                setNewOperator({ ...defaultNewOperator })
            },
            update: () => {
                setShowEditDialog(false);
                setEditingOperator({ ...defaultEditOperator })
            },
        }
    }

    const handleError = () => {
        toast('Error');
        refetchOperators();
        return {
            create: () => {
                setShowAddDialog(false);
                setNewOperator({ ...defaultNewOperator })
            },
            update: () => {
                setShowEditDialog(false);
                setEditingOperator({ ...defaultEditOperator })
            },
        }
    }

    const { update, isUpdating } = useUpdateOperator(() => handleSuccess().update(), () => handleError().update());
    const { create, isCreating } = useCreateOperator(() => handleSuccess().create(), () => handleError().create());

    const handleEdit = (operator: IUpdateOperator) => {
        setEditingOperator({ ...operator });
        setShowEditDialog(true);
    }

    const handleEditChange = (key: string, value: string | File) => {
        if (!editingOperator) return;
        setEditingOperator({ ...editingOperator, [key]: value })
    }

    const handleSaveEditClick = () => {
        if (!editingOperator || !editingOperator.name.trim() || !editingOperator.category_id.trim()) return toast('operator id and name are required');
        update({ ...editingOperator })
    }

    const handleStatusChange = (operator: IUpdateOperator, status: 'ACTIVE' | 'INACTIVE') => {
        if (!operator || !status) return;
        const { id, name, category_id } = operator;
        update({ id, name, category_id, status });
    }

    const handleCreateOperator = () => {
        if (!newOperator || !newOperator.category_id || newOperator.name.trim().length <= 0) return;

        console.log(newOperator);
    
        create(newOperator);
    }

    const { delete: deleteOperator, isDeleting } = useDeleteOperator(refetchOperators, (err) => toast('Error Deleting', { description: err }))

    const handleDelete = (id: string) => {
        deleteOperator(id);
    }

    return {
        newOperator, setNewOperator, editingOperator, setEditingOperator,
        selectedCategory, setSelectedCategory, showAddDialog, showEditDialog, setShowAddDialog, setShowEditDialog,
        categories, isLoadingCategories, refetchCategories,
        operators, isLoadingOperators, refetchOperators,
        handleStatusChange, handleSaveEditClick, handleEdit, handleEditChange,
        handleCreateOperator, handleDelete,
        update, isUpdating, create, isCreating,
    };
}
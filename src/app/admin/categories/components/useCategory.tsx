import { TNewCircleApiRequest } from "@/apis/circle";
import { useCreateCategory } from "@/hooks/categories/use-create-category";
import { useDeleteCategory } from "@/hooks/categories/use-delete-category";
import { useGetAllCategories } from "@/hooks/categories/use-get-all-category";
import { useUpdateCategory } from "@/hooks/categories/use-update-category";
import { useState } from "react";
import { toast } from "sonner";

export interface ICircle {
    id: string;
    name: string;
    status: 'ACTIVE' | 'INACTIVE'
}

export default function useCategory() {
    const {
        refetch: refetchCategories,
        isLoading: isLoadingCategories,
        data: categories
    } = useGetAllCategories();

    const [editingCircle, setEditingCircle] = useState<ICircle | null>(null);
    const [showAddDialog, setShowAddDialog] = useState<boolean>(false);
    const [showEditDialog, setShowEditDialog] = useState<boolean>(false);
    const [newCircle, setNewCircle] = useState<TNewCircleApiRequest>('');

    const handleSuccess = () => {
        toast('Successfull');
        refetchCategories();

        return {
            create: () => {
                setShowAddDialog(false);
                setNewCircle('');
            },
            update: () => {
                setShowEditDialog(false);
                setEditingCircle(null);
            },
        }
    }

    const handleError = () => {
        toast('Error');
        refetchCategories();
        return {
            create: () => {
                setShowAddDialog(false);
                setNewCircle('');
            },
            update: () => {
                setShowEditDialog(false);
                setEditingCircle(null);
            },
        }
    }

    const { create, isCreating } = useCreateCategory(() => handleSuccess().create(), () => handleError().create());
    const { update, isUpdating } = useUpdateCategory(() => handleSuccess().update(), () => handleError().update());

    const handleEdit = (category: ICircle) => {
        setEditingCircle({ ...category });
        setShowEditDialog(true);
    }

    const handleEditChange = (key: string, value: string) => {
        if (!editingCircle) return;
        setEditingCircle({ ...editingCircle, [key]: value })
    }

    const handleSaveEditClick = () => {
        if (!editingCircle || !editingCircle.name.trim()) return toast('Circle name and code are required');
        update({ ...editingCircle })
    }

    const handleStatusChange = (category: ICircle, status: 'ACTIVE' | 'INACTIVE') => {
        if (!category || !status) return;
        const { id, name } = category;
        update({ id, name, status });
    }

    const handleCreateCircle = () => {
        if (!newCircle || newCircle.trim().length <= 0) return;
        create(newCircle.trim());
    }

    const { delete: deleteCategory, isDeleting } = useDeleteCategory(refetchCategories, (err) => toast('Error deleting', { description: err }));
    const handleDelete = (id: string) => {
        deleteCategory(id);
    }
    return {
        categories, isLoadingCategories, refetchCategories,
        editingCircle, setEditingCircle,
        newCircle, setNewCircle,
        showAddDialog, setShowAddDialog,
        showEditDialog, setShowEditDialog,
        create, isCreating, handleCreateCircle,
        update, handleEdit, handleEditChange, handleSaveEditClick, isUpdating,
        handleDelete, handleStatusChange
    };
}
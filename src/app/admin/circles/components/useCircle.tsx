import { TNewCircleApiRequest } from "@/apis/circle";
import { useCreateCircle } from "@/hooks/circles/use-create-circle";
import { useDeleteCircle } from "@/hooks/circles/use-delete-category";
import { useGetAllCircles } from "@/hooks/circles/use-get-all-circles";
import { useUpdateCircle } from "@/hooks/circles/use-update-circle";
import { useState } from "react";
import { toast } from "sonner";

export interface ICircle {
    id: string;
    name: string;
    status: 'ACTIVE' | 'INACTIVE'
}

export default function useCircle() {
    const {
        refetch: refetchCircles,
        isLoading: isLoadingCircles,
        data: circles
    } = useGetAllCircles();


    const [editingCircle, setEditingCircle] = useState<ICircle | null>(null);
    const [showAddDialog, setShowAddDialog] = useState<boolean>(false);
    const [showEditDialog, setShowEditDialog] = useState<boolean>(false);
    const [newCircle, setNewCircle] = useState<TNewCircleApiRequest>('');

    const handleSuccess = () => {
        toast('Successfull');
        refetchCircles();

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
        refetchCircles();
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

    const { create, isCreating } = useCreateCircle(() => handleSuccess().create(), () => handleError().create());
    const { update, isUpdating } = useUpdateCircle(() => handleSuccess().update(), () => handleError().update());

    const handleEdit = (circle: ICircle) => {
        setEditingCircle({ ...circle });
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

    const handleStatusChange = (circle: ICircle, status: 'ACTIVE' | 'INACTIVE') => {
        if (!circle || !status) return;
        const { id, name } = circle;
        update({ id, name, status });
    }

    const handleCreateCircle = () => {
        if (!newCircle || newCircle.trim().length <= 0) return;
        create(newCircle.trim());
    }

    const { delete: deleteCircle, isDeleting } = useDeleteCircle(refetchCircles, (err) => toast('Error Deleting', { description: err }));

    const handleDelete = (id: string) => {
        deleteCircle(id);
    }
    return {
        circles, isLoadingCircles, refetchCircles,
        editingCircle, setEditingCircle,
        newCircle, setNewCircle,
        showAddDialog, setShowAddDialog,
        showEditDialog, setShowEditDialog,
        create, isCreating, handleCreateCircle,
        update, handleEdit, handleEditChange, handleSaveEditClick, isUpdating,
        handleDelete, handleStatusChange
    };
}
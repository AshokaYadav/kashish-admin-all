'use client';

import React, { useCallback } from 'react';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { toast } from 'sonner';
import { IEditOperatorApiRequest } from '@/hooks/operator-apis/use-create-operator-api';
import { useUpdateOperatorApi } from '@/hooks/operator-apis/use-update-operator-apis';
import { Switch } from '@/components/ui/switch';
import { ISubObject } from '@/types/operator-apis';

export interface IEditOperatorApiDialogProps {
    editingOperatorApi: IEditOperatorApiRequest | null;
    operators: ISubObject[],
    apis: ISubObject[],
    showEditDialog: boolean;
    setEditingOperatorApi: (data: IEditOperatorApiRequest | null) => void;
    setShowEditDialog: (data: any) => void;
    refetchOperatorApis: () => void;
}

export default function EditOperatorApiDialog({ editingOperatorApi, operators, apis, showEditDialog, setShowEditDialog, setEditingOperatorApi, refetchOperatorApis }: IEditOperatorApiDialogProps) {

    const onUpdateSuccess = () => {
        toast("Success", {
            description: "Operator API updated successfully",
        });
        setShowEditDialog(false);
        refetchOperatorApis();
    };

    const onUpdateError = () => {
        toast("Error", {
            description: "Failed to update operator API. Please try again.",
        });
    };

    const { update, isUpdating } = useUpdateOperatorApi(onUpdateSuccess, onUpdateError);

    const handleSaveEdit = useCallback(() => {
        if (!editingOperatorApi) return;

        const updates = {
            id: editingOperatorApi.id,
            code: editingOperatorApi.code,
            status: editingOperatorApi.status
        };

        update(updates);
    }, [editingOperatorApi]);


    const handleUpdateEditOperatorApi = (key: string, value: string) => {
        setEditingOperatorApi(editingOperatorApi ? { ...editingOperatorApi, [key]: value } : null)
    };

    return (
        <Dialog
            open={showEditDialog}
            onOpenChange={(open) => {
                setShowEditDialog(open);
                if (!open) setEditingOperatorApi(null);
            }}
        >
            <DialogContent className="sm:max-w-[400px]">
                <DialogHeader>
                    <DialogTitle>Edit Operator API</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                        <Label htmlFor="edit-code">Operator API Code</Label>
                        <Input
                            id="edit-code"
                            value={editingOperatorApi?.code || ''}
                            onChange={(e) => handleUpdateEditOperatorApi('code', e.target.value)}
                            placeholder="Enter operator API code"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <Label htmlFor="edit-status">Status</Label>
                        <Switch
                            id="edit-status"
                            checked={editingOperatorApi?.status.toLowerCase() === 'active'}
                            onCheckedChange={(checked: boolean) => handleUpdateEditOperatorApi('status', checked ? 'ACTIVE' : 'INACTIVE')}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Operator</Label>
                        <div className="p-2 bg-gray-50 rounded-md">
                            {operators.find(({ id }) => id === editingOperatorApi?.operator_id)?.name}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label>API</Label>
                        <div className="p-2 bg-gray-50 rounded-md">
                            {apis.find(({ id }) => id === editingOperatorApi?.api_id)?.name}
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        variant="outline"
                        onClick={() => {
                            setShowEditDialog(false);
                            setEditingOperatorApi(null);
                        }}
                        disabled={isUpdating}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSaveEdit}
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                        disabled={isUpdating}
                    >
                        {isUpdating ? "Saving..." : "Save Changes"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
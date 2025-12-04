'use client';

import React from 'react';
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



export interface IEditCcategoryProps {
    editingCategory: any;
    showEditDialog: boolean;
    setShowEditDialog: (val: boolean) => void;
    handleSaveEdit: () => void;
    handleEditChange: (key: string, value: string) => void;
}

export default function EditCategoryDialog({ editingCategory, showEditDialog, setShowEditDialog, handleEditChange, handleSaveEdit }: IEditCcategoryProps) {

    return (
        <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
            <DialogContent className="sm:max-w-[400px]">
                <DialogHeader>
                    <DialogTitle>Edit Category</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                        <Label htmlFor="edit-name">Category Name</Label>
                        <Input
                            id="edit-name"
                            value={editingCategory?.name || ''}
                            onChange={(e) => handleEditChange('name', e.target.value)}
                            placeholder="Enter circle name"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        variant="outline"
                        onClick={() => setShowEditDialog(false)}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSaveEdit}
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                        Save Changes
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
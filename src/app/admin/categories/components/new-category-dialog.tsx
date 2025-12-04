'use client';

import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
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
import { TNewCircleApiRequest } from '@/apis/circle';

export interface AddCategoryDialogProps {
    newCategory: TNewCircleApiRequest,
    setNewCategory: (circle: TNewCircleApiRequest) => void
    showAddDialog: boolean;
    setShowAddDialog: (val: boolean) => void;
    isCreating: boolean;
    handleCreateCircle: () => void;
}

export default function AddCategoryDialog({ newCategory, setNewCategory, showAddDialog, setShowAddDialog, isCreating, handleCreateCircle }: AddCategoryDialogProps) {
    return (
        <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
            <DialogContent className="sm:max-w-[400px]">
                <DialogHeader>
                    <DialogTitle>Add New Category</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Category Name</Label>
                        <Input
                            id="name"
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value.trim())}
                            placeholder="Enter category name"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        variant="outline"
                        onClick={() => setShowAddDialog(false)}
                    >
                        Cancel
                    </Button>
                    <Button
                        disabled={isCreating}
                        onClick={handleCreateCircle}
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                        Add Category
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
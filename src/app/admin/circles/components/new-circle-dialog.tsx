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

export interface AddCircleDialogProps {
    newCircle: TNewCircleApiRequest,
    setNewCircle: (circle: TNewCircleApiRequest) => void
    showAddDialog: boolean;
    setShowAddDialog: (val: boolean) => void;
    isCreating: boolean;
    handleCreateCircle: () => void;
}

export default function AddCircleDialog({ newCircle, setNewCircle, showAddDialog, setShowAddDialog, isCreating, handleCreateCircle }: AddCircleDialogProps) {
    return (
        <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
            <DialogContent className="sm:max-w-[400px]">
                <DialogHeader>
                    <DialogTitle>Add New Circle</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Circle Name</Label>
                        <Input
                            id="name"
                            value={newCircle}
                            onChange={(e) => setNewCircle(e.target.value.trim())}
                            placeholder="Enter circle name"
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
                        Add Circle
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
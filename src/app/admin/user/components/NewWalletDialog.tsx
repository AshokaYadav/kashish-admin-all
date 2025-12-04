import React, { useState } from 'react';

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

import { Switch } from '@/components/ui/switch';

export interface NewWalletDialogProps {
    open: boolean, setOpen: (val: boolean) => void, handleAddWallet: (val: any) => void
}

export default function NewWalletDialog({ open, setOpen, handleAddWallet }: NewWalletDialogProps) {
    const [newWallet, setNewWallet] = useState<any>();
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[400px]">
                <DialogHeader>
                    <DialogTitle>Add New Wallet</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                        <Label htmlFor="owner">Owner Name</Label>
                        <Input
                            id="owner"
                            value={newWallet?.owner}
                            onChange={(e) => setNewWallet({ ...newWallet, owner: e.target.value })}
                            placeholder="Enter owner name"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="balance">Initial Balance</Label>
                        <Input
                            id="balance"
                            type="number"
                            value={newWallet?.balance}
                            onChange={(e) => setNewWallet({ ...newWallet, balance: parseFloat(e.target.value) || 0 })}
                            placeholder="Enter initial balance"
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Label htmlFor="status">Active Status</Label>
                        <Switch
                            id="status"
                            checked={newWallet?.status === 'ACTIVE'}
                            onCheckedChange={(val) => setNewWallet({
                                ...newWallet,
                                status: val ? 'ACTIVE' : 'INACTIVE'
                            })}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        variant="outline"
                        onClick={() => setOpen(false)}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleAddWallet}
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                        Add Wallet
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
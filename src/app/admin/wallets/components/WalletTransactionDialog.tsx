'use client';

import React, { useEffect } from 'react';

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
import { IApisWalletsTransactions, IApiWalletTransactionRequest, IUsersWalletsTransactions, IUserWalletTransactionRequest } from '@/apis/wallets';



export interface WalletTransactionDialogProps {
    open: boolean;
    setOpen: (val: boolean) => void;

    isCredit: boolean;
    isDebiting: boolean;
    isCredting: boolean;
    isApiWalletsTab: boolean;
    selectedWallet: IUsersWalletsTransactions | IApisWalletsTransactions | null;

    credit: (data: IUserWalletTransactionRequest | IApiWalletTransactionRequest) => void;
    debit: (data: IUserWalletTransactionRequest | IApiWalletTransactionRequest) => void;

    transactionAmount: number;
    setTransactionAmount: (val: number) => void;
}

export default function WalletTransactionDialog({
    open, setOpen, isCredit, selectedWallet,
    isCredting, isDebiting, credit, debit,
    setTransactionAmount, transactionAmount,
    isApiWalletsTab
}: WalletTransactionDialogProps) {

    const handleOnClick = () => {
        const fx = isCredit ? credit : debit;
        const payload = isApiWalletsTab ? { api_id: (selectedWallet as IApisWalletsTransactions)?.api_id, amount: transactionAmount } : { userId: (selectedWallet as IUsersWalletsTransactions)?.user_id, amount: transactionAmount }
        fx(payload);
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[400px]">
                <DialogHeader>
                    <DialogTitle>
                        {isCredit ? 'Credit Amount' : 'Debit Amount'}
                    </DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                        <Label>Wallet Owner</Label>

                        <div className="text-sm text-gray-700">
                            {open && selectedWallet && (isApiWalletsTab ? (selectedWallet as IApisWalletsTransactions).api : (selectedWallet as IUsersWalletsTransactions).user).name}
                            {/* {(selectedWallet as IUsersWalletsTransactions)?.user?.name} */}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label>Current Balance</Label>
                        <div className="text-sm text-gray-700">₹{(selectedWallet as IUsersWalletsTransactions)?.balance.toFixed(2)}</div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="amount">Amount</Label>
                        <Input
                            id="amount"
                            type="number"
                            value={transactionAmount}
                            onChange={(e) => setTransactionAmount(parseFloat(e.target.value))}
                            placeholder="Enter amount"
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
                        disabled={isCredting || isDebiting}
                        onClick={handleOnClick}
                        className={`text-white ${isCredit
                            ? 'bg-green-500 hover:bg-green-600'
                            : 'bg-blue-500 hover:bg-blue-600'
                            }`}
                    >
                        {isCredit ? 'Credit' : 'Debit'}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
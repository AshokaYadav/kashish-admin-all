import React, { useState } from 'react';
import {
    Card,
    CardContent,
} from '@/components/ui/card';
import { Wallet } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    PlusCircle,
    MinusCircle,
    Loader2,
    AlertCircle,
} from 'lucide-react';

const WalletCard = () => {
    const [balance, setBalance] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [showCreditDialog, setShowCreditDialog] = useState(false);
    const [showWithdrawDialog, setShowWithdrawDialog] = useState(false);
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(value);
    };

    const handleTransaction = (type: string) => {
        setIsLoading(true);
        setError('');

        const transactionAmount = parseFloat(amount);
        if (isNaN(transactionAmount) || transactionAmount <= 0) {
            setError('Please enter a valid amount');
            setIsLoading(false);
            return;
        }

        if (type === 'withdraw' && transactionAmount > balance) {
            setError('Insufficient balance');
            setIsLoading(false);
            return;
        }

        // Simulate API call
        setTimeout(() => {
            setBalance(prev => type === 'credit' ? prev + transactionAmount : prev - transactionAmount);
            setAmount('');
            setShowCreditDialog(false);
            setShowWithdrawDialog(false);
            setIsLoading(false);
        }, 800);
    };

    const TransactionDialog = ({ type, isOpen, onClose }: any) => (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[360px]">
                <DialogHeader>
                    <DialogTitle>
                        {type === 'credit' ? 'Add Money' : 'Withdraw Money'}
                    </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                    <div className="space-y-2">
                        <Label htmlFor="amount">Amount</Label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                            <Input
                                id="amount"
                                type="number"
                                min="1"
                                placeholder="0"
                                className="pl-8"
                                value={amount}
                                onChange={(e) => {
                                    setAmount(e.target.value);
                                    setError('');
                                }}
                            />
                        </div>
                        {error && (
                            <p className="text-sm text-red-500 flex items-center gap-1">
                                <AlertCircle className="w-4 h-4" />
                                {error}
                            </p>
                        )}
                    </div>
                    {type === 'withdraw' && (
                        <div className="text-sm text-gray-500">
                            Available balance: {formatCurrency(balance)}
                        </div>
                    )}
                </div>
                <DialogFooter>
                    <Button
                        variant="outline"
                        onClick={() => {
                            onClose(false);
                            setAmount('');
                            setError('');
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={() => handleTransaction(type)}
                        disabled={!amount || isLoading}
                        className="min-w-[100px]"
                    >
                        {isLoading ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                            type === 'credit' ? 'Add' : 'Withdraw'
                        )}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );

    return (
        <>
            <Card className="w-full mx-auto bg-white shadow-lg">
                <CardContent className="p-6">
                    <div className="flex flex-col items-center justify-between gap-4">
                        <div className="flex flex-row justify-between items-center w-full">
                            <div className='flex flex-1 justify-start items-center'>
                                <Wallet className="w-6 h-6 text-green-600" />
                                <span className="text-xl mx-2 font-medium text-gray-500">Wallet Balance</span>
                            </div>
                            <span className="text-3xl font-bold text-gray-900">
                                {formatCurrency(balance)}
                            </span>
                        </div>

                        <div className="flex flex-row justify-between items-center w-full">
                            <Button
                                onClick={() => setShowCreditDialog(true)}
                                className=" bg-green-500 hover:bg-green-600 text-white"
                            >
                                <PlusCircle className="w-4 h-4" />
                                Add Money
                            </Button>
                            <Button
                                onClick={() => setShowWithdrawDialog(true)}
                                variant="outline"
                                className=" border-red-200 text-red-600 hover:bg-red-50"
                            >
                                <MinusCircle className="w-4 h-4 mr-2" />
                                Withdraw
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <TransactionDialog
                type="credit"
                isOpen={showCreditDialog}
                onClose={setShowCreditDialog}
            />

            <TransactionDialog
                type="withdraw"
                isOpen={showWithdrawDialog}
                onClose={setShowWithdrawDialog}
            />
        </>
    );
};

export default WalletCard;
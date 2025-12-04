// components/TransactionTable.tsx
import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpCircle, ArrowDownCircle, Loader2, Check, Minus, History } from "lucide-react";
import { formatCurrency, formatDate, getStatusBadge, getTransactionType, formatTransactionType } from '../utils/format';
import { Transaction } from '../types/types';
import { ITxnHistory } from "@/apis/wallets/transactions";
import { PopoverTrigger } from "@radix-ui/react-popover";

interface TransactionTableProps {
    transactions: ITxnHistory[];
    isLoading: boolean;
}

export function TransactionTable({ transactions, isLoading }: TransactionTableProps) {
    const [selectedTransactions, setSelectedTransactions] = useState<string[]>([]);
    const [isCheckingPayments, setIsCheckingPayments] = useState(false);
    const [checkingTransactionId, setCheckingTransactionId] = useState<string | null>(null);

    if (isLoading) {
        return <div className="text-center py-4">Loading...</div>;
    }

    const renderTransactionIcon = (type: string) => {
        const { icon } = getTransactionType(type);
        return icon === 'up' ?
            <ArrowUpCircle className="h-4 w-4 text-emerald-500" /> :
            <ArrowDownCircle className="h-4 w-4 text-blue-500" />;
    };

    const handleCheckboxChange = (transactionId: string, checked: boolean) => {
        if (checked) {
            setSelectedTransactions(prev => [...prev, transactionId]);
        } else {
            setSelectedTransactions(prev => prev.filter(id => id !== transactionId));
        }
    };

    const handleSelectAll = () => {
        if (isAllSelected) {
            setSelectedTransactions([]);
        } else {
            setSelectedTransactions(transactions.map(t => t.id));
        }
    };

    const checkPaymentStatus = async (transaction: ITxnHistory) => {
        setCheckingTransactionId(transaction.id);
        const token = localStorage.getItem('token'); // Adjust based on your auth logic
        console.log('Using token:', token);
        try {
            const response = await fetch('https://api.recharge.kashishindiapvtltd.com/payments/check-payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Add authorization headers if needed
                    'Authorization': `${token}`
                },
                body: JSON.stringify({
                    // Add the required payload based on your API requirements
                    id: transaction.remote_order_id,
                    // Add other required fields
                })
            });

            const result = await response.json();
            console.log(`Payment check result for transaction ${transaction.id}:`, result);

            // Handle the response based on your needs
            if (response.ok) {
                // Success handling
                alert(`Payment check completed for transaction ${transaction.id}`);
            } else {
                // Error handling
                alert(`Payment check failed for transaction ${transaction.id}: ${result.message || 'Unknown error'}`);
            }
        } catch (error) {
            console.error(`Error checking payment for transaction ${transaction.id}:`, error);
            alert(`Error checking payment for transaction ${transaction.id}`);
        } finally {
            setCheckingTransactionId(null);
        }
    };

    const checkSelectedPayments = async () => {
        if (selectedTransactions.length === 0) {
            alert('Please select at least one transaction');
            return;
        }

        setIsCheckingPayments(true);

        for (const transactionId of selectedTransactions) {
            const transaction = transactions.find(t => t.id === transactionId);
            if (transaction) {
                await checkPaymentStatus(transaction);
                // Add a small delay between requests to avoid overwhelming the API
                await new Promise(resolve => setTimeout(resolve, 500));
            }
        }

        setIsCheckingPayments(false);
        setSelectedTransactions([]); // Clear selection after processing
    };

    // Custom Checkbox Component
    const CustomCheckbox = ({
        checked,
        indeterminate = false,
        onCheckedChange,
        disabled = false
    }: {
        checked: boolean;
        indeterminate?: boolean;
        onCheckedChange: (checked: boolean) => void;
        disabled?: boolean;
    }) => (
        <button
            type="button"
            onClick={() => onCheckedChange(!checked)}
            disabled={disabled}
            className={`
                w-4 h-4 rounded border-2 flex items-center border-gray-500 justify-center transition-colors
                ${disabled ? 'opacity-100 border border-black cursor-not-allowed ' : 'cursor-pointer'}
                ${checked
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : indeterminate
                        ? 'bg-blue-600 border-blue-600 text-white'
                        : 'border-gray-300 hover:border-blue-400'
                }
            `}
        >
            {checked && <Check className="h-3 w-3 text-black" />}
            {indeterminate && !checked && <Minus className="h-3 w-3" />}
        </button>
    );
    const isAllSelected = selectedTransactions.length === transactions.length && transactions.length > 0;
    const isPartiallySelected = selectedTransactions.length > 0 && selectedTransactions.length < transactions.length;

    return (
        <div className="space-y-4">
            {/* Action buttons */}
            <div className="flex items-center gap-4">
                <Button
                    onClick={checkSelectedPayments}
                    disabled={selectedTransactions.length === 0 || isCheckingPayments}
                    className="bg-blue-600 hover:bg-blue-700"
                >
                    {isCheckingPayments ? (
                        <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Checking Payments...
                        </>
                    ) : (
                        `Total Checking (${selectedTransactions.length})`
                    )}
                </Button>

                {selectedTransactions.length > 0 && (
                    <Button
                        variant="outline"
                        onClick={() => setSelectedTransactions([])}
                        disabled={isCheckingPayments}
                    >
                        Clear Selection
                    </Button>
                )}
            </div>

            <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-gray-400 text-black">
                            <TableHead className="w-12">
                                <CustomCheckbox
                                    checked={isAllSelected}
                                    indeterminate={isPartiallySelected}
                                    onCheckedChange={() => handleSelectAll()}
                                    disabled={isCheckingPayments}
                                />
                            </TableHead>
                            <TableHead className="text-center text-black w-4 border border-gray-300 text-gray-600">Sr.</TableHead>
                            <TableHead className="text-gray-600 text-black border border-gray-300 text-center">Time</TableHead>
                            <TableHead className="text-gray-600 text-black border border-gray-300 text-center">Type</TableHead>
                            <TableHead className="text-gray-600 text-black border border-gray-300 text-center">User</TableHead>
                            <TableHead className="text-gray-600 text-black border border-gray-300 text-center">Status</TableHead>
                            <TableHead className="text-gray-600 text-black border border-gray-300 text-center">Opening Balance</TableHead>
                            <TableHead className="text-gray-600 text-black border border-gray-300 text-center">Amount</TableHead>
                            <TableHead className="text-gray-600 text-black border border-gray-300 text-center">Closing Balance</TableHead>
                            <TableHead className="text-gray-600 text-black border border-gray-300 text-center">RRN</TableHead>
                            <TableHead className="text-gray-600 text-black border border-gray-300 text-center">UPI</TableHead>
                            {/* <TableHead className="text-gray-600">Message</TableHead> */}
                            {/* <TableHead className="text-gray-600 text-center">Action</TableHead> */}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {transactions.map((transaction, index) => (
                            <TableRow key={transaction.id} className=" even:bg-gray-300 text-sm hover:bg-gray-50/50">
                                <TableCell className="border  border-gray-400">

                                    <CustomCheckbox

                                        checked={selectedTransactions.includes(transaction.id)}
                                        onCheckedChange={(checked) =>
                                            handleCheckboxChange(transaction.id, checked)
                                        }
                                        disabled={isCheckingPayments}
                                    />

                                </TableCell>
                                <TableCell className="text-gray-600 text-center font-sm border border-gray-400">
                                    {index + 1}
                                </TableCell>
                                <TableCell className="text-gray-600 border border-gray-400">
                                    {formatDate(transaction.createdAt)}
                                </TableCell>
                                <TableCell className="border border-gray-400">
                                    <div className="flex items-center text-sm gap-1">
                                        {renderTransactionIcon(transaction.type)}
                                        <span className={`${getTransactionType(transaction.type).color} whitespace-nowrap truncate`}>
                                            {transaction.type == 'CASH'
                                                ? 'Add Money by RZP'
                                                : formatTransactionType(transaction.type)}
                                        </span>
                                    </div>
                                </TableCell>


                                
                                <TableCell className=" text-gray-700 border border-gray-400">
                                    {transaction.user?.name || 'N/A'}
                                    <div className="text-sm text-gray-500">
                                        {transaction.user?.mobile || 'N/A'}
                                    </div>
                                </TableCell>
                                <TableCell className="border border-gray-400">
                                    <Badge variant="secondary" className={getStatusBadge(transaction.status)}>
                                        {transaction.status}
                                        <br />

                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-6 w-5 hover:bg-gray-100"
                                            onClick={() => checkPaymentStatus(transaction)}
                                        >
                                            <History className="h-5 w-5 text-gray-500" />
                                        </Button>

                                    </Badge>
                                </TableCell>
                                <TableCell className="text-center font-medium text-gray-700 border border-gray-400">
                                    {formatCurrency(transaction.opening_balance)}
                                </TableCell>
                                <TableCell className="text-center font-medium text-gray-700 border border-gray-400">
                                    {formatCurrency(transaction.amount)}
                                </TableCell>
                                <TableCell className="text-center font-medium text-gray-700 border border-gray-400">
                                    {formatCurrency(transaction.closing_balance)}
                                </TableCell>
                                <TableCell className="text-center font-medium text-gray-700 border border-gray-400">
                                    {transaction.bank_rrn || '---'}
                                </TableCell>
                                <TableCell className="text-center font-medium text-gray-700 border border-gray-400">
                                    {transaction.client_upi_id || '---'}
                                </TableCell>
                                {/* <TableCell
                                    className="max-w-xs truncate text-gray-500"
                                    title={transaction.msg}
                                >
                                    {transaction.msg || '-'}
                                </TableCell> */}
                                {/* <TableCell className="text-center">
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        onClick={() => checkPaymentStatus(transaction)}
                                        disabled={isCheckingPayments || checkingTransactionId === transaction.id}
                                    >
                                        {checkingTransactionId === transaction.id ? (
                                            <Loader2 className="h-3 w-3 animate-spin" />
                                        ) : (
                                            'Check'
                                        )}
                                    </Button>
                                </TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {selectedTransactions.length > 0 && (
                <div className="text-sm text-gray-600">
                    {selectedTransactions.length} transaction(s) selected
                </div>
            )}
        </div>
    );
}
// components/TransactionTable.tsx
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowUpCircle, ArrowDownCircle } from "lucide-react";
import { formatCurrency, formatDate, getStatusBadge, getTransactionType, formatTransactionType } from '../utils/format';
import { Transaction } from '../types/types';
import { ITxnHistory } from "@/apis/wallets/transactions";


interface TransactionTableProps {
    transactions: ITxnHistory[];
    isLoading: boolean;
}

export function TransactionTable({ transactions, isLoading }: TransactionTableProps) {
    if (isLoading) {
        return <div className="text-center py-4">Loading...</div>;
    }

    const renderTransactionIcon = (type: string) => {
        const { icon } = getTransactionType(type);
        return icon === 'up' ?
            <ArrowUpCircle className="h-4 w-4 text-emerald-500" /> :
            <ArrowDownCircle className="h-4 w-4 text-blue-500" />;
    };
    1
    return (
        <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <Table>
                <TableHeader>
                    <TableRow className="bg-gray-50/50">
                        <TableHead className="text-gray-600">Time</TableHead>
                        <TableHead className="text-gray-600">Type</TableHead>
                        <TableHead className="text-gray-600">Status</TableHead>
                        <TableHead className="text-gray-600 text-right">Amount</TableHead>
                        <TableHead className="text-gray-600 text-right">Commission</TableHead>
                        <TableHead className="text-gray-600 text-right">Opening Balance</TableHead>
                        <TableHead className="text-gray-600 text-right">Closing Balance</TableHead>
                        <TableHead className="text-gray-600">Message</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {transactions.map((transaction) => (
                        <TableRow key={transaction.id} className="hover:bg-gray-50/50">
                            <TableCell className="text-gray-600">{formatDate(transaction.createdAt)}</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-1">
                                    {renderTransactionIcon(transaction.type)}
                                    <span className={getTransactionType(transaction.type).color}>
                                        {formatTransactionType(transaction.type)}
                                    </span>
                                </div>
                            </TableCell>
                            <TableCell>
                                <Badge variant="secondary" className={getStatusBadge(transaction.status)}>
                                    {transaction.status}
                                </Badge>
                            </TableCell>
                            <TableCell className="text-right font-medium text-gray-700">
                                {formatCurrency(transaction.amount)}
                            </TableCell>
                            <TableCell className="text-right text-gray-500">
                                {formatCurrency(transaction.commission)}
                            </TableCell>
                            <TableCell className="text-right text-gray-500">
                                {formatCurrency(transaction.opening_balance)}
                            </TableCell>
                            <TableCell className="text-right font-medium text-gray-700">
                                {formatCurrency(transaction.closing_balance)}
                            </TableCell>
                            <TableCell
                                className="max-w-xs truncate text-gray-500"
                                title={transaction.msg}
                            >
                                {transaction.msg || '-'}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
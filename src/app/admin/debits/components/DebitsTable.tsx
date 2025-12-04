
import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, XIcon } from "lucide-react";
import { IUpdateReqForm } from './useDebits';


export interface Props {
    handleSort: any; data: any; handleUpdateClick: (body: IUpdateReqForm) => void;
}

function DebitsTable({ handleSort, data, handleUpdateClick }: Props) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };
    const getStatusColor = (status: string) => {
        const statusColors: any = {
            pending: 'bg-yellow-100 text-yellow-800',
            success: 'bg-green-100 text-green-800',
            failed: 'bg-red-100 text-red-800',
            hold: 'bg-blue-100 text-blue-800'
        };
        return statusColors[status.trim().toLowerCase()] || 'bg-gray-100 text-gray-800';
    };
    return (
        <div className="rounded-md border p-1">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">
                            <button
                                onClick={() => handleSort('date')}
                                className="flex items-center space-x-1"
                            >
                                Date
                                <ArrowUpDown className="ml-2 h-4 w-4" />
                            </button>
                        </TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>UPI/ (receive info)</TableHead>
                        <TableHead className="text-center">Opening Balance</TableHead>
                        <TableHead className="text-center">Amount</TableHead>
                        <TableHead className="text-center">Closing Balance</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-center">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data?.map(({ amount, opening_balance, closing_balance, msg, createdAt, debit_txn_id, debit_txn_upi_id, id, status, type, updatedAt, user_id }: any) => {
                        return (<TableRow key={id}>
                            <TableCell className="font-medium">
                                {formatDate(createdAt)}
                            </TableCell>
                            <TableCell>{user_id}</TableCell>
                            <TableCell>{debit_txn_upi_id}</TableCell>
                            <TableCell className="text-center">${opening_balance.toFixed(2)}</TableCell>
                            <TableCell className="text-center">${amount.toFixed(2)}</TableCell>
                            <TableCell className="text-center">${closing_balance.toFixed(2)}</TableCell>

                            <TableCell>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
                                    {status}
                                </span>
                            </TableCell>

                            <TableCell>
                                <div className="flex gap-1 ">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                                        onClick={() => handleUpdateClick({ id, debit_txn_id, status, msg })}
                                    >
                                        Update
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>)
                    })}
                </TableBody>
            </Table>
        </div>
    )
}

export default DebitsTable
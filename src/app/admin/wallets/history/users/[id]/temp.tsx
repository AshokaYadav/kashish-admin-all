"use client";
import { useEffect } from 'react';
import { useTransactions } from '../../hooks/useTransactions';
import { TransactionFiltersSection } from '../../components/TransactionsFilterSection';
import { TransactionTable } from '../../components/TransactionsTable';
import { TransactionPagination } from '../../components/TransactionsPagination';

export const dynamic = 'force-dynamic'
export default function TransactionsPage() {
    const {
        error,
        filters,
        updateFilters,
        handlePageChange,

        data, isLoadingTxns, refetch,
        paginatedParams,
    } = useTransactions(false);



    useEffect(() => {
        console.log('data', data);
    }, [data]);

    if (error) {
        return <div className="text-center py-4 text-rose-600">{error}</div>;
    }

    return (
        <div className="p-6 space-y-6 bg-white h-full flex flex-col">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-gray-800">Transaction History</h1>
            </div>

            <TransactionFiltersSection
                filters={filters}
                onFilterChange={updateFilters}
            />

            <TransactionTable
                transactions={data?.data || []}
                isLoading={isLoadingTxns}
            />

            <TransactionPagination
                currentPage={paginatedParams.page}
                totalPages={data?.pagination.totalPages || 1}
                onPageChange={handlePageChange}
            />
        </div>
    );
}
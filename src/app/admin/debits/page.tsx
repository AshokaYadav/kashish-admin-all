"use client"
import React from 'react';
import { Pagination } from './components/Pagination';
import UpdateDialog from './components/UpdateDialog';
import RejectDialogs from './components/RejectDialogs';
import DebitsTable from './components/DebitsTable';
import { useDebits } from './components/useDebits';
import { TransactionFiltersSection } from './components/TransactionsFilterSection';
import DateRangeSelector from './components/DateRange';

const DebitRequestsTable = () => {
    const {
        updateDialogOpen, setUpdateDialogOpen,
        updateForm, transactions,
        handleSort, handleUpdateClick,
        updatePageNo, handleUpdate,
        filters, setFilters, updateFilters,
        updateDateRange, setDateRange, filtered
    } = useDebits();

    return (
        <div className="p-6 space-y-6 bg-white h-full flex flex-col">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-gray-800">Debits</h1>
            </div>

            <DateRangeSelector onDateRangeChange={setDateRange} />
            
            <TransactionFiltersSection
                filters={filters}
                onFilterChange={updateFilters}
            />

            <DebitsTable
                data={filtered}
                handleSort={handleSort}
                handleUpdateClick={handleUpdateClick}
            />

            {/* Pagination */}
            <Pagination
                currentPage={transactions?.currentPage || 1}
                totalPages={transactions?.totalPages || 1}
                onPageChange={updatePageNo}
            />


            {/* Update Dialog */}
            <UpdateDialog
                txn={updateForm}
                open={updateDialogOpen}
                onOpenChange={setUpdateDialogOpen}
                handleUpdate={handleUpdate}
            />
        </div>
    );
};

export default DebitRequestsTable;
"use client";
import React, { useState } from "react";
import { useTransactions } from "./hooks/useTransactions";
import { TransactionFiltersSection } from "./components/TransactionsFilterSection";
import { TransactionTable } from "./components/TransactionsTable";
import { TransactionPagination } from "./components/TransactionsPagination";
import DateRangeSelector from "./components/DateRange";
import dynamic from "next/dynamic";
import { format } from "date-fns";
import { ITxnHistory } from "@/apis/wallets/transactions";
import WalletUsersFilters from "@/components/admin/member/WalletUsersFilters";
import TransactionPDFDownload from "@/components/admin/pdf/TransactionPDFDownload";

export default function TransactionsPage() {
  const {
    user,
    error,
    filters,
    updateFilters,
    handlePageChange,
    filteredTxnHistory,
    data,
    isLoadingTxns,
    refetch,
    paginatedParams,
    dateRange,
    updateDateRange,
    setDateRange,
  } = useTransactions(false);

  // 🔹 Filter States (WalletUsersFilters ke liye)
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // 🔹 Pagination helper (dummy, agar table pagination alag handle ho rahi ho)
  const [page, setPage] = useState(1);

  // 🔹 Reset handler
  const handleResetFilters = () => {
    setSearch("");
    setRole("");
    setStatus("");
    setStartDate("");
    setEndDate("");
    setPage(1);
  };

  if (!user || !user.userId) return <>User Not Found!</>;

  if (error) {
    return <div className="text-center py-4 text-rose-600">{error}</div>;
  }

  return (
    <div className="p-6 space-y-6 bg-white h-full flex flex-col">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">
          Transaction History
        </h1>
      </div>

     

      <WalletUsersFilters
        search={search}
        setSearch={setSearch}
        role={role}
        setRole={setRole}
        status={status}
        setStatus={setStatus}
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setPage={setPage}
        totalCount={10}
        onReset={handleResetFilters}
      />

      <TransactionTable
        transactions={filteredTxnHistory}
        isLoading={isLoadingTxns}
      />

      <TransactionPagination
        currentPage={paginatedParams.page}
        totalPages={data?.pagination.totalPages || 1}
        onPageChange={handlePageChange}
      />

      {/* {
                (data) ? <PDFDownloadSection rechargeData={data?.data || []} user={user.name} mobile={user.mobile} email={user.email}/> : (<></>)
            } */}

      {data && (
        <TransactionPDFDownload
          rechargeData={data.data}
          user={user.name}
          email={user.email}
          mobile={user.mobile}
        />
      )}
    </div>
  );
}

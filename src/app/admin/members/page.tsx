"use client";

import { useState } from "react";
import {
  MdContentCopy,
  MdEdit,
  MdHistory,
  MdList,
  MdFilterList,
  MdSearch,
} from "react-icons/md";
import { formatDate } from "@/lib/utils";
import { useWalletUsers } from "@/hooks/admin-members/useWalletUsers";
import WalletModal from "@/components/admin/Modal/WalletModal";
import { useRouter } from "next/navigation";
import WalletUsersTable from "@/components/admin/WalletUsersTable";
import DashboardStats from "@/components/admin/DashboardStats";
import DateRangeFilter from "@/components/admin/DateRangeFilter";
import Pagination from "@/components/admin/Pagination1";
import PageSizeSelector from "@/components/admin/PageSizeSelector";
import WalletUsersFilters from "@/components/admin/member/WalletUsersFilters";

export default function WalletUsersPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [openModal, setOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  // Agar aapka hook filter support karta hai to ise update karein
  const { data, isLoading, isError } = useWalletUsers(page);
  const router = useRouter();

  const [itemsPerPage, setItemsPerPage] = useState(50);

  // Agar backend se filter na ho to frontend mein filter karein
  let wallets = data?.data?.wallets ?? [];

  // Frontend filtering
  if (search) {
    wallets = wallets.filter(
      (item: any) =>
        item.user?.name?.toLowerCase().includes(search.toLowerCase()) ||
        item.user?.mobile?.includes(search) ||
        item.user?.email?.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (role) {
    wallets = wallets.filter(
      (item: any) => item.user?.role?.toLowerCase() === role.toLowerCase()
    );
  }

  if (status) {
    const statusBool = status === "active";
    wallets = wallets.filter((item: any) => item.user?.status === statusBool);
  }

  if (startDate && endDate) {
    const [sd, sm, sy] = startDate.split("/").map(Number);
    const [ed, em, ey] = endDate.split("/").map(Number);

    const start = new Date(sy, sm - 1, sd);
    const end = new Date(ey, em - 1, ed);

    wallets = wallets.filter((item: any) => {
      const created = new Date(item.createdAt);
      return created >= start && created <= end;
    });
  }

  //   const totalPages = data?.data?.totalPage ?? 1;

  const totalPages = Math.ceil(wallets.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedData = wallets.slice(startIndex, startIndex + itemsPerPage);

  if (isLoading) return <p className="p-4">Loading...</p>;
  if (isError)
    return <p className="p-4 text-red-500">Error loading wallet data.</p>;

  const handleOpen = (item: any) => {
    setSelectedUser(item);
    setOpenModal(true);
  };

  const handleResetFilters = () => {
    setSearch("");
    setRole("");
    setStatus("");
    setPage(1);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Users Wallet List</h2>
      <DashboardStats />
      {/* FILTER SECTION - Table ke upper bhai mujhe eh filter section ko.. ek or page me use karna hia.. */}
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
        totalCount={wallets.length}
        onReset={handleResetFilters}
      />

      <PageSizeSelector
        pageSize={itemsPerPage}
        onChange={(v) => {
          setItemsPerPage(v);
          setPage(1); // Reset page when user changes page size
        }}
      />

      {/* TABLE */}
      <WalletUsersTable
        wallets={paginatedData}
        handleOpen={handleOpen}
        startIndex={startIndex}
      />

      {/* PAGINATION */}
      {/* <Pagination
        page={page}
        totalPage={totalPage}
        showCount={wallets.length}
        onPageChange={(newPage) => setPage(newPage)}
      /> */}

      {/* <Pagination
        page={page}
        totalPage={totalPage}
        showCount={wallets.length}
        onPageChange={(newPage) => setPage(newPage)}
      /> */}

      <Pagination page={page} totalPages={totalPages} onChange={setPage} />

      {/* MODAL */}
      {openModal && (
        <WalletModal user={selectedUser} onClose={() => setOpenModal(false)} />
      )}
    </div>
  );
}

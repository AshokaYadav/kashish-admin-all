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

export default function WalletUsersPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");

  const [openModal, setOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  // Agar aapka hook filter support karta hai to ise update karein
  const { data, isLoading, isError } = useWalletUsers(page);
  const router = useRouter();

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

  const totalPage = data?.data?.totalPage ?? 1;

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
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Users Wallet List</h2>
      <DashboardStats />
      {/* FILTER SECTION - Table ke upper */}
      <div className="bg-white p-4 rounded-lg shadow border border-gray-200 mb-4">
        <div className="flex flex-col md:flex-row gap-4 items-end">
          {/* Search Input */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Search
            </label>
            <div className="relative">
              <MdSearch
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search by name, mobile, email..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          {/* memeber Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Packages
            </label>
            <select
              className="w-full md:w-40 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Package type</option>
              <option value="app_user">Api Partner</option>
              <option value="retailer">Distributors</option>
              <option value="distributor">Retailers</option>
              <option value="apipartner">Users</option>
            </select>
          </div>

          {/* Role Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <select
              className="w-full md:w-40 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">All Roles</option>
              <option value="app_user">App User</option>
              <option value="retailer">Retailer</option>
              <option value="distributor">Distributor</option>
              <option value="apipartner">API Partner</option>
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              className="w-full md:w-40 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* Reset Button */}
          <div>
            <button
              onClick={handleResetFilters}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 flex items-center gap-2"
            >
              <MdFilterList size={18} />
              Reset
            </button>
          </div>
        </div>

        {/* Active Filters Display */}
        {(search || role || status) && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium text-gray-700">Active Filters:</span>
              {search && (
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                  Search: "{search}"
                </span>
              )}
              {role && (
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                  Role: {role}
                </span>
              )}
              {status && (
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                  Status: {status}
                </span>
              )}
              <span className="ml-2 text-gray-500">
                ({wallets.length} records found)
              </span>
            </div>
          </div>
        )}
      </div>

      {/* TABLE */}
      <WalletUsersTable wallets={wallets} handleOpen={handleOpen} />

      {/* PAGINATION */}
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-600">
          Showing {wallets.length} records
          {(search || role || status) && " (filtered)"}
        </div>

        <div className="flex items-center gap-6">
          <button
            disabled={page <= 1}
            onClick={() => setPage((p) => p - 1)}
            className="px-3 py-1 bg-gray-300 rounded disabled:opacity-40"
          >
            Prev
          </button>

          <span className="font-medium">
            Page {page} / {totalPage}
          </span>

          <button
            disabled={page >= totalPage}
            onClick={() => setPage((p) => p + 1)}
            className="px-3 py-1 bg-gray-300 rounded disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>

      {/* MODAL */}
      {openModal && (
        <WalletModal user={selectedUser} onClose={() => setOpenModal(false)} />
      )}
    </div>
  );
}

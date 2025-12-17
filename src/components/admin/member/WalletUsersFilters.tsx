"use client";

import { MdFilterList, MdSearch } from "react-icons/md";
import DateRangeFilter from "@/components/admin/DateRangeFilter";

type Props = {
  search: string;
  setSearch: (v: string) => void;

  role: string;
  setRole: (v: string) => void;

  status: string;
  setStatus: (v: string) => void;

  startDate: string;
  endDate: string;
  setStartDate: (v: string) => void;
  setEndDate: (v: string) => void;

  onReset: () => void;
  totalCount: number;
  setPage: (v: number) => void;
};

export default function WalletUsersFilters({
  search,
  setSearch,
  role,
  setRole,
  status,
  setStatus,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  onReset,
  totalCount,
  setPage,
}: Props) {
  return (
    <div className="bg-white p-4 rounded-lg shadow border border-gray-200 mb-4">
      <div className="flex flex-col md:flex-row gap-4 items-end">

        {/* Date Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date Range
          </label>
          <DateRangeFilter
            startDate={startDate}
            endDate={endDate}
            onChange={(key, value) => {
              if (key === "startDate") setStartDate(value);
              if (key === "endDate") setEndDate(value);
              setPage(1);
            }}
          />
        </div>

        {/* Search */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Search
          </label>
          <div className="relative">
            <MdSearch
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              placeholder="Search by name, mobile, email..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md
                         focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Role */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Role
          </label>
          <select
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
              setPage(1);
            }}
            className="w-40 px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">All Roles</option>
            <option value="app_user">App User</option>
            <option value="retailer">Retailer</option>
            <option value="distributor">Distributor</option>
            <option value="apipartner">API Partner</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
              setPage(1);
            }}
            className="w-40 px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* Reset */}
        <button
          onClick={onReset}
          className="px-4 py-2 bg-gray-200 rounded-md flex items-center gap-2"
        >
          <MdFilterList size={18} />
          Reset
        </button>
      </div>

      {/* Active filters */}
      {(search || role || status) && (
        <div className="mt-4 pt-4 border-t text-sm text-gray-600">
          Active Filters · {totalCount} records
        </div>
      )}
    </div>
  );
}

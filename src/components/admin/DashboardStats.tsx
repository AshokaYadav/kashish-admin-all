"use client";

import { FaUsers } from "react-icons/fa";
import StatCard from "./StatCard";

export default function DashboardStats() {
  return (
    <div className="p-4 space-y-8">

      {/* 🔵 Row 1 — 2 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <StatCard title="Total Members" bg="bg-cyan-500">
          <div className="flex items-center gap-2 text-xl font-bold">
            <FaUsers /> 3762
          </div>
        </StatCard>

        <StatCard title="Total Wallet" bg="bg-green-600">
          <div className="text-xl font-bold">₹ 188097.517</div>
        </StatCard>

      </div>

      {/* Divider */}
      <hr className="border-gray-300" />

      {/* 🔵 Row 2 — 4 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <StatCard title=" Api Partner" bg="bg-green-700">
          <div className="space-y-1">
            <div className="flex items-center gap-2"><FaUsers /> 0</div>
            <div>Wallet: ₹0</div>
            <div>Active: 0</div>
            <div>Pending: 0</div>
            <div>Suspended: 0</div>
          </div>
        </StatCard>

        <StatCard title="Distributors" bg="bg-blue-700">
          <div className="space-y-1">
            <div className="flex items-center gap-2"><FaUsers /> 0</div>
            <div>Wallet: ₹0</div>
            <div>Active: 0</div>
            <div>Pending: 0</div>
            <div>Suspended: 0</div>
          </div>
        </StatCard>

        <StatCard title="Retailers" bg="bg-red-600">
          <div className="space-y-1">
            <div className="flex items-center gap-2"><FaUsers /> 0</div>
            <div>Wallet: ₹0</div>
            <div>Active: 0</div>
            <div>Pending: 0</div>
            <div>Suspended: 0</div>
          </div>
        </StatCard>

        <StatCard title="Users" bg="bg-yellow-500">
          <div className="space-y-1">
            <div className="flex items-center gap-2"><FaUsers /> 3762</div>
            <div>Wallet: ₹188097.517</div>
            <div>Active: 3176</div>
            <div>Pending: 0</div>
            <div>Suspended: 586</div>
          </div>
        </StatCard>

      </div>
    </div>
  );
}

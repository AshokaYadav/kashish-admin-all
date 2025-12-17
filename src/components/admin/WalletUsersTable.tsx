"use client";

import {
  MdApi,
  MdContentCopy,
  MdCurrencyRupee,
  MdDomain,
  MdEdit,
  MdHistory,
  MdList,
  MdMobileFriendly,
  MdPerson,
  MdPhone,
  MdStore,
} from "react-icons/md";
import { RiFundsFill } from "react-icons/ri";
import { formatDate } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { FaMobileAlt } from "react-icons/fa";
import { useState } from "react";
import WalletUserEditModal from "./Modal/WalletUserEditModal";

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};

const getRoleIcon = (role: string) => {
  switch (role?.toLowerCase()) {
    case "app_user":
      return {
        icon: <FaMobileAlt size={20} className="text-blue-600" />,
        label: "App User",
      };

    case "retailer":
      return {
        icon: <MdStore size={20} className="text-green-600" />,
        label: "Retailer",
      };

    case "distributor":
      return {
        icon: <MdDomain size={20} className="text-orange-600" />,
        label: "Distributor",
      };

    case "apipartner":
      return {
        icon: <MdApi size={20} className="text-purple-600" />,
        label: "API Partner",
      };

    default:
      return {
        icon: <MdPerson size={20} className="text-gray-500" />,
        label: "Unknown",
      };
  }
};

export default function WalletUsersTable({
  wallets,
  handleOpen,
  startIndex
}: {
  wallets: any[];
  handleOpen: (item: any) => void;
  startIndex:number
}) {
  const router = useRouter();

  const [openModal, setOpenModal] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleOpenModal = (item: any) => {
    setSelectedUser(item.user);
    setOpenModal(true);
  };

  return (
    <>
      <div className="overflow-auto rounded-lg shadow border border-gray-200">
        <table className="min-w-full bg-white text-sm">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300">
              <th className="p-3 text-left font-semibold">Sr No</th>
              <th className="p-3 text-left font-semibold">Contact Info</th>
              <th className="p-3 text-left font-semibold">User Name</th>
              <th className="p-3 text-left font-semibold">Balance</th>
              <th className="p-3 text-left font-semibold">Package</th>
              <th className="p-3 text-left font-semibold">Role</th>
              <th className="p-3 text-left font-semibold">Status</th>
              <th className="p-3 text-left font-semibold">Created At</th>
              <th className="p-3 text-center font-semibold">Action</th>
            </tr>
          </thead>

          <tbody>
            {wallets.map((item: any, i: number) => (
              <tr
                key={item.id}
                className="border-b transition hover:bg-gray-50 odd:bg-white even:bg-gray-50/40"
              >
                <td className="p-3">{i + startIndex+1}</td>

                {/* CONTACT INFO */}
                <td className="p-3">
                  <div className="flex flex-col gap-1">
                    {/* Mobile */}
                    <div className="flex items-center gap-2">
                      <span className="text-gray-700 font-medium">
                        {item.user?.mobile}
                      </span>
                      <button
                        onClick={() => copyToClipboard(item.user?.mobile)}
                        className="text-gray-400 hover:text-gray-900"
                        title="Copy Mobile Number"
                      >
                        <MdContentCopy size={15} />
                      </button>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 text-xs">
                        {item.user?.email}
                      </span>
                      <button
                        onClick={() => copyToClipboard(item.user?.email)}
                        className="text-gray-400 hover:text-gray-900"
                        title="Copy Email"
                      >
                        <MdContentCopy size={15} />
                      </button>
                    </div>
                  </div>
                </td>

                {/* USER NAME */}
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{item.user?.name}</span>
                    <button
                      onClick={() => copyToClipboard(item.user?.name)}
                      className="text-gray-400 hover:text-gray-900"
                      title="Copy Name"
                    >
                      <MdContentCopy size={16} />
                    </button>
                  </div>
                </td>

                <td className="p-3 font-semibold text-gray-800">
                  ₹ {item.balance}
                </td>

                <td className="p-3">Package</td>

                {/* appuser,retailer,distributor,apipartner, */}
                <td className="p-2 border">
                  <div className="group relative flex items-center justify-center">
                    {getRoleIcon(item.user?.role).icon}

                    {/* Tooltip */}
                    <span
                      className="absolute -bottom-7 left-1/2 -translate-x-1/2 hidden group-hover:block
                             bg-black text-white text-xs px-2 py-1 rounded shadow"
                    >
                      {getRoleIcon(item.user?.role).label}
                    </span>
                  </div>
                </td>

                {/* <td className="p-3">{item.user?.role}</td> */}
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      item.user.status
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.user.status ? "ACTIVE" : "INACTIVE"}
                  </span>
                </td>

                {/* <td className="p-3">{item.user?.status}</td> */}

                <td className="p-3">{formatDate(item.createdAt)}</td>

                {/* ACTION BUTTONS */}
                <td className="p-3 flex items-center justify-center gap-4">
                  {/* Ledger */}
                  <button
                    className="group relative text-green-600 hover:text-green-800"
                    onClick={() =>
                     {
                        alert(item.id)
                         router.push(`/admin/retailer/transactions/${item.user_id}`)
                        }
                    }
                  >
                    <MdList size={22} />
                    <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 hidden group-hover:block text-xs bg-black text-white px-2 py-1 rounded">
                      Ledger History
                    </span>
                  </button>

                  {/* Login History */}
                  <button
                    className="group relative text-purple-600 hover:text-purple-800"
                    onClick={() => router.push(`login_history/${item.user_id}`)}
                  >
                    <MdHistory size={22} />
                    <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 hidden group-hover:block text-xs bg-black text-white px-2 py-1 rounded">
                      Login History
                    </span>
                  </button>

                  {/* Edit */}
                  <button
                    className="group relative text-blue-600 hover:text-blue-800"
                    onClick={() => handleOpen(item)}
                  >
                    <MdCurrencyRupee size={24} />
                    <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 hidden group-hover:block text-xs bg-black text-white px-2 py-1 rounded">
                      Fund transfer
                    </span>
                  </button>
                  <button
                    className="group relative text-blue-600 hover:text-blue-800"
                    onClick={() => handleOpenModal(item)}
                  >
                    <MdEdit size={24} />
                    <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 hidden group-hover:block text-xs bg-black text-white px-2 py-1 rounded">
                      Edit
                    </span>
                  </button>
                  <button
                    className="group relative text-purple-600 hover:text-purple-800"
                    onClick={() => router.push(`/admin/commission`)}
                  >
                    <RiFundsFill size={22} />
                    <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 hidden group-hover:block text-xs bg-black text-white px-2 py-1 rounded">
                      commission
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <WalletUserEditModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        user={selectedUser}
      />
    </>
  );
}

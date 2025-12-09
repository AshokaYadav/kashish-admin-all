"use client";

import React from "react";
import { MdClose } from "react-icons/md";

export default function WalletUserEditModal({
  open,
  onClose,
  user,
}: {
  open: boolean;
  onClose: () => void;
  user: any;
}) {
  if (!open || !user) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-[400px] relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          <MdClose size={24} />
        </button>

        <h2 className="text-lg font-semibold mb-4">
          Edit User Details
        </h2>

        {/* FORM */}
        <div className="flex flex-col gap-3">
          <div>
            <label className="text-sm font-medium">Name</label>
            <input
              className="w-full border px-3 py-2 rounded"
              value={user?.name}
              
            />
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              className="w-full border px-3 py-2 rounded"
              value={user?.email}
            
            />
          </div>

          <div>
            <label className="text-sm font-medium">Mobile</label>
            <input
              className="w-full border px-3 py-2 rounded"
              value={user?.mobile}
              readOnly
            />
          </div>

          <div>
            <label className="text-sm font-medium">Role</label>
            <input
              className="w-full border px-3 py-2 rounded"
              value={user?.role}
              readOnly
            />
          </div>

          <div>
            <label className="text-sm font-medium">Status</label>
            <input
              className="w-full border px-3 py-2 rounded"
              value={user?.status}
              readOnly
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

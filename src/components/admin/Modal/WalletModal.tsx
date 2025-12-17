"use client";

import { useUpdateWallet } from "@/hooks/admin/useUpdateWallet";
import { useState } from "react";

interface Props {
  user: any;
  onClose: () => void;
}

export default function WalletModal({ user, onClose }: Props) {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState<"Add" | "Less">("Add");

  const [comment, setComment] = useState("");

  // ✅ IMPORTANT — Hook CALL karna jaroori hai!
  const updateWallet = useUpdateWallet();

  const handleSubmit = () => {
    if (!amount) {
      alert("Please enter amount");
      return;
    }

    updateWallet.mutate(
      {
        userId: user?.user?.id,
        amount: Number(amount),
        comment,
        type,
      },
      {
        onSuccess: () => {
          alert("Wallet Updated Successfully!");
          onClose();
        },
      }
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-[500px] p-6 rounded-xl shadow-2xl border relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-2xl font-bold text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ×
        </button>

        {/* USER INFO */}
        <div className="space-y-1 text-sm text-gray-700">
          <p>
            <b>Member Name:</b> {user.user?.name}
          </p>
          <p>
            <b>Mobile Number:</b> {user.user?.mobile}
          </p>
          <p>
            <b>Email Id:</b> {user.user?.email}
          </p>
          <p>
            <b>Member Wallet:</b>
            <span className="text-blue-600 font-semibold">
              {" "}
              Rs. {user.balance}/-
            </span>
          </p>
        </div>

        <p className="mt-3 text-lg font-semibold bg-green-100 p-2 rounded-md">
          💰 Available Wallet:
          <span className="text-green-700"> Rs. {user.balance}/-</span>
        </p>

        {/* FORM */}
        <div className="mt-5 space-y-4">
          <div>
            <label className="font-medium">Amount</label>
            <input
              type="number"
              className="border w-full p-2 rounded-lg mt-1"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div>
            <label className="font-medium">Type</label>
            <select
              className="border w-full p-2 rounded-lg mt-1"
              value={type}
              onChange={(e) => setType(e.target.value as "Add" | "Less")}
            >
              <option value="Add">Add</option>
              <option value="Less">Less</option>
            </select>
          </div>

          <div>
            <label className="font-medium">Comment</label>
            <input
              type="text"
              className="border w-full p-2 rounded-lg mt-1"
              placeholder="Enter comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={updateWallet.isPending}
            className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-lg font-semibold shadow-md"
          >
            {updateWallet.isPending ? "Processing..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}

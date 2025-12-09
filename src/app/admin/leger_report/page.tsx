"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface DateRange {
  from: string;
  to: string;
}

interface WalletHistoryItem {
  id: string;
  user_id: string;
  opening_balance: number;
  closing_balance: number;
  amount: number;
  commission: number;
}

export default function WalletHistoryPage() {
  const [data, setData] = useState<WalletHistoryItem[]>([]);
  const [page, setPage] = useState<number>(1);
  const [limit] = useState<number>(25);
  const [loading, setLoading] = useState<boolean>(false);

  // Filters
  const [userId, setUserId] = useState<string>(
    "540c9bc8-2b23-4294-9c3e-7cf5861adcb1"
  );
  const [from, setFrom] = useState<string>("2025-11-05");
  const [to, setTo] = useState<string>("2025-12-06");

  const fetchHistory = async () => {
    setLoading(true);

    try {
      const payload = {
        page,
        limit,
        id: userId,
        type: "",
        ladger: true,
        dateRange: {
          from: new Date(from).toISOString(),
          to: new Date(to).toISOString(),
        } as DateRange,
      };

      const res = await axios.put(
        "https://api.recharge.kashishindiapvtltd.com/wallet/user/history",
        payload
      );

      const list: WalletHistoryItem[] = res.data?.data?.data || [];
      setData(list);
    } catch (error) {
      console.error("Error fetching wallet history:", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchHistory();
  }, [page, from, to]);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Wallet History</h1>

      {/* Filters */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="text-sm font-semibold">User ID</label>
          <input
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="text-sm font-semibold">From</label>
          <input
            type="date"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="text-sm font-semibold">To</label>
          <input
            type="date"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      <button
        onClick={fetchHistory}
        className="px-4 py-2 bg-blue-600 text-white rounded mb-6"
      >
        Search
      </button>

      {/* DATA TABLE */}
      <div className="overflow-x-auto border rounded">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Opening Balance</th>
              <th className="border p-2">Closing Balance</th>
              <th className="border p-2">Amount</th>
              <th className="border p-2">Commission</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5} className="text-center p-4">
                  Loading...
                </td>
              </tr>
            ) : data.length > 0 ? (
              data.map((item) => (
                <tr key={item.id}>
                  <td className="border p-2">{item.id}</td>
                  <td className="border p-2">{item.opening_balance}</td>
                  <td className="border p-2">{item.closing_balance}</td>
                  <td className="border p-2">{item.amount}</td>
                  <td className="border p-2">{item.commission}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center p-4">
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-between mt-4">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span className="font-semibold">Page: {page}</span>

        <button
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}

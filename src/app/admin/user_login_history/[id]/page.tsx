"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface UserInfo {
  name: string;
  mobile: string;
  email: string;
}

interface LoginHistoryItem {
  id: string;
  user_id: string;
  ip: string;
  latitude: number;
  longitude: number;
  device_info: string | null;
  IsActive: boolean;
  createdAt: string;
  updatedAt: string;
  user: UserInfo;
}

export default function LoginHistoryPage() {
  const [data, setData] = useState<LoginHistoryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchHistory = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.recharge.kashishindiapvtltd.com/auth/history/self/965ad7c5-44d4-4134-aedd-f327597222c6`
      );

      setData(response?.data?.data || []);
    } catch (error) {
      console.error("Error fetching login history:", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">User Login History</h1>

      {/* TABLE */}
      <div className="overflow-x-auto border rounded">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 text-sm">
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">IP</th>
              <th className="border p-2">Location</th>
              <th className="border p-2">Active</th>
              <th className="border p-2">Login Time</th>
              <th className="border p-2">User Name</th>
              <th className="border p-2">Mobile</th>
              <th className="border p-2">Email</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={8} className="text-center p-4">
                  Loading...
                </td>
              </tr>
            ) : data.length > 0 ? (
              data.map((item) => (
                <tr key={item.id}>
                  <td className="border p-2">{item.id}</td>
                  <td className="border p-2">{item.ip}</td>
                  <td className="border p-2">
                    {item.latitude}, {item.longitude}
                  </td>
                  <td className="border p-2">
                    <span
                      className={`px-2 py-1 rounded text-white ${
                        item.IsActive ? "bg-green-600" : "bg-red-600"
                      }`}
                    >
                      {item.IsActive ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="border p-2">
                    {new Date(item.createdAt).toLocaleString("en-IN")}
                  </td>
                  <td className="border p-2">{item.user?.name}</td>
                  <td className="border p-2">{item.user?.mobile}</td>
                  <td className="border p-2">{item.user?.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="text-center p-4">
                  No Login Records Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

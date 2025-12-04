'use client';
import React, { useEffect, useState } from 'react';

interface FundData {
  id: string;
  user_id: string;
  deposite_amount: string;
  payment_method: string;
  bank_name: string;
  account_number: string;
  bank_utr: string;
  remark: string;
  date: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

const FundTable = () => {
  const [funds, setFunds] = useState<FundData[]>([]);

  useEffect(() => {
    const fetchFunds = async () => {
      try {
        const res = await fetch('https://api.partner.kashishindiapvtltd.com/api/fund');
        const result = await res.json();
        setFunds(result.data);
      } catch (error) {
        console.error('Error fetching fund data:', error);
      }
    };

    fetchFunds();
  }, []);

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
        const confirmed = confirm("Are you sure you want to Change the status?");
        if (!confirmed) return;
        let newurl=newStatus=="SUCCESS"?"/status":'';
      const response =  await fetch(`https://api.partner.kashishindiapvtltd.com/api/fund${newurl}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        // Update the local state
        setFunds((prevFunds) =>
          prevFunds.map((fund) =>
            fund.id === id ? { ...fund, status: newStatus } : fund
          )
        );
      } else {
        console.error('Failed to update status');
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Fund Data Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">#</th>
              <th className="border p-2">Amount</th>
              <th className="border p-2">Method</th>
              <th className="border p-2">Bank</th>
              <th className="border p-2">Account Number</th>
              <th className="border p-2">UTR</th>
              <th className="border p-2">Remark</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {funds.map((fund, index) => (
              <tr key={fund.id} className="hover:bg-gray-50">
                <td className="border p-2 text-center">{index + 1}</td>
                <td className="border p-2 text-center">{fund.deposite_amount}</td>
                <td className="border p-2 text-center">{fund.payment_method}</td>
                <td className="border p-2 text-center">{fund.bank_name}</td>
                <td className="border p-2 text-center">{fund?.account_number||''}</td>
                <td className="border p-2 text-center">{fund.bank_utr}</td>
                <td className="border p-2 text-center">{fund.remark}</td>
                <td className="border p-2 text-center">{fund.date}</td>
                <td className="border p-2 text-center">
                  <select
                    className="border rounded p-1"
                    value={fund.status}
                    onChange={(e) => handleStatusChange(fund.id, e.target.value)}
                  >
                    <option value="ACTIVE">{fund.status}</option>
                    <option value="FAILED">FAILED</option>
                    <option value="SUCCESS">SUCCESS</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FundTable;

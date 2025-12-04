// 'use client';

// import React from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// // Format numbers like Indian currency
// const formatIndianNumber = (num: string | number) => {
//     const number = typeof num === 'string' ? parseFloat(num) : num;
//     return new Intl.NumberFormat('en-IN').format(number || 0);
// };

// const DevHooks = () => {
//     // Static stats
//     const totalRecharges = 123456;
//     const totalRevenue = 9876543;
//     const successRate = 91.8;
//     const activeUsers = 1520;

//     // Static array of operator data
//     const operatorData = [
//         {
//             operator_name: "Airtel",
//             total_sell: "150000",
//             total_admin_comm: "5000",
//             total_distributor_comm: "2000",
//             total_retailer_comm: "1000"
//         },
//         {
//             operator_name: "Jio",
//             total_sell: "180000",
//             total_admin_comm: "6000",
//             total_distributor_comm: "2500",
//             total_retailer_comm: "1500"
//         },
//         {
//             operator_name: "Vi",
//             total_sell: "120000",
//             total_admin_comm: "4000",
//             total_distributor_comm: "1800",
//             total_retailer_comm: "900"
//         }
//     ];

//     return (
//         <div className="p-6 bg-gray-50 min-h-screen">
//             <div className="mb-6">
//                 <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
//                 <p className="text-gray-600">Real-time overview of recharge statistics</p>
//             </div>

//             {/* Static Stats Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
//                 <Card>
//                     <CardHeader>
//                         <CardTitle className="text-lg font-medium">Total Sales</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                         <div className="text-2xl font-bold">{formatIndianNumber(totalRecharges)}</div>
//                         <p className="text-green-600 text-sm">+12% from last month</p>
//                     </CardContent>
//                 </Card>

//                 <Card>
//                     <CardHeader>
//                         <CardTitle className="text-lg font-medium">Total Admin Commision</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                         <div className="text-2xl font-bold">₹{formatIndianNumber(totalRevenue)}</div>
//                         <p className="text-green-600 text-sm">+8% from last month</p>
//                     </CardContent>
//                 </Card>

//                 <Card>
//                     <CardHeader>
//                         <CardTitle className="text-lg font-medium">Success Distributer Commision</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                         <div className="text-2xl font-bold">{successRate}%</div>
//                         <p className="text-green-600 text-sm">+0.3% from last month</p>
//                     </CardContent>
//                 </Card>

//                 <Card>
//                     <CardHeader>
//                         <CardTitle className="text-lg font-medium">Retailer Commision</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                         <div className="text-2xl font-bold">{formatIndianNumber(activeUsers)}</div>
//                         <p className="text-green-600 text-sm">+5% from last month</p>
//                     </CardContent>
//                 </Card>
//             </div>

//             {/* Operator Data Section */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {operatorData.map((operator, index) => (
//                     <Card key={index}>
//                         <CardHeader>
//                             <CardTitle className="text-lg font-semibold">{operator?.operator_name}</CardTitle>
//                         </CardHeader>
//                         <CardContent className="space-y-2 text-sm text-gray-700">
//                             <p>Total Sell: ₹{formatIndianNumber(operator?.total_sell)}</p>
//                             <p>Admin Commission: ₹{formatIndianNumber(operator?.total_admin_comm)}</p>
//                             <p>Distributor Commission: ₹{formatIndianNumber(operator?.total_distributor_comm)}</p>
//                             <p>Retailer Commission: ₹{formatIndianNumber(operator?.total_retailer_comm)}</p>
//                         </CardContent>
//                     </Card>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default DevHooks;

'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { axiosInstance } from '@/lib/axios';


const RechargeDashboard = () => {
    const [dayReportData, setDayReportData] = useState([]);
    const [dayTotalData, setDayTotalData] = useState<any[]>([]);
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [mounted, setMounted] = useState(false);

    // Set default dates to today
    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setStartDate(today);
        setEndDate(today);
    }, []);

    const fetchDayReport = async (start: string, end: string) => {
        try {
            const user = JSON.parse(localStorage.getItem('user') || '{}');
            const userId = user.userId;

            const response = await axiosInstance.post('report/day-report', {
                userId,
                startDate: start,
                endDate: end
            });

            setDayReportData(response.data.data.filter((item: any) => item.operator !== 'Total'));
            setDayTotalData(response.data.data.filter((item: any) => item.operator === 'Total'));
        } catch (error) {
            console.error('Error fetching day report:', error);
            toast.error('Failed to fetch report data');
        }
    };

    // Fetch data when dates change
    useEffect(() => {
        if (startDate && endDate) {
            fetchDayReport(startDate, endDate);
        }
    }, [startDate, endDate]);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleDateFilter = () => {
        if (!startDate || !endDate) {
            toast.error('Please select both start and end dates');
            return;
        }

        if (new Date(startDate) > new Date(endDate)) {
            toast.error('Start date cannot be after end date');
            return;
        }

        fetchDayReport(startDate, endDate);
    };

    const handleReset = () => {
        const today = new Date().toISOString().split('T')[0];
        setStartDate(today);
        setEndDate(today);
    };

    if (!mounted) return null;

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600">Real-time overview of recharge statistics</p>
            </div>

            {/* Date Filter Section */}
            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>Filter by Date Range</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-4 items-end">
                        <div className="flex flex-col">
                            <label htmlFor="startDate" className="text-sm font-medium text-gray-700 mb-1">
                                Start Date
                            </label>
                            <input
                                type="date"
                                id="startDate"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="endDate" className="text-sm font-medium text-gray-700 mb-1">
                                End Date
                            </label>
                            <input
                                type="date"
                                id="endDate"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div className="flex gap-2">
                            <button
                                onClick={handleDateFilter}
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                            >
                                Apply Filter
                            </button>

                            <button
                                onClick={handleReset}
                                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
                            >
                                Reset to Today
                            </button>
                        </div>
                    </div>

                </CardContent>
            </Card>

            {/* Data Table */}
            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>Operator-wise Performance</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full table-auto">
                            <thead>
                                <tr className="border-b text-sm">
                                    <th className="text-left py-2 border border-gray-400  px-4">Operator</th>
                                    <th className="text-right py-2 border border-gray-400 px-4">Total</th>
                                    <th className="text-right py-2 border border-gray-400 px-4">Total Amt</th>
                                    <th className="text-right py-2 border border-gray-400 px-4">Success</th>
                                    <th className="text-right py-2 border border-gray-400 px-4">Success Amt</th>
                                    <th className="text-right py-2 border border-gray-400 px-4">Failed</th>
                                    <th className="text-right py-2 border border-gray-400 px-4">Failed Amt</th>
                                    <th className="text-right py-2 border border-gray-400 px-4">Pending</th>
                                    <th className="text-right py-2 border border-gray-400 px-4">Pending Amt</th>
                                    <th className="text-right py-2 border border-gray-400 px-4">Refunded</th>
                                    <th className="text-right py-2 border border-gray-400 px-4">Refunded Amt</th>
                                    <th className="text-right py-2 border border-gray-400 px-4">Commission</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dayReportData.map((operator: any, index) => (
                                    <tr
                                        key={index}
                                        className="odd:bg-gray-200 odd-text-black even:bg-white   even:text-gray-900"
                                    >
                                        <td className="py-3 px-4 border border-gray-400 font-medium">{operator.operator}</td>
                                        <td className="py-3 px-4 border border-gray-400 text-right">{operator.total}</td>
                                        <td className="py-3 px-4 border border-gray-400 text-right">{operator.totalAmt}</td>
                                        <td className="py-3 px-4 border border-gray-400 text-right text-green-600">{operator.success}</td>
                                        <td className="py-3 px-4 border border-gray-400 text-right font-medium">{operator.successAmt}</td>
                                        <td className="py-3 px-4 border border-gray-400 text-right text-red-600">{operator.failed}</td>
                                        <td className="py-3 px-4 border border-gray-400 text-right font-medium">{operator.failAmt}</td>
                                        <td className="py-3 px-4 border border-gray-400 text-right font-medium">{operator.pending}</td>
                                        <td className="py-3 px-4 border border-gray-400 text-right font-medium">{operator.pendingAmt}</td>
                                        <td className="py-3 px-4 border border-gray-400 text-right font-medium">{operator.refunded}</td>
                                        <td className="py-3 px-4 border border-gray-400 text-right font-medium">{operator.refundedAmt}</td>
                                        <td className="py-3 px-4 border border-gray-400 text-right text-blue-600">{operator.retailerComm}</td>
                                    </tr>
                                ))}
                                <span className='mt-10 pt-10'>

                                </span>

                                {dayTotalData.map((operator: any, index) => (
                                    <tr key={index} className="border-b  hover:bg-gray-100 bg-gray-60 font-semibold">
                                        <td className="py-3 px-4 border border-gray-400 font-medium">{operator.operator}</td>
                                        <td className="py-3 px-4 border border-gray-400 text-right">{operator.total}</td>
                                        <td className="py-3 px-4 border border-gray-400 text-right">{operator.totalAmt}</td>
                                        <td className="py-3 px-4 border border-gray-400 text-right text-green-600">{operator.success}</td>
                                        <td className="py-3 px-4 border border-gray-400 text-right font-medium">{operator.successAmt}</td>
                                        <td className="py-3 px-4 border border-gray-400 text-right text-red-600">{operator.failed}</td>
                                        <td className="py-3 px-4 border border-gray-400 text-right font-medium">{operator.failAmt}</td>
                                        <td className="py-3 px-4 border border-gray-400 text-right font-medium">{operator.pending}</td>
                                        <td className="py-3 px-4 border border-gray-400 text-right font-medium">{operator.pendingAmt}</td>
                                        <td className="py-3 px-4 border border-gray-400 text-right font-medium">{operator.refunded}</td>
                                        <td className="py-3 px-4 border border-gray-400 text-right font-medium">{operator.refundedAmt}</td>
                                        <td className="py-3 px-4 border border-gray-400 text-right text-blue-600">{operator.retailerComm}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default RechargeDashboard;
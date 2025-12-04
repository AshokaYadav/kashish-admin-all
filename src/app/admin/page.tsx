'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    PieChart,
    Pie,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Cell,
    ResponsiveContainer
} from 'recharts';
import { useGetMonthlyRevenue } from '@/hooks/stats/use-monthly-revenue';
import { useGetOperatorRechargesFq } from '@/hooks/stats/recaharge-operator-fq';
import { useGetSuccessRateRecharge } from '@/hooks/stats/rech-succ-rate';
import { useGetActiveDecendets } from '@/hooks/users/use-get-active-decentents';
import { useGetCategoryRechargesFq } from '@/hooks/stats/recharge-category-fq';
import { useGetCircleRechargesFq } from '@/hooks/stats/recharge-circle-fq';

// Custom number formatting function for Indian format
const formatIndianNumber = (num: string) => {
    if (num === undefined || num === null) return '0';
    const number = typeof num === 'string' ? parseFloat(num) : num;
    return new Intl.NumberFormat('en-IN').format(number);
};

interface IMonthlyRechargeRevenue {
    month: string;
    recharges: number;
    revenue: number;
}

interface IStateRevenue {
    state: string;
    revenue: number;
}

interface ICategoryData {
    name: string;
    value: number;
}

const RechargeDashboard = () => {
    const [mounted, setMounted] = useState(false);

    const { data: monthlyRevenue, refetch: refetchMonthlyRevenue } = useGetMonthlyRevenue();
    const { data: RqCirFq, isLoading: isLoadingRCirclefq, refetch: refetchCircleRechargesFq } = useGetCircleRechargesFq();
    const { data: RqCatFq, isLoading: isLoadingRCategoryfq, refetch: refetchCategoryRechargesFq } = useGetCategoryRechargesFq();
    const { data: RqOpFq, isLoading: isLoadingROfq, refetch: refetchOperatorRechargesFq } = useGetOperatorRechargesFq();
    const { data: successRate, isLoading: isLoadingSuccessRate, refetch: refetchSuccessRate } = useGetSuccessRateRecharge();
    const { data: activeDecendents, isLoading: isLoadingDecendents, refetch: refetchDecendents } = useGetActiveDecendets();

    useEffect(() => {
        setMounted(true);
    }, []);

    const monthlyData: IMonthlyRechargeRevenue[] =
        monthlyRevenue?.map(({ total_return, month, count }: { total_return: number, month: string, count: number }) => ({ month, recharges: count, revenue: total_return })) || [];

    const categoryData: ICategoryData[] = RqOpFq?.map(({ name, count }: { name: string, count: number }) => ({ name, value: count })) || [];
    const stateData: IStateRevenue[] = RqCirFq?.map(({ name, total_return }: { name: string, total_return: number }) => ({ state: name, revenue: total_return })) || [];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

    // Calculate totals
    const totalRecharges: string = `${monthlyData.reduce((acc, curr) => acc + curr.recharges, 0)}`;
    const totalRevenue = monthlyData?.reduce((acc, curr) => acc + curr.revenue, 0);

    if (!mounted) return null;

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600">Real-time overview of recharge statistics</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg font-medium">Total Recharges</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{formatIndianNumber(totalRecharges)}</div>
                        <p className="text-green-600 text-sm">+12% from last month</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg font-medium">Total Revenue</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">₹{formatIndianNumber(`${totalRevenue}`)}</div>
                        <p className="text-green-600 text-sm">+8% from last month</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg font-medium">Success Rate</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{successRate?.success_rate || 0}%</div>
                        <p className="text-green-600 text-sm">+0.3% from last month</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg font-medium">Active Users</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{activeDecendents || 0}</div>
                        <p className="text-green-600 text-sm">+5% from last month</p>
                    </CardContent>
                </Card>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Monthly Trends */}
                <Card>
                    <CardHeader>
                        <CardTitle>Monthly Trends</CardTitle>
                    </CardHeader>
                    <CardContent className="h-[400px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={monthlyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip formatter={(value) => formatIndianNumber(`${value}`)} />
                                <Legend />
                                <Line
                                    type="monotone"
                                    dataKey="recharges"
                                    stroke="#8884d8"
                                    name="Recharges"
                                    strokeWidth={2}
                                    dot={{ r: 4 }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="revenue"
                                    stroke="#82ca9d"
                                    name="Revenue (₹)"
                                    strokeWidth={2}
                                    dot={{ r: 4 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Category Distribution */}
                <Card>
                    <CardHeader>
                        <CardTitle>Recharge Categories</CardTitle>
                    </CardHeader>
                    <CardContent className="h-[400px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={categoryData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                                    outerRadius={140}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {categoryData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* State-wise Revenue */}
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>State-wise Revenue</CardTitle>
                    </CardHeader>
                    <CardContent className="h-[400px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={stateData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="state" />
                                <YAxis tickFormatter={(value) => `₹${formatIndianNumber(value)}`} />
                                <Tooltip formatter={(value) => `₹${formatIndianNumber(`${value}`)}`} />
                                <Legend />
                                <Bar dataKey="revenue" fill="#8884d8" name="Revenue (₹)" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default RechargeDashboard;
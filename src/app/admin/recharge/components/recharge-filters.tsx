"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Search, X } from "lucide-react";
import { useRechargeFilters } from "../hooks/use-recharge-filters";

interface RechargeFiltersProps {
    onFilter: (filters: any) => void;
    operators: { id: string; name: string }[];
    circles: { id: string; name: string }[];
    apis: { id: string; name: string }[];
}

export function RechargeFilters({ onFilter, operators, circles, apis }: RechargeFiltersProps) {
    const {
        filters,
        setFilter,
        resetFilters,
        applyFilters
    } = useRechargeFilters();

    const statusOptions = [
        { value: "success", label: "Success" },
        { value: "failed", label: "Failed" },
        { value: "pending", label: "Pending" },
        { value: "processing", label: "Processing" },
    ];

    return (
        <Card className="mb-6">
            <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Mobile Number Filter */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Mobile Number</label>
                        <Input
                            placeholder="Search by mobile..."
                            value={filters.mobile || ""}
                            onChange={(e) => setFilter("mobile", e.target.value)}
                        />
                    </div>

                    {/* Email Filter */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <Input
                            placeholder="Search by email..."
                            value={filters.email || ""}
                            onChange={(e) => setFilter("email", e.target.value)}
                        />
                    </div>

                    {/* Transaction ID Filter */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Transaction ID</label>
                        <Input
                            placeholder="Search by transaction ID..."
                            value={filters.transactionId || ""}
                            onChange={(e) => setFilter("transactionId", e.target.value)}
                        />
                    </div>

                    {/* Status Filter */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Status</label>
                        <Select
                            value={filters.status || ""}
                            onValueChange={(value) => setFilter("status", value)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="">All Status</SelectItem>
                                {statusOptions.map((status) => (
                                    <SelectItem key={status.value} value={status.value}>
                                        {status.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Operator Filter */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Operator</label>
                        <Select
                            value={filters.operatorId || ""}
                            onValueChange={(value) => setFilter("operatorId", value)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select operator" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="">All Operators</SelectItem>
                                {operators.map((operator) => (
                                    <SelectItem key={operator.id} value={operator.id}>
                                        {operator.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Circle Filter */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Circle</label>
                        <Select
                            value={filters.circleId || ""}
                            onValueChange={(value) => setFilter("circleId", value)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select circle" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="">All Circles</SelectItem>
                                {circles.map((circle) => (
                                    <SelectItem key={circle.id} value={circle.id}>
                                        {circle.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* API Filter */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">API</label>
                        <Select
                            value={filters.apiId || ""}
                            onValueChange={(value) => setFilter("apiId", value)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select API" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="">All APIs</SelectItem>
                                {apis.map((api) => (
                                    <SelectItem key={api.id} value={api.id}>
                                        {api.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* User ID Filters */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">User ID</label>
                        <Input
                            placeholder="Search by user ID..."
                            value={filters.retailerId || filters.distributorId || filters.adminId || ""}
                            onChange={(e) => {
                                const value = e.target.value;
                                // You might want to add logic here to determine which ID type to set
                                setFilter("retailerId", value);
                            }}
                        />
                    </div>
                </div>

                <div className="flex justify-end gap-2 mt-4">
                    <Button
                        variant="outline"
                        onClick={resetFilters}
                        className="flex items-center gap-2"
                    >
                        <X className="h-4 w-4" />
                        Reset
                    </Button>
                    <Button
                        onClick={() => {
                            applyFilters();
                            onFilter(filters);
                        }}
                        className="flex items-center gap-2"
                    >
                        <Search className="h-4 w-4" />
                        Apply Filters
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
} 
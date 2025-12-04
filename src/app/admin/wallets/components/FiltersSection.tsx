
import React from 'react';
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export interface FiltersSectionProps {
    searchQuery: string;
    setSearchQuery: (val: string) => void;
    statusFilter: string;
    setStatusFilter: (val: string) => void;
}

export default function FiltersSection({ searchQuery, statusFilter, setSearchQuery, setStatusFilter }: FiltersSectionProps) {
    return (
        <div className="flex gap-4 items-center">
            <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                    className="pl-10"
                    placeholder="Search by email..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40">
                    <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="ALL">All</SelectItem>
                    <SelectItem value="ACTIVE">Active</SelectItem>
                    <SelectItem value="INACTIVE">Inactive</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
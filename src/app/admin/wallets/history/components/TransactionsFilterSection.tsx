import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TransactionFilters } from '../types/types'

interface TransactionFiltersProps {
    filters: TransactionFilters;
    onFilterChange: (filters: Partial<TransactionFilters>) => void;
}

export function TransactionFiltersSection({ filters, onFilterChange }: TransactionFiltersProps) {
    return (
        <div className="flex gap-4">
            <div className="flex items-center gap-2 flex-1">
                <Search className="h-4 w-4 text-gray-400" />
                <Input
                    placeholder="Search transactions..."
                    className="max-w-sm bg-white"
                    value={filters.search}
                    onChange={(e) => onFilterChange({ search: e.target.value })}
                />
            </div>
            <Select value={filters.status} onValueChange={(value) => onFilterChange({ status: value })}>
                <SelectTrigger className="w-32 bg-white">
                    <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="SUCCESS">Success</SelectItem>
                    <SelectItem value="PENDING">Pending</SelectItem>
                    <SelectItem value="FAILED">Failed</SelectItem>
                </SelectContent>
            </Select>
            <Select value={filters.type} onValueChange={(value) => onFilterChange({ type: value })}>
                <SelectTrigger className="w-40 bg-white">
                    <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="RECHARGE">Recharge</SelectItem>
                    <SelectItem value="DEBIT">Debit</SelectItem>
                    <SelectItem value="CREDIT">Credit</SelectItem>
                    <SelectItem value="RECHARGE_COMMISSION">Recharge Commission</SelectItem>
                    <SelectItem value="DEBIT_COMMISSION">Debit Commission</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
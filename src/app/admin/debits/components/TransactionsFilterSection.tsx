import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TransactionFilters } from '@/types/types';

interface TransactionFiltersProps {
    filters: TransactionFilters;
    onFilterChange: (key: keyof TransactionFilters, value: string) => void;
}

export function TransactionFiltersSection({ filters, onFilterChange }: TransactionFiltersProps) {
    return (
        <div className="flex gap-8">
            <div className="flex items-center gap-2 flex-1">
                <Search className="h-4 w-4 text-gray-400" />
                <Input
                    placeholder="Search transactions..."
                    className="max-w-sm bg-white"
                    value={filters.search}
                    onChange={(e) => onFilterChange('search', e.target.value )}
                />
            </div>
            <Select value={filters.status} onValueChange={(value) => onFilterChange('status',  value)}>
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
        </div>
    );
}
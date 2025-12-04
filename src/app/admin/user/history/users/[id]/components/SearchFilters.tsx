import { memo } from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { useDebounce } from '@/hooks/useDebounce';
import { FilterState } from '@/types/types';
import { TransactionFilters } from '../types/types';
// import { FilterKey, FilterState } from '../types';

interface SearchFiltersProps {
    onFilterChange: (key: keyof TransactionFilters, value: string) => void;
    filters: TransactionFilters;
}

export const SearchFilters = memo(function SearchFilters({
    onFilterChange,
    filters
}: SearchFiltersProps) {
    const debouncedSearch = useDebounce((value: string) => {
        onFilterChange('search', value);
    }, 300);

    return (
        <div className="flex gap-4 mb-6">
            <div className="flex-1">
                <div className="relative">
                    <Input
                        placeholder="Search by mobile or transaction ID..."
                        defaultValue={filters.search}
                        onChange={(e) => debouncedSearch(e.target.value)}
                        className="pl-10"
                    />
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
            </div>

            <Select
                value={filters.status}
                onValueChange={(value) => onFilterChange('status', value)}
            >
                <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="SUCCESS">Success</SelectItem>
                    <SelectItem value="PENDING">Pending</SelectItem>
                    <SelectItem value="FAILED">Failed</SelectItem>
                    <SelectItem value="HOLD">Hold</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
});
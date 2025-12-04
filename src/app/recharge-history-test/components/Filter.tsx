import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, X, Calendar as CalendarIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface FilterValues {
    circle: string;
    identifier: string;
    identifierType: 'operatorRef' | 'mobile' | 'orderId';
    userIdentifier: string;
    userIdentifierType: 'username' | 'mobile';
    amount: string;
    fromDate: Date | null;
    toDate: Date | null;
}

interface RechargeFiltersProps {
    onApplyFilters: (filters: FilterValues) => void;
}

// Simple date input component as a fallback if shadcn components aren't available
const SimpleDateInput = ({ value, onChange, placeholder }: {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
}) => {
    return (
        <Input
            type="date"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
        />
    );
};

const RechargeFilters: React.FC<RechargeFiltersProps> = ({ onApplyFilters }) => {
    const [filtersVisible, setFiltersVisible] = useState(false);

    const [filters, setFilters] = useState<FilterValues>({
        circle: '',
        identifier: '',
        identifierType: 'mobile',
        userIdentifier: '',
        userIdentifierType: 'username',
        amount: '',
        fromDate: null,
        toDate: null,
    });

    // String-based dates as fallback
    const [fromDateStr, setFromDateStr] = useState('');
    const [toDateStr, setToDateStr] = useState('');

    const circleOptions = [
        { value: '', label: 'All Circles' },
        { value: 'Delhi NCR', label: 'Delhi NCR' },
        { value: 'Mumbai', label: 'Mumbai' },
        { value: 'Kolkata', label: 'Kolkata' },
        { value: 'Maharashtra', label: 'Maharashtra' },
        { value: 'Gujarat', label: 'Gujarat' },
        { value: 'Andhra Pradesh', label: 'Andhra Pradesh' },
        { value: 'Karnataka', label: 'Karnataka' },
        { value: 'Tamil Nadu', label: 'Tamil Nadu' },
        { value: 'Kerala', label: 'Kerala' },
        { value: 'Punjab', label: 'Punjab' },
        { value: 'Haryana', label: 'Haryana' },
        { value: 'UP East', label: 'UP East' },
        { value: 'UP West', label: 'UP West' },
        { value: 'Rajasthan', label: 'Rajasthan' },
        { value: 'Madhya Pradesh', label: 'Madhya Pradesh' },
        { value: 'West Bengal', label: 'West Bengal' },
        { value: 'Bihar', label: 'Bihar' },
        { value: 'Orissa', label: 'Orissa' },
        { value: 'Assam', label: 'Assam' },
        { value: 'North East', label: 'North East' },
        { value: 'Jammu & Kashmir', label: 'Jammu & Kashmir' },
        { value: 'Himachal Pradesh', label: 'Himachal Pradesh' },
    ];

    const handleChange = (name: keyof FilterValues, value: any) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
    };

    const resetFilters = () => {
        setFilters({
            circle: '',
            identifier: '',
            identifierType: 'mobile',
            userIdentifier: '',
            userIdentifierType: 'username',
            amount: '',
            fromDate: null,
            toDate: null,
        });
        setFromDateStr('');
        setToDateStr('');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // If using string dates, convert them to Date objects
        let updatedFilters = { ...filters };

        if (fromDateStr && !filters.fromDate) {
            updatedFilters.fromDate = new Date(fromDateStr);
        }

        if (toDateStr && !filters.toDate) {
            updatedFilters.toDate = new Date(toDateStr);
        }

        onApplyFilters(updatedFilters);
    };

    // Check if shadcn components are available
    const useFallbackDateInput = typeof Calendar === 'undefined' || typeof Popover === 'undefined';

    return (
        <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Recharge History</h2>
                <Button
                    variant="outline"
                    onClick={() => setFiltersVisible(!filtersVisible)}
                >
                    <Filter className="h-4 w-4 mr-2" />
                    {filtersVisible ? 'Hide Filters' : 'Show Filters'}
                </Button>
            </div>

            {filtersVisible && (
                <Card className="mb-6">
                    <CardContent className="pt-6">
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {/* Circle filter */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Circle</label>
                                    <Select
                                        value={filters.circle}
                                        onValueChange={(value) => handleChange('circle', value)}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select Circle" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {
                                                circleOptions.map(option => {
                                                    // alert(`option, ${JSON.stringify(option)}`)
                                                    return (
                                                        <SelectItem key={option.value || 'some random value'} value={option.value || 'value'}>
                                                            {option.label}
                                                        </SelectItem>
                                                    )
                                                })
                                            }
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Identifier filter */}
                                <div className="flex flex-col">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Search Identifier</label>
                                    <div className="flex space-x-2">
                                        <Select
                                            value={filters.identifierType}
                                            onValueChange={(value: 'operatorRef' | 'mobile' | 'orderId') => handleChange('identifierType', value)}
                                        >
                                            <SelectTrigger className="w-32">
                                                <SelectValue placeholder="Type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="operatorRef">Operator Ref</SelectItem>
                                                <SelectItem value="mobile">Mobile</SelectItem>
                                                <SelectItem value="orderId">Order ID</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <Input
                                            placeholder="Enter value"
                                            value={filters.identifier}
                                            onChange={(e) => handleChange('identifier', e.target.value)}
                                            className="flex-1"
                                        />
                                    </div>
                                </div>

                                {/* User identifier filter */}
                                <div className="flex flex-col">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">User Search</label>
                                    <div className="flex space-x-2">
                                        <Select
                                            value={filters.userIdentifierType}
                                            onValueChange={(value: 'username' | 'mobile') => handleChange('userIdentifierType', value)}
                                        >
                                            <SelectTrigger className="w-32">
                                                <SelectValue placeholder="Type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="username">Username</SelectItem>
                                                <SelectItem value="mobile">Mobile</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <Input
                                            placeholder="Enter value"
                                            value={filters.userIdentifier}
                                            onChange={(e) => handleChange('userIdentifier', e.target.value)}
                                            className="flex-1"
                                        />
                                    </div>
                                </div>

                                {/* Amount filter */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                                    <Input
                                        type="number"
                                        placeholder="Enter amount"
                                        value={filters.amount}
                                        onChange={(e) => handleChange('amount', e.target.value)}
                                    />
                                </div>

                                {/* Date range filter - with fallback to standard HTML input if shadcn components aren't available */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">From Date</label>
                                    <SimpleDateInput
                                        value={fromDateStr}
                                        onChange={(value) => {
                                            setFromDateStr(value);
                                            if (value) {
                                                handleChange('fromDate', new Date(value));
                                            } else {
                                                handleChange('fromDate', null);
                                            }
                                        }}
                                        placeholder="Select start date"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">To Date</label>
                                    <SimpleDateInput
                                        value={toDateStr}
                                        onChange={(value) => {
                                            setToDateStr(value);
                                            if (value) {
                                                handleChange('toDate', new Date(value));
                                            } else {
                                                handleChange('toDate', null);
                                            }
                                        }}
                                        placeholder="Select end date"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end space-x-2 mt-6">
                                <Button type="button" variant="outline" onClick={resetFilters}>
                                    <X className="h-4 w-4 mr-2" />
                                    Reset
                                </Button>
                                <Button type="submit">
                                    <Search className="h-4 w-4 mr-2" />
                                    Apply Filters
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

export default RechargeFilters;
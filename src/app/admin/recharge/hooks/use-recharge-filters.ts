import { useState } from 'react';

interface RechargeFilters {
    mobile?: string;
    email?: string;
    adminId?: string;
    retailerId?: string;
    distributorId?: string;
    operatorId?: string;
    status?: string;
    circleId?: string;
    apiId?: string;
    transactionId?: string;
}

export function useRechargeFilters() {
    const [filters, setFilters] = useState<RechargeFilters>({});

    const setFilter = (key: keyof RechargeFilters, value: string) => {
        setFilters(prev => ({
            ...prev,
            [key]: value || undefined // Remove empty strings
        }));
    };

    const resetFilters = () => {
        setFilters({});
    };

    const applyFilters = () => {
        // Remove empty values
        const cleanFilters = Object.fromEntries(
            Object.entries(filters).filter(([_, value]) => value !== undefined && value !== '')
        );
        return cleanFilters;
    };

    return {
        filters,
        setFilter,
        resetFilters,
        applyFilters
    };
} 
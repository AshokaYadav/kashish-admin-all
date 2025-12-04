import { useState, useCallback, useEffect } from 'react';
import { TransactionFilters } from '../types/types';
import { useGetTransactions } from '@/hooks/wallet/history/useGetTransactions';
import { IPagintatedTxnRequest } from '@/apis/wallets/transactions';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useParams } from 'next/navigation';


const defaultPaginationParams: IPagintatedTxnRequest = {
    page: 1,
    limit: 25,
    id: ''
}

const prevDate: Date = new Date();
prevDate.setDate(prevDate.getDate()-30);

const currentDate: Date = new Date();
currentDate.setDate(currentDate.getDate()+1);

const defaultDateRange = {
    from : prevDate,
    to: currentDate,
}

export const useTransactions = (isApisWalletTxns = false) => {
    const { id }: { id: string } = useParams();
    const { user } = useSelector((state: RootState) => state.auth);
    const [dateRange, setDateRange] = useState<{from: Date; to: Date}>({...defaultDateRange});

    // const { id }: { id: string } = useParams();
    const [paginatedParams, setPaginatedParams] = useState<IPagintatedTxnRequest>({ ...defaultPaginationParams, id: id || ''});

    const handlePaginationParamsUpdate = (key: string, value: number | string) => {
        setPaginatedParams({ ...paginatedParams, [key]: value })
    }

    const [error, setError] = useState<string | null>(null);

    const [filters, setFilters] = useState<TransactionFilters>({
        search: '',
        status: 'all',
        type: 'all'
    });


    function updateDateRange(key: 'from' | 'to', value: Date) {
        setDateRange({...dateRange, [key]: value.toLocaleString()});
    }

    const { data, isLoading: isLoadingTxns, refetch } = useGetTransactions({ isApisWallet: isApisWalletTxns, ...paginatedParams, id: id || '' , dateRange});
    const filteredTxnHistory = data?.data?.filter((history) => {
        const statusMatch: boolean = filters.status === 'all' || (history.status.toLowerCase() === filters.status.toLowerCase());
        const matchesSearch: boolean = filters.search === '' ||
            history.recharge_id.toLowerCase().includes(filters.search.toLowerCase()) ||
            history.debit_txn_id?.toLowerCase().includes(filters.search.toLowerCase()) ||
            history.user_id?.toLowerCase().includes(filters.search.toLowerCase()) || false;
        return statusMatch && matchesSearch;
    }) || [];

    const updateFilters = (key: keyof TransactionFilters, value: string) => {
        setFilters({ ...filters, [key]: value });
    }

    const updateQueryFilter = (query: string) => {
        setFilters({ ...filters, search: query });
    }

    const updateStatusFilter = (status: string) => {
        setFilters({ ...filters, status });
    }

    // const updateFilters = (newFilters: Partial<TransactionFilters>) => {
    //     setFilters(prev => ({ ...prev, ...newFilters }));
    //     handlePaginationParamsUpdate('page', 1)
    // }

    const handlePageChange = useCallback((page: number) => {
        handlePaginationParamsUpdate('page', page)
    }, []);

    return {
        user, error, handlePageChange, filters,
        updateFilters, updateQueryFilter, updateStatusFilter,
        filteredTxnHistory,
        

        data, isLoadingTxns, refetch, updateDateRange, dateRange, setDateRange,
        paginatedParams, handlePaginationParamsUpdate,
    };
};
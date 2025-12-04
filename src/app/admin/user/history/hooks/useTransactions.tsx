import { useState, useCallback } from 'react';
import { TransactionFilters } from '../types/types';
import { useGetTransactions } from '@/hooks/wallet/history/useGetTransactions';
import { IPagintatedTxnRequest } from '@/apis/wallets/transactions';
import { useParams } from 'next/navigation';


const defaultPaginationParams: IPagintatedTxnRequest = {
    page: 1,
    limit: 10,
    id: ''
}

export const useTransactions = (isApisWalletTxns = false) => {
    const { id }: { id: string } = useParams();
    const [paginatedParams, setPaginatedParams] = useState<IPagintatedTxnRequest>({ ...defaultPaginationParams, id });


    const handlePaginationParamsUpdate = (key: string, value: number | string) => {
        setPaginatedParams({ ...paginatedParams, [key]: value })
    }


    const [error, setError] = useState<string | null>(null);

    const [filters, setFilters] = useState<TransactionFilters>({
        search: '',
        status: 'all',
        type: 'all'
    });

    const { data, isLoading: isLoadingTxns, refetch } = useGetTransactions({ isApisWallet: isApisWalletTxns, ...paginatedParams });



    const updateFilters = useCallback((newFilters: Partial<TransactionFilters>) => {
        setFilters(prev => ({ ...prev, ...newFilters }));
        handlePaginationParamsUpdate('page', 1)
    }, []);

    const handlePageChange = useCallback((page: number) => {
        handlePaginationParamsUpdate('page', page)
    }, []);

    return {
        error,
        filters,
        updateFilters,
        handlePageChange,

        data, isLoadingTxns, refetch,
        paginatedParams, handlePaginationParamsUpdate,
    };
};
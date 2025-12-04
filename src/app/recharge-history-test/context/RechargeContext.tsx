// context/RechargeContext.tsx
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Recharge, RechargeStatus, RechargeContextType, PaginatedReponse } from '../types/recharge';
import { initialRechargeData } from '../data/recharge.data';
import { useGetRechargeHistories } from '@/hooks/recharge/history/use-getRecharge-histories';
import { IPagination, IPaginationInfo, RechargeHistory } from "@/types/recharge";
import { axiosInstance } from '@/lib/axios';
import { ResponseType } from '@/apis/utils';

// Create context with default values
const RechargeContext = createContext<RechargeContextType>({
    fetch: () => { },
    updatePageNo: (val: number) => { },
    updatePageLimit: (val: number) => { },
    rechargeData: { currentPage: 1, data: [], limit: 25, total: 0, totalPages: 0 },
    expandedRow: null,
    updateStatus: (id: string, status: string) => { console.log('update status', id, status) },
    checkStatus: () => { },
    toggleResponseView: () => { },
});

const defaultPaginationInfo: IPaginationInfo = {
    page: 1,
    limit: 20,
}

// Custom hook for accessing the recharge context
export const useRechargeData = () => useContext(RechargeContext);

const initialalValue: PaginatedReponse<Recharge[]> = { currentPage: 1, data: initialRechargeData, limit: 25, total: 0, totalPages: 1 };

interface RechargeDataProviderProps {
    children: ReactNode;
}

export const RechargeDataProvider: React.FC<RechargeDataProviderProps> = ({ children }) => {
    const [rechargeData, setRechargeData] = useState<PaginatedReponse<Recharge[]>>({ ...initialalValue });
    const [expandedRow, setExpandedRow] = useState<string | null>(null);

    const [paginationInfo, setPaginationInfo] = useState<IPaginationInfo>({ ...defaultPaginationInfo });

    const updatePageNo = (page: number = 0) => {
        setPaginationInfo({ ...paginationInfo, page });
    }

    const updatePageLimit = (limit: number = 0) => {
        setPaginationInfo({ ...paginationInfo, limit });
    }

    async function fetchHistories() {
        const { data } = await axiosInstance.put<ResponseType<PaginatedReponse<Recharge[]>>>('/recharge/history', paginationInfo);
        console.log('data', data);
        setRechargeData(data?.data || { ...initialalValue });
        return data;
    }
    useEffect(() => {
        fetchHistories();
    }, []);

    // Function to handle checking recharge status
    const checkStatus = (id: string) => {
        alert(`Checking status for recharge ID: ${id}`);
        // In a real application, you would make an API call here
    };

    // Function to update transaction status
    const updateStatus = async (id: string, newStatus: RechargeStatus) => {
        console.log('update status', id, newStatus);
        const updateStatusRes = await axiosInstance.patch('/recharge/update/status', { id, status: newStatus });
        console.log('updateStatusRes', updateStatusRes);
        fetchHistories();

        setRechargeData((prevData) => {
            const { data, ...rest } = prevData;
            return {
                data: data?.map((item) =>
                    item.id === id ? { ...item, status: newStatus } : item
                ), ...rest
            };
        }

        );
    };

    // Function to toggle response view
    const toggleResponseView = (id: string) => {
        setExpandedRow(expandedRow === id ? null : id);
    };

    const contextValue: RechargeContextType = {
        fetch: fetchHistories,
        updatePageNo,
        updatePageLimit,
        rechargeData,
        expandedRow,
        updateStatus,
        checkStatus,
        toggleResponseView,
    };

    return (
        <RechargeContext.Provider value={contextValue}>
            {children}
        </RechargeContext.Provider>
    );
};
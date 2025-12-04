import { useFetchDebits } from "@/hooks/wallet/use-fetch-debits";
import useUpdateDebits from "@/hooks/wallet/use-update-debits";
import { IPagination, IPaginationInfo } from "@/types/recharge";
import { TransactionFilters } from "@/types/types";
import { useEffect, useState } from "react";
import { toast } from "sonner";


const defaultPaginationInfo: IPaginationInfo = {
    page: 1,
    limit: 20,
}


const prevDate: Date = new Date();
prevDate.setDate(prevDate.getDate()-30);

const currentDate: Date = new Date();
currentDate.setDate(currentDate.getDate()+1);

const defaultDateRange = {
    from : prevDate,
    to: currentDate,
}

export interface IUpdateReqForm { id: string; debit_txn_id: string; status: string; msg: string }

export function useDebits() {
    const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'desc' });
    const [updateDialogOpen, setUpdateDialogOpen] = useState<boolean>(false);
    const [rejectDialogOpen, setRejectDialogOpen] = useState<boolean>(false);
    const [updateForm, setUpdateForm] = useState<IUpdateReqForm | null>(null);
    const [totalPages, setTotalPages] = useState<number>(1);

    const [paginationInfo, setPaginationInfo] = useState<IPaginationInfo>({ ...defaultPaginationInfo });
    const { data: transactions, isLoading, refetch } = useFetchDebits(paginationInfo);
    const { update, isUpdating } = useUpdateDebits(refetch, (error) => toast('Error Updating Txn', { description: error }));

    const [dateRange, setDateRange] = useState<{from: Date; to: Date}>({...defaultDateRange});

    function updateDateRange(key: 'from' | 'to', value: Date) {
        setDateRange({...dateRange, [key]: value.toLocaleString()});
    }

    const [filters, setFilters] = useState<TransactionFilters>({
        search: '',
        status: 'all',
        type: 'all'
    });

    const updateFilters = (key: keyof TransactionFilters, value: string) => {
        setFilters({ ...filters, [key]: value });
    }

    const filtered = transactions?.data?.filter((history) => {
        const statusMatch: boolean = filters.status === 'all' || (history.status.toLowerCase() === filters.status.toLowerCase());
        const matchesSearch: boolean = filters.search === '' ||
            history.user_id.toLowerCase().includes(filters.search.toLowerCase()) ||
            history.debit_txn_id?.toLowerCase().includes(filters.search.toLowerCase()) ||
            history.debit_txn_upi_id?.toLowerCase().includes(filters.search.toLowerCase()) || 
            history.id?.toLowerCase().includes(filters.search.toLowerCase()) || false;
        return statusMatch && matchesSearch;
    }) || [];

    const handleUpdate = (txnId: string, updates: { [key: string]: any }) => {
        update({ id: txnId, ...updates });
    }

    const updatePageNo = (page: number = 0) => {
        setPaginationInfo({ ...paginationInfo, page });
    }

    const updatePageLimit = (limit: number = 0) => {
        setPaginationInfo({ ...paginationInfo, limit });
    }

    useEffect(() => {
        if (!transactions || transactions.data) return () => { };
        const { data, ...paginRest } = transactions;
        const pageData: IPagination | undefined = { ...paginRest };
        setTotalPages(pageData.totalPages);
    }, [transactions])

    const handleSort = (key: string) => {
        setSortConfig({
            key,
            direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc'
        });
    };

    const handleUpdateClick = (request: IUpdateReqForm) => {
        setUpdateForm(request);
        setUpdateDialogOpen(true);
    };


    return {
        updateDialogOpen, setUpdateDialogOpen,
        rejectDialogOpen, setRejectDialogOpen,
        updateForm, setUpdateForm,
        transactions, isLoading, refetch,
        handleSort, handleUpdateClick,
        totalPages, paginationInfo, updatePageLimit, updatePageNo,
        handleUpdate, filters, setFilters, updateFilters,
        updateDateRange, setDateRange, filtered,
    };
}
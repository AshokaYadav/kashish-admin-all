import { useState, useEffect } from 'react';
import { RechargeService } from '../services/recharge-service';
import { toast } from 'sonner';

interface UseRechargeDataProps {
    initialPage?: number;
    initialLimit?: number;
}

export function useRechargeData({ initialPage = 1, initialLimit = 20 }: UseRechargeDataProps = {}) {
    const [recharges, setRecharges] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(initialPage);
    const [limit] = useState(initialLimit);
    const [total, setTotal] = useState(0);

    const [operators, setOperators] = useState([]);
    const [circles, setCircles] = useState([]);
    const [apis, setApis] = useState([]);

    // Fetch initial data
    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const [operatorsData, circlesData, apisData] = await Promise.all([
                    RechargeService.getOperators(),
                    RechargeService.getCircles(),
                    RechargeService.getApis()
                ]);

                setOperators(operatorsData.data || []);
                setCircles(circlesData.data || []);
                setApis(apisData.data || []);
            } catch (error) {
                toast('Error', { description: "Failed to fetch initial data" });
            }
        };

        fetchInitialData();
    }, []);

    const fetchRecharges = async (filters = {}) => {
        try {
            setLoading(true);
            setError(null);

            const response = await RechargeService.getFilteredRecharges({
                ...filters,
                page,
                limit
            });

            setRecharges(response.data.recharges || []);
            setTotal(response.data.total || 0);
        } catch (error) {
            setError('Failed to fetch recharges');
            toast('Error', { description: "Failed to fetch recharges" });
        } finally {
            setLoading(false);
        }
    };

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    };

    return {
        recharges,
        loading,
        error,
        page,
        limit,
        total,
        operators,
        circles,
        apis,
        fetchRecharges,
        handlePageChange
    };
} 
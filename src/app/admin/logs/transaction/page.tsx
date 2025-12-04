"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { fetchTransactionLogs } from '@/apis/wallet/history';

// Define types
interface LogEntry {
    id: string;
    msg: string;
    createdAt: string;
    mobile?: string;
    input?: string;
    isDirect: boolean;
}

interface PaginationInfo {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    itemsPerPage: number;
}

export default function ApiLogs() {
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [pagination, setPagination] = useState<PaginationInfo>({
        totalItems: 0,
        totalPages: 0,
        currentPage: 1,
        itemsPerPage: 25
    });

    // Fetch logs with pagination
    const fetchLogs = async (page: number, limit: number) => {
        try {
            setLoading(true);
            const response = await fetchTransactionLogs({ page, limit });
            
            // Set logs data
            setLogs(response?.data?.data || []);
            
            // Update pagination info from response
            // Assuming the API returns pagination metadata in response.data.pagination
            if (response?.data) {
                setPagination({
                    totalItems: response?.data?.total || 0,
                    totalPages: response.data?.totalPages || 0,
                    currentPage: response.data?.currentPage,
                    itemsPerPage: response.data.limit || 25,
                });
            } else {
                // Fallback if API doesn't return pagination info
                setPagination(prev => ({
                    ...prev,
                    currentPage: page
                }));
            }
            
            setLoading(false);
        } catch (err) {
            // Properly handle axiosInstance errors
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.message || err.message || 'An error occurred fetching logs');
            } else {
                setError('An unexpected error occurred');
            }
            setLoading(false);
        }
    };

    // Initial data fetch
    useEffect(() => {
        fetchLogs(pagination.currentPage, pagination.itemsPerPage);
    }, []);

    // Format date for display with proper typing
    const formatDate = (dateString: string): string => {
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    // Handle page change
    const handlePageChange = (newPage: number) => {
        if (newPage < 1 || newPage > pagination.totalPages || newPage === pagination.currentPage) {
            return;
        }
        fetchLogs(newPage, pagination.itemsPerPage);
    };

    // Generate page numbers for pagination controls
    const getPageNumbers = () => {
        const { currentPage, totalPages } = pagination;
        const pageNumbers: (number | string)[] = [];
        
        // Always show first page
        pageNumbers.push(1);
        
        // Add ellipsis if needed
        if (currentPage > 3) {
            pageNumbers.push('...');
        }
        
        // Add pages around current page
        for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
            if (i !== 1 && i !== totalPages) {
                pageNumbers.push(i);
            }
        }
        
        // Add ellipsis if needed
        if (currentPage < totalPages - 2) {
            pageNumbers.push('...');
        }
        
        // Always show last page if there's more than one page
        if (totalPages > 1) {
            pageNumbers.push(totalPages);
        }
        
        return pageNumbers;
    };

    // Handle items per page change
    const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newLimit = parseInt(event.target.value);
        setPagination(prev => ({
            ...prev,
            itemsPerPage: newLimit
        }));
        fetchLogs(1, newLimit); // Reset to first page when changing items per page
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <Head>
                <title>Transaction API Response Logs</title>
                <meta name="description" content="View API response logs" />
            </Head>

            <h1 className="text-3xl font-bold mb-6">Transaction API Response Logs</h1>

            {loading && <p className="text-gray-500">Loading logs...</p>}

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    Error: {error}
                </div>
            )}

            {!loading && !error && logs.length === 0 && (
                <p className="text-gray-500">No logs found.</p>
            )}

            {logs.length > 0 && (
                <>
                    {/* Items per page selector */}
                    <div className="flex justify-end mb-4">
                        <div className="flex items-center">
                            <label htmlFor="itemsPerPage" className="mr-2">Items per page:</label>
                            <select
                                id="itemsPerPage"
                                value={pagination.itemsPerPage}
                                onChange={handleItemsPerPageChange}
                                className="border rounded p-1"
                            >
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto mb-4">
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-2 border">Key</th>
                                    <th className="px-4 py-2 border">INPUT</th>
                                    <th className="px-4 py-2 border">Response</th>
                                    <th className="px-4 py-2 border">Date</th>
                                    <th className="px-4 py-2 border">Is Direct</th>
                                </tr>
                            </thead>
                            <tbody>
                                {logs.map((log, _idx) => (
                                    <tr key={log.id} className="hover:bg-gray-50">
                                        <td className="px-4 py-2 border text-sm font-mono">{_idx + ((pagination.currentPage - 1) * pagination.itemsPerPage) + 1}</td>
                                        <td className="px-4 py-2 border">
                                            <div className="max-w-md break-words">{log.input || 'N/A'}</div>
                                        </td>
                                        <td className="px-4 py-2 border">
                                            <div className="max-w-md break-words">{log.msg}</div>
                                        </td>
                                        <td className="px-4 py-2 border">
                                            {log.createdAt ? formatDate(log.createdAt) : 'N/A'}
                                        </td>
                                        <td className="px-4 py-2 border">
                                            {log.isDirect ? 'Yes' : 'No'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination controls */}
                    {pagination.totalPages > 1 && (
                        <div className="flex justify-between items-center mt-4">
                            <div>
                                Showing {((pagination.currentPage - 1) * pagination.itemsPerPage) + 1} to {Math.min(pagination.currentPage * pagination.itemsPerPage, pagination.totalItems)} of {pagination.totalItems} items
                            </div>
                            <div className="flex">
                                <button
                                    onClick={() => handlePageChange(pagination.currentPage - 1)}
                                    disabled={pagination.currentPage === 1}
                                    className={`px-3 py-1 mx-1 border rounded ${pagination.currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white hover:bg-gray-50'}`}
                                >
                                    Previous
                                </button>
                                
                                {getPageNumbers().map((pageNum, idx) => (
                                    typeof pageNum === 'number' ? (
                                        <button
                                            key={idx}
                                            onClick={() => handlePageChange(pageNum)}
                                            className={`px-3 py-1 mx-1 border rounded ${pageNum === pagination.currentPage ? 'bg-blue-500 text-white' : 'bg-white hover:bg-gray-50'}`}
                                        >
                                            {pageNum}
                                        </button>
                                    ) : (
                                        <span key={idx} className="px-2 py-1">
                                            {pageNum}
                                        </span>
                                    )
                                ))}
                                
                                <button
                                    onClick={() => handlePageChange(pagination.currentPage + 1)}
                                    disabled={pagination.currentPage === pagination.totalPages}
                                    className={`px-3 py-1 mx-1 border rounded ${pagination.currentPage === pagination.totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white hover:bg-gray-50'}`}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
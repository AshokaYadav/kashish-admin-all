import React, { useState } from 'react';
import { useRechargeData } from '../context/RechargeContext';
import { Recharge, RechargeStatus } from '../types/recharge';
import StatusBadge from './StatusBadge';
import StatusUpdateButtons from './StatusUpdateButtons';
import ApiResponseDialog from './ApiResponseDialog';
import { Button } from '@/components/ui/button';
import JsonDetailsDialog from './JsonDetailsDialog';
import IssueDialog from './IssueDialog';
import RechargeFilters from './Filter';
import { EyeIcon } from 'lucide-react';
import { Pagination } from './Pagination';
import { Separator } from '@/components/ui/separator';

const sampleTransactionDetails = {
    amount: 199,
    final_charge: 195.020,
    admin_commission: 0.000,
    master_distributor_commission: 0.000,
    distributor_commission: 0.000,
    retailer_commission: 0.000,
    user_commission: 3.980,
    retailer_closing_bl: null,
    distributor_closing_bl: null,
    master_closing_bl: null,
    admin_closing_bl: 9247056.235,
    user_closing_bl: 158.055,
    api_closing_bl: -2180070.266,
    recharge_type: "Prepaid",
    operator_ref: "BR000BUHTFAK",
    status: "SUCCESS",
    request_time: "2025-03-11 16:27:50",
    response_time: "2025-03-11 16:28:00",
    user_type: "User",
    resposnse_message: "Success",
    ip: "2401:4900:701c:586d::826:9e4",
    recharge_from: "Android",
    client_id: null,
    api_user_callback_id: null
};

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

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    // Use explicit format that will be consistent regardless of locale
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    }).format(date);
};

const RechargeHistoryTable: React.FC = () => {
    const { rechargeData, expandedRow, checkStatus, toggleResponseView, fetch, updatePageLimit, updatePageNo, updateStatus } = useRechargeData();
    const [complaint, setComplaint] = useState<string[]>(['', '']);
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
    const [isTxResDialogOpen, setIsTxResDialogOpen] = useState<boolean>(false);
    const [showComplaintDialog, setShowComplaintDialog] = useState<boolean>(false);
    const [selectedResponse, setSelectedResponse] = useState<any>(null);
    const [selectedRecharge, setSelectedRecharge] = useState<Record<string, any> | null>(null);
    const [filteredData, setFilteredData] = useState<any>(rechargeData);
    const [activeFilters, setActiveFilters] = useState<FilterValues | null>(null);

    // Function to handle viewing transaction details
    const handleViewDetails = (rechargeData: Record<string, any>) => {
        setSelectedRecharge(rechargeData);
        setIsTxResDialogOpen(true);
    };

    // Function to handle viewing detailed API response
    const handleViewApiResponse = (recharge: any) => {
        // Create formatted response data for dialog
        const responseData = {
            status: recharge.status as RechargeStatus,
            orderId: recharge.orderId,
            apiOrderId: recharge.txId, // Using txId as apiOrderId for demo
            message: recharge.response, // Using response as message for demo
            response: JSON.stringify({
                id: recharge.id,
                status: recharge.status,
                txnId: recharge.txId,
                amount: recharge.amount,
                timestamp: new Date().toISOString(),
                providerReference: `REF-${recharge.txId}`,
                providerMessage: recharge.response
            }, null, 2) // Creating a mock detailed JSON response
        };

        setSelectedResponse(responseData);
        setIsDialogOpen(true);
    };

    const handleApplyFilters = (filters: FilterValues) => {
        setActiveFilters(filters);

        // Filter the data based on the given filters
        const filtered = rechargeData?.data?.filter(recharge => {
            // Circle filter
            // @TODO: update recharge.api to recharge.circle.id
            if (filters.circle && recharge.circle_id !== filters.circle) {
                return false;
            }

            // Identifier filter (Operator Ref / Mobile / Order ID)
            if (filters.identifier) {
                if (filters.identifierType === 'operatorRef' &&
                    // @TODO: update recharge.api to recharge.operator.id
                    !String(recharge.api || '').includes(filters.identifier)) {
                    return false;
                } else if (filters.identifierType === 'mobile' &&
                    !String(recharge.mobile || '').includes(filters.identifier)) {
                    return false;
                } else if (filters.identifierType === 'orderId' &&
                    !String(recharge.id || '').includes(filters.identifier)) {
                    return false;
                }
            }

            // User identifier filter (Username / Mobile)
            if (filters.userIdentifier) {
                if (
                    filters.userIdentifierType === 'username' &&
                    (
                        !String(recharge.retailor.email || '').toLowerCase().includes(filters.userIdentifier.toLowerCase()) ||
                        !String(recharge.admin.email || '').toLowerCase().includes(filters.userIdentifier.toLowerCase()) ||
                        !String(recharge.distributor.email || '').toLowerCase().includes(filters.userIdentifier.toLowerCase())
                    )
                ) {
                    return false;
                } else if (filters.userIdentifierType === 'mobile' &&
                    !String(recharge.mobile || '').includes(filters.userIdentifier)) {
                    return false;
                }
            }

            // Amount filter
            if (filters.amount && parseFloat(String(recharge.price)) !== parseFloat(filters.amount)) {
                return false;
            }

            // Date range filter
            if (filters.fromDate) {
                const rechargeDate = formatDate(recharge.createdAt);
                if (new Date(rechargeDate) < filters.fromDate) {
                    return false;
                }

                if (filters.toDate && new Date(rechargeDate) > filters.toDate) {
                    return false;
                }
            }

            return true;
        });

        setFilteredData(filtered || []);
    };

    // Use filteredData if filters are active, otherwise use the original rechargeData
    const displayData = activeFilters ? filteredData : rechargeData;

    return (
        <>
            <RechargeFilters onApplyFilters={handleApplyFilters} />

            <div className="overflow-x-auto bg-white rounded-lg shadow">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                S.No
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Email
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Order ID
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Date
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Number
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Amount
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                api_comm
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                admin_comm
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                dist_comm
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                ret_comm
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Balance
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                OP ID
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                API
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Update Status
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Response
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Action
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Recharge By
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {displayData?.data.length > 0 ? (
                            displayData?.data.map((recharge: Recharge, _idx: number) => (
                                <tr key={recharge.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {_idx + 1}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {recharge.retailor.email}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {recharge.api_txn_id || '-'}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {formatDate(recharge.createdAt)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {recharge.mobile}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        ₹{recharge.price}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <span className='mr-1'>
                                            <span className='text-black'>
                                                ₹ {(Math.abs(parseFloat(`${recharge.api_commission}`))).toFixed(2)}
                                            </span>
                                            <br />
                                            ({((Math.abs(parseFloat(`${recharge.api_commission}`)) * 100) / recharge.price).toFixed(2)} %)
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <span className='mr-1'>
                                            <span className='text-black'>
                                                ₹ {(Math.abs(parseFloat(`${recharge.admin_commission}`))).toFixed(2)}
                                            </span>
                                            <br />
                                            ({((Math.abs(parseFloat(`${recharge.admin_commission}`)) * 100) / recharge.price).toFixed(2)} %)
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <span className='mr-1'>
                                            <span className='text-black'>
                                                ₹ {(Math.abs(parseFloat(`${recharge.distributor_commission}`))).toFixed(2)}
                                            </span>
                                            <br />
                                            ({((Math.abs(parseFloat(`${recharge.distributor_commission}`)) * 100) / recharge.price).toFixed(2)} %)
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                                        <span className='mr-1'>
                                            <span className='text-black'>
                                                ₹ {(parseFloat(`${recharge.price}`) - Math.abs(parseFloat(`${recharge.retailor_commission}`))).toFixed(2)}
                                            </span>
                                            <br />
                                            ({(((parseFloat(`${recharge.price}`) - Math.abs(parseFloat(`${recharge.retailor_commission}`))) * 100) / recharge.price).toFixed(2)} %)
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        ₹{recharge.ret_balance}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex flex-col space-y-2 justify-center items-center">
                                            <StatusBadge status={recharge.status.trim().toLocaleLowerCase()} />
                                            <Button
                                                variant='ghost'
                                                onClick={() => handleViewApiResponse(recharge)}
                                                className="text-indigo-600 hover:text-indigo-900 text-xs"
                                            >
                                                Check Status
                                            </Button>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {recharge.op_id || '-'}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {recharge.api.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <StatusUpdateButtons rechargeId={recharge.id} currentStatus={recharge.status.trim().toLocaleLowerCase()} />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex flex-col space-y-2">
                                            <Button
                                                variant='outline'
                                                onClick={() => handleViewDetails(sampleTransactionDetails)}
                                                className="text-green-600 hover:text-green-900 text-xs"
                                            >
                                                <EyeIcon className='w-full h-full' />
                                            </Button>
                                            <h6 className='font-light text-sm'>10 sec</h6>
                                        </div>
                                        {expandedRow === recharge.id && (
                                            <div className="mt-2 p-2 bg-gray-100 rounded text-xs">
                                                {'recharge.response'}
                                            </div>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {
                                            (recharge.api_txn_id && recharge.api_txn_id != '0') &&
                                            <Button
                                                onClick={() => { setComplaint([recharge.api_txn_id, recharge.mobile]); setShowComplaintDialog(true) }}
                                                className="text-blue-600 hover:text-blue-900 text-xs"
                                                variant='outline'>
                                                complaint
                                            </Button>
                                        }
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <div className='flex flex-col'>
                                            <span className='text-center text-black'>
                                                {recharge.retailor.name}
                                            </span>
                                            <span>
                                                <Button
                                                    variant='ghost'
                                                    className='text-blue-600'
                                                >
                                                    recieved callbacks
                                                </Button>
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={15} className="px-6 py-4 text-center text-sm text-gray-500">
                                    No recharge data found matching your filters.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <Separator className='w-full m-2' />

                <Pagination
                    currentPage={rechargeData.currentPage || 0}
                    totalPages={rechargeData.totalPages}
                    onPageChange={v => { updatePageNo(v); fetch(); }}
                />

            </div>

            {selectedRecharge && (
                <JsonDetailsDialog
                    isOpen={isTxResDialogOpen}
                    onClose={() => setIsTxResDialogOpen(false)}
                    data={selectedRecharge}
                    title="Recharge Transaction Details"
                />
            )}

            <IssueDialog
                id={complaint[0]}
                mobile={complaint[1]}
                open={showComplaintDialog}
                setOpen={v => { setComplaint(['', '']); setShowComplaintDialog(v) }}
            />

            {/* API Response Dialog */}
            <ApiResponseDialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                data={selectedResponse}
            />
        </>
    );
};

export default RechargeHistoryTable;
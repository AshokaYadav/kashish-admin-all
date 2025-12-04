// import React, { useEffect, useState } from 'react';
// import { useRechargeData } from '../context/RechargeContext';
// import { Recharge, RechargeStatus } from '../types/recharge';
// import StatusBadge from './StatusBadge';
// import StatusUpdateButtons from './StatusUpdateButtons';
// import ApiResponseDialog from './ApiResponseDialog';
// import { Button } from '@/components/ui/button';
// import JsonDetailsDialog from './JsonDetailsDialog';
// import IssueDialog from './IssueDialog';
// import RechargeFilters from './Filter';
// import { EyeIcon } from 'lucide-react';
// import { Pagination } from './Pagination';
// import { Separator } from '@/components/ui/separator';
// import { axiosInstance } from '@/lib/axios';
// import { ResponseType } from '@/apis/utils';
// import { PaginatedReponse } from '../types/recharge';
// const sampleTransactionDetails = {
//     amount: 199,
//     final_charge: 195.020,
//     admin_commission: 0.000,
//     master_distributor_commission: 0.000,
//     distributor_commission: 0.000,
//     retailer_commission: 0.000,
//     user_commission: 3.980,
//     retailer_closing_bl: null,
//     distributor_closing_bl: null,
//     master_closing_bl: null,
//     admin_closing_bl: 9247056.235,
//     user_closing_bl: 158.055,
//     api_closing_bl: -2180070.266,
//     recharge_type: "Prepaid",
//     operator_ref: "BR000BUHTFAK",
//     status: "SUCCESS",
//     request_time: "2025-03-11 16:27:50",
//     response_time: "2025-03-11 16:28:00",
//     user_type: "User",
//     resposnse_message: "Success",
//     ip: "2401:4900:701c:586d::826:9e4",
//     recharge_from: "Android",
//     client_id: null,
//     api_user_callback_id: null
// };

// interface FilterValues {
//     circle: string;
//     identifier: string;
//     identifierType: 'operatorRef' | 'mobile' | 'orderId';
//     userIdentifier: string;
//     userIdentifierType: 'email' | 'mobile';
//     amount: string;
//     fromDate: Date | null;
//     toDate: Date | null;
// }

// const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     // Use explicit format that will be consistent regardless of locale
//     return new Intl.DateTimeFormat('en-US', {
//         year: 'numeric',
//         month: '2-digit',
//         day: '2-digit',
//         hour: '2-digit',
//         minute: '2-digit',
//         second: '2-digit',
//         hour12: true
//     }).format(date);
// };

// export interface obj {
//     [key: string]: string;
// }


// const RechargeHistoryTable: React.FC = () => {


//     const { rechargeData, expandedRow, checkStatus, toggleResponseView, fetch, updatePageLimit, updatePageNo, updateStatus } = useRechargeData();
//     const [complaint, setComplaint] = useState<string[]>(['', '']);
//     const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
//     const [isTxResDialogOpen, setIsTxResDialogOpen] = useState<boolean>(false);
//     const [showComplaintDialog, setShowComplaintDialog] = useState<boolean>(false);
//     const [selectedResponse, setSelectedResponse] = useState<any>(null);
//     const [selectedRecharge, setSelectedRecharge] = useState<Record<string, any> | null>(null);
//     const [filteredData, setFilteredData] = useState<any>(rechargeData);
//     const [hasSearchResults, setHasSearchResults] = useState<boolean>(false);

//     const [query, setQuery] = useState<obj>({});
//     const updateQuery = (key: string, value: string) => {
//         setQuery({ ...query, [key]: value });
//         console.log('query', query);
//     }

//     const handleSearchFilter = async () => {
//         // Create a copy of the query object
//         const cleanedQuery = { ...query };

//         // Remove empty values from the query
//         Object.keys(cleanedQuery).forEach(key => {
//             if (!cleanedQuery[key] || cleanedQuery[key].trim() === '') {
//                 delete cleanedQuery[key];
//             }
//         });

//         const { data } = await axiosInstance.get<ResponseType<PaginatedReponse<Recharge[]>>>('/recharge/history/filter', {
//             params: cleanedQuery
//         });

//         console.log('data', data);
//         setQuery({});

//         setHasSearchResults(!!data?.data);
//         setFilteredData(data?.data);
//     }


//     // Function to handle viewing transaction details
//     const handleViewDetails = (rechargeData: Record<string, any>) => {
//         setSelectedRecharge(rechargeData);
//         setIsTxResDialogOpen(true);
//     };

//     // Function to handle viewing detailed API response
//     // const handleViewApiResponse = (recharge: any) => {
//     //     // Create formatted response data for dialog
//     //     const responseData = {
//     //         status: recharge.status as RechargeStatus,
//     //         orderId: recharge.orderId,
//     //         apiOrderId: recharge.txId, // Using txId as apiOrderId for demo
//     //         message: recharge.response, // Using response as message for demo
//     //         response: JSON.stringify({
//     //             id: recharge.id,
//     //             status: recharge.status,
//     //             txnId: recharge.txId,
//     //             amount: recharge.amount,
//     //             timestamp: new Date().toISOString(),
//     //             providerReference: `REF-${recharge.txId}`,
//     //             providerMessage: recharge.response
//     //         }, null, 2) // Creating a mock detailed JSON response
//     //     };

//     //     setSelectedResponse(responseData);
//     //     setIsDialogOpen(true);
//     // };



//     const handleViewApiResponse = async (recharge: any) => {
//   const responseData = {
//     status: recharge.status as RechargeStatus,
//     orderId: recharge.orderId,
//     apiOrderId: recharge.txId,
//     message: recharge.response,
//     response: JSON.stringify({
//       id: recharge.id,
//       status: recharge.status,
//       txnId: recharge.txId,
//       amount: recharge.amount,
//       timestamp: new Date().toISOString(),
//       providerReference: `REF-${recharge.txId}`,
//       providerMessage: recharge.response
//     }, null, 2),
//   };

//   try {
//     const res = await axiosInstance.get<ResponseType<Recharge>>(`/ticket/status/check/${recharge.clientRefNo}`);
//     if (res.data?.data) {
//       responseData.response = JSON.stringify(res.data.data, null, 2);
//     } else {
//       responseData.response = 'No detailed response available';
//     }
//   } catch (error) {
//     console.error('Failed to fetch detailed response:', error);
//     responseData.response = 'Error fetching detailed response';
//   }

//   setSelectedResponse(responseData);
//   setIsDialogOpen(true);
// };


//     const displayData = hasSearchResults ? filteredData : rechargeData;

//     return (
//         <>
//             <RechargeFilters
//                 query={query}
//                 reset={() => setQuery({})}
//                 updateQuery={updateQuery}
//                 handleSearchFilter={handleSearchFilter}
//             />

//             <div className="overflow-x-auto bg-white rounded-lg shadow">
//                 <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-gray-50">
//                         <tr>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 S.No
//                             </th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 User
//                             </th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 Order ID
//                             </th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 Date
//                             </th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 Number
//                             </th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 Operator
//                             </th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 Amount
//                             </th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 Opening Balance
//                             </th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 Charged Amount
//                             </th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 Closing Balance
//                             </th>
//                             {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 Amount
//                             </th> */}
//                             {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 api_comm
//                             </th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 admin_comm
//                             </th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 dist_comm
//                             </th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 ret_comm
//                             </th> */}
//                             {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 Balance
//                             </th> */}
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 Status
//                             </th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 OP ID
//                             </th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 API
//                             </th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 Update Status
//                             </th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 Response
//                             </th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 Action
//                             </th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 Recharge By
//                             </th>
//                         </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                         {displayData?.data?.length > 0 ? (
//                             displayData.data.map((recharge: Recharge, _idx: number) => (
//                                 <tr key={recharge.id} className="hover:bg-gray-50">
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                         {_idx + 1}
//                                     </td>
//                                     {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                                         {recharge.retailor.email}
//                                     </td> */}

//                                     {/* here showing name and mobile of user */}
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                                         {/* {recharge.retailor.email} */}
//                                         <span> {recharge?.retailor?.name || ''}</span>
//                                         <br />
//                                         <span> {recharge?.retailor?.mobile || ''}</span>
//                                     </td>


//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                         {recharge.api_txn_id || '-'}
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                         {formatDate(recharge.createdAt)}
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                         {recharge.mobile}
//                                     </td>

//                                     {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                         <span>{recharge.operator.name}</span>
//                                         <br />
//                                         <span>{recharge.category.name}</span>
//                                     </td> */}


//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                         <span>
//                                             {recharge.operator.image_url ? (
//                                                 <img
//                                                     src={`https://api.recharge.kashishindiapvtltd.com/${recharge.operator.image_url}`}
//                                                     alt={recharge.operator.name}
//                                                     className="h-12 w-12 rounded-full inline-block mr-2"
//                                                 />
//                                             ) : (
//                                                 recharge.operator.name
//                                             )}
//                                         </span>
//                                         <br />
//                                         <span>{recharge.category.name}</span>
//                                         <br />
//                                          <span className='text-[10px]'>{recharge.circle.name}</span>
//                                     </td>

//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                         ₹{recharge?.price || '0'}
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                         ₹{recharge?.opening_balance || '0'}
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                         ₹{recharge?.charge_amount || '0'}
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                         ₹{recharge?.closing_balance || '0'}
//                                     </td>

//                                     {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                         ₹{recharge?.ret_balance || '0'}
//                                     </td> */}


//                                     {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                         ₹{recharge.price}
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                         <span className='mr-1'>
//                                             <span className='text-black'>
//                                                 ₹ {(Math.abs(parseFloat(`${recharge.api_commission}`))).toFixed(2)}
//                                             </span>
//                                             <br />
//                                             ({((Math.abs(parseFloat(`${recharge.api_commission}`)) * 100) / recharge.price).toFixed(2)} %)
//                                         </span>
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                         <span className='mr-1'>
//                                             <span className='text-black'>
//                                                 ₹ {(Math.abs(parseFloat(`${recharge.admin_commission}`))).toFixed(2)}
//                                             </span>
//                                             <br />
//                                             ({((Math.abs(parseFloat(`${recharge.admin_commission}`)) * 100) / recharge.price).toFixed(2)} %)
//                                         </span>
//                                     </td> */}
//                                     {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                         <span className='mr-1'>
//                                             <span className='text-black'>
//                                                 ₹ {(Math.abs(parseFloat(`${recharge.distributor_commission}`))).toFixed(2)}
//                                             </span>
//                                             <br />
//                                             ({((Math.abs(parseFloat(`${recharge.distributor_commission}`)) * 100) / recharge.price).toFixed(2)} %)
//                                         </span>
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
//                                         <span className='mr-1'>
//                                             <span className='text-black'>
//                                                 ₹ {(parseFloat(`${recharge.price}`) - Math.abs(parseFloat(`${recharge.retailor_commission}`))).toFixed(2)}
//                                             </span>
//                                             <br />
//                                             ({(((parseFloat(`${recharge.price}`) - Math.abs(parseFloat(`${recharge.retailor_commission}`))) * 100) / recharge.price).toFixed(2)} %)
//                                         </span>
//                                     </td> */}
//                                     {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                         ₹{recharge.ret_balance}
//                                     </td> */}
//                                     <td className="px-6 py-4 whitespace-nowrap">
//                                         <div className="flex flex-col space-y-2 justify-center items-center">
//                                             <StatusBadge status={recharge.status.trim().toLocaleLowerCase()} />
//                                             <Button
//                                                 variant='ghost'
//                                                 onClick={() => handleViewApiResponse(recharge)}
//                                                 className="text-indigo-600 hover:text-indigo-900 text-xs"
//                                             >
//                                                 Check Status
//                                             </Button>
//                                         </div>
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                         {recharge.op_id || '-'}
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                         {recharge.api.name}
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap">
//                                         <StatusUpdateButtons rechargeId={recharge.id} currentStatus={recharge.status.trim().toLocaleLowerCase()} />
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap">
//                                         <div className="flex flex-col space-y-2">
//                                             <Button
//                                                 variant='outline'
//                                                 onClick={() => handleViewDetails(sampleTransactionDetails)}
//                                                 className="text-green-600 hover:text-green-900 text-xs"
//                                             >
//                                                 <EyeIcon className='w-full h-full' />
//                                             </Button>
//                                             <h6 className='font-light text-sm'>10 sec</h6>
//                                         </div>
//                                         {expandedRow === recharge.id && (
//                                             <div className="mt-2 p-2 bg-gray-100 rounded text-xs">
//                                                 {'recharge.response'}
//                                             </div>
//                                         )}
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap">
//                                         {
//                                             (recharge.api_txn_id && recharge.api_txn_id != '0') &&
//                                             <Button
//                                                 onClick={() => { setComplaint([recharge.api_txn_id, recharge.mobile]); setShowComplaintDialog(true) }}
//                                                 className="text-blue-600 hover:text-blue-900 text-xs"
//                                                 variant='outline'>
//                                                 complaint
//                                             </Button>
//                                         }
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                         <div className='flex flex-col'>
//                                             <span className='text-center text-black'>
//                                                 {recharge.retailor.name}
//                                             </span>
//                                             <span>
//                                                 <Button
//                                                     variant='ghost'
//                                                     className='text-blue-600'
//                                                 >
//                                                     recieved callbacks
//                                                 </Button>
//                                             </span>
//                                         </div>
//                                     </td>
//                                 </tr>
//                             ))
//                         ) : (
//                             <tr>
//                                 <td colSpan={15} className="px-6 py-4 text-center text-sm text-gray-500">
//                                     No recharge data found matching your filters.
//                                 </td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//                 <Separator className='w-full m-2' />

//                 <Pagination
//                     currentPage={rechargeData.currentPage || 0}
//                     totalPages={rechargeData.totalPages}
//                     onPageChange={(v: number) => { updatePageNo(v); fetch(); }}
//                 />

//             </div>

//             {selectedRecharge && (
//                 <JsonDetailsDialog
//                     isOpen={isTxResDialogOpen}
//                     onClose={() => setIsTxResDialogOpen(false)}
//                     data={selectedRecharge}
//                     title="Recharge Transaction Details"
//                 />
//             )}

//             <IssueDialog
//                 id={complaint[0]}
//                 mobile={complaint[1]}
//                 open={showComplaintDialog}
//                 setOpen={v => { setComplaint(['', '']); setShowComplaintDialog(v) }}
//             />

//             {/* API Response Dialog */}
//             <ApiResponseDialog
//                 isOpen={isDialogOpen}
//                 onClose={() => setIsDialogOpen(false)}
//                 data={selectedResponse}
//             />
//         </>
//     );
// };

// export default RechargeHistoryTable;


import React, { useEffect, useState } from 'react';
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
import { axiosInstance } from '@/lib/axios';
import { ResponseType } from '@/apis/utils';
import { PaginatedReponse } from '../types/recharge';

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
    userIdentifierType: 'email' | 'mobile';
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

export interface obj {
    [key: string]: string;
}

// Callback Dialog Component
const CallbackDialog = ({ 
    isOpen, 
    onClose, 
    data, 
    loading, 
    error ,
    clientRefNo
}: {
    isOpen: boolean;
    onClose: () => void;
    data: any[];
    loading: boolean;
    error: string;
    clientRefNo: string;
}) => {
    if (!isOpen) return null;

    const getStatusBadge = (status: string, statusMsg: string) => {
        const statusNum = parseInt(status);
        let badgeClass = 'px-2 py-1 rounded-full text-xs font-medium ';
        
        switch (statusNum) {
            case 1:
                badgeClass += 'bg-green-100 text-green-800';
                break;
            case 5:
                badgeClass += 'bg-red-100 text-red-800';
                break;
            default:
                badgeClass += 'bg-gray-100 text-gray-800';
        }
        
        return (
            <span className={badgeClass}>
                {statusMsg}
            </span>
        );
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-6xl w-full mx-4 max-h-[90vh] overflow-auto">
                <div className="flex justify-between  mb-4">
                    <h2 className="text-xl font-semibold">Callback Records</h2>
                    <h2 className="text-sm text-gray-500 ml-auto mr-4 mt-2">order id: {clientRefNo}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 text-2xl"
                    >
                        ✕
                    </button>
                </div>
                
                {loading ? (
                    <div className="flex justify-center items-center py-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                        <span className="ml-2">Loading callback records...</span>
                    </div>
                ) : error ? (
                    <div className="text-red-600 text-center py-8">
                        <p>{error}</p>
                    </div>
                ) : data.length === 0 ? (
                    <div className="text-gray-500 text-center py-8">
                        <p>No callback records found</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        S.No
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Client Ref No
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Transaction ID
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Operator ID
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        DP
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        DR
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Balance
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Created At
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Updated At
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {data.map((callback, index) => (
                                    <tr key={callback.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {index + 1}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {callback.clientRefNo}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {getStatusBadge(callback.status, callback.statusMsg)}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {callback.trnId}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {callback.oprId}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            ₹{callback.dp}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            ₹{callback.dr}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            ₹{callback.bal}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {formatDate(callback.createdAt)}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {formatDate(callback.updatedAt)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
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
    const [hasSearchResults, setHasSearchResults] = useState<boolean>(false);
    const [clientRefNo, setClientRefNo] = useState<string>('');

    // Callback dialog states
    const [callbackData, setCallbackData] = useState<any[]>([]);
    const [showCallbackDialog, setShowCallbackDialog] = useState<boolean>(false);
    const [callbackLoading, setCallbackLoading] = useState<boolean>(false);
    const [callbackError, setCallbackError] = useState<string>('');

    const [query, setQuery] = useState<obj>({});
    const updateQuery = (key: string, value: string) => {
        setQuery({ ...query, [key]: value });
        console.log('query', query);
    }

    const handleSearchFilter = async () => {
        // Create a copy of the query object
        const cleanedQuery = { ...query };

        // Remove empty values from the query
        Object.keys(cleanedQuery).forEach(key => {
            if (!cleanedQuery[key] || cleanedQuery[key].trim() === '') {
                delete cleanedQuery[key];
            }
        });

        const { data } = await axiosInstance.get<ResponseType<PaginatedReponse<Recharge[]>>>('/recharge/history/filter', {
            params: cleanedQuery
        });

        console.log('data', data);
        setQuery({});

        setHasSearchResults(!!data?.data);
        setFilteredData(data?.data);
    }

        const handleViewApiResponse = async (recharge: any) => {
  const responseData = {
    status: recharge.status as RechargeStatus,
    orderId: recharge.orderId,
    apiOrderId: recharge.txId,
    message: recharge.response,
    response: JSON.stringify({
      id: recharge.id,
      status: recharge.status,
      txnId: recharge.txId,
      amount: recharge.amount,
      timestamp: new Date().toISOString(),
      providerReference: `REF-${recharge.txId}`,
      providerMessage: recharge.response
    }, null, 2),
  };

  try {
    const res = await axiosInstance.get<ResponseType<Recharge>>(`/ticket/status/check/${recharge.clientRefNo}`);
    if (res.data?.data) {
      responseData.response = JSON.stringify(res.data.data, null, 2);
    } else {
      responseData.response = 'No detailed response available';
    }
  } catch (error) {
    console.error('Failed to fetch detailed response:', error);
    responseData.response = 'Error fetching detailed response';
  }

  setSelectedResponse(responseData);
  setIsDialogOpen(true);
};
    // Function to handle viewing transaction details
    const handleViewDetails = (rechargeData: Record<string, any>) => {
        setSelectedRecharge(rechargeData);
        setIsTxResDialogOpen(true);
    };

    // Function to handle viewing detailed API response
    // const handleViewApiResponse = (recharge: any) => {
    //     // Create formatted response data for dialog
    //     const responseData = {
    //         status: recharge.status as RechargeStatus,
    //         orderId: recharge.orderId,
    //         apiOrderId: recharge.txId, // Using txId as apiOrderId for demo
    //         message: recharge.response, // Using response as message for demo
    //         response: JSON.stringify({
    //             id: recharge.id,
    //             status: recharge.status,
    //             txnId: recharge.txId,
    //             amount: recharge.amount,
    //             timestamp: new Date().toISOString(),
    //             providerReference: `REF-${recharge.txId}`,
    //             providerMessage: recharge.response
    //         }, null, 2) // Creating a mock detailed JSON response
    //     };



    //     setSelectedResponse(responseData);
    //     setIsDialogOpen(true);
    // };

    // Complete handleCallbackResponse function
    const handleCallbackResponse = async (id: any) => {
        if (!id) {
            console.error('No client reference ID provided');
            return;
        }

        const baseUrl = `https://api.recharge.kashishindiapvtltd.com/callbacks/${id}`;
        
        try {
            setCallbackLoading(true);
            setCallbackError('');
            setClientRefNo(id);
            setShowCallbackDialog(true);
            
            const response = await axiosInstance.get(baseUrl);
            
            if (response.data && response.data.data) {
                setCallbackData(response.data.data);
                const ind=response.data.data;
                console.log(ind[0])
                setClientRefNo(ind[0]?.trnId || ''); // Assuming op_id is the client reference number
            } else {
                setCallbackData([]);
                setCallbackError('No callback records found');
            }
        } catch (error: any) {
            console.error('Error fetching callback data:', error);
            setCallbackError(error.response?.data?.message || 'Failed to fetch callback records');
            setCallbackData([]);
        } finally {
            setCallbackLoading(false);
        }
    };

    const displayData = hasSearchResults ? filteredData : rechargeData;
    console.log('displayData', displayData?.data);

    return (
        <>
            <RechargeFilters
                query={query}
                reset={() => setQuery({})}
                updateQuery={updateQuery}
                handleSearchFilter={handleSearchFilter}
            />

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
                                Operator
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Opening Balance
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Amount
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Charged Amount
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Closing Balance
                            </th>
                            {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
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
                            </th> */}
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
                        {displayData?.data?.length > 0 ? (
                            displayData.data.map((recharge: Recharge, _idx: number) => (
                                <tr key={recharge.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {_idx + 1}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {/* {recharge.retailor.email} */}
                                        <span> {recharge.retailor.name}</span>
                                        <br />
                                        <span> {recharge.retailor.mobile}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {recharge.api_txn_id || '-'}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {formatDate(recharge.createdAt)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                      <span> {recharge?.mobile||''}</span> 
                                        <br />
                                        <span>{recharge?.circle?.name||''}</span>
                                    </td>

                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <span>
                                            {recharge.operator.image_url ? (
                                                <img
                                                    src={`https://api.recharge.kashishindiapvtltd.com/${recharge.operator.image_url}`}
                                                    alt={recharge.operator.name}
                                                    className="h-12 w-12 rounded-full inline-block mr-2"
                                                />
                                            ) : (
                                                recharge.operator.name
                                            )}
                                        </span>
                                        <br />
                                        <span>{recharge.category.name}</span>
                                    </td>

                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        ₹{recharge?.opening_balance||'0'}
                                    </td>

                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        ₹{recharge.price}
                                    </td>

                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        ₹{recharge?.charge_amount||'0'}
                                    </td>
                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        ₹{recharge?.closing_balance||'0'}
                                    </td>

                                    {
                                        
                                    /* 
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
                                    </td> */}
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
                                                onClick={() => { setComplaint([recharge.id, recharge.mobile,recharge.clientRefNo]); setShowComplaintDialog(true) }}
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
                                                    onClick={() => handleCallbackResponse(recharge?.clientRefNo)}
                                                >
                                                    received callbacks
                                                </Button>
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={22} className="px-6 py-4 text-center text-sm text-gray-500">
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
                    onPageChange={(v: number) => { updatePageNo(v); fetch(); }}
                />

            </div>

            {/* Transaction Details Dialog */}
            {selectedRecharge && (
                <JsonDetailsDialog
                    isOpen={isTxResDialogOpen}
                    onClose={() => setIsTxResDialogOpen(false)}
                    data={selectedRecharge}
                    title="Recharge Transaction Details"
                />
            )}

            {/* Issue Dialog */}
            <IssueDialog
             open={showComplaintDialog}
              setOpen={v => { setComplaint(['', '','']); setShowComplaintDialog(v) }}
                id={complaint[0]}
                mobile={complaint[1]}
                // ref_id={complaint[2]}

                ref_id={complaint[2]}
            />

            {/* API Response Dialog */}
            <ApiResponseDialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                data={selectedResponse}
            />

            {/* Callback Dialog */}
            <CallbackDialog
                isOpen={showCallbackDialog}
                onClose={() => {
                    setShowCallbackDialog(false);
                    setCallbackData([]);
                    setCallbackError('');
                }}
                data={callbackData}
                loading={callbackLoading}
                error={callbackError}
                clientRefNo={clientRefNo|| ''}
            />
        </>
    );
};

export default RechargeHistoryTable;
// // // components/TransactionTable.tsx
// // import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// // import { Badge } from "@/components/ui/badge";
// // import { ArrowUpCircle, ArrowDownCircle } from "lucide-react";
// // import { formatCurrency, formatDate, getStatusBadge, getTransactionType, formatTransactionType } from '../utils/format';
// // import { Transaction } from '../types/types';
// // import { ITxnHistory } from "@/apis/wallets/transactions";


// // interface TransactionTableProps {
// //     transactions: ITxnHistory[];
// //     isLoading: boolean;
// // }

// // export function TransactionTable({ transactions, isLoading }: TransactionTableProps) {
// //     if (isLoading) {
// //         return <div className="text-center py-4">Loading...</div>;
// //     }

// //     const renderTransactionIcon = (type: string) => {
// //         const { icon } = getTransactionType(type);
// //         return icon === 'up' ?
// //             <ArrowUpCircle className="h-4 w-4 text-emerald-500" /> :
// //             <ArrowDownCircle className="h-4 w-4 text-blue-500" />;
// //     };
// //     1
// //     return (
// //         <div className="rounded-lg bord border-gray-400 bg-white shadow-sm">
// //             <Table>
// //                 <TableHeader>
// //                     <TableRow className="bg-gray-50/50">
// //                         <TableHead className="text-gray-600">Time</TableHead>
// //                         <TableHead className="text-gray-600">Type</TableHead>
// //                         <TableHead className="text-gray-600">Status</TableHead>
// //                         <TableHead className="text-gray-600 text-center">Opening Balance</TableHead>
// //                         <TableHead className="text-gray-600 text-center">Amount</TableHead>
// //                         <TableHead className="text-gray-600 text-center">Closing Balance</TableHead>
// //                         {/* <TableHead className="text-gray-600 text-center">Order Id</TableHead> */}
// //                         {/* <TableHead className="text-gray-600 text-center">Payment Id</TableHead> */}
// //                         {/* <TableHead className="text-gray-600 text-center">RRN</TableHead>
// //                         <TableHead className="text-gray-600 text-center">UPI</TableHead>
// //                         <TableHead className="text-gray-600">Message</TableHead> */}
// //                     </TableRow>
// //                 </TableHeader>
// //                 <TableBody>
// //                     {transactions.map((transaction) => (
// //                         <TableRow key={transaction.id} className="hover:bg-gray-50/50">
// //                             <TableCell className="text-gray-600">{formatDate(transaction.createdAt)}</TableCell>
// //                             <TableCell>
// //                                 {/* <div className="flex items-center gap-1">
// //                                     {renderTransactionIcon(transaction.type)}
// //                                     <span className={getTransactionType(transaction.type).color}>
// //                                         {formatTransactionType(transaction.type)}
// //                                     </span>
// //                                 </div> */}

// //                                 <div className="flex items-center gap-1">
// //                                     {renderTransactionIcon(transaction.type)}
// //                                     <span className={getTransactionType(transaction.type).color}>
// //                                         {transaction.type == 'CASH'
// //                                             ? 'Add Money by Payment Gateway UPI'
// //                                             : formatTransactionType(transaction.type)}
// //                                     </span>
// //                                 </div>
// //                             </TableCell>
// //                             <TableCell>
// //                                 <Badge variant="secondary" className={getStatusBadge(transaction.status)}>
// //                                     {transaction.status}
// //                                 </Badge>
// //                             </TableCell>
// //                             {/* <TableCell className="text-right text-gray-500">
// //                                 {formatCurrency(transaction.commission)}
// //                                 </TableCell> */}
// //                             <TableCell className="text-center font-medium text-gray-700">
// //                                 {formatCurrency(transaction.opening_balance)}
// //                             </TableCell>
// //                             <TableCell className="text-center font-medium text-gray-700">
// //                                 {formatCurrency(transaction.amount)}
// //                             </TableCell>
// //                             <TableCell className="text-center font-medium text-gray-700">
// //                                 {formatCurrency(transaction.closing_balance)}
// //                             </TableCell>
// //                             {/* <TableCell className="text-center font-medium text-gray-700">
// //                                 {transaction.upi_txn_id || '---'}
// //                             </TableCell>
// //                             <TableCell className="text-center font-medium text-gray-700">
// //                                 {transaction.payment_id || '---'}
// //                             </TableCell> */}
// //                             {/* <TableCell className="text-center font-medium text-gray-700">
// //                                 {transaction.bank_rrn || '---'}
// //                             </TableCell>
// //                             <TableCell className="text-center font-medium text-gray-700">
// //                                 {transaction.client_upi_id || '---'}
// //                             </TableCell>
// //                             <TableCell
// //                                 className="max-w-xs truncate text-gray-500"
// //                                 title={transaction.msg}
// //                             >
// //                                 {transaction.msg || '-'}
// //                             </TableCell> */}
// //                         </TableRow>
// //                     ))}
// //                 </TableBody>
// //             </Table>
// //         </div>
// //     );
// // }



// // components/TransactionTable.tsx
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { Badge } from "@/components/ui/badge";
// import { ArrowUpCircle, ArrowDownCircle } from "lucide-react";
// import { formatCurrency, formatDate, getStatusBadge, getTransactionType, formatTransactionType } from '../utils/format';
// import { Transaction } from '../types/types';
// import { ITxnHistory } from "@/apis/wallets/transactions";
// import { tr } from "date-fns/locale";


// interface TransactionTableProps {
//     transactions: ITxnHistory[];
//     isLoading: boolean;
// }

// export function TransactionTable({ transactions, isLoading }: TransactionTableProps) {
//     if (isLoading) {
//         return <div className="text-center py-4">Loading...</div>;
//     }

//     const renderTransactionIcon = (type: string) => {
//         const { icon } = getTransactionType(type);
//         return icon === 'up' ?
//             <ArrowUpCircle className="h-4 w-4 text-emerald-500" /> :
//             <ArrowDownCircle className="h-4 w-4 text-blue-500" />;
//     };
//     1
// //     return (
// //         <div className="rounded-lg bord border-gray-400 bg-white shadow-sm">
// //             <Table>
// //                 <TableHeader>
// //                     <TableRow className="bg-gray-50/50">
// //                         <TableHead className="text-gray-600 text-gray-600 border border-gray-400 p-3">Sr.No</TableHead>

// //                         <TableHead className="text-gray-600 text-gray-600 border border-gray-400 p-3">Time</TableHead>
// //                         <TableHead className="text-gray-600 text-gray-600 border border-gray-400 p-3">Type</TableHead>
// //                         <TableHead className="text-gray-600 text-center text-gray-600 border border-gray-400 p-3">Remark</TableHead>
// //                         <TableHead className="text-gray-600 text-center text-gray-600 border border-gray-400 p-3">Order Id</TableHead>
// //                         <TableHead className="text-gray-600 text-center text-gray-600 border border-gray-400 p-3">Transaction Amount</TableHead>
// //                         <TableHead className="text-gray-600 text-center text-gray-600 border border-gray-400 p-3">Opening Balance</TableHead>


// //                         <TableHead className="text-gray-600 text-gray-600 border border-gray-400 p-3">Credit</TableHead>
// //                         <TableHead className="text-gray-600 text-gray-600 border border-gray-400 p-3">Debit</TableHead>

// //                         {/* <TableHead className="text-gray-600">Status</TableHead> */}
// //                         {/* <TableHead className="text-gray-600 text-center">Recharge Detail</TableHead> */}
// //                         <TableHead className="text-gray-600 text-center text-gray-600 border border-gray-400 p-3">Closing Balance</TableHead>
// //                         {/* <TableHead className="text-gray-600 text-center">Order Id</TableHead> */}
// //                         {/* <TableHead className="text-gray-600 text-center">Payment Id</TableHead> */}
// //                         {/* <TableHead className="text-gray-600 text-center">RRN</TableHead>
// //                         <TableHead className="text-gray-600 text-center">UPI</TableHead> */}
// //                     </TableRow>
// //                 </TableHeader>
// //                 <TableBody>
// //                     {transactions.map((transaction, index) => (
// //                         <TableRow key={transaction.id} className="hover:bg-gray-50/50 border-b">

// //                             <TableCell className="text-gray-600 border border-gray-400 p-3">
// //                                 {index + 1}
// //                             </TableCell>
// //                             <TableCell className="text-gray-600 border border-gray-400 p-3">
// //                                 {formatDate(transaction.createdAt)}
// //                             </TableCell>

// //                             <TableCell className="border border-gray-400 p-3">
// //                                 <div className="flex items-center gap-1 text-gray-600">
// //                                     {renderTransactionIcon(transaction.type)}
// //                                     <span className={`${getTransactionType(transaction.type).color} text-gray-600`}>
// //                                         {transaction.type?.includes("RECHARGE_DEBIT")
// //                                             ? "Recharge Debit"
// //                                             : transaction.type?.includes("RECHARGE_COMMISSION")
// //                                                 ? "Recharge Refund"
// //                                                 : "Add New Balance"//formatTransactionType(transaction.type)
// //                                         }
// //                                     </span>
// //                                 </div>
// //                             </TableCell>
// //                             {/* <TableCell className="text-center font-medium text-gray-700 border border-gray-400 p-3">
// //                                 {transaction.rechargeData ? (
// //                                     <div className="flex items-center space-x-3">
// //                                         <div className="flex flex-col space-y-1">
// //                                             <span className="text-gray-700 text-sm font-medium">
// //                                                 {transaction.rechargeData?.mobile}
// //                                             </span>
// //                                             <span className="text-gray-600 text-xs">
// //                                                 {transaction.rechargeData?.operator?.name}
// //                                             </span>
// //                                             <span className="text-gray-600 text-xs">
// //                                                 {transaction.rechargeData?.circle?.name}
// //                                             </span>
// //                                             {``}
// //                                         </div>
// //                                     </div>
// //                                 ) : (
// //                                     // <span className="text-gray-500">{transaction?.msg || "---"}</span>
// //                                     <span className="text-gray-500">
// //                                         {transaction?.msg === "Credit Wallet Request Generated"
// //                                             ? "Add Money by UPI"
// //                                             : transaction?.msg || "---"}
// //                                     </span>
// //                                 )}
// //                             </TableCell> */}



// //                             {/* here show remark  */}
// //                           <TableCell className="text-center text-[11px] font-bold text-gray-700 border border-gray-400 p-3 whitespace-nowrap">
// //   {transaction.rechargeData ? (
// //     <>
// //       {/* ✅ Show success by operator when msg === "Transaction Success by Admin" */}
// //       {transaction.msg === "Transaction Success by Admin" && (
// //         <div className="flex items-center space-x-3">
// //           <div className="flex flex-col space-y-1">
// //             <span>
// //               Success By Admin {transaction.rechargeData?.operator?.name}
// //               {transaction.rechargeData?.circle?.name
// //                 ? ` [${transaction.rechargeData.category.name}] `
// //                 : ""}
// //               No. {transaction.rechargeData?.mobile}
// //             </span>
// //              <span className="text-left">
// //                 {transaction.msg.toString().replace('Error transferring commission:','')}
// //               </span>
// //           </div>
// //         </div>
// //       )}

// //       {/* ✅ Debit case but skip if msg === success by admin */}
// //       {transaction.type === "RECHARGE_DEBIT" &&
// //         transaction.msg !== "Transaction Success by Admin" && (
// //           <div className="flex items-center space-x-3">
// //             <div className="flex flex-col ">
// //               <span>
// //                 Debit to {transaction.rechargeData?.operator?.name}
// //                 {transaction.rechargeData?.circle?.name
// //                   ? ` [${transaction.rechargeData.category.name}] `
// //                   : ""}
// //                 No. {transaction.rechargeData?.mobile}
// //               </span>
// //               <span className="text-left">
// //                 {transaction.msg.toString().replace('Error transferring commission:','')}
// //               </span>
// //             </div>
// //           </div>
// //         )}

// //       {/* ✅ Commission */}
// //       {transaction.type === "RECHARGE_COMMISSION" &&
// //         transaction.msg !== "Transaction Success by Admin" && (
// //           <div className="flex items-center space-x-3">
// //             <div className="flex flex-col space-y-1">
// //               <span>
// //                 {transaction.msg === "Transaction Failed by Admin"
// //                   ? "Failed By Admin"
// //                   : "Refund To"}{" "}
// //                 {transaction.rechargeData?.operator?.name}
// //                 {transaction.rechargeData?.circle?.name
// //                   ? ` [${transaction.rechargeData.category.name}] `
// //                   : ""}
// //                 No. {transaction.rechargeData?.mobile}
// //               </span>
// //                <span className="text-left">
// //                 {transaction.msg.toString().replace('Error transferring commission:','')}
// //               </span>
// //             </div>
// //           </div>
// //         )}

// //       {/* ✅ Other cases */}
// //       {!["RECHARGE_DEBIT", "RECHARGE_COMMISSION"].includes(transaction.type) &&
// //         transaction.msg !== "Transaction Success by Admin" && (
// //           <span className="text-gray-500">{transaction?.msg || "---"}</span>
// //         )}
// //     </>
// //   ) : (
// //     <>
// //       {/* ✅ Success by admin */}
// //       {transaction?.msg === "Transaction Success by Admin" && (
// //         <div className="flex flex-col ">
// //           <span>
// //             Success By Admin {transaction.rechargeData?.operator?.name}
// //             {transaction.rechargeData?.circle?.name
// //               ? ` [${transaction.rechargeData.category.name}] `
// //               : ""}
// //             No. {transaction.rechargeData?.mobile}
// //           </span>
// //         </div>
// //       )}

// //       {/* ✅ Failed by admin */}
// //       {transaction?.msg === "Transaction Failed by Admin" && (
// //         <div className="flex flex-col space-y-1">
// //           <span>
// //             Failed By Admin {transaction.rechargeData?.operator?.name}
// //             {transaction.rechargeData?.circle?.name
// //               ? ` [${transaction.rechargeData.category.name}] `
// //               : ""}
// //             No. {transaction.rechargeData?.mobile}
// //           </span>
// //            <span className="text-left">
// //                 {transaction.msg.toString().replace('Error transferring commission:','')}
// //               </span>

// //         </div>
// //       )}

// //       {/* ✅ Others */}
// //       {transaction?.msg !== "Transaction Success by Admin" &&
// //         transaction?.msg !== "Transaction Failed by Admin" && (
// //           <span className="text-gray-500">
// //             {transaction?.msg === "Credit Wallet Request Generated"
// //               ? "Add Money by UPI"
// //               : transaction?.msg || "---"}
// //           </span>
// //         )}
// //     </>
// //   )}
// // </TableCell>


// //                            <TableCell className="text-center text-[11px] font-bold text-gray-700 border border-gray-400 p-3 whitespace-nowrap">
// //   {transaction?.rechargeData?.id
// //     ? String(transaction.rechargeData.id)
// //     : "---"}
// // </TableCell>




// //                             <TableCell className="text-center font-medium text-gray-700 border border-gray-400 p-3">
// //                                 {transaction?.rechargeData?.price
// //                                     ? String(transaction.rechargeData.price).replace("-", "")
// //                                     : transaction.amount}
// //                             </TableCell>



// //                             <TableCell className="text-center font-medium text-gray-700 border border-gray-400 p-3">
// //                                 {transaction.opening_balance}
// //                             </TableCell>




// //                             <TableCell className="text-center font-medium text-gray-700 border border-gray-400 p-3">
// //                                 {(
// //                                     (
// //                                         transaction.type === "RECHARGE_COMMISSION" ||
// //                                         transaction.type === "WALLET_CREDIT" ||
// //                                         transaction.type === "REFUND" ||
// //                                         transaction.type === "ADJUSTMENT_CREDIT" ||
// //                                         transaction.type === "CASH"
// //                                     ) && transaction.msg === "Transaction Failed by Admin" || transaction.msg === "Failed"
// //                                 )
// //                                     ? String(transaction.amount).replace("-", "")
// //                                     : transaction.type === "CASH"
// //                                         ? String(transaction.amount).replace("-", "")
// //                                         : "---"}
// //                             </TableCell>

// //                             <TableCell className="text-center font-medium text-gray-700 border border-gray-400 p-3">
// //                                 {(transaction.type === "RECHARGE_DEBIT" ||
// //                                     transaction.type === "WALLET_DEBIT" ||
// //                                     transaction.type === "ADJUSTMENT_DEBIT") ||
// //                                     transaction.type === "RECHARGE_COMMISSION"
// //                                     &&
// //                                     transaction.msg === "Transaction Success by Admin" ||
// //                                     transaction.msg === "Successfully Accepted"
// //                                     ? String(transaction.amount).replace('-', '')
// //                                     : "---"}
// //                             </TableCell>




// //                             <TableCell className="text-center font-medium text-gray-700 border border-gray-400 p-3">
// //                                 {formatCurrency(transaction.closing_balance)}
// //                             </TableCell>


// //                         </TableRow>
// //                     ))}
// //                 </TableBody>
// //             </Table>
// //         </div>
// //     );



// return (
//         <div className="rounded-lg bord border-gray-400 bg-white shadow-sm">
//             <Table>
//                 <TableHeader>
//                     <TableRow className="bg-gray-50/50">
//                         <TableHead className="text-gray-600 text-gray-600 border border-gray-400 p-3">Sr.No</TableHead>

//                         <TableHead className="text-gray-600 text-gray-600 border border-gray-400 p-3">Time</TableHead>
//                         <TableHead className="text-gray-600 text-gray-600 border border-gray-400 p-3">Type</TableHead>
//                         <TableHead className="text-gray-600 text-center text-gray-600 border border-gray-400 p-3">Remark</TableHead>
//                         <TableHead className="text-gray-600 text-center text-gray-600 border border-gray-400 p-3">Order Id</TableHead>
//                         <TableHead className="text-gray-600 text-center text-gray-600 border border-gray-400 p-3">Transaction Amount</TableHead>
//                         <TableHead className="text-gray-600 text-center text-gray-600 border border-gray-400 p-3">Opening Balance</TableHead>


//                         <TableHead className="text-gray-600 text-gray-600 border border-gray-400 p-3">Credit</TableHead>
//                         <TableHead className="text-gray-600 text-gray-600 border border-gray-400 p-3">Debit</TableHead>

//                         {/* <TableHead className="text-gray-600">Status</TableHead> */}
//                         {/* <TableHead className="text-gray-600 text-center">Recharge Detail</TableHead> */}
//                         <TableHead className="text-gray-600 text-center text-gray-600 border border-gray-400 p-3">Closing Balance</TableHead>
//                         {/* <TableHead className="text-gray-600 text-center">Order Id</TableHead> */}
//                         {/* <TableHead className="text-gray-600 text-center">Payment Id</TableHead> */}
//                         {/* <TableHead className="text-gray-600 text-center">RRN</TableHead>
//                         <TableHead className="text-gray-600 text-center">UPI</TableHead> */}
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {transactions.map((transaction, index) => (
//                         <TableRow key={transaction.id} className="hover:bg-gray-50/50 border-b">

//                             <TableCell className="text-gray-600 border border-gray-400 p-3">
//                                 {index + 1}
//                             </TableCell>
//                             <TableCell className="text-gray-600 border border-gray-400 p-3">
//                                 {formatDate(transaction.createdAt)}
//                             </TableCell>

//                             <TableCell className="border border-gray-400 p-3">
//                                 <div className="flex items-center gap-1 text-gray-600">
//                                     {renderTransactionIcon(transaction.type)}
//                                     <span className={`${getTransactionType(transaction.type).color} text-gray-600`}>
//                                         {transaction.type?.includes("RECHARGE_DEBIT")
//                                             ? "Recharge Debit"
//                                             : transaction.type?.includes("RECHARGE_COMMISSION")
//                                                 ? "Recharge Refund"
//                                                 : "Add New Balance"//formatTransactionType(transaction.type)
//                                         }
//                                     </span>
//                                 </div>
//                             </TableCell>
//                             {/* <TableCell className="text-center font-medium text-gray-700 border border-gray-400 p-3">
//                                 {transaction.rechargeData ? (
//                                     <div className="flex items-center space-x-3">
//                                         <div className="flex flex-col space-y-1">
//                                             <span className="text-gray-700 text-sm font-medium">
//                                                 {transaction.rechargeData?.mobile}
//                                             </span>
//                                             <span className="text-gray-600 text-xs">
//                                                 {transaction.rechargeData?.operator?.name}
//                                             </span>
//                                             <span className="text-gray-600 text-xs">
//                                                 {transaction.rechargeData?.circle?.name}
//                                             </span>
//                                             {``}
//                                         </div>
//                                     </div>
//                                 ) : (
//                                     // <span className="text-gray-500">{transaction?.msg || "---"}</span>
//                                     <span className="text-gray-500">
//                                         {transaction?.msg === "Credit Wallet Request Generated"
//                                             ? "Add Money by UPI"
//                                             : transaction?.msg || "---"}
//                                     </span>
//                                 )}
//                             </TableCell> */}



//                             {/* here show remark  */}
//                           <TableCell className="text-center text-[11px] font-bold text-gray-700 border border-gray-400 p-3 whitespace-nowrap">
//   {transaction.rechargeData ? (
//     <>
//       {/* ✅ Show success by operator when msg === "Transaction Success by Admin" */}
//       {transaction.msg === "Transaction Success by Admin" && (
//         <div className="flex items-center space-x-3">
//           <div className="flex flex-col space-y-1">
//             <span>
//               Success By Admin {transaction.rechargeData?.operator?.name}
//               {transaction.rechargeData?.circle?.name
//                 ? ` [${transaction.rechargeData.category.name}] `
//                 : ""}
//               No. {transaction.rechargeData?.mobile}
//             </span>
//              <span className="text-left">
//                 {transaction.msg.toString().replace('Error transferring commission:','')}
//               </span>
//           </div>
//         </div>
//       )}

//       {/* ✅ Debit case but skip if msg === success by admin */}
//       {transaction.type === "RECHARGE_DEBIT" &&
//         transaction.msg !== "Transaction Success by Admin" && (
//           <div className="flex items-center space-x-3">
//             <div className="flex flex-col ">
//               <span>
//                 Debit to {transaction.rechargeData?.operator?.name}
//                 {transaction.rechargeData?.circle?.name
//                   ? ` [${transaction.rechargeData.category.name}] `
//                   : ""}
//                 No. {transaction.rechargeData?.mobile}
//               </span>
//               <span className="text-left">
//                 {transaction.msg.toString().replace('Error transferring commission:','')}
//               </span>
//             </div>
//           </div>
//         )}

//       {/* ✅ Commission */}
//       {transaction.type === "RECHARGE_COMMISSION" &&
//         transaction.msg !== "Transaction Success by Admin" && (
//           <div className="flex items-center space-x-3">
//             <div className="flex flex-col space-y-1">
//               <span>
//                 {transaction.msg === "Transaction Failed by Admin"
//                   ? "Failed By Admin"
//                   : "Refund To"}{" "}
//                 {transaction.rechargeData?.operator?.name}
//                 {transaction.rechargeData?.circle?.name
//                   ? ` [${transaction.rechargeData.category.name}] `
//                   : ""}
//                 No. {transaction.rechargeData?.mobile}
//               </span>
//                <span className="text-left">
//                 {transaction.msg.toString().replace('Error transferring commission:','')}
//               </span>
//             </div>
//           </div>
//         )}

//       {/* ✅ Other cases */}
//       {!["RECHARGE_DEBIT", "RECHARGE_COMMISSION"].includes(transaction.type) &&
//         transaction.msg !== "Transaction Success by Admin" && (
//           <span className="text-gray-500">{transaction?.msg || "---"}</span>
//         )}
//     </>
//   ) : (
//     <>
//       {/* ✅ Success by admin */}
//       {transaction?.msg === "Transaction Success by Admin" && (
//         <div className="flex flex-col ">
//           <span>
//             Success By Admin {transaction.rechargeData?.operator?.name}
//             {transaction.rechargeData?.circle?.name
//               ? ` [${transaction.rechargeData.category.name}] `
//               : ""}
//             No. {transaction.rechargeData?.mobile}
//           </span>
//         </div>
//       )}

//       {/* ✅ Failed by admin */}
//       {transaction?.msg === "Transaction Failed by Admin" && (
//         <div className="flex flex-col space-y-1">
//           <span>
//             Failed By Admin {transaction.rechargeData?.operator?.name}
//             {transaction.rechargeData?.circle?.name
//               ? ` [${transaction.rechargeData.category.name}] `
//               : ""}
//             No. {transaction.rechargeData?.mobile}
//           </span>
//            <span className="text-left">
//                 {transaction.msg.toString().replace('Error transferring commission:','')}
//               </span>

//         </div>
//       )}

//       {/* ✅ Others */}
//       {transaction?.msg !== "Transaction Success by Admin" &&
//         transaction?.msg !== "Transaction Failed by Admin" && (
//           <span className="text-black-500">
//             {transaction?.msg === "Credit Wallet Request Generated"
//               ? 
//               <div className="flex flex-col ">
//              <span  className="text-left">
//                Add Money by UPI . RRN [{transaction?.bank_rrn||'---'}]
//              </span>

//               <span  className="text-left">
//                 order Id : [{transaction?.remote_order_id||'---'}]
//               </span>
//               </div>
//               : transaction?.msg || "---"}
//           </span>
//         )}
//     </>
//   )}
// </TableCell>


//                            {/* <TableCell className="text-center text-[11px] font-bold text-gray-700 border border-gray-400 p-3 whitespace-nowrap">
//   {transaction?.rechargeData?.id
//     ? String(transaction.rechargeData.id)
//     : 
//     "---"}
// </TableCell> */}


// <TableCell className="text-center text-[11px] font-bold text-gray-700 border border-gray-400 p-3 whitespace-nowrap">
//   {transaction?.id
//     ? String(transaction?.id)
//       : "---"}
// </TableCell>





//                             <TableCell className="text-center font-medium text-gray-700 border border-gray-400 p-3">
//                                 {transaction?.rechargeData?.price
//                                     ? String(transaction.rechargeData.price).replace("-", "")
//                                     : transaction.amount}
//                             </TableCell>



//                             <TableCell className="text-center font-medium text-gray-700 border border-gray-400 p-3">
//                                 {transaction.opening_balance}
//                             </TableCell>




//                             <TableCell className="text-center font-medium text-gray-700 border border-gray-400 p-3">
//                                 {(
//                                     (
//                                         transaction.type === "RECHARGE_COMMISSION" ||
//                                         transaction.type === "WALLET_CREDIT" ||
//                                         transaction.type === "REFUND" ||
//                                         transaction.type === "ADJUSTMENT_CREDIT" ||
//                                         transaction.type === "CASH"
//                                     ) && transaction.msg === "Transaction Failed by Admin" || transaction.msg === "Failed"
//                                 )
//                                     ? String(transaction.amount).replace("-", "")
//                                     : transaction.type === "CASH"|| transaction.type==="RECHARGE_COMMISSION"
//                                         ? String(transaction.amount).replace("-", "")
//                                         : "---"}
//                             </TableCell>

//                             <TableCell className="text-center font-medium text-gray-700 border border-gray-400 p-3">
//                                 {(transaction.type === "RECHARGE_DEBIT" ||
//                                     transaction.type === "WALLET_DEBIT" ||
//                                     transaction.type === "ADJUSTMENT_DEBIT") ||
//                                     transaction.type === "RECHARGE_COMMISSION"
//                                     &&
//                                    ( transaction.msg === "Transaction Success by Admin" ||
//                                     transaction.msg === "Successfully Accepted" )&&
//                                     transaction.type!=="RECHARGE_COMMISSION"
//                                     ? String(transaction.amount).replace('-', '')
//                                     : "---"}
//                             </TableCell>




//                             <TableCell className="text-center font-medium text-gray-700 border border-gray-400 p-3">
//                                 {formatCurrency(transaction.closing_balance)}
//                             </TableCell>


//                         </TableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//         </div>
//     );
// }






// components/TransactionTable.tsx
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowUpCircle, ArrowDownCircle } from "lucide-react";
import { formatCurrency, formatDate, getStatusBadge, getTransactionType, formatTransactionType } from '../utils/format';
import { Transaction } from '../types/types';
import { ITxnHistory } from "@/apis/wallets/transactions";


interface TransactionTableProps {
  transactions: ITxnHistory[];
  isLoading: boolean;
}

export function TransactionTable({ transactions, isLoading }: TransactionTableProps) {
  if (isLoading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  const renderTransactionIcon = (type: string) => {
    const { icon } = getTransactionType(type);
    return icon === 'up' ?
      <ArrowUpCircle className="h-4 w-4 text-emerald-500" /> :
      <ArrowDownCircle className="h-4 w-4 text-blue-500" />;
  };

  // return (
  //     <div className="rounded-lg bord border-gray-400 bg-white shadow-sm">
  //         <Table>
  //             <TableHeader>
  //                 <TableRow className="bg-gray-50/50">
  //                     <TableHead className="text-gray-600 text-gray-600 border border-gray-400 p-3">Sr.No</TableHead>

  //                     <TableHead className="text-gray-600 text-gray-600 border border-gray-400 p-3">Time</TableHead>
  //                     <TableHead className="text-gray-600 text-gray-600 border border-gray-400 p-3">Type</TableHead>
  //                     <TableHead className="text-gray-600 text-center text-gray-600 border border-gray-400 p-3">Remark</TableHead>

  //                     <TableHead className="text-gray-600 text-center text-gray-600 border border-gray-400 p-3">Transaction Amount</TableHead>
  //                     <TableHead className="text-gray-600 text-center text-gray-600 border border-gray-400 p-3">Opening Balance</TableHead>


  //                     <TableHead className="text-gray-600 text-gray-600 border border-gray-400 p-3">Credit</TableHead>
  //                     <TableHead className="text-gray-600 text-gray-600 border border-gray-400 p-3">Debit</TableHead>

  //                     {/* <TableHead className="text-gray-600">Status</TableHead> */}
  //                     {/* <TableHead className="text-gray-600 text-center">Recharge Detail</TableHead> */}
  //                     <TableHead className="text-gray-600 text-center text-gray-600 border border-gray-400 p-3">Closing Balance</TableHead>
  //                     {/* <TableHead className="text-gray-600 text-center">Order Id</TableHead> */}
  //                     {/* <TableHead className="text-gray-600 text-center">Payment Id</TableHead> */}
  //                     {/* <TableHead className="text-gray-600 text-center">RRN</TableHead>
  //                     <TableHead className="text-gray-600 text-center">UPI</TableHead> */}
  //                 </TableRow>
  //             </TableHeader>
  //             <TableBody>
  //                 {transactions.map((transaction, index) => (
  //                     <TableRow key={transaction.id} className="hover:bg-gray-50/50 border-b">

  //                         <TableCell className="text-gray-600 border border-gray-400 p-3">
  //                             {index + 1}
  //                         </TableCell>
  //                         <TableCell className="text-gray-600 border border-gray-400 p-3">
  //                             {formatDate(transaction.createdAt)}
  //                         </TableCell>

  //                         <TableCell className="border border-gray-400 p-3">
  //                             <div className="flex items-center gap-1 text-gray-600">
  //                                 {renderTransactionIcon(transaction.type)}
  //                                <span className={`${getTransactionType(transaction.type).color} text-gray-600`}>
  //                                     {transaction.type?.includes("RECHARGE_DEBIT")
  //                                         ? "Recharge Debit"
  //                                         : transaction.type?.includes("RECHARGE_COMMISSION")
  //                                             ? "Recharge Refund"
  //                                             : "Add New Balance"//formatTransactionType(transaction.type)
  //                                     }
  //                                 </span>
  //                             </div>
  //                         </TableCell>
  //                         {/* <TableCell className="text-center font-medium text-gray-700 border border-gray-400 p-3">
  //                             {transaction.rechargeData ? (
  //                                 <div className="flex items-center space-x-3">
  //                                     <div className="flex flex-col space-y-1">
  //                                         <span className="text-gray-700 text-sm font-medium">
  //                                             {transaction.rechargeData?.mobile}
  //                                         </span>
  //                                         <span className="text-gray-600 text-xs">
  //                                             {transaction.rechargeData?.operator?.name}
  //                                         </span>
  //                                         <span className="text-gray-600 text-xs">
  //                                             {transaction.rechargeData?.circle?.name}
  //                                         </span>
  //                                         {``}
  //                                     </div>
  //                                 </div>
  //                             ) : (
  //                                 // <span className="text-gray-500">{transaction?.msg || "---"}</span>
  //                                 <span className="text-gray-500">
  //                                     {transaction?.msg === "Credit Wallet Request Generated"
  //                                         ? "Add Money by UPI"
  //                                         : transaction?.msg || "---"}
  //                                 </span>
  //                             )}
  //                         </TableCell> */}
  //                         <TableCell className="text-center font-medium text-gray-700 border border-gray-400 p-3">
  //                             {transaction.rechargeData ? (
  //                                 transaction.type === "RECHARGE_DEBIT" ? (
  //                                     <div className="flex items-center space-x-3">
  //                                         <div className="flex flex-col space-y-1">
  //                                             <span className="text-gray-700 text-sm font-medium">
  //                                                 Debit to {transaction.rechargeData?.operator?.name}
  //                                                 {transaction.rechargeData?.circle?.name
  //                                                     ? ` [${transaction.rechargeData.category.name}] `
  //                                                     : ""}

  //                                                 No. {transaction.rechargeData?.mobile}
  //                                             </span>
  //                                         </div>
  //                                     </div>
  //                                 ) : transaction.type === "RECHARGE_COMMISSION" ? (
  //                                     <div className="flex items-center space-x-3">
  //                                         <div className="flex flex-col space-y-1">
  //                                             <span className="text-gray-700 text-sm font-sm">
  //                                                 Refund To {transaction.rechargeData?.operator?.name}
  //                                                 {transaction.rechargeData?.circle?.name
  //                                                     ? ` [${transaction.rechargeData.category.name}] `
  //                                                     : ""}
  //                                                 No. {transaction.rechargeData?.mobile}
  //                                             </span>
  //                                         </div>
  //                                     </div>
  //                                 ) : (
  //                                     <span className="text-gray-500">{transaction?.msg || "---"}</span>
  //                                 )
  //                             ) : (
  //                                 <span className="text-gray-500">
  //                                     {transaction?.msg === "Credit Wallet Request Generated"
  //                                         ? "Add Money by UPI"
  //                                         : transaction?.msg || "---"}
  //                                 </span>
  //                             )}
  //                         </TableCell>



  //                         <TableCell className="text-center font-medium text-gray-700 border border-gray-400 p-3">
  //                             {transaction?.rechargeData?.price
  //                                 ? String(transaction.rechargeData.price).replace("-", "")
  //                                 : transaction.amount}
  //                         </TableCell>



  //                         <TableCell className="text-center font-medium text-gray-700 border border-gray-400 p-3">
  //                             {transaction.opening_balance}
  //                         </TableCell>






  //                         <TableCell className="text-center font-medium text-gray-700 border border-gray-400 p-3">
  //                             {(
  //                                 (
  //                                     transaction.type === "RECHARGE_COMMISSION" ||
  //                                     transaction.type === "WALLET_CREDIT" ||
  //                                     transaction.type === "REFUND" ||
  //                                     transaction.type === "ADJUSTMENT_CREDIT" ||
  //                                     transaction.type === "CASH"
  //                                 ) && transaction.msg === "Transaction Failed by Admin" || transaction.msg === "Failed"
  //                             )
  //                                 ? String(transaction.amount).replace("-", "")
  //                                 : transaction.type === "CASH"
  //                                     ? String(transaction.amount).replace("-", "")
  //                                     : "---"}
  //                         </TableCell>

  //                         <TableCell className="text-center font-medium text-gray-700 border border-gray-400 p-3">
  //                             {(transaction.type === "RECHARGE_DEBIT" ||
  //                                 transaction.type === "WALLET_DEBIT" ||
  //                                 transaction.type === "ADJUSTMENT_DEBIT")||
  //                                 transaction.type === "RECHARGE_COMMISSION"
  //                                  &&
  //                                 transaction.msg === "Transaction Success by Admin"||
  //                                 transaction.msg === "Successfully Accepted"
  //                                 ? String(transaction.amount).replace('-', '')
  //                                 : "---"}
  //                         </TableCell>






  //                         <TableCell className="text-center font-medium text-gray-700 border border-gray-400 p-3">
  //                             {formatCurrency(transaction.closing_balance)}
  //                         </TableCell>


  //                     </TableRow>
  //                 ))}
  //             </TableBody>
  //         </Table>
  //     </div>
  // );

  return (
    <div className="rounded-lg bord border-gray-400 bg-white shadow-sm">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-300">
            <TableHead className="text-gray-600 text-gray-600 border border-gray-400 p-3">Sr.No</TableHead>

            <TableHead className="text-gray-600 text-gray-600 border border-gray-400 p-3">Time</TableHead>
            <TableHead className="text-gray-600 text-gray-600 border border-gray-400 p-3">Type</TableHead>
            <TableHead className="text-gray-600 text-center text-gray-600 border border-gray-400 p-3">Remark</TableHead>
            <TableHead className="text-gray-600 text-center text-gray-600 border border-gray-400 p-3">Order Id</TableHead>
            <TableHead className="text-gray-600 text-center text-gray-600 border border-gray-400 p-3">Transaction Amount</TableHead>
            <TableHead className="text-gray-600 text-center text-gray-600 border border-gray-400 p-3">Opening Balance</TableHead>


            <TableHead className="text-gray-600 text-gray-600 border border-gray-400 p-3">Credit</TableHead>
            <TableHead className="text-gray-600 text-gray-600 border border-gray-400 p-3">Debit</TableHead>

            {/* <TableHead className="text-gray-600">Status</TableHead> */}
            {/* <TableHead className="text-gray-600 text-center">Recharge Detail</TableHead> */}
            <TableHead className="text-gray-600 text-center text-gray-600 border border-gray-400 p-3">Closing Balance</TableHead>
            {/* <TableHead className="text-gray-600 text-center">Order Id</TableHead> */}
            {/* <TableHead className="text-gray-600 text-center">Payment Id</TableHead> */}
            {/* <TableHead className="text-gray-600 text-center">RRN</TableHead>
                        <TableHead className="text-gray-600 text-center">UPI</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction, index) => (
            <TableRow key={transaction.id} className="hover:bg-gray-50/50 border-b even:bg-red-50 odd:bg-gray-100">

              <TableCell className="text-gray-600 border border-gray-400 p-3">
                {index + 1}
              </TableCell>
              <TableCell className="text-gray-600 border border-gray-400 p-3">
                {formatDate(transaction.createdAt)}
              </TableCell>

              <TableCell className="border border-gray-400 p-3">
                <div className="flex items-center gap-1 text-gray-600">
                  {renderTransactionIcon(transaction.type)}
                  <span className={`${getTransactionType(transaction.type).color} text-gray-600`}>
                    {transaction.type?.includes("RECHARGE_DEBIT")
                      ? "Recharge Debit"
                      : transaction.type?.includes("RECHARGE_COMMISSION")
                        ? "Recharge Refund"
                        : "Add New Balance"//formatTransactionType(transaction.type)
                    }
                  </span>
                </div>
              </TableCell>
              {/* <TableCell className="text-center font-medium text-gray-700 border border-gray-400 p-3">
                                {transaction.rechargeData ? (
                                    <div className="flex items-center space-x-3">
                                        <div className="flex flex-col space-y-1">
                                            <span className="text-gray-700 text-sm font-medium">
                                                {transaction.rechargeData?.mobile}
                                            </span>
                                            <span className="text-gray-600 text-xs">
                                                {transaction.rechargeData?.operator?.name}
                                            </span>
                                            <span className="text-gray-600 text-xs">
                                                {transaction.rechargeData?.circle?.name}
                                            </span>
                                            {``}
                                        </div>
                                    </div>
                                ) : (
                                    // <span className="text-gray-500">{transaction?.msg || "---"}</span>
                                    <span className="text-gray-500">
                                        {transaction?.msg === "Credit Wallet Request Generated"
                                            ? "Add Money by UPI"
                                            : transaction?.msg || "---"}
                                    </span>
                                )}
                            </TableCell> */}



              {/* here show remark  */}
              {/* <TableCell className="text-center text-[11px] font-bold text-gray-700 border border-gray-400 p-3 whitespace-nowrap">
                {transaction.rechargeData ? (
                  <>
                    
                    {transaction.msg === "Transaction Success by Admin" && (
                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col space-y-1">
                          <span>
                            Success By Admin {transaction.rechargeData?.operator?.name}
                            {transaction.rechargeData?.circle?.name
                              ? ` [${transaction.rechargeData.category.name}] `
                              : ""}
                            No. {transaction.rechargeData?.mobile}
                          </span>
                          <span className="text-left">
                            {transaction.msg.toString().replace('Error transferring commission:', '')}
                          </span>
                        </div>
                      </div>
                    )}

                    {transaction.type === "RECHARGE_DEBIT" &&
                      transaction.msg !== "Transaction Success by Admin" && (
                        <div className="flex items-center space-x-3">
                          <div className="flex flex-col ">
                            <span>
                              Debit to {transaction.rechargeData?.operator?.name}
                              {transaction.rechargeData?.circle?.name
                                ? ` [${transaction.rechargeData.category.name}] `
                                : ""}
                              No. {transaction.rechargeData?.mobile}
                            </span>
                            <span className="text-left">
                              {transaction.msg.toString().replace('Error transferring commission:', '')}
                            </span>
                          </div>
                        </div>
                      )}

                    {transaction.type === "RECHARGE_COMMISSION" &&
                      transaction.msg !== "Transaction Success by Admin" && (
                        <div className="flex items-center space-x-3">
                          <div className="flex flex-col space-y-1">
                            <span>
                              {transaction.msg === "Transaction Failed by Admin"
                                ? "Failed By Admin"
                                : "Refund To"}{" "}
                              {transaction.rechargeData?.operator?.name}
                              {transaction.rechargeData?.circle?.name
                                ? ` [${transaction.rechargeData.category.name}] `
                                : ""}
                              No. {transaction.rechargeData?.mobile}
                            </span>
                            <span className="text-left">
                              {transaction.msg.toString().replace('Error transferring commission:', '')}
                            </span>
                          </div>
                        </div>
                      )}

                    {!["RECHARGE_DEBIT", "RECHARGE_COMMISSION"].includes(transaction.type) &&
                      transaction.msg !== "Transaction Success by Admin" && (
                        <span className="text-gray-500">{transaction?.msg || "---"}</span>
                      )}
                  </>
                ) : (
                  <>
                    
                    {transaction?.msg === "Transaction Success by Admin" && (
                      <div className="flex flex-col ">
                        <span>
                          Success By Admin {transaction.rechargeData?.operator?.name}
                          {transaction.rechargeData?.circle?.name
                            ? ` [${transaction.rechargeData.category.name}] `
                            : ""}
                          No. {transaction.rechargeData?.mobile}
                        </span>
                      </div>
                    )}

                  
                    {transaction?.msg === "Transaction Failed by Admin" && (
                      <div className="flex flex-col space-y-1">
                        <span>
                          Failed By Admin {transaction.rechargeData?.operator?.name}
                          {transaction.rechargeData?.circle?.name
                            ? ` [${transaction.rechargeData.category.name}] `
                            : ""}
                          No. {transaction.rechargeData?.mobile}
                        </span>
                        <span className="text-left">
                          {transaction.msg.toString().replace('Error transferring commission:', '')}
                        </span>

                      </div>
                    )}

                    {transaction?.msg !== "Transaction Success by Admin" &&
                      transaction?.msg !== "Transaction Failed by Admin" && (
                        <span className="text-gray-500">
                          {transaction?.msg === "Credit Wallet Request Generated"
                            ?
                            <div className="flex flex-col ">
                              <span className="text-left">
                                Add Money by UPI . RRN [{transaction?.bank_rrn || '---'}]
                              </span>

                              <span className="text-left">
                                order Id : [{transaction?.remote_order_id || '---'}]
                              </span>
                            </div>
                            : transaction?.msg || "---"}
                        </span>
                      )}
                  </>
                )}
              </TableCell> */}

              <TableCell className="text-center text-[11px] font-bold text-gray-700 border border-gray-400 p-3 whitespace-nowrap">
  {transaction.rechargeData ? (
    <>
    
      {transaction.msg === "Transaction Success by Admin" && (
        <div className="flex items-center space-x-3">
          <div className="flex flex-col space-y-1">
            <span>
              Success By Admin {transaction.rechargeData?.operator?.name}
              {transaction.rechargeData?.circle?.name
                ? ` [${transaction.rechargeData.category.name}] `
                : ""}
              No. {transaction.rechargeData?.mobile}
            </span>
            <span className="text-left">
              {transaction.msg.toString().replace("Error transferring commission:", "")}
            </span>
          </div>
        </div>
      )}

      {transaction.type === "RECHARGE_DEBIT" &&
        transaction.msg !== "Transaction Success by Admin" && (
          <div className="flex items-center space-x-3">
            <div className="flex flex-col ">
              <span>
                Debit to {transaction.rechargeData?.operator?.name}
                {transaction.rechargeData?.circle?.name
                  ? ` [${transaction.rechargeData.category.name}] `
                  : ""}
                No. {transaction.rechargeData?.mobile}
              </span>
              <span className="text-left">
                {transaction.msg.toString().replace("Error transferring commission:", "")}
              </span>
            </div>
          </div>
        )}

      {transaction.type === "RECHARGE_COMMISSION" &&
        transaction.msg !== "Transaction Success by Admin" && (
          <div className="flex items-center space-x-3">
            <div className="flex flex-col space-y-1">
              <span>
                {transaction.msg === "Transaction Failed by Admin" 
                  ? `Failed By Admin ${transaction.rechargeData?.operator?.name}${
                      transaction.rechargeData?.circle?.name
                        ? ` [${transaction.rechargeData.category.name}] `
                        : ""
                    } No. ${transaction.rechargeData?.mobile}`
                  : `Refund To ${transaction.rechargeData?.operator?.name}${
                      transaction.rechargeData?.circle?.name
                        ? ` [${transaction.rechargeData.category.name}] `
                        : ""
                    } No. ${transaction.rechargeData?.mobile}`}
              </span>
              <span className="text-left">
                {transaction.msg.toString().replace("Error transferring commission:", "")}
              </span>
            </div>
          </div>
        )}

      {!["RECHARGE_DEBIT", "RECHARGE_COMMISSION"].includes(transaction.type) &&
        transaction.msg !== "Transaction Success by Admin" && (
          <span className="text-gray-500">{transaction?.msg || "---"}</span>
        )}
    </>
  ) : (
    <>
      {transaction?.msg === "Transaction Success by Admin" && (
        <div className="flex flex-col ">
          <span>
            Success By Admin {transaction.rechargeData?.operator?.name}
            {transaction.rechargeData?.circle?.name
              ? ` [${transaction.rechargeData.category.name}] `
              : ""}
            No. {transaction.rechargeData?.mobile}
          </span>
        </div>
      )}

      {transaction?.msg === "Transaction Failed by Admin" && (
        <div className="flex flex-col space-y-1">
          <span>
            Failed By Admin {transaction.rechargeData?.operator?.name}
            {transaction.rechargeData?.circle?.name
              ? ` [${transaction.rechargeData.category.name}] `
              : ""}
            No. {transaction.rechargeData?.mobile}
          </span>
          <span className="text-left">
            {transaction.msg.toString().replace("Error transferring commission:", "")}
          </span>
        </div>
      )}

      {transaction?.msg !== "Transaction Success by Admin" &&
        transaction?.msg !== "Transaction Failed by Admin" && (
          <span className="text-gray-500">
            {transaction?.msg === "Credit Wallet Request Generated" ? (
              <div className="flex flex-col ">
                <span className="text-left">
                  Add Money by UPI . RRN [{transaction?.bank_rrn || "---"}]
                </span>
                <span className="text-left">
                  order Id : [{transaction?.remote_order_id || "---"}]
                </span>
              </div>
            ) : (
              transaction?.msg || "---"
            )}
          </span>
        )}
    </>
  )}
</TableCell>



              {/* <TableCell className="text-center text-[11px] font-bold text-gray-700 border border-gray-400 p-3 whitespace-nowrap">
  {transaction?.rechargeData?.id
    ? String(transaction.rechargeData.id)
    : 
    "---"}
</TableCell> */}

              {/* 
<TableCell className="text-center text-[11px] font-bold text-gray-700 border border-gray-400 p-3 whitespace-nowrap">
  {transaction?.id
    ? String(transaction?.id)
      : "---"}
</TableCell> */}

              <TableCell className="text-center text-[11px] font-bold text-gray-700 border border-gray-400 p-3 whitespace-nowrap">
                {transaction?.rechargeData?.id
                  ? String(transaction.rechargeData.id)
                  : transaction?.id
                    ? String(transaction.id)
                    : "---"}
              </TableCell>




              <TableCell className="text-center font-medium text-gray-700 border border-gray-400 p-3">
                {transaction?.rechargeData?.price
                  ? String(transaction.rechargeData.price).replace("-", "")
                  : transaction.amount}
              </TableCell>



              <TableCell className="text-center font-medium text-gray-700 border border-gray-400 p-3">
                {transaction.opening_balance}
              </TableCell>




              {/* <TableCell className="text-center font-medium text-gray-700 border border-gray-400 p-3">
                                {(
                                    (
                                        transaction.type === "RECHARGE_COMMISSION" ||
                                        transaction.type === "WALLET_CREDIT" ||
                                        transaction.type === "REFUND" ||
                                        transaction.type === "ADJUSTMENT_CREDIT" ||
                                        transaction.type === "CASH"
                                    ) && transaction.msg === "Transaction Failed by Admin" || transaction.msg === "Failed" || transaction.msg=="REFUNDED"
                                )
                                    ? String(transaction.amount).replace("-", "")
                                    : transaction.type === "CASH"
                                        ? String(transaction.amount).replace("-", "")
                                        : "---"}
                            </TableCell>

                            <TableCell className="text-center font-medium text-gray-700 border border-gray-400 p-3">
                                {(transaction.type === "RECHARGE_DEBIT" ||
                                    transaction.type === "WALLET_DEBIT" ||
                                    transaction.type === "ADJUSTMENT_DEBIT") ||
                                    transaction.type === "RECHARGE_COMMISSION"
                                    &&
                                    transaction.msg === "Transaction Success by Admin" ||
                                    transaction.msg === "Successfully Accepted" ||
                                    transaction.msg === "Success"
                                    ? String(transaction.amount).replace('-', '')
                                    : "---"}
                            </TableCell> */}



              <TableCell className="text-center font-medium text-gray-700 border border-gray-400 p-3">
                {(() => {
                  const isDistributor = transaction?.user?.role === "DISTRIBUTOR";

                  // Credit Conditions
                  const isCredit =
                    (
                      ["RECHARGE_COMMISSION", "WALLET_CREDIT", "REFUND", "ADJUSTMENT_CREDIT", "CASH"].includes(transaction.type)
                      && ["Transaction Failed by Admin", "Failed", "REFUNDED"].includes(transaction.msg)
                    ) || (transaction.type === "CASH");

                  // Debit Conditions
                  const isDebit =
                    (
                      ["RECHARGE_DEBIT", "WALLET_DEBIT", "ADJUSTMENT_DEBIT"].includes(transaction.type)
                      || (transaction.type === "RECHARGE_COMMISSION" &&
                        ["Transaction Success by Admin", "Successfully Accepted", "Success"].includes(transaction.msg))
                    );

                  // अगर Distributor है तो उल्टा दिखाओ
                  if (isDistributor) {
                    return isDebit
                      ? String(transaction.amount).replace("-", "")
                      : "---";
                  } else {
                    return isCredit
                      ? String(transaction.amount).replace("-", "")
                      : "---";
                  }
                })()}
              </TableCell>

              <TableCell className="text-center font-medium text-gray-700 border border-gray-400 p-3">
                {(() => {
                  const isDistributor = transaction?.user?.role === "DISTRIBUTOR";

                  // Credit Conditions
                  const isCredit =
                    (
                      ["RECHARGE_COMMISSION", "WALLET_CREDIT", "REFUND", "ADJUSTMENT_CREDIT", "CASH"].includes(transaction.type)
                      && ["Transaction Failed by Admin", "Failed", "REFUNDED"].includes(transaction.msg)
                    ) || (transaction.type === "CASH");

                  // Debit Conditions
                  const isDebit =
                    (
                      ["RECHARGE_DEBIT", "WALLET_DEBIT", "ADJUSTMENT_DEBIT"].includes(transaction.type)
                      || (transaction.type === "RECHARGE_COMMISSION" &&
                        ["Transaction Success by Admin", "Successfully Accepted", "Success"].includes(transaction.msg))
                    );

                  if (isDistributor) {
                    return isCredit
                      ? String(transaction.amount).replace("-", "")
                      : "---";
                  } else {
                    return isDebit
                      ? String(transaction.amount).replace("-", "")
                      : "---";
                  }
                })()}
              </TableCell>




              <TableCell className="text-center font-medium text-gray-700 border border-gray-400 p-3">
                {formatCurrency(transaction.closing_balance)}
              </TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );


}
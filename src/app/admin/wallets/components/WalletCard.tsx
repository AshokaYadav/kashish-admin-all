// import React from 'react';
// import {
//     Card,
//     CardContent,
//     CardFooter,
// } from "@/components/ui/card";
// import {
//     Popover,
//     PopoverContent,
//     PopoverTrigger,
// } from "@/components/ui/popover";
// import { Button } from "@/components/ui/button";
// import { History, CreditCard, ArrowUpCircle, ArrowDownCircle } from "lucide-react";
// import { Switch } from '@/components/ui/switch';
// import { Badge } from "@/components/ui/badge";
// import { useRouter } from 'next/navigation';
// import { IApisWalletsTransactions, IUsersWalletsTransactions } from '@/apis/wallets';

// export interface WalletCardProps {
//     wallet: IUsersWalletsTransactions | IApisWalletsTransactions;
//     isBlocking: boolean;
//     isUnblocking: boolean;
//     handleStatusChange: (id: string, val: boolean) => void;
//     handleTransaction: (wallet: any, type: boolean) => void;
//     isApiWalletsTab: boolean;
// }

// export default function WalletCard({
//     isApiWalletsTab,
//     wallet,
//     isBlocking,
//     isUnblocking,
//     handleStatusChange,
//     handleTransaction
// }: WalletCardProps) {
//     const router = useRouter();

//     // Mock recent transactions - replace with actual data
//     const recentTransactions = [
//         { id: 1, type: 'credit', amount: 500, date: '2025-02-01' },
//         { id: 2, type: 'debit', amount: 200, date: '2025-02-02' },
//         { id: 3, type: 'credit', amount: 1000, date: '2025-02-03' }
//     ];

//     const navigateToTransactions = () => {
//         const url: string = `wallets/history/${isApiWalletsTab ? 'apis' : 'users'}/${isApiWalletsTab ? (wallet as IApisWalletsTransactions).api_id : (wallet as IUsersWalletsTransactions).user_id}`
//         router.push(url);
//     };

//     return (
//         <Card key={wallet.id} className="hover:shadow-lg transition-shadow">
//             <CardContent className="pt-6">
//                 <div className="space-y-4">
//                     <div className="flex justify-between items-start">
//                         <div className="flex items-center">
//                             <CreditCard className="h-5 w-5 text-gray-500 mr-2" />
//                             <h3 className="text-lg font-semibold text-gray-800">
//                                 {(isApiWalletsTab ? (wallet as IApisWalletsTransactions).api : (wallet as IUsersWalletsTransactions).user).name}
//                             </h3>
//                         </div>
//                         <div className="flex items-center gap-3">
//                             <Popover>
//                                 <PopoverTrigger asChild>
//                                     <Button
//                                         variant="ghost"
//                                         size="icon"
//                                         className="h-8 w-8 hover:bg-gray-100"
//                                     >
//                                         <History className="h-5 w-5 text-gray-500" />
//                                     </Button>
//                                 </PopoverTrigger>
//                                 <PopoverContent className="w-80 p-0" align="end">
//                                     <Card>
//                                         <CardContent className="p-4">
//                                             <div className="flex justify-between items-center mb-4">
//                                                 <h4 className="font-semibold text-sm">Recent Transactions</h4>
//                                                 <Button
//                                                     variant="ghost"
//                                                     size="sm"
//                                                     className="text-xs text-blue-600 hover:text-blue-800"
//                                                     onClick={navigateToTransactions}
//                                                 >
//                                                     View All
//                                                 </Button>
//                                             </div>
//                                             <div className="space-y-2">
//                                                 {recentTransactions.map(transaction => (
//                                                     <div
//                                                         key={transaction.id}
//                                                         className="flex justify-between items-center p-2 hover:bg-gray-50 rounded"
//                                                     >
//                                                         <div className="flex items-center">
//                                                             {transaction.type === 'credit' ? (
//                                                                 <ArrowUpCircle className="h-4 w-4 text-green-500 mr-2" />
//                                                             ) : (
//                                                                 <ArrowDownCircle className="h-4 w-4 text-blue-500 mr-2" />
//                                                             )}
//                                                             <span className="text-sm text-gray-600">{transaction.date}</span>
//                                                         </div>
//                                                         <span className={`text-sm font-medium ${transaction.type === 'credit'
//                                                             ? 'text-green-600'
//                                                             : 'text-blue-600'
//                                                             }`}>
//                                                             ₹{transaction.amount}
//                                                         </span>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         </CardContent>
//                                     </Card>
//                                 </PopoverContent>
//                             </Popover>
//                             {!isApiWalletsTab && (
//                                 <Switch
//                                     disabled={isBlocking || isUnblocking}
//                                     checked={(wallet as IUsersWalletsTransactions).is_active}
//                                     onCheckedChange={(val: boolean) => handleStatusChange(wallet.id, val)}
//                                 />
//                             )}
//                         </div>
//                     </div>
//                     <div className="space-y-2">
//                         <div className="flex justify-between items-center">
//                             <span className="text-gray-600">Balance:</span>
//                             <span className="text-xl font-semibold">₹{wallet.balance.toFixed(2)}</span>
//                         </div>

//                         {!isApiWalletsTab && (
//                             <div className="flex justify-between items-center">
//                                 <span className="text-gray-600">Status:</span>
//                                 <Badge
//                                     variant={(wallet as IUsersWalletsTransactions).is_active ? "outline" : "secondary"}
//                                     className={`${(wallet as IUsersWalletsTransactions).is_active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}
//                                 >
//                                     {(wallet as IUsersWalletsTransactions).is_active ? "ACTIVE" : "INACTIVE"}
//                                 </Badge>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </CardContent>
//             <CardFooter className="flex flex-wrap justify-end gap-2 pt-2">
//                 <Button
//                     variant="outline"
//                     size="sm"
//                     className="bg-green-500 text-white hover:bg-green-600"
//                     onClick={() => handleTransaction(wallet, true)}
//                 >
//                     <ArrowUpCircle className="h-4 w-4 mr-1" />
//                     Credit
//                 </Button>
//                 <Button
//                     variant="outline"
//                     size="sm"
//                     className="bg-blue-500 text-white hover:bg-blue-600"
//                     onClick={() => handleTransaction(wallet, false)}
//                 >
//                     <ArrowDownCircle className="h-4 w-4 mr-1" />
//                     Debit
//                 </Button>
//             </CardFooter>
//         </Card>
//     );
// }



import React from 'react';
import {
    TableCell,
    TableRow,
} from "@/components/ui/table";
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { History, ArrowUpCircle, ArrowDownCircle } from "lucide-react";
import { Switch } from '@/components/ui/switch';
import { Badge } from "@/components/ui/badge";
import { useRouter } from 'next/navigation';
import { IApisWalletsTransactions, IUsersWalletsTransactions } from '@/apis/wallets';

export interface WalletRowProps {
    wallet: IUsersWalletsTransactions | IApisWalletsTransactions;
    isBlocking: boolean;
    isUnblocking: boolean;
    handleStatusChange: (id: string, val: boolean) => void;
    handleTransaction: (wallet: any, type: boolean) => void;
    isApiWalletsTab: boolean;
}

export default function WalletRow({
    isApiWalletsTab,
    wallet,
    isBlocking,
    isUnblocking,
    handleStatusChange,
    handleTransaction
}: WalletRowProps) {
    const router = useRouter();

    // Mock recent transactions - replace with actual data
    const recentTransactions = [
        { id: 1, type: 'credit', amount: 500, date: '2025-02-01' },
        { id: 2, type: 'debit', amount: 200, date: '2025-02-02' },
        { id: 3, type: 'credit', amount: 1000, date: '2025-02-03' }
    ];

    const navigateToTransactions = () => {
        const url: string = `wallets/history/${isApiWalletsTab ? 'apis' : 'users'}/${isApiWalletsTab ? (wallet as IApisWalletsTransactions).api_id : (wallet as IUsersWalletsTransactions).user_id}`
        router.push(url);
    };

    return (
        <TableRow key={wallet.id} className="hover:bg-gray-50">
            <TableCell className="font-medium">
                {(isApiWalletsTab ? (wallet as IApisWalletsTransactions).api : (wallet as IUsersWalletsTransactions).user).name}
            </TableCell>
             <TableCell className="font-medium">
                {(isApiWalletsTab ? (wallet as IApisWalletsTransactions).api : (wallet as IUsersWalletsTransactions).user).mobile}
            </TableCell>
            <TableCell className="text-right font-semibold">
                ₹{wallet.balance.toFixed(2)}
            </TableCell>
            {!isApiWalletsTab && (
                <TableCell className="text-center">
                    <Badge
                        variant={(wallet as IUsersWalletsTransactions).is_active ? "outline" : "secondary"}
                        className={`${(wallet as IUsersWalletsTransactions).is_active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}
                    >
                        {(wallet as IUsersWalletsTransactions).is_active ? "ACTIVE" : "INACTIVE"}
                    </Badge>
                </TableCell>
            )}
            <TableCell className="text-center">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 hover:bg-gray-100"
                        >
                            <History className="h-4 w-4 text-gray-500" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80 p-0" align="end">
                        <Card>
                            <CardContent className="p-4">
                                <div className="flex justify-between items-center mb-4">
                                    <h4 className="font-semibold text-sm">Recent Transactions</h4>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-xs text-blue-600 hover:text-blue-800"
                                        onClick={navigateToTransactions}
                                    >
                                        View All
                                    </Button>
                                </div>
                                <div className="space-y-2">
                                    {recentTransactions.map(transaction => (
                                        <div
                                            key={transaction.id}
                                            className="flex justify-between items-center p-2 hover:bg-gray-50 rounded"
                                        >
                                            <div className="flex items-center">
                                                {transaction.type === 'credit' ? (
                                                    <ArrowUpCircle className="h-4 w-4 text-green-500 mr-2" />
                                                ) : (
                                                    <ArrowDownCircle className="h-4 w-4 text-blue-500 mr-2" />
                                                )}
                                                <span className="text-sm text-gray-600">{transaction.date}</span>
                                            </div>
                                            <span className={`text-sm font-medium ${transaction.type === 'credit'
                                                ? 'text-green-600'
                                                : 'text-blue-600'
                                                }`}>
                                                ₹{transaction.amount}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </PopoverContent>
                </Popover>
            </TableCell>
            <TableCell className="text-center">
                <div className="flex justify-center gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        className="bg-green-500 text-white hover:green-600"
                        onClick={() => handleTransaction(wallet, true)}
                    >
                        <ArrowUpCircle className="h-3 w-3 mr-1" />
                        Credit
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        className="bg-blue-500 text-white hover:bg-blue-600"
                        onClick={() => handleTransaction(wallet, false)}
                    >
                        <ArrowDownCircle className="h-3 w-3 mr-1" />
                        Debit
                    </Button>
                </div>
            </TableCell>
            {!isApiWalletsTab && (
                <TableCell className="text-center">
                    <Switch
                        disabled={isBlocking || isUnblocking}
                        checked={(wallet as IUsersWalletsTransactions).is_active}
                        onCheckedChange={(val: boolean) => handleStatusChange(wallet.id, val)}
                    />
                </TableCell>
            )}
        </TableRow>
    );
}
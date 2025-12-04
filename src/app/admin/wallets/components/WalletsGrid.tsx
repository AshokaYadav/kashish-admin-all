// import { IApisWalletsTransactions, IUsersWalletsTransactions } from "@/apis/wallets";
// import WalletCard, { WalletCardProps } from "./WalletCard";

// export interface WalletsGridProps extends Omit<WalletCardProps, 'wallet'> {
//     wallets: IUsersWalletsTransactions[] | IApisWalletsTransactions[]
// }
// export default function WalletsGrid({ isApiWalletsTab, isBlocking, isUnblocking, wallets, handleStatusChange, handleTransaction }: WalletsGridProps) {
//     return (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {wallets.map((wallet) => (
//                 <WalletCard
//                     isApiWalletsTab={isApiWalletsTab}
//                     isBlocking={isBlocking}
//                     isUnblocking={isUnblocking}
//                     wallet={wallet}
//                     handleStatusChange={handleStatusChange}
//                     handleTransaction={handleTransaction} />
//             ))}
//         </div>
//     );
// }



import React from 'react';
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { IApisWalletsTransactions, IUsersWalletsTransactions } from "@/apis/wallets";
import WalletRow, { WalletRowProps } from "./WalletCard";

export interface WalletsGridProps extends Omit<WalletRowProps, 'wallet'> {
    wallets: IUsersWalletsTransactions[] | IApisWalletsTransactions[]
}

export default function WalletsGrid({ 
    isApiWalletsTab, 
    isBlocking, 
    isUnblocking, 
    wallets, 
    handleStatusChange, 
    handleTransaction 
}: WalletsGridProps) {
    return (
        <div className="w-full">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[200px]">Name</TableHead>
                        <TableHead className="w-[200px]">Mobile</TableHead>
                        <TableHead className="text-right">Balance</TableHead>
                        {!isApiWalletsTab && (
                            <TableHead className="text-center">Status</TableHead>
                        )}
                        <TableHead className="text-center">History</TableHead>
                        <TableHead className="text-center">Actions</TableHead>
                        {!isApiWalletsTab && (
                            <TableHead className="text-center">Toggle</TableHead>
                        )}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {wallets.map((wallet) => (
                        <WalletRow
                            key={wallet.id}
                            isApiWalletsTab={isApiWalletsTab}
                            isBlocking={isBlocking}
                            isUnblocking={isUnblocking}
                            wallet={wallet}
                            handleStatusChange={handleStatusChange}
                            handleTransaction={handleTransaction}
                        />
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
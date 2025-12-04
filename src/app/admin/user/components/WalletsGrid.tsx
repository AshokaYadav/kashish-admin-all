import { IApisWalletsTransactions, IUsersWalletsTransactions } from "@/apis/wallets";
import WalletCard, { WalletCardProps } from "./WalletCard";

export interface WalletsGridProps extends Omit<WalletCardProps, 'wallet'> {
    wallets: IUsersWalletsTransactions[] | IApisWalletsTransactions[]
}
export default function WalletsGrid({ isApiWalletsTab, isBlocking, isUnblocking, wallets, handleStatusChange, handleTransaction }: WalletsGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wallets.map((wallet) => (
                <WalletCard
                    isApiWalletsTab={isApiWalletsTab}
                    isBlocking={isBlocking}
                    isUnblocking={isUnblocking}
                    wallet={wallet}
                    handleStatusChange={handleStatusChange}
                    handleTransaction={handleTransaction} />
            ))}
        </div>
    );
}
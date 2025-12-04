import { IApisWalletsTransactions, IUsersWalletsTransactions } from '@/apis/wallets';
import useBlockUserWallet from '@/hooks/wallet/useBlockUserWallet';
import useCreditUserWallet from '@/hooks/wallet/useCreditWallet';
import useDebitUserWallet from '@/hooks/wallet/useDebitWallet';
import { useGetApisWalletsTransaction } from '@/hooks/wallet/useGetApiWalletTransactions';
import { useGetUsersWalletsTransaction } from '@/hooks/wallet/useGetWalletTransactions';
import useUnblockUserWallet from '@/hooks/wallet/useUnBlockUserWallet';
import { useState } from 'react';
import { toast } from 'sonner';

export default function useWallet() {
    const [transactionAmount, setTransactionAmount] = useState<number | 0>(0);
    const [isApiWalletsTab, setIsApiWalletsTab] = useState<boolean>(true);
    console.log('isApiWalletsTab-------', isApiWalletsTab);

    const { data: usersWalletsTransactions, isLoading: isLoadingUWTxns, refetch: refetchWallets } = (isApiWalletsTab ? useGetApisWalletsTransaction : useGetUsersWalletsTransaction)();


    const handleSuccess = () => {
        refetchWallets();
        toast('Successfull!');
        return {
            credit: () => {
                setTransactionAmount(0);
                setShowTransactionDialog(false);
            },
            debit: () => {
                setTransactionAmount(0);
                setShowTransactionDialog(false);
            },
            block: () => {

            },
            unBlock: () => {

            },
        }
    }
    const handleErrors = (errors: string[] = []) => {
        errors.forEach((description) => toast('Error', { description }))
        return {
            credit: () => {
                setTransactionAmount(0);
                setShowTransactionDialog(false);
            },
            debit: () => {
                setTransactionAmount(0);
                setShowTransactionDialog(false);
            },
            block: () => { },
            unBlock: () => { },
        }
    }
    const { credit, isCredting } = useCreditUserWallet(() => handleSuccess().credit(), () => handleErrors().credit(), isApiWalletsTab);
    const { debit, isDebiting } = useDebitUserWallet(() => handleSuccess().debit(), () => handleErrors().debit(), isApiWalletsTab);
    const { block, isBlocking } = useBlockUserWallet(() => handleSuccess().block(), () => handleErrors().block());
    const { unBlock, isUnblocking } = useUnblockUserWallet(() => handleSuccess().unBlock(), () => handleErrors().unBlock());

    // State management
    const [showAddDialog, setShowAddDialog] = useState<boolean>(false);
    const [showTransactionDialog, setShowTransactionDialog] = useState<boolean>(false);
    const [transactionType, setTransactionType] = useState<boolean>(true);
    const [selectedWallet, setSelectedWallet] = useState<IUsersWalletsTransactions | IApisWalletsTransactions | null>(null);

    const [newWallet, setNewWallet] = useState<any>({
        owner: '',
        balance: 0,
        status: 'ACTIVE'
    });

    const [statusFilter, setStatusFilter] = useState<any>("ALL");
    const [searchQuery, setSearchQuery] = useState<any>("");

    // Handle status change

    // Handle transaction
    const handleTransaction = (wallet: any, type: boolean) => {
        setSelectedWallet(wallet);
        setTransactionType(type);
        setShowTransactionDialog(true);
    };

    // Handle delete
    const handleDelete = (id: string) => {
        if (window.confirm('Are you sure you want to delete this wallet?')) {
            // setWallets(wallets.filter(wallet => `${wallet.id}` !== id));
        }
    };

    const handleStatusChange = (id: string, newStatus: boolean) => {
        (newStatus ? unBlock : block)(id);
    };

    return {
        usersWalletsTransactions, isLoadingUWTxns, refetchWallets,

        showAddDialog, setShowAddDialog,
        showTransactionDialog, setShowTransactionDialog,
        transactionType, setTransactionType,
        selectedWallet, setSelectedWallet,
        newWallet, setNewWallet,
        isApiWalletsTab, setIsApiWalletsTab,
        statusFilter, setStatusFilter,
        searchQuery, setSearchQuery,
        handleStatusChange, handleTransaction, handleDelete,
        credit, isCredting, debit, isDebiting,
        block, isBlocking, unBlock, isUnblocking,
        transactionAmount, setTransactionAmount
    }
}
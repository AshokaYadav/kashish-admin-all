'use client';

import React from 'react';

import {
    Header,
    MainContent,
    WalletTransactionDialog
} from './components'
import useWallet from './components/useWallet';


const WalletsPage = () => {
    const {
        usersWalletsTransactions, isLoadingUWTxns, setShowAddDialog,
        showTransactionDialog, setShowTransactionDialog,
        transactionType, selectedWallet, isApiWalletsTab, setIsApiWalletsTab,
        statusFilter, setStatusFilter,
        searchQuery, setSearchQuery,
        handleStatusChange, handleTransaction,
        isBlocking, isUnblocking,
        transactionAmount, setTransactionAmount,
        credit, isCredting, debit, isDebiting
    } = useWallet();

    return (
        <div className="min-h-screen bg-gray-50">

            <Header setShowAddDialog={setShowAddDialog} />

            <MainContent
                isApiWalletsTab={isApiWalletsTab}
                setIsApiWalletsTab={setIsApiWalletsTab}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                setStatusFilter={setStatusFilter}
                statusFilter={statusFilter}
                wallets={usersWalletsTransactions || []}
                handleStatusChange={handleStatusChange}
                isBlocking={isBlocking}
                isUnblocking={isUnblocking}
                handleTransaction={handleTransaction}
            />

            <WalletTransactionDialog
                open={showTransactionDialog}
                setOpen={setShowTransactionDialog}
                transactionAmount={transactionAmount}
                setTransactionAmount={setTransactionAmount}
                selectedWallet={selectedWallet}
                isCredit={transactionType}

                credit={credit}
                debit={debit}
                isCredting={isCredting}
                isDebiting={isDebiting}
                isApiWalletsTab={isApiWalletsTab}
            />
        </div>
    );
};

export default WalletsPage;
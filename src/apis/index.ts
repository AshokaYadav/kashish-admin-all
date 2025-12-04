import { activateApi, createApi, createThirdPartyApi, deleteApi, fetchAllActiveApis, fetchAllApis, fetchThirdPartyApi, updateApi, updateParams } from "./apis"
import { fetchAllCategories, fetchActiveCategories, createCategories, updateCategory, deleteCategories } from "./category"
import { createCircle, deleteCircle, fetchActiveCircles, fetchAllCircles, updateCircle } from "./circle"
import { createOperators,createOperators1, deleteOperator, fetchActiveOperators, fetchAllOperators, fetchAllOperatorsByCategory, fetchCategoryRecharges, fetchCircleRecharges, fetchOperatorRecharges, fetchOperatorsByCategory, updateOperator } from "./operator"
import { createOperatorApis, deleteOpApis, fetchOperatorApisByOperators, updateOperatorApi } from "./operator-apis"
import { createOperatorCommissions, fetchActiveOperatorCommissions, fetchAllOperatorsCommissions, updateOperatorCommission } from "./operator-commissions"
import { fetchDthPlansByThirdPartyProvider, fetchMonthlyRevenue, fetchOperatorsByThirdPartyProviderDth, fetchOperatorsNCircleByThirdPartyProviderMobile, fetchPlansByThirdPartyProvider, fetchRechargeSuccessRate } from "./recharge"
import { countActiveDecendents, createNewUser, deleteUser, fetchAllDistributors, fetchAllRetailers, fetchNotifications, fetchUserLoginHistory, registerAdmin, updateUser, updateUserStatus } from "./user"
import { blockUserWallet, creditApiWallet, creditUserWallet, debitApiWallet, debitUserWallet, deleteUserWallet, fetchApisWalletsWithTransaction, fetchUserWalletsWithTransaction, getAllUsersWallets, getUserWalletById, unBlockUserWallet } from "./wallets"
import { checkRechargeStatus, createComplaint, fetchComplaint, fetchRechargeHistories, updateComplaint } from './recharge/history';
import { fetchApiWalletTransactionHistories, fetchUserWalletTransactionHistories, fetchCreditUrl, createDebitWalletRequest, fetchDebits, updateDebits } from "./wallets/transactions"
import { createOperatorCircleLink, deleteOperatorCircleLink, fetchAllOperatorCircleLinks, GetOperatorCircle, updateOperatorCircleLink } from "./op-circle-link"


export const Stats = {
    fetchCircleRecharges,
    fetchCategoryRecharges,
    fetchOperatorRecharges,
    fetchMonthlyRevenue,
    fetchRechargeSuccessRate,
}

export const Apis = {
    fetchAllApis,
    fetchAllActiveApis,
    createApi,
    updateApi,
    activateApi,
    updateParams,
    deleteApi,

    createThirdPartyApi,
    fetchThirdPartyApi,
}

export const Circles = {
    fetchAllCircles,
    fetchActiveCircles,
    createCircle,
    updateCircle,
    deleteCircle,

}

export const OperatorApis = {
    fetchOperatorApisByOperators,
    updateOperatorApi,
    createOperatorApis,
    deleteOpApis,
}

export const OperatorsCommissions = {
    fetchActiveOperatorCommissions,
    fetchAllOperatorsCommissions,
    createOperatorCommissions,
    updateOperatorCommission,
}

export const Operators = {
    createOperators,
    createOperators1,
    updateOperator,
    deleteOperator,
    fetchAllOperators,
    fetchActiveOperators,
    fetchOperatorsByCategory,
    fetchAllOperatorsByCategory,
}

export const OperatorCircleLink = {
    createOperatorCircleLink,
    updateOperatorCircleLink,
    fetchAllOperatorCircleLinks,
    GetOperatorCircle,
    deleteOperatorCircleLink,
}
export const Category = {
    deleteCategories,
    createCategories,
    updateCategory,
    fetchAllCategories,
    fetchActiveCategories,
}

export const Recharge = {
    fetchPlansByThirdPartyProvider,
    fetchDthPlansByThirdPartyProvider,
    fetchOperatorsNCircleByThirdPartyProviderMobile,
    fetchOperatorsByThirdPartyProviderDth,

    history: {
        fetchRechargeHistories,
        checkRechargeStatus,
        createComplaint,
        fetchComplaint,
        updateComplaint,
    }
}

export const User = {
    countActiveDecendents,
    fetchAllRetailers,
    createNewUser,
    updateUser,
    deleteUser,
    updateUserStatus,
    registerAdmin,
    fetchNotifications,
    fetchUserLoginHistory,
    fetchAllDistributors,
}


export const Wallet = {
    user: {
        fetchUserWalletsWithTransaction,
        getAllUsersWallets,
        getUserWalletById,
        creditUserWallet,
        debitUserWallet,
        deleteUserWallet,
        blockUserWallet,
        unBlockUserWallet,
        createDebitWalletRequest,

    },
    api: {
        fetchApisWalletsWithTransaction,
        creditApiWallet,
        debitApiWallet,
    },
    transactions: {
        fetchCreditUrl,
        fetchApiWalletTransactionHistories,
        fetchUserWalletTransactionHistories,
        fetchDebits,
        updateDebits,
    }
}
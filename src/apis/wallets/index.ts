import { axiosInstance } from "@/lib/axios";
import { ResponseType } from "../utils";


export interface IRecentTransaction {
    id: string;
    amount: number;
    closing_balance: number;
    commission: number;
    createdAt: string;
    msg: string;
    opening_balance: number;
    status: string;
    type: string;
}

export interface IRecentRecharge {
    admin_commission: number;
    admin_id: string;
    createdAt: string;
    distributor_commission: number;
    distributor_id: string;
    id: string;
    mobile: string;
    msg: string;
    operator_id: string;
    price: number;
    retailor_commission: number;
    retailor_id: string;
    status: string;
}

export interface IUser {
    createdAt: string;
    name: string;
    email: string;
    mobile: string;
    city: string;
    role: string;
    mpin: string;
    admin_id: string;
    distributor_id: string;
    status: string;
}

export interface IUsersWalletsTransactions {
    id: string;
    balance: number;
    is_active: boolean;
    user_id: string;
    created_by: string;
    createdAt: string;
    updatedAt: string;
    user: IUser;
    recent_transactions: IRecentTransaction[],
    recent_recharges: IRecentRecharge[],
}


export interface IApiRecentTransaction {
    id: string;
    recharge_id?: string;
    opening_balance: number;
    closing_balance: number;
    amount?: number;
    commission?: number;
    type: string;
    status: string;
    createdAt: string;
}

export interface IApi {
    name: string;
    mobile: string;
    url: string;
    dispute_email: string;
    status: string;
    created_by: string;
}

export interface IApisWalletsTransactions {
    id: string;
    balance: number;
    api_id: string;
    createdAt: string;
    updatedAt: string;
    recent_transactions: IRecentTransaction[],
    api: IApi;
}


export async function fetchUserWalletsWithTransaction() {
    const { data } = await axiosInstance.get<ResponseType<IUsersWalletsTransactions[] | []>>('/wallet/usersWalletsTransactions');
    return data;
}

export async function fetchApisWalletsWithTransaction() {
    const { data } = await axiosInstance.get<ResponseType<IApisWalletsTransactions[] | []>>('/wallet/apisWalletsTransactions');
    return data;
}

export async function getAllUsersWallets() {
    const { data } = await axiosInstance.get<ResponseType<any>>('/');
    return data;
}

export async function getUserWalletById() {
    const { data } = await axiosInstance.get<ResponseType<any>>('/');
    return data;
}


export interface IWalletTransactionRequest {
    amount: number;
}
export interface IUserWalletTransactionRequest extends IWalletTransactionRequest {
    userId: string;
}
export interface IApiWalletTransactionRequest extends IWalletTransactionRequest {
    api_id: string;
}

export async function creditUserWallet(requestBody: IUserWalletTransactionRequest) {
    const { data } = await axiosInstance.post<ResponseType<any>>('/admin/credit-user-wallet', requestBody);
    return data;
}

export async function debitUserWallet(requestBody: IUserWalletTransactionRequest) {
    const { data } = await axiosInstance.post<ResponseType<any>>('/admin/debit-user-wallet', requestBody);
    return data;
}

export async function creditApiWallet(requestBody: IApiWalletTransactionRequest) {
    const { data } = await axiosInstance.post<ResponseType<any>>('/admin/credit-api-wallet', requestBody);
    return data;
}

export async function debitApiWallet(requestBody: IApiWalletTransactionRequest) {
    const { data } = await axiosInstance.post<ResponseType<any>>('/admin/debit-api-wallet', requestBody);
    return data;
}

export async function deleteUserWallet(id: string = '') {
    const { data } = await axiosInstance.delete<ResponseType<any>>(`/${id}`);
    return data;
}

export async function blockUserWallet(id: string = '') {
    const { data } = await axiosInstance.post<ResponseType<any>>(`/wallet/user/block`, { id });
    return data;

}
export async function unBlockUserWallet(id: string = '') {
    const { data } = await axiosInstance.post<ResponseType<any>>(`/wallet/user/unblock`, { id });
    return data;

}
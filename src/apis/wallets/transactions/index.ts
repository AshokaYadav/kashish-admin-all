import { IUpdateApi } from "@/apis/apis";
import { ResponseType } from "@/apis/utils";
import { axiosInstance } from "@/lib/axios";
import { IPaginationInfo } from "@/types/recharge";

export interface IPagintatedTxnRequest {
  page: number;
  limit: number;
  id: string;
  dateRange?: { from: Date; to: Date }
  type?: string;
}

export interface IPagination {
  total: number;
  totalPages: number;
  currentPage: number;
  limit: number;
}
export interface ITxnHistory {
  rechargeData: any;
  remote_order_id: any;
  user: any;
  id: string;
  user_id: string;
  opening_balance: number;
  closing_balance: number;
  amount: number;
  commission: number;
  recharge_id: string;
  debit_txn_id?: string;
  debit_txn_upi_id?: string;
  type: string;
  status: string;
  msg: string;

  bank_rrn: string;
  upi_txn_id: string;
  payment_id: string;
  client_upi_id: string;

  createdAt: string;
  updatedAt: string;
}

export interface PaginatedWalletTxnsReponse {
  data: ITxnHistory[];
  pagination: IPagination;
}

export async function fetchUserWalletTransactionHistories(
  reqBody: IPagintatedTxnRequest
) {
  const { data } = await axiosInstance.put<
    ResponseType<PaginatedWalletTxnsReponse>
  >(`/wallet/user/history`, reqBody);
  return data;
}

export async function fetchApiWalletTransactionHistories(
  reqBody: IPagintatedTxnRequest
) {
  const { data } = await axiosInstance.put<
    ResponseType<PaginatedWalletTxnsReponse>
  >(`/wallet/api/history`, reqBody);
  return data;
}

export interface CreditWalletInfoRequest {
  name: string;
  email: string;
  mobile: string;
  amount: number;
}

export interface IPaymentCreateOrderData {
  order_id: string;
  payment_url: string;
  upi_id_hash: string;
  upi_intent: { [key: string]: string };
}

export interface IPaymentUrlResponse {
  data?: IPaymentCreateOrderData;
  msg: string;
  status: boolean;
}
export async function fetchCreditUrl(amount: number = 0) {
  // return await new Promise((res: (val: string) => void, rej) => {
  //     setTimeout(() => {
  //         res(`https://google.com`);
  //     }, 2000);
  // });
  const { data } = await axiosInstance.post<ResponseType<IPaymentUrlResponse>>(
    "/payments/create-order",
    { amount: `${amount}` }
  );
  return data;
}

export interface IDebitTxnRes {
  id: string;
  user_id: string;
  type: string;
  status: string;
  msg: string;
  debit_txn_upi_id: string;
  opening_balance: number;
  amount: number;
  closing_balance: number;
  updatedAt: string;
  createdAt: string;
}

export interface IDebitWalletRes {
  walletId: string;
  userId: string;
  opening_balance: number;
  amount: number;
  closing_balance: number;
}

export interface IDebitResponse {
  transaction: IDebitTxnRes;
  wallet: IDebitWalletRes;
}

export async function createDebitWalletRequest(
  upi: string = "",
  amount: number = 0
) {
  // return await new Promise((res: (val: string) => void, rej) => {
  //     setTimeout(() => {
  //         res(`processing ${upi} for ${amount}`);
  //     }, 2000);
  // });
  const { data } = await axiosInstance.post<ResponseType<IDebitResponse>>(
    "/wallet/request-debit",
    { upi, amount }
  );
  return data;
}

export interface IResponseDebits {
  id: string;
  user_id: string;
  opening_balance: number;
  closing_balance: number;
  amount: number;
  debit_txn_id: string;
  debit_txn_upi_id: string;
  type: string;
  status: string;
  msg: string;
  createdAt: string;
  updatedAt: string;
}

export interface PaginatedReponse<T> extends IPagination {
  data: T;
}

export async function fetchDebits(reqBody: IPaginationInfo) {
  const { data } = await axiosInstance.put<
    ResponseType<PaginatedReponse<IResponseDebits[]>>
  >("/wallet/debits", reqBody);
  console.log("data", data);
  return data;
}

export async function updateDebits(reqBody: IUpdateApi) {
  const { data } = await axiosInstance.post<ResponseType<any>>(
    "/wallet/update-debit",
    reqBody
  );
  return data;
}


export async function fetchTransactionsComplaints(params = {}) {
  const { data } = await axiosInstance.put<ResponseType<PaginatedReponse<any[]>>>(`/ticket/transactions`, params);
  return data;
}



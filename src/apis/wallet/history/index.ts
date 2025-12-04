import { axiosInstance } from "@/lib/axios";
import { IPagination, IPaginationInfo } from "@/types/recharge";
import { ResponseType } from "@/apis/utils";

export interface PaginatedReponse<T> extends IPagination {
    data: T;
}
export async function fetchTransactionLogs(reqBody: IPaginationInfo){
    const { data } = await axiosInstance.put<ResponseType<PaginatedReponse<any[]>>>(`/admin/logs/transaction`, reqBody);
    return data;
}
import { axiosInstance } from "@/lib/axios";
import { ResponseType } from "../utils";
import { IOperatorCommission } from "@/types/operator-commissions";
import { INewOperatorCommissionRequest } from "@/hooks/operator-commission/use-create-operator-commission";
import { IEditOperatorCommissionsRequest } from "@/hooks/operator-commission/use-update-operator-commission";


export interface OperatorCommissionsResponse extends ResponseType<IOperatorCommission[]> { }

export async function fetchAllOperatorsCommissions(distributorId: string = '') {
    const { data } = await axiosInstance.get<OperatorCommissionsResponse>(
        `recharge/get-all/${distributorId}`
    );
    return data;
}

export async function fetchActiveOperatorCommissions() {
    const { data } = await axiosInstance.get<OperatorCommissionsResponse>("recharge/all");
    return data;
}

// export async function fetchOperatorsByCategory(id: string) {
//   if (!id) return { err: '', message: '', data: [] };
//   const { data } = await axiosInstance.get<OperatorResponse>(`operator/byCategory/${id}`);
//   return data;
// }

export interface ICreateOperatorCommissions {
    commissions: INewOperatorCommissionRequest[]
}

export async function createOperatorCommissions(requestData: ICreateOperatorCommissions) {
    const { data } = await axiosInstance.post<OperatorCommissionsResponse>("/recharge/commission/register", { ...requestData });
    return data;
}

export async function updateOperatorCommission(requestBody: IEditOperatorCommissionsRequest) {
    const { data } = await axiosInstance.put<ResponseType<any>>("/recharge/commission/update", requestBody);
    return data;
}

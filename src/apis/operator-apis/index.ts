import { axiosInstance } from "@/lib/axios";
import { ResponseType } from "../utils";
// import { Operator } from '../../types/recharge';
import { UpdateOperatorApiData } from "@/hooks/operator-apis/use-update-operator-apis";
import { IOperatorApi } from "@/types/operator-apis";
import { ICreateOperatorApis } from "@/hooks/operator-apis/use-create-operator-api";

export interface OperatorApisResponse extends ResponseType<IOperatorApi[]> { }

export async function fetchOperatorApisByOperators(ids: string[] = []) {
    const { data } = await axiosInstance.put<OperatorApisResponse>("operator_apis/get/by-operators", { ids });
    return data;
}

export async function updateOperatorApi(updateData: UpdateOperatorApiData) {
    const { id, ...rest } = updateData;
    const { data } = await axiosInstance.put<ResponseType<any>>(`operator_apis/update/${id}`, { ...rest });
    return data;
}

export async function createOperatorApis(createData: ICreateOperatorApis) {
    const { data } = await axiosInstance.post<ResponseType<any>>(`operator_apis/register`, { ...createData });
    return data;
}

export async function deleteOpApis(id: string = '') {
    const { data } = await axiosInstance.delete<ResponseType<any>>(`/operator_apis/delete/${id}`);
    return data;
}
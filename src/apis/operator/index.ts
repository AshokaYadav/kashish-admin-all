import { axiosInstance } from "@/lib/axios";
import { ResponseType } from "../utils";
import { Operator } from '../../types/recharge';

export interface OperatorResponse extends ResponseType<Operator[]> { }

export interface INewOperatorRequest {
  name: string;
  category_id: string;
  image?: File;
}

export interface ICreateOperatorsRequest {
  operators: INewOperatorRequest[]
}

export interface IUpdateOperator {
  id: string;
  name: string;
  status: 'ACTIVE' | 'INACTIVE';
  category_id: string;
  image?: string;
}

export async function fetchOperatorRecharges() {
  const { data } = await axiosInstance.get<any>(
    "recharge/stats/operator-recharge"
  );
  return data;
}
export async function fetchCircleRecharges() {
  const { data } = await axiosInstance.get<any>(
    "recharge/stats/circle-recharge"
  );
  return data;
}

export async function fetchCategoryRecharges() {
  const { data } = await axiosInstance.get<any>(
    "recharge/stats/category-recharge"
  );
  return data;
}

export async function fetchAllOperators() {
  const { data } = await axiosInstance.get<OperatorResponse>(
    "operator/get-all"
  );
  return data;
}

export async function fetchActiveOperators() {
  const { data } = await axiosInstance.get<OperatorResponse>("operator/all");
  return data;
}

export async function fetchOperatorsByCategory(id: string) {
  if (!id) return { err: '', message: '', data: [] };
  const { data } = await axiosInstance.get<OperatorResponse>(`operator/byCategory/${id}`);
  return data;
}

export async function fetchAllOperatorsByCategory(id: string) {
  if (!id) return { err: '', message: '', data: [] };
  const { data } = await axiosInstance.get<OperatorResponse>(`operator/all-byCategory/${id}`);
  return data;
}



export async function updateOperator(updateData: IUpdateOperator) {
  const { id, ...rest } = updateData;
  const { data } = await axiosInstance.put<ResponseType<any>>(`operator/update/${id}`, { ...rest });
  return data;
}

export async function createOperators(createData: ICreateOperatorsRequest) {

  const { data } = await axiosInstance.post<ResponseType<any>>(`operator/register`, { ...createData });
  return data;
}

export async function createOperators1(createData: ICreateOperatorsRequest) {

  const formData = new FormData();
  // console.log(createData.operators);

  formData.append("name", createData.operators[0]?.name);
  formData.append("category_id", createData.operators[0]?.category_id);
  
  if (createData.operators[0].image) {
    formData.append("image", createData.operators[0]?.image);
  }

  // console.log(formData);

  const { data } = await axiosInstance.post<ResponseType<any>>(`operator/register`, formData);
  // console.log(data);
  return data;
}

export async function deleteOperator(id: string = '') {
  const { data } = await axiosInstance.delete<ResponseType<any>>(`operator/delete/${id}`);
  return data;
}
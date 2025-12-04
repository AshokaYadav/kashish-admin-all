import { axiosInstance } from "@/lib/axios";
import { ResponseType } from "../utils";

export interface ICreateOpCirLinkRequest {
  operator_id: string;
  circle_id: string;
  operator_code: string;
  circle_code: string;
  provider_api_id: string;
}

export interface IUpdateOpCirLinkRequest extends ICreateOpCirLinkRequest {
  id: string;
}

export async function createOperatorCircleLink(
  createData: ICreateOpCirLinkRequest
) {
  const { data } = await axiosInstance.post<ResponseType<any>>(
    `/op-circle-link/register`,
    { ...createData }
  );
  return data;
}

export interface OpCircleLinkResponse {
  id: string;
  circle: { id: string; name: string };
  circle_code: string;
  operator: { id: string; name: string };
  operator_code: string;
  provider_api: string;
}

export interface ThirdPartyApi {
  id: string;
  name: string;
  status: boolean;
  url: string;
  method: string;
  parmas: { [k: string]: string | boolean | number };
}

export interface IResponseOpCirLinkApi {
  circle_code: string;
  circle_id: string;
  circle: { id: string; name: string };

  operator: { id: string; name: string };
  operator_code: string;
  operator_id: string;

  provider_api_id: string;
  provider_api: ThirdPartyApi;

  id: string;
  createdAt: string;
  updatedAt: string;
}
export async function fetchAllOperatorCircleLinks() {
  const { data } = await axiosInstance.get<ResponseType<IResponseOpCirLinkApi[]>>(
    "/op-circle-link/get"
  );
  console.log("operator-circle-link-all", data);
  return data;
}



export async function GetOperatorCircle(
  circle_code: string = "",
  operator_code: string = ""
) {
  const { data } = await axiosInstance.put<ResponseType<OpCircleLinkResponse>>(
    `/op-circle-link/get-by-code`,
    { operator_code, circle_code }
  );
  return data;
}

export async function updateOperatorCircleLink(
  reqBody: IUpdateOpCirLinkRequest
) {
  const { id, ...rest } = reqBody;
  const { data } = await axiosInstance.patch<ResponseType<any>>(
    `/op-circle-link/update/${id}`,
    { ...rest }
  );
  return data;
}



export async function deleteOperatorCircleLink(id: string = '') {
  const { data } = await axiosInstance.delete<ResponseType<any>>(`/op-circle-link/${id}`);
  return data;
}

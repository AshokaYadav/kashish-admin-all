import { axiosInstance } from "@/lib/axios";
import { ResponseType } from '../utils';
import { EAPITYPES, HttpMethod, IApi, IApiWallet } from '@/types/api'

export interface ApisResponse extends ResponseType<IApi[]> { }

export interface IApiRegisterResponseType {
    api?: IApi;
    api_wallet?: IApiWallet;
}


export interface IScalObj<T> {
    [key: string]: T;
}

export interface INewApi {
    type: EAPITYPES;
    name: string;
    url: string;
    method: HttpMethod;
    password: string;
    transaction_password: string;
    dispute_email: string;
    mapping: { [key: string]: string };
}

export interface IUpdateApi extends IScalObj<any> {
    id: string;
}


export interface IUpdateParams {
    id: string;
    params: IScalObj<string>;
}



export async function createThirdPartyApi(name: string = '') {
    const { data } = await axiosInstance.post<ResponseType<any>>(`/apis/thirdparty/register`, { name });
    return data;
}

export async function fetchThirdPartyApi() {
    const { data } = await axiosInstance.get<ResponseType<any>>(`/apis/thirdparty/all`);
    return data;
}

export async function fetchAllActiveApis() {
    const { data } = await axiosInstance.get<ApisResponse>("/apis");
    return data;
}

export async function fetchAllApis() {
    const { data } = await axiosInstance.get<ApisResponse>("/apis/all");
    return data;
}

export async function createApi(requestBody: INewApi) {
    const { data } = await axiosInstance.post<ResponseType<IApiRegisterResponseType>>("/apis/register", { ...requestBody });
    return data;
}

export async function updateApi(requestBody: IUpdateApi) {
    const { params, ...rest } = requestBody;
    const { data } = await axiosInstance.put<ResponseType<any>>(`/apis/update`, { ...rest });
    return data;
}

export async function activateApi(id: string = '') {
    const { data } = await axiosInstance.put<ResponseType<any>>(`/apis/activate`, { id });
    console.log('res', data);
    return data;
}

export async function updateParams(requestBody: IUpdateParams) {
    const { data } = await axiosInstance.put<ResponseType<any>>(`/apis/param/update/all`, { ...requestBody });
    return data;
}

export async function deleteApi(id: string = '') {
    const { data } = await axiosInstance.delete<ResponseType<any>>(`/apis/delete/${id}`);
    return data;
}
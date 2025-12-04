import { axiosInstance } from "@/lib/axios";
import { ResponseType } from '../utils';
import { Distributor, Retailer } from '@/types/user'

export interface RetailersResponse extends ResponseType<Retailer[]> { }
export interface DistributorsResponse extends ResponseType<Distributor[]> { }


export async function fetchAllRetailers() {
    const { data } = await axiosInstance.get<RetailersResponse>("/user/retailers/all");
    return data;
}

export async function fetchAllDistributors() {
    const { data } = await axiosInstance.get<DistributorsResponse>("/user/distributors/all");
    return data;
}

export async function countActiveDecendents() {
    const { data } = await axiosInstance.get<ResponseType<number>>("/user/stats/active-users");
    return data;
}

export async function deleteUser(id: string = '') {
    const { data } = await axiosInstance.delete<ResponseType<any>>(`/user/delete/${id}`);
    return data;
}

export interface INewUserRequest {
    name: string;
    email: string;
    mobile: string;
    city: string;
    password: string;
    distributor_id?: string;
    role: string;
    mpin: string;
}

export async function createNewUser(reqData: INewUserRequest) {
    const { role, distributor_id, ...rest } = reqData;
    const payload: INewUserRequest | Omit<INewUserRequest, 'distributor_id'> = (role === 'RETAILER') ? { role, distributor_id, ...rest } : { role, ...rest };
    const { data } = await axiosInstance.post<ResponseType<any>>("/auth/register", payload);
    return data;
}

export async function updateUser(id: string = '', body: { [key: string]: any }) {
    const { data } = await axiosInstance.put<ResponseType<any>>(`/user/update/${id}`, body)
    return data;
}

export async function updateUserStatus(id: string = '', status: boolean = false) {
    const url = `/user/${status ? 'activate' : 'deactivate'}`;
    const { data } = await axiosInstance.post<ResponseType<any>>(url, { id: id });
    return data;
}

export interface INewAdmin {
    name: string;
    email: string;
    mobile: string;
    password: string;
    city: string;
    admin_key: string;
}


export async function registerAdmin(reqData: INewAdmin) {
    const { data } = await axiosInstance.post<ResponseType<any>>(`/auth/register-admin`, reqData);
    return data;
}



export interface INotificationResponse {
    id: string;
    title: string;
    content: string;
    createdAt: string;
}

export async function fetchNotifications() {
    const { data } = await axiosInstance.get<ResponseType<INotificationResponse[]>>('/notifications/unread');
    return data;
}

export interface ILoginHistoryResponse{
    id: string;
    user_id: string;
    ip: string;
    longitude: string;
    latitude: string;
    createdAt: string;
    device_info?: string;
    user: {name: string; email: string; mobile: string};
}
export async function fetchUserLoginHistory(id: string = 'self') {
    const { data } = await axiosInstance.get<ResponseType<ILoginHistoryResponse[]>>(`/auth/history/${id}`);
    return data;
}
import { axiosInstance } from "@/lib/axios";
import { ResponseType } from '@/apis/utils';
import { IPagination, IPaginationInfo, RechargeHistory } from "@/types/recharge";


export interface PaginatedReponse<T> extends IPagination {
    data: T;
}

export async function fetchRechargeHistories(reqBody: IPaginationInfo) {
    const { data } = await axiosInstance.put<ResponseType<PaginatedReponse<RechargeHistory[]>>>('/recharge/history', reqBody);
    console.log('data', data);
    return data;
}

export async function fetchRechargeComplaints(params={}){
    const { data } = await axiosInstance.put<ResponseType<PaginatedReponse<any[]>>>(`/ticket/recharges`, params);
    return data;
}

export async function fetchRechargeLogs(reqBody: IPaginationInfo){
    const { data } = await axiosInstance.put<ResponseType<PaginatedReponse<any[]>>>(`/admin/logs/recharge`, reqBody);
    return data;
}

export interface IUpdateRechargeHistory {
    recharge_id: string, status: string, msg: string;
}

export async function updateRechargeHistory(reqBody: IUpdateRechargeHistory) {
    const { data } = await axiosInstance.patch(`/recharge/update/status/`, reqBody);
    console.log('updateRechargeHistory', data);
    return data;
}

export async function checkRechargeStatus(id: string = '') {
    const { data } = await axiosInstance.get(`/recharge/check-status/${id}`);
    console.log('check status', data);
    return data;
}

export async function fetchComplaint(id: string = '') {
    const { data } = await axiosInstance.get(`/ticket/recharge/${id}`);
    console.log('fetchComplaint', data);
    return data;
}

export interface ICompaint {
    id: string;
    status: string;
    msg: string;
}

export async function updateComplaint(reqBody: ICompaint) {
    const { id, ...rest } = reqBody;
    console.log('updateComplaint req', id, reqBody);
    const { data } = await axiosInstance.patch(`/ticket/${id}`, rest);
    console.log('updateComplaint res', data);
    return data;
}

export interface INewComplaint {
    ref_id: string;
    msg: string;
    mobile: string;
}

export async function createComplaint(reqBody: INewComplaint) {
    console.log('createComplaint req', reqBody);
    const { data } = await axiosInstance.post(`/ticket/recharge`, reqBody);
    console.log('createComplaint', data);
    return data;
}


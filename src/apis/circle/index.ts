import { axiosInstance } from "@/lib/axios";
import { ResponseType } from '../utils';
import { Circle } from '../../types/recharge';

export interface CirclesResponse extends ResponseType<Circle[]> { }

export type TNewCircleApiRequest = string;

export interface ICreateCircles {
  states: TNewCircleApiRequest[]
}

export interface IUpdateCircle {
  id: string;
  name: string;
  status: 'ACTIVE' | 'INACTIVE';
}


export async function fetchAllCircles() {
  const { data } = await axiosInstance.get<CirclesResponse>("circles/get-all");
  return data;
}

export async function fetchActiveCircles() {
  const { data } = await axiosInstance.get<CirclesResponse>("circles/all");
  return data;
}



export async function updateCircle(updateData: IUpdateCircle) {
  const { id, ...rest } = updateData;
  const { data } = await axiosInstance.put<ResponseType<any>>(`circles/update/${id}`, { ...rest });
  return data;
}

export async function createCircle(createData: ICreateCircles) {
  const { data } = await axiosInstance.post<ResponseType<any>>(`circles/register`, { ...createData });
  return data;
}

export async function deleteCircle(id: string = '') {
  const { data } = await axiosInstance.delete<ResponseType<any>>(`circles/delete/${id}`);
  return data;
}
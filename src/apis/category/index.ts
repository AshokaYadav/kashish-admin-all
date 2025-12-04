import { axiosInstance } from "@/lib/axios";
import { ResponseType } from '../utils';
import { Category } from '../../types/recharge';


export interface CategoryResponse extends ResponseType<Category[]> { }

export type TNewCategoryRequest = string;

export interface ICreateCategory {
  categories: TNewCategoryRequest[]
}

export interface IUpdateCategory {
  id: string;
  name: string;
  status: 'ACTIVE' | 'INACTIVE';
}

export async function fetchAllCategories() {
  const { data } = await axiosInstance.get<CategoryResponse>("categories/get-all");
  return data;
}

export async function fetchActiveCategories() {
  const { data } = await axiosInstance.get<CategoryResponse>("categories/all");
  return data;
}

export async function updateCategory(updateData: IUpdateCategory) {
  const { id, ...rest } = updateData;
  const { data } = await axiosInstance.put<ResponseType<any>>(`categories/update/${id}`, { ...rest });
  return data;
}

export async function createCategories(createData: ICreateCategory) {
  const { data } = await axiosInstance.post<ResponseType<any>>(`categories/register`, { ...createData });
  return data;
}


export async function deleteCategories(id: string = '') {
  const { data } = await axiosInstance.delete<ResponseType<any>>(`categories/delete/${id}`);
  return data;
}
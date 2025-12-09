// import { axiosInstance } from "@/lib/axios";
import { axiosInstance } from "@/lib/axiospartner";
import axios from "axios";

export const fetchCardsApi = async () => {
  const res = await axiosInstance.get("api/fetchbill/get/types");
  return res.data?.data || [];
};


export const fetchTypeData=async(selectedService:string)=>{
    const res=await axiosInstance.get(`api/fetchbill/get/types/${selectedService}`);
    console.log(res?.data?.data);
    return res?.data?.data || [];
}

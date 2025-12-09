import { axiosInstance } from "@/lib/axios";

export async function getWalletUsers(page: number = 1, limit: number = 50) {
  const { data } = await axiosInstance.post("/wallet/userswallet", {
    page,
    limit,
  });
  return data;
}

"use client";

import { getWalletUsers } from "@/apis/admin-members";
import { useQuery } from "@tanstack/react-query";
// import { getWalletUsers } from "@/services/wallet.service";

export function useWalletUsers(page: number) {
  return useQuery({
    queryKey: ["wallet-users", page],
    queryFn: () => getWalletUsers(page),
    // keepPreviousData: true, // Pagination smooth
  });
}

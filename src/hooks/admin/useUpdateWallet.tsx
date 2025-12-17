import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
// import { axiosWallet } from "@/lib/axios";

interface UpdateWalletProps {
  userId: string;
  amount: number;
  comment?: string;
  type: "Add" | "Less";
}

export const useUpdateWallet = () => {
  return useMutation({
    mutationFn: async ({ userId, amount, comment, type }: UpdateWalletProps) => {
      
      const finalAmount = type === "Less" ? -Math.abs(amount) : amount;

      const payload = {
        userId,
        amount: finalAmount,
        comment: comment || "Wallet update",
      };

      const apiUrl =
        type === "Add"
          ? "/admin/credit-user-wallet"
          : "/admin/debit-user-wallet";

      const response = await axiosInstance.post(apiUrl, payload);
      return response.data;
    },

    onSuccess: () => {
      console.log("Wallet updated successfully!");
    },

    onError: (err) => {
      console.error("Wallet update error:", err);
    },
  });
};

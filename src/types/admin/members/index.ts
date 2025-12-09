export type UserInfo = {
  id: string;
  name: string;
  email: string;
  mobile: string;
  role: string;
  status: string;
};

export type WalletType = {
  id: string;
  user_id: string;
  balance: number;
  is_active: boolean;
  created_by: string;
  createdAt: string;
  updatedAt: string;
  user: UserInfo;
};

export type ApiResponse = {
  err: string | null;
  message: string;
  data: {
    totalData: number;
    totalPage: number;
    currentPage: number;
    wallets: WalletType[];
  };
};
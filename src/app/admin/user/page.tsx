'use client';
import React, { useState, useEffect } from 'react';

// ✅ Correct imports from shadcn/ui
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import { History } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useRouter } from 'next/navigation';

// ---------------- TYPES -----------------
interface User {
  id: string;
  name: string;
  email: string;
  mobile: string;
  role: string;
  status: string;
}

interface WalletData {
  id: string;
  user_id: string;
  balance: number;
  is_active: boolean;
  created_by: string;
  createdAt: string;
  updatedAt: string;
  user: User;
}

interface ApiResponse {
  err: null | string;
  message: string;
  data: {
    totalData: number;
    totalPage: number;
    currentPage: number;
    wallets: WalletData[];
  };
}

interface WalletApiResponse {
  totalData: number;
  totalPage: number;
  currentPage: number;
  wallets: WalletData[];
}

interface FetchResult<T> {
  success: boolean;
  data?: T;
  error?: string;
}

interface UseWalletApiReturn {
  walletData: WalletApiResponse | null;
  loading: boolean;
  error: string | null;
  getUsersWallet: (
    token: string,
    additionalParams?: Record<string, any>
  ) => Promise<FetchResult<WalletApiResponse>>;
}

interface UseWalletReturn extends UseWalletApiReturn {
  showAddDialog: boolean;
  setShowAddDialog: (show: boolean) => void;
  showTransactionDialog: boolean;
  setShowTransactionDialog: (show: boolean) => void;
  transactionType: 'credit' | 'debit';
  setTransactionType: (type: 'credit' | 'debit') => void;
  selectedWallet: WalletData | null;
  setSelectedWallet: (wallet: WalletData | null) => void;
  walletFilter: 'all' | 'APP_USER' | '!APP_USER';
  setWalletFilter: (filter: 'all' | 'APP_USER' | '!APP_USER') => void;
  transactionAmount: number;
  setTransactionAmount: (amount: number) => void;
  credit: (amount: number, walletId: string) => Promise<void>;
  isCrediting: boolean;
  debit: (amount: number, walletId: string) => Promise<void>;
  isDebiting: boolean;
  loadWalletData: (
    token: string
  ) => Promise<FetchResult<WalletApiResponse>>;
}

// ---------------- API -----------------
const fetchUsersWallet = async (
  token: string,
  additionalData: Record<string, any> = {}
): Promise<FetchResult<WalletApiResponse>> => {
  try {
    const response = await fetch(
      'https://api.recharge.kashishindiapvtltd.com/wallet/userswallet',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ ...additionalData }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ApiResponse = await response.json();

    if (data.err !== null) {
      throw new Error(data.err || 'API returned error');
    }

    if (data.message === 'Success' && data.data) {
      return { success: true, data: data.data };
    } else {
      throw new Error(data.message || 'Unknown error occurred');
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
};

// ---------------- HOOK -----------------
const useWalletAPI = (): UseWalletApiReturn => {
  const [walletData, setWalletData] = useState<WalletApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getUsersWallet = async (
    token: string,
    additionalParams: Record<string, any> = {}
  ): Promise<FetchResult<WalletApiResponse>> => {
    setLoading(true);
    setError(null);

    const result = await fetchUsersWallet(token, additionalParams);

    if (result.success && result.data) {
      setWalletData(result.data);
    } else {
      setError(result.error || 'Failed to fetch wallet data');
    }

    setLoading(false);
    return result;
  };

  return { walletData, loading, error, getUsersWallet };
};

// ---------------- ENHANCED HOOK -----------------
const useWallet = (): UseWalletReturn => {
  const { walletData, loading, error, getUsersWallet } = useWalletAPI();

  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showTransactionDialog, setShowTransactionDialog] = useState(false);
  const [transactionType, setTransactionType] =
    useState<'credit' | 'debit'>('credit');
  const [selectedWallet, setSelectedWallet] = useState<WalletData | null>(null);
  const [walletFilter, setWalletFilter] =
    useState<'all' | 'APP_USER' | '!APP_USER'>('all');
  const [transactionAmount, setTransactionAmount] = useState<number>(0);
  const [isCrediting, setIsCrediting] = useState(false);
  const [isDebiting, setIsDebiting] = useState(false);

  const loadWalletData = async (
    token: string
  ): Promise<FetchResult<WalletApiResponse>> => {
    return await getUsersWallet(token);
  };

  const credit = async (amount: number, walletId: string): Promise<void> => {
    setIsCrediting(true);
    try {
      console.log(`Crediting ${amount} to wallet ${walletId}`);
      // TODO: Add Credit API call here
    } finally {
      setIsCrediting(false);
    }
  };

  const debit = async (amount: number, walletId: string): Promise<void> => {
    setIsDebiting(true);
    try {
      console.log(`Debiting ${amount} from wallet ${walletId}`);
      // TODO: Add Debit API call here
    } finally {
      setIsDebiting(false);
    }
  };

  return {
    walletData,
    loading,
    error,
    loadWalletData,
    getUsersWallet,
    showAddDialog,
    setShowAddDialog,
    showTransactionDialog,
    setShowTransactionDialog,
    transactionType,
    setTransactionType,
    selectedWallet,
    setSelectedWallet,
    walletFilter,
    setWalletFilter,
    transactionAmount,
    setTransactionAmount,
    credit,
    isCrediting,
    debit,
    isDebiting,
  };
};

// ---------------- UTILS -----------------
const getFilteredWallets = (
  wallets: WalletData[],
  filter: 'all' | 'APP_USER' | '!APP_USER'
) => {
  if (filter === 'all') return wallets;
  if (filter === 'APP_USER') {
    return wallets.filter((wallet) => wallet.user.role === 'APP_USER');
  } else {
    return wallets.filter((wallet) => wallet.user.role !== 'APP_USER');
  }
};

// ---------------- MAIN PAGE -----------------
const WalletsPage: React.FC = () => {
  const {
    walletData,
    loading,
    error,
    loadWalletData,
    showTransactionDialog,
    setShowTransactionDialog,
    transactionType,
    setTransactionType,
    selectedWallet,
    setSelectedWallet,
    walletFilter,
    setWalletFilter,
    transactionAmount,
    setTransactionAmount,
    credit,
    isCrediting,
    debit,
    isDebiting,
  } = useWallet();

  const router = useRouter();

  const filteredWallets = walletData
    ? getFilteredWallets(walletData.wallets, walletFilter)
    : [];

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) loadWalletData(token);
  }, []);

  if (loading) return <div>Loading wallet data...</div>;
  if (error) return <div className="text-red-600">Error: {error}</div>;



  const navigateToTransactions = (user_id: any, role: string) => {
          // const url: string = `wallets/history/users/${user_id}`
          if(role=="DISTRIBUTOR"){
            const url: string = `DistributorLadger/transactions/${user_id}`;
          router.push(url);
          }
          else {
            const url: string = `retailer/transactions/${user_id}`;
          router.push(url);
          }
      };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Wallets</h1>

      {/* Filters */}
      <div className="flex space-x-2 mb-6">
        <Button
          variant={walletFilter === 'APP_USER' ? 'default' : 'outline'}
          onClick={() => setWalletFilter('APP_USER')}
        >
          Users Wallets
        </Button>
        <Button
          variant={walletFilter === '!APP_USER' ? 'default' : 'outline'}
          onClick={() => setWalletFilter('!APP_USER')}
        >
          Retailers Wallets
        </Button>
        <Button
          variant={walletFilter === 'all' ? 'default' : 'outline'}
          onClick={() => setWalletFilter('all')}
        >
          All Wallets
        </Button>
      </div>

      {/* Table */}
      {walletData && (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Mobile</th>
                <th className="px-6 py-3 text-left">email</th>
                <th className="px-6 py-3 text-left">Balance</th>
                <th className="px-6 py-3 text-left">History</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredWallets.map((wallet) => (
                <tr key={wallet.id}>
                  <td className="px-6 py-4">{wallet?.user?.name}</td>
                  <td className="px-6 py-4">{wallet?.user.mobile}</td>
                  <td className="px-6 py-4">{wallet?.user?.email}</td>
                  <td className="px-6 py-4">₹{wallet.balance.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    {wallet.is_active ? 'ACTIVE' : 'INACTIVE'}
                  </td>
                  <td className="px-6 py-4">
                <>
                      <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8 hover:bg-gray-100"
                                    >
                                        <History className="h-5 w-5 text-gray-500" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-80 p-0" align="end">
                                    <Card>
                                        <CardContent className="p-4">
                                            <div className="flex justify-between items-center mb-4">
                                                <h4 className="font-semibold text-sm">Recent Transactions</h4>
                                                <Button
                                               
                                                    variant="ghost"
                                                    size="sm"
                                                    className="text-xs text-blue-600 hover:text-blue-800"
                                                    onClick={()=>navigateToTransactions(wallet?.user_id,wallet?.user?.role)}
                                                >
                                                    View All
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </PopoverContent>
                            </Popover>
                    
                  </>
                  </td>
                  <td className="px-6 py-4 flex space-x-2">
                    <Button
                      onClick={() => {
                        setSelectedWallet(wallet);
                        setTransactionType('credit');
                        setShowTransactionDialog(true);
                      }}
                      className="bg-green-500 hover:bg-green-600"
                    >
                      Credit
                    </Button>
                    <Button
                      onClick={() => {
                        setSelectedWallet(wallet);
                        setTransactionType('debit');
                        setShowTransactionDialog(true);
                      }}
                      className="bg-blue-500 hover:bg-blue-600"
                    >
                      Debit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Transaction Dialog */}
      {showTransactionDialog && selectedWallet && (
        <Dialog open={showTransactionDialog} onOpenChange={setShowTransactionDialog}>
          <DialogContent className="sm:max-w-[400px]">
            <DialogHeader>
              <DialogTitle>
                {transactionType === 'credit' ? 'Credit Amount' : 'Debit Amount'}
              </DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div>
                <Label>Wallet Owner</Label>
                <div>{selectedWallet.user.name}</div>
              </div>
              <div>
                <Label>Current Balance</Label>
                <div>₹{selectedWallet.balance.toFixed(2)}</div>
              </div>
              <div>
                <Label htmlFor="amount">Amount</Label>
                <Input
                  id="amount"
                  type="number"
                  value={transactionAmount}
                  onChange={(e) => setTransactionAmount(Number(e.target.value))}
                  placeholder="Enter amount"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowTransactionDialog(false)}>
                Cancel
              </Button>
              <Button
                disabled={isCrediting || isDebiting}
                onClick={() =>
                  transactionType === 'credit'
                    ? credit(transactionAmount, selectedWallet.id)
                    : debit(transactionAmount, selectedWallet.id)
                }
                className={`text-white ${
                  transactionType === 'credit'
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-blue-500 hover:bg-blue-600'
                }`}
              >
                {transactionType === 'credit' ? 'Credit' : 'Debit'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default WalletsPage;
// export { useWallet, type WalletData, type UseWalletReturn };

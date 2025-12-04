// types.ts
export interface Transaction {
    id: string;
    amount: number;
    type: 'RECHARGE' | 'DEBIT' | 'CREDIT' | 'RECHARGE_COMMISSION' | 'DEBIT_COMMISSION';
    status: 'SUCCESS' | 'FAILED' | 'PENDING';
    msg?: string;
    commission: number;
    opening_balance: number;
    closing_balance: number;
    createdAt: string;
}

export interface TransactionFilters {
    search: string;
    status: string;
    type: string;
}
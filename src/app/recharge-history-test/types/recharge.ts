// types/recharge.ts
import { IPagination } from "@/types/recharge";

export type RechargeStatus = 'pending' | 'success' | 'failed';

export interface Recharge {
    id: string,
    mobile: string,
    category_id: string,
    circle_id: string,
    api_id: string,
    retailor_id: string,
    admin_id: string,
    distributor_id: string,
    operator_id: string,
    api_txn_id: string,
    price: number,
    ret_balance: number,
    api_balance: number,
    retailor_commission: number,
    distributor_commission: number,
    admin_commission: number,
    api_commission: number,
    msg: string,
    op_id: string,
    complaintId: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    category: {
        id: string,
        name: string,
    },
    circle: {
        id: string,
        name: string,
    },
    api: {
        id: string,
        name: string,
    },
    retailor: {
        id: string,
        name: string,
        email: string,
    },
    distributor: {
        id: string,
        name: string,
        email: string,
    },
    admin: {
        id: string,
        name: string,
        email: string,
    },
    operator: {
        id: string,
        name: string,
    }
}


export interface PaginatedReponse<T> extends IPagination {
    data: T;
}


export interface RechargeContextType {
    fetch: () => void,
    updatePageNo: (val: number) => void,
    updatePageLimit: (val: number) => void,
    rechargeData: PaginatedReponse<Recharge[]>;
    expandedRow: string | null;
    updateStatus: (id: string, newStatus: RechargeStatus) => void;
    checkStatus: (id: string) => void;
    toggleResponseView: (id: string) => void;
}
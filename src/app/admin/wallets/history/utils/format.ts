// utils/format.ts
import { Transaction } from '../types/types';

export const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);
};

export const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short'
    });
};

export const getStatusBadge = (status: string) => {
    const variants: {[key: string]: string} = {
        SUCCESS: 'bg-emerald-50 text-emerald-600 border-emerald-100 hover:bg-emerald-50',
        PENDING: 'bg-amber-50 text-amber-600 border-amber-100 hover:bg-amber-50',
        FAILED: 'bg-rose-50 text-rose-600 border-rose-100 hover:bg-rose-50'
    };
    return variants[status];
};

export const getTransactionType = (type: string) => {
    return {
        icon: type.includes('RECHARGE') || type.includes('CREDIT') ? 'up' : 'down',
        color: type.includes('RECHARGE') || type.includes('CREDIT') ? 'text-emerald-600' : 'text-blue-600'
    };
};

export const formatTransactionType = (type: string) => {
    return type.split('_').map(word =>
        word.charAt(0) + word.slice(1).toLowerCase()
    ).join(' ');
};
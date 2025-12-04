// components/StatusBadge.tsx
import React from 'react';
import { RechargeStatus } from '../types/recharge';

interface StatusBadgeProps {
  status: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  // Get status color based on status value
  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'success':
        return 'bg-green-100 text-green-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span
      className={`px-2 inline-flex text-xs leading-5 text-center font-semibold rounded-full ${getStatusColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
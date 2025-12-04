// components/StatusUpdateButtons.tsx
import React from 'react';
import { RechargeStatus } from '../types/recharge';
import { useRechargeData } from '../context/RechargeContext';

interface StatusUpdateButtonsProps {
  rechargeId: string;
  currentStatus: string;
}

const StatusUpdateButtons: React.FC<StatusUpdateButtonsProps> = ({
  rechargeId,
  currentStatus,
}) => {
  const { updateStatus } = useRechargeData();

  // Determine which buttons to show based on current status
  switch (currentStatus) {
    case 'pending':
      return (
        <div className="flex space-x-2">
          <button
            onClick={() => { console.log('abcsd'); updateStatus(rechargeId, 'success') }}
            className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-xs"
          >
            Success
          </button>
          <button
            onClick={() => { console.log('abcsd'); updateStatus(rechargeId, 'failed') }}
            className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs"
          >
            Fail
          </button>
        </div>
      );
    case 'success':
      return (
        <button
          onClick={() => { console.log('abcsd'); updateStatus(rechargeId, 'failed') }}
          className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs"
        >
          Fail
        </button>
      );
    case 'failed':
      return (
        <button
          onClick={() => { console.log('abcsd'); updateStatus(rechargeId, 'success') }}
          className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-xs"
        >
          Success
        </button>
      );
    default:
      return null;
  }
};

export default StatusUpdateButtons;
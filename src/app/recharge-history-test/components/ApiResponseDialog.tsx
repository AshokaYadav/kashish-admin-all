// components/ApiResponseDialog.tsx
'use client';

import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

// import { XMarkIcon } from '@heroicons/react/24/outline';
import StatusBadge from './StatusBadge';
import { RechargeStatus } from '../types/recharge';
import { X as XMarkIcon } from 'lucide-react';

interface ApiResponseDialogProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    status: RechargeStatus;
    orderId: string;
    apiOrderId: string;
    message: string;
    response: string;
  } | null;
}

const ApiResponseDialog: React.FC<ApiResponseDialogProps> = ({
  isOpen,
  onClose,
  data
}) => {
  if (!data) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex items-center justify-between mb-4">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    API Response Details
                  </Dialog.Title>
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Status</p>
                    <div className="mt-1">
                      <StatusBadge status={data.status} />
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-500">Order ID</p>
                    <p className="mt-1 text-sm text-gray-900">{data.orderId}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-500">API Order ID</p>
                    <p className="mt-1 text-sm text-gray-900">{data.apiOrderId}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-500">Message</p>
                    <p className="mt-1 text-sm text-gray-900">{data.message}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-500">Raw Response</p>
                    <div className="mt-1 bg-gray-50 p-3 rounded-md">
                      <pre className="text-xs text-gray-900 whitespace-pre-wrap overflow-auto max-h-[150px]">
                        {typeof data.response === 'string'
                          ? data.response
                          : JSON.stringify(data.response, null, 2)}
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ApiResponseDialog;
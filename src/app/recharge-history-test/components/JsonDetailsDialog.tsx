// components/JsonDetailsDialog.tsx
'use client';

import React, { Fragment } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

type JsonValue = string | number | boolean | null;

interface JsonDetailsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  data: Record<string, JsonValue>;
  title?: string;
}

const JsonDetailsDialog: React.FC<JsonDetailsDialogProps> = ({
  isOpen,
  onClose,
  data,
  title = 'Transaction Details'
}) => {
  // Format the key for better readability
  const formatKey = (key: string): string => {
    return key
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Format the value based on its type
  const formatValue = (value: JsonValue): string => {
    if (value === null) return 'N/A';
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    return String(value);
  };

  // Get style for value based on type or content
  const getValueStyle = (value: JsonValue): string => {
    if (value === null) return 'text-gray-400 italic';
    if (typeof value === 'boolean') {
      return value ? 'text-green-600 font-medium' : 'text-red-600 font-medium';
    }
    if (typeof value === 'number') return 'text-blue-600 font-medium';
    
    // Handle status values
    if (typeof value === 'string') {
      const lowercaseValue = value.toLowerCase();
      if (lowercaseValue === 'success') return 'text-green-600 font-medium';
      if (lowercaseValue === 'failed' || lowercaseValue === 'failure') return 'text-red-600 font-medium';
      if (lowercaseValue === 'pending') return 'text-yellow-600 font-medium';
    }
    
    return 'text-gray-900';
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/25 backdrop-blur-sm z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg">
          <div className="flex flex-col space-y-1.5 text-center sm:text-left">
            <Dialog.Title className="text-lg font-semibold leading-none tracking-tight">
              {title}
            </Dialog.Title>
            <Dialog.Description className="text-sm text-gray-500">
              Detailed information about this transaction
            </Dialog.Description>
          </div>
          
          <div className="max-h-[60vh] overflow-y-auto pr-2 -mr-2">
            <div className="rounded-md border">
              {Object.entries(data).map(([key, value], index, array) => (
                <Fragment key={key}>
                  <div className="flex py-3 px-4">
                    <div className="w-1/2 font-medium text-gray-700">
                      {formatKey(key)}
                    </div>
                    <div className={cn("w-1/2", getValueStyle(value))}>
                      {formatValue(value)}
                    </div>
                  </div>
                  {index < array.length - 1 && (
                    <div className="h-px bg-gray-200" />
                  )}
                </Fragment>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
            <button
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-950 text-gray-50 hover:bg-gray-950/90 h-10 px-4 py-2"
              onClick={onClose}
            >
              Close
            </button>
          </div>
          
          <Dialog.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default JsonDetailsDialog;
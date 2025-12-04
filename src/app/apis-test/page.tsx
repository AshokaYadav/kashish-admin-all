'use client';

import React, { Suspense } from 'react';
import VendorForm from './components/VendorForm';
import { TransactionDetailsForm } from './components/TransactionDetailsForm';
import { StatusCheckDetailsForm } from './components/StatusCheckDetailsForm';
import { DisputeDetailsForm } from './components/DisputeDetailsForm';
import { BalanceCheckDetailsForm } from './components/BalanceCheckDetailsForm';
import { CallbackDetailsForm } from './components/CallbackDetailsForm';

// Create a client component that uses useSearchParams
const VendorFormWithId = () => {
    const searchParams = useSearchParams();
    const vendorId = searchParams?.get('id') || undefined;

    return <VendorForm vendorId={vendorId} />;
};

// Import useSearchParams in the client component to avoid issues
import { useSearchParams } from 'next/navigation';

const UpdateVendorPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-8 sm:px-6 lg:px-8 flex flex-col justify-between">
            <Suspense fallback={<div>Loading vendor form...</div>}>
                <VendorFormWithId />
            </Suspense>

            <TransactionDetailsForm onSubmit={() => { }} />
            <StatusCheckDetailsForm onSubmit={() => { }} />
            <DisputeDetailsForm onSubmit={() => { }} />
            <BalanceCheckDetailsForm onSubmit={() => { }} />
            <CallbackDetailsForm onSubmit={() => { }} />
        </div>
    );
};

export default UpdateVendorPage;
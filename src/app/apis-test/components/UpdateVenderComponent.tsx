'use client';

import React from 'react';
import VendorForm from './VendorForm';


interface VendorUpdateSectionProps {
    vendorId?: string;
    title?: string;
    description?: string;
    className?: string;
}

const VendorUpdateSection: React.FC<VendorUpdateSectionProps> = ({
    vendorId,
    title = "Update Vendor",
    description = "Manage vendor API integration settings",
    className = "",
}) => {
    return (
        <section className={`bg-gray-50 py-6 px-4 sm:px-6 ${className}`}>
            <div className="max-w-6xl mx-auto">
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                    <p className="mt-1 text-gray-500">{description}</p>
                </div>

                <VendorForm vendorId={vendorId} />
            </div>
        </section>
    );
};

export default VendorUpdateSection;
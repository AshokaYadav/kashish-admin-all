"use client";

import CommissionTable from "@/components/admin/Commision/CommissionTable";
import ServiceListSection from "@/components/admin/Commision/ServiceListSection";
import { useCards } from "@/hooks/admin/documentation/useCard";
import { useTypeData } from "@/hooks/admin/documentation/userTypeData";
import { useEffect, useState } from "react";

export default function CardsPage() {
  const { data: services, isLoading, isError, error } = useCards();

  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: serviceData,
    isLoading: typeLoading,
    isError: typeError,
  } = useTypeData(selectedService || "");

  useEffect(() => {
    if (services && services.length > 0 && !selectedService) {
      setSelectedService(services[0]);
    }
  }, [services, selectedService]);

  if (isLoading)
    return <p className="text-center py-4 text-gray-500">Loading services...</p>;

  if (isError)
    return (
      <p className="text-center text-red-500 py-4">
        Error: {error?.message}
      </p>
    );

  // 🔹 Filter logic
  const filteredData =
    serviceData?.filter(
      (item: any) =>
        String(item.Operator_Name || "")
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        String(item.Op_code || "")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    ) || [];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* 🔹 Service List Section */}
      {services && (
        <ServiceListSection
          services={services}
          selectedService={selectedService}
          onSelect={setSelectedService}
        />
      )}

      {/* 🔹 Search Input */}
      <div className="flex justify-end mb-4">
        <input
          type="text"
          placeholder="Search by Operator or OpCode..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-blue-500 rounded-full px-4 py-1.5 w-72 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 
               placeholder:text-blue-400 placeholder:text-sm"
        />
      </div>

      {/* 🔹 Table Component */}
      <CommissionTable
        data={filteredData}
        selectedService={selectedService}
        searchTerm={searchTerm}
        loading={typeLoading}
        error={typeError}
      />
    </div>
  );
}

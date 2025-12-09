"use client";

interface ServiceListSectionProps {
  services: string[];
  selectedService: string | null;
  onSelect: (service: string) => void;
}

export default function ServiceListSection({
  services,
  selectedService,
  onSelect,
}: ServiceListSectionProps) {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-2xl border border-gray-200 shadow-md p-6 mb-2">
      <h3 className="text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full py-2 px-4 text-center mb-4 shadow-md">
        ✨ Available Services
      </h3>

      <div className="flex flex-wrap  gap-3">
        {services?.map((service, index) => (
          <div
            key={index}
            onClick={() => onSelect(service)}
            className={`cursor-pointer px-5 py-2 rounded-full border text-center text-sm font-medium transition-all duration-300 whitespace-nowrap w-auto
              ${
                selectedService === service
                  ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-transparent shadow-lg scale-105"
                  : "bg-white text-gray-700 border-gray-200 hover:border-blue-400 hover:shadow-md hover:scale-[1.03]"
              }`}
          >
            {service}
          </div>
        ))}
      </div>
    </div>
  );
}

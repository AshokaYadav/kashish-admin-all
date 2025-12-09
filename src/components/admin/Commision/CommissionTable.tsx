"use client";

interface CommissionTableProps {
  data: any[];
  selectedService: string | null;
  searchTerm: string;
  loading: boolean;
  error: boolean;
}

export default function CommissionTable({
  data,
  selectedService,
  searchTerm,
  loading,
  error,
}: CommissionTableProps) {
  if (loading)
    return (
      <p className="text-center text-gray-500 py-6 animate-pulse">
        Loading {selectedService} details...
      </p>
    );

  if (error)
    return (
      <p className="text-center text-red-500 py-6 font-semibold">
        Error loading {selectedService} data.
      </p>
    );

  if (!data.length)
    return (
      <p className="text-center text-gray-500 py-6">
        No data found for "{searchTerm}" in {selectedService}.
      </p>
    );

  return (
    <div className="overflow-x-auto border border-gray-300 shadow-lg rounded-2xl bg-white">
      <div className="max-h-[750px] overflow-y-auto rounded-2xl">
        <table className="min-w-full border-collapse text-sm">
          {/* 🔹 Sticky Header */}
          <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white sticky top-0 z-10 shadow-md">
            <tr>
              {[
                "Sr.",
                "Operator Name",
                "OpCode",
                "Commission",
                "Commission Type",
                "Min to Max",
              ].map((header, index) => (
                <th
                  key={index}
                  className="px-4 py-3 border border-blue-400 font-semibold text-sm text-center"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          {/* 🔹 Table Body */}
          <tbody>
            {data.map((item: any, index: number) => (
              <tr
                key={index}
                className={`transition-all duration-200 ${
                  index % 2 === 0 ? "bg-white" : "bg-blue-50"
                } hover:bg-blue-100`}
              >
                <td className="px-4 py-2 border text-center font-semibold text-gray-700">
                  {index + 1}
                </td>
                <td className="px-4 py-2 border font-medium text-gray-800">
                  {item.Operator_Name || "—"}
                </td>
                <td className="px-4 py-2 border text-center text-gray-700">
                  {item.Op_code || "—"}
                </td>
                <td className="px-4 py-2 border text-center text-gray-700">
                  {item.sp_key || "0.30"}
                </td>
                <td className="px-4 py-2 border text-center text-gray-700">
                  {item.businessModel || "Percentage %"}
                </td>
                <td className="px-4 py-2 border text-center text-gray-700">
                  10 - 10000
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

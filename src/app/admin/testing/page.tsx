"use client";

import Pagination from "@/components/admin/Pagination1";
import { useState, useMemo } from "react";
// import Pagination from "@/components/Pagination";

type Person = {
  id: number;
  name: string;
  age: number;
};

export default function ExamplePage() {
  const data: Person[] = [
    { id: 1, name: "Ashok", age: 20 },
    { id: 2, name: "Ravi", age: 25 },
    { id: 3, name: "Sita", age: 22 },
    { id: 4, name: "Manish", age: 28 },
    { id: 5, name: "Neha", age: 24 },
    { id: 6, name: "Karan", age: 30 },
    { id: 7, name: "Preeti", age: 21 },
    { id: 8, name: "Rohan", age: 26 },
    { id: 9, name: "Vijay", age: 27 },
    { id: 10, name: "Pooja", age: 23 },
  ];

  const [search, setSearch] = useState("");
  const [minAge, setMinAge] = useState("");
  const [page, setPage] = useState(1);

  const itemsPerPage = 1;

  // Filter logic
  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchName = item.name.toLowerCase().includes(search.toLowerCase());
      const matchAge = minAge ? item.age >= Number(minAge) : true;
      return matchName && matchAge;
    });
  }, [search, minAge]);

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="p-5 max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Auto Scroll Pagination (Reusable)</h1>

      {/* Filters */}
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Search Name"
          className="border p-2 rounded w-full"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />

        <input
          type="number"
          placeholder="Min Age"
          className="border p-2 rounded"
          value={minAge}
          onChange={(e) => {
            setMinAge(e.target.value);
            setPage(1);
          }}
        />
      </div>

      {/* Data */}
      <div className="space-y-3">
        {paginatedData.map((item) => (
          <div key={item.id} className="border p-4 rounded shadow-sm bg-white">
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Age:</strong> {item.age}</p>
          </div>
        ))}

        {paginatedData.length === 0 && (
          <p className="text-center text-gray-500">No data found…</p>
        )}
      </div>

      {/* ⭐ Reusable Pagination */}
      <Pagination page={page} totalPages={totalPages} onChange={setPage} />
    </div>
  );
}

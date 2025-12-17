"use client";

import { ReactNode, useState } from "react";

interface StatCardProps {
  title: string;
  bg: string;
  children: ReactNode;
}

export default function StatCard({ title, bg, children }: StatCardProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="border rounded-md shadow transition-all duration-300 h-fit">
      {/* Header */}
      <div
        className={`flex justify-between rounded-xl items-center px-4 py-2 cursor-pointer text-white ${bg}`}
        onClick={() => setOpen(!open)}
      >
        <h2 className="font-semibold text-lg">{title}</h2>
        <span className="text-xl">{open ? "−" : "+"}</span>
      </div>

      {/* Collapsible Body */}
      <div
        className={`overflow-hidden transition-all duration-300 bg-white text-gray-800 ${
          open ? "max-h-[800px] py-4 px-4" : "max-h-0 py-0 px-4"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

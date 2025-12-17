"use client";

import { useRef, useEffect } from "react";

type PaginationProps = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
};

export default function Pagination({ page, totalPages, onChange }: PaginationProps) {
  const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Store refs of each button
  const pageRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Auto-scroll on active page change
  useEffect(() => {
    const activeBtn = pageRefs.current[page];

    if (activeBtn) {
      activeBtn.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [page]);

  return (
    <div className="flex items-center justify-center gap-3 mt-4">

      {/* Prev */}
      <button
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Prev
      </button>

      {/* Scrollable numbers */}
      <div className="flex gap-2 overflow-x-auto whitespace-nowrap px-2 py-2 border rounded max-w-[220px]">
        {pagesArray.map((p) => (
          <button
            key={p}
            ref={(el) => {
              pageRefs.current[p] = el;
            }}
            onClick={() => onChange(p)}
            className={`px-3 py-1 border rounded ${
              page === p ? "bg-blue-500 text-white" : ""
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Next */}
      <button
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Next
      </button>

    </div>
  );
}

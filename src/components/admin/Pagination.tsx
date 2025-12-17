"use client";

interface PaginationProps {
  page: number;
  totalPage: number;
  onPageChange: (newPage: number) => void;
  showCount?: number; // optional
}

export default function Pagination({
  page,
  totalPage,
  onPageChange,
  showCount,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-between mt-6 p-3 bg-white rounded-lg shadow border">

      {/* Left Side Count Info */}
      <div className="text-sm text-gray-600">
        Showing {showCount ?? 0} records
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-6">
        
        {/* Prev */}
        <button
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
          className="px-4 py-1 bg-gray-300 rounded disabled:opacity-40 hover:bg-gray-400 transition"
        >
          Prev
        </button>

        {/* Page Count */}
        <span className="font-medium">
          Page {page} / {totalPage}
        </span>

        {/* Next */}
        <button
          disabled={page >= totalPage}
          onClick={() => onPageChange(page + 1)}
          className="px-4 py-1 bg-gray-300 rounded disabled:opacity-40 hover:bg-gray-400 transition"
        >
          Next
        </button>

      </div>
    </div>
  );
}

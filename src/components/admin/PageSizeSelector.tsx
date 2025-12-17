"use client";

type Props = {
  pageSize: number;
  onChange: (value: number) => void;
};

export default function PageSizeSelector({ pageSize, onChange }: Props) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <label className="text-sm font-medium text-gray-700">Items per page:</label>

      <select
        value={pageSize}
        onChange={(e) => onChange(Number(e.target.value))}
        className="px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value={50}>50</option>
        <option value={100}>100</option>
        <option value={200}>200</option>
        <option value={500}>500</option>
        <option value={1000}>1000</option>
        <option value={999999}>All</option>
      </select>
    </div>
  );
}

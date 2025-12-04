'use client';
import React from 'react';

interface Props {
  category: string;
  operator: string;
  setCategory: (val: string) => void;
  setOperator: (val: string) => void;
  nextStep: () => void;
}

const CategoryOperatorForm: React.FC<Props> = ({
  category,
  operator,
  setCategory,
  setOperator,
  nextStep,
}) => {
  const categoryOptions = ['Category A', 'Category B', 'Category C'];
  const operatorOptions = ['Operator X', 'Operator Y', 'Operator Z'];

  return (
    <div className="space-y-4">
      <div>
        <label className="block font-medium">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="">Select Category</option>
          {categoryOptions.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-medium">Operator</label>
        <select
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="">Select Operator</option>
          {operatorOptions.map((op) => (
            <option key={op} value={op}>
              {op}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={nextStep}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Next
      </button>
    </div>
  );
};

export default CategoryOperatorForm;

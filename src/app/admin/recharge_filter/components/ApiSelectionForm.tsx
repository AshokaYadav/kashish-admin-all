'use client';
import React from 'react';

interface Props {
  selectedApis: string[];
  onApiChange: (index: number, value: string) => void;
  enableBackup: boolean;
  setEnableBackup: (val: boolean) => void;
  enableRandom: boolean;
  setEnableRandom: (val: boolean) => void;
  onSave: () => void;
}

const ApiSelectionForm: React.FC<Props> = ({
  selectedApis,
  onApiChange,
  enableBackup,
  setEnableBackup,
  enableRandom,
  setEnableRandom,
  onSave,
}) => {
  const apiOptions = ['API 1', 'API 2', 'API 3', 'API 4'];

  return (
    <div className="space-y-4">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="flex justify-between items-center">
          <label>API {i + 1}</label>
          <select
            value={selectedApis[i]}
            onChange={(e) => onApiChange(i, e.target.value)}
            className="border px-2 py-1 rounded"
          >
            <option value="">Select API</option>
            {apiOptions.map((api) => (
              <option key={api} value={api}>
                {api}
              </option>
            ))}
          </select>
        </div>
      ))}

      <div className="flex items-center space-x-4 mt-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={enableBackup}
            onChange={() => setEnableBackup(!enableBackup)}
          />
          <span>Enable Backup</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={enableRandom}
            onChange={() => setEnableRandom(!enableRandom)}
          />
          <span>Enable Random</span>
        </label>
      </div>

      <div  className="flex justify-between items-center">
          {/* <label>API {i + 1}</label> */}
          <select
            // value={selectedApis[i]}
            // onChange={(e) => onApiChange(i, e.target.value)}
            className="border px-2 py-1 rounded"
          >
            <option value="">Backup api</option>
            {apiOptions.map((api) => (
              <option key={api} value={api}>
                {api}
              </option>
            ))}
          </select>
        </div>

      <button
        onClick={onSave}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Save
      </button>
    </div>
  );
};

export default ApiSelectionForm;

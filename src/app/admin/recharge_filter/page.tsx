'use client';
import React, { useState } from 'react';
import CategoryOperatorForm from './components/CategoryOperatorForm';
import ApiSelectionForm from './components/ApiSelectionForm';
// import CategoryOperatorForm from './CategoryOperatorForm';
// import ApiSelectionForm from './ApiSelectionForm';

const DummyDialogComponent = () => {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState('');
  const [operator, setOperator] = useState('');
  const [selectedApis, setSelectedApis] = useState(Array(11).fill(''));
  const [enableBackup, setEnableBackup] = useState(false);
  const [enableRandom, setEnableRandom] = useState(false);

  const handleApiChange = (index: number, value: string) => {
    const updated = [...selectedApis];
    updated[index] = value;
    setSelectedApis(updated);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      {step === 1 ? (
        <CategoryOperatorForm
          category={category}   
          operator={operator}
          setCategory={setCategory}
          setOperator={setOperator}
          nextStep={() => setStep(2)}
        />
      ) : (
        <ApiSelectionForm
          selectedApis={selectedApis}
          onApiChange={handleApiChange}
          enableBackup={enableBackup}
          setEnableBackup={setEnableBackup}
          enableRandom={enableRandom}
          setEnableRandom={setEnableRandom}
          onSave={() => alert('Saved (dummy)')}
        />
      )}
    </div>
  );
};

export default DummyDialogComponent;

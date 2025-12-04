import React, { useRef, useState, KeyboardEvent } from 'react';

const OtpInput = ({ onSubmit }: { onSubmit: (otp: string) => void }) => {
  const [otpValues, setOtpValues] = useState(['', '', '', '']);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleChange = (index: number, value: string) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;

    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    // Auto focus next input
    if (value !== '' && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace
    if (e.key === 'Backspace' && otpValues[index] === '' && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    
    // Only process if it's a 4-digit number
    if (/^\d{4}$/.test(pastedData)) {
      const digits = pastedData.split('');
      setOtpValues(digits);
      inputRefs[3].current?.focus();
    }
  };

  const handleSubmit = () => {
    const otp = otpValues.join('');
    if (otp.length === 4) {
      onSubmit(otp);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-center gap-4 text-black">
        {otpValues.map((value, index) => (
          <input
            key={index}
            ref={inputRefs[index]}
            type="text"
            maxLength={1}
            value={value}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            className="w-12 h-12 text-center text-2xl border-2 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        ))}
      </div>
      <button
        onClick={handleSubmit}
        disabled={otpValues.some(value => value === '')}
        className="w-full py-2 px-4 bg-primary text-white rounded-lg disabled:opacity-50 hover:bg-primary/90 transition-colors"
      >
        Verify OTP
      </button>
    </div>
  );
};

export default OtpInput;
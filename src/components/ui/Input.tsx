import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-white font-medium mb-1 hebrew-text text-sm">
          {label}
        </label>
      )}
      <input
        className={`form-input ${className}`}
        {...props}
      />
      {error && (
        <p className="text-red-400 text-sm mt-1 hebrew-text">{error}</p>
      )}
    </div>
  );
};


import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  className?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
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
      <textarea
        className={`form-input resize-none ${className}`}
        {...props}
      />
      {error && (
        <p className="text-red-400 text-sm mt-1 hebrew-text">{error}</p>
      )}
    </div>
  );
};


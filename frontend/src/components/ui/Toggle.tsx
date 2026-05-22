'use client';

import { cn } from '@/lib/utils';

interface ToggleProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options?: { value: string; label: string }[];
  required?: boolean;
  error?: string;
}

export default function Toggle({
  label,
  value,
  onChange,
  options = [
    { value: 'SI', label: 'Sí' },
    { value: 'NO', label: 'No' },
    { value: 'NO_SE', label: 'No sé' },
  ],
  required,
  error,
}: ToggleProps) {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="flex gap-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={cn(
              'px-4 py-2 rounded-lg text-sm font-medium transition-all',
              value === opt.value
                ? 'bg-teal-600 text-white shadow-sm'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
            )}
          >
            {opt.label}
          </button>
        ))}
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
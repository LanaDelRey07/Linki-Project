'use client';

import { cn } from '@/lib/utils';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  labels?: string[];
}

const defaultLabels = [
  'Identificación',
  'Contacto',
  'Antecedentes',
  'Familiares',
  'Hábitos',
  'Ginecológico',
];

export default function ProgressBar({
  currentStep,
  totalSteps,
  labels = defaultLabels,
}: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-semibold text-teal-700">
          Paso {currentStep} de {totalSteps}
        </span>
        <span className="text-sm text-gray-500">{Math.round(progress)}% completado</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div
          className="bg-teal-600 h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="hidden md:flex justify-between">
        {labels.slice(0, totalSteps).map((label, index) => (
          <div
            key={label}
            className={cn(
              'flex flex-col items-center text-xs',
              index + 1 <= currentStep ? 'text-teal-700' : 'text-gray-400',
            )}
          >
            <div
              className={cn(
                'w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold mb-1',
                index + 1 < currentStep
                  ? 'bg-teal-600 text-white'
                  : index + 1 === currentStep
                    ? 'bg-teal-600 text-white ring-2 ring-teal-300'
                    : 'bg-gray-200 text-gray-400',
              )}
            >
              {index + 1 < currentStep ? '✓' : index + 1}
            </div>
            <span className="max-w-[80px] text-center leading-tight">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
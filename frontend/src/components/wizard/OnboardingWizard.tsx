'use client';

import { useState } from 'react';
import ProgressBar from '@/components/ui/ProgressBar';
import Step1Identification from '@/components/wizard/Step1Identification';
import Step2EmergencyContact from '@/components/wizard/Step2EmergencyContact';
import Step3Background from '@/components/wizard/Step3Background';
import Step4FamilyHistory from '@/components/wizard/Step4FamilyHistory';
import Step5Habits from '@/components/wizard/Step5Habits';
import Step6Gyneco from '@/components/wizard/Step6Gyneco';
import SuccessScreen from '@/components/wizard/SuccessScreen';
import Button from '@/components/ui/Button';

const TOTAL_STEPS = 6;

export default function OnboardingWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleComplete = () => {
    setIsCompleted(true);
  };

  if (isCompleted) {
    return <SuccessScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Registro de Paciente</h1>
          <p className="text-gray-600 mt-1">
            Complete su información médica para un mejor atención
          </p>
        </div>

        <ProgressBar currentStep={currentStep} totalSteps={TOTAL_STEPS} />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          {currentStep === 1 && <Step1Identification onNext={handleNext} />}
          {currentStep === 2 && (
            <Step2EmergencyContact onNext={handleNext} onBack={handleBack} />
          )}
          {currentStep === 3 && (
            <Step3Background onNext={handleNext} onBack={handleBack} />
          )}
          {currentStep === 4 && (
            <Step4FamilyHistory onNext={handleNext} onBack={handleBack} />
          )}
          {currentStep === 5 && (
            <Step5Habits onNext={handleNext} onBack={handleBack} />
          )}
          {currentStep === 6 && (
            <Step6Gyneco
              onNext={handleNext}
              onBack={handleBack}
              onComplete={handleComplete}
              isSubmitting={isSubmitting}
              setIsSubmitting={setIsSubmitting}
            />
          )}
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400">
            Sus datos están protegidos conforme a la normativa boliviana (RM 0090/2008)
          </p>
        </div>
      </div>
    </div>
  );
}
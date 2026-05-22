'use client';

import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

export default function SuccessScreen() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-teal-100">
          <img
            src="/logo.png"
            alt="Linki"
            className="w-12 h-12 object-contain"
          />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          ¡Registro completado!
        </h1>
        <p className="text-gray-600 mb-6">
          Su historia clínica ha sido registrada exitosamente. Ahora puede buscar médicos y agendar citas.
        </p>
        <div className="space-y-3">
          <Button
            onClick={() => router.push('/dashboard')}
            className="w-full"
            size="lg"
          >
            Ir al Dashboard
          </Button>
          <Button
            variant="secondary"
            onClick={() => router.push('/dashboard/appointments')}
            className="w-full"
            size="lg"
          >
            Buscar Médico
          </Button>
        </div>
        <p className="mt-4 text-xs text-gray-400">
          Sus datos están protegidos conforme a la RM 0090/2008
        </p>
      </div>
    </div>
  );
}

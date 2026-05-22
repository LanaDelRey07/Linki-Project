'use client';

import { useState, useEffect } from 'react';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import api from '@/lib/api';

interface Step6Props {
  onNext: () => void;
  onBack: () => void;
  onComplete: () => void;
  isSubmitting: boolean;
  setIsSubmitting: (v: boolean) => void;
}

export default function Step6Gyneco({ onNext, onBack, onComplete, isSubmitting, setIsSubmitting }: Step6Props) {
  const [showStep, setShowStep] = useState(true);
  const [serverError, setServerError] = useState('');
  const [formData, setFormData] = useState({
    actualmenteEmbarazada: '',
    gestas: '',
    partos: '',
    cesareas: '',
    abortos: '',
    fechaUltimaMenstruacion: '',
    metodoAnticonceptivo: '',
    otroMetodoAnticonceptivo: '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get('/patient/profile');
        if (res.data?.identification?.sexoBiologico !== 'FEMENINO') {
          setShowStep(false);
        }
      } catch {
        // If profile not found, show step anyway
      }
    };
    fetchProfile();
  }, []);

  const onSubmit = async () => {
    setIsSubmitting(true);
    setServerError('');
    try {
      if (showStep) {
        await api.post('/patient/profile/step-6', {
          actualmenteEmbarazada: formData.actualmenteEmbarazada || undefined,
          gestas: formData.gestas ? parseInt(formData.gestas) : undefined,
          partos: formData.partos ? parseInt(formData.partos) : undefined,
          cesareas: formData.cesareas ? parseInt(formData.cesareas) : undefined,
          abortos: formData.abortos ? parseInt(formData.abortos) : undefined,
          fechaUltimaMenstruacion: formData.fechaUltimaMenstruacion || undefined,
          metodoAnticonceptivo: formData.metodoAnticonceptivo || undefined,
          otroMetodoAnticonceptivo: formData.otroMetodoAnticonceptivo || undefined,
        });
      }
      onComplete();
    } catch (err: any) {
      setServerError(err.response?.data?.message || 'Error al guardar');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!showStep) {
    return (
      <div className="space-y-6">
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border border-teal-100">
            <img
              src="/logo.png"
              alt="Linki"
              className="w-10 h-10 object-contain"
            />
          </div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Paso 6 no aplica para su perfil
          </h2>
          <p className="text-sm text-gray-500">
            Los datos gineco-obstétricos solo aplican para pacientes femeninas.
            Puede finalizar su registro.
          </p>
        </div>
        <div className="flex justify-between pt-4">
          <Button type="button" variant="secondary" onClick={onBack}>
            ← Anterior
          </Button>
          <Button type="button" loading={isSubmitting} onClick={onSubmit}>
            Finalizar Registro ✓
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Datos Gineco-Obstétricos</h2>
        <p className="text-sm text-gray-500">Solo para pacientes femeninas (opcional)</p>
      </div>

      {serverError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {serverError}
        </div>
      )}

      <Select
        label="¿Está actualmente embarazada?"
        value={formData.actualmenteEmbarazada}
        onChange={(e) => setFormData({ ...formData, actualmenteEmbarazada: e.target.value })}
        options={[
          { value: 'SI', label: 'Sí' },
          { value: 'NO', label: 'No' },
          { value: 'NO_SE', label: 'No sé' },
        ]}
        placeholder="Seleccione..."
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Input
          label="Gestas (embarazos)"
          type="number"
          value={formData.gestas}
          onChange={(e) => setFormData({ ...formData, gestas: e.target.value })}
        />
        <Input
          label="Partos"
          type="number"
          value={formData.partos}
          onChange={(e) => setFormData({ ...formData, partos: e.target.value })}
        />
        <Input
          label="Cesáreas"
          type="number"
          value={formData.cesareas}
          onChange={(e) => setFormData({ ...formData, cesareas: e.target.value })}
        />
        <Input
          label="Abortos"
          type="number"
          value={formData.abortos}
          onChange={(e) => setFormData({ ...formData, abortos: e.target.value })}
        />
      </div>

      <Input
        label="Fecha de Última Menstruación (FUM)"
        type="date"
        value={formData.fechaUltimaMenstruacion}
        onChange={(e) => setFormData({ ...formData, fechaUltimaMenstruacion: e.target.value })}
      />

      <Select
        label="Método Anticonceptivo"
        value={formData.metodoAnticonceptivo}
        onChange={(e) => setFormData({ ...formData, metodoAnticonceptivo: e.target.value })}
        options={[
          { value: 'NINGUNO', label: 'Ninguno' },
          { value: 'HORMONAL_ORAL', label: 'Hormonal oral' },
          { value: 'DIU', label: 'DIU' },
          { value: 'IMPLANTE', label: 'Implante' },
          { value: 'PRESERVATIVO', label: 'Preservativo' },
          { value: 'OTRO', label: 'Otro' },
        ]}
        placeholder="Seleccione..."
      />

      {formData.metodoAnticonceptivo === 'OTRO' && (
        <Input
          label="Especifique otro método anticonceptivo"
          value={formData.otroMetodoAnticonceptivo}
          onChange={(e) => setFormData({ ...formData, otroMetodoAnticonceptivo: e.target.value })}
        />
      )}

      <div className="flex justify-between pt-4">
        <Button type="button" variant="secondary" onClick={onBack}>
          ← Anterior
        </Button>
        <Button type="button" loading={isSubmitting} onClick={onSubmit}>
          Finalizar Registro ✓
        </Button>
      </div>
    </div>
  );
}

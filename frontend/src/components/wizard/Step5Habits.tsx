'use client';

import { useState } from 'react';
import Select from '@/components/ui/Select';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import api from '@/lib/api';

interface Step5Props {
  onNext: () => void;
  onBack: () => void;
}

export default function Step5Habits({ onNext, onBack }: Step5Props) {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const [tabaquismo, setTabaquismo] = useState('');
  const [consumoAlcohol, setConsumoAlcohol] = useState('');
  const [actividadFisica, setActividadFisica] = useState('');
  const [consumeOtrasSustancias, setConsumeOtrasSustancias] = useState(false);
  const [detalleOtrasSustancias, setDetalleOtrasSustancias] = useState('');

  const onSubmit = async () => {
    setLoading(true);
    setServerError('');
    try {
      await api.post('/patient/profile/step-5', {
        tabaquismo: tabaquismo || undefined,
        consumoAlcohol: consumoAlcohol || undefined,
        actividadFisica: actividadFisica || undefined,
        consumeOtrasSustancias,
        detalleOtrasSustancias: consumeOtrasSustancias ? detalleOtrasSustancias : undefined,
      });
      onNext();
    } catch (err: any) {
      setServerError(err.response?.data?.message || 'Error al guardar');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Hábitos y Estilo de Vida</h2>
        <p className="text-sm text-gray-500">Esta información ayuda al médico a conocer mejor su perfil de salud</p>
      </div>

      {serverError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {serverError}
        </div>
      )}

      <Select
        label="¿Fuma?"
        value={tabaquismo}
        onChange={(e) => setTabaquismo(e.target.value)}
        options={[
          { value: 'NO', label: 'No' },
          { value: 'OCASIONAL', label: 'Sí, ocasionalmente' },
          { value: 'DIARIO', label: 'Sí, diariamente' },
          { value: 'EX_FUMADOR', label: 'Ex fumador/a' },
        ]}
        placeholder="Seleccione..."
      />

      <Select
        label="¿Consume alcohol?"
        value={consumoAlcohol}
        onChange={(e) => setConsumoAlcohol(e.target.value)}
        options={[
          { value: 'NO', label: 'No' },
          { value: 'OCASIONAL', label: 'Ocasionalmente' },
          { value: 'REGULAR', label: 'Regularmente' },
          { value: 'EX_BEBEDOR', label: 'Ex bebedor/a' },
        ]}
        placeholder="Seleccione..."
      />

      <Select
        label="¿Realiza actividad física?"
        value={actividadFisica}
        onChange={(e) => setActividadFisica(e.target.value)}
        options={[
          { value: 'SEDENTARIO', label: 'Sedentario/a' },
          { value: 'UNO_DOS_VECES', label: '1-2 veces por semana' },
          { value: 'TRES_CINCO_VECES', label: '3-5 veces por semana' },
          { value: 'DIARIO', label: 'Diariamente' },
        ]}
        placeholder="Seleccione..."
      />

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="sustancias"
            checked={consumeOtrasSustancias}
            onChange={(e) => setConsumeOtrasSustancias(e.target.checked)}
            className="w-4 h-4 text-teal-600 rounded border-gray-300 focus:ring-teal-500"
          />
          <label htmlFor="sustancias" className="text-sm font-medium text-gray-700">
            ¿Consume alguna otra sustancia?
          </label>
        </div>
        {consumeOtrasSustancias && (
          <Input
            label="Especifique"
            value={detalleOtrasSustancias}
            onChange={(e) => setDetalleOtrasSustancias(e.target.value)}
            placeholder="Ej: Coca, tabaco de mascar..."
          />
        )}
      </div>

      <div className="flex justify-between pt-4">
        <Button type="button" variant="secondary" onClick={onBack}>
          ← Anterior
        </Button>
        <Button type="button" loading={loading} onClick={onSubmit}>
          Siguiente →
        </Button>
      </div>
    </div>
  );
}
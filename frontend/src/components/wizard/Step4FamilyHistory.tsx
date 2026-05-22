'use client';

import { useState } from 'react';
import Toggle from '@/components/ui/Toggle';
import Button from '@/components/ui/Button';
import api from '@/lib/api';

const FAMILY_RELATIONS = [
  { value: 'PADRE', label: 'Padre' },
  { value: 'MADRE', label: 'Madre' },
  { value: 'HERMANO', label: 'Hermano/a' },
];

const FAMILY_DISEASES = [
  { value: 'DIABETES', label: 'Diabetes' },
  { value: 'HTA', label: 'Hipertensión' },
  { value: 'CANCER', label: 'Cáncer' },
  { value: 'CARDIOPATIA', label: 'Cardiopatía' },
  { value: 'ACV', label: 'ACV (Derrame cerebral)' },
  { value: 'ENFERMEDAD_MENTAL', label: 'Enfermedad mental' },
  { value: 'OTRA', label: 'Otra' },
];

interface Step4Props {
  onNext: () => void;
  onBack: () => void;
}

export default function Step4FamilyHistory({ onNext, onBack }: Step4Props) {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const [tieneAntecedentes, setTieneAntecedentes] = useState(false);
  const [familyHistory, setFamilyHistory] = useState<{ parentesco: string; enfermedad: string; detalleOtra?: string }[]>([]);

  const onSubmit = async () => {
    setLoading(true);
    setServerError('');
    try {
      await api.post('/patient/profile/step-4', {
        tieneAntecedentesFamiliares: tieneAntecedentes,
        familyHistory: tieneAntecedentes ? familyHistory : [],
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
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Antecedentes Familiares</h2>
        <p className="text-sm text-gray-500">
          ¿Algún familiar directo tiene o tuvo estas enfermedades?
        </p>
      </div>

      {serverError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {serverError}
        </div>
      )}

      <Toggle
        label="¿Tiene antecedentes familiares relevantes?"
        value={tieneAntecedentes ? 'SI' : 'NO'}
        onChange={(v) => setTieneAntecedentes(v === 'SI')}
        options={[{ value: 'SI', label: 'Sí' }, { value: 'NO', label: 'No' }]}
      />

      {tieneAntecedentes && (
        <div className="space-y-3">
          {familyHistory.map((item, index) => (
            <div key={index} className="flex gap-2 items-center p-3 bg-gray-50 rounded-lg">
              <select
                value={item.parentesco}
                onChange={(e) => {
                  const newList = [...familyHistory];
                  newList[index] = { ...newList[index], parentesco: e.target.value };
                  setFamilyHistory(newList);
                }}
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
              >
                {FAMILY_RELATIONS.map((r) => (
                  <option key={r.value} value={r.value}>{r.label}</option>
                ))}
              </select>
              <select
                value={item.enfermedad}
                onChange={(e) => {
                  const newList = [...familyHistory];
                  newList[index] = { ...newList[index], enfermedad: e.target.value };
                  setFamilyHistory(newList);
                }}
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
              >
                {FAMILY_DISEASES.map((d) => (
                  <option key={d.value} value={d.value}>{d.label}</option>
                ))}
              </select>
              {item.enfermedad === 'OTRA' && (
                <input
                  type="text"
                  value={item.detalleOtra || ''}
                  onChange={(e) => {
                    const newList = [...familyHistory];
                    newList[index] = { ...newList[index], detalleOtra: e.target.value };
                    setFamilyHistory(newList);
                  }}
                  className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm"
                  placeholder="Especifique..."
                />
              )}
              <button
                type="button"
                onClick={() => setFamilyHistory(familyHistory.filter((_, i) => i !== index))}
                className="text-red-500 hover:text-red-700 px-2"
              >
                ✕
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => setFamilyHistory([...familyHistory, { parentesco: 'PADRE', enfermedad: 'DIABETES' }])}
            className="w-full py-2 border-2 border-dashed border-teal-300 rounded-lg text-teal-600 text-sm font-medium hover:border-teal-500 hover:bg-teal-50 transition-colors"
          >
            + Agregar antecedente familiar
          </button>
        </div>
      )}

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
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Toggle from '@/components/ui/Toggle';
import Button from '@/components/ui/Button';
import api from '@/lib/api';

const step3Schema = z.object({
  tieneAlergias: z.enum(['SI', 'NO', 'NO_SE']),
  allergies: z.array(z.object({
    tipoAlergia: z.string(),
    detalle: z.string(),
  })).optional(),
  tieneEnfermedadesCronicas: z.enum(['SI', 'NO', 'NO_SE']),
  chronicConditions: z.array(z.object({
    tipo: z.string(),
    detalleOtra: z.string().optional(),
  })).optional(),
  tomaMedicamentos: z.boolean(),
  medications: z.array(z.object({
    nombre: z.string(),
    dosis: z.string(),
    frecuencia: z.string().optional(),
  })).optional(),
  haSidoOperado: z.boolean(),
  surgeries: z.array(z.object({
    tipoCirugia: z.string(),
    anoAproximado: z.number().optional(),
  })).optional(),
  haSidoHospitalizado: z.boolean().optional(),
  hospitalizations: z.array(z.object({
    motivo: z.string(),
    anoAproximado: z.number().optional(),
  })).optional(),
});

type Step3Data = z.infer<typeof step3Schema>;

interface Step3Props {
  onNext: () => void;
  onBack: () => void;
}

export default function Step3Background({ onNext, onBack }: Step3Props) {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const [tieneAlergias, setTieneAlergias] = useState<string>('NO');
  const [tieneCronicas, setTieneCronicas] = useState<string>('NO');
  const [tomaMedicamentos, setTomaMedicamentos] = useState(false);
  const [haSidoOperado, setHaSidoOperado] = useState(false);

  const [allergyList, setAllergyList] = useState<{ tipoAlergia: string; detalle: string }[]>([]);
  const [chronicList, setChronicList] = useState<{ tipo: string; detalleOtra?: string }[]>([]);
  const [medicationList, setMedicationList] = useState<{ nombre: string; dosis: string; frecuencia: string }[]>([]);
  const [surgeryList, setSurgeryList] = useState<{ tipoCirugia: string; anoAproximado: string }[]>([]);

  const onSubmit = async () => {
    setLoading(true);
    setServerError('');
    try {
      const data: any = {
        tieneAlergias,
        tieneEnfermedadesCronicas: tieneCronicas,
        tomaMedicamentos,
        haSidoOperado,
        haSidoHospitalizado: false,
        allergies: tieneAlergias === 'SI' ? allergyList : [],
        chronicConditions: tieneCronicas === 'SI' ? chronicList : [],
        medications: tomaMedicamentos ? medicationList : [],
        surgeries: haSidoOperado ? surgeryList.map(s => ({ ...s, anoAproximado: s.anoAproximado ? parseInt(s.anoAproximado) : undefined })) : [],
        hospitalizations: [],
      };
      await api.post('/patient/profile/step-3', data);
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
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Antecedentes Personales</h2>
        <p className="text-sm text-gray-500">Información sobre su historial médico previo</p>
      </div>

      {serverError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {serverError}
        </div>
      )}

      {/* Alergias */}
      <Toggle
        label="¿Tiene alergias conocidas?"
        value={tieneAlergias}
        onChange={setTieneAlergias}
        required
      />
      {tieneAlergias === 'SI' && (
        <div className="space-y-3 pl-4 border-l-2 border-teal-200">
          {allergyList.map((allergy, index) => (
            <div key={index} className="flex gap-2 items-end">
              <Select
                label={index === 0 ? 'Tipo' : undefined}
                value={allergy.tipoAlergia}
                onChange={(e) => {
                  const newList = [...allergyList];
                  newList[index] = { ...newList[index], tipoAlergia: e.target.value };
                  setAllergyList(newList);
                }}
                options={[
                  { value: 'MEDICAMENTOS', label: 'Medicamentos' },
                  { value: 'ALIMENTOS', label: 'Alimentos' },
                  { value: 'AMBIENTALES', label: 'Ambientales' },
                  { value: 'LATEX', label: 'Látex' },
                  { value: 'OTRAS', label: 'Otras' },
                ]}
                placeholder="Tipo..."
              />
              <div className="flex-1">
                {index === 0 && <label className="block text-sm font-medium text-gray-700 mb-1">Detalle</label>}
                <input
                  type="text"
                  value={allergy.detalle}
                  onChange={(e) => {
                    const newList = [...allergyList];
                    newList[index] = { ...newList[index], detalle: e.target.value };
                    setAllergyList(newList);
                  }}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                  placeholder="Ej: Penicilina, Polen..."
                />
              </div>
              <button
                type="button"
                onClick={() => setAllergyList(allergyList.filter((_, i) => i !== index))}
                className="text-red-500 hover:text-red-700 px-2"
              >
                ✕
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => setAllergyList([...allergyList, { tipoAlergia: 'MEDICAMENTOS', detalle: '' }])}
            className="text-teal-600 text-sm font-medium hover:text-teal-700"
          >
            + Agregar alergia
          </button>
        </div>
      )}

      {/* Enfermedades crónicas */}
      <Toggle
        label="¿Tiene enfermedades crónicas diagnosticadas?"
        value={tieneCronicas}
        onChange={setTieneCronicas}
        required
      />
      {tieneCronicas === 'SI' && (
        <div className="space-y-3 pl-4 border-l-2 border-teal-200">
          {chronicList.map((condition, index) => (
            <div key={index} className="flex gap-2 items-center">
              <select
                value={condition.tipo}
                onChange={(e) => {
                  const newList = [...chronicList];
                  newList[index] = { ...newList[index], tipo: e.target.value };
                  setChronicList(newList);
                }}
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
              >
                <option value="DIABETES_TIPO_1">Diabetes Tipo 1</option>
                <option value="DIABETES_TIPO_2">Diabetes Tipo 2</option>
                <option value="HIPERTENSION">Hipertensión</option>
                <option value="ASMA">Asma</option>
                <option value="HIPOTIROIDISMO">Hipotiroidismo</option>
                <option value="EPILEPSIA">Epilepsia</option>
                <option value="CARDIOPATIA">Cardiopatía</option>
                <option value="OTRA">Otra</option>
              </select>
              {condition.tipo === 'OTRA' && (
                <input
                  type="text"
                  value={condition.detalleOtra || ''}
                  onChange={(e) => {
                    const newList = [...chronicList];
                    newList[index] = { ...newList[index], detalleOtra: e.target.value };
                    setChronicList(newList);
                  }}
                  className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm"
                  placeholder="Especifique..."
                />
              )}
              <button
                type="button"
                onClick={() => setChronicList(chronicList.filter((_, i) => i !== index))}
                className="text-red-500 hover:text-red-700 px-2"
              >
                ✕
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => setChronicList([...chronicList, { tipo: 'DIABETES_TIPO_2' }])}
            className="text-teal-600 text-sm font-medium hover:text-teal-700"
          >
            + Agregar enfermedad crónica
          </button>
        </div>
      )}

      {/* Medicamentos */}
      <Toggle
        label="¿Toma medicamentos de forma permanente?"
        value={tomaMedicamentos ? 'SI' : 'NO'}
        onChange={(v) => setTomaMedicamentos(v === 'SI')}
        options={[{ value: 'SI', label: 'Sí' }, { value: 'NO', label: 'No' }]}
        required
      />
      {tomaMedicamentos && (
        <div className="space-y-3 pl-4 border-l-2 border-teal-200">
          {medicationList.map((med, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-2 items-end">
              <input
                type="text"
                value={med.nombre}
                onChange={(e) => {
                  const newList = [...medicationList];
                  newList[index] = { ...newList[index], nombre: e.target.value };
                  setMedicationList(newList);
                }}
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
                placeholder="Medicamento"
              />
              <input
                type="text"
                value={med.dosis}
                onChange={(e) => {
                  const newList = [...medicationList];
                  newList[index] = { ...newList[index], dosis: e.target.value };
                  setMedicationList(newList);
                }}
                className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
                placeholder="Dosis (ej: 500mg)"
              />
              <div className="flex gap-1">
                <input
                  type="text"
                  value={med.frecuencia}
                  onChange={(e) => {
                    const newList = [...medicationList];
                    newList[index] = { ...newList[index], frecuencia: e.target.value };
                    setMedicationList(newList);
                  }}
                  className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm"
                  placeholder="Frecuencia"
                />
                <button
                  type="button"
                  onClick={() => setMedicationList(medicationList.filter((_, i) => i !== index))}
                  className="text-red-500 hover:text-red-700 px-2"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() => setMedicationList([...medicationList, { nombre: '', dosis: '', frecuencia: '' }])}
            className="text-teal-600 text-sm font-medium hover:text-teal-700"
          >
            + Agregar medicamento
          </button>
        </div>
      )}

      {/* Cirugías */}
      <Toggle
        label="¿Ha sido operado/a alguna vez?"
        value={haSidoOperado ? 'SI' : 'NO'}
        onChange={(v) => setHaSidoOperado(v === 'SI')}
        options={[{ value: 'SI', label: 'Sí' }, { value: 'NO', label: 'No' }]}
        required
      />
      {haSidoOperado && (
        <div className="space-y-3 pl-4 border-l-2 border-teal-200">
          {surgeryList.map((surgery, index) => (
            <div key={index} className="flex gap-2 items-end">
              <input
                type="text"
                value={surgery.tipoCirugia}
                onChange={(e) => {
                  const newList = [...surgeryList];
                  newList[index] = { ...newList[index], tipoCirugia: e.target.value };
                  setSurgeryList(newList);
                }}
                className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm"
                placeholder="Tipo de cirugía"
              />
              <input
                type="number"
                value={surgery.anoAproximado}
                onChange={(e) => {
                  const newList = [...surgeryList];
                  newList[index] = { ...newList[index], anoAproximado: e.target.value };
                  setSurgeryList(newList);
                }}
                className="w-28 rounded-lg border border-gray-300 px-3 py-2 text-sm"
                placeholder="Año"
              />
              <button
                type="button"
                onClick={() => setSurgeryList(surgeryList.filter((_, i) => i !== index))}
                className="text-red-500 hover:text-red-700 px-2"
              >
                ✕
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => setSurgeryList([...surgeryList, { tipoCirugia: '', anoAproximado: '' }])}
            className="text-teal-600 text-sm font-medium hover:text-teal-700"
          >
            + Agregar cirugía
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
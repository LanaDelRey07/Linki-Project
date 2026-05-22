'use client';

import { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import api from '@/lib/api';

const contactSchema = z.object({
  nombreCompleto: z.string().min(2, 'Nombre requerido'),
  parentesco: z.enum(['PADRE', 'MADRE', 'CONYUGE', 'HIJO', 'HERMANO', 'OTRO']),
  telefono: z.string().min(6, 'Teléfono inválido'),
});

const step2Schema = z.object({
  contacts: z.array(contactSchema).min(1, 'Agregue al menos un contacto'),
});

type Step2Data = z.infer<typeof step2Schema>;

interface Step2Props {
  onNext: () => void;
  onBack: () => void;
}

export default function Step2EmergencyContact({ onNext, onBack }: Step2Props) {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      contacts: [{ nombreCompleto: '', parentesco: 'CONYUGE' as const, telefono: '' }],
    },
  });

  const { fields, append, remove } = useFieldArray({ control, name: 'contacts' });

  const onSubmit = async (data: Step2Data) => {
    setLoading(true);
    setServerError('');
    try {
      await api.post('/patient/profile/step-2', data);
      onNext();
    } catch (err: any) {
      setServerError(err.response?.data?.message || 'Error al guardar');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Contacto de Emergencia</h2>
        <p className="text-sm text-gray-500">
         Persona a contactar en caso de emergencia
        </p>
      </div>

      {serverError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {serverError}
        </div>
      )}

      {fields.map((field, index) => (
        <div key={field.id} className="p-4 border border-gray-200 rounded-lg space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">
              Contacto {index + 1}
            </span>
            {fields.length > 1 && (
              <button
                type="button"
                onClick={() => remove(index)}
                className="text-red-500 text-sm hover:text-red-700"
              >
                Eliminar
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Nombre Completo"
              {...register(`contacts.${index}.nombreCompleto`)}
              error={errors.contacts?.[index]?.nombreCompleto?.message}
              required
            />
            <Select
              label="Parentesco"
              {...register(`contacts.${index}.parentesco`)}
              error={errors.contacts?.[index]?.parentesco?.message}
              required
              options={[
                { value: 'PADRE', label: 'Padre' },
                { value: 'MADRE', label: 'Madre' },
                { value: 'CONYUGE', label: 'Cónyuge' },
                { value: 'HIJO', label: 'Hijo/a' },
                { value: 'HERMANO', label: 'Hermano/a' },
                { value: 'OTRO', label: 'Otro' },
              ]}
            />
          </div>
          <Input
            label="Teléfono"
            type="tel"
            {...register(`contacts.${index}.telefono`)}
            error={errors.contacts?.[index]?.telefono?.message}
            required
          />
        </div>
      ))}

      <button
        type="button"
        onClick={() =>
          append({ nombreCompleto: '', parentesco: 'CONYUGE', telefono: '' })
        }
        className="w-full py-2 border-2 border-dashed border-teal-300 rounded-lg text-teal-600 text-sm font-medium hover:border-teal-500 hover:bg-teal-50 transition-colors"
      >
        + Agregar otro contacto de emergencia
      </button>

      <div className="flex justify-between pt-4">
        <Button type="button" variant="secondary" onClick={onBack}>
          ← Anterior
        </Button>
        <Button type="submit" loading={loading}>
          Siguiente →
        </Button>
      </div>
    </form>
  );
}
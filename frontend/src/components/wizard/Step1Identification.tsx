'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import api from '@/lib/api';
import { DEPARTMENTS } from '@/lib/utils';
import type { PatientIdentification } from '@/types';

const step1Schema = z.object({
  nombres: z.string().min(2, 'Mínimo 2 caracteres').regex(/^[a-zA-ZáéíóúñÁÉÍÓÚÑ\s]+$/, 'Solo letras y espacios'),
  apellidoPaterno: z.string().min(2, 'Mínimo 2 caracteres'),
  apellidoMaterno: z.string().optional(),
  tipoDocumento: z.enum(['CI', 'PASAPORTE', 'CARNET_EXTRANJERIA']),
  numeroDocumento: z.string().min(1, 'Ingrese el número de documento'),
  extensionDepartamento: z.string().optional(),
  fechaNacimiento: z.string().min(1, 'Fecha de nacimiento requerida'),
  sexoBiologico: z.enum(['MASCULINO', 'FEMENINO', 'INTERSEXUAL']),
  genero: z.string().optional(),
  estadoCivil: z.string().optional(),
  ocupacion: z.string().optional(),
  telefonoPrincipal: z.string().min(6, 'Teléfono inválido'),
  telefonoSecundario: z.string().optional(),
  correoElectronico: z.string().email('Correo inválido'),
  direccion: z.string().min(1, 'Dirección requerida'),
  ciudad: z.string().min(1, 'Ciudad requerida'),
  departamento: z.enum(['LP', 'CB', 'SC', 'OR', 'PT', 'TJ', 'CH', 'BE', 'PA']),
});

type Step1Data = z.infer<typeof step1Schema>;

interface Step1Props {
  onNext: () => void;
}

export default function Step1Identification({ onNext }: Step1Props) {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      tipoDocumento: 'CI',
      sexoBiologico: 'MASCULINO',
      departamento: 'LP',
    },
  });

  const tipoDocumento = watch('tipoDocumento');

  const onSubmit = async (data: Step1Data) => {
    setLoading(true);
    setServerError('');
    try {
      await api.post('/patient/profile/step-1', data);
      onNext();
    } catch (err: any) {
      setServerError(err.response?.data?.message || 'Error al guardar. Intente nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">Datos de Identificación</h2>
        <p className="text-sm text-gray-500">
          Información personal according to RM 0090/2008
        </p>
      </div>

      {serverError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          {serverError}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Nombres"
          {...register('nombres')}
          error={errors.nombres?.message}
          required
        />
        <Input
          label="Apellido Paterno"
          {...register('apellidoPaterno')}
          error={errors.apellidoPaterno?.message}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Apellido Materno"
          {...register('apellidoMaterno')}
          error={errors.apellidoMaterno?.message}
        />
        <Select
          label="Tipo de Documento"
          {...register('tipoDocumento')}
          error={errors.tipoDocumento?.message}
          required
          options={[
            { value: 'CI', label: 'Cédula de Identidad' },
            { value: 'PASAPORTE', label: 'Pasaporte' },
            { value: 'CARNET_EXTRANJERIA', label: 'Carnet de Extranjería' },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Número de Documento"
          {...register('numeroDocumento')}
          error={errors.numeroDocumento?.message}
          required
        />
        {tipoDocumento === 'CI' && (
          <Select
            label="Extensión (Departamento)"
            {...register('extensionDepartamento')}
            error={errors.extensionDepartamento?.message}
            required
            options={DEPARTMENTS.map((d) => ({ value: d.value, label: d.label }))}
            placeholder="Seleccione..."
          />
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Fecha de Nacimiento"
          type="date"
          {...register('fechaNacimiento')}
          error={errors.fechaNacimiento?.message}
          required
        />
        <Select
          label="Sexo Biológico"
          {...register('sexoBiologico')}
          error={errors.sexoBiologico?.message}
          required
          options={[
            { value: 'MASCULINO', label: 'Masculino' },
            { value: 'FEMENINO', label: 'Femenino' },
            { value: 'INTERSEXUAL', label: 'Intersexual' },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select
          label="Género (Identidad)"
          {...register('genero')}
          options={[
            { value: 'MASCULINO', label: 'Masculino' },
            { value: 'FEMENINO', label: 'Femenino' },
            { value: 'NO_BINARIO', label: 'No binario' },
            { value: 'PREFIERO_NO_DECIR', label: 'Prefiero no decir' },
          ]}
          placeholder="Seleccione..."
        />
        <Select
          label="Estado Civil"
          {...register('estadoCivil')}
          options={[
            { value: 'SOLTERO', label: 'Soltero/a' },
            { value: 'CASADO', label: 'Casado/a' },
            { value: 'UNION_LIBRE', label: 'Unión libre' },
            { value: 'DIVORCIADO', label: 'Divorciado/a' },
            { value: 'VIUDO', label: 'Viudo/a' },
          ]}
          placeholder="Seleccione..."
        />
      </div>

      <Input
        label="Ocupación"
        {...register('ocupacion')}
        error={errors.ocupacion?.message}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Teléfono Principal (+591)"
          type="tel"
          {...register('telefonoPrincipal')}
          error={errors.telefonoPrincipal?.message}
          required
        />
        <Input
          label="Teléfono Secundario"
          type="tel"
          {...register('telefonoSecundario')}
          error={errors.telefonoSecundario?.message}
        />
      </div>

      <Input
        label="Correo Electrónico"
        type="email"
        {...register('correoElectronico')}
        error={errors.correoElectronico?.message}
        required
      />

      <Input
        label="Dirección de Domicilio"
        {...register('direccion')}
        error={errors.direccion?.message}
        required
        helperText="Calle, número, zona"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select
          label="Departamento"
          {...register('departamento')}
          error={errors.departamento?.message}
          required
          options={DEPARTMENTS.map((d) => ({ value: d.value, label: d.label }))}
        />
        <Input
          label="Ciudad"
          {...register('ciudad')}
          error={errors.ciudad?.message}
          required
        />
      </div>

      <div className="flex justify-end pt-4">
        <Button type="submit" loading={loading} size="lg">
          Siguiente →
        </Button>
      </div>
    </form>
  );
}
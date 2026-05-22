import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateAge(birthDate: string): number {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

export function calculateIMC(peso: number, tallaCm: number): { value: number; classification: string } {
  const tallaM = tallaCm / 100;
  const imc = peso / (tallaM * tallaM);
  let classification: string;

  if (imc < 18.5) classification = 'Bajo peso';
  else if (imc < 25) classification = 'Normal';
  else if (imc < 27) classification = 'Sobrepeso';
  else if (imc < 30) classification = 'Obesidad I';
  else if (imc < 40) classification = 'Obesidad II';
  else classification = 'Obesidad III';

  return { value: Math.round(imc * 100) / 100, classification };
}

export function formatCI(numeroDocumento: string, extension?: string): string {
  if (extension) {
    return `${numeroDocumento}-${extension}`;
  }
  return numeroDocumento;
}

export const DEPARTMENTS = [
  { value: 'LP', label: 'La Paz' },
  { value: 'CB', label: 'Cochabamba' },
  { value: 'SC', label: 'Santa Cruz' },
  { value: 'OR', label: 'Oruro' },
  { value: 'PT', label: 'Potosí' },
  { value: 'TJ', label: 'Tarija' },
  { value: 'CH', label: 'Chuquisaca' },
  { value: 'BE', label: 'Beni' },
  { value: 'PA', label: 'Pando' },
] as const;
import { IsString, IsEnum, IsOptional, IsDateString } from 'class-validator';

export class CreateAppointmentDto {
  @IsString()
  doctorProfileId: string;

  @IsDateString()
  fechaHora: string;

  @IsString()
  motivoConsulta: string;

  @IsOptional()
  @IsEnum(['HOY', 'DIAS', 'SEMANAS', 'MESES', 'ANIOS', 'NO_APLICA'])
  tiempoMolestia?: string;

  @IsOptional()
  @IsString()
  notasAdicionales?: string;
}
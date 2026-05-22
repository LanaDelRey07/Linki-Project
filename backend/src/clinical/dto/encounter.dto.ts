import { IsString, IsEnum, IsOptional, IsInt, IsNumber, ValidateNested, IsArray, IsBoolean } from 'class-validator';

export class CreateEncounterDto {
  @IsString()
  appointmentId: string;

  @IsString()
  motivoConsultaValidado: string;

  @IsString()
  historiaEnfermedadActual: string;

  @IsOptional() @IsInt() presionArterialSistolica?: number;
  @IsOptional() @IsInt() presionArterialDiastolica?: number;
  @IsOptional() @IsInt() frecuenciaCardiaca?: number;
  @IsOptional() @IsInt() frecuenciaRespiratoria?: number;
  @IsOptional() @IsNumber() temperatura?: number;
  @IsOptional() @IsNumber() saturacionOxigeno?: number;
  @IsOptional() @IsNumber() peso?: number;
  @IsOptional() @IsInt() talla?: number;

  @IsString()
  examenFisicoGeneral: string;

  @IsOptional() @IsString() examenFisicoSegmentario?: string;

  @IsEnum(['PRESUNTIVO', 'DEFINITIVO'])
  tipoDiagnostico: string;

  @IsOptional() @IsString() observacionesDiagnosticas?: string;

  @IsOptional() @IsString() indicacionesNoFarmacologicas?: string;

  @IsOptional()
  @IsEnum(['UNA_SEMANA', 'DOS_SEMANAS', 'UN_MES', 'TRES_MESES', 'SEIS_MESES', 'A_DEMANDA'])
  proximaCitaSugerida?: string;

  @IsOptional() @IsString() notasInternas?: string;

  @IsOptional() @IsArray() diagnoses?: EncounterDiagnosisDto[];
  @IsOptional() @IsArray() prescriptions?: EncounterPrescriptionDto[];
  @IsOptional() @IsArray() labOrders?: EncounterLabOrderDto[];
  @IsOptional() @IsArray() imagingOrders?: EncounterImagingOrderDto[];
  @IsOptional() @IsArray() referrals?: EncounterReferralDto[];
}

export class EncounterDiagnosisDto {
  @IsString()
  cie10Code: string;

  @IsBoolean()
  esDiagnosticoPrincipal: boolean;
}

export class EncounterPrescriptionDto {
  @IsString() medicamento: string;
  @IsEnum(['TABLETA', 'CAPSULA', 'JARABE', 'AMPOLLA', 'CREMA', 'GOTAS', 'SUSPENSION', 'OTRO']) presentacion: string;
  @IsString() dosis: string;
  @IsEnum(['ORAL', 'INTRAMUSCULAR', 'INTRAVENOSA', 'TOPICA', 'SUBLINGUAL', 'INHALATORIA', 'RECTAL', 'OTRA']) viaAdministracion: string;
  @IsEnum(['CADA_4H', 'CADA_6H', 'CADA_8H', 'CADA_12H', 'CADA_24H', 'DOSIS_UNICA', 'PRN', 'OTRA']) frecuencia: string;
  @IsString() duracion: string;
  @IsOptional() @IsString() instruccionesEspeciales?: string;
}

export class EncounterLabOrderDto {
  @IsString() estudio: string;
}

export class EncounterImagingOrderDto {
  @IsString() estudio: string;
}

export class EncounterReferralDto {
  @IsString() especialidadDestino: string;
  @IsOptional() @IsString() motivo?: string;
}

export class CloseEncounterDto {}

export class AddendumDto {
  @IsString()
  motivoAclaracion: string;

  @IsString()
  contenido: string;
}
import {
  IsEnum,
  IsOptional,
  IsString,
  IsBoolean,
  IsInt,
  IsDateString,
  ValidateNested,
  IsArray,
} from 'class-validator';
import { Type } from 'class-transformer';

export class AllergyDto {
  @IsEnum(['MEDICAMENTOS', 'ALIMENTOS', 'AMBIENTALES', 'LATEX', 'OTRAS'])
  tipoAlergia: string;

  @IsString()
  detalle: string;
}

export class ChronicConditionDto {
  @IsEnum([
    'DIABETES_TIPO_1', 'DIABETES_TIPO_2', 'HIPERTENSION', 'ASMA',
    'HIPOTIROIDISMO', 'EPILEPSIA', 'CARDIOPATIA', 'OTRA',
  ])
  tipo: string;

  @IsOptional()
  @IsString()
  detalleOtra?: string;
}

export class MedicationDto {
  @IsString()
  nombre: string;

  @IsString()
  dosis: string;

  @IsOptional()
  @IsString()
  frecuencia?: string;
}

export class SurgeryDto {
  @IsString()
  tipoCirugia: string;

  @IsOptional()
  @IsInt()
  anoAproximado?: number;
}

export class HospitalizationDto {
  @IsString()
  motivo: string;

  @IsOptional()
  @IsInt()
  anoAproximado?: number;
}

export class CreateStep3Dto {
  @IsEnum(['SI', 'NO', 'NO_SE'])
  tieneAlergias: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AllergyDto)
  allergies?: AllergyDto[];

  @IsEnum(['SI', 'NO', 'NO_SE'])
  tieneEnfermedadesCronicas: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ChronicConditionDto)
  chronicConditions?: ChronicConditionDto[];

  @IsBoolean()
  tomaMedicamentos: boolean;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationDto)
  medications?: MedicationDto[];

  @IsBoolean()
  haSidoOperado: boolean;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SurgeryDto)
  surgeries?: SurgeryDto[];

  @IsOptional()
  @IsBoolean()
  haSidoHospitalizado?: boolean;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => HospitalizationDto)
  hospitalizations?: HospitalizationDto[];
}

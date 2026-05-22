import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class FamilyHistoryDto {
  @IsEnum(['PADRE', 'MADRE', 'HERMANO'])
  parentesco: string;

  @IsEnum(['DIABETES', 'HTA', 'CANCER', 'CARDIOPATIA', 'ACV', 'ENFERMEDAD_MENTAL', 'OTRA'])
  enfermedad: string;

  @IsOptional()
  @IsString()
  detalleOtra?: string;
}

export class CreateStep4Dto {
  @IsBoolean()
  tieneAntecedentesFamiliares: boolean;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FamilyHistoryDto)
  familyHistory?: FamilyHistoryDto[];
}

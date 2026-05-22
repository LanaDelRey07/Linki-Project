import {
  IsString,
  IsEnum,
  IsOptional,
  ValidateNested,
  ArrayMinSize,
} from 'class-validator';
import { Type } from 'class-transformer';

export class EmergencyContactDto {
  @IsString()
  nombreCompleto: string;

  @IsEnum(['PADRE', 'MADRE', 'CONYUGE', 'HIJO', 'HERMANO', 'OTRO'])
  parentesco: string;

  @IsString()
  telefono: string;
}

export class CreateStep2Dto {
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @Type(() => EmergencyContactDto)
  contacts: EmergencyContactDto[];
}

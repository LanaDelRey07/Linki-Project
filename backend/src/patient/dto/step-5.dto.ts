import { IsEnum, IsOptional, IsString, IsBoolean } from 'class-validator';

export class CreateStep5Dto {
  @IsOptional()
  @IsEnum(['NO', 'OCASIONAL', 'DIARIO', 'EX_FUMADOR'])
  tabaquismo?: string;

  @IsOptional()
  @IsEnum(['NO', 'OCASIONAL', 'REGULAR', 'EX_BEBEDOR'])
  consumoAlcohol?: string;

  @IsOptional()
  @IsEnum(['SEDENTARIO', 'UNO_DOS_VECES', 'TRES_CINCO_VECES', 'DIARIO'])
  actividadFisica?: string;

  @IsOptional()
  @IsBoolean()
  consumeOtrasSustancias?: boolean;

  @IsOptional()
  @IsString()
  detalleOtrasSustancias?: string;
}
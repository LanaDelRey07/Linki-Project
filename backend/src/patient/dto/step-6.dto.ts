import { IsEnum, IsOptional, IsInt, IsDateString, IsString } from 'class-validator';

export class CreateStep6Dto {
  @IsOptional()
  @IsEnum(['SI', 'NO', 'NO_SE'])
  actualmenteEmbarazada?: string;

  @IsOptional()
  @IsInt()
  gestas?: number;

  @IsOptional()
  @IsInt()
  partos?: number;

  @IsOptional()
  @IsInt()
  cesareas?: number;

  @IsOptional()
  @IsInt()
  abortos?: number;

  @IsOptional()
  @IsDateString()
  fechaUltimaMenstruacion?: string;

  @IsOptional()
  @IsEnum(['NINGUNO', 'HORMONAL_ORAL', 'DIU', 'IMPLANTE', 'PRESERVATIVO', 'OTRO'])
  metodoAnticonceptivo?: string;

  @IsOptional()
  @IsString()
  otroMetodoAnticonceptivo?: string;
}
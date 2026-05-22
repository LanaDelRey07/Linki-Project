import {
  IsString,
  IsEnum,
  IsOptional,
  IsDateString,
  IsEmail,
  Matches,
  IsArray,
  ValidateNested,
} from 'class-validator';

export class CreateStep1Dto {
  @IsString()
  nombres: string;

  @IsString()
  apellidoPaterno: string;

  @IsOptional()
  @IsString()
  apellidoMaterno?: string;

  @IsEnum(['CI', 'PASAPORTE', 'CARNET_EXTRANJERIA'])
  tipoDocumento: string;

  @IsString()
  numeroDocumento: string;

  @IsOptional()
  @IsEnum(['LP', 'CB', 'SC', 'OR', 'PT', 'TJ', 'CH', 'BE', 'PA'])
  extensionDepartamento?: string;

  @IsDateString()
  fechaNacimiento: string;

  @IsEnum(['MASCULINO', 'FEMENINO'])
  sexoBiologico: string;

  // @IsOptional()
  // @IsEnum(['MASCULINO', 'FEMENINO', 'NO_BINARIO', 'PREFIERO_NO_DECIR'])
  // genero?: string;

  @IsOptional()
  @IsEnum(['SOLTERO', 'CASADO', 'UNION_LIBRE', 'DIVORCIADO', 'VIUDO'])
  estadoCivil?: string;

  @IsOptional()
  @IsString()
  ocupacion?: string;

  @IsString()
  telefonoPrincipal: string;

  @IsOptional()
  @IsString()
  telefonoSecundario?: string;

  @IsEmail()
  correoElectronico: string;

  @IsString()
  direccion: string;

  @IsString()
  ciudad: string;

  @IsEnum(['LP', 'CB', 'SC', 'OR', 'PT', 'TJ', 'CH', 'BE', 'PA'])
  departamento: string;
}
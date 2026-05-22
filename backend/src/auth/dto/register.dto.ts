import {
  IsEmail,
  IsString,
  IsEnum,
  MinLength,
  IsOptional,
} from 'class-validator';

export class RegisterDto {
  @IsEmail()
  email: string;

  @MinLength(8)
  password: string;

  @IsEnum(['PATIENT', 'DOCTOR'])
  role: 'PATIENT' | 'DOCTOR';
}
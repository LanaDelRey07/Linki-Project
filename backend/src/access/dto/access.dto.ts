import { IsString } from 'class-validator';

export class GrantAccessDto {
  @IsString()
  doctorProfileId: string;
}

export class RevokeAccessDto {
  @IsString()
  doctorProfileId: string;
}
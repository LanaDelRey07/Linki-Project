import { IsString, IsOptional } from 'class-validator';

export class SearchCatalogDto {
  @IsString()
  search: string;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  limit?: number;
}
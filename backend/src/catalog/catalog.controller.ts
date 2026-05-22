import { Controller, Get, Query, Param } from '@nestjs/common';
import { CatalogService } from './catalog.service';

@Controller('catalog')
export class CatalogController {
  constructor(private catalogService: CatalogService) {}

  @Get('cie10')
  async searchCie10(@Query('search') search: string, @Query('limit') limit?: string) {
    return this.catalogService.searchCie10(search, limit ? parseInt(limit) : 20);
  }

  @Get('medications')
  async searchMedications(@Query('search') search: string, @Query('limit') limit?: string) {
    return this.catalogService.searchMedications(search, limit ? parseInt(limit) : 20);
  }

  @Get('departments')
  async getDepartments() {
    return this.catalogService.getAllDepartments();
  }

  @Get('departments/:department/cities')
  async getCitiesByDepartment(@Param('department') department: string) {
    return this.catalogService.getCitiesByDepartment(department);
  }

  @Get('specialties')
  async getSpecialties() {
    return this.catalogService.getSpecialties();
  }

  @Get('lab-studies')
  async searchLabStudies(@Query('search') search: string) {
    return this.catalogService.searchLabStudies(search);
  }

  @Get('imaging-studies')
  async searchImagingStudies(@Query('search') search: string) {
    return this.catalogService.searchImagingStudies(search);
  }
}
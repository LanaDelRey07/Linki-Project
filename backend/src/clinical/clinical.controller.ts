import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ClinicalService } from './clinical.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { CreateEncounterDto, AddendumDto, CloseEncounterDto } from './dto/encounter.dto';

@Controller('clinical')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('DOCTOR')
export class ClinicalController {
  constructor(private clinicalService: ClinicalService) {}

  @Post('encounters')
  async createEncounter(
    @CurrentUser('id') userId: string,
    @Body() dto: CreateEncounterDto,
  ) {
    return this.clinicalService.createEncounter(userId, dto);
  }

  @Patch('encounters/:id')
  async updateEncounter(
    @CurrentUser('id') userId: string,
    @Param('id') id: string,
    @Body() dto: Partial<CreateEncounterDto>,
  ) {
    return this.clinicalService.updateEncounter(userId, id, dto);
  }

  @Post('encounters/:id/close')
  async closeEncounter(
    @CurrentUser('id') userId: string,
    @Param('id') id: string,
  ) {
    return this.clinicalService.closeEncounter(userId, id);
  }

  @Get('encounters/:id')
  async getEncounter(@Param('id') id: string) {
    return this.clinicalService.getEncounter(id);
  }

  @Post('encounters/:id/addendum')
  async addAddendum(
    @CurrentUser('id') userId: string,
    @Param('id') id: string,
    @Body() dto: AddendumDto,
  ) {
    return this.clinicalService.addAddendum(userId, id, dto);
  }

  @Get('patient/:patientProfileId/summary')
  async getPatientSummary(
    @CurrentUser('id') userId: string,
    @Param('patientProfileId') patientProfileId: string,
  ) {
    return this.clinicalService.getPatientSummary(userId, patientProfileId);
  }
}
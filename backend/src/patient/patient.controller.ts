import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { PatientService } from './patient.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { CreateStep1Dto } from './dto/step-1.dto';
import { CreateStep2Dto } from './dto/step-2.dto';
import { CreateStep3Dto } from './dto/step-3.dto';
import { CreateStep4Dto } from './dto/step-4.dto';
import { CreateStep5Dto } from './dto/step-5.dto';
import { CreateStep6Dto } from './dto/step-6.dto';

@Controller('patient')
@UseGuards(JwtAuthGuard)
export class PatientController {
  constructor(private patientService: PatientService) {}

  @Get('profile')
  async getProfile(@CurrentUser('id') userId: string) {
    return this.patientService.getProfile(userId);
  }

  @Post('profile/step-1')
  async saveStep1(@CurrentUser('id') userId: string, @Body() dto: CreateStep1Dto) {
    return this.patientService.saveStep1(userId, dto);
  }

  @Patch('profile/step-1')
  async updateStep1(@CurrentUser('id') userId: string, @Body() dto: CreateStep1Dto) {
    return this.patientService.saveStep1(userId, dto);
  }

  @Post('profile/step-2')
  async saveStep2(@CurrentUser('id') userId: string, @Body() dto: CreateStep2Dto) {
    return this.patientService.saveStep2(userId, dto);
  }

  @Post('profile/step-3')
  async saveStep3(@CurrentUser('id') userId: string, @Body() dto: CreateStep3Dto) {
    return this.patientService.saveStep3(userId, dto);
  }

  @Patch('profile/step-3')
  async updateStep3(@CurrentUser('id') userId: string, @Body() dto: CreateStep3Dto) {
    return this.patientService.saveStep3(userId, dto);
  }

  @Post('profile/step-4')
  async saveStep4(@CurrentUser('id') userId: string, @Body() dto: CreateStep4Dto) {
    return this.patientService.saveStep4(userId, dto);
  }

  @Post('profile/step-5')
  async saveStep5(@CurrentUser('id') userId: string, @Body() dto: CreateStep5Dto) {
    return this.patientService.saveStep5(userId, dto);
  }

  @Post('profile/step-6')
  async saveStep6(@CurrentUser('id') userId: string, @Body() dto: CreateStep6Dto) {
    return this.patientService.saveStep6(userId, dto);
  }

  @Get('profile/versions')
  async getVersions(@CurrentUser('id') userId: string) {
    return this.patientService.getVersions(userId);
  }

  @Get('profile/versions/:versionNumber')
  async getVersion(
    @CurrentUser('id') userId: string,
    @Param('versionNumber') versionNumber: number,
  ) {
    return this.patientService.getVersion(userId, versionNumber);
  }
}
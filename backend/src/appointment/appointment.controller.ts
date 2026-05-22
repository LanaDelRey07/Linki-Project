import { Controller, Get, Post, Param, Body, UseGuards } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { CreateAppointmentDto } from './dto/create-appointment.dto';

@Controller('appointments')
@UseGuards(JwtAuthGuard)
export class AppointmentController {
  constructor(private appointmentService: AppointmentService) {}

  @Post()
  async create(@CurrentUser('id') userId: string, @Body() dto: CreateAppointmentDto) {
    return this.appointmentService.create(userId, dto);
  }

  @Get()
  async findByPatient(@CurrentUser('id') userId: string) {
    return this.appointmentService.findByPatient(userId);
  }

  @Get('doctor')
  async findByDoctor(@CurrentUser('id') userId: string) {
    return this.appointmentService.findByDoctor(userId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.appointmentService.findOne(id);
  }
}
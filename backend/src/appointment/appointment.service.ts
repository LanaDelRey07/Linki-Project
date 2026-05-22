import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';

@Injectable()
export class AppointmentService {
  constructor(private prisma: PrismaService) {}

  async create(patientUserId: string, dto: CreateAppointmentDto) {
    const profile = await this.prisma.patientProfile.findUnique({
      where: { userId: patientUserId },
    });
    if (!profile) throw new NotFoundException('Perfil de paciente no encontrado');

    return this.prisma.appointment.create({
      data: {
        patientProfileId: profile.id,
        doctorProfileId: dto.doctorProfileId,
        fechaHora: new Date(dto.fechaHora),
        motivoConsulta: dto.motivoConsulta,
        tiempoMolestia: dto.tiempoMolestia as any,
        notasAdicionales: dto.notasAdicionales,
      },
    });
  }

  async findByPatient(patientUserId: string) {
    const profile = await this.prisma.patientProfile.findUnique({
      where: { userId: patientUserId },
    });
    if (!profile) throw new NotFoundException('Perfil de paciente no encontrado');

    return this.prisma.appointment.findMany({
      where: { patientProfileId: profile.id },
      include: { doctorProfile: true, encounter: true },
      orderBy: { fechaHora: 'desc' },
    });
  }

  async findByDoctor(doctorUserId: string) {
    const doctor = await this.prisma.doctorProfile.findUnique({
      where: { userId: doctorUserId },
    });
    if (!doctor) throw new NotFoundException('Perfil de médico no encontrado');

    return this.prisma.appointment.findMany({
      where: { doctorProfileId: doctor.id },
      include: { patientProfile: { include: { identification: true } } },
      orderBy: { fechaHora: 'desc' },
    });
  }

  async findOne(id: string) {
    const appointment = await this.prisma.appointment.findUnique({
      where: { id },
      include: {
        patientProfile: { include: { identification: true } },
        doctorProfile: true,
        encounter: true,
      },
    });
    if (!appointment) throw new NotFoundException('Cita no encontrada');
    return appointment;
  }
}
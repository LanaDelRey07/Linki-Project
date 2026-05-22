import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AccessService {
  constructor(private prisma: PrismaService) {}

  async grantAccess(patientUserId: string, doctorProfileId: string) {
    const profile = await this.prisma.patientProfile.findUnique({
      where: { userId: patientUserId },
    });
    if (!profile) throw new NotFoundException('Perfil de paciente no encontrado');

    const doctor = await this.prisma.doctorProfile.findUnique({
      where: { id: doctorProfileId },
    });
    if (!doctor) throw new NotFoundException('Médico no encontrado');

    return this.prisma.patientDoctorAccess.upsert({
      where: {
        patientProfileId_doctorProfileId: {
          patientProfileId: profile.id,
          doctorProfileId,
        },
      },
      update: { revokedAt: null, grantedBy: 'PATIENT' },
      create: {
        patientProfileId: profile.id,
        doctorProfileId,
        grantedBy: 'PATIENT',
      },
    });
  }

  async revokeAccess(patientUserId: string, doctorProfileId: string) {
    const profile = await this.prisma.patientProfile.findUnique({
      where: { userId: patientUserId },
    });
    if (!profile) throw new NotFoundException('Perfil de paciente no encontrado');

    const access = await this.prisma.patientDoctorAccess.findUnique({
      where: {
        patientProfileId_doctorProfileId: {
          patientProfileId: profile.id,
          doctorProfileId,
        },
      },
    });

    if (!access || access.revokedAt) {
      throw new NotFoundException('Acceso no encontrado o ya revocado');
    }

    return this.prisma.patientDoctorAccess.update({
      where: {
        patientProfileId_doctorProfileId: {
          patientProfileId: profile.id,
          doctorProfileId,
        },
      },
      data: { revokedAt: new Date() },
    });
  }

  async getGrantedAccessList(patientUserId: string) {
    const profile = await this.prisma.patientProfile.findUnique({
      where: { userId: patientUserId },
    });
    if (!profile) throw new NotFoundException('Perfil de paciente no encontrado');

    return this.prisma.patientDoctorAccess.findMany({
      where: { patientProfileId: profile.id, revokedAt: null },
      include: { doctorProfile: true },
    });
  }

  async checkAccess(patientProfileId: string, doctorProfileId: string): Promise<boolean> {
    const access = await this.prisma.patientDoctorAccess.findFirst({
      where: {
        patientProfileId,
        doctorProfileId,
        revokedAt: null,
      },
    });
    return !!access;
  }
}
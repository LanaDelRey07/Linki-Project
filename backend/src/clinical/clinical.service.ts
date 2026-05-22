import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ClinicalService {
  constructor(private prisma: PrismaService) {}

  async createEncounter(doctorUserId: string, dto: any) {
    const doctor = await this.prisma.doctorProfile.findUnique({
      where: { userId: doctorUserId },
    });
    if (!doctor) throw new ForbiddenException('Solo médicos pueden crear encuentros clínicos');

    const appointment = await this.prisma.appointment.findUnique({
      where: { id: dto.appointmentId },
      include: { patientProfile: true },
    });
    if (!appointment) throw new NotFoundException('Cita no encontrada');

    const access = await this.prisma.patientDoctorAccess.findFirst({
      where: {
        patientProfileId: appointment.patientProfileId,
        doctorProfileId: doctor.id,
        revokedAt: null,
      },
    });
    if (!access) throw new ForbiddenException('No tiene acceso a este paciente');

    const backgroundVersion = await this.prisma.patientBackgroundVersion.findFirst({
      where: { patientProfileId: appointment.patientProfileId },
      orderBy: { versionNumber: 'desc' },
    });

    const imc = dto.peso && dto.talla ? this.calculateIMC(dto.peso, dto.talla) : null;

    const encounterData: any = {
      appointmentId: dto.appointmentId,
      backgroundVersionId: backgroundVersion?.id,
      motivoConsultaValidado: dto.motivoConsultaValidado,
      historiaEnfermedadActual: dto.historiaEnfermedadActual,
      presionArterialSistolica: dto.presionArterialSistolica,
      presionArterialDiastolica: dto.presionArterialDiastolica,
      frecuenciaCardiaca: dto.frecuenciaCardiaca,
      frecuenciaRespiratoria: dto.frecuenciaRespiratoria,
      temperatura: dto.temperatura,
      saturacionOxigeno: dto.saturacionOxigeno,
      peso: dto.peso,
      talla: dto.talla,
      imc: imc?.value,
      imcClasificacion: imc?.classification,
      examenFisicoGeneral: dto.examenFisicoGeneral,
      examenFisicoSegmentario: dto.examenFisicoSegmentario,
      tipoDiagnostico: dto.tipoDiagnostico,
      observacionesDiagnosticas: dto.observacionesDiagnosticas,
      indicacionesNoFarmacologicas: dto.indicacionesNoFarmacologicas,
      proximaCitaSugerida: dto.proximaCitaSugerida,
      notasInternas: dto.notasInternas,
    };

    const encounter = await this.prisma.clinicalEncounter.create({
      data: encounterData,
    });

    if (dto.diagnoses && dto.diagnoses.length > 0) {
      await this.prisma.encounterDiagnosis.createMany({
        data: dto.diagnoses.map((d: any) => ({
          encounterId: encounter.id,
          cie10Code: d.cie10Code,
          esDiagnosticoPrincipal: d.esDiagnosticoPrincipal,
        })),
      });
    }

    if (dto.prescriptions && dto.prescriptions.length > 0) {
      await this.prisma.encounterPrescription.createMany({
        data: dto.prescriptions.map((p: any) => ({
          encounterId: encounter.id,
          ...p,
        })),
      });
    }

    if (dto.labOrders && dto.labOrders.length > 0) {
      await this.prisma.encounterLabOrder.createMany({
        data: dto.labOrders.map((l: any) => ({
          encounterId: encounter.id,
          ...l,
        })),
      });
    }

    if (dto.imagingOrders && dto.imagingOrders.length > 0) {
      await this.prisma.encounterImagingOrder.createMany({
        data: dto.imagingOrders.map((i: any) => ({
          encounterId: encounter.id,
          ...i,
        })),
      });
    }

    if (dto.referrals && dto.referrals.length > 0) {
      await this.prisma.encounterReferral.createMany({
        data: dto.referrals.map((r: any) => ({
          encounterId: encounter.id,
          ...r,
        })),
      });
    }

    return this.getEncounter(encounter.id);
  }

  async updateEncounter(doctorUserId: string, encounterId: string, dto: any) {
    const encounter = await this.prisma.clinicalEncounter.findUnique({
      where: { id: encounterId },
    });

    if (!encounter) throw new NotFoundException('Encuentro no encontrado');
    if (encounter.status === 'CLOSED') {
      throw new ForbiddenException(
        'No se puede modificar un encuentro clínico cerrado (RM 0090). Use una Nota Aclaratoria.',
      );
    }

    const imc = dto.peso && dto.talla ? this.calculateIMC(dto.peso, dto.talla) : null;

    const updateData: any = { ...dto };
    if (imc) {
      updateData.imc = imc.value;
      updateData.imcClasificacion = imc.classification;
    }
    delete updateData.diagnoses;
    delete updateData.prescriptions;
    delete updateData.labOrders;
    delete updateData.imagingOrders;
    delete updateData.referrals;

    await this.prisma.clinicalEncounter.update({
      where: { id: encounterId },
      data: updateData,
    });

    return this.getEncounter(encounterId);
  }

  async closeEncounter(doctorUserId: string, encounterId: string) {
    const encounter = await this.prisma.clinicalEncounter.findUnique({
      where: { id: encounterId },
    });

    if (!encounter) throw new NotFoundException('Encuentro no encontrado');
    if (encounter.status === 'CLOSED') {
      throw new BadRequestException('El encuentro ya está cerrado');
    }

    const doctor = await this.prisma.doctorProfile.findUnique({
      where: { userId: doctorUserId },
    });

    return this.prisma.clinicalEncounter.update({
      where: { id: encounterId },
      data: {
        status: 'CLOSED',
        closedAt: new Date(),
        closedById: doctor?.id,
      },
    });
  }

  async addAddendum(doctorUserId: string, encounterId: string, dto: any) {
    const encounter = await this.prisma.clinicalEncounter.findUnique({
      where: { id: encounterId },
    });

    if (!encounter) throw new NotFoundException('Encuentro no encontrado');
    if (encounter.status !== 'CLOSED') {
      throw new BadRequestException('Solo se pueden agregar notas aclaratorias a encuentros cerrados');
    }

    const doctor = await this.prisma.doctorProfile.findUnique({
      where: { userId: doctorUserId },
    });

    return this.prisma.clinicalAddendum.create({
      data: {
        encounterId,
        autorId: doctor?.id ?? doctorUserId,
        motivoAclaracion: dto.motivoAclaracion,
        contenido: dto.contenido,
      },
    });
  }

  async getEncounter(encounterId: string) {
    return this.prisma.clinicalEncounter.findUnique({
      where: { id: encounterId },
      include: {
        diagnoses: { include: { cie10Entry: true } },
        systemReviews: true,
        prescriptions: true,
        labOrders: true,
        imagingOrders: true,
        referrals: true,
        addendums: true,
      },
    });
  }

  async getPatientSummary(doctorUserId: string, patientProfileId: string) {
    const doctor = await this.prisma.doctorProfile.findUnique({
      where: { userId: doctorUserId },
    });
    if (!doctor) throw new ForbiddenException('Solo médicos pueden ver resúmenes clínicos');

    const access = await this.prisma.patientDoctorAccess.findFirst({
      where: {
        patientProfileId,
        doctorProfileId: doctor.id,
        revokedAt: null,
      },
    });
    if (!access) throw new ForbiddenException('No tiene acceso a este paciente');

    const [profile, encounters] = await Promise.all([
      this.prisma.patientProfile.findUnique({
        where: { id: patientProfileId },
        include: {
          identification: true,
          emergencyContacts: true,
          background: {
            include: {
              allergies: true,
              chronicConditions: true,
              medications: true,
              surgeries: true,
              hospitalizations: true,
              familyHistory: true,
            },
          },
        },
      }),
      this.prisma.clinicalEncounter.findMany({
        where: {
          appointment: { patientProfileId },
        },
        include: {
          diagnoses: { include: { cie10Entry: true } },
          prescriptions: true,
        },
        orderBy: { createdAt: 'desc' },
      }),
    ]);

    return { profile, encounters };
  }

  private calculateIMC(peso: number, tallaCm: number): { value: number; classification: string } {
    const tallaM = tallaCm / 100;
    const imc = peso / (tallaM * tallaM);
    let classification: string;

    if (imc < 18.5) classification = 'BAJO_PESO';
    else if (imc < 25) classification = 'NORMAL';
    else if (imc < 27) classification = 'SOBREPESO';
    else if (imc < 30) classification = 'OBESIDAD_I';
    else if (imc < 40) classification = 'OBESIDAD_II';
    else classification = 'OBESIDAD_III';

    return { value: Math.round(imc * 100) / 100, classification };
  }
}
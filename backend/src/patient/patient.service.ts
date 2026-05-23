import {
  Injectable,
  NotFoundException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { randomUUID } from 'node:crypto';

type RoleAssignment = { role: string };

interface PatientIdentificationRecord {
  id: string;
  patientProfileId: string;
  nombres: string;
  apellidoPaterno: string;
  apellidoMaterno?: string;
  tipoDocumento: string;
  numeroDocumento: string;
  extensionDepartamento?: string;
  fechaNacimiento: string;
  sexoBiologico: string;
  estadoCivil?: string;
  ocupacion?: string;
  telefonoPrincipal: string;
  telefonoSecundario?: string;
  correoElectronico: string;
  direccion: string;
  ciudad: string;
  departamento: string;
  createdAt: string;
  updatedAt: string;
}

interface EmergencyContactRecord {
  id: string;
  patientProfileId: string;
  nombreCompleto: string;
  parentesco: string;
  telefono: string;
  createdAt: string;
}

interface PatientBackgroundRecord {
  id: string;
  patientProfileId: string;
  tieneAlergias: string;
  tieneEnfermedadesCronicas: string;
  tomaMedicamentos: boolean;
  haSidoOperado: boolean;
  haSidoHospitalizado: boolean;
  tieneAntecedentesFamiliares: boolean;
  tabaquismo?: string;
  consumoAlcohol?: string;
  actividadFisica?: string;
  consumeOtrasSustancias?: boolean;
  detalleOtrasSustancias?: string;
  actualmenteEmbarazada?: string;
  gestas?: number;
  partos?: number;
  cesareas?: number;
  abortos?: number;
  fechaUltimaMenstruacion?: string;
  metodoAnticonceptivo?: string;
  otroMetodoAnticonceptivo?: string;
  createdAt: string;
  updatedAt: string;
  allergies: { id: string; tipoAlergia: string; detalle: string }[];
  chronicConditions: { id: string; tipo: string; detalleOtra?: string }[];
  medications: { id: string; nombre: string; dosis: string; frecuencia?: string }[];
  surgeries: { id: string; tipoCirugia: string; anoAproximado?: number }[];
  hospitalizations: { id: string; motivo: string; anoAproximado?: number }[];
  familyHistory: { id: string; parentesco: string; enfermedad: string; detalleOtra?: string }[];
}

interface PatientBackgroundVersionRecord {
  id: string;
  patientProfileId: string;
  versionNumber: number;
  snapshotData: any;
  changeDescription?: string;
  changedFields: string[];
  changedAt: string;
}

interface PatientProfileRecord {
  id: string;
  userId: string;
  onboardingCompleted: boolean;
  currentStep: number;
  completedSteps: number[];
  createdAt: string;
  updatedAt: string;
  identification?: PatientIdentificationRecord;
  emergencyContacts: EmergencyContactRecord[];
  background?: PatientBackgroundRecord;
  backgroundVersions: PatientBackgroundVersionRecord[];
}

@Injectable()
export class PatientService {
  private profiles = new Map<string, PatientProfileRecord>();
  private documentsIndex = new Map<string, string>();

  async getProfile(userId: string) {
    const profile = this.profiles.get(userId);
    if (!profile) {
      throw new NotFoundException('Perfil de paciente no encontrado');
    }
    return profile;
  }

  async createOrGetProfile(userId: string) {
    const existing = this.profiles.get(userId);
    if (existing) return existing;

    const now = new Date().toISOString();
    const profile: PatientProfileRecord = {
      id: randomUUID(),
      userId,
      onboardingCompleted: false,
      currentStep: 1,
      completedSteps: [],
      createdAt: now,
      updatedAt: now,
      emergencyContacts: [],
      backgroundVersions: [],
    };

    this.profiles.set(userId, profile);
    return profile;
  }

  async saveStep1(userId: string, dto: any) {
    const profile = await this.createOrGetProfile(userId);

    if (dto.tipoDocumento === 'CI' && !dto.extensionDepartamento) {
      throw new BadRequestException('La extensión departamental es obligatoria para CI');
    }

    const documentKey = `${dto.tipoDocumento}:${dto.numeroDocumento}`;
    const existingOwnerId = this.documentsIndex.get(documentKey);
    if (existingOwnerId && existingOwnerId !== userId) {
      throw new ConflictException('Este documento ya está registrado');
    }

    if (profile.identification) {
      const previousKey = `${profile.identification.tipoDocumento}:${profile.identification.numeroDocumento}`;
      if (previousKey !== documentKey) {
        this.documentsIndex.delete(previousKey);
      }
    }

    const now = new Date().toISOString();
    const identification: PatientIdentificationRecord = {
      id: profile.identification?.id ?? randomUUID(),
      patientProfileId: profile.id,
      nombres: dto.nombres,
      apellidoPaterno: dto.apellidoPaterno,
      apellidoMaterno: dto.apellidoMaterno,
      tipoDocumento: dto.tipoDocumento,
      numeroDocumento: dto.numeroDocumento,
      extensionDepartamento: dto.extensionDepartamento ?? undefined,
      fechaNacimiento: dto.fechaNacimiento,
      sexoBiologico: dto.sexoBiologico,
      estadoCivil: dto.estadoCivil,
      ocupacion: dto.ocupacion,
      telefonoPrincipal: dto.telefonoPrincipal,
      telefonoSecundario: dto.telefonoSecundario,
      correoElectronico: dto.correoElectronico,
      direccion: dto.direccion,
      ciudad: dto.ciudad,
      departamento: dto.departamento,
      createdAt: profile.identification?.createdAt ?? now,
      updatedAt: now,
    };

    profile.identification = identification;
    profile.updatedAt = now;
    this.documentsIndex.set(documentKey, userId);

    await this.updateStepProgress(profile.id, 1);

    return identification;
  }

  async saveStep2(userId: string, dto: any) {
    const profile = await this.getProfileOrFail(userId);

    const now = new Date().toISOString();
    profile.emergencyContacts = dto.contacts.map((contact: any) => ({
      id: randomUUID(),
      patientProfileId: profile.id,
      nombreCompleto: contact.nombreCompleto,
      parentesco: contact.parentesco,
      telefono: contact.telefono,
      createdAt: now,
    }));

    profile.updatedAt = now;
    await this.updateStepProgress(profile.id, 2);

    return profile.emergencyContacts;
  }

  async saveStep3(userId: string, dto: any) {
    const profile = await this.getProfileOrFail(userId);
    const now = new Date().toISOString();

    const background: PatientBackgroundRecord = profile.background ?? {
      id: randomUUID(),
      patientProfileId: profile.id,
      tieneAntecedentesFamiliares: false,
      allergies: [],
      chronicConditions: [],
      medications: [],
      surgeries: [],
      hospitalizations: [],
      familyHistory: [],
      createdAt: now,
      updatedAt: now,
      tieneAlergias: 'NO',
      tieneEnfermedadesCronicas: 'NO',
      tomaMedicamentos: false,
      haSidoOperado: false,
      haSidoHospitalizado: false,
    };

    background.tieneAlergias = dto.tieneAlergias;
    background.tieneEnfermedadesCronicas = dto.tieneEnfermedadesCronicas;
    background.tomaMedicamentos = dto.tomaMedicamentos;
    background.haSidoOperado = dto.haSidoOperado;
    background.haSidoHospitalizado = dto.haSidoHospitalizado ?? false;
    background.updatedAt = now;

    background.allergies = (dto.allergies ?? []).map((allergy: any) => ({
      id: randomUUID(),
      tipoAlergia: allergy.tipoAlergia,
      detalle: allergy.detalle,
    }));

    background.chronicConditions = (dto.chronicConditions ?? []).map((condition: any) => ({
      id: randomUUID(),
      tipo: condition.tipo,
      detalleOtra: condition.detalleOtra,
    }));

    background.medications = (dto.medications ?? []).map((medication: any) => ({
      id: randomUUID(),
      nombre: medication.nombre,
      dosis: medication.dosis,
      frecuencia: medication.frecuencia,
    }));

    background.surgeries = (dto.surgeries ?? []).map((surgery: any) => ({
      id: randomUUID(),
      tipoCirugia: surgery.tipoCirugia,
      anoAproximado: surgery.anoAproximado,
    }));

    background.hospitalizations = (dto.hospitalizations ?? []).map((hospitalization: any) => ({
      id: randomUUID(),
      motivo: hospitalization.motivo,
      anoAproximado: hospitalization.anoAproximado,
    }));

    profile.background = background;
    profile.updatedAt = now;

    await this.updateStepProgress(profile.id, 3);

    return background;
  }

  async saveStep4(userId: string, dto: any) {
    const profile = await this.getProfileOrFail(userId);
    const now = new Date().toISOString();

    const background = profile.background ?? {
      id: randomUUID(),
      patientProfileId: profile.id,
      tieneAlergias: 'NO',
      tieneEnfermedadesCronicas: 'NO',
      tomaMedicamentos: false,
      haSidoOperado: false,
      haSidoHospitalizado: false,
      tieneAntecedentesFamiliares: false,
      allergies: [],
      chronicConditions: [],
      medications: [],
      surgeries: [],
      hospitalizations: [],
      familyHistory: [],
      createdAt: now,
      updatedAt: now,
    };

    background.tieneAntecedentesFamiliares = dto.tieneAntecedentesFamiliares;
    background.familyHistory = (dto.familyHistory ?? []).map((entry: any) => ({
      id: randomUUID(),
      parentesco: entry.parentesco,
      enfermedad: entry.enfermedad,
      detalleOtra: entry.detalleOtra,
    }));
    background.updatedAt = now;

    profile.background = background;
    profile.updatedAt = now;

    await this.updateStepProgress(profile.id, 4);

    return background.familyHistory;
  }

  async saveStep5(userId: string, dto: any) {
    const profile = await this.getProfileOrFail(userId);
    const now = new Date().toISOString();

    const background = profile.background ?? {
      id: randomUUID(),
      patientProfileId: profile.id,
      tieneAlergias: 'NO',
      tieneEnfermedadesCronicas: 'NO',
      tomaMedicamentos: false,
      haSidoOperado: false,
      haSidoHospitalizado: false,
      tieneAntecedentesFamiliares: false,
      allergies: [],
      chronicConditions: [],
      medications: [],
      surgeries: [],
      hospitalizations: [],
      familyHistory: [],
      createdAt: now,
      updatedAt: now,
    };

    background.tabaquismo = dto.tabaquismo;
    background.consumoAlcohol = dto.consumoAlcohol;
    background.actividadFisica = dto.actividadFisica;
    background.consumeOtrasSustancias = dto.consumeOtrasSustancias ?? false;
    background.detalleOtrasSustancias = dto.detalleOtrasSustancias;
    background.updatedAt = now;

    profile.background = background;
    profile.updatedAt = now;

    await this.updateStepProgress(profile.id, 5);

    return {
      tabaquismo: background.tabaquismo,
      consumoAlcohol: background.consumoAlcohol,
      actividadFisica: background.actividadFisica,
    };
  }

  async saveStep6(userId: string, dto: any) {
    const profile = await this.getProfileOrFail(userId);

    if (profile.identification?.sexoBiologico !== 'FEMENINO') {
      return { message: 'Paso 6 solo aplica para pacientes femeninas' };
    }

    const now = new Date().toISOString();
    const background = profile.background ?? {
      id: randomUUID(),
      patientProfileId: profile.id,
      tieneAlergias: 'NO',
      tieneEnfermedadesCronicas: 'NO',
      tomaMedicamentos: false,
      haSidoOperado: false,
      haSidoHospitalizado: false,
      tieneAntecedentesFamiliares: false,
      allergies: [],
      chronicConditions: [],
      medications: [],
      surgeries: [],
      hospitalizations: [],
      familyHistory: [],
      createdAt: now,
      updatedAt: now,
    };

    background.actualmenteEmbarazada = dto.actualmenteEmbarazada;
    background.gestas = dto.gestas;
    background.partos = dto.partos;
    background.cesareas = dto.cesareas;
    background.abortos = dto.abortos;
    background.fechaUltimaMenstruacion = dto.fechaUltimaMenstruacion;
    background.metodoAnticonceptivo = dto.metodoAnticonceptivo;
    background.otroMetodoAnticonceptivo = dto.otroMetodoAnticonceptivo;
    background.updatedAt = now;

    profile.background = background;
    profile.updatedAt = now;

    await this.updateStepProgress(profile.id, 6);

    return {
      actualmenteEmbarazada: background.actualmenteEmbarazada,
      gestas: background.gestas,
      partos: background.partos,
      cesareas: background.cesareas,
      abortos: background.abortos,
      fechaUltimaMenstruacion: background.fechaUltimaMenstruacion,
      metodoAnticonceptivo: background.metodoAnticonceptivo,
      otroMetodoAnticonceptivo: background.otroMetodoAnticonceptivo,
    };
  }

  async getVersions(userId: string) {
    const profile = await this.getProfileOrFail(userId);
    return [...profile.backgroundVersions].sort((a, b) => b.versionNumber - a.versionNumber);
  }

  async getVersion(userId: string, versionNumber: number) {
    const profile = await this.getProfileOrFail(userId);
    return profile.backgroundVersions.find((version) => version.versionNumber === Number(versionNumber));
  }

  async createBackgroundSnapshot(userId: string, changeDescription?: string) {
    const profile = await this.getProfileOrFail(userId);
    const fullData = await this.getProfile(userId);
    const lastVersion = profile.backgroundVersions
      .slice()
      .sort((a, b) => b.versionNumber - a.versionNumber)[0];

    const versionNumber = (lastVersion?.versionNumber ?? 0) + 1;
    const changedFields = this.detectChanges(lastVersion?.snapshotData, fullData);
    const version: PatientBackgroundVersionRecord = {
      id: randomUUID(),
      patientProfileId: profile.id,
      versionNumber,
      snapshotData: fullData,
      changeDescription: changeDescription || `Actualización v${versionNumber}`,
      changedFields,
      changedAt: new Date().toISOString(),
    };

    profile.backgroundVersions.push(version);
    return version;
  }

  private detectChanges(previousData: any, currentData: any): string[] {
    if (!previousData) return ['INITIAL'];
    const changed: string[] = [];
    const keys = Object.keys(currentData || {});
    for (const key of keys) {
      if (JSON.stringify(previousData[key]) !== JSON.stringify(currentData[key])) {
        changed.push(key);
      }
    }
    return changed.length > 0 ? changed : ['NO_CHANGES'];
  }

  private async getProfileOrFail(userId: string) {
    const profile = this.profiles.get(userId);
    if (!profile) {
      throw new NotFoundException('Perfil de paciente no encontrado. Complete el paso 1 primero.');
    }
    return profile;
  }

  private async updateStepProgress(profileId: string, step: number) {
    const profile = [...this.profiles.values()].find((entry) => entry.id === profileId);
    if (!profile) return;

    const completedSteps = [...profile.completedSteps];
    if (!completedSteps.includes(step)) {
      completedSteps.push(step);
    }

    const onboardingCompleted = [1, 2, 3, 4, 5].every((s) => completedSteps.includes(s));
    profile.currentStep = step;
    profile.completedSteps = completedSteps;
    profile.onboardingCompleted = onboardingCompleted;
    profile.updatedAt = new Date().toISOString();

    if (onboardingCompleted) {
      await this.createBackgroundSnapshot(profile.userId, 'Onboarding completado');
    }
  }
}

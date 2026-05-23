"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PatientService = class PatientService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getProfile(userId) {
        const profile = await this.prisma.patientProfile.findUnique({
            where: { userId },
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
        });
        if (!profile) {
            throw new common_1.NotFoundException('Perfil de paciente no encontrado');
        }
        return profile;
    }
    async createOrGetProfile(userId) {
        let profile = await this.prisma.patientProfile.findUnique({
            where: { userId },
        });
        if (profile)
            return profile;
        return this.prisma.patientProfile.create({
            data: { userId },
        });
    }
    async saveStep1(userId, dto) {
        const profile = await this.createOrGetProfile(userId);
        if (dto.tipoDocumento === 'CI' && !dto.extensionDepartamento) {
            throw new common_1.BadRequestException('La extensión departamental es obligatoria para CI');
        }
        const existing = await this.prisma.patientIdentification.findUnique({
            where: { tipoDocumento_numeroDocumento: { tipoDocumento: dto.tipoDocumento, numeroDocumento: dto.numeroDocumento } },
        });
        if (existing) {
            const existingProfile = await this.prisma.patientIdentification.findUnique({
                where: { patientProfileId: profile.id },
            });
            if (existingProfile && existingProfile.id !== existing.id) {
                throw new common_1.ConflictException('Este documento ya está registrado');
            }
        }
        const data = {
            patientProfileId: profile.id,
            nombres: dto.nombres,
            apellidoPaterno: dto.apellidoPaterno,
            apellidoMaterno: dto.apellidoMaterno,
            tipoDocumento: dto.tipoDocumento,
            numeroDocumento: dto.numeroDocumento,
            extensionDepartamento: dto.extensionDepartamento ?? undefined,
            fechaNacimiento: new Date(dto.fechaNacimiento),
            sexoBiologico: dto.sexoBiologico,
            estadoCivil: dto.estadoCivil,
            ocupacion: dto.ocupacion,
            telefonoPrincipal: dto.telefonoPrincipal,
            telefonoSecundario: dto.telefonoSecundario,
            correoElectronico: dto.correoElectronico,
            direccion: dto.direccion,
            ciudad: dto.ciudad,
            departamento: dto.departamento,
        };
        const identification = await this.prisma.patientIdentification.upsert({
            where: { patientProfileId: profile.id },
            update: data,
            create: data,
        });
        await this.updateStepProgress(profile.id, 1);
        return identification;
    }
    async saveStep2(userId, dto) {
        const profile = await this.getProfileOrFail(userId);
        await this.prisma.emergencyContact.deleteMany({
            where: { patientProfileId: profile.id },
        });
        const contacts = await this.prisma.emergencyContact.createMany({
            data: dto.contacts.map((c) => ({
                patientProfileId: profile.id,
                ...c,
            })),
        });
        await this.updateStepProgress(profile.id, 2);
        return this.prisma.emergencyContact.findMany({
            where: { patientProfileId: profile.id },
        });
    }
    async saveStep3(userId, dto) {
        const profile = await this.getProfileOrFail(userId);
        const background = await this.prisma.patientBackground.upsert({
            where: { patientProfileId: profile.id },
            update: {
                tieneAlergias: dto.tieneAlergias,
                tieneEnfermedadesCronicas: dto.tieneEnfermedadesCronicas,
                tomaMedicamentos: dto.tomaMedicamentos,
                haSidoOperado: dto.haSidoOperado,
                haSidoHospitalizado: dto.haSidoHospitalizado ?? false,
            },
            create: {
                patientProfileId: profile.id,
                tieneAlergias: dto.tieneAlergias,
                tieneEnfermedadesCronicas: dto.tieneEnfermedadesCronicas,
                tomaMedicamentos: dto.tomaMedicamentos,
                haSidoOperado: dto.haSidoOperado,
                haSidoHospitalizado: dto.haSidoHospitalizado ?? false,
            },
        });
        await this.prisma.patientAllergy.deleteMany({ where: { backgroundId: background.id } });
        await this.prisma.patientChronicCondition.deleteMany({ where: { backgroundId: background.id } });
        await this.prisma.patientMedication.deleteMany({ where: { backgroundId: background.id } });
        await this.prisma.patientSurgery.deleteMany({ where: { backgroundId: background.id } });
        await this.prisma.patientHospitalization.deleteMany({ where: { backgroundId: background.id } });
        if (dto.allergies && dto.allergies.length > 0) {
            await this.prisma.patientAllergy.createMany({
                data: dto.allergies.map((a) => ({ backgroundId: background.id, ...a })),
            });
        }
        if (dto.chronicConditions && dto.chronicConditions.length > 0) {
            await this.prisma.patientChronicCondition.createMany({
                data: dto.chronicConditions.map((c) => ({ backgroundId: background.id, ...c })),
            });
        }
        if (dto.medications && dto.medications.length > 0) {
            await this.prisma.patientMedication.createMany({
                data: dto.medications.map((m) => ({ backgroundId: background.id, ...m })),
            });
        }
        if (dto.surgeries && dto.surgeries.length > 0) {
            await this.prisma.patientSurgery.createMany({
                data: dto.surgeries.map((s) => ({ backgroundId: background.id, ...s })),
            });
        }
        if (dto.hospitalizations && dto.hospitalizations.length > 0) {
            await this.prisma.patientHospitalization.createMany({
                data: dto.hospitalizations.map((h) => ({ backgroundId: background.id, ...h })),
            });
        }
        await this.updateStepProgress(profile.id, 3);
        return this.prisma.patientBackground.findUnique({
            where: { id: background.id },
            include: {
                allergies: true,
                chronicConditions: true,
                medications: true,
                surgeries: true,
                hospitalizations: true,
            },
        });
    }
    async saveStep4(userId, dto) {
        const profile = await this.getProfileOrFail(userId);
        let background = await this.prisma.patientBackground.findUnique({
            where: { patientProfileId: profile.id },
        });
        if (!background) {
            background = await this.prisma.patientBackground.create({
                data: {
                    patientProfileId: profile.id,
                    tieneAlergias: 'NO',
                    tieneEnfermedadesCronicas: 'NO',
                    tomaMedicamentos: false,
                    haSidoOperado: false,
                    tieneAntecedentesFamiliares: dto.tieneAntecedentesFamiliares,
                },
            });
        }
        else {
            await this.prisma.patientBackground.update({
                where: { id: background.id },
                data: { tieneAntecedentesFamiliares: dto.tieneAntecedentesFamiliares },
            });
        }
        await this.prisma.patientFamilyHistory.deleteMany({ where: { backgroundId: background.id } });
        if (dto.familyHistory && dto.familyHistory.length > 0) {
            await this.prisma.patientFamilyHistory.createMany({
                data: dto.familyHistory.map((f) => ({ backgroundId: background.id, ...f })),
            });
        }
        await this.updateStepProgress(profile.id, 4);
        return this.prisma.patientFamilyHistory.findMany({ where: { backgroundId: background.id } });
    }
    async saveStep5(userId, dto) {
        const profile = await this.getProfileOrFail(userId);
        let background = await this.prisma.patientBackground.findUnique({
            where: { patientProfileId: profile.id },
        });
        if (!background) {
            background = await this.prisma.patientBackground.create({
                data: {
                    patientProfileId: profile.id,
                    tieneAlergias: 'NO',
                    tieneEnfermedadesCronicas: 'NO',
                    tomaMedicamentos: false,
                    haSidoOperado: false,
                    tabaquismo: dto.tabaquismo,
                    consumoAlcohol: dto.consumoAlcohol,
                    actividadFisica: dto.actividadFisica,
                    consumeOtrasSustancias: dto.consumeOtrasSustancias ?? false,
                    detalleOtrasSustancias: dto.detalleOtrasSustancias,
                },
            });
        }
        else {
            await this.prisma.patientBackground.update({
                where: { id: background.id },
                data: {
                    tabaquismo: dto.tabaquismo,
                    consumoAlcohol: dto.consumoAlcohol,
                    actividadFisica: dto.actividadFisica,
                    consumeOtrasSustancias: dto.consumeOtrasSustancias,
                    detalleOtrasSustancias: dto.detalleOtrasSustancias,
                },
            });
        }
        await this.updateStepProgress(profile.id, 5);
        return { tabaquismo: dto.tabaquismo, consumoAlcohol: dto.consumoAlcohol, actividadFisica: dto.actividadFisica };
    }
    async saveStep6(userId, dto) {
        const profile = await this.getProfileOrFail(userId);
        const identification = await this.prisma.patientIdentification.findUnique({
            where: { patientProfileId: profile.id },
        });
        if (identification?.sexoBiologico !== 'FEMENINO') {
            return { message: 'Paso 6 solo aplica para pacientes femeninas' };
        }
        let background = await this.prisma.patientBackground.findUnique({
            where: { patientProfileId: profile.id },
        });
        const gynecoData = {
            actualmenteEmbarazada: dto.actualmenteEmbarazada,
            gestas: dto.gestas,
            partos: dto.partos,
            cesareas: dto.cesareas,
            abortos: dto.abortos,
            fechaUltimaMenstruacion: dto.fechaUltimaMenstruacion ? new Date(dto.fechaUltimaMenstruacion) : undefined,
            metodoAnticonceptivo: dto.metodoAnticonceptivo,
            otroMetodoAnticonceptivo: dto.otroMetodoAnticonceptivo,
        };
        if (!background) {
            background = await this.prisma.patientBackground.create({
                data: {
                    patientProfileId: profile.id,
                    tieneAlergias: 'NO',
                    tieneEnfermedadesCronicas: 'NO',
                    tomaMedicamentos: false,
                    haSidoOperado: false,
                    ...gynecoData,
                },
            });
        }
        else {
            await this.prisma.patientBackground.update({
                where: { id: background.id },
                data: gynecoData,
            });
        }
        await this.updateStepProgress(profile.id, 6);
        return gynecoData;
    }
    async getVersions(userId) {
        const profile = await this.getProfileOrFail(userId);
        return this.prisma.patientBackgroundVersion.findMany({
            where: { patientProfileId: profile.id },
            orderBy: { versionNumber: 'desc' },
        });
    }
    async getVersion(userId, versionNumber) {
        const profile = await this.getProfileOrFail(userId);
        return this.prisma.patientBackgroundVersion.findFirst({
            where: { patientProfileId: profile.id, versionNumber },
        });
    }
    async createBackgroundSnapshot(userId, changeDescription) {
        const profile = await this.getProfileOrFail(userId);
        const fullData = await this.getProfile(userId);
        const lastVersion = await this.prisma.patientBackgroundVersion.findFirst({
            where: { patientProfileId: profile.id },
            orderBy: { versionNumber: 'desc' },
        });
        const versionNumber = (lastVersion?.versionNumber ?? 0) + 1;
        const changedFields = this.detectChanges(lastVersion?.snapshotData, fullData);
        return this.prisma.patientBackgroundVersion.create({
            data: {
                patientProfileId: profile.id,
                versionNumber,
                snapshotData: fullData,
                changeDescription: changeDescription || `Actualización v${versionNumber}`,
                changedFields,
            },
        });
    }
    detectChanges(previousData, currentData) {
        if (!previousData)
            return ['INITIAL'];
        const changed = [];
        const keys = Object.keys(currentData);
        for (const key of keys) {
            if (JSON.stringify(previousData[key]) !== JSON.stringify(currentData[key])) {
                changed.push(key);
            }
        }
        return changed.length > 0 ? changed : ['NO_CHANGES'];
    }
    async getProfileOrFail(userId) {
        const profile = await this.prisma.patientProfile.findUnique({
            where: { userId },
        });
        if (!profile) {
            throw new common_1.NotFoundException('Perfil de paciente no encontrado. Complete el paso 1 primero.');
        }
        return profile;
    }
    async updateStepProgress(profileId, step) {
        const profile = await this.prisma.patientProfile.findUnique({
            where: { id: profileId },
        });
        const completedSteps = [...(profile?.completedSteps || [])];
        if (!completedSteps.includes(step)) {
            completedSteps.push(step);
        }
        const onboardingCompleted = [1, 2, 3, 4, 5].every((s) => completedSteps.includes(s));
        await this.prisma.patientProfile.update({
            where: { id: profileId },
            data: {
                currentStep: step,
                completedSteps,
                onboardingCompleted,
            },
        });
        if (onboardingCompleted) {
            const userId = profile?.userId;
            if (userId) {
                await this.createBackgroundSnapshot(userId, 'Onboarding completado');
            }
        }
    }
};
exports.PatientService = PatientService;
exports.PatientService = PatientService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PatientService);
//# sourceMappingURL=patient.service.js.map
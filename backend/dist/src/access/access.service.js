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
exports.AccessService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AccessService = class AccessService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async grantAccess(patientUserId, doctorProfileId) {
        const profile = await this.prisma.patientProfile.findUnique({
            where: { userId: patientUserId },
        });
        if (!profile)
            throw new common_1.NotFoundException('Perfil de paciente no encontrado');
        const doctor = await this.prisma.doctorProfile.findUnique({
            where: { id: doctorProfileId },
        });
        if (!doctor)
            throw new common_1.NotFoundException('Médico no encontrado');
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
    async revokeAccess(patientUserId, doctorProfileId) {
        const profile = await this.prisma.patientProfile.findUnique({
            where: { userId: patientUserId },
        });
        if (!profile)
            throw new common_1.NotFoundException('Perfil de paciente no encontrado');
        const access = await this.prisma.patientDoctorAccess.findUnique({
            where: {
                patientProfileId_doctorProfileId: {
                    patientProfileId: profile.id,
                    doctorProfileId,
                },
            },
        });
        if (!access || access.revokedAt) {
            throw new common_1.NotFoundException('Acceso no encontrado o ya revocado');
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
    async getGrantedAccessList(patientUserId) {
        const profile = await this.prisma.patientProfile.findUnique({
            where: { userId: patientUserId },
        });
        if (!profile)
            throw new common_1.NotFoundException('Perfil de paciente no encontrado');
        return this.prisma.patientDoctorAccess.findMany({
            where: { patientProfileId: profile.id, revokedAt: null },
            include: { doctorProfile: true },
        });
    }
    async checkAccess(patientProfileId, doctorProfileId) {
        const access = await this.prisma.patientDoctorAccess.findFirst({
            where: {
                patientProfileId,
                doctorProfileId,
                revokedAt: null,
            },
        });
        return !!access;
    }
};
exports.AccessService = AccessService;
exports.AccessService = AccessService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AccessService);
//# sourceMappingURL=access.service.js.map
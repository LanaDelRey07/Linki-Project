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
exports.AppointmentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AppointmentService = class AppointmentService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(patientUserId, dto) {
        const profile = await this.prisma.patientProfile.findUnique({
            where: { userId: patientUserId },
        });
        if (!profile)
            throw new common_1.NotFoundException('Perfil de paciente no encontrado');
        return this.prisma.appointment.create({
            data: {
                patientProfileId: profile.id,
                doctorProfileId: dto.doctorProfileId,
                fechaHora: new Date(dto.fechaHora),
                motivoConsulta: dto.motivoConsulta,
                tiempoMolestia: dto.tiempoMolestia,
                notasAdicionales: dto.notasAdicionales,
            },
        });
    }
    async findByPatient(patientUserId) {
        const profile = await this.prisma.patientProfile.findUnique({
            where: { userId: patientUserId },
        });
        if (!profile)
            throw new common_1.NotFoundException('Perfil de paciente no encontrado');
        return this.prisma.appointment.findMany({
            where: { patientProfileId: profile.id },
            include: { doctorProfile: true, encounter: true },
            orderBy: { fechaHora: 'desc' },
        });
    }
    async findByDoctor(doctorUserId) {
        const doctor = await this.prisma.doctorProfile.findUnique({
            where: { userId: doctorUserId },
        });
        if (!doctor)
            throw new common_1.NotFoundException('Perfil de médico no encontrado');
        return this.prisma.appointment.findMany({
            where: { doctorProfileId: doctor.id },
            include: { patientProfile: { include: { identification: true } } },
            orderBy: { fechaHora: 'desc' },
        });
    }
    async findOne(id) {
        const appointment = await this.prisma.appointment.findUnique({
            where: { id },
            include: {
                patientProfile: { include: { identification: true } },
                doctorProfile: true,
                encounter: true,
            },
        });
        if (!appointment)
            throw new common_1.NotFoundException('Cita no encontrada');
        return appointment;
    }
};
exports.AppointmentService = AppointmentService;
exports.AppointmentService = AppointmentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AppointmentService);
//# sourceMappingURL=appointment.service.js.map
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
exports.CatalogService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CatalogService = class CatalogService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async searchCie10(search, limit = 20) {
        return this.prisma.cie10Code.findMany({
            where: {
                isActive: true,
                OR: [
                    { code: { contains: search, mode: 'insensitive' } },
                    { descriptionEs: { contains: search, mode: 'insensitive' } },
                ],
            },
            take: limit,
            select: {
                id: true,
                code: true,
                descriptionEs: true,
                category: true,
            },
        });
    }
    async searchMedications(search, limit = 20) {
        return this.prisma.medicationsCatalog.findMany({
            where: {
                isActive: true,
                OR: [
                    { nombreGenerico: { contains: search, mode: 'insensitive' } },
                    { nombreComercial: { contains: search, mode: 'insensitive' } },
                ],
            },
            take: limit,
        });
    }
    async getCitiesByDepartment(department) {
        return this.prisma.boliviaCity.findMany({
            where: { departamento: department, isActive: true },
            orderBy: { nombre: 'asc' },
        });
    }
    async getAllDepartments() {
        return this.prisma.boliviaCity.findMany({
            where: { isActive: true },
            distinct: ['departamento'],
            select: { departamento: true },
            orderBy: { departamento: 'asc' },
        });
    }
    async getSpecialties() {
        return this.prisma.medicalSpecialty.findMany({
            where: { isActive: true },
            orderBy: { name: 'asc' },
        });
    }
    async searchLabStudies(search, limit = 20) {
        return this.prisma.labStudiesCatalog.findMany({
            where: {
                isActive: true,
                nombre: { contains: search, mode: 'insensitive' },
            },
            take: limit,
        });
    }
    async searchImagingStudies(search, limit = 20) {
        return this.prisma.imagingStudiesCatalog.findMany({
            where: {
                isActive: true,
                nombre: { contains: search, mode: 'insensitive' },
            },
            take: limit,
        });
    }
};
exports.CatalogService = CatalogService;
exports.CatalogService = CatalogService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CatalogService);
//# sourceMappingURL=catalog.service.js.map
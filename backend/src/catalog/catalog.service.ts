import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CatalogService {
  constructor(private prisma: PrismaService) {}

  async searchCie10(search: string, limit = 20) {
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

  async searchMedications(search: string, limit = 20) {
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

  async getCitiesByDepartment(department: string) {
    return this.prisma.boliviaCity.findMany({
      where: { departamento: department as any, isActive: true },
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

  async searchLabStudies(search: string, limit = 20) {
    return this.prisma.labStudiesCatalog.findMany({
      where: {
        isActive: true,
        nombre: { contains: search, mode: 'insensitive' },
      },
      take: limit,
    });
  }

  async searchImagingStudies(search: string, limit = 20) {
    return this.prisma.imagingStudiesCatalog.findMany({
      where: {
        isActive: true,
        nombre: { contains: search, mode: 'insensitive' },
      },
      take: limit,
    });
  }
}
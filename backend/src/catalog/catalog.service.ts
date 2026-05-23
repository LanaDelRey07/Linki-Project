import { Injectable } from '@nestjs/common';
import { cie10Codes } from '../../prisma/seed/cie10.seed';
import { medications } from '../../prisma/seed/medications.seed';
import { cities } from '../../prisma/seed/cities.seed';
import { labStudies, imagingStudies } from '../../prisma/seed/studies.seed';
import { specialties } from '../../prisma/seed/specialties.seed';

@Injectable()
export class CatalogService {
  async searchCie10(search: string, limit = 20) {
    const query = (search || '').toLowerCase();
    return cie10Codes
      .filter((entry) =>
        entry.code.toLowerCase().includes(query)
        || entry.descriptionEs.toLowerCase().includes(query),
      )
      .slice(0, limit)
      .map((entry) => ({
        id: entry.id,
        code: entry.code,
        descriptionEs: entry.descriptionEs,
        category: entry.category ?? null,
      }));
  }

  async searchMedications(search: string, limit = 20) {
    const query = (search || '').toLowerCase();
    return medications
      .filter((entry) =>
        entry.nombreGenerico.toLowerCase().includes(query)
        || (entry.nombreComercial ?? '').toLowerCase().includes(query),
      )
      .slice(0, limit);
  }

  async getCitiesByDepartment(department: string) {
    return cities
      .filter((entry) => entry.departamento === department)
      .slice()
      .sort((a, b) => a.nombre.localeCompare(b.nombre));
  }

  async getAllDepartments() {
    const seen = new Set<string>();
    cities.forEach((entry) => seen.add(entry.departamento));
    return Array.from(seen)
      .sort((a, b) => a.localeCompare(b))
      .map((departamento) => ({ departamento }));
  }

  async getSpecialties() {
    return specialties
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  async searchLabStudies(search: string, limit = 20) {
    const query = (search || '').toLowerCase();
    return labStudies
      .filter((entry) => entry.nombre.toLowerCase().includes(query))
      .slice(0, limit);
  }

  async searchImagingStudies(search: string, limit = 20) {
    const query = (search || '').toLowerCase();
    return imagingStudies
      .filter((entry) => entry.nombre.toLowerCase().includes(query))
      .slice(0, limit);
  }
}

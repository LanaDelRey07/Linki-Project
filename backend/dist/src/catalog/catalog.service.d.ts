import { PrismaService } from '../prisma/prisma.service';
export declare class CatalogService {
    private prisma;
    constructor(prisma: PrismaService);
    searchCie10(search: string, limit?: number): Promise<{
        id: string;
        code: string;
        descriptionEs: string;
        category: string | null;
    }[]>;
    searchMedications(search: string, limit?: number): Promise<{
        id: string;
        isActive: boolean;
        nombreGenerico: string;
        nombreComercial: string | null;
        presentacion: string | null;
        viaAdministracion: string | null;
        createdAt: Date;
    }[]>;
    getCitiesByDepartment(department: string): Promise<{
        id: string;
        isActive: boolean;
        departamento: import(".prisma/client").$Enums.Department;
        nombre: string;
    }[]>;
    getAllDepartments(): Promise<{
        departamento: import(".prisma/client").$Enums.Department;
    }[]>;
    getSpecialties(): Promise<{
        id: string;
        isActive: boolean;
        name: string;
        description: string | null;
    }[]>;
    searchLabStudies(search: string, limit?: number): Promise<{
        id: string;
        isActive: boolean;
        nombre: string;
        categoria: string | null;
    }[]>;
    searchImagingStudies(search: string, limit?: number): Promise<{
        id: string;
        isActive: boolean;
        nombre: string;
        categoria: string | null;
    }[]>;
}

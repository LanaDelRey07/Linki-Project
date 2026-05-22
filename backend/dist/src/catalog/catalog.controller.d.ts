import { CatalogService } from './catalog.service';
export declare class CatalogController {
    private catalogService;
    constructor(catalogService: CatalogService);
    searchCie10(search: string, limit?: string): Promise<{
        id: string;
        code: string;
        descriptionEs: string;
        category: string | null;
    }[]>;
    searchMedications(search: string, limit?: string): Promise<{
        id: string;
        isActive: boolean;
        nombreGenerico: string;
        nombreComercial: string | null;
        presentacion: string | null;
        viaAdministracion: string | null;
        createdAt: Date;
    }[]>;
    getDepartments(): Promise<{
        departamento: import(".prisma/client").$Enums.Department;
    }[]>;
    getCitiesByDepartment(department: string): Promise<{
        id: string;
        isActive: boolean;
        departamento: import(".prisma/client").$Enums.Department;
        nombre: string;
    }[]>;
    getSpecialties(): Promise<{
        id: string;
        isActive: boolean;
        name: string;
        description: string | null;
    }[]>;
    searchLabStudies(search: string): Promise<{
        id: string;
        isActive: boolean;
        nombre: string;
        categoria: string | null;
    }[]>;
    searchImagingStudies(search: string): Promise<{
        id: string;
        isActive: boolean;
        nombre: string;
        categoria: string | null;
    }[]>;
}

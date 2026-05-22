import { PrismaService } from '../prisma/prisma.service';
export declare class AccessService {
    private prisma;
    constructor(prisma: PrismaService);
    grantAccess(patientUserId: string, doctorProfileId: string): Promise<{
        id: string;
        patientProfileId: string;
        doctorProfileId: string;
        grantedAt: Date;
        revokedAt: Date | null;
        grantedBy: string;
        canViewBackground: boolean;
        canViewEncounters: boolean;
    }>;
    revokeAccess(patientUserId: string, doctorProfileId: string): Promise<{
        id: string;
        patientProfileId: string;
        doctorProfileId: string;
        grantedAt: Date;
        revokedAt: Date | null;
        grantedBy: string;
        canViewBackground: boolean;
        canViewEncounters: boolean;
    }>;
    getGrantedAccessList(patientUserId: string): Promise<({
        doctorProfile: {
            id: string;
            createdAt: Date;
            departamento: import(".prisma/client").$Enums.Department;
            updatedAt: Date;
            userId: string;
            nombres: string;
            apellidoPaterno: string;
            apellidoMaterno: string | null;
            ciudad: string;
            numeroRegistro: string;
            especialidadPrincipal: string;
            especialidadSecundaria: string | null;
            direccionConsultorio: string | null;
            aceptaConsultaDomicilio: boolean;
            aceptaTelemedicina: boolean;
            activo: boolean;
        };
    } & {
        id: string;
        patientProfileId: string;
        doctorProfileId: string;
        grantedAt: Date;
        revokedAt: Date | null;
        grantedBy: string;
        canViewBackground: boolean;
        canViewEncounters: boolean;
    })[]>;
    checkAccess(patientProfileId: string, doctorProfileId: string): Promise<boolean>;
}

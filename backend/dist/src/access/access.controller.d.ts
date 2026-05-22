import { AccessService } from './access.service';
import { GrantAccessDto } from './dto/access.dto';
export declare class AccessController {
    private accessService;
    constructor(accessService: AccessService);
    grantAccess(userId: string, dto: GrantAccessDto): Promise<{
        id: string;
        patientProfileId: string;
        doctorProfileId: string;
        grantedAt: Date;
        revokedAt: Date | null;
        grantedBy: string;
        canViewBackground: boolean;
        canViewEncounters: boolean;
    }>;
    revokeAccess(userId: string, doctorProfileId: string): Promise<{
        id: string;
        patientProfileId: string;
        doctorProfileId: string;
        grantedAt: Date;
        revokedAt: Date | null;
        grantedBy: string;
        canViewBackground: boolean;
        canViewEncounters: boolean;
    }>;
    getGrantedAccessList(userId: string): Promise<({
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
}

import { PrismaService } from '../prisma/prisma.service';
export declare class PatientService {
    private prisma;
    constructor(prisma: PrismaService);
    getProfile(userId: string): Promise<{
        identification: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            patientProfileId: string;
            nombres: string;
            apellidoPaterno: string;
            apellidoMaterno: string | null;
            tipoDocumento: import(".prisma/client").$Enums.DocumentType;
            numeroDocumento: string;
            extensionDepartamento: import(".prisma/client").$Enums.Department | null;
            fechaNacimiento: Date;
            sexoBiologico: import(".prisma/client").$Enums.SexBiological;
            genero: import(".prisma/client").$Enums.GenderIdentity | null;
            estadoCivil: import(".prisma/client").$Enums.MaritalStatus | null;
            ocupacion: string | null;
            telefonoPrincipal: string;
            telefonoSecundario: string | null;
            correoElectronico: string;
            direccion: string;
            ciudad: string;
            departamento: import(".prisma/client").$Enums.Department;
        } | null;
        emergencyContacts: {
            id: string;
            createdAt: Date;
            patientProfileId: string;
            nombreCompleto: string;
            parentesco: import(".prisma/client").$Enums.Kinship;
            telefono: string;
        }[];
        background: ({
            allergies: {
                id: string;
                createdAt: Date;
                backgroundId: string;
                tipoAlergia: import(".prisma/client").$Enums.AllergyType;
                detalle: string;
            }[];
            chronicConditions: {
                id: string;
                createdAt: Date;
                backgroundId: string;
                tipo: import(".prisma/client").$Enums.ChronicConditionType;
                detalleOtra: string | null;
            }[];
            medications: {
                id: string;
                createdAt: Date;
                backgroundId: string;
                nombre: string;
                dosis: string;
                frecuencia: string | null;
            }[];
            surgeries: {
                id: string;
                createdAt: Date;
                backgroundId: string;
                tipoCirugia: string;
                anoAproximado: number | null;
            }[];
            hospitalizations: {
                id: string;
                createdAt: Date;
                backgroundId: string;
                anoAproximado: number | null;
                motivo: string;
            }[];
            familyHistory: {
                id: string;
                createdAt: Date;
                parentesco: import(".prisma/client").$Enums.FamilyRelation;
                backgroundId: string;
                detalleOtra: string | null;
                enfermedad: import(".prisma/client").$Enums.FamilyDisease;
            }[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            patientProfileId: string;
            tieneAlergias: import(".prisma/client").$Enums.BackgroundToggle;
            tieneEnfermedadesCronicas: import(".prisma/client").$Enums.BackgroundToggle;
            tomaMedicamentos: boolean;
            haSidoOperado: boolean;
            haSidoHospitalizado: boolean;
            tieneAntecedentesFamiliares: boolean;
            tabaquismo: import(".prisma/client").$Enums.SmokingStatus | null;
            consumoAlcohol: import(".prisma/client").$Enums.AlcoholConsumption | null;
            actividadFisica: import(".prisma/client").$Enums.PhysicalActivity | null;
            consumeOtrasSustancias: boolean;
            detalleOtrasSustancias: string | null;
            actualmenteEmbarazada: import(".prisma/client").$Enums.PregnancyStatus | null;
            gestas: number | null;
            partos: number | null;
            cesareas: number | null;
            abortos: number | null;
            fechaUltimaMenstruacion: Date | null;
            metodoAnticonceptivo: import(".prisma/client").$Enums.ContraceptiveMethod | null;
            otroMetodoAnticonceptivo: string | null;
        }) | null;
    } & {
        id: string;
        userId: string;
        onboardingCompleted: boolean;
        currentStep: number;
        completedSteps: number[];
        createdAt: Date;
        updatedAt: Date;
    }>;
    createOrGetProfile(userId: string): Promise<{
        id: string;
        userId: string;
        onboardingCompleted: boolean;
        currentStep: number;
        completedSteps: number[];
        createdAt: Date;
        updatedAt: Date;
    }>;
    saveStep1(userId: string, dto: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        patientProfileId: string;
        nombres: string;
        apellidoPaterno: string;
        apellidoMaterno: string | null;
        tipoDocumento: import(".prisma/client").$Enums.DocumentType;
        numeroDocumento: string;
        extensionDepartamento: import(".prisma/client").$Enums.Department | null;
        fechaNacimiento: Date;
        sexoBiologico: import(".prisma/client").$Enums.SexBiological;
        genero: import(".prisma/client").$Enums.GenderIdentity | null;
        estadoCivil: import(".prisma/client").$Enums.MaritalStatus | null;
        ocupacion: string | null;
        telefonoPrincipal: string;
        telefonoSecundario: string | null;
        correoElectronico: string;
        direccion: string;
        ciudad: string;
        departamento: import(".prisma/client").$Enums.Department;
    }>;
    saveStep2(userId: string, dto: any): Promise<{
        id: string;
        createdAt: Date;
        patientProfileId: string;
        nombreCompleto: string;
        parentesco: import(".prisma/client").$Enums.Kinship;
        telefono: string;
    }[]>;
    saveStep3(userId: string, dto: any): Promise<({
        allergies: {
            id: string;
            createdAt: Date;
            backgroundId: string;
            tipoAlergia: import(".prisma/client").$Enums.AllergyType;
            detalle: string;
        }[];
        chronicConditions: {
            id: string;
            createdAt: Date;
            backgroundId: string;
            tipo: import(".prisma/client").$Enums.ChronicConditionType;
            detalleOtra: string | null;
        }[];
        medications: {
            id: string;
            createdAt: Date;
            backgroundId: string;
            nombre: string;
            dosis: string;
            frecuencia: string | null;
        }[];
        surgeries: {
            id: string;
            createdAt: Date;
            backgroundId: string;
            tipoCirugia: string;
            anoAproximado: number | null;
        }[];
        hospitalizations: {
            id: string;
            createdAt: Date;
            backgroundId: string;
            anoAproximado: number | null;
            motivo: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        patientProfileId: string;
        tieneAlergias: import(".prisma/client").$Enums.BackgroundToggle;
        tieneEnfermedadesCronicas: import(".prisma/client").$Enums.BackgroundToggle;
        tomaMedicamentos: boolean;
        haSidoOperado: boolean;
        haSidoHospitalizado: boolean;
        tieneAntecedentesFamiliares: boolean;
        tabaquismo: import(".prisma/client").$Enums.SmokingStatus | null;
        consumoAlcohol: import(".prisma/client").$Enums.AlcoholConsumption | null;
        actividadFisica: import(".prisma/client").$Enums.PhysicalActivity | null;
        consumeOtrasSustancias: boolean;
        detalleOtrasSustancias: string | null;
        actualmenteEmbarazada: import(".prisma/client").$Enums.PregnancyStatus | null;
        gestas: number | null;
        partos: number | null;
        cesareas: number | null;
        abortos: number | null;
        fechaUltimaMenstruacion: Date | null;
        metodoAnticonceptivo: import(".prisma/client").$Enums.ContraceptiveMethod | null;
        otroMetodoAnticonceptivo: string | null;
    }) | null>;
    saveStep4(userId: string, dto: any): Promise<{
        id: string;
        createdAt: Date;
        parentesco: import(".prisma/client").$Enums.FamilyRelation;
        backgroundId: string;
        detalleOtra: string | null;
        enfermedad: import(".prisma/client").$Enums.FamilyDisease;
    }[]>;
    saveStep5(userId: string, dto: any): Promise<{
        tabaquismo: any;
        consumoAlcohol: any;
        actividadFisica: any;
    }>;
    saveStep6(userId: string, dto: any): Promise<any>;
    getVersions(userId: string): Promise<{
        id: string;
        patientProfileId: string;
        versionNumber: number;
        snapshotData: import("@prisma/client/runtime/library").JsonValue;
        changeDescription: string | null;
        changedFields: string[];
        changedAt: Date;
    }[]>;
    getVersion(userId: string, versionNumber: number): Promise<{
        id: string;
        patientProfileId: string;
        versionNumber: number;
        snapshotData: import("@prisma/client/runtime/library").JsonValue;
        changeDescription: string | null;
        changedFields: string[];
        changedAt: Date;
    } | null>;
    createBackgroundSnapshot(userId: string, changeDescription?: string): Promise<{
        id: string;
        patientProfileId: string;
        versionNumber: number;
        snapshotData: import("@prisma/client/runtime/library").JsonValue;
        changeDescription: string | null;
        changedFields: string[];
        changedAt: Date;
    }>;
    private detectChanges;
    private getProfileOrFail;
    private updateStepProgress;
}

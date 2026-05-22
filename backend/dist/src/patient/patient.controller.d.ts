import { PatientService } from './patient.service';
import { CreateStep1Dto } from './dto/step-1.dto';
import { CreateStep2Dto } from './dto/step-2.dto';
import { CreateStep3Dto } from './dto/step-3.dto';
import { CreateStep4Dto } from './dto/step-4.dto';
import { CreateStep5Dto } from './dto/step-5.dto';
import { CreateStep6Dto } from './dto/step-6.dto';
export declare class PatientController {
    private patientService;
    constructor(patientService: PatientService);
    getProfile(userId: string): Promise<{
        identification: {
            id: string;
            createdAt: Date;
            departamento: import(".prisma/client").$Enums.Department;
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
                detalleOtra: string | null;
                tipo: import(".prisma/client").$Enums.ChronicConditionType;
            }[];
            medications: {
                id: string;
                createdAt: Date;
                nombre: string;
                backgroundId: string;
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
                enfermedad: import(".prisma/client").$Enums.FamilyDisease;
                detalleOtra: string | null;
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
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        onboardingCompleted: boolean;
        currentStep: number;
        completedSteps: number[];
    }>;
    saveStep1(userId: string, dto: CreateStep1Dto): Promise<{
        id: string;
        createdAt: Date;
        departamento: import(".prisma/client").$Enums.Department;
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
    }>;
    updateStep1(userId: string, dto: CreateStep1Dto): Promise<{
        id: string;
        createdAt: Date;
        departamento: import(".prisma/client").$Enums.Department;
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
    }>;
    saveStep2(userId: string, dto: CreateStep2Dto): Promise<{
        id: string;
        createdAt: Date;
        patientProfileId: string;
        nombreCompleto: string;
        parentesco: import(".prisma/client").$Enums.Kinship;
        telefono: string;
    }[]>;
    saveStep3(userId: string, dto: CreateStep3Dto): Promise<({
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
            detalleOtra: string | null;
            tipo: import(".prisma/client").$Enums.ChronicConditionType;
        }[];
        medications: {
            id: string;
            createdAt: Date;
            nombre: string;
            backgroundId: string;
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
    updateStep3(userId: string, dto: CreateStep3Dto): Promise<({
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
            detalleOtra: string | null;
            tipo: import(".prisma/client").$Enums.ChronicConditionType;
        }[];
        medications: {
            id: string;
            createdAt: Date;
            nombre: string;
            backgroundId: string;
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
    saveStep4(userId: string, dto: CreateStep4Dto): Promise<{
        id: string;
        createdAt: Date;
        parentesco: import(".prisma/client").$Enums.FamilyRelation;
        backgroundId: string;
        enfermedad: import(".prisma/client").$Enums.FamilyDisease;
        detalleOtra: string | null;
    }[]>;
    saveStep5(userId: string, dto: CreateStep5Dto): Promise<{
        tabaquismo: any;
        consumoAlcohol: any;
        actividadFisica: any;
    }>;
    saveStep6(userId: string, dto: CreateStep6Dto): Promise<any>;
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
}

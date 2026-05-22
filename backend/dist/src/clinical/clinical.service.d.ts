import { PrismaService } from '../prisma/prisma.service';
export declare class ClinicalService {
    private prisma;
    constructor(prisma: PrismaService);
    createEncounter(doctorUserId: string, dto: any): Promise<({
        diagnoses: ({
            cie10Entry: {
                id: string;
                code: string;
                descriptionEs: string;
                descriptionEn: string | null;
                category: string | null;
                isActive: boolean;
            };
        } & {
            id: string;
            cie10Code: string;
            encounterId: string;
            esDiagnosticoPrincipal: boolean;
        })[];
        addendums: {
            id: string;
            createdAt: Date;
            motivoAclaracion: string;
            contenido: string;
            encounterId: string;
            autorId: string;
        }[];
        systemReviews: {
            id: string;
            detalle: string | null;
            encounterId: string;
            sistema: import(".prisma/client").$Enums.SystemReview;
        }[];
        prescriptions: {
            id: string;
            presentacion: import(".prisma/client").$Enums.Presentation;
            viaAdministracion: import(".prisma/client").$Enums.AdministrationRoute;
            createdAt: Date;
            dosis: string;
            frecuencia: import(".prisma/client").$Enums.MedicationFrequency;
            encounterId: string;
            medicamento: string;
            duracion: string;
            instruccionesEspeciales: string | null;
        }[];
        labOrders: {
            id: string;
            createdAt: Date;
            encounterId: string;
            estudio: string;
        }[];
        imagingOrders: {
            id: string;
            createdAt: Date;
            encounterId: string;
            estudio: string;
        }[];
        referrals: {
            id: string;
            createdAt: Date;
            motivo: string | null;
            encounterId: string;
            especialidadDestino: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.EncounterStatus;
        closedAt: Date | null;
        motivoConsultaValidado: string;
        historiaEnfermedadActual: string;
        presionArterialSistolica: number | null;
        presionArterialDiastolica: number | null;
        frecuenciaCardiaca: number | null;
        frecuenciaRespiratoria: number | null;
        temperatura: import("@prisma/client/runtime/library").Decimal | null;
        saturacionOxigeno: import("@prisma/client/runtime/library").Decimal | null;
        peso: import("@prisma/client/runtime/library").Decimal | null;
        talla: number | null;
        imc: import("@prisma/client/runtime/library").Decimal | null;
        imcClasificacion: import(".prisma/client").$Enums.BMIClassification | null;
        examenFisicoGeneral: string;
        examenFisicoSegmentario: string | null;
        tipoDiagnostico: import(".prisma/client").$Enums.DiagnosisType;
        observacionesDiagnosticas: string | null;
        indicacionesNoFarmacologicas: string | null;
        proximaCitaSugerida: import(".prisma/client").$Enums.FollowUpInterval | null;
        notasInternas: string | null;
        appointmentId: string;
        backgroundVersionId: string | null;
        closedById: string | null;
    }) | null>;
    updateEncounter(doctorUserId: string, encounterId: string, dto: any): Promise<({
        diagnoses: ({
            cie10Entry: {
                id: string;
                code: string;
                descriptionEs: string;
                descriptionEn: string | null;
                category: string | null;
                isActive: boolean;
            };
        } & {
            id: string;
            cie10Code: string;
            encounterId: string;
            esDiagnosticoPrincipal: boolean;
        })[];
        addendums: {
            id: string;
            createdAt: Date;
            motivoAclaracion: string;
            contenido: string;
            encounterId: string;
            autorId: string;
        }[];
        systemReviews: {
            id: string;
            detalle: string | null;
            encounterId: string;
            sistema: import(".prisma/client").$Enums.SystemReview;
        }[];
        prescriptions: {
            id: string;
            presentacion: import(".prisma/client").$Enums.Presentation;
            viaAdministracion: import(".prisma/client").$Enums.AdministrationRoute;
            createdAt: Date;
            dosis: string;
            frecuencia: import(".prisma/client").$Enums.MedicationFrequency;
            encounterId: string;
            medicamento: string;
            duracion: string;
            instruccionesEspeciales: string | null;
        }[];
        labOrders: {
            id: string;
            createdAt: Date;
            encounterId: string;
            estudio: string;
        }[];
        imagingOrders: {
            id: string;
            createdAt: Date;
            encounterId: string;
            estudio: string;
        }[];
        referrals: {
            id: string;
            createdAt: Date;
            motivo: string | null;
            encounterId: string;
            especialidadDestino: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.EncounterStatus;
        closedAt: Date | null;
        motivoConsultaValidado: string;
        historiaEnfermedadActual: string;
        presionArterialSistolica: number | null;
        presionArterialDiastolica: number | null;
        frecuenciaCardiaca: number | null;
        frecuenciaRespiratoria: number | null;
        temperatura: import("@prisma/client/runtime/library").Decimal | null;
        saturacionOxigeno: import("@prisma/client/runtime/library").Decimal | null;
        peso: import("@prisma/client/runtime/library").Decimal | null;
        talla: number | null;
        imc: import("@prisma/client/runtime/library").Decimal | null;
        imcClasificacion: import(".prisma/client").$Enums.BMIClassification | null;
        examenFisicoGeneral: string;
        examenFisicoSegmentario: string | null;
        tipoDiagnostico: import(".prisma/client").$Enums.DiagnosisType;
        observacionesDiagnosticas: string | null;
        indicacionesNoFarmacologicas: string | null;
        proximaCitaSugerida: import(".prisma/client").$Enums.FollowUpInterval | null;
        notasInternas: string | null;
        appointmentId: string;
        backgroundVersionId: string | null;
        closedById: string | null;
    }) | null>;
    closeEncounter(doctorUserId: string, encounterId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.EncounterStatus;
        closedAt: Date | null;
        motivoConsultaValidado: string;
        historiaEnfermedadActual: string;
        presionArterialSistolica: number | null;
        presionArterialDiastolica: number | null;
        frecuenciaCardiaca: number | null;
        frecuenciaRespiratoria: number | null;
        temperatura: import("@prisma/client/runtime/library").Decimal | null;
        saturacionOxigeno: import("@prisma/client/runtime/library").Decimal | null;
        peso: import("@prisma/client/runtime/library").Decimal | null;
        talla: number | null;
        imc: import("@prisma/client/runtime/library").Decimal | null;
        imcClasificacion: import(".prisma/client").$Enums.BMIClassification | null;
        examenFisicoGeneral: string;
        examenFisicoSegmentario: string | null;
        tipoDiagnostico: import(".prisma/client").$Enums.DiagnosisType;
        observacionesDiagnosticas: string | null;
        indicacionesNoFarmacologicas: string | null;
        proximaCitaSugerida: import(".prisma/client").$Enums.FollowUpInterval | null;
        notasInternas: string | null;
        appointmentId: string;
        backgroundVersionId: string | null;
        closedById: string | null;
    }>;
    addAddendum(doctorUserId: string, encounterId: string, dto: any): Promise<{
        id: string;
        createdAt: Date;
        motivoAclaracion: string;
        contenido: string;
        encounterId: string;
        autorId: string;
    }>;
    getEncounter(encounterId: string): Promise<({
        diagnoses: ({
            cie10Entry: {
                id: string;
                code: string;
                descriptionEs: string;
                descriptionEn: string | null;
                category: string | null;
                isActive: boolean;
            };
        } & {
            id: string;
            cie10Code: string;
            encounterId: string;
            esDiagnosticoPrincipal: boolean;
        })[];
        addendums: {
            id: string;
            createdAt: Date;
            motivoAclaracion: string;
            contenido: string;
            encounterId: string;
            autorId: string;
        }[];
        systemReviews: {
            id: string;
            detalle: string | null;
            encounterId: string;
            sistema: import(".prisma/client").$Enums.SystemReview;
        }[];
        prescriptions: {
            id: string;
            presentacion: import(".prisma/client").$Enums.Presentation;
            viaAdministracion: import(".prisma/client").$Enums.AdministrationRoute;
            createdAt: Date;
            dosis: string;
            frecuencia: import(".prisma/client").$Enums.MedicationFrequency;
            encounterId: string;
            medicamento: string;
            duracion: string;
            instruccionesEspeciales: string | null;
        }[];
        labOrders: {
            id: string;
            createdAt: Date;
            encounterId: string;
            estudio: string;
        }[];
        imagingOrders: {
            id: string;
            createdAt: Date;
            encounterId: string;
            estudio: string;
        }[];
        referrals: {
            id: string;
            createdAt: Date;
            motivo: string | null;
            encounterId: string;
            especialidadDestino: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import(".prisma/client").$Enums.EncounterStatus;
        closedAt: Date | null;
        motivoConsultaValidado: string;
        historiaEnfermedadActual: string;
        presionArterialSistolica: number | null;
        presionArterialDiastolica: number | null;
        frecuenciaCardiaca: number | null;
        frecuenciaRespiratoria: number | null;
        temperatura: import("@prisma/client/runtime/library").Decimal | null;
        saturacionOxigeno: import("@prisma/client/runtime/library").Decimal | null;
        peso: import("@prisma/client/runtime/library").Decimal | null;
        talla: number | null;
        imc: import("@prisma/client/runtime/library").Decimal | null;
        imcClasificacion: import(".prisma/client").$Enums.BMIClassification | null;
        examenFisicoGeneral: string;
        examenFisicoSegmentario: string | null;
        tipoDiagnostico: import(".prisma/client").$Enums.DiagnosisType;
        observacionesDiagnosticas: string | null;
        indicacionesNoFarmacologicas: string | null;
        proximaCitaSugerida: import(".prisma/client").$Enums.FollowUpInterval | null;
        notasInternas: string | null;
        appointmentId: string;
        backgroundVersionId: string | null;
        closedById: string | null;
    }) | null>;
    getPatientSummary(doctorUserId: string, patientProfileId: string): Promise<{
        profile: ({
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
        }) | null;
        encounters: ({
            diagnoses: ({
                cie10Entry: {
                    id: string;
                    code: string;
                    descriptionEs: string;
                    descriptionEn: string | null;
                    category: string | null;
                    isActive: boolean;
                };
            } & {
                id: string;
                cie10Code: string;
                encounterId: string;
                esDiagnosticoPrincipal: boolean;
            })[];
            prescriptions: {
                id: string;
                presentacion: import(".prisma/client").$Enums.Presentation;
                viaAdministracion: import(".prisma/client").$Enums.AdministrationRoute;
                createdAt: Date;
                dosis: string;
                frecuencia: import(".prisma/client").$Enums.MedicationFrequency;
                encounterId: string;
                medicamento: string;
                duracion: string;
                instruccionesEspeciales: string | null;
            }[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: import(".prisma/client").$Enums.EncounterStatus;
            closedAt: Date | null;
            motivoConsultaValidado: string;
            historiaEnfermedadActual: string;
            presionArterialSistolica: number | null;
            presionArterialDiastolica: number | null;
            frecuenciaCardiaca: number | null;
            frecuenciaRespiratoria: number | null;
            temperatura: import("@prisma/client/runtime/library").Decimal | null;
            saturacionOxigeno: import("@prisma/client/runtime/library").Decimal | null;
            peso: import("@prisma/client/runtime/library").Decimal | null;
            talla: number | null;
            imc: import("@prisma/client/runtime/library").Decimal | null;
            imcClasificacion: import(".prisma/client").$Enums.BMIClassification | null;
            examenFisicoGeneral: string;
            examenFisicoSegmentario: string | null;
            tipoDiagnostico: import(".prisma/client").$Enums.DiagnosisType;
            observacionesDiagnosticas: string | null;
            indicacionesNoFarmacologicas: string | null;
            proximaCitaSugerida: import(".prisma/client").$Enums.FollowUpInterval | null;
            notasInternas: string | null;
            appointmentId: string;
            backgroundVersionId: string | null;
            closedById: string | null;
        })[];
    }>;
    private calculateIMC;
}

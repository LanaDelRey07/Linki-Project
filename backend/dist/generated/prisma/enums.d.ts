export declare const UserRole: {
    readonly PATIENT: "PATIENT";
    readonly DOCTOR: "DOCTOR";
    readonly ADMIN: "ADMIN";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const DocumentType: {
    readonly CI: "CI";
    readonly PASAPORTE: "PASAPORTE";
    readonly CARNET_EXTRANJERIA: "CARNET_EXTRANJERIA";
};
export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType];
export declare const Department: {
    readonly LP: "LP";
    readonly CB: "CB";
    readonly SC: "SC";
    readonly OR: "OR";
    readonly PT: "PT";
    readonly TJ: "TJ";
    readonly CH: "CH";
    readonly BE: "BE";
    readonly PA: "PA";
};
export type Department = (typeof Department)[keyof typeof Department];
export declare const SexBiological: {
    readonly MASCULINO: "MASCULINO";
    readonly FEMENINO: "FEMENINO";
    readonly INTERSEXUAL: "INTERSEXUAL";
};
export type SexBiological = (typeof SexBiological)[keyof typeof SexBiological];
export declare const GenderIdentity: {
    readonly MASCULINO: "MASCULINO";
    readonly FEMENINO: "FEMENINO";
    readonly NO_BINARIO: "NO_BINARIO";
    readonly PREFIERO_NO_DECIR: "PREFIERO_NO_DECIR";
};
export type GenderIdentity = (typeof GenderIdentity)[keyof typeof GenderIdentity];
export declare const MaritalStatus: {
    readonly SOLTERO: "SOLTERO";
    readonly CASADO: "CASADO";
    readonly UNION_LIBRE: "UNION_LIBRE";
    readonly DIVORCIADO: "DIVORCIADO";
    readonly VIUDO: "VIUDO";
};
export type MaritalStatus = (typeof MaritalStatus)[keyof typeof MaritalStatus];
export declare const Kinship: {
    readonly PADRE: "PADRE";
    readonly MADRE: "MADRE";
    readonly CONYUGE: "CONYUGE";
    readonly HIJO: "HIJO";
    readonly HERMANO: "HERMANO";
    readonly OTRO: "OTRO";
};
export type Kinship = (typeof Kinship)[keyof typeof Kinship];
export declare const AllergyType: {
    readonly MEDICAMENTOS: "MEDICAMENTOS";
    readonly ALIMENTOS: "ALIMENTOS";
    readonly AMBIENTALES: "AMBIENTALES";
    readonly LATEX: "LATEX";
    readonly OTRAS: "OTRAS";
};
export type AllergyType = (typeof AllergyType)[keyof typeof AllergyType];
export declare const ChronicConditionType: {
    readonly DIABETES_TIPO_1: "DIABETES_TIPO_1";
    readonly DIABETES_TIPO_2: "DIABETES_TIPO_2";
    readonly HIPERTENSION: "HIPERTENSION";
    readonly ASMA: "ASMA";
    readonly HIPOTIROIDISMO: "HIPOTIROIDISMO";
    readonly EPILEPSIA: "EPILEPSIA";
    readonly CARDIOPATIA: "CARDIOPATIA";
    readonly OTRA: "OTRA";
};
export type ChronicConditionType = (typeof ChronicConditionType)[keyof typeof ChronicConditionType];
export declare const SmokingStatus: {
    readonly NO: "NO";
    readonly OCASIONAL: "OCASIONAL";
    readonly DIARIO: "DIARIO";
    readonly EX_FUMADOR: "EX_FUMADOR";
};
export type SmokingStatus = (typeof SmokingStatus)[keyof typeof SmokingStatus];
export declare const AlcoholConsumption: {
    readonly NO: "NO";
    readonly OCASIONAL: "OCASIONAL";
    readonly REGULAR: "REGULAR";
    readonly EX_BEBEDOR: "EX_BEBEDOR";
};
export type AlcoholConsumption = (typeof AlcoholConsumption)[keyof typeof AlcoholConsumption];
export declare const PhysicalActivity: {
    readonly SEDENTARIO: "SEDENTARIO";
    readonly UNO_DOS_VECES: "UNO_DOS_VECES";
    readonly TRES_CINCO_VECES: "TRES_CINCO_VECES";
    readonly DIARIO: "DIARIO";
};
export type PhysicalActivity = (typeof PhysicalActivity)[keyof typeof PhysicalActivity];
export declare const ContraceptiveMethod: {
    readonly NINGUNO: "NINGUNO";
    readonly HORMONAL_ORAL: "HORMONAL_ORAL";
    readonly DIU: "DIU";
    readonly IMPLANTE: "IMPLANTE";
    readonly PRESERVATIVO: "PRESERVATIVO";
    readonly OTRO: "OTRO";
};
export type ContraceptiveMethod = (typeof ContraceptiveMethod)[keyof typeof ContraceptiveMethod];
export declare const PregnancyStatus: {
    readonly SI: "SI";
    readonly NO: "NO";
    readonly NO_SE: "NO_SE";
};
export type PregnancyStatus = (typeof PregnancyStatus)[keyof typeof PregnancyStatus];
export declare const BackgroundToggle: {
    readonly SI: "SI";
    readonly NO: "NO";
    readonly NO_SE: "NO_SE";
};
export type BackgroundToggle = (typeof BackgroundToggle)[keyof typeof BackgroundToggle];
export declare const FamilyRelation: {
    readonly PADRE: "PADRE";
    readonly MADRE: "MADRE";
    readonly HERMANO: "HERMANO";
};
export type FamilyRelation = (typeof FamilyRelation)[keyof typeof FamilyRelation];
export declare const FamilyDisease: {
    readonly DIABETES: "DIABETES";
    readonly HTA: "HTA";
    readonly CANCER: "CANCER";
    readonly CARDIOPATIA: "CARDIOPATIA";
    readonly ACV: "ACV";
    readonly ENFERMEDAD_MENTAL: "ENFERMEDAD_MENTAL";
    readonly OTRA: "OTRA";
};
export type FamilyDisease = (typeof FamilyDisease)[keyof typeof FamilyDisease];
export declare const AppointmentStatus: {
    readonly PENDIENTE: "PENDIENTE";
    readonly CONFIRMADA: "CONFIRMADA";
    readonly EN_CURSO: "EN_CURSO";
    readonly COMPLETADA: "COMPLETADA";
    readonly CANCELADA: "CANCELADA";
    readonly NO_ASISTIO: "NO_ASISTIO";
};
export type AppointmentStatus = (typeof AppointmentStatus)[keyof typeof AppointmentStatus];
export declare const SymptomDuration: {
    readonly HOY: "HOY";
    readonly DIAS: "DIAS";
    readonly SEMANAS: "SEMANAS";
    readonly MESES: "MESES";
    readonly ANIOS: "ANIOS";
    readonly NO_APLICA: "NO_APLICA";
};
export type SymptomDuration = (typeof SymptomDuration)[keyof typeof SymptomDuration];
export declare const EncounterStatus: {
    readonly DRAFT: "DRAFT";
    readonly CLOSED: "CLOSED";
};
export type EncounterStatus = (typeof EncounterStatus)[keyof typeof EncounterStatus];
export declare const DiagnosisType: {
    readonly PRESUNTIVO: "PRESUNTIVO";
    readonly DEFINITIVO: "DEFINITIVO";
};
export type DiagnosisType = (typeof DiagnosisType)[keyof typeof DiagnosisType];
export declare const BMIClassification: {
    readonly BAJO_PESO: "BAJO_PESO";
    readonly NORMAL: "NORMAL";
    readonly SOBREPESO: "SOBREPESO";
    readonly OBESIDAD_I: "OBESIDAD_I";
    readonly OBESIDAD_II: "OBESIDAD_II";
    readonly OBESIDAD_III: "OBESIDAD_III";
};
export type BMIClassification = (typeof BMIClassification)[keyof typeof BMIClassification];
export declare const Presentation: {
    readonly TABLETA: "TABLETA";
    readonly CAPSULA: "CAPSULA";
    readonly JARABE: "JARABE";
    readonly AMPOLLA: "AMPOLLA";
    readonly CREMA: "CREMA";
    readonly GOTAS: "GOTAS";
    readonly SUSPENSION: "SUSPENSION";
    readonly OTRO: "OTRO";
};
export type Presentation = (typeof Presentation)[keyof typeof Presentation];
export declare const AdministrationRoute: {
    readonly ORAL: "ORAL";
    readonly INTRAMUSCULAR: "INTRAMUSCULAR";
    readonly INTRAVENOSA: "INTRAVENOSA";
    readonly TOPICA: "TOPICA";
    readonly SUBLINGUAL: "SUBLINGUAL";
    readonly INHALATORIA: "INHALATORIA";
    readonly RECTAL: "RECTAL";
    readonly OTRA: "OTRA";
};
export type AdministrationRoute = (typeof AdministrationRoute)[keyof typeof AdministrationRoute];
export declare const MedicationFrequency: {
    readonly CADA_4H: "CADA_4H";
    readonly CADA_6H: "CADA_6H";
    readonly CADA_8H: "CADA_8H";
    readonly CADA_12H: "CADA_12H";
    readonly CADA_24H: "CADA_24H";
    readonly DOSIS_UNICA: "DOSIS_UNICA";
    readonly PRN: "PRN";
    readonly OTRA: "OTRA";
};
export type MedicationFrequency = (typeof MedicationFrequency)[keyof typeof MedicationFrequency];
export declare const FollowUpInterval: {
    readonly UNA_SEMANA: "UNA_SEMANA";
    readonly DOS_SEMANAS: "DOS_SEMANAS";
    readonly UN_MES: "UN_MES";
    readonly TRES_MESES: "TRES_MESES";
    readonly SEIS_MESES: "SEIS_MESES";
    readonly A_DEMANDA: "A_DEMANDA";
};
export type FollowUpInterval = (typeof FollowUpInterval)[keyof typeof FollowUpInterval];
export declare const SystemReview: {
    readonly CARDIOVASCULAR: "CARDIOVASCULAR";
    readonly RESPIRATORIO: "RESPIRATORIO";
    readonly GASTROINTESTINAL: "GASTROINTESTINAL";
    readonly NEUROLOGICO: "NEUROLOGICO";
    readonly MUSCULOESQUELETICO: "MUSCULOESQUELETICO";
    readonly GENITOURINARIO: "GENITOURINARIO";
    readonly PIEL: "PIEL";
    readonly ENDOCRINO: "ENDOCRINO";
    readonly PSIQUIATRICO: "PSIQUIATRICO";
};
export type SystemReview = (typeof SystemReview)[keyof typeof SystemReview];

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemReview = exports.FollowUpInterval = exports.MedicationFrequency = exports.AdministrationRoute = exports.Presentation = exports.BMIClassification = exports.DiagnosisType = exports.EncounterStatus = exports.SymptomDuration = exports.AppointmentStatus = exports.FamilyDisease = exports.FamilyRelation = exports.BackgroundToggle = exports.PregnancyStatus = exports.ContraceptiveMethod = exports.PhysicalActivity = exports.AlcoholConsumption = exports.SmokingStatus = exports.ChronicConditionType = exports.AllergyType = exports.Kinship = exports.MaritalStatus = exports.GenderIdentity = exports.SexBiological = exports.Department = exports.DocumentType = exports.UserRole = void 0;
exports.UserRole = {
    PATIENT: 'PATIENT',
    DOCTOR: 'DOCTOR',
    ADMIN: 'ADMIN'
};
exports.DocumentType = {
    CI: 'CI',
    PASAPORTE: 'PASAPORTE',
    CARNET_EXTRANJERIA: 'CARNET_EXTRANJERIA'
};
exports.Department = {
    LP: 'LP',
    CB: 'CB',
    SC: 'SC',
    OR: 'OR',
    PT: 'PT',
    TJ: 'TJ',
    CH: 'CH',
    BE: 'BE',
    PA: 'PA'
};
exports.SexBiological = {
    MASCULINO: 'MASCULINO',
    FEMENINO: 'FEMENINO',
    INTERSEXUAL: 'INTERSEXUAL'
};
exports.GenderIdentity = {
    MASCULINO: 'MASCULINO',
    FEMENINO: 'FEMENINO',
    NO_BINARIO: 'NO_BINARIO',
    PREFIERO_NO_DECIR: 'PREFIERO_NO_DECIR'
};
exports.MaritalStatus = {
    SOLTERO: 'SOLTERO',
    CASADO: 'CASADO',
    UNION_LIBRE: 'UNION_LIBRE',
    DIVORCIADO: 'DIVORCIADO',
    VIUDO: 'VIUDO'
};
exports.Kinship = {
    PADRE: 'PADRE',
    MADRE: 'MADRE',
    CONYUGE: 'CONYUGE',
    HIJO: 'HIJO',
    HERMANO: 'HERMANO',
    OTRO: 'OTRO'
};
exports.AllergyType = {
    MEDICAMENTOS: 'MEDICAMENTOS',
    ALIMENTOS: 'ALIMENTOS',
    AMBIENTALES: 'AMBIENTALES',
    LATEX: 'LATEX',
    OTRAS: 'OTRAS'
};
exports.ChronicConditionType = {
    DIABETES_TIPO_1: 'DIABETES_TIPO_1',
    DIABETES_TIPO_2: 'DIABETES_TIPO_2',
    HIPERTENSION: 'HIPERTENSION',
    ASMA: 'ASMA',
    HIPOTIROIDISMO: 'HIPOTIROIDISMO',
    EPILEPSIA: 'EPILEPSIA',
    CARDIOPATIA: 'CARDIOPATIA',
    OTRA: 'OTRA'
};
exports.SmokingStatus = {
    NO: 'NO',
    OCASIONAL: 'OCASIONAL',
    DIARIO: 'DIARIO',
    EX_FUMADOR: 'EX_FUMADOR'
};
exports.AlcoholConsumption = {
    NO: 'NO',
    OCASIONAL: 'OCASIONAL',
    REGULAR: 'REGULAR',
    EX_BEBEDOR: 'EX_BEBEDOR'
};
exports.PhysicalActivity = {
    SEDENTARIO: 'SEDENTARIO',
    UNO_DOS_VECES: 'UNO_DOS_VECES',
    TRES_CINCO_VECES: 'TRES_CINCO_VECES',
    DIARIO: 'DIARIO'
};
exports.ContraceptiveMethod = {
    NINGUNO: 'NINGUNO',
    HORMONAL_ORAL: 'HORMONAL_ORAL',
    DIU: 'DIU',
    IMPLANTE: 'IMPLANTE',
    PRESERVATIVO: 'PRESERVATIVO',
    OTRO: 'OTRO'
};
exports.PregnancyStatus = {
    SI: 'SI',
    NO: 'NO',
    NO_SE: 'NO_SE'
};
exports.BackgroundToggle = {
    SI: 'SI',
    NO: 'NO',
    NO_SE: 'NO_SE'
};
exports.FamilyRelation = {
    PADRE: 'PADRE',
    MADRE: 'MADRE',
    HERMANO: 'HERMANO'
};
exports.FamilyDisease = {
    DIABETES: 'DIABETES',
    HTA: 'HTA',
    CANCER: 'CANCER',
    CARDIOPATIA: 'CARDIOPATIA',
    ACV: 'ACV',
    ENFERMEDAD_MENTAL: 'ENFERMEDAD_MENTAL',
    OTRA: 'OTRA'
};
exports.AppointmentStatus = {
    PENDIENTE: 'PENDIENTE',
    CONFIRMADA: 'CONFIRMADA',
    EN_CURSO: 'EN_CURSO',
    COMPLETADA: 'COMPLETADA',
    CANCELADA: 'CANCELADA',
    NO_ASISTIO: 'NO_ASISTIO'
};
exports.SymptomDuration = {
    HOY: 'HOY',
    DIAS: 'DIAS',
    SEMANAS: 'SEMANAS',
    MESES: 'MESES',
    ANIOS: 'ANIOS',
    NO_APLICA: 'NO_APLICA'
};
exports.EncounterStatus = {
    DRAFT: 'DRAFT',
    CLOSED: 'CLOSED'
};
exports.DiagnosisType = {
    PRESUNTIVO: 'PRESUNTIVO',
    DEFINITIVO: 'DEFINITIVO'
};
exports.BMIClassification = {
    BAJO_PESO: 'BAJO_PESO',
    NORMAL: 'NORMAL',
    SOBREPESO: 'SOBREPESO',
    OBESIDAD_I: 'OBESIDAD_I',
    OBESIDAD_II: 'OBESIDAD_II',
    OBESIDAD_III: 'OBESIDAD_III'
};
exports.Presentation = {
    TABLETA: 'TABLETA',
    CAPSULA: 'CAPSULA',
    JARABE: 'JARABE',
    AMPOLLA: 'AMPOLLA',
    CREMA: 'CREMA',
    GOTAS: 'GOTAS',
    SUSPENSION: 'SUSPENSION',
    OTRO: 'OTRO'
};
exports.AdministrationRoute = {
    ORAL: 'ORAL',
    INTRAMUSCULAR: 'INTRAMUSCULAR',
    INTRAVENOSA: 'INTRAVENOSA',
    TOPICA: 'TOPICA',
    SUBLINGUAL: 'SUBLINGUAL',
    INHALATORIA: 'INHALATORIA',
    RECTAL: 'RECTAL',
    OTRA: 'OTRA'
};
exports.MedicationFrequency = {
    CADA_4H: 'CADA_4H',
    CADA_6H: 'CADA_6H',
    CADA_8H: 'CADA_8H',
    CADA_12H: 'CADA_12H',
    CADA_24H: 'CADA_24H',
    DOSIS_UNICA: 'DOSIS_UNICA',
    PRN: 'PRN',
    OTRA: 'OTRA'
};
exports.FollowUpInterval = {
    UNA_SEMANA: 'UNA_SEMANA',
    DOS_SEMANAS: 'DOS_SEMANAS',
    UN_MES: 'UN_MES',
    TRES_MESES: 'TRES_MESES',
    SEIS_MESES: 'SEIS_MESES',
    A_DEMANDA: 'A_DEMANDA'
};
exports.SystemReview = {
    CARDIOVASCULAR: 'CARDIOVASCULAR',
    RESPIRATORIO: 'RESPIRATORIO',
    GASTROINTESTINAL: 'GASTROINTESTINAL',
    NEUROLOGICO: 'NEUROLOGICO',
    MUSCULOESQUELETICO: 'MUSCULOESQUELETICO',
    GENITOURINARIO: 'GENITOURINARIO',
    PIEL: 'PIEL',
    ENDOCRINO: 'ENDOCRINO',
    PSIQUIATRICO: 'PSIQUIATRICO'
};
//# sourceMappingURL=enums.js.map
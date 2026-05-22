"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortOrder = exports.PatientDoctorAccessScalarFieldEnum = exports.BoliviaCityScalarFieldEnum = exports.ImagingStudiesCatalogScalarFieldEnum = exports.LabStudiesCatalogScalarFieldEnum = exports.MedicationsCatalogScalarFieldEnum = exports.Cie10CodeScalarFieldEnum = exports.EncounterReferralScalarFieldEnum = exports.EncounterImagingOrderScalarFieldEnum = exports.EncounterLabOrderScalarFieldEnum = exports.EncounterPrescriptionScalarFieldEnum = exports.EncounterSystemReviewScalarFieldEnum = exports.EncounterDiagnosisScalarFieldEnum = exports.ClinicalAddendumScalarFieldEnum = exports.ClinicalEncounterScalarFieldEnum = exports.AppointmentScalarFieldEnum = exports.MedicalSpecialtyScalarFieldEnum = exports.DoctorProfileScalarFieldEnum = exports.PatientBackgroundVersionScalarFieldEnum = exports.PatientFamilyHistoryScalarFieldEnum = exports.PatientHospitalizationScalarFieldEnum = exports.PatientSurgeryScalarFieldEnum = exports.PatientMedicationScalarFieldEnum = exports.PatientChronicConditionScalarFieldEnum = exports.PatientAllergyScalarFieldEnum = exports.PatientBackgroundScalarFieldEnum = exports.EmergencyContactScalarFieldEnum = exports.PatientIdentificationScalarFieldEnum = exports.PatientProfileScalarFieldEnum = exports.UserRoleAssignmentScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
exports.defineExtension = exports.JsonNullValueFilter = exports.NullsOrder = exports.QueryMode = exports.JsonNullValueInput = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.8.0",
    engine: "3c6e192761c0362d496ed980de936e2f3cebcd3a"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    UserRoleAssignment: 'UserRoleAssignment',
    PatientProfile: 'PatientProfile',
    PatientIdentification: 'PatientIdentification',
    EmergencyContact: 'EmergencyContact',
    PatientBackground: 'PatientBackground',
    PatientAllergy: 'PatientAllergy',
    PatientChronicCondition: 'PatientChronicCondition',
    PatientMedication: 'PatientMedication',
    PatientSurgery: 'PatientSurgery',
    PatientHospitalization: 'PatientHospitalization',
    PatientFamilyHistory: 'PatientFamilyHistory',
    PatientBackgroundVersion: 'PatientBackgroundVersion',
    DoctorProfile: 'DoctorProfile',
    MedicalSpecialty: 'MedicalSpecialty',
    Appointment: 'Appointment',
    ClinicalEncounter: 'ClinicalEncounter',
    ClinicalAddendum: 'ClinicalAddendum',
    EncounterDiagnosis: 'EncounterDiagnosis',
    EncounterSystemReview: 'EncounterSystemReview',
    EncounterPrescription: 'EncounterPrescription',
    EncounterLabOrder: 'EncounterLabOrder',
    EncounterImagingOrder: 'EncounterImagingOrder',
    EncounterReferral: 'EncounterReferral',
    Cie10Code: 'Cie10Code',
    MedicationsCatalog: 'MedicationsCatalog',
    LabStudiesCatalog: 'LabStudiesCatalog',
    ImagingStudiesCatalog: 'ImagingStudiesCatalog',
    BoliviaCity: 'BoliviaCity',
    PatientDoctorAccess: 'PatientDoctorAccess'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    emailVerifiedAt: 'emailVerifiedAt',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.UserRoleAssignmentScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    role: 'role',
    assignedAt: 'assignedAt'
};
exports.PatientProfileScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    onboardingCompleted: 'onboardingCompleted',
    currentStep: 'currentStep',
    completedSteps: 'completedSteps',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PatientIdentificationScalarFieldEnum = {
    id: 'id',
    patientProfileId: 'patientProfileId',
    nombres: 'nombres',
    apellidoPaterno: 'apellidoPaterno',
    apellidoMaterno: 'apellidoMaterno',
    tipoDocumento: 'tipoDocumento',
    numeroDocumento: 'numeroDocumento',
    extensionDepartamento: 'extensionDepartamento',
    fechaNacimiento: 'fechaNacimiento',
    sexoBiologico: 'sexoBiologico',
    genero: 'genero',
    estadoCivil: 'estadoCivil',
    ocupacion: 'ocupacion',
    telefonoPrincipal: 'telefonoPrincipal',
    telefonoSecundario: 'telefonoSecundario',
    correoElectronico: 'correoElectronico',
    direccion: 'direccion',
    ciudad: 'ciudad',
    departamento: 'departamento',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.EmergencyContactScalarFieldEnum = {
    id: 'id',
    patientProfileId: 'patientProfileId',
    nombreCompleto: 'nombreCompleto',
    parentesco: 'parentesco',
    telefono: 'telefono',
    createdAt: 'createdAt'
};
exports.PatientBackgroundScalarFieldEnum = {
    id: 'id',
    patientProfileId: 'patientProfileId',
    tieneAlergias: 'tieneAlergias',
    tieneEnfermedadesCronicas: 'tieneEnfermedadesCronicas',
    tomaMedicamentos: 'tomaMedicamentos',
    haSidoOperado: 'haSidoOperado',
    haSidoHospitalizado: 'haSidoHospitalizado',
    tieneAntecedentesFamiliares: 'tieneAntecedentesFamiliares',
    tabaquismo: 'tabaquismo',
    consumoAlcohol: 'consumoAlcohol',
    actividadFisica: 'actividadFisica',
    consumeOtrasSustancias: 'consumeOtrasSustancias',
    detalleOtrasSustancias: 'detalleOtrasSustancias',
    actualmenteEmbarazada: 'actualmenteEmbarazada',
    gestas: 'gestas',
    partos: 'partos',
    cesareas: 'cesareas',
    abortos: 'abortos',
    fechaUltimaMenstruacion: 'fechaUltimaMenstruacion',
    metodoAnticonceptivo: 'metodoAnticonceptivo',
    otroMetodoAnticonceptivo: 'otroMetodoAnticonceptivo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PatientAllergyScalarFieldEnum = {
    id: 'id',
    backgroundId: 'backgroundId',
    tipoAlergia: 'tipoAlergia',
    detalle: 'detalle',
    createdAt: 'createdAt'
};
exports.PatientChronicConditionScalarFieldEnum = {
    id: 'id',
    backgroundId: 'backgroundId',
    tipo: 'tipo',
    detalleOtra: 'detalleOtra',
    createdAt: 'createdAt'
};
exports.PatientMedicationScalarFieldEnum = {
    id: 'id',
    backgroundId: 'backgroundId',
    nombre: 'nombre',
    dosis: 'dosis',
    frecuencia: 'frecuencia',
    createdAt: 'createdAt'
};
exports.PatientSurgeryScalarFieldEnum = {
    id: 'id',
    backgroundId: 'backgroundId',
    tipoCirugia: 'tipoCirugia',
    anoAproximado: 'anoAproximado',
    createdAt: 'createdAt'
};
exports.PatientHospitalizationScalarFieldEnum = {
    id: 'id',
    backgroundId: 'backgroundId',
    motivo: 'motivo',
    anoAproximado: 'anoAproximado',
    createdAt: 'createdAt'
};
exports.PatientFamilyHistoryScalarFieldEnum = {
    id: 'id',
    backgroundId: 'backgroundId',
    parentesco: 'parentesco',
    enfermedad: 'enfermedad',
    detalleOtra: 'detalleOtra',
    createdAt: 'createdAt'
};
exports.PatientBackgroundVersionScalarFieldEnum = {
    id: 'id',
    patientProfileId: 'patientProfileId',
    versionNumber: 'versionNumber',
    snapshotData: 'snapshotData',
    changeDescription: 'changeDescription',
    changedFields: 'changedFields',
    changedAt: 'changedAt'
};
exports.DoctorProfileScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    nombres: 'nombres',
    apellidoPaterno: 'apellidoPaterno',
    apellidoMaterno: 'apellidoMaterno',
    numeroRegistro: 'numeroRegistro',
    especialidadPrincipal: 'especialidadPrincipal',
    especialidadSecundaria: 'especialidadSecundaria',
    departamento: 'departamento',
    ciudad: 'ciudad',
    direccionConsultorio: 'direccionConsultorio',
    aceptaConsultaDomicilio: 'aceptaConsultaDomicilio',
    aceptaTelemedicina: 'aceptaTelemedicina',
    activo: 'activo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.MedicalSpecialtyScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    isActive: 'isActive'
};
exports.AppointmentScalarFieldEnum = {
    id: 'id',
    patientProfileId: 'patientProfileId',
    doctorProfileId: 'doctorProfileId',
    fechaHora: 'fechaHora',
    estado: 'estado',
    motivoConsulta: 'motivoConsulta',
    tiempoMolestia: 'tiempoMolestia',
    notasAdicionales: 'notasAdicionales',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ClinicalEncounterScalarFieldEnum = {
    id: 'id',
    appointmentId: 'appointmentId',
    backgroundVersionId: 'backgroundVersionId',
    status: 'status',
    closedAt: 'closedAt',
    closedById: 'closedById',
    motivoConsultaValidado: 'motivoConsultaValidado',
    historiaEnfermedadActual: 'historiaEnfermedadActual',
    presionArterialSistolica: 'presionArterialSistolica',
    presionArterialDiastolica: 'presionArterialDiastolica',
    frecuenciaCardiaca: 'frecuenciaCardiaca',
    frecuenciaRespiratoria: 'frecuenciaRespiratoria',
    temperatura: 'temperatura',
    saturacionOxigeno: 'saturacionOxigeno',
    peso: 'peso',
    talla: 'talla',
    imc: 'imc',
    imcClasificacion: 'imcClasificacion',
    examenFisicoGeneral: 'examenFisicoGeneral',
    examenFisicoSegmentario: 'examenFisicoSegmentario',
    tipoDiagnostico: 'tipoDiagnostico',
    observacionesDiagnosticas: 'observacionesDiagnosticas',
    indicacionesNoFarmacologicas: 'indicacionesNoFarmacologicas',
    proximaCitaSugerida: 'proximaCitaSugerida',
    notasInternas: 'notasInternas',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ClinicalAddendumScalarFieldEnum = {
    id: 'id',
    encounterId: 'encounterId',
    autorId: 'autorId',
    motivoAclaracion: 'motivoAclaracion',
    contenido: 'contenido',
    createdAt: 'createdAt'
};
exports.EncounterDiagnosisScalarFieldEnum = {
    id: 'id',
    encounterId: 'encounterId',
    cie10Code: 'cie10Code',
    esDiagnosticoPrincipal: 'esDiagnosticoPrincipal'
};
exports.EncounterSystemReviewScalarFieldEnum = {
    id: 'id',
    encounterId: 'encounterId',
    sistema: 'sistema',
    detalle: 'detalle'
};
exports.EncounterPrescriptionScalarFieldEnum = {
    id: 'id',
    encounterId: 'encounterId',
    medicamento: 'medicamento',
    presentacion: 'presentacion',
    dosis: 'dosis',
    viaAdministracion: 'viaAdministracion',
    frecuencia: 'frecuencia',
    duracion: 'duracion',
    instruccionesEspeciales: 'instruccionesEspeciales',
    createdAt: 'createdAt'
};
exports.EncounterLabOrderScalarFieldEnum = {
    id: 'id',
    encounterId: 'encounterId',
    estudio: 'estudio',
    createdAt: 'createdAt'
};
exports.EncounterImagingOrderScalarFieldEnum = {
    id: 'id',
    encounterId: 'encounterId',
    estudio: 'estudio',
    createdAt: 'createdAt'
};
exports.EncounterReferralScalarFieldEnum = {
    id: 'id',
    encounterId: 'encounterId',
    especialidadDestino: 'especialidadDestino',
    motivo: 'motivo',
    createdAt: 'createdAt'
};
exports.Cie10CodeScalarFieldEnum = {
    id: 'id',
    code: 'code',
    descriptionEs: 'descriptionEs',
    descriptionEn: 'descriptionEn',
    category: 'category',
    isActive: 'isActive'
};
exports.MedicationsCatalogScalarFieldEnum = {
    id: 'id',
    nombreGenerico: 'nombreGenerico',
    nombreComercial: 'nombreComercial',
    presentacion: 'presentacion',
    viaAdministracion: 'viaAdministracion',
    isActive: 'isActive',
    createdAt: 'createdAt'
};
exports.LabStudiesCatalogScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    categoria: 'categoria',
    isActive: 'isActive'
};
exports.ImagingStudiesCatalogScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    categoria: 'categoria',
    isActive: 'isActive'
};
exports.BoliviaCityScalarFieldEnum = {
    id: 'id',
    departamento: 'departamento',
    nombre: 'nombre',
    isActive: 'isActive'
};
exports.PatientDoctorAccessScalarFieldEnum = {
    id: 'id',
    patientProfileId: 'patientProfileId',
    doctorProfileId: 'doctorProfileId',
    grantedAt: 'grantedAt',
    revokedAt: 'revokedAt',
    grantedBy: 'grantedBy',
    canViewBackground: 'canViewBackground',
    canViewEncounters: 'canViewEncounters'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.JsonNullValueInput = {
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map
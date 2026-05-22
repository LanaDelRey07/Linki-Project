export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    email: string;
    roles: string[];
  };
}

export interface PatientProfile {
  id: string;
  userId: string;
  onboardingCompleted: boolean;
  currentStep: number;
  completedSteps: number[];
  createdAt: string;
  updatedAt: string;
  identification?: PatientIdentification;
  emergencyContacts?: EmergencyContact[];
  background?: PatientBackground;
}

export interface PatientIdentification {
  id: string;
  nombres: string;
  apellidoPaterno: string;
  apellidoMaterno?: string;
  tipoDocumento: string;
  numeroDocumento: string;
  extensionDepartamento?: string;
  fechaNacimiento: string;
  sexoBiologico: string;
  genero?: string;
  estadoCivil?: string;
  ocupacion?: string;
  telefonoPrincipal: string;
  telefonoSecundario?: string;
  correoElectronico: string;
  direccion: string;
  ciudad: string;
  departamento: string;
}

export interface EmergencyContact {
  id: string;
  nombreCompleto: string;
  parentesco: string;
  telefono: string;
}

export interface PatientBackground {
  id: string;
  tieneAlergias: string;
  tieneEnfermedadesCronicas: string;
  tomaMedicamentos: boolean;
  haSidoOperado: boolean;
  haSidoHospitalizado: boolean;
  tieneAntecedentesFamiliares: boolean;
  tabaquismo?: string;
  consumoAlcohol?: string;
  actividadFisica?: string;
  consumeOtrasSustancias?: boolean;
  detalleOtrasSustancias?: string;
  actualmenteEmbarazada?: string;
  gestas?: number;
  partos?: number;
  cesareas?: number;
  abortos?: number;
  fechaUltimaMenstruacion?: string;
  metodoAnticonceptivo?: string;
  otroMetodoAnticonceptivo?: string;
  allergies: PatientAllergy[];
  chronicConditions: PatientChronicCondition[];
  medications: PatientMedication[];
  surgeries: PatientSurgery[];
  hospitalizations: PatientHospitalization[];
  familyHistory: PatientFamilyHistory[];
}

export interface PatientAllergy {
  id?: string;
  tipoAlergia: string;
  detalle: string;
}

export interface PatientChronicCondition {
  id?: string;
  tipo: string;
  detalleOtra?: string;
}

export interface PatientMedication {
  id?: string;
  nombre: string;
  dosis: string;
  frecuencia?: string;
}

export interface PatientSurgery {
  id?: string;
  tipoCirugia: string;
  anoAproximado?: number;
}

export interface PatientHospitalization {
  id?: string;
  motivo: string;
  anoAproximado?: number;
}

export interface PatientFamilyHistory {
  id?: string;
  parentesco: string;
  enfermedad: string;
  detalleOtra?: string;
}

export interface Cie10Code {
  id: string;
  code: string;
  descriptionEs: string;
  category?: string;
}

export interface MedicationCatalog {
  id: string;
  nombreGenerico: string;
  nombreComercial?: string;
  presentacion?: string;
  viaAdministracion?: string;
}

export interface BoliviaCity {
  id: string;
  departamento: string;
  nombre: string;
}

export interface Appointment {
  id: string;
  patientProfileId: string;
  doctorProfileId: string;
  fechaHora: string;
  estado: string;
  motivoConsulta: string;
  tiempoMolestia?: string;
  notasAdicionales?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ClinicalEncounter {
  id: string;
  appointmentId: string;
  status: 'DRAFT' | 'CLOSED';
  motivoConsultaValidado: string;
  historiaEnfermedadActual: string;
  presionArterialSistolica?: number;
  presionArterialDiastolica?: number;
  frecuenciaCardiaca?: number;
  frecuenciaRespiratoria?: number;
  temperatura?: number;
  saturacionOxigeno?: number;
  peso?: number;
  talla?: number;
  imc?: number;
  imcClasificacion?: string;
  examenFisicoGeneral: string;
  examenFisicoSegmentario?: string;
  tipoDiagnostico: string;
  observacionesDiagnosticas?: string;
  indicacionesNoFarmacologicas?: string;
  proximaCitaSugerida?: string;
  notasInternas?: string;
  createdAt: string;
  updatedAt: string;
  diagnoses?: EncounterDiagnosis[];
  prescriptions?: EncounterPrescription[];
  labOrders?: EncounterLabOrder[];
  imagingOrders?: EncounterImagingOrder[];
  referrals?: EncounterReferral[];
  addendums?: ClinicalAddendum[];
}

export interface EncounterDiagnosis {
  id: string;
  encounterId: string;
  cie10Code: string;
  esDiagnosticoPrincipal: boolean;
  cie10Entry?: Cie10Code;
}

export interface EncounterPrescription {
  id: string;
  encounterId: string;
  medicamento: string;
  presentacion: string;
  dosis: string;
  viaAdministracion: string;
  frecuencia: string;
  duracion: string;
  instruccionesEspeciales?: string;
}

export interface EncounterLabOrder {
  id: string;
  encounterId: string;
  estudio: string;
}

export interface EncounterImagingOrder {
  id: string;
  encounterId: string;
  estudio: string;
}

export interface EncounterReferral {
  id: string;
  encounterId: string;
  especialidadDestino: string;
  motivo?: string;
}

export interface ClinicalAddendum {
  id: string;
  encounterId: string;
  autorId: string;
  motivoAclaracion: string;
  contenido: string;
  createdAt: string;
}
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('PATIENT', 'DOCTOR', 'ADMIN');

-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('CI', 'PASAPORTE', 'CARNET_EXTRANJERIA');

-- CreateEnum
CREATE TYPE "Department" AS ENUM ('LP', 'CB', 'SC', 'OR', 'PT', 'TJ', 'CH', 'BE', 'PA');

-- CreateEnum
CREATE TYPE "SexBiological" AS ENUM ('MASCULINO', 'FEMENINO', 'INTERSEXUAL');


-- CreateEnum
CREATE TYPE "MaritalStatus" AS ENUM ('SOLTERO', 'CASADO', 'UNION_LIBRE', 'DIVORCIADO', 'VIUDO');

-- CreateEnum
CREATE TYPE "Kinship" AS ENUM ('PADRE', 'MADRE', 'CONYUGE', 'HIJO', 'HERMANO', 'OTRO');

-- CreateEnum
CREATE TYPE "AllergyType" AS ENUM ('MEDICAMENTOS', 'ALIMENTOS', 'AMBIENTALES', 'LATEX', 'OTRAS');

-- CreateEnum
CREATE TYPE "ChronicConditionType" AS ENUM ('DIABETES_TIPO_1', 'DIABETES_TIPO_2', 'HIPERTENSION', 'ASMA', 'HIPOTIROIDISMO', 'EPILEPSIA', 'CARDIOPATIA', 'OTRA');

-- CreateEnum
CREATE TYPE "SmokingStatus" AS ENUM ('NO', 'OCASIONAL', 'DIARIO', 'EX_FUMADOR');

-- CreateEnum
CREATE TYPE "AlcoholConsumption" AS ENUM ('NO', 'OCASIONAL', 'REGULAR', 'EX_BEBEDOR');

-- CreateEnum
CREATE TYPE "PhysicalActivity" AS ENUM ('SEDENTARIO', 'UNO_DOS_VECES', 'TRES_CINCO_VECES', 'DIARIO');

-- CreateEnum
CREATE TYPE "ContraceptiveMethod" AS ENUM ('NINGUNO', 'HORMONAL_ORAL', 'DIU', 'IMPLANTE', 'PRESERVATIVO', 'OTRO');

-- CreateEnum
CREATE TYPE "PregnancyStatus" AS ENUM ('SI', 'NO', 'NO_SE');

-- CreateEnum
CREATE TYPE "BackgroundToggle" AS ENUM ('SI', 'NO', 'NO_SE');

-- CreateEnum
CREATE TYPE "FamilyRelation" AS ENUM ('PADRE', 'MADRE', 'HERMANO');

-- CreateEnum
CREATE TYPE "FamilyDisease" AS ENUM ('DIABETES', 'HTA', 'CANCER', 'CARDIOPATIA', 'ACV', 'ENFERMEDAD_MENTAL', 'OTRA');

-- CreateEnum
CREATE TYPE "AppointmentStatus" AS ENUM ('PENDIENTE', 'CONFIRMADA', 'EN_CURSO', 'COMPLETADA', 'CANCELADA', 'NO_ASISTIO');

-- CreateEnum
CREATE TYPE "SymptomDuration" AS ENUM ('HOY', 'DIAS', 'SEMANAS', 'MESES', 'ANIOS', 'NO_APLICA');

-- CreateEnum
CREATE TYPE "EncounterStatus" AS ENUM ('DRAFT', 'CLOSED');

-- CreateEnum
CREATE TYPE "DiagnosisType" AS ENUM ('PRESUNTIVO', 'DEFINITIVO');

-- CreateEnum
CREATE TYPE "BMIClassification" AS ENUM ('BAJO_PESO', 'NORMAL', 'SOBREPESO', 'OBESIDAD_I', 'OBESIDAD_II', 'OBESIDAD_III');

-- CreateEnum
CREATE TYPE "Presentation" AS ENUM ('TABLETA', 'CAPSULA', 'JARABE', 'AMPOLLA', 'CREMA', 'GOTAS', 'SUSPENSION', 'OTRO');

-- CreateEnum
CREATE TYPE "AdministrationRoute" AS ENUM ('ORAL', 'INTRAMUSCULAR', 'INTRAVENOSA', 'TOPICA', 'SUBLINGUAL', 'INHALATORIA', 'RECTAL', 'OTRA');

-- CreateEnum
CREATE TYPE "MedicationFrequency" AS ENUM ('CADA_4H', 'CADA_6H', 'CADA_8H', 'CADA_12H', 'CADA_24H', 'DOSIS_UNICA', 'PRN', 'OTRA');

-- CreateEnum
CREATE TYPE "FollowUpInterval" AS ENUM ('UNA_SEMANA', 'DOS_SEMANAS', 'UN_MES', 'TRES_MESES', 'SEIS_MESES', 'A_DEMANDA');

-- CreateEnum
CREATE TYPE "SystemReview" AS ENUM ('CARDIOVASCULAR', 'RESPIRATORIO', 'GASTROINTESTINAL', 'NEUROLOGICO', 'MUSCULOESQUELETICO', 'GENITOURINARIO', 'PIEL', 'ENDOCRINO', 'PSIQUIATRICO');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "emailVerifiedAt" TIMESTAMP(3),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_roles" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "patient_profiles" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "onboardingCompleted" BOOLEAN NOT NULL DEFAULT false,
    "currentStep" INTEGER NOT NULL DEFAULT 1,
    "completedSteps" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "patient_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "patient_identification" (
    "id" TEXT NOT NULL,
    "patientProfileId" TEXT NOT NULL,
    "nombres" TEXT NOT NULL,
    "apellidoPaterno" TEXT NOT NULL,
    "apellidoMaterno" TEXT,
    "tipoDocumento" "DocumentType" NOT NULL,
    "numeroDocumento" TEXT NOT NULL,
    "extensionDepartamento" "Department",
    "fechaNacimiento" TIMESTAMP(3) NOT NULL,
    "sexoBiologico" "SexBiological" NOT NULL,
    "estadoCivil" "MaritalStatus",
    "ocupacion" TEXT,
    "telefonoPrincipal" TEXT NOT NULL,
    "telefonoSecundario" TEXT,
    "correoElectronico" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "ciudad" TEXT NOT NULL,
    "departamento" "Department" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "patient_identification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "emergency_contacts" (
    "id" TEXT NOT NULL,
    "patientProfileId" TEXT NOT NULL,
    "nombreCompleto" TEXT NOT NULL,
    "parentesco" "Kinship" NOT NULL,
    "telefono" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "emergency_contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "patient_background" (
    "id" TEXT NOT NULL,
    "patientProfileId" TEXT NOT NULL,
    "tieneAlergias" "BackgroundToggle" NOT NULL,
    "tieneEnfermedadesCronicas" "BackgroundToggle" NOT NULL,
    "tomaMedicamentos" BOOLEAN NOT NULL DEFAULT false,
    "haSidoOperado" BOOLEAN NOT NULL DEFAULT false,
    "haSidoHospitalizado" BOOLEAN NOT NULL DEFAULT false,
    "tieneAntecedentesFamiliares" BOOLEAN NOT NULL DEFAULT false,
    "tabaquismo" "SmokingStatus",
    "consumoAlcohol" "AlcoholConsumption",
    "actividadFisica" "PhysicalActivity",
    "consumeOtrasSustancias" BOOLEAN NOT NULL DEFAULT false,
    "detalleOtrasSustancias" TEXT,
    "actualmenteEmbarazada" "PregnancyStatus",
    "gestas" INTEGER,
    "partos" INTEGER,
    "cesareas" INTEGER,
    "abortos" INTEGER,
    "fechaUltimaMenstruacion" TIMESTAMP(3),
    "metodoAnticonceptivo" "ContraceptiveMethod",
    "otroMetodoAnticonceptivo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "patient_background_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "patient_allergies" (
    "id" TEXT NOT NULL,
    "backgroundId" TEXT NOT NULL,
    "tipoAlergia" "AllergyType" NOT NULL,
    "detalle" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "patient_allergies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "patient_chronic_conditions" (
    "id" TEXT NOT NULL,
    "backgroundId" TEXT NOT NULL,
    "tipo" "ChronicConditionType" NOT NULL,
    "detalleOtra" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "patient_chronic_conditions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "patient_medications" (
    "id" TEXT NOT NULL,
    "backgroundId" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "dosis" TEXT NOT NULL,
    "frecuencia" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "patient_medications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "patient_surgeries" (
    "id" TEXT NOT NULL,
    "backgroundId" TEXT NOT NULL,
    "tipoCirugia" TEXT NOT NULL,
    "anoAproximado" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "patient_surgeries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "patient_hospitalizations" (
    "id" TEXT NOT NULL,
    "backgroundId" TEXT NOT NULL,
    "motivo" TEXT NOT NULL,
    "anoAproximado" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "patient_hospitalizations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "patient_family_history" (
    "id" TEXT NOT NULL,
    "backgroundId" TEXT NOT NULL,
    "parentesco" "FamilyRelation" NOT NULL,
    "enfermedad" "FamilyDisease" NOT NULL,
    "detalleOtra" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "patient_family_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "patient_background_versions" (
    "id" TEXT NOT NULL,
    "patientProfileId" TEXT NOT NULL,
    "versionNumber" INTEGER NOT NULL,
    "snapshotData" JSONB NOT NULL,
    "changeDescription" TEXT,
    "changedFields" TEXT[],
    "changedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "patient_background_versions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doctor_profiles" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "nombres" TEXT NOT NULL,
    "apellidoPaterno" TEXT NOT NULL,
    "apellidoMaterno" TEXT,
    "numeroRegistro" TEXT NOT NULL,
    "especialidadPrincipal" TEXT NOT NULL,
    "especialidadSecundaria" TEXT,
    "departamento" "Department" NOT NULL,
    "ciudad" TEXT NOT NULL,
    "direccionConsultorio" TEXT,
    "aceptaConsultaDomicilio" BOOLEAN NOT NULL DEFAULT false,
    "aceptaTelemedicina" BOOLEAN NOT NULL DEFAULT false,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "doctor_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medical_specialties" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "medical_specialties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "appointments" (
    "id" TEXT NOT NULL,
    "patientProfileId" TEXT NOT NULL,
    "doctorProfileId" TEXT NOT NULL,
    "fechaHora" TIMESTAMP(3) NOT NULL,
    "estado" "AppointmentStatus" NOT NULL DEFAULT 'PENDIENTE',
    "motivoConsulta" TEXT NOT NULL,
    "tiempoMolestia" "SymptomDuration",
    "notasAdicionales" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "appointments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clinical_encounters" (
    "id" TEXT NOT NULL,
    "appointmentId" TEXT NOT NULL,
    "backgroundVersionId" TEXT,
    "status" "EncounterStatus" NOT NULL DEFAULT 'DRAFT',
    "closedAt" TIMESTAMP(3),
    "closedById" TEXT,
    "motivoConsultaValidado" TEXT NOT NULL,
    "historiaEnfermedadActual" TEXT NOT NULL,
    "presionArterialSistolica" INTEGER,
    "presionArterialDiastolica" INTEGER,
    "frecuenciaCardiaca" INTEGER,
    "frecuenciaRespiratoria" INTEGER,
    "temperatura" DECIMAL(65,30),
    "saturacionOxigeno" DECIMAL(65,30),
    "peso" DECIMAL(65,30),
    "talla" INTEGER,
    "imc" DECIMAL(65,30),
    "imcClasificacion" "BMIClassification",
    "examenFisicoGeneral" TEXT NOT NULL,
    "examenFisicoSegmentario" TEXT,
    "tipoDiagnostico" "DiagnosisType" NOT NULL,
    "observacionesDiagnosticas" TEXT,
    "indicacionesNoFarmacologicas" TEXT,
    "proximaCitaSugerida" "FollowUpInterval",
    "notasInternas" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "clinical_encounters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clinical_addendums" (
    "id" TEXT NOT NULL,
    "encounterId" TEXT NOT NULL,
    "autorId" TEXT NOT NULL,
    "motivoAclaracion" TEXT NOT NULL,
    "contenido" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "clinical_addendums_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "encounter_diagnoses" (
    "id" TEXT NOT NULL,
    "encounterId" TEXT NOT NULL,
    "cie10Code" TEXT NOT NULL,
    "esDiagnosticoPrincipal" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "encounter_diagnoses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "encounter_system_reviews" (
    "id" TEXT NOT NULL,
    "encounterId" TEXT NOT NULL,
    "sistema" "SystemReview" NOT NULL,
    "detalle" TEXT,

    CONSTRAINT "encounter_system_reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "encounter_prescriptions" (
    "id" TEXT NOT NULL,
    "encounterId" TEXT NOT NULL,
    "medicamento" TEXT NOT NULL,
    "presentacion" "Presentation" NOT NULL,
    "dosis" TEXT NOT NULL,
    "viaAdministracion" "AdministrationRoute" NOT NULL,
    "frecuencia" "MedicationFrequency" NOT NULL,
    "duracion" TEXT NOT NULL,
    "instruccionesEspeciales" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "encounter_prescriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "encounter_lab_orders" (
    "id" TEXT NOT NULL,
    "encounterId" TEXT NOT NULL,
    "estudio" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "encounter_lab_orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "encounter_imaging_orders" (
    "id" TEXT NOT NULL,
    "encounterId" TEXT NOT NULL,
    "estudio" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "encounter_imaging_orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "encounter_referrals" (
    "id" TEXT NOT NULL,
    "encounterId" TEXT NOT NULL,
    "especialidadDestino" TEXT NOT NULL,
    "motivo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "encounter_referrals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cie10_codes" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "descriptionEs" TEXT NOT NULL,
    "descriptionEn" TEXT,
    "category" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "searchVector" tsvector,

    CONSTRAINT "cie10_codes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medications_catalog" (
    "id" TEXT NOT NULL,
    "nombreGenerico" TEXT NOT NULL,
    "nombreComercial" TEXT,
    "presentacion" TEXT,
    "viaAdministracion" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "medications_catalog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lab_studies_catalog" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "categoria" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "lab_studies_catalog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "imaging_studies_catalog" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "categoria" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "imaging_studies_catalog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bolivia_cities" (
    "id" TEXT NOT NULL,
    "departamento" "Department" NOT NULL,
    "nombre" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "bolivia_cities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "patient_doctor_access" (
    "id" TEXT NOT NULL,
    "patientProfileId" TEXT NOT NULL,
    "doctorProfileId" TEXT NOT NULL,
    "grantedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "revokedAt" TIMESTAMP(3),
    "grantedBy" TEXT NOT NULL DEFAULT 'PATIENT',
    "canViewBackground" BOOLEAN NOT NULL DEFAULT true,
    "canViewEncounters" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "patient_doctor_access_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_roles_userId_role_key" ON "user_roles"("userId", "role");

-- CreateIndex
CREATE UNIQUE INDEX "patient_profiles_userId_key" ON "patient_profiles"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "patient_identification_patientProfileId_key" ON "patient_identification"("patientProfileId");

-- CreateIndex
CREATE UNIQUE INDEX "patient_identification_tipoDocumento_numeroDocumento_key" ON "patient_identification"("tipoDocumento", "numeroDocumento");

-- CreateIndex
CREATE UNIQUE INDEX "patient_background_patientProfileId_key" ON "patient_background"("patientProfileId");

-- CreateIndex
CREATE UNIQUE INDEX "patient_background_versions_patientProfileId_versionNumber_key" ON "patient_background_versions"("patientProfileId", "versionNumber");

-- CreateIndex
CREATE UNIQUE INDEX "doctor_profiles_userId_key" ON "doctor_profiles"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "doctor_profiles_numeroRegistro_key" ON "doctor_profiles"("numeroRegistro");

-- CreateIndex
CREATE UNIQUE INDEX "medical_specialties_name_key" ON "medical_specialties"("name");

-- CreateIndex
CREATE UNIQUE INDEX "clinical_encounters_appointmentId_key" ON "clinical_encounters"("appointmentId");

-- CreateIndex
CREATE UNIQUE INDEX "encounter_diagnoses_encounterId_cie10Code_key" ON "encounter_diagnoses"("encounterId", "cie10Code");

-- CreateIndex
CREATE UNIQUE INDEX "encounter_system_reviews_encounterId_sistema_key" ON "encounter_system_reviews"("encounterId", "sistema");

-- CreateIndex
CREATE UNIQUE INDEX "cie10_codes_code_key" ON "cie10_codes"("code");

-- CreateIndex
CREATE UNIQUE INDEX "bolivia_cities_departamento_nombre_key" ON "bolivia_cities"("departamento", "nombre");

-- CreateIndex
CREATE UNIQUE INDEX "patient_doctor_access_patientProfileId_doctorProfileId_key" ON "patient_doctor_access"("patientProfileId", "doctorProfileId");

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "patient_profiles" ADD CONSTRAINT "patient_profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "patient_identification" ADD CONSTRAINT "patient_identification_patientProfileId_fkey" FOREIGN KEY ("patientProfileId") REFERENCES "patient_profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "emergency_contacts" ADD CONSTRAINT "emergency_contacts_patientProfileId_fkey" FOREIGN KEY ("patientProfileId") REFERENCES "patient_profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "patient_background" ADD CONSTRAINT "patient_background_patientProfileId_fkey" FOREIGN KEY ("patientProfileId") REFERENCES "patient_profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "patient_allergies" ADD CONSTRAINT "patient_allergies_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "patient_background"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "patient_chronic_conditions" ADD CONSTRAINT "patient_chronic_conditions_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "patient_background"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "patient_medications" ADD CONSTRAINT "patient_medications_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "patient_background"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "patient_surgeries" ADD CONSTRAINT "patient_surgeries_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "patient_background"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "patient_hospitalizations" ADD CONSTRAINT "patient_hospitalizations_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "patient_background"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "patient_family_history" ADD CONSTRAINT "patient_family_history_backgroundId_fkey" FOREIGN KEY ("backgroundId") REFERENCES "patient_background"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "patient_background_versions" ADD CONSTRAINT "patient_background_versions_patientProfileId_fkey" FOREIGN KEY ("patientProfileId") REFERENCES "patient_profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doctor_profiles" ADD CONSTRAINT "doctor_profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_patientProfileId_fkey" FOREIGN KEY ("patientProfileId") REFERENCES "patient_profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_doctorProfileId_fkey" FOREIGN KEY ("doctorProfileId") REFERENCES "doctor_profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clinical_encounters" ADD CONSTRAINT "clinical_encounters_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "appointments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clinical_encounters" ADD CONSTRAINT "clinical_encounters_closedById_fkey" FOREIGN KEY ("closedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clinical_encounters" ADD CONSTRAINT "clinical_encounters_backgroundVersionId_fkey" FOREIGN KEY ("backgroundVersionId") REFERENCES "patient_background_versions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clinical_addendums" ADD CONSTRAINT "clinical_addendums_encounterId_fkey" FOREIGN KEY ("encounterId") REFERENCES "clinical_encounters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clinical_addendums" ADD CONSTRAINT "clinical_addendums_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "encounter_diagnoses" ADD CONSTRAINT "encounter_diagnoses_encounterId_fkey" FOREIGN KEY ("encounterId") REFERENCES "clinical_encounters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "encounter_diagnoses" ADD CONSTRAINT "encounter_diagnoses_cie10Code_fkey" FOREIGN KEY ("cie10Code") REFERENCES "cie10_codes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "encounter_system_reviews" ADD CONSTRAINT "encounter_system_reviews_encounterId_fkey" FOREIGN KEY ("encounterId") REFERENCES "clinical_encounters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "encounter_prescriptions" ADD CONSTRAINT "encounter_prescriptions_encounterId_fkey" FOREIGN KEY ("encounterId") REFERENCES "clinical_encounters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "encounter_lab_orders" ADD CONSTRAINT "encounter_lab_orders_encounterId_fkey" FOREIGN KEY ("encounterId") REFERENCES "clinical_encounters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "encounter_imaging_orders" ADD CONSTRAINT "encounter_imaging_orders_encounterId_fkey" FOREIGN KEY ("encounterId") REFERENCES "clinical_encounters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "encounter_referrals" ADD CONSTRAINT "encounter_referrals_encounterId_fkey" FOREIGN KEY ("encounterId") REFERENCES "clinical_encounters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "patient_doctor_access" ADD CONSTRAINT "patient_doctor_access_patientProfileId_fkey" FOREIGN KEY ("patientProfileId") REFERENCES "patient_profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "patient_doctor_access" ADD CONSTRAINT "patient_doctor_access_doctorProfileId_fkey" FOREIGN KEY ("doctorProfileId") REFERENCES "doctor_profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

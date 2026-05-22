import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    $connect(): runtime.Types.Utils.JsPromise<void>;
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get userRoleAssignment(): Prisma.UserRoleAssignmentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get patientProfile(): Prisma.PatientProfileDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get patientIdentification(): Prisma.PatientIdentificationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get emergencyContact(): Prisma.EmergencyContactDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get patientBackground(): Prisma.PatientBackgroundDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get patientAllergy(): Prisma.PatientAllergyDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get patientChronicCondition(): Prisma.PatientChronicConditionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get patientMedication(): Prisma.PatientMedicationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get patientSurgery(): Prisma.PatientSurgeryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get patientHospitalization(): Prisma.PatientHospitalizationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get patientFamilyHistory(): Prisma.PatientFamilyHistoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get patientBackgroundVersion(): Prisma.PatientBackgroundVersionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get doctorProfile(): Prisma.DoctorProfileDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get medicalSpecialty(): Prisma.MedicalSpecialtyDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get appointment(): Prisma.AppointmentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get clinicalEncounter(): Prisma.ClinicalEncounterDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get clinicalAddendum(): Prisma.ClinicalAddendumDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get encounterDiagnosis(): Prisma.EncounterDiagnosisDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get encounterSystemReview(): Prisma.EncounterSystemReviewDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get encounterPrescription(): Prisma.EncounterPrescriptionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get encounterLabOrder(): Prisma.EncounterLabOrderDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get encounterImagingOrder(): Prisma.EncounterImagingOrderDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get encounterReferral(): Prisma.EncounterReferralDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get cie10Code(): Prisma.Cie10CodeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get medicationsCatalog(): Prisma.MedicationsCatalogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get labStudiesCatalog(): Prisma.LabStudiesCatalogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get imagingStudiesCatalog(): Prisma.ImagingStudiesCatalogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get boliviaCity(): Prisma.BoliviaCityDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get patientDoctorAccess(): Prisma.PatientDoctorAccessDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;

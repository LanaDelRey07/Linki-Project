import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: any;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: any;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: any;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: any;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: any;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: any;
export declare const empty: any;
export declare const join: any;
export declare const raw: any;
export declare const Sql: any;
export type Sql = runtime.Sql;
export declare const Decimal: any;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: any;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: any;
export declare const JsonNull: any;
export declare const AnyNull: any;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly User: "User";
    readonly UserRoleAssignment: "UserRoleAssignment";
    readonly PatientProfile: "PatientProfile";
    readonly PatientIdentification: "PatientIdentification";
    readonly EmergencyContact: "EmergencyContact";
    readonly PatientBackground: "PatientBackground";
    readonly PatientAllergy: "PatientAllergy";
    readonly PatientChronicCondition: "PatientChronicCondition";
    readonly PatientMedication: "PatientMedication";
    readonly PatientSurgery: "PatientSurgery";
    readonly PatientHospitalization: "PatientHospitalization";
    readonly PatientFamilyHistory: "PatientFamilyHistory";
    readonly PatientBackgroundVersion: "PatientBackgroundVersion";
    readonly DoctorProfile: "DoctorProfile";
    readonly MedicalSpecialty: "MedicalSpecialty";
    readonly Appointment: "Appointment";
    readonly ClinicalEncounter: "ClinicalEncounter";
    readonly ClinicalAddendum: "ClinicalAddendum";
    readonly EncounterDiagnosis: "EncounterDiagnosis";
    readonly EncounterSystemReview: "EncounterSystemReview";
    readonly EncounterPrescription: "EncounterPrescription";
    readonly EncounterLabOrder: "EncounterLabOrder";
    readonly EncounterImagingOrder: "EncounterImagingOrder";
    readonly EncounterReferral: "EncounterReferral";
    readonly Cie10Code: "Cie10Code";
    readonly MedicationsCatalog: "MedicationsCatalog";
    readonly LabStudiesCatalog: "LabStudiesCatalog";
    readonly ImagingStudiesCatalog: "ImagingStudiesCatalog";
    readonly BoliviaCity: "BoliviaCity";
    readonly PatientDoctorAccess: "PatientDoctorAccess";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "userRoleAssignment" | "patientProfile" | "patientIdentification" | "emergencyContact" | "patientBackground" | "patientAllergy" | "patientChronicCondition" | "patientMedication" | "patientSurgery" | "patientHospitalization" | "patientFamilyHistory" | "patientBackgroundVersion" | "doctorProfile" | "medicalSpecialty" | "appointment" | "clinicalEncounter" | "clinicalAddendum" | "encounterDiagnosis" | "encounterSystemReview" | "encounterPrescription" | "encounterLabOrder" | "encounterImagingOrder" | "encounterReferral" | "cie10Code" | "medicationsCatalog" | "labStudiesCatalog" | "imagingStudiesCatalog" | "boliviaCity" | "patientDoctorAccess";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        UserRoleAssignment: {
            payload: Prisma.$UserRoleAssignmentPayload<ExtArgs>;
            fields: Prisma.UserRoleAssignmentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserRoleAssignmentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleAssignmentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserRoleAssignmentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleAssignmentPayload>;
                };
                findFirst: {
                    args: Prisma.UserRoleAssignmentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleAssignmentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserRoleAssignmentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleAssignmentPayload>;
                };
                findMany: {
                    args: Prisma.UserRoleAssignmentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleAssignmentPayload>[];
                };
                create: {
                    args: Prisma.UserRoleAssignmentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleAssignmentPayload>;
                };
                createMany: {
                    args: Prisma.UserRoleAssignmentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserRoleAssignmentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleAssignmentPayload>[];
                };
                delete: {
                    args: Prisma.UserRoleAssignmentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleAssignmentPayload>;
                };
                update: {
                    args: Prisma.UserRoleAssignmentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleAssignmentPayload>;
                };
                deleteMany: {
                    args: Prisma.UserRoleAssignmentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserRoleAssignmentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserRoleAssignmentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleAssignmentPayload>[];
                };
                upsert: {
                    args: Prisma.UserRoleAssignmentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleAssignmentPayload>;
                };
                aggregate: {
                    args: Prisma.UserRoleAssignmentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUserRoleAssignment>;
                };
                groupBy: {
                    args: Prisma.UserRoleAssignmentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserRoleAssignmentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserRoleAssignmentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserRoleAssignmentCountAggregateOutputType> | number;
                };
            };
        };
        PatientProfile: {
            payload: Prisma.$PatientProfilePayload<ExtArgs>;
            fields: Prisma.PatientProfileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PatientProfileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientProfilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PatientProfileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientProfilePayload>;
                };
                findFirst: {
                    args: Prisma.PatientProfileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientProfilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PatientProfileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientProfilePayload>;
                };
                findMany: {
                    args: Prisma.PatientProfileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientProfilePayload>[];
                };
                create: {
                    args: Prisma.PatientProfileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientProfilePayload>;
                };
                createMany: {
                    args: Prisma.PatientProfileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PatientProfileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientProfilePayload>[];
                };
                delete: {
                    args: Prisma.PatientProfileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientProfilePayload>;
                };
                update: {
                    args: Prisma.PatientProfileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientProfilePayload>;
                };
                deleteMany: {
                    args: Prisma.PatientProfileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PatientProfileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PatientProfileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientProfilePayload>[];
                };
                upsert: {
                    args: Prisma.PatientProfileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientProfilePayload>;
                };
                aggregate: {
                    args: Prisma.PatientProfileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePatientProfile>;
                };
                groupBy: {
                    args: Prisma.PatientProfileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PatientProfileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PatientProfileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PatientProfileCountAggregateOutputType> | number;
                };
            };
        };
        PatientIdentification: {
            payload: Prisma.$PatientIdentificationPayload<ExtArgs>;
            fields: Prisma.PatientIdentificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PatientIdentificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientIdentificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PatientIdentificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientIdentificationPayload>;
                };
                findFirst: {
                    args: Prisma.PatientIdentificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientIdentificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PatientIdentificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientIdentificationPayload>;
                };
                findMany: {
                    args: Prisma.PatientIdentificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientIdentificationPayload>[];
                };
                create: {
                    args: Prisma.PatientIdentificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientIdentificationPayload>;
                };
                createMany: {
                    args: Prisma.PatientIdentificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PatientIdentificationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientIdentificationPayload>[];
                };
                delete: {
                    args: Prisma.PatientIdentificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientIdentificationPayload>;
                };
                update: {
                    args: Prisma.PatientIdentificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientIdentificationPayload>;
                };
                deleteMany: {
                    args: Prisma.PatientIdentificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PatientIdentificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PatientIdentificationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientIdentificationPayload>[];
                };
                upsert: {
                    args: Prisma.PatientIdentificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientIdentificationPayload>;
                };
                aggregate: {
                    args: Prisma.PatientIdentificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePatientIdentification>;
                };
                groupBy: {
                    args: Prisma.PatientIdentificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PatientIdentificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PatientIdentificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PatientIdentificationCountAggregateOutputType> | number;
                };
            };
        };
        EmergencyContact: {
            payload: Prisma.$EmergencyContactPayload<ExtArgs>;
            fields: Prisma.EmergencyContactFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EmergencyContactFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmergencyContactPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EmergencyContactFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmergencyContactPayload>;
                };
                findFirst: {
                    args: Prisma.EmergencyContactFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmergencyContactPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EmergencyContactFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmergencyContactPayload>;
                };
                findMany: {
                    args: Prisma.EmergencyContactFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmergencyContactPayload>[];
                };
                create: {
                    args: Prisma.EmergencyContactCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmergencyContactPayload>;
                };
                createMany: {
                    args: Prisma.EmergencyContactCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EmergencyContactCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmergencyContactPayload>[];
                };
                delete: {
                    args: Prisma.EmergencyContactDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmergencyContactPayload>;
                };
                update: {
                    args: Prisma.EmergencyContactUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmergencyContactPayload>;
                };
                deleteMany: {
                    args: Prisma.EmergencyContactDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EmergencyContactUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EmergencyContactUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmergencyContactPayload>[];
                };
                upsert: {
                    args: Prisma.EmergencyContactUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmergencyContactPayload>;
                };
                aggregate: {
                    args: Prisma.EmergencyContactAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEmergencyContact>;
                };
                groupBy: {
                    args: Prisma.EmergencyContactGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EmergencyContactGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EmergencyContactCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EmergencyContactCountAggregateOutputType> | number;
                };
            };
        };
        PatientBackground: {
            payload: Prisma.$PatientBackgroundPayload<ExtArgs>;
            fields: Prisma.PatientBackgroundFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PatientBackgroundFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientBackgroundPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PatientBackgroundFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientBackgroundPayload>;
                };
                findFirst: {
                    args: Prisma.PatientBackgroundFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientBackgroundPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PatientBackgroundFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientBackgroundPayload>;
                };
                findMany: {
                    args: Prisma.PatientBackgroundFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientBackgroundPayload>[];
                };
                create: {
                    args: Prisma.PatientBackgroundCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientBackgroundPayload>;
                };
                createMany: {
                    args: Prisma.PatientBackgroundCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PatientBackgroundCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientBackgroundPayload>[];
                };
                delete: {
                    args: Prisma.PatientBackgroundDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientBackgroundPayload>;
                };
                update: {
                    args: Prisma.PatientBackgroundUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientBackgroundPayload>;
                };
                deleteMany: {
                    args: Prisma.PatientBackgroundDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PatientBackgroundUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PatientBackgroundUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientBackgroundPayload>[];
                };
                upsert: {
                    args: Prisma.PatientBackgroundUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientBackgroundPayload>;
                };
                aggregate: {
                    args: Prisma.PatientBackgroundAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePatientBackground>;
                };
                groupBy: {
                    args: Prisma.PatientBackgroundGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PatientBackgroundGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PatientBackgroundCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PatientBackgroundCountAggregateOutputType> | number;
                };
            };
        };
        PatientAllergy: {
            payload: Prisma.$PatientAllergyPayload<ExtArgs>;
            fields: Prisma.PatientAllergyFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PatientAllergyFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientAllergyPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PatientAllergyFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientAllergyPayload>;
                };
                findFirst: {
                    args: Prisma.PatientAllergyFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientAllergyPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PatientAllergyFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientAllergyPayload>;
                };
                findMany: {
                    args: Prisma.PatientAllergyFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientAllergyPayload>[];
                };
                create: {
                    args: Prisma.PatientAllergyCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientAllergyPayload>;
                };
                createMany: {
                    args: Prisma.PatientAllergyCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PatientAllergyCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientAllergyPayload>[];
                };
                delete: {
                    args: Prisma.PatientAllergyDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientAllergyPayload>;
                };
                update: {
                    args: Prisma.PatientAllergyUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientAllergyPayload>;
                };
                deleteMany: {
                    args: Prisma.PatientAllergyDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PatientAllergyUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PatientAllergyUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientAllergyPayload>[];
                };
                upsert: {
                    args: Prisma.PatientAllergyUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientAllergyPayload>;
                };
                aggregate: {
                    args: Prisma.PatientAllergyAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePatientAllergy>;
                };
                groupBy: {
                    args: Prisma.PatientAllergyGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PatientAllergyGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PatientAllergyCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PatientAllergyCountAggregateOutputType> | number;
                };
            };
        };
        PatientChronicCondition: {
            payload: Prisma.$PatientChronicConditionPayload<ExtArgs>;
            fields: Prisma.PatientChronicConditionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PatientChronicConditionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientChronicConditionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PatientChronicConditionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientChronicConditionPayload>;
                };
                findFirst: {
                    args: Prisma.PatientChronicConditionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientChronicConditionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PatientChronicConditionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientChronicConditionPayload>;
                };
                findMany: {
                    args: Prisma.PatientChronicConditionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientChronicConditionPayload>[];
                };
                create: {
                    args: Prisma.PatientChronicConditionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientChronicConditionPayload>;
                };
                createMany: {
                    args: Prisma.PatientChronicConditionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PatientChronicConditionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientChronicConditionPayload>[];
                };
                delete: {
                    args: Prisma.PatientChronicConditionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientChronicConditionPayload>;
                };
                update: {
                    args: Prisma.PatientChronicConditionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientChronicConditionPayload>;
                };
                deleteMany: {
                    args: Prisma.PatientChronicConditionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PatientChronicConditionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PatientChronicConditionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientChronicConditionPayload>[];
                };
                upsert: {
                    args: Prisma.PatientChronicConditionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientChronicConditionPayload>;
                };
                aggregate: {
                    args: Prisma.PatientChronicConditionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePatientChronicCondition>;
                };
                groupBy: {
                    args: Prisma.PatientChronicConditionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PatientChronicConditionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PatientChronicConditionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PatientChronicConditionCountAggregateOutputType> | number;
                };
            };
        };
        PatientMedication: {
            payload: Prisma.$PatientMedicationPayload<ExtArgs>;
            fields: Prisma.PatientMedicationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PatientMedicationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientMedicationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PatientMedicationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientMedicationPayload>;
                };
                findFirst: {
                    args: Prisma.PatientMedicationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientMedicationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PatientMedicationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientMedicationPayload>;
                };
                findMany: {
                    args: Prisma.PatientMedicationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientMedicationPayload>[];
                };
                create: {
                    args: Prisma.PatientMedicationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientMedicationPayload>;
                };
                createMany: {
                    args: Prisma.PatientMedicationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PatientMedicationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientMedicationPayload>[];
                };
                delete: {
                    args: Prisma.PatientMedicationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientMedicationPayload>;
                };
                update: {
                    args: Prisma.PatientMedicationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientMedicationPayload>;
                };
                deleteMany: {
                    args: Prisma.PatientMedicationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PatientMedicationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PatientMedicationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientMedicationPayload>[];
                };
                upsert: {
                    args: Prisma.PatientMedicationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientMedicationPayload>;
                };
                aggregate: {
                    args: Prisma.PatientMedicationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePatientMedication>;
                };
                groupBy: {
                    args: Prisma.PatientMedicationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PatientMedicationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PatientMedicationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PatientMedicationCountAggregateOutputType> | number;
                };
            };
        };
        PatientSurgery: {
            payload: Prisma.$PatientSurgeryPayload<ExtArgs>;
            fields: Prisma.PatientSurgeryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PatientSurgeryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientSurgeryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PatientSurgeryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientSurgeryPayload>;
                };
                findFirst: {
                    args: Prisma.PatientSurgeryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientSurgeryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PatientSurgeryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientSurgeryPayload>;
                };
                findMany: {
                    args: Prisma.PatientSurgeryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientSurgeryPayload>[];
                };
                create: {
                    args: Prisma.PatientSurgeryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientSurgeryPayload>;
                };
                createMany: {
                    args: Prisma.PatientSurgeryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PatientSurgeryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientSurgeryPayload>[];
                };
                delete: {
                    args: Prisma.PatientSurgeryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientSurgeryPayload>;
                };
                update: {
                    args: Prisma.PatientSurgeryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientSurgeryPayload>;
                };
                deleteMany: {
                    args: Prisma.PatientSurgeryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PatientSurgeryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PatientSurgeryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientSurgeryPayload>[];
                };
                upsert: {
                    args: Prisma.PatientSurgeryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientSurgeryPayload>;
                };
                aggregate: {
                    args: Prisma.PatientSurgeryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePatientSurgery>;
                };
                groupBy: {
                    args: Prisma.PatientSurgeryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PatientSurgeryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PatientSurgeryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PatientSurgeryCountAggregateOutputType> | number;
                };
            };
        };
        PatientHospitalization: {
            payload: Prisma.$PatientHospitalizationPayload<ExtArgs>;
            fields: Prisma.PatientHospitalizationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PatientHospitalizationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientHospitalizationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PatientHospitalizationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientHospitalizationPayload>;
                };
                findFirst: {
                    args: Prisma.PatientHospitalizationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientHospitalizationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PatientHospitalizationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientHospitalizationPayload>;
                };
                findMany: {
                    args: Prisma.PatientHospitalizationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientHospitalizationPayload>[];
                };
                create: {
                    args: Prisma.PatientHospitalizationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientHospitalizationPayload>;
                };
                createMany: {
                    args: Prisma.PatientHospitalizationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PatientHospitalizationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientHospitalizationPayload>[];
                };
                delete: {
                    args: Prisma.PatientHospitalizationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientHospitalizationPayload>;
                };
                update: {
                    args: Prisma.PatientHospitalizationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientHospitalizationPayload>;
                };
                deleteMany: {
                    args: Prisma.PatientHospitalizationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PatientHospitalizationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PatientHospitalizationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientHospitalizationPayload>[];
                };
                upsert: {
                    args: Prisma.PatientHospitalizationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientHospitalizationPayload>;
                };
                aggregate: {
                    args: Prisma.PatientHospitalizationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePatientHospitalization>;
                };
                groupBy: {
                    args: Prisma.PatientHospitalizationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PatientHospitalizationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PatientHospitalizationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PatientHospitalizationCountAggregateOutputType> | number;
                };
            };
        };
        PatientFamilyHistory: {
            payload: Prisma.$PatientFamilyHistoryPayload<ExtArgs>;
            fields: Prisma.PatientFamilyHistoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PatientFamilyHistoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientFamilyHistoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PatientFamilyHistoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientFamilyHistoryPayload>;
                };
                findFirst: {
                    args: Prisma.PatientFamilyHistoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientFamilyHistoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PatientFamilyHistoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientFamilyHistoryPayload>;
                };
                findMany: {
                    args: Prisma.PatientFamilyHistoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientFamilyHistoryPayload>[];
                };
                create: {
                    args: Prisma.PatientFamilyHistoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientFamilyHistoryPayload>;
                };
                createMany: {
                    args: Prisma.PatientFamilyHistoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PatientFamilyHistoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientFamilyHistoryPayload>[];
                };
                delete: {
                    args: Prisma.PatientFamilyHistoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientFamilyHistoryPayload>;
                };
                update: {
                    args: Prisma.PatientFamilyHistoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientFamilyHistoryPayload>;
                };
                deleteMany: {
                    args: Prisma.PatientFamilyHistoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PatientFamilyHistoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PatientFamilyHistoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientFamilyHistoryPayload>[];
                };
                upsert: {
                    args: Prisma.PatientFamilyHistoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientFamilyHistoryPayload>;
                };
                aggregate: {
                    args: Prisma.PatientFamilyHistoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePatientFamilyHistory>;
                };
                groupBy: {
                    args: Prisma.PatientFamilyHistoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PatientFamilyHistoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PatientFamilyHistoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PatientFamilyHistoryCountAggregateOutputType> | number;
                };
            };
        };
        PatientBackgroundVersion: {
            payload: Prisma.$PatientBackgroundVersionPayload<ExtArgs>;
            fields: Prisma.PatientBackgroundVersionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PatientBackgroundVersionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientBackgroundVersionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PatientBackgroundVersionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientBackgroundVersionPayload>;
                };
                findFirst: {
                    args: Prisma.PatientBackgroundVersionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientBackgroundVersionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PatientBackgroundVersionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientBackgroundVersionPayload>;
                };
                findMany: {
                    args: Prisma.PatientBackgroundVersionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientBackgroundVersionPayload>[];
                };
                create: {
                    args: Prisma.PatientBackgroundVersionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientBackgroundVersionPayload>;
                };
                createMany: {
                    args: Prisma.PatientBackgroundVersionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PatientBackgroundVersionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientBackgroundVersionPayload>[];
                };
                delete: {
                    args: Prisma.PatientBackgroundVersionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientBackgroundVersionPayload>;
                };
                update: {
                    args: Prisma.PatientBackgroundVersionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientBackgroundVersionPayload>;
                };
                deleteMany: {
                    args: Prisma.PatientBackgroundVersionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PatientBackgroundVersionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PatientBackgroundVersionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientBackgroundVersionPayload>[];
                };
                upsert: {
                    args: Prisma.PatientBackgroundVersionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientBackgroundVersionPayload>;
                };
                aggregate: {
                    args: Prisma.PatientBackgroundVersionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePatientBackgroundVersion>;
                };
                groupBy: {
                    args: Prisma.PatientBackgroundVersionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PatientBackgroundVersionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PatientBackgroundVersionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PatientBackgroundVersionCountAggregateOutputType> | number;
                };
            };
        };
        DoctorProfile: {
            payload: Prisma.$DoctorProfilePayload<ExtArgs>;
            fields: Prisma.DoctorProfileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DoctorProfileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorProfilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DoctorProfileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorProfilePayload>;
                };
                findFirst: {
                    args: Prisma.DoctorProfileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorProfilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DoctorProfileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorProfilePayload>;
                };
                findMany: {
                    args: Prisma.DoctorProfileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorProfilePayload>[];
                };
                create: {
                    args: Prisma.DoctorProfileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorProfilePayload>;
                };
                createMany: {
                    args: Prisma.DoctorProfileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DoctorProfileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorProfilePayload>[];
                };
                delete: {
                    args: Prisma.DoctorProfileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorProfilePayload>;
                };
                update: {
                    args: Prisma.DoctorProfileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorProfilePayload>;
                };
                deleteMany: {
                    args: Prisma.DoctorProfileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DoctorProfileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DoctorProfileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorProfilePayload>[];
                };
                upsert: {
                    args: Prisma.DoctorProfileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DoctorProfilePayload>;
                };
                aggregate: {
                    args: Prisma.DoctorProfileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDoctorProfile>;
                };
                groupBy: {
                    args: Prisma.DoctorProfileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DoctorProfileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DoctorProfileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DoctorProfileCountAggregateOutputType> | number;
                };
            };
        };
        MedicalSpecialty: {
            payload: Prisma.$MedicalSpecialtyPayload<ExtArgs>;
            fields: Prisma.MedicalSpecialtyFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MedicalSpecialtyFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicalSpecialtyPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MedicalSpecialtyFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicalSpecialtyPayload>;
                };
                findFirst: {
                    args: Prisma.MedicalSpecialtyFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicalSpecialtyPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MedicalSpecialtyFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicalSpecialtyPayload>;
                };
                findMany: {
                    args: Prisma.MedicalSpecialtyFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicalSpecialtyPayload>[];
                };
                create: {
                    args: Prisma.MedicalSpecialtyCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicalSpecialtyPayload>;
                };
                createMany: {
                    args: Prisma.MedicalSpecialtyCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MedicalSpecialtyCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicalSpecialtyPayload>[];
                };
                delete: {
                    args: Prisma.MedicalSpecialtyDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicalSpecialtyPayload>;
                };
                update: {
                    args: Prisma.MedicalSpecialtyUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicalSpecialtyPayload>;
                };
                deleteMany: {
                    args: Prisma.MedicalSpecialtyDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MedicalSpecialtyUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MedicalSpecialtyUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicalSpecialtyPayload>[];
                };
                upsert: {
                    args: Prisma.MedicalSpecialtyUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicalSpecialtyPayload>;
                };
                aggregate: {
                    args: Prisma.MedicalSpecialtyAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMedicalSpecialty>;
                };
                groupBy: {
                    args: Prisma.MedicalSpecialtyGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MedicalSpecialtyGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MedicalSpecialtyCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MedicalSpecialtyCountAggregateOutputType> | number;
                };
            };
        };
        Appointment: {
            payload: Prisma.$AppointmentPayload<ExtArgs>;
            fields: Prisma.AppointmentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AppointmentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentPayload>;
                };
                findFirst: {
                    args: Prisma.AppointmentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentPayload>;
                };
                findMany: {
                    args: Prisma.AppointmentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentPayload>[];
                };
                create: {
                    args: Prisma.AppointmentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentPayload>;
                };
                createMany: {
                    args: Prisma.AppointmentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentPayload>[];
                };
                delete: {
                    args: Prisma.AppointmentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentPayload>;
                };
                update: {
                    args: Prisma.AppointmentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentPayload>;
                };
                deleteMany: {
                    args: Prisma.AppointmentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AppointmentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentPayload>[];
                };
                upsert: {
                    args: Prisma.AppointmentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AppointmentPayload>;
                };
                aggregate: {
                    args: Prisma.AppointmentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAppointment>;
                };
                groupBy: {
                    args: Prisma.AppointmentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AppointmentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AppointmentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AppointmentCountAggregateOutputType> | number;
                };
            };
        };
        ClinicalEncounter: {
            payload: Prisma.$ClinicalEncounterPayload<ExtArgs>;
            fields: Prisma.ClinicalEncounterFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ClinicalEncounterFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClinicalEncounterPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ClinicalEncounterFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClinicalEncounterPayload>;
                };
                findFirst: {
                    args: Prisma.ClinicalEncounterFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClinicalEncounterPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ClinicalEncounterFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClinicalEncounterPayload>;
                };
                findMany: {
                    args: Prisma.ClinicalEncounterFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClinicalEncounterPayload>[];
                };
                create: {
                    args: Prisma.ClinicalEncounterCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClinicalEncounterPayload>;
                };
                createMany: {
                    args: Prisma.ClinicalEncounterCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ClinicalEncounterCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClinicalEncounterPayload>[];
                };
                delete: {
                    args: Prisma.ClinicalEncounterDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClinicalEncounterPayload>;
                };
                update: {
                    args: Prisma.ClinicalEncounterUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClinicalEncounterPayload>;
                };
                deleteMany: {
                    args: Prisma.ClinicalEncounterDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ClinicalEncounterUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ClinicalEncounterUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClinicalEncounterPayload>[];
                };
                upsert: {
                    args: Prisma.ClinicalEncounterUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClinicalEncounterPayload>;
                };
                aggregate: {
                    args: Prisma.ClinicalEncounterAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateClinicalEncounter>;
                };
                groupBy: {
                    args: Prisma.ClinicalEncounterGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClinicalEncounterGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ClinicalEncounterCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClinicalEncounterCountAggregateOutputType> | number;
                };
            };
        };
        ClinicalAddendum: {
            payload: Prisma.$ClinicalAddendumPayload<ExtArgs>;
            fields: Prisma.ClinicalAddendumFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ClinicalAddendumFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClinicalAddendumPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ClinicalAddendumFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClinicalAddendumPayload>;
                };
                findFirst: {
                    args: Prisma.ClinicalAddendumFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClinicalAddendumPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ClinicalAddendumFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClinicalAddendumPayload>;
                };
                findMany: {
                    args: Prisma.ClinicalAddendumFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClinicalAddendumPayload>[];
                };
                create: {
                    args: Prisma.ClinicalAddendumCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClinicalAddendumPayload>;
                };
                createMany: {
                    args: Prisma.ClinicalAddendumCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ClinicalAddendumCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClinicalAddendumPayload>[];
                };
                delete: {
                    args: Prisma.ClinicalAddendumDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClinicalAddendumPayload>;
                };
                update: {
                    args: Prisma.ClinicalAddendumUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClinicalAddendumPayload>;
                };
                deleteMany: {
                    args: Prisma.ClinicalAddendumDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ClinicalAddendumUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ClinicalAddendumUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClinicalAddendumPayload>[];
                };
                upsert: {
                    args: Prisma.ClinicalAddendumUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClinicalAddendumPayload>;
                };
                aggregate: {
                    args: Prisma.ClinicalAddendumAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateClinicalAddendum>;
                };
                groupBy: {
                    args: Prisma.ClinicalAddendumGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClinicalAddendumGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ClinicalAddendumCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClinicalAddendumCountAggregateOutputType> | number;
                };
            };
        };
        EncounterDiagnosis: {
            payload: Prisma.$EncounterDiagnosisPayload<ExtArgs>;
            fields: Prisma.EncounterDiagnosisFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EncounterDiagnosisFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterDiagnosisPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EncounterDiagnosisFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterDiagnosisPayload>;
                };
                findFirst: {
                    args: Prisma.EncounterDiagnosisFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterDiagnosisPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EncounterDiagnosisFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterDiagnosisPayload>;
                };
                findMany: {
                    args: Prisma.EncounterDiagnosisFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterDiagnosisPayload>[];
                };
                create: {
                    args: Prisma.EncounterDiagnosisCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterDiagnosisPayload>;
                };
                createMany: {
                    args: Prisma.EncounterDiagnosisCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EncounterDiagnosisCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterDiagnosisPayload>[];
                };
                delete: {
                    args: Prisma.EncounterDiagnosisDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterDiagnosisPayload>;
                };
                update: {
                    args: Prisma.EncounterDiagnosisUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterDiagnosisPayload>;
                };
                deleteMany: {
                    args: Prisma.EncounterDiagnosisDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EncounterDiagnosisUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EncounterDiagnosisUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterDiagnosisPayload>[];
                };
                upsert: {
                    args: Prisma.EncounterDiagnosisUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterDiagnosisPayload>;
                };
                aggregate: {
                    args: Prisma.EncounterDiagnosisAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEncounterDiagnosis>;
                };
                groupBy: {
                    args: Prisma.EncounterDiagnosisGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EncounterDiagnosisGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EncounterDiagnosisCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EncounterDiagnosisCountAggregateOutputType> | number;
                };
            };
        };
        EncounterSystemReview: {
            payload: Prisma.$EncounterSystemReviewPayload<ExtArgs>;
            fields: Prisma.EncounterSystemReviewFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EncounterSystemReviewFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterSystemReviewPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EncounterSystemReviewFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterSystemReviewPayload>;
                };
                findFirst: {
                    args: Prisma.EncounterSystemReviewFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterSystemReviewPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EncounterSystemReviewFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterSystemReviewPayload>;
                };
                findMany: {
                    args: Prisma.EncounterSystemReviewFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterSystemReviewPayload>[];
                };
                create: {
                    args: Prisma.EncounterSystemReviewCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterSystemReviewPayload>;
                };
                createMany: {
                    args: Prisma.EncounterSystemReviewCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EncounterSystemReviewCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterSystemReviewPayload>[];
                };
                delete: {
                    args: Prisma.EncounterSystemReviewDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterSystemReviewPayload>;
                };
                update: {
                    args: Prisma.EncounterSystemReviewUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterSystemReviewPayload>;
                };
                deleteMany: {
                    args: Prisma.EncounterSystemReviewDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EncounterSystemReviewUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EncounterSystemReviewUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterSystemReviewPayload>[];
                };
                upsert: {
                    args: Prisma.EncounterSystemReviewUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterSystemReviewPayload>;
                };
                aggregate: {
                    args: Prisma.EncounterSystemReviewAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEncounterSystemReview>;
                };
                groupBy: {
                    args: Prisma.EncounterSystemReviewGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EncounterSystemReviewGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EncounterSystemReviewCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EncounterSystemReviewCountAggregateOutputType> | number;
                };
            };
        };
        EncounterPrescription: {
            payload: Prisma.$EncounterPrescriptionPayload<ExtArgs>;
            fields: Prisma.EncounterPrescriptionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EncounterPrescriptionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterPrescriptionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EncounterPrescriptionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterPrescriptionPayload>;
                };
                findFirst: {
                    args: Prisma.EncounterPrescriptionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterPrescriptionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EncounterPrescriptionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterPrescriptionPayload>;
                };
                findMany: {
                    args: Prisma.EncounterPrescriptionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterPrescriptionPayload>[];
                };
                create: {
                    args: Prisma.EncounterPrescriptionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterPrescriptionPayload>;
                };
                createMany: {
                    args: Prisma.EncounterPrescriptionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EncounterPrescriptionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterPrescriptionPayload>[];
                };
                delete: {
                    args: Prisma.EncounterPrescriptionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterPrescriptionPayload>;
                };
                update: {
                    args: Prisma.EncounterPrescriptionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterPrescriptionPayload>;
                };
                deleteMany: {
                    args: Prisma.EncounterPrescriptionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EncounterPrescriptionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EncounterPrescriptionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterPrescriptionPayload>[];
                };
                upsert: {
                    args: Prisma.EncounterPrescriptionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterPrescriptionPayload>;
                };
                aggregate: {
                    args: Prisma.EncounterPrescriptionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEncounterPrescription>;
                };
                groupBy: {
                    args: Prisma.EncounterPrescriptionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EncounterPrescriptionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EncounterPrescriptionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EncounterPrescriptionCountAggregateOutputType> | number;
                };
            };
        };
        EncounterLabOrder: {
            payload: Prisma.$EncounterLabOrderPayload<ExtArgs>;
            fields: Prisma.EncounterLabOrderFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EncounterLabOrderFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterLabOrderPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EncounterLabOrderFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterLabOrderPayload>;
                };
                findFirst: {
                    args: Prisma.EncounterLabOrderFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterLabOrderPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EncounterLabOrderFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterLabOrderPayload>;
                };
                findMany: {
                    args: Prisma.EncounterLabOrderFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterLabOrderPayload>[];
                };
                create: {
                    args: Prisma.EncounterLabOrderCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterLabOrderPayload>;
                };
                createMany: {
                    args: Prisma.EncounterLabOrderCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EncounterLabOrderCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterLabOrderPayload>[];
                };
                delete: {
                    args: Prisma.EncounterLabOrderDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterLabOrderPayload>;
                };
                update: {
                    args: Prisma.EncounterLabOrderUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterLabOrderPayload>;
                };
                deleteMany: {
                    args: Prisma.EncounterLabOrderDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EncounterLabOrderUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EncounterLabOrderUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterLabOrderPayload>[];
                };
                upsert: {
                    args: Prisma.EncounterLabOrderUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterLabOrderPayload>;
                };
                aggregate: {
                    args: Prisma.EncounterLabOrderAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEncounterLabOrder>;
                };
                groupBy: {
                    args: Prisma.EncounterLabOrderGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EncounterLabOrderGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EncounterLabOrderCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EncounterLabOrderCountAggregateOutputType> | number;
                };
            };
        };
        EncounterImagingOrder: {
            payload: Prisma.$EncounterImagingOrderPayload<ExtArgs>;
            fields: Prisma.EncounterImagingOrderFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EncounterImagingOrderFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterImagingOrderPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EncounterImagingOrderFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterImagingOrderPayload>;
                };
                findFirst: {
                    args: Prisma.EncounterImagingOrderFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterImagingOrderPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EncounterImagingOrderFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterImagingOrderPayload>;
                };
                findMany: {
                    args: Prisma.EncounterImagingOrderFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterImagingOrderPayload>[];
                };
                create: {
                    args: Prisma.EncounterImagingOrderCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterImagingOrderPayload>;
                };
                createMany: {
                    args: Prisma.EncounterImagingOrderCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EncounterImagingOrderCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterImagingOrderPayload>[];
                };
                delete: {
                    args: Prisma.EncounterImagingOrderDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterImagingOrderPayload>;
                };
                update: {
                    args: Prisma.EncounterImagingOrderUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterImagingOrderPayload>;
                };
                deleteMany: {
                    args: Prisma.EncounterImagingOrderDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EncounterImagingOrderUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EncounterImagingOrderUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterImagingOrderPayload>[];
                };
                upsert: {
                    args: Prisma.EncounterImagingOrderUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterImagingOrderPayload>;
                };
                aggregate: {
                    args: Prisma.EncounterImagingOrderAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEncounterImagingOrder>;
                };
                groupBy: {
                    args: Prisma.EncounterImagingOrderGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EncounterImagingOrderGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EncounterImagingOrderCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EncounterImagingOrderCountAggregateOutputType> | number;
                };
            };
        };
        EncounterReferral: {
            payload: Prisma.$EncounterReferralPayload<ExtArgs>;
            fields: Prisma.EncounterReferralFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EncounterReferralFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterReferralPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EncounterReferralFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterReferralPayload>;
                };
                findFirst: {
                    args: Prisma.EncounterReferralFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterReferralPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EncounterReferralFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterReferralPayload>;
                };
                findMany: {
                    args: Prisma.EncounterReferralFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterReferralPayload>[];
                };
                create: {
                    args: Prisma.EncounterReferralCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterReferralPayload>;
                };
                createMany: {
                    args: Prisma.EncounterReferralCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EncounterReferralCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterReferralPayload>[];
                };
                delete: {
                    args: Prisma.EncounterReferralDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterReferralPayload>;
                };
                update: {
                    args: Prisma.EncounterReferralUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterReferralPayload>;
                };
                deleteMany: {
                    args: Prisma.EncounterReferralDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EncounterReferralUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EncounterReferralUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterReferralPayload>[];
                };
                upsert: {
                    args: Prisma.EncounterReferralUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EncounterReferralPayload>;
                };
                aggregate: {
                    args: Prisma.EncounterReferralAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEncounterReferral>;
                };
                groupBy: {
                    args: Prisma.EncounterReferralGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EncounterReferralGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EncounterReferralCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EncounterReferralCountAggregateOutputType> | number;
                };
            };
        };
        Cie10Code: {
            payload: Prisma.$Cie10CodePayload<ExtArgs>;
            fields: Prisma.Cie10CodeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.Cie10CodeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Cie10CodePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.Cie10CodeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Cie10CodePayload>;
                };
                findFirst: {
                    args: Prisma.Cie10CodeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Cie10CodePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.Cie10CodeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Cie10CodePayload>;
                };
                findMany: {
                    args: Prisma.Cie10CodeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Cie10CodePayload>[];
                };
                create: {
                    args: Prisma.Cie10CodeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Cie10CodePayload>;
                };
                createMany: {
                    args: Prisma.Cie10CodeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.Cie10CodeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Cie10CodePayload>[];
                };
                delete: {
                    args: Prisma.Cie10CodeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Cie10CodePayload>;
                };
                update: {
                    args: Prisma.Cie10CodeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Cie10CodePayload>;
                };
                deleteMany: {
                    args: Prisma.Cie10CodeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.Cie10CodeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.Cie10CodeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Cie10CodePayload>[];
                };
                upsert: {
                    args: Prisma.Cie10CodeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$Cie10CodePayload>;
                };
                aggregate: {
                    args: Prisma.Cie10CodeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCie10Code>;
                };
                groupBy: {
                    args: Prisma.Cie10CodeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Cie10CodeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.Cie10CodeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Cie10CodeCountAggregateOutputType> | number;
                };
            };
        };
        MedicationsCatalog: {
            payload: Prisma.$MedicationsCatalogPayload<ExtArgs>;
            fields: Prisma.MedicationsCatalogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MedicationsCatalogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicationsCatalogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MedicationsCatalogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicationsCatalogPayload>;
                };
                findFirst: {
                    args: Prisma.MedicationsCatalogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicationsCatalogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MedicationsCatalogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicationsCatalogPayload>;
                };
                findMany: {
                    args: Prisma.MedicationsCatalogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicationsCatalogPayload>[];
                };
                create: {
                    args: Prisma.MedicationsCatalogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicationsCatalogPayload>;
                };
                createMany: {
                    args: Prisma.MedicationsCatalogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MedicationsCatalogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicationsCatalogPayload>[];
                };
                delete: {
                    args: Prisma.MedicationsCatalogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicationsCatalogPayload>;
                };
                update: {
                    args: Prisma.MedicationsCatalogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicationsCatalogPayload>;
                };
                deleteMany: {
                    args: Prisma.MedicationsCatalogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MedicationsCatalogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MedicationsCatalogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicationsCatalogPayload>[];
                };
                upsert: {
                    args: Prisma.MedicationsCatalogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MedicationsCatalogPayload>;
                };
                aggregate: {
                    args: Prisma.MedicationsCatalogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMedicationsCatalog>;
                };
                groupBy: {
                    args: Prisma.MedicationsCatalogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MedicationsCatalogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MedicationsCatalogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MedicationsCatalogCountAggregateOutputType> | number;
                };
            };
        };
        LabStudiesCatalog: {
            payload: Prisma.$LabStudiesCatalogPayload<ExtArgs>;
            fields: Prisma.LabStudiesCatalogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LabStudiesCatalogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabStudiesCatalogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LabStudiesCatalogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabStudiesCatalogPayload>;
                };
                findFirst: {
                    args: Prisma.LabStudiesCatalogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabStudiesCatalogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LabStudiesCatalogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabStudiesCatalogPayload>;
                };
                findMany: {
                    args: Prisma.LabStudiesCatalogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabStudiesCatalogPayload>[];
                };
                create: {
                    args: Prisma.LabStudiesCatalogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabStudiesCatalogPayload>;
                };
                createMany: {
                    args: Prisma.LabStudiesCatalogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LabStudiesCatalogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabStudiesCatalogPayload>[];
                };
                delete: {
                    args: Prisma.LabStudiesCatalogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabStudiesCatalogPayload>;
                };
                update: {
                    args: Prisma.LabStudiesCatalogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabStudiesCatalogPayload>;
                };
                deleteMany: {
                    args: Prisma.LabStudiesCatalogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LabStudiesCatalogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LabStudiesCatalogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabStudiesCatalogPayload>[];
                };
                upsert: {
                    args: Prisma.LabStudiesCatalogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabStudiesCatalogPayload>;
                };
                aggregate: {
                    args: Prisma.LabStudiesCatalogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLabStudiesCatalog>;
                };
                groupBy: {
                    args: Prisma.LabStudiesCatalogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LabStudiesCatalogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LabStudiesCatalogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LabStudiesCatalogCountAggregateOutputType> | number;
                };
            };
        };
        ImagingStudiesCatalog: {
            payload: Prisma.$ImagingStudiesCatalogPayload<ExtArgs>;
            fields: Prisma.ImagingStudiesCatalogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ImagingStudiesCatalogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagingStudiesCatalogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ImagingStudiesCatalogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagingStudiesCatalogPayload>;
                };
                findFirst: {
                    args: Prisma.ImagingStudiesCatalogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagingStudiesCatalogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ImagingStudiesCatalogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagingStudiesCatalogPayload>;
                };
                findMany: {
                    args: Prisma.ImagingStudiesCatalogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagingStudiesCatalogPayload>[];
                };
                create: {
                    args: Prisma.ImagingStudiesCatalogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagingStudiesCatalogPayload>;
                };
                createMany: {
                    args: Prisma.ImagingStudiesCatalogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ImagingStudiesCatalogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagingStudiesCatalogPayload>[];
                };
                delete: {
                    args: Prisma.ImagingStudiesCatalogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagingStudiesCatalogPayload>;
                };
                update: {
                    args: Prisma.ImagingStudiesCatalogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagingStudiesCatalogPayload>;
                };
                deleteMany: {
                    args: Prisma.ImagingStudiesCatalogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ImagingStudiesCatalogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ImagingStudiesCatalogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagingStudiesCatalogPayload>[];
                };
                upsert: {
                    args: Prisma.ImagingStudiesCatalogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagingStudiesCatalogPayload>;
                };
                aggregate: {
                    args: Prisma.ImagingStudiesCatalogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateImagingStudiesCatalog>;
                };
                groupBy: {
                    args: Prisma.ImagingStudiesCatalogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ImagingStudiesCatalogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ImagingStudiesCatalogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ImagingStudiesCatalogCountAggregateOutputType> | number;
                };
            };
        };
        BoliviaCity: {
            payload: Prisma.$BoliviaCityPayload<ExtArgs>;
            fields: Prisma.BoliviaCityFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BoliviaCityFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BoliviaCityPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BoliviaCityFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BoliviaCityPayload>;
                };
                findFirst: {
                    args: Prisma.BoliviaCityFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BoliviaCityPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BoliviaCityFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BoliviaCityPayload>;
                };
                findMany: {
                    args: Prisma.BoliviaCityFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BoliviaCityPayload>[];
                };
                create: {
                    args: Prisma.BoliviaCityCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BoliviaCityPayload>;
                };
                createMany: {
                    args: Prisma.BoliviaCityCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BoliviaCityCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BoliviaCityPayload>[];
                };
                delete: {
                    args: Prisma.BoliviaCityDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BoliviaCityPayload>;
                };
                update: {
                    args: Prisma.BoliviaCityUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BoliviaCityPayload>;
                };
                deleteMany: {
                    args: Prisma.BoliviaCityDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BoliviaCityUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BoliviaCityUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BoliviaCityPayload>[];
                };
                upsert: {
                    args: Prisma.BoliviaCityUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BoliviaCityPayload>;
                };
                aggregate: {
                    args: Prisma.BoliviaCityAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBoliviaCity>;
                };
                groupBy: {
                    args: Prisma.BoliviaCityGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BoliviaCityGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BoliviaCityCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BoliviaCityCountAggregateOutputType> | number;
                };
            };
        };
        PatientDoctorAccess: {
            payload: Prisma.$PatientDoctorAccessPayload<ExtArgs>;
            fields: Prisma.PatientDoctorAccessFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PatientDoctorAccessFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientDoctorAccessPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PatientDoctorAccessFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientDoctorAccessPayload>;
                };
                findFirst: {
                    args: Prisma.PatientDoctorAccessFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientDoctorAccessPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PatientDoctorAccessFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientDoctorAccessPayload>;
                };
                findMany: {
                    args: Prisma.PatientDoctorAccessFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientDoctorAccessPayload>[];
                };
                create: {
                    args: Prisma.PatientDoctorAccessCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientDoctorAccessPayload>;
                };
                createMany: {
                    args: Prisma.PatientDoctorAccessCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PatientDoctorAccessCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientDoctorAccessPayload>[];
                };
                delete: {
                    args: Prisma.PatientDoctorAccessDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientDoctorAccessPayload>;
                };
                update: {
                    args: Prisma.PatientDoctorAccessUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientDoctorAccessPayload>;
                };
                deleteMany: {
                    args: Prisma.PatientDoctorAccessDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PatientDoctorAccessUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PatientDoctorAccessUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientDoctorAccessPayload>[];
                };
                upsert: {
                    args: Prisma.PatientDoctorAccessUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PatientDoctorAccessPayload>;
                };
                aggregate: {
                    args: Prisma.PatientDoctorAccessAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePatientDoctorAccess>;
                };
                groupBy: {
                    args: Prisma.PatientDoctorAccessGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PatientDoctorAccessGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PatientDoctorAccessCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PatientDoctorAccessCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: any;
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly emailVerifiedAt: "emailVerifiedAt";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const UserRoleAssignmentScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly role: "role";
    readonly assignedAt: "assignedAt";
};
export type UserRoleAssignmentScalarFieldEnum = (typeof UserRoleAssignmentScalarFieldEnum)[keyof typeof UserRoleAssignmentScalarFieldEnum];
export declare const PatientProfileScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly onboardingCompleted: "onboardingCompleted";
    readonly currentStep: "currentStep";
    readonly completedSteps: "completedSteps";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PatientProfileScalarFieldEnum = (typeof PatientProfileScalarFieldEnum)[keyof typeof PatientProfileScalarFieldEnum];
export declare const PatientIdentificationScalarFieldEnum: {
    readonly id: "id";
    readonly patientProfileId: "patientProfileId";
    readonly nombres: "nombres";
    readonly apellidoPaterno: "apellidoPaterno";
    readonly apellidoMaterno: "apellidoMaterno";
    readonly tipoDocumento: "tipoDocumento";
    readonly numeroDocumento: "numeroDocumento";
    readonly extensionDepartamento: "extensionDepartamento";
    readonly fechaNacimiento: "fechaNacimiento";
    readonly sexoBiologico: "sexoBiologico";
    readonly genero: "genero";
    readonly estadoCivil: "estadoCivil";
    readonly ocupacion: "ocupacion";
    readonly telefonoPrincipal: "telefonoPrincipal";
    readonly telefonoSecundario: "telefonoSecundario";
    readonly correoElectronico: "correoElectronico";
    readonly direccion: "direccion";
    readonly ciudad: "ciudad";
    readonly departamento: "departamento";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PatientIdentificationScalarFieldEnum = (typeof PatientIdentificationScalarFieldEnum)[keyof typeof PatientIdentificationScalarFieldEnum];
export declare const EmergencyContactScalarFieldEnum: {
    readonly id: "id";
    readonly patientProfileId: "patientProfileId";
    readonly nombreCompleto: "nombreCompleto";
    readonly parentesco: "parentesco";
    readonly telefono: "telefono";
    readonly createdAt: "createdAt";
};
export type EmergencyContactScalarFieldEnum = (typeof EmergencyContactScalarFieldEnum)[keyof typeof EmergencyContactScalarFieldEnum];
export declare const PatientBackgroundScalarFieldEnum: {
    readonly id: "id";
    readonly patientProfileId: "patientProfileId";
    readonly tieneAlergias: "tieneAlergias";
    readonly tieneEnfermedadesCronicas: "tieneEnfermedadesCronicas";
    readonly tomaMedicamentos: "tomaMedicamentos";
    readonly haSidoOperado: "haSidoOperado";
    readonly haSidoHospitalizado: "haSidoHospitalizado";
    readonly tieneAntecedentesFamiliares: "tieneAntecedentesFamiliares";
    readonly tabaquismo: "tabaquismo";
    readonly consumoAlcohol: "consumoAlcohol";
    readonly actividadFisica: "actividadFisica";
    readonly consumeOtrasSustancias: "consumeOtrasSustancias";
    readonly detalleOtrasSustancias: "detalleOtrasSustancias";
    readonly actualmenteEmbarazada: "actualmenteEmbarazada";
    readonly gestas: "gestas";
    readonly partos: "partos";
    readonly cesareas: "cesareas";
    readonly abortos: "abortos";
    readonly fechaUltimaMenstruacion: "fechaUltimaMenstruacion";
    readonly metodoAnticonceptivo: "metodoAnticonceptivo";
    readonly otroMetodoAnticonceptivo: "otroMetodoAnticonceptivo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PatientBackgroundScalarFieldEnum = (typeof PatientBackgroundScalarFieldEnum)[keyof typeof PatientBackgroundScalarFieldEnum];
export declare const PatientAllergyScalarFieldEnum: {
    readonly id: "id";
    readonly backgroundId: "backgroundId";
    readonly tipoAlergia: "tipoAlergia";
    readonly detalle: "detalle";
    readonly createdAt: "createdAt";
};
export type PatientAllergyScalarFieldEnum = (typeof PatientAllergyScalarFieldEnum)[keyof typeof PatientAllergyScalarFieldEnum];
export declare const PatientChronicConditionScalarFieldEnum: {
    readonly id: "id";
    readonly backgroundId: "backgroundId";
    readonly tipo: "tipo";
    readonly detalleOtra: "detalleOtra";
    readonly createdAt: "createdAt";
};
export type PatientChronicConditionScalarFieldEnum = (typeof PatientChronicConditionScalarFieldEnum)[keyof typeof PatientChronicConditionScalarFieldEnum];
export declare const PatientMedicationScalarFieldEnum: {
    readonly id: "id";
    readonly backgroundId: "backgroundId";
    readonly nombre: "nombre";
    readonly dosis: "dosis";
    readonly frecuencia: "frecuencia";
    readonly createdAt: "createdAt";
};
export type PatientMedicationScalarFieldEnum = (typeof PatientMedicationScalarFieldEnum)[keyof typeof PatientMedicationScalarFieldEnum];
export declare const PatientSurgeryScalarFieldEnum: {
    readonly id: "id";
    readonly backgroundId: "backgroundId";
    readonly tipoCirugia: "tipoCirugia";
    readonly anoAproximado: "anoAproximado";
    readonly createdAt: "createdAt";
};
export type PatientSurgeryScalarFieldEnum = (typeof PatientSurgeryScalarFieldEnum)[keyof typeof PatientSurgeryScalarFieldEnum];
export declare const PatientHospitalizationScalarFieldEnum: {
    readonly id: "id";
    readonly backgroundId: "backgroundId";
    readonly motivo: "motivo";
    readonly anoAproximado: "anoAproximado";
    readonly createdAt: "createdAt";
};
export type PatientHospitalizationScalarFieldEnum = (typeof PatientHospitalizationScalarFieldEnum)[keyof typeof PatientHospitalizationScalarFieldEnum];
export declare const PatientFamilyHistoryScalarFieldEnum: {
    readonly id: "id";
    readonly backgroundId: "backgroundId";
    readonly parentesco: "parentesco";
    readonly enfermedad: "enfermedad";
    readonly detalleOtra: "detalleOtra";
    readonly createdAt: "createdAt";
};
export type PatientFamilyHistoryScalarFieldEnum = (typeof PatientFamilyHistoryScalarFieldEnum)[keyof typeof PatientFamilyHistoryScalarFieldEnum];
export declare const PatientBackgroundVersionScalarFieldEnum: {
    readonly id: "id";
    readonly patientProfileId: "patientProfileId";
    readonly versionNumber: "versionNumber";
    readonly snapshotData: "snapshotData";
    readonly changeDescription: "changeDescription";
    readonly changedFields: "changedFields";
    readonly changedAt: "changedAt";
};
export type PatientBackgroundVersionScalarFieldEnum = (typeof PatientBackgroundVersionScalarFieldEnum)[keyof typeof PatientBackgroundVersionScalarFieldEnum];
export declare const DoctorProfileScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly nombres: "nombres";
    readonly apellidoPaterno: "apellidoPaterno";
    readonly apellidoMaterno: "apellidoMaterno";
    readonly numeroRegistro: "numeroRegistro";
    readonly especialidadPrincipal: "especialidadPrincipal";
    readonly especialidadSecundaria: "especialidadSecundaria";
    readonly departamento: "departamento";
    readonly ciudad: "ciudad";
    readonly direccionConsultorio: "direccionConsultorio";
    readonly aceptaConsultaDomicilio: "aceptaConsultaDomicilio";
    readonly aceptaTelemedicina: "aceptaTelemedicina";
    readonly activo: "activo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DoctorProfileScalarFieldEnum = (typeof DoctorProfileScalarFieldEnum)[keyof typeof DoctorProfileScalarFieldEnum];
export declare const MedicalSpecialtyScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly isActive: "isActive";
};
export type MedicalSpecialtyScalarFieldEnum = (typeof MedicalSpecialtyScalarFieldEnum)[keyof typeof MedicalSpecialtyScalarFieldEnum];
export declare const AppointmentScalarFieldEnum: {
    readonly id: "id";
    readonly patientProfileId: "patientProfileId";
    readonly doctorProfileId: "doctorProfileId";
    readonly fechaHora: "fechaHora";
    readonly estado: "estado";
    readonly motivoConsulta: "motivoConsulta";
    readonly tiempoMolestia: "tiempoMolestia";
    readonly notasAdicionales: "notasAdicionales";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum];
export declare const ClinicalEncounterScalarFieldEnum: {
    readonly id: "id";
    readonly appointmentId: "appointmentId";
    readonly backgroundVersionId: "backgroundVersionId";
    readonly status: "status";
    readonly closedAt: "closedAt";
    readonly closedById: "closedById";
    readonly motivoConsultaValidado: "motivoConsultaValidado";
    readonly historiaEnfermedadActual: "historiaEnfermedadActual";
    readonly presionArterialSistolica: "presionArterialSistolica";
    readonly presionArterialDiastolica: "presionArterialDiastolica";
    readonly frecuenciaCardiaca: "frecuenciaCardiaca";
    readonly frecuenciaRespiratoria: "frecuenciaRespiratoria";
    readonly temperatura: "temperatura";
    readonly saturacionOxigeno: "saturacionOxigeno";
    readonly peso: "peso";
    readonly talla: "talla";
    readonly imc: "imc";
    readonly imcClasificacion: "imcClasificacion";
    readonly examenFisicoGeneral: "examenFisicoGeneral";
    readonly examenFisicoSegmentario: "examenFisicoSegmentario";
    readonly tipoDiagnostico: "tipoDiagnostico";
    readonly observacionesDiagnosticas: "observacionesDiagnosticas";
    readonly indicacionesNoFarmacologicas: "indicacionesNoFarmacologicas";
    readonly proximaCitaSugerida: "proximaCitaSugerida";
    readonly notasInternas: "notasInternas";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ClinicalEncounterScalarFieldEnum = (typeof ClinicalEncounterScalarFieldEnum)[keyof typeof ClinicalEncounterScalarFieldEnum];
export declare const ClinicalAddendumScalarFieldEnum: {
    readonly id: "id";
    readonly encounterId: "encounterId";
    readonly autorId: "autorId";
    readonly motivoAclaracion: "motivoAclaracion";
    readonly contenido: "contenido";
    readonly createdAt: "createdAt";
};
export type ClinicalAddendumScalarFieldEnum = (typeof ClinicalAddendumScalarFieldEnum)[keyof typeof ClinicalAddendumScalarFieldEnum];
export declare const EncounterDiagnosisScalarFieldEnum: {
    readonly id: "id";
    readonly encounterId: "encounterId";
    readonly cie10Code: "cie10Code";
    readonly esDiagnosticoPrincipal: "esDiagnosticoPrincipal";
};
export type EncounterDiagnosisScalarFieldEnum = (typeof EncounterDiagnosisScalarFieldEnum)[keyof typeof EncounterDiagnosisScalarFieldEnum];
export declare const EncounterSystemReviewScalarFieldEnum: {
    readonly id: "id";
    readonly encounterId: "encounterId";
    readonly sistema: "sistema";
    readonly detalle: "detalle";
};
export type EncounterSystemReviewScalarFieldEnum = (typeof EncounterSystemReviewScalarFieldEnum)[keyof typeof EncounterSystemReviewScalarFieldEnum];
export declare const EncounterPrescriptionScalarFieldEnum: {
    readonly id: "id";
    readonly encounterId: "encounterId";
    readonly medicamento: "medicamento";
    readonly presentacion: "presentacion";
    readonly dosis: "dosis";
    readonly viaAdministracion: "viaAdministracion";
    readonly frecuencia: "frecuencia";
    readonly duracion: "duracion";
    readonly instruccionesEspeciales: "instruccionesEspeciales";
    readonly createdAt: "createdAt";
};
export type EncounterPrescriptionScalarFieldEnum = (typeof EncounterPrescriptionScalarFieldEnum)[keyof typeof EncounterPrescriptionScalarFieldEnum];
export declare const EncounterLabOrderScalarFieldEnum: {
    readonly id: "id";
    readonly encounterId: "encounterId";
    readonly estudio: "estudio";
    readonly createdAt: "createdAt";
};
export type EncounterLabOrderScalarFieldEnum = (typeof EncounterLabOrderScalarFieldEnum)[keyof typeof EncounterLabOrderScalarFieldEnum];
export declare const EncounterImagingOrderScalarFieldEnum: {
    readonly id: "id";
    readonly encounterId: "encounterId";
    readonly estudio: "estudio";
    readonly createdAt: "createdAt";
};
export type EncounterImagingOrderScalarFieldEnum = (typeof EncounterImagingOrderScalarFieldEnum)[keyof typeof EncounterImagingOrderScalarFieldEnum];
export declare const EncounterReferralScalarFieldEnum: {
    readonly id: "id";
    readonly encounterId: "encounterId";
    readonly especialidadDestino: "especialidadDestino";
    readonly motivo: "motivo";
    readonly createdAt: "createdAt";
};
export type EncounterReferralScalarFieldEnum = (typeof EncounterReferralScalarFieldEnum)[keyof typeof EncounterReferralScalarFieldEnum];
export declare const Cie10CodeScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly descriptionEs: "descriptionEs";
    readonly descriptionEn: "descriptionEn";
    readonly category: "category";
    readonly isActive: "isActive";
};
export type Cie10CodeScalarFieldEnum = (typeof Cie10CodeScalarFieldEnum)[keyof typeof Cie10CodeScalarFieldEnum];
export declare const MedicationsCatalogScalarFieldEnum: {
    readonly id: "id";
    readonly nombreGenerico: "nombreGenerico";
    readonly nombreComercial: "nombreComercial";
    readonly presentacion: "presentacion";
    readonly viaAdministracion: "viaAdministracion";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
};
export type MedicationsCatalogScalarFieldEnum = (typeof MedicationsCatalogScalarFieldEnum)[keyof typeof MedicationsCatalogScalarFieldEnum];
export declare const LabStudiesCatalogScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly categoria: "categoria";
    readonly isActive: "isActive";
};
export type LabStudiesCatalogScalarFieldEnum = (typeof LabStudiesCatalogScalarFieldEnum)[keyof typeof LabStudiesCatalogScalarFieldEnum];
export declare const ImagingStudiesCatalogScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly categoria: "categoria";
    readonly isActive: "isActive";
};
export type ImagingStudiesCatalogScalarFieldEnum = (typeof ImagingStudiesCatalogScalarFieldEnum)[keyof typeof ImagingStudiesCatalogScalarFieldEnum];
export declare const BoliviaCityScalarFieldEnum: {
    readonly id: "id";
    readonly departamento: "departamento";
    readonly nombre: "nombre";
    readonly isActive: "isActive";
};
export type BoliviaCityScalarFieldEnum = (typeof BoliviaCityScalarFieldEnum)[keyof typeof BoliviaCityScalarFieldEnum];
export declare const PatientDoctorAccessScalarFieldEnum: {
    readonly id: "id";
    readonly patientProfileId: "patientProfileId";
    readonly doctorProfileId: "doctorProfileId";
    readonly grantedAt: "grantedAt";
    readonly revokedAt: "revokedAt";
    readonly grantedBy: "grantedBy";
    readonly canViewBackground: "canViewBackground";
    readonly canViewEncounters: "canViewEncounters";
};
export type PatientDoctorAccessScalarFieldEnum = (typeof PatientDoctorAccessScalarFieldEnum)[keyof typeof PatientDoctorAccessScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const JsonNullValueInput: {
    readonly JsonNull: any;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: any;
    readonly JsonNull: any;
    readonly AnyNull: any;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type EnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentType'>;
export type ListEnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentType[]'>;
export type EnumDepartmentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Department'>;
export type ListEnumDepartmentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Department[]'>;
export type EnumSexBiologicalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SexBiological'>;
export type ListEnumSexBiologicalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SexBiological[]'>;
export type EnumGenderIdentityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GenderIdentity'>;
export type ListEnumGenderIdentityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GenderIdentity[]'>;
export type EnumMaritalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaritalStatus'>;
export type ListEnumMaritalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaritalStatus[]'>;
export type EnumKinshipFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Kinship'>;
export type ListEnumKinshipFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Kinship[]'>;
export type EnumBackgroundToggleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BackgroundToggle'>;
export type ListEnumBackgroundToggleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BackgroundToggle[]'>;
export type EnumSmokingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SmokingStatus'>;
export type ListEnumSmokingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SmokingStatus[]'>;
export type EnumAlcoholConsumptionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlcoholConsumption'>;
export type ListEnumAlcoholConsumptionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlcoholConsumption[]'>;
export type EnumPhysicalActivityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PhysicalActivity'>;
export type ListEnumPhysicalActivityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PhysicalActivity[]'>;
export type EnumPregnancyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PregnancyStatus'>;
export type ListEnumPregnancyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PregnancyStatus[]'>;
export type EnumContraceptiveMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContraceptiveMethod'>;
export type ListEnumContraceptiveMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContraceptiveMethod[]'>;
export type EnumAllergyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AllergyType'>;
export type ListEnumAllergyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AllergyType[]'>;
export type EnumChronicConditionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChronicConditionType'>;
export type ListEnumChronicConditionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChronicConditionType[]'>;
export type EnumFamilyRelationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FamilyRelation'>;
export type ListEnumFamilyRelationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FamilyRelation[]'>;
export type EnumFamilyDiseaseFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FamilyDisease'>;
export type ListEnumFamilyDiseaseFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FamilyDisease[]'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type EnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus'>;
export type ListEnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus[]'>;
export type EnumSymptomDurationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SymptomDuration'>;
export type ListEnumSymptomDurationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SymptomDuration[]'>;
export type EnumEncounterStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EncounterStatus'>;
export type ListEnumEncounterStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EncounterStatus[]'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
export type EnumBMIClassificationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BMIClassification'>;
export type ListEnumBMIClassificationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BMIClassification[]'>;
export type EnumDiagnosisTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiagnosisType'>;
export type ListEnumDiagnosisTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiagnosisType[]'>;
export type EnumFollowUpIntervalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FollowUpInterval'>;
export type ListEnumFollowUpIntervalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FollowUpInterval[]'>;
export type EnumSystemReviewFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SystemReview'>;
export type ListEnumSystemReviewFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SystemReview[]'>;
export type EnumPresentationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Presentation'>;
export type ListEnumPresentationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Presentation[]'>;
export type EnumAdministrationRouteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdministrationRoute'>;
export type ListEnumAdministrationRouteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdministrationRoute[]'>;
export type EnumMedicationFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MedicationFrequency'>;
export type ListEnumMedicationFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MedicationFrequency[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    userRoleAssignment?: Prisma.UserRoleAssignmentOmit;
    patientProfile?: Prisma.PatientProfileOmit;
    patientIdentification?: Prisma.PatientIdentificationOmit;
    emergencyContact?: Prisma.EmergencyContactOmit;
    patientBackground?: Prisma.PatientBackgroundOmit;
    patientAllergy?: Prisma.PatientAllergyOmit;
    patientChronicCondition?: Prisma.PatientChronicConditionOmit;
    patientMedication?: Prisma.PatientMedicationOmit;
    patientSurgery?: Prisma.PatientSurgeryOmit;
    patientHospitalization?: Prisma.PatientHospitalizationOmit;
    patientFamilyHistory?: Prisma.PatientFamilyHistoryOmit;
    patientBackgroundVersion?: Prisma.PatientBackgroundVersionOmit;
    doctorProfile?: Prisma.DoctorProfileOmit;
    medicalSpecialty?: Prisma.MedicalSpecialtyOmit;
    appointment?: Prisma.AppointmentOmit;
    clinicalEncounter?: Prisma.ClinicalEncounterOmit;
    clinicalAddendum?: Prisma.ClinicalAddendumOmit;
    encounterDiagnosis?: Prisma.EncounterDiagnosisOmit;
    encounterSystemReview?: Prisma.EncounterSystemReviewOmit;
    encounterPrescription?: Prisma.EncounterPrescriptionOmit;
    encounterLabOrder?: Prisma.EncounterLabOrderOmit;
    encounterImagingOrder?: Prisma.EncounterImagingOrderOmit;
    encounterReferral?: Prisma.EncounterReferralOmit;
    cie10Code?: Prisma.Cie10CodeOmit;
    medicationsCatalog?: Prisma.MedicationsCatalogOmit;
    labStudiesCatalog?: Prisma.LabStudiesCatalogOmit;
    imagingStudiesCatalog?: Prisma.ImagingStudiesCatalogOmit;
    boliviaCity?: Prisma.BoliviaCityOmit;
    patientDoctorAccess?: Prisma.PatientDoctorAccessOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;

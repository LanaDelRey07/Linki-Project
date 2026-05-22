import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PatientDoctorAccessModel = runtime.Types.Result.DefaultSelection<Prisma.$PatientDoctorAccessPayload>;
export type AggregatePatientDoctorAccess = {
    _count: PatientDoctorAccessCountAggregateOutputType | null;
    _min: PatientDoctorAccessMinAggregateOutputType | null;
    _max: PatientDoctorAccessMaxAggregateOutputType | null;
};
export type PatientDoctorAccessMinAggregateOutputType = {
    id: string | null;
    patientProfileId: string | null;
    doctorProfileId: string | null;
    grantedAt: Date | null;
    revokedAt: Date | null;
    grantedBy: string | null;
    canViewBackground: boolean | null;
    canViewEncounters: boolean | null;
};
export type PatientDoctorAccessMaxAggregateOutputType = {
    id: string | null;
    patientProfileId: string | null;
    doctorProfileId: string | null;
    grantedAt: Date | null;
    revokedAt: Date | null;
    grantedBy: string | null;
    canViewBackground: boolean | null;
    canViewEncounters: boolean | null;
};
export type PatientDoctorAccessCountAggregateOutputType = {
    id: number;
    patientProfileId: number;
    doctorProfileId: number;
    grantedAt: number;
    revokedAt: number;
    grantedBy: number;
    canViewBackground: number;
    canViewEncounters: number;
    _all: number;
};
export type PatientDoctorAccessMinAggregateInputType = {
    id?: true;
    patientProfileId?: true;
    doctorProfileId?: true;
    grantedAt?: true;
    revokedAt?: true;
    grantedBy?: true;
    canViewBackground?: true;
    canViewEncounters?: true;
};
export type PatientDoctorAccessMaxAggregateInputType = {
    id?: true;
    patientProfileId?: true;
    doctorProfileId?: true;
    grantedAt?: true;
    revokedAt?: true;
    grantedBy?: true;
    canViewBackground?: true;
    canViewEncounters?: true;
};
export type PatientDoctorAccessCountAggregateInputType = {
    id?: true;
    patientProfileId?: true;
    doctorProfileId?: true;
    grantedAt?: true;
    revokedAt?: true;
    grantedBy?: true;
    canViewBackground?: true;
    canViewEncounters?: true;
    _all?: true;
};
export type PatientDoctorAccessAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientDoctorAccessWhereInput;
    orderBy?: Prisma.PatientDoctorAccessOrderByWithRelationInput | Prisma.PatientDoctorAccessOrderByWithRelationInput[];
    cursor?: Prisma.PatientDoctorAccessWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PatientDoctorAccessCountAggregateInputType;
    _min?: PatientDoctorAccessMinAggregateInputType;
    _max?: PatientDoctorAccessMaxAggregateInputType;
};
export type GetPatientDoctorAccessAggregateType<T extends PatientDoctorAccessAggregateArgs> = {
    [P in keyof T & keyof AggregatePatientDoctorAccess]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePatientDoctorAccess[P]> : Prisma.GetScalarType<T[P], AggregatePatientDoctorAccess[P]>;
};
export type PatientDoctorAccessGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientDoctorAccessWhereInput;
    orderBy?: Prisma.PatientDoctorAccessOrderByWithAggregationInput | Prisma.PatientDoctorAccessOrderByWithAggregationInput[];
    by: Prisma.PatientDoctorAccessScalarFieldEnum[] | Prisma.PatientDoctorAccessScalarFieldEnum;
    having?: Prisma.PatientDoctorAccessScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PatientDoctorAccessCountAggregateInputType | true;
    _min?: PatientDoctorAccessMinAggregateInputType;
    _max?: PatientDoctorAccessMaxAggregateInputType;
};
export type PatientDoctorAccessGroupByOutputType = {
    id: string;
    patientProfileId: string;
    doctorProfileId: string;
    grantedAt: Date;
    revokedAt: Date | null;
    grantedBy: string;
    canViewBackground: boolean;
    canViewEncounters: boolean;
    _count: PatientDoctorAccessCountAggregateOutputType | null;
    _min: PatientDoctorAccessMinAggregateOutputType | null;
    _max: PatientDoctorAccessMaxAggregateOutputType | null;
};
export type GetPatientDoctorAccessGroupByPayload<T extends PatientDoctorAccessGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PatientDoctorAccessGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PatientDoctorAccessGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PatientDoctorAccessGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PatientDoctorAccessGroupByOutputType[P]>;
}>>;
export type PatientDoctorAccessWhereInput = {
    AND?: Prisma.PatientDoctorAccessWhereInput | Prisma.PatientDoctorAccessWhereInput[];
    OR?: Prisma.PatientDoctorAccessWhereInput[];
    NOT?: Prisma.PatientDoctorAccessWhereInput | Prisma.PatientDoctorAccessWhereInput[];
    id?: Prisma.StringFilter<"PatientDoctorAccess"> | string;
    patientProfileId?: Prisma.StringFilter<"PatientDoctorAccess"> | string;
    doctorProfileId?: Prisma.StringFilter<"PatientDoctorAccess"> | string;
    grantedAt?: Prisma.DateTimeFilter<"PatientDoctorAccess"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"PatientDoctorAccess"> | Date | string | null;
    grantedBy?: Prisma.StringFilter<"PatientDoctorAccess"> | string;
    canViewBackground?: Prisma.BoolFilter<"PatientDoctorAccess"> | boolean;
    canViewEncounters?: Prisma.BoolFilter<"PatientDoctorAccess"> | boolean;
    patientProfile?: Prisma.XOR<Prisma.PatientProfileScalarRelationFilter, Prisma.PatientProfileWhereInput>;
    doctorProfile?: Prisma.XOR<Prisma.DoctorProfileScalarRelationFilter, Prisma.DoctorProfileWhereInput>;
};
export type PatientDoctorAccessOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    patientProfileId?: Prisma.SortOrder;
    doctorProfileId?: Prisma.SortOrder;
    grantedAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    grantedBy?: Prisma.SortOrder;
    canViewBackground?: Prisma.SortOrder;
    canViewEncounters?: Prisma.SortOrder;
    patientProfile?: Prisma.PatientProfileOrderByWithRelationInput;
    doctorProfile?: Prisma.DoctorProfileOrderByWithRelationInput;
};
export type PatientDoctorAccessWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    patientProfileId_doctorProfileId?: Prisma.PatientDoctorAccessPatientProfileIdDoctorProfileIdCompoundUniqueInput;
    AND?: Prisma.PatientDoctorAccessWhereInput | Prisma.PatientDoctorAccessWhereInput[];
    OR?: Prisma.PatientDoctorAccessWhereInput[];
    NOT?: Prisma.PatientDoctorAccessWhereInput | Prisma.PatientDoctorAccessWhereInput[];
    patientProfileId?: Prisma.StringFilter<"PatientDoctorAccess"> | string;
    doctorProfileId?: Prisma.StringFilter<"PatientDoctorAccess"> | string;
    grantedAt?: Prisma.DateTimeFilter<"PatientDoctorAccess"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"PatientDoctorAccess"> | Date | string | null;
    grantedBy?: Prisma.StringFilter<"PatientDoctorAccess"> | string;
    canViewBackground?: Prisma.BoolFilter<"PatientDoctorAccess"> | boolean;
    canViewEncounters?: Prisma.BoolFilter<"PatientDoctorAccess"> | boolean;
    patientProfile?: Prisma.XOR<Prisma.PatientProfileScalarRelationFilter, Prisma.PatientProfileWhereInput>;
    doctorProfile?: Prisma.XOR<Prisma.DoctorProfileScalarRelationFilter, Prisma.DoctorProfileWhereInput>;
}, "id" | "patientProfileId_doctorProfileId">;
export type PatientDoctorAccessOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    patientProfileId?: Prisma.SortOrder;
    doctorProfileId?: Prisma.SortOrder;
    grantedAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    grantedBy?: Prisma.SortOrder;
    canViewBackground?: Prisma.SortOrder;
    canViewEncounters?: Prisma.SortOrder;
    _count?: Prisma.PatientDoctorAccessCountOrderByAggregateInput;
    _max?: Prisma.PatientDoctorAccessMaxOrderByAggregateInput;
    _min?: Prisma.PatientDoctorAccessMinOrderByAggregateInput;
};
export type PatientDoctorAccessScalarWhereWithAggregatesInput = {
    AND?: Prisma.PatientDoctorAccessScalarWhereWithAggregatesInput | Prisma.PatientDoctorAccessScalarWhereWithAggregatesInput[];
    OR?: Prisma.PatientDoctorAccessScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PatientDoctorAccessScalarWhereWithAggregatesInput | Prisma.PatientDoctorAccessScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PatientDoctorAccess"> | string;
    patientProfileId?: Prisma.StringWithAggregatesFilter<"PatientDoctorAccess"> | string;
    doctorProfileId?: Prisma.StringWithAggregatesFilter<"PatientDoctorAccess"> | string;
    grantedAt?: Prisma.DateTimeWithAggregatesFilter<"PatientDoctorAccess"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"PatientDoctorAccess"> | Date | string | null;
    grantedBy?: Prisma.StringWithAggregatesFilter<"PatientDoctorAccess"> | string;
    canViewBackground?: Prisma.BoolWithAggregatesFilter<"PatientDoctorAccess"> | boolean;
    canViewEncounters?: Prisma.BoolWithAggregatesFilter<"PatientDoctorAccess"> | boolean;
};
export type PatientDoctorAccessCreateInput = {
    id?: string;
    grantedAt?: Date | string;
    revokedAt?: Date | string | null;
    grantedBy?: string;
    canViewBackground?: boolean;
    canViewEncounters?: boolean;
    patientProfile: Prisma.PatientProfileCreateNestedOneWithoutGrantedAccessInput;
    doctorProfile: Prisma.DoctorProfileCreateNestedOneWithoutAccessGrantedInput;
};
export type PatientDoctorAccessUncheckedCreateInput = {
    id?: string;
    patientProfileId: string;
    doctorProfileId: string;
    grantedAt?: Date | string;
    revokedAt?: Date | string | null;
    grantedBy?: string;
    canViewBackground?: boolean;
    canViewEncounters?: boolean;
};
export type PatientDoctorAccessUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    grantedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grantedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    canViewBackground?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    canViewEncounters?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    patientProfile?: Prisma.PatientProfileUpdateOneRequiredWithoutGrantedAccessNestedInput;
    doctorProfile?: Prisma.DoctorProfileUpdateOneRequiredWithoutAccessGrantedNestedInput;
};
export type PatientDoctorAccessUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    patientProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    doctorProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    grantedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grantedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    canViewBackground?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    canViewEncounters?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PatientDoctorAccessCreateManyInput = {
    id?: string;
    patientProfileId: string;
    doctorProfileId: string;
    grantedAt?: Date | string;
    revokedAt?: Date | string | null;
    grantedBy?: string;
    canViewBackground?: boolean;
    canViewEncounters?: boolean;
};
export type PatientDoctorAccessUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    grantedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grantedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    canViewBackground?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    canViewEncounters?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PatientDoctorAccessUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    patientProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    doctorProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    grantedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grantedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    canViewBackground?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    canViewEncounters?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PatientDoctorAccessListRelationFilter = {
    every?: Prisma.PatientDoctorAccessWhereInput;
    some?: Prisma.PatientDoctorAccessWhereInput;
    none?: Prisma.PatientDoctorAccessWhereInput;
};
export type PatientDoctorAccessOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PatientDoctorAccessPatientProfileIdDoctorProfileIdCompoundUniqueInput = {
    patientProfileId: string;
    doctorProfileId: string;
};
export type PatientDoctorAccessCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    patientProfileId?: Prisma.SortOrder;
    doctorProfileId?: Prisma.SortOrder;
    grantedAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    grantedBy?: Prisma.SortOrder;
    canViewBackground?: Prisma.SortOrder;
    canViewEncounters?: Prisma.SortOrder;
};
export type PatientDoctorAccessMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    patientProfileId?: Prisma.SortOrder;
    doctorProfileId?: Prisma.SortOrder;
    grantedAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    grantedBy?: Prisma.SortOrder;
    canViewBackground?: Prisma.SortOrder;
    canViewEncounters?: Prisma.SortOrder;
};
export type PatientDoctorAccessMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    patientProfileId?: Prisma.SortOrder;
    doctorProfileId?: Prisma.SortOrder;
    grantedAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    grantedBy?: Prisma.SortOrder;
    canViewBackground?: Prisma.SortOrder;
    canViewEncounters?: Prisma.SortOrder;
};
export type PatientDoctorAccessCreateNestedManyWithoutPatientProfileInput = {
    create?: Prisma.XOR<Prisma.PatientDoctorAccessCreateWithoutPatientProfileInput, Prisma.PatientDoctorAccessUncheckedCreateWithoutPatientProfileInput> | Prisma.PatientDoctorAccessCreateWithoutPatientProfileInput[] | Prisma.PatientDoctorAccessUncheckedCreateWithoutPatientProfileInput[];
    connectOrCreate?: Prisma.PatientDoctorAccessCreateOrConnectWithoutPatientProfileInput | Prisma.PatientDoctorAccessCreateOrConnectWithoutPatientProfileInput[];
    createMany?: Prisma.PatientDoctorAccessCreateManyPatientProfileInputEnvelope;
    connect?: Prisma.PatientDoctorAccessWhereUniqueInput | Prisma.PatientDoctorAccessWhereUniqueInput[];
};
export type PatientDoctorAccessUncheckedCreateNestedManyWithoutPatientProfileInput = {
    create?: Prisma.XOR<Prisma.PatientDoctorAccessCreateWithoutPatientProfileInput, Prisma.PatientDoctorAccessUncheckedCreateWithoutPatientProfileInput> | Prisma.PatientDoctorAccessCreateWithoutPatientProfileInput[] | Prisma.PatientDoctorAccessUncheckedCreateWithoutPatientProfileInput[];
    connectOrCreate?: Prisma.PatientDoctorAccessCreateOrConnectWithoutPatientProfileInput | Prisma.PatientDoctorAccessCreateOrConnectWithoutPatientProfileInput[];
    createMany?: Prisma.PatientDoctorAccessCreateManyPatientProfileInputEnvelope;
    connect?: Prisma.PatientDoctorAccessWhereUniqueInput | Prisma.PatientDoctorAccessWhereUniqueInput[];
};
export type PatientDoctorAccessUpdateManyWithoutPatientProfileNestedInput = {
    create?: Prisma.XOR<Prisma.PatientDoctorAccessCreateWithoutPatientProfileInput, Prisma.PatientDoctorAccessUncheckedCreateWithoutPatientProfileInput> | Prisma.PatientDoctorAccessCreateWithoutPatientProfileInput[] | Prisma.PatientDoctorAccessUncheckedCreateWithoutPatientProfileInput[];
    connectOrCreate?: Prisma.PatientDoctorAccessCreateOrConnectWithoutPatientProfileInput | Prisma.PatientDoctorAccessCreateOrConnectWithoutPatientProfileInput[];
    upsert?: Prisma.PatientDoctorAccessUpsertWithWhereUniqueWithoutPatientProfileInput | Prisma.PatientDoctorAccessUpsertWithWhereUniqueWithoutPatientProfileInput[];
    createMany?: Prisma.PatientDoctorAccessCreateManyPatientProfileInputEnvelope;
    set?: Prisma.PatientDoctorAccessWhereUniqueInput | Prisma.PatientDoctorAccessWhereUniqueInput[];
    disconnect?: Prisma.PatientDoctorAccessWhereUniqueInput | Prisma.PatientDoctorAccessWhereUniqueInput[];
    delete?: Prisma.PatientDoctorAccessWhereUniqueInput | Prisma.PatientDoctorAccessWhereUniqueInput[];
    connect?: Prisma.PatientDoctorAccessWhereUniqueInput | Prisma.PatientDoctorAccessWhereUniqueInput[];
    update?: Prisma.PatientDoctorAccessUpdateWithWhereUniqueWithoutPatientProfileInput | Prisma.PatientDoctorAccessUpdateWithWhereUniqueWithoutPatientProfileInput[];
    updateMany?: Prisma.PatientDoctorAccessUpdateManyWithWhereWithoutPatientProfileInput | Prisma.PatientDoctorAccessUpdateManyWithWhereWithoutPatientProfileInput[];
    deleteMany?: Prisma.PatientDoctorAccessScalarWhereInput | Prisma.PatientDoctorAccessScalarWhereInput[];
};
export type PatientDoctorAccessUncheckedUpdateManyWithoutPatientProfileNestedInput = {
    create?: Prisma.XOR<Prisma.PatientDoctorAccessCreateWithoutPatientProfileInput, Prisma.PatientDoctorAccessUncheckedCreateWithoutPatientProfileInput> | Prisma.PatientDoctorAccessCreateWithoutPatientProfileInput[] | Prisma.PatientDoctorAccessUncheckedCreateWithoutPatientProfileInput[];
    connectOrCreate?: Prisma.PatientDoctorAccessCreateOrConnectWithoutPatientProfileInput | Prisma.PatientDoctorAccessCreateOrConnectWithoutPatientProfileInput[];
    upsert?: Prisma.PatientDoctorAccessUpsertWithWhereUniqueWithoutPatientProfileInput | Prisma.PatientDoctorAccessUpsertWithWhereUniqueWithoutPatientProfileInput[];
    createMany?: Prisma.PatientDoctorAccessCreateManyPatientProfileInputEnvelope;
    set?: Prisma.PatientDoctorAccessWhereUniqueInput | Prisma.PatientDoctorAccessWhereUniqueInput[];
    disconnect?: Prisma.PatientDoctorAccessWhereUniqueInput | Prisma.PatientDoctorAccessWhereUniqueInput[];
    delete?: Prisma.PatientDoctorAccessWhereUniqueInput | Prisma.PatientDoctorAccessWhereUniqueInput[];
    connect?: Prisma.PatientDoctorAccessWhereUniqueInput | Prisma.PatientDoctorAccessWhereUniqueInput[];
    update?: Prisma.PatientDoctorAccessUpdateWithWhereUniqueWithoutPatientProfileInput | Prisma.PatientDoctorAccessUpdateWithWhereUniqueWithoutPatientProfileInput[];
    updateMany?: Prisma.PatientDoctorAccessUpdateManyWithWhereWithoutPatientProfileInput | Prisma.PatientDoctorAccessUpdateManyWithWhereWithoutPatientProfileInput[];
    deleteMany?: Prisma.PatientDoctorAccessScalarWhereInput | Prisma.PatientDoctorAccessScalarWhereInput[];
};
export type PatientDoctorAccessCreateNestedManyWithoutDoctorProfileInput = {
    create?: Prisma.XOR<Prisma.PatientDoctorAccessCreateWithoutDoctorProfileInput, Prisma.PatientDoctorAccessUncheckedCreateWithoutDoctorProfileInput> | Prisma.PatientDoctorAccessCreateWithoutDoctorProfileInput[] | Prisma.PatientDoctorAccessUncheckedCreateWithoutDoctorProfileInput[];
    connectOrCreate?: Prisma.PatientDoctorAccessCreateOrConnectWithoutDoctorProfileInput | Prisma.PatientDoctorAccessCreateOrConnectWithoutDoctorProfileInput[];
    createMany?: Prisma.PatientDoctorAccessCreateManyDoctorProfileInputEnvelope;
    connect?: Prisma.PatientDoctorAccessWhereUniqueInput | Prisma.PatientDoctorAccessWhereUniqueInput[];
};
export type PatientDoctorAccessUncheckedCreateNestedManyWithoutDoctorProfileInput = {
    create?: Prisma.XOR<Prisma.PatientDoctorAccessCreateWithoutDoctorProfileInput, Prisma.PatientDoctorAccessUncheckedCreateWithoutDoctorProfileInput> | Prisma.PatientDoctorAccessCreateWithoutDoctorProfileInput[] | Prisma.PatientDoctorAccessUncheckedCreateWithoutDoctorProfileInput[];
    connectOrCreate?: Prisma.PatientDoctorAccessCreateOrConnectWithoutDoctorProfileInput | Prisma.PatientDoctorAccessCreateOrConnectWithoutDoctorProfileInput[];
    createMany?: Prisma.PatientDoctorAccessCreateManyDoctorProfileInputEnvelope;
    connect?: Prisma.PatientDoctorAccessWhereUniqueInput | Prisma.PatientDoctorAccessWhereUniqueInput[];
};
export type PatientDoctorAccessUpdateManyWithoutDoctorProfileNestedInput = {
    create?: Prisma.XOR<Prisma.PatientDoctorAccessCreateWithoutDoctorProfileInput, Prisma.PatientDoctorAccessUncheckedCreateWithoutDoctorProfileInput> | Prisma.PatientDoctorAccessCreateWithoutDoctorProfileInput[] | Prisma.PatientDoctorAccessUncheckedCreateWithoutDoctorProfileInput[];
    connectOrCreate?: Prisma.PatientDoctorAccessCreateOrConnectWithoutDoctorProfileInput | Prisma.PatientDoctorAccessCreateOrConnectWithoutDoctorProfileInput[];
    upsert?: Prisma.PatientDoctorAccessUpsertWithWhereUniqueWithoutDoctorProfileInput | Prisma.PatientDoctorAccessUpsertWithWhereUniqueWithoutDoctorProfileInput[];
    createMany?: Prisma.PatientDoctorAccessCreateManyDoctorProfileInputEnvelope;
    set?: Prisma.PatientDoctorAccessWhereUniqueInput | Prisma.PatientDoctorAccessWhereUniqueInput[];
    disconnect?: Prisma.PatientDoctorAccessWhereUniqueInput | Prisma.PatientDoctorAccessWhereUniqueInput[];
    delete?: Prisma.PatientDoctorAccessWhereUniqueInput | Prisma.PatientDoctorAccessWhereUniqueInput[];
    connect?: Prisma.PatientDoctorAccessWhereUniqueInput | Prisma.PatientDoctorAccessWhereUniqueInput[];
    update?: Prisma.PatientDoctorAccessUpdateWithWhereUniqueWithoutDoctorProfileInput | Prisma.PatientDoctorAccessUpdateWithWhereUniqueWithoutDoctorProfileInput[];
    updateMany?: Prisma.PatientDoctorAccessUpdateManyWithWhereWithoutDoctorProfileInput | Prisma.PatientDoctorAccessUpdateManyWithWhereWithoutDoctorProfileInput[];
    deleteMany?: Prisma.PatientDoctorAccessScalarWhereInput | Prisma.PatientDoctorAccessScalarWhereInput[];
};
export type PatientDoctorAccessUncheckedUpdateManyWithoutDoctorProfileNestedInput = {
    create?: Prisma.XOR<Prisma.PatientDoctorAccessCreateWithoutDoctorProfileInput, Prisma.PatientDoctorAccessUncheckedCreateWithoutDoctorProfileInput> | Prisma.PatientDoctorAccessCreateWithoutDoctorProfileInput[] | Prisma.PatientDoctorAccessUncheckedCreateWithoutDoctorProfileInput[];
    connectOrCreate?: Prisma.PatientDoctorAccessCreateOrConnectWithoutDoctorProfileInput | Prisma.PatientDoctorAccessCreateOrConnectWithoutDoctorProfileInput[];
    upsert?: Prisma.PatientDoctorAccessUpsertWithWhereUniqueWithoutDoctorProfileInput | Prisma.PatientDoctorAccessUpsertWithWhereUniqueWithoutDoctorProfileInput[];
    createMany?: Prisma.PatientDoctorAccessCreateManyDoctorProfileInputEnvelope;
    set?: Prisma.PatientDoctorAccessWhereUniqueInput | Prisma.PatientDoctorAccessWhereUniqueInput[];
    disconnect?: Prisma.PatientDoctorAccessWhereUniqueInput | Prisma.PatientDoctorAccessWhereUniqueInput[];
    delete?: Prisma.PatientDoctorAccessWhereUniqueInput | Prisma.PatientDoctorAccessWhereUniqueInput[];
    connect?: Prisma.PatientDoctorAccessWhereUniqueInput | Prisma.PatientDoctorAccessWhereUniqueInput[];
    update?: Prisma.PatientDoctorAccessUpdateWithWhereUniqueWithoutDoctorProfileInput | Prisma.PatientDoctorAccessUpdateWithWhereUniqueWithoutDoctorProfileInput[];
    updateMany?: Prisma.PatientDoctorAccessUpdateManyWithWhereWithoutDoctorProfileInput | Prisma.PatientDoctorAccessUpdateManyWithWhereWithoutDoctorProfileInput[];
    deleteMany?: Prisma.PatientDoctorAccessScalarWhereInput | Prisma.PatientDoctorAccessScalarWhereInput[];
};
export type PatientDoctorAccessCreateWithoutPatientProfileInput = {
    id?: string;
    grantedAt?: Date | string;
    revokedAt?: Date | string | null;
    grantedBy?: string;
    canViewBackground?: boolean;
    canViewEncounters?: boolean;
    doctorProfile: Prisma.DoctorProfileCreateNestedOneWithoutAccessGrantedInput;
};
export type PatientDoctorAccessUncheckedCreateWithoutPatientProfileInput = {
    id?: string;
    doctorProfileId: string;
    grantedAt?: Date | string;
    revokedAt?: Date | string | null;
    grantedBy?: string;
    canViewBackground?: boolean;
    canViewEncounters?: boolean;
};
export type PatientDoctorAccessCreateOrConnectWithoutPatientProfileInput = {
    where: Prisma.PatientDoctorAccessWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientDoctorAccessCreateWithoutPatientProfileInput, Prisma.PatientDoctorAccessUncheckedCreateWithoutPatientProfileInput>;
};
export type PatientDoctorAccessCreateManyPatientProfileInputEnvelope = {
    data: Prisma.PatientDoctorAccessCreateManyPatientProfileInput | Prisma.PatientDoctorAccessCreateManyPatientProfileInput[];
    skipDuplicates?: boolean;
};
export type PatientDoctorAccessUpsertWithWhereUniqueWithoutPatientProfileInput = {
    where: Prisma.PatientDoctorAccessWhereUniqueInput;
    update: Prisma.XOR<Prisma.PatientDoctorAccessUpdateWithoutPatientProfileInput, Prisma.PatientDoctorAccessUncheckedUpdateWithoutPatientProfileInput>;
    create: Prisma.XOR<Prisma.PatientDoctorAccessCreateWithoutPatientProfileInput, Prisma.PatientDoctorAccessUncheckedCreateWithoutPatientProfileInput>;
};
export type PatientDoctorAccessUpdateWithWhereUniqueWithoutPatientProfileInput = {
    where: Prisma.PatientDoctorAccessWhereUniqueInput;
    data: Prisma.XOR<Prisma.PatientDoctorAccessUpdateWithoutPatientProfileInput, Prisma.PatientDoctorAccessUncheckedUpdateWithoutPatientProfileInput>;
};
export type PatientDoctorAccessUpdateManyWithWhereWithoutPatientProfileInput = {
    where: Prisma.PatientDoctorAccessScalarWhereInput;
    data: Prisma.XOR<Prisma.PatientDoctorAccessUpdateManyMutationInput, Prisma.PatientDoctorAccessUncheckedUpdateManyWithoutPatientProfileInput>;
};
export type PatientDoctorAccessScalarWhereInput = {
    AND?: Prisma.PatientDoctorAccessScalarWhereInput | Prisma.PatientDoctorAccessScalarWhereInput[];
    OR?: Prisma.PatientDoctorAccessScalarWhereInput[];
    NOT?: Prisma.PatientDoctorAccessScalarWhereInput | Prisma.PatientDoctorAccessScalarWhereInput[];
    id?: Prisma.StringFilter<"PatientDoctorAccess"> | string;
    patientProfileId?: Prisma.StringFilter<"PatientDoctorAccess"> | string;
    doctorProfileId?: Prisma.StringFilter<"PatientDoctorAccess"> | string;
    grantedAt?: Prisma.DateTimeFilter<"PatientDoctorAccess"> | Date | string;
    revokedAt?: Prisma.DateTimeNullableFilter<"PatientDoctorAccess"> | Date | string | null;
    grantedBy?: Prisma.StringFilter<"PatientDoctorAccess"> | string;
    canViewBackground?: Prisma.BoolFilter<"PatientDoctorAccess"> | boolean;
    canViewEncounters?: Prisma.BoolFilter<"PatientDoctorAccess"> | boolean;
};
export type PatientDoctorAccessCreateWithoutDoctorProfileInput = {
    id?: string;
    grantedAt?: Date | string;
    revokedAt?: Date | string | null;
    grantedBy?: string;
    canViewBackground?: boolean;
    canViewEncounters?: boolean;
    patientProfile: Prisma.PatientProfileCreateNestedOneWithoutGrantedAccessInput;
};
export type PatientDoctorAccessUncheckedCreateWithoutDoctorProfileInput = {
    id?: string;
    patientProfileId: string;
    grantedAt?: Date | string;
    revokedAt?: Date | string | null;
    grantedBy?: string;
    canViewBackground?: boolean;
    canViewEncounters?: boolean;
};
export type PatientDoctorAccessCreateOrConnectWithoutDoctorProfileInput = {
    where: Prisma.PatientDoctorAccessWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientDoctorAccessCreateWithoutDoctorProfileInput, Prisma.PatientDoctorAccessUncheckedCreateWithoutDoctorProfileInput>;
};
export type PatientDoctorAccessCreateManyDoctorProfileInputEnvelope = {
    data: Prisma.PatientDoctorAccessCreateManyDoctorProfileInput | Prisma.PatientDoctorAccessCreateManyDoctorProfileInput[];
    skipDuplicates?: boolean;
};
export type PatientDoctorAccessUpsertWithWhereUniqueWithoutDoctorProfileInput = {
    where: Prisma.PatientDoctorAccessWhereUniqueInput;
    update: Prisma.XOR<Prisma.PatientDoctorAccessUpdateWithoutDoctorProfileInput, Prisma.PatientDoctorAccessUncheckedUpdateWithoutDoctorProfileInput>;
    create: Prisma.XOR<Prisma.PatientDoctorAccessCreateWithoutDoctorProfileInput, Prisma.PatientDoctorAccessUncheckedCreateWithoutDoctorProfileInput>;
};
export type PatientDoctorAccessUpdateWithWhereUniqueWithoutDoctorProfileInput = {
    where: Prisma.PatientDoctorAccessWhereUniqueInput;
    data: Prisma.XOR<Prisma.PatientDoctorAccessUpdateWithoutDoctorProfileInput, Prisma.PatientDoctorAccessUncheckedUpdateWithoutDoctorProfileInput>;
};
export type PatientDoctorAccessUpdateManyWithWhereWithoutDoctorProfileInput = {
    where: Prisma.PatientDoctorAccessScalarWhereInput;
    data: Prisma.XOR<Prisma.PatientDoctorAccessUpdateManyMutationInput, Prisma.PatientDoctorAccessUncheckedUpdateManyWithoutDoctorProfileInput>;
};
export type PatientDoctorAccessCreateManyPatientProfileInput = {
    id?: string;
    doctorProfileId: string;
    grantedAt?: Date | string;
    revokedAt?: Date | string | null;
    grantedBy?: string;
    canViewBackground?: boolean;
    canViewEncounters?: boolean;
};
export type PatientDoctorAccessUpdateWithoutPatientProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    grantedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grantedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    canViewBackground?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    canViewEncounters?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    doctorProfile?: Prisma.DoctorProfileUpdateOneRequiredWithoutAccessGrantedNestedInput;
};
export type PatientDoctorAccessUncheckedUpdateWithoutPatientProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    doctorProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    grantedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grantedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    canViewBackground?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    canViewEncounters?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PatientDoctorAccessUncheckedUpdateManyWithoutPatientProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    doctorProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    grantedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grantedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    canViewBackground?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    canViewEncounters?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PatientDoctorAccessCreateManyDoctorProfileInput = {
    id?: string;
    patientProfileId: string;
    grantedAt?: Date | string;
    revokedAt?: Date | string | null;
    grantedBy?: string;
    canViewBackground?: boolean;
    canViewEncounters?: boolean;
};
export type PatientDoctorAccessUpdateWithoutDoctorProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    grantedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grantedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    canViewBackground?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    canViewEncounters?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    patientProfile?: Prisma.PatientProfileUpdateOneRequiredWithoutGrantedAccessNestedInput;
};
export type PatientDoctorAccessUncheckedUpdateWithoutDoctorProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    patientProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    grantedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grantedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    canViewBackground?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    canViewEncounters?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PatientDoctorAccessUncheckedUpdateManyWithoutDoctorProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    patientProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    grantedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grantedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    canViewBackground?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    canViewEncounters?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PatientDoctorAccessSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    patientProfileId?: boolean;
    doctorProfileId?: boolean;
    grantedAt?: boolean;
    revokedAt?: boolean;
    grantedBy?: boolean;
    canViewBackground?: boolean;
    canViewEncounters?: boolean;
    patientProfile?: boolean | Prisma.PatientProfileDefaultArgs<ExtArgs>;
    doctorProfile?: boolean | Prisma.DoctorProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patientDoctorAccess"]>;
export type PatientDoctorAccessSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    patientProfileId?: boolean;
    doctorProfileId?: boolean;
    grantedAt?: boolean;
    revokedAt?: boolean;
    grantedBy?: boolean;
    canViewBackground?: boolean;
    canViewEncounters?: boolean;
    patientProfile?: boolean | Prisma.PatientProfileDefaultArgs<ExtArgs>;
    doctorProfile?: boolean | Prisma.DoctorProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patientDoctorAccess"]>;
export type PatientDoctorAccessSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    patientProfileId?: boolean;
    doctorProfileId?: boolean;
    grantedAt?: boolean;
    revokedAt?: boolean;
    grantedBy?: boolean;
    canViewBackground?: boolean;
    canViewEncounters?: boolean;
    patientProfile?: boolean | Prisma.PatientProfileDefaultArgs<ExtArgs>;
    doctorProfile?: boolean | Prisma.DoctorProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patientDoctorAccess"]>;
export type PatientDoctorAccessSelectScalar = {
    id?: boolean;
    patientProfileId?: boolean;
    doctorProfileId?: boolean;
    grantedAt?: boolean;
    revokedAt?: boolean;
    grantedBy?: boolean;
    canViewBackground?: boolean;
    canViewEncounters?: boolean;
};
export type PatientDoctorAccessOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "patientProfileId" | "doctorProfileId" | "grantedAt" | "revokedAt" | "grantedBy" | "canViewBackground" | "canViewEncounters", ExtArgs["result"]["patientDoctorAccess"]>;
export type PatientDoctorAccessInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patientProfile?: boolean | Prisma.PatientProfileDefaultArgs<ExtArgs>;
    doctorProfile?: boolean | Prisma.DoctorProfileDefaultArgs<ExtArgs>;
};
export type PatientDoctorAccessIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patientProfile?: boolean | Prisma.PatientProfileDefaultArgs<ExtArgs>;
    doctorProfile?: boolean | Prisma.DoctorProfileDefaultArgs<ExtArgs>;
};
export type PatientDoctorAccessIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patientProfile?: boolean | Prisma.PatientProfileDefaultArgs<ExtArgs>;
    doctorProfile?: boolean | Prisma.DoctorProfileDefaultArgs<ExtArgs>;
};
export type $PatientDoctorAccessPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PatientDoctorAccess";
    objects: {
        patientProfile: Prisma.$PatientProfilePayload<ExtArgs>;
        doctorProfile: Prisma.$DoctorProfilePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        patientProfileId: string;
        doctorProfileId: string;
        grantedAt: Date;
        revokedAt: Date | null;
        grantedBy: string;
        canViewBackground: boolean;
        canViewEncounters: boolean;
    }, ExtArgs["result"]["patientDoctorAccess"]>;
    composites: {};
};
export type PatientDoctorAccessGetPayload<S extends boolean | null | undefined | PatientDoctorAccessDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PatientDoctorAccessPayload, S>;
export type PatientDoctorAccessCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PatientDoctorAccessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PatientDoctorAccessCountAggregateInputType | true;
};
export interface PatientDoctorAccessDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PatientDoctorAccess'];
        meta: {
            name: 'PatientDoctorAccess';
        };
    };
    findUnique<T extends PatientDoctorAccessFindUniqueArgs>(args: Prisma.SelectSubset<T, PatientDoctorAccessFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PatientDoctorAccessClient<runtime.Types.Result.GetResult<Prisma.$PatientDoctorAccessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PatientDoctorAccessFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PatientDoctorAccessFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PatientDoctorAccessClient<runtime.Types.Result.GetResult<Prisma.$PatientDoctorAccessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PatientDoctorAccessFindFirstArgs>(args?: Prisma.SelectSubset<T, PatientDoctorAccessFindFirstArgs<ExtArgs>>): Prisma.Prisma__PatientDoctorAccessClient<runtime.Types.Result.GetResult<Prisma.$PatientDoctorAccessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PatientDoctorAccessFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PatientDoctorAccessFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PatientDoctorAccessClient<runtime.Types.Result.GetResult<Prisma.$PatientDoctorAccessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PatientDoctorAccessFindManyArgs>(args?: Prisma.SelectSubset<T, PatientDoctorAccessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientDoctorAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PatientDoctorAccessCreateArgs>(args: Prisma.SelectSubset<T, PatientDoctorAccessCreateArgs<ExtArgs>>): Prisma.Prisma__PatientDoctorAccessClient<runtime.Types.Result.GetResult<Prisma.$PatientDoctorAccessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PatientDoctorAccessCreateManyArgs>(args?: Prisma.SelectSubset<T, PatientDoctorAccessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PatientDoctorAccessCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PatientDoctorAccessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientDoctorAccessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PatientDoctorAccessDeleteArgs>(args: Prisma.SelectSubset<T, PatientDoctorAccessDeleteArgs<ExtArgs>>): Prisma.Prisma__PatientDoctorAccessClient<runtime.Types.Result.GetResult<Prisma.$PatientDoctorAccessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PatientDoctorAccessUpdateArgs>(args: Prisma.SelectSubset<T, PatientDoctorAccessUpdateArgs<ExtArgs>>): Prisma.Prisma__PatientDoctorAccessClient<runtime.Types.Result.GetResult<Prisma.$PatientDoctorAccessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PatientDoctorAccessDeleteManyArgs>(args?: Prisma.SelectSubset<T, PatientDoctorAccessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PatientDoctorAccessUpdateManyArgs>(args: Prisma.SelectSubset<T, PatientDoctorAccessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PatientDoctorAccessUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PatientDoctorAccessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientDoctorAccessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PatientDoctorAccessUpsertArgs>(args: Prisma.SelectSubset<T, PatientDoctorAccessUpsertArgs<ExtArgs>>): Prisma.Prisma__PatientDoctorAccessClient<runtime.Types.Result.GetResult<Prisma.$PatientDoctorAccessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PatientDoctorAccessCountArgs>(args?: Prisma.Subset<T, PatientDoctorAccessCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PatientDoctorAccessCountAggregateOutputType> : number>;
    aggregate<T extends PatientDoctorAccessAggregateArgs>(args: Prisma.Subset<T, PatientDoctorAccessAggregateArgs>): Prisma.PrismaPromise<GetPatientDoctorAccessAggregateType<T>>;
    groupBy<T extends PatientDoctorAccessGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PatientDoctorAccessGroupByArgs['orderBy'];
    } : {
        orderBy?: PatientDoctorAccessGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PatientDoctorAccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientDoctorAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PatientDoctorAccessFieldRefs;
}
export interface Prisma__PatientDoctorAccessClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    patientProfile<T extends Prisma.PatientProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PatientProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__PatientProfileClient<runtime.Types.Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    doctorProfile<T extends Prisma.DoctorProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DoctorProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__DoctorProfileClient<runtime.Types.Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PatientDoctorAccessFieldRefs {
    readonly id: Prisma.FieldRef<"PatientDoctorAccess", 'String'>;
    readonly patientProfileId: Prisma.FieldRef<"PatientDoctorAccess", 'String'>;
    readonly doctorProfileId: Prisma.FieldRef<"PatientDoctorAccess", 'String'>;
    readonly grantedAt: Prisma.FieldRef<"PatientDoctorAccess", 'DateTime'>;
    readonly revokedAt: Prisma.FieldRef<"PatientDoctorAccess", 'DateTime'>;
    readonly grantedBy: Prisma.FieldRef<"PatientDoctorAccess", 'String'>;
    readonly canViewBackground: Prisma.FieldRef<"PatientDoctorAccess", 'Boolean'>;
    readonly canViewEncounters: Prisma.FieldRef<"PatientDoctorAccess", 'Boolean'>;
}
export type PatientDoctorAccessFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientDoctorAccessSelect<ExtArgs> | null;
    omit?: Prisma.PatientDoctorAccessOmit<ExtArgs> | null;
    include?: Prisma.PatientDoctorAccessInclude<ExtArgs> | null;
    where: Prisma.PatientDoctorAccessWhereUniqueInput;
};
export type PatientDoctorAccessFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientDoctorAccessSelect<ExtArgs> | null;
    omit?: Prisma.PatientDoctorAccessOmit<ExtArgs> | null;
    include?: Prisma.PatientDoctorAccessInclude<ExtArgs> | null;
    where: Prisma.PatientDoctorAccessWhereUniqueInput;
};
export type PatientDoctorAccessFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientDoctorAccessSelect<ExtArgs> | null;
    omit?: Prisma.PatientDoctorAccessOmit<ExtArgs> | null;
    include?: Prisma.PatientDoctorAccessInclude<ExtArgs> | null;
    where?: Prisma.PatientDoctorAccessWhereInput;
    orderBy?: Prisma.PatientDoctorAccessOrderByWithRelationInput | Prisma.PatientDoctorAccessOrderByWithRelationInput[];
    cursor?: Prisma.PatientDoctorAccessWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientDoctorAccessScalarFieldEnum | Prisma.PatientDoctorAccessScalarFieldEnum[];
};
export type PatientDoctorAccessFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientDoctorAccessSelect<ExtArgs> | null;
    omit?: Prisma.PatientDoctorAccessOmit<ExtArgs> | null;
    include?: Prisma.PatientDoctorAccessInclude<ExtArgs> | null;
    where?: Prisma.PatientDoctorAccessWhereInput;
    orderBy?: Prisma.PatientDoctorAccessOrderByWithRelationInput | Prisma.PatientDoctorAccessOrderByWithRelationInput[];
    cursor?: Prisma.PatientDoctorAccessWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientDoctorAccessScalarFieldEnum | Prisma.PatientDoctorAccessScalarFieldEnum[];
};
export type PatientDoctorAccessFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientDoctorAccessSelect<ExtArgs> | null;
    omit?: Prisma.PatientDoctorAccessOmit<ExtArgs> | null;
    include?: Prisma.PatientDoctorAccessInclude<ExtArgs> | null;
    where?: Prisma.PatientDoctorAccessWhereInput;
    orderBy?: Prisma.PatientDoctorAccessOrderByWithRelationInput | Prisma.PatientDoctorAccessOrderByWithRelationInput[];
    cursor?: Prisma.PatientDoctorAccessWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientDoctorAccessScalarFieldEnum | Prisma.PatientDoctorAccessScalarFieldEnum[];
};
export type PatientDoctorAccessCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientDoctorAccessSelect<ExtArgs> | null;
    omit?: Prisma.PatientDoctorAccessOmit<ExtArgs> | null;
    include?: Prisma.PatientDoctorAccessInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientDoctorAccessCreateInput, Prisma.PatientDoctorAccessUncheckedCreateInput>;
};
export type PatientDoctorAccessCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PatientDoctorAccessCreateManyInput | Prisma.PatientDoctorAccessCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PatientDoctorAccessCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientDoctorAccessSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PatientDoctorAccessOmit<ExtArgs> | null;
    data: Prisma.PatientDoctorAccessCreateManyInput | Prisma.PatientDoctorAccessCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PatientDoctorAccessIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PatientDoctorAccessUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientDoctorAccessSelect<ExtArgs> | null;
    omit?: Prisma.PatientDoctorAccessOmit<ExtArgs> | null;
    include?: Prisma.PatientDoctorAccessInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientDoctorAccessUpdateInput, Prisma.PatientDoctorAccessUncheckedUpdateInput>;
    where: Prisma.PatientDoctorAccessWhereUniqueInput;
};
export type PatientDoctorAccessUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PatientDoctorAccessUpdateManyMutationInput, Prisma.PatientDoctorAccessUncheckedUpdateManyInput>;
    where?: Prisma.PatientDoctorAccessWhereInput;
    limit?: number;
};
export type PatientDoctorAccessUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientDoctorAccessSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PatientDoctorAccessOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientDoctorAccessUpdateManyMutationInput, Prisma.PatientDoctorAccessUncheckedUpdateManyInput>;
    where?: Prisma.PatientDoctorAccessWhereInput;
    limit?: number;
    include?: Prisma.PatientDoctorAccessIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PatientDoctorAccessUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientDoctorAccessSelect<ExtArgs> | null;
    omit?: Prisma.PatientDoctorAccessOmit<ExtArgs> | null;
    include?: Prisma.PatientDoctorAccessInclude<ExtArgs> | null;
    where: Prisma.PatientDoctorAccessWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientDoctorAccessCreateInput, Prisma.PatientDoctorAccessUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PatientDoctorAccessUpdateInput, Prisma.PatientDoctorAccessUncheckedUpdateInput>;
};
export type PatientDoctorAccessDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientDoctorAccessSelect<ExtArgs> | null;
    omit?: Prisma.PatientDoctorAccessOmit<ExtArgs> | null;
    include?: Prisma.PatientDoctorAccessInclude<ExtArgs> | null;
    where: Prisma.PatientDoctorAccessWhereUniqueInput;
};
export type PatientDoctorAccessDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientDoctorAccessWhereInput;
    limit?: number;
};
export type PatientDoctorAccessDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientDoctorAccessSelect<ExtArgs> | null;
    omit?: Prisma.PatientDoctorAccessOmit<ExtArgs> | null;
    include?: Prisma.PatientDoctorAccessInclude<ExtArgs> | null;
};

import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PatientBackgroundVersionModel = runtime.Types.Result.DefaultSelection<Prisma.$PatientBackgroundVersionPayload>;
export type AggregatePatientBackgroundVersion = {
    _count: PatientBackgroundVersionCountAggregateOutputType | null;
    _avg: PatientBackgroundVersionAvgAggregateOutputType | null;
    _sum: PatientBackgroundVersionSumAggregateOutputType | null;
    _min: PatientBackgroundVersionMinAggregateOutputType | null;
    _max: PatientBackgroundVersionMaxAggregateOutputType | null;
};
export type PatientBackgroundVersionAvgAggregateOutputType = {
    versionNumber: number | null;
};
export type PatientBackgroundVersionSumAggregateOutputType = {
    versionNumber: number | null;
};
export type PatientBackgroundVersionMinAggregateOutputType = {
    id: string | null;
    patientProfileId: string | null;
    versionNumber: number | null;
    changeDescription: string | null;
    changedAt: Date | null;
};
export type PatientBackgroundVersionMaxAggregateOutputType = {
    id: string | null;
    patientProfileId: string | null;
    versionNumber: number | null;
    changeDescription: string | null;
    changedAt: Date | null;
};
export type PatientBackgroundVersionCountAggregateOutputType = {
    id: number;
    patientProfileId: number;
    versionNumber: number;
    snapshotData: number;
    changeDescription: number;
    changedFields: number;
    changedAt: number;
    _all: number;
};
export type PatientBackgroundVersionAvgAggregateInputType = {
    versionNumber?: true;
};
export type PatientBackgroundVersionSumAggregateInputType = {
    versionNumber?: true;
};
export type PatientBackgroundVersionMinAggregateInputType = {
    id?: true;
    patientProfileId?: true;
    versionNumber?: true;
    changeDescription?: true;
    changedAt?: true;
};
export type PatientBackgroundVersionMaxAggregateInputType = {
    id?: true;
    patientProfileId?: true;
    versionNumber?: true;
    changeDescription?: true;
    changedAt?: true;
};
export type PatientBackgroundVersionCountAggregateInputType = {
    id?: true;
    patientProfileId?: true;
    versionNumber?: true;
    snapshotData?: true;
    changeDescription?: true;
    changedFields?: true;
    changedAt?: true;
    _all?: true;
};
export type PatientBackgroundVersionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientBackgroundVersionWhereInput;
    orderBy?: Prisma.PatientBackgroundVersionOrderByWithRelationInput | Prisma.PatientBackgroundVersionOrderByWithRelationInput[];
    cursor?: Prisma.PatientBackgroundVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PatientBackgroundVersionCountAggregateInputType;
    _avg?: PatientBackgroundVersionAvgAggregateInputType;
    _sum?: PatientBackgroundVersionSumAggregateInputType;
    _min?: PatientBackgroundVersionMinAggregateInputType;
    _max?: PatientBackgroundVersionMaxAggregateInputType;
};
export type GetPatientBackgroundVersionAggregateType<T extends PatientBackgroundVersionAggregateArgs> = {
    [P in keyof T & keyof AggregatePatientBackgroundVersion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePatientBackgroundVersion[P]> : Prisma.GetScalarType<T[P], AggregatePatientBackgroundVersion[P]>;
};
export type PatientBackgroundVersionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientBackgroundVersionWhereInput;
    orderBy?: Prisma.PatientBackgroundVersionOrderByWithAggregationInput | Prisma.PatientBackgroundVersionOrderByWithAggregationInput[];
    by: Prisma.PatientBackgroundVersionScalarFieldEnum[] | Prisma.PatientBackgroundVersionScalarFieldEnum;
    having?: Prisma.PatientBackgroundVersionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PatientBackgroundVersionCountAggregateInputType | true;
    _avg?: PatientBackgroundVersionAvgAggregateInputType;
    _sum?: PatientBackgroundVersionSumAggregateInputType;
    _min?: PatientBackgroundVersionMinAggregateInputType;
    _max?: PatientBackgroundVersionMaxAggregateInputType;
};
export type PatientBackgroundVersionGroupByOutputType = {
    id: string;
    patientProfileId: string;
    versionNumber: number;
    snapshotData: runtime.JsonValue;
    changeDescription: string | null;
    changedFields: string[];
    changedAt: Date;
    _count: PatientBackgroundVersionCountAggregateOutputType | null;
    _avg: PatientBackgroundVersionAvgAggregateOutputType | null;
    _sum: PatientBackgroundVersionSumAggregateOutputType | null;
    _min: PatientBackgroundVersionMinAggregateOutputType | null;
    _max: PatientBackgroundVersionMaxAggregateOutputType | null;
};
export type GetPatientBackgroundVersionGroupByPayload<T extends PatientBackgroundVersionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PatientBackgroundVersionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PatientBackgroundVersionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PatientBackgroundVersionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PatientBackgroundVersionGroupByOutputType[P]>;
}>>;
export type PatientBackgroundVersionWhereInput = {
    AND?: Prisma.PatientBackgroundVersionWhereInput | Prisma.PatientBackgroundVersionWhereInput[];
    OR?: Prisma.PatientBackgroundVersionWhereInput[];
    NOT?: Prisma.PatientBackgroundVersionWhereInput | Prisma.PatientBackgroundVersionWhereInput[];
    id?: Prisma.StringFilter<"PatientBackgroundVersion"> | string;
    patientProfileId?: Prisma.StringFilter<"PatientBackgroundVersion"> | string;
    versionNumber?: Prisma.IntFilter<"PatientBackgroundVersion"> | number;
    snapshotData?: Prisma.JsonFilter<"PatientBackgroundVersion">;
    changeDescription?: Prisma.StringNullableFilter<"PatientBackgroundVersion"> | string | null;
    changedFields?: Prisma.StringNullableListFilter<"PatientBackgroundVersion">;
    changedAt?: Prisma.DateTimeFilter<"PatientBackgroundVersion"> | Date | string;
    patientProfile?: Prisma.XOR<Prisma.PatientProfileScalarRelationFilter, Prisma.PatientProfileWhereInput>;
    encounters?: Prisma.ClinicalEncounterListRelationFilter;
};
export type PatientBackgroundVersionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    patientProfileId?: Prisma.SortOrder;
    versionNumber?: Prisma.SortOrder;
    snapshotData?: Prisma.SortOrder;
    changeDescription?: Prisma.SortOrderInput | Prisma.SortOrder;
    changedFields?: Prisma.SortOrder;
    changedAt?: Prisma.SortOrder;
    patientProfile?: Prisma.PatientProfileOrderByWithRelationInput;
    encounters?: Prisma.ClinicalEncounterOrderByRelationAggregateInput;
};
export type PatientBackgroundVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    patientProfileId_versionNumber?: Prisma.PatientBackgroundVersionPatientProfileIdVersionNumberCompoundUniqueInput;
    AND?: Prisma.PatientBackgroundVersionWhereInput | Prisma.PatientBackgroundVersionWhereInput[];
    OR?: Prisma.PatientBackgroundVersionWhereInput[];
    NOT?: Prisma.PatientBackgroundVersionWhereInput | Prisma.PatientBackgroundVersionWhereInput[];
    patientProfileId?: Prisma.StringFilter<"PatientBackgroundVersion"> | string;
    versionNumber?: Prisma.IntFilter<"PatientBackgroundVersion"> | number;
    snapshotData?: Prisma.JsonFilter<"PatientBackgroundVersion">;
    changeDescription?: Prisma.StringNullableFilter<"PatientBackgroundVersion"> | string | null;
    changedFields?: Prisma.StringNullableListFilter<"PatientBackgroundVersion">;
    changedAt?: Prisma.DateTimeFilter<"PatientBackgroundVersion"> | Date | string;
    patientProfile?: Prisma.XOR<Prisma.PatientProfileScalarRelationFilter, Prisma.PatientProfileWhereInput>;
    encounters?: Prisma.ClinicalEncounterListRelationFilter;
}, "id" | "patientProfileId_versionNumber">;
export type PatientBackgroundVersionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    patientProfileId?: Prisma.SortOrder;
    versionNumber?: Prisma.SortOrder;
    snapshotData?: Prisma.SortOrder;
    changeDescription?: Prisma.SortOrderInput | Prisma.SortOrder;
    changedFields?: Prisma.SortOrder;
    changedAt?: Prisma.SortOrder;
    _count?: Prisma.PatientBackgroundVersionCountOrderByAggregateInput;
    _avg?: Prisma.PatientBackgroundVersionAvgOrderByAggregateInput;
    _max?: Prisma.PatientBackgroundVersionMaxOrderByAggregateInput;
    _min?: Prisma.PatientBackgroundVersionMinOrderByAggregateInput;
    _sum?: Prisma.PatientBackgroundVersionSumOrderByAggregateInput;
};
export type PatientBackgroundVersionScalarWhereWithAggregatesInput = {
    AND?: Prisma.PatientBackgroundVersionScalarWhereWithAggregatesInput | Prisma.PatientBackgroundVersionScalarWhereWithAggregatesInput[];
    OR?: Prisma.PatientBackgroundVersionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PatientBackgroundVersionScalarWhereWithAggregatesInput | Prisma.PatientBackgroundVersionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PatientBackgroundVersion"> | string;
    patientProfileId?: Prisma.StringWithAggregatesFilter<"PatientBackgroundVersion"> | string;
    versionNumber?: Prisma.IntWithAggregatesFilter<"PatientBackgroundVersion"> | number;
    snapshotData?: Prisma.JsonWithAggregatesFilter<"PatientBackgroundVersion">;
    changeDescription?: Prisma.StringNullableWithAggregatesFilter<"PatientBackgroundVersion"> | string | null;
    changedFields?: Prisma.StringNullableListFilter<"PatientBackgroundVersion">;
    changedAt?: Prisma.DateTimeWithAggregatesFilter<"PatientBackgroundVersion"> | Date | string;
};
export type PatientBackgroundVersionCreateInput = {
    id?: string;
    versionNumber: number;
    snapshotData: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    changeDescription?: string | null;
    changedFields?: Prisma.PatientBackgroundVersionCreatechangedFieldsInput | string[];
    changedAt?: Date | string;
    patientProfile: Prisma.PatientProfileCreateNestedOneWithoutBackgroundVersionsInput;
    encounters?: Prisma.ClinicalEncounterCreateNestedManyWithoutBackgroundVersionInput;
};
export type PatientBackgroundVersionUncheckedCreateInput = {
    id?: string;
    patientProfileId: string;
    versionNumber: number;
    snapshotData: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    changeDescription?: string | null;
    changedFields?: Prisma.PatientBackgroundVersionCreatechangedFieldsInput | string[];
    changedAt?: Date | string;
    encounters?: Prisma.ClinicalEncounterUncheckedCreateNestedManyWithoutBackgroundVersionInput;
};
export type PatientBackgroundVersionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    snapshotData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    changeDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    changedFields?: Prisma.PatientBackgroundVersionUpdatechangedFieldsInput | string[];
    changedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patientProfile?: Prisma.PatientProfileUpdateOneRequiredWithoutBackgroundVersionsNestedInput;
    encounters?: Prisma.ClinicalEncounterUpdateManyWithoutBackgroundVersionNestedInput;
};
export type PatientBackgroundVersionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    patientProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    versionNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    snapshotData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    changeDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    changedFields?: Prisma.PatientBackgroundVersionUpdatechangedFieldsInput | string[];
    changedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    encounters?: Prisma.ClinicalEncounterUncheckedUpdateManyWithoutBackgroundVersionNestedInput;
};
export type PatientBackgroundVersionCreateManyInput = {
    id?: string;
    patientProfileId: string;
    versionNumber: number;
    snapshotData: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    changeDescription?: string | null;
    changedFields?: Prisma.PatientBackgroundVersionCreatechangedFieldsInput | string[];
    changedAt?: Date | string;
};
export type PatientBackgroundVersionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    snapshotData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    changeDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    changedFields?: Prisma.PatientBackgroundVersionUpdatechangedFieldsInput | string[];
    changedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientBackgroundVersionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    patientProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    versionNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    snapshotData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    changeDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    changedFields?: Prisma.PatientBackgroundVersionUpdatechangedFieldsInput | string[];
    changedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientBackgroundVersionListRelationFilter = {
    every?: Prisma.PatientBackgroundVersionWhereInput;
    some?: Prisma.PatientBackgroundVersionWhereInput;
    none?: Prisma.PatientBackgroundVersionWhereInput;
};
export type PatientBackgroundVersionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type PatientBackgroundVersionPatientProfileIdVersionNumberCompoundUniqueInput = {
    patientProfileId: string;
    versionNumber: number;
};
export type PatientBackgroundVersionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    patientProfileId?: Prisma.SortOrder;
    versionNumber?: Prisma.SortOrder;
    snapshotData?: Prisma.SortOrder;
    changeDescription?: Prisma.SortOrder;
    changedFields?: Prisma.SortOrder;
    changedAt?: Prisma.SortOrder;
};
export type PatientBackgroundVersionAvgOrderByAggregateInput = {
    versionNumber?: Prisma.SortOrder;
};
export type PatientBackgroundVersionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    patientProfileId?: Prisma.SortOrder;
    versionNumber?: Prisma.SortOrder;
    changeDescription?: Prisma.SortOrder;
    changedAt?: Prisma.SortOrder;
};
export type PatientBackgroundVersionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    patientProfileId?: Prisma.SortOrder;
    versionNumber?: Prisma.SortOrder;
    changeDescription?: Prisma.SortOrder;
    changedAt?: Prisma.SortOrder;
};
export type PatientBackgroundVersionSumOrderByAggregateInput = {
    versionNumber?: Prisma.SortOrder;
};
export type PatientBackgroundVersionNullableScalarRelationFilter = {
    is?: Prisma.PatientBackgroundVersionWhereInput | null;
    isNot?: Prisma.PatientBackgroundVersionWhereInput | null;
};
export type PatientBackgroundVersionCreateNestedManyWithoutPatientProfileInput = {
    create?: Prisma.XOR<Prisma.PatientBackgroundVersionCreateWithoutPatientProfileInput, Prisma.PatientBackgroundVersionUncheckedCreateWithoutPatientProfileInput> | Prisma.PatientBackgroundVersionCreateWithoutPatientProfileInput[] | Prisma.PatientBackgroundVersionUncheckedCreateWithoutPatientProfileInput[];
    connectOrCreate?: Prisma.PatientBackgroundVersionCreateOrConnectWithoutPatientProfileInput | Prisma.PatientBackgroundVersionCreateOrConnectWithoutPatientProfileInput[];
    createMany?: Prisma.PatientBackgroundVersionCreateManyPatientProfileInputEnvelope;
    connect?: Prisma.PatientBackgroundVersionWhereUniqueInput | Prisma.PatientBackgroundVersionWhereUniqueInput[];
};
export type PatientBackgroundVersionUncheckedCreateNestedManyWithoutPatientProfileInput = {
    create?: Prisma.XOR<Prisma.PatientBackgroundVersionCreateWithoutPatientProfileInput, Prisma.PatientBackgroundVersionUncheckedCreateWithoutPatientProfileInput> | Prisma.PatientBackgroundVersionCreateWithoutPatientProfileInput[] | Prisma.PatientBackgroundVersionUncheckedCreateWithoutPatientProfileInput[];
    connectOrCreate?: Prisma.PatientBackgroundVersionCreateOrConnectWithoutPatientProfileInput | Prisma.PatientBackgroundVersionCreateOrConnectWithoutPatientProfileInput[];
    createMany?: Prisma.PatientBackgroundVersionCreateManyPatientProfileInputEnvelope;
    connect?: Prisma.PatientBackgroundVersionWhereUniqueInput | Prisma.PatientBackgroundVersionWhereUniqueInput[];
};
export type PatientBackgroundVersionUpdateManyWithoutPatientProfileNestedInput = {
    create?: Prisma.XOR<Prisma.PatientBackgroundVersionCreateWithoutPatientProfileInput, Prisma.PatientBackgroundVersionUncheckedCreateWithoutPatientProfileInput> | Prisma.PatientBackgroundVersionCreateWithoutPatientProfileInput[] | Prisma.PatientBackgroundVersionUncheckedCreateWithoutPatientProfileInput[];
    connectOrCreate?: Prisma.PatientBackgroundVersionCreateOrConnectWithoutPatientProfileInput | Prisma.PatientBackgroundVersionCreateOrConnectWithoutPatientProfileInput[];
    upsert?: Prisma.PatientBackgroundVersionUpsertWithWhereUniqueWithoutPatientProfileInput | Prisma.PatientBackgroundVersionUpsertWithWhereUniqueWithoutPatientProfileInput[];
    createMany?: Prisma.PatientBackgroundVersionCreateManyPatientProfileInputEnvelope;
    set?: Prisma.PatientBackgroundVersionWhereUniqueInput | Prisma.PatientBackgroundVersionWhereUniqueInput[];
    disconnect?: Prisma.PatientBackgroundVersionWhereUniqueInput | Prisma.PatientBackgroundVersionWhereUniqueInput[];
    delete?: Prisma.PatientBackgroundVersionWhereUniqueInput | Prisma.PatientBackgroundVersionWhereUniqueInput[];
    connect?: Prisma.PatientBackgroundVersionWhereUniqueInput | Prisma.PatientBackgroundVersionWhereUniqueInput[];
    update?: Prisma.PatientBackgroundVersionUpdateWithWhereUniqueWithoutPatientProfileInput | Prisma.PatientBackgroundVersionUpdateWithWhereUniqueWithoutPatientProfileInput[];
    updateMany?: Prisma.PatientBackgroundVersionUpdateManyWithWhereWithoutPatientProfileInput | Prisma.PatientBackgroundVersionUpdateManyWithWhereWithoutPatientProfileInput[];
    deleteMany?: Prisma.PatientBackgroundVersionScalarWhereInput | Prisma.PatientBackgroundVersionScalarWhereInput[];
};
export type PatientBackgroundVersionUncheckedUpdateManyWithoutPatientProfileNestedInput = {
    create?: Prisma.XOR<Prisma.PatientBackgroundVersionCreateWithoutPatientProfileInput, Prisma.PatientBackgroundVersionUncheckedCreateWithoutPatientProfileInput> | Prisma.PatientBackgroundVersionCreateWithoutPatientProfileInput[] | Prisma.PatientBackgroundVersionUncheckedCreateWithoutPatientProfileInput[];
    connectOrCreate?: Prisma.PatientBackgroundVersionCreateOrConnectWithoutPatientProfileInput | Prisma.PatientBackgroundVersionCreateOrConnectWithoutPatientProfileInput[];
    upsert?: Prisma.PatientBackgroundVersionUpsertWithWhereUniqueWithoutPatientProfileInput | Prisma.PatientBackgroundVersionUpsertWithWhereUniqueWithoutPatientProfileInput[];
    createMany?: Prisma.PatientBackgroundVersionCreateManyPatientProfileInputEnvelope;
    set?: Prisma.PatientBackgroundVersionWhereUniqueInput | Prisma.PatientBackgroundVersionWhereUniqueInput[];
    disconnect?: Prisma.PatientBackgroundVersionWhereUniqueInput | Prisma.PatientBackgroundVersionWhereUniqueInput[];
    delete?: Prisma.PatientBackgroundVersionWhereUniqueInput | Prisma.PatientBackgroundVersionWhereUniqueInput[];
    connect?: Prisma.PatientBackgroundVersionWhereUniqueInput | Prisma.PatientBackgroundVersionWhereUniqueInput[];
    update?: Prisma.PatientBackgroundVersionUpdateWithWhereUniqueWithoutPatientProfileInput | Prisma.PatientBackgroundVersionUpdateWithWhereUniqueWithoutPatientProfileInput[];
    updateMany?: Prisma.PatientBackgroundVersionUpdateManyWithWhereWithoutPatientProfileInput | Prisma.PatientBackgroundVersionUpdateManyWithWhereWithoutPatientProfileInput[];
    deleteMany?: Prisma.PatientBackgroundVersionScalarWhereInput | Prisma.PatientBackgroundVersionScalarWhereInput[];
};
export type PatientBackgroundVersionCreatechangedFieldsInput = {
    set: string[];
};
export type PatientBackgroundVersionUpdatechangedFieldsInput = {
    set?: string[];
    push?: string | string[];
};
export type PatientBackgroundVersionCreateNestedOneWithoutEncountersInput = {
    create?: Prisma.XOR<Prisma.PatientBackgroundVersionCreateWithoutEncountersInput, Prisma.PatientBackgroundVersionUncheckedCreateWithoutEncountersInput>;
    connectOrCreate?: Prisma.PatientBackgroundVersionCreateOrConnectWithoutEncountersInput;
    connect?: Prisma.PatientBackgroundVersionWhereUniqueInput;
};
export type PatientBackgroundVersionUpdateOneWithoutEncountersNestedInput = {
    create?: Prisma.XOR<Prisma.PatientBackgroundVersionCreateWithoutEncountersInput, Prisma.PatientBackgroundVersionUncheckedCreateWithoutEncountersInput>;
    connectOrCreate?: Prisma.PatientBackgroundVersionCreateOrConnectWithoutEncountersInput;
    upsert?: Prisma.PatientBackgroundVersionUpsertWithoutEncountersInput;
    disconnect?: Prisma.PatientBackgroundVersionWhereInput | boolean;
    delete?: Prisma.PatientBackgroundVersionWhereInput | boolean;
    connect?: Prisma.PatientBackgroundVersionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PatientBackgroundVersionUpdateToOneWithWhereWithoutEncountersInput, Prisma.PatientBackgroundVersionUpdateWithoutEncountersInput>, Prisma.PatientBackgroundVersionUncheckedUpdateWithoutEncountersInput>;
};
export type PatientBackgroundVersionCreateWithoutPatientProfileInput = {
    id?: string;
    versionNumber: number;
    snapshotData: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    changeDescription?: string | null;
    changedFields?: Prisma.PatientBackgroundVersionCreatechangedFieldsInput | string[];
    changedAt?: Date | string;
    encounters?: Prisma.ClinicalEncounterCreateNestedManyWithoutBackgroundVersionInput;
};
export type PatientBackgroundVersionUncheckedCreateWithoutPatientProfileInput = {
    id?: string;
    versionNumber: number;
    snapshotData: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    changeDescription?: string | null;
    changedFields?: Prisma.PatientBackgroundVersionCreatechangedFieldsInput | string[];
    changedAt?: Date | string;
    encounters?: Prisma.ClinicalEncounterUncheckedCreateNestedManyWithoutBackgroundVersionInput;
};
export type PatientBackgroundVersionCreateOrConnectWithoutPatientProfileInput = {
    where: Prisma.PatientBackgroundVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientBackgroundVersionCreateWithoutPatientProfileInput, Prisma.PatientBackgroundVersionUncheckedCreateWithoutPatientProfileInput>;
};
export type PatientBackgroundVersionCreateManyPatientProfileInputEnvelope = {
    data: Prisma.PatientBackgroundVersionCreateManyPatientProfileInput | Prisma.PatientBackgroundVersionCreateManyPatientProfileInput[];
    skipDuplicates?: boolean;
};
export type PatientBackgroundVersionUpsertWithWhereUniqueWithoutPatientProfileInput = {
    where: Prisma.PatientBackgroundVersionWhereUniqueInput;
    update: Prisma.XOR<Prisma.PatientBackgroundVersionUpdateWithoutPatientProfileInput, Prisma.PatientBackgroundVersionUncheckedUpdateWithoutPatientProfileInput>;
    create: Prisma.XOR<Prisma.PatientBackgroundVersionCreateWithoutPatientProfileInput, Prisma.PatientBackgroundVersionUncheckedCreateWithoutPatientProfileInput>;
};
export type PatientBackgroundVersionUpdateWithWhereUniqueWithoutPatientProfileInput = {
    where: Prisma.PatientBackgroundVersionWhereUniqueInput;
    data: Prisma.XOR<Prisma.PatientBackgroundVersionUpdateWithoutPatientProfileInput, Prisma.PatientBackgroundVersionUncheckedUpdateWithoutPatientProfileInput>;
};
export type PatientBackgroundVersionUpdateManyWithWhereWithoutPatientProfileInput = {
    where: Prisma.PatientBackgroundVersionScalarWhereInput;
    data: Prisma.XOR<Prisma.PatientBackgroundVersionUpdateManyMutationInput, Prisma.PatientBackgroundVersionUncheckedUpdateManyWithoutPatientProfileInput>;
};
export type PatientBackgroundVersionScalarWhereInput = {
    AND?: Prisma.PatientBackgroundVersionScalarWhereInput | Prisma.PatientBackgroundVersionScalarWhereInput[];
    OR?: Prisma.PatientBackgroundVersionScalarWhereInput[];
    NOT?: Prisma.PatientBackgroundVersionScalarWhereInput | Prisma.PatientBackgroundVersionScalarWhereInput[];
    id?: Prisma.StringFilter<"PatientBackgroundVersion"> | string;
    patientProfileId?: Prisma.StringFilter<"PatientBackgroundVersion"> | string;
    versionNumber?: Prisma.IntFilter<"PatientBackgroundVersion"> | number;
    snapshotData?: Prisma.JsonFilter<"PatientBackgroundVersion">;
    changeDescription?: Prisma.StringNullableFilter<"PatientBackgroundVersion"> | string | null;
    changedFields?: Prisma.StringNullableListFilter<"PatientBackgroundVersion">;
    changedAt?: Prisma.DateTimeFilter<"PatientBackgroundVersion"> | Date | string;
};
export type PatientBackgroundVersionCreateWithoutEncountersInput = {
    id?: string;
    versionNumber: number;
    snapshotData: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    changeDescription?: string | null;
    changedFields?: Prisma.PatientBackgroundVersionCreatechangedFieldsInput | string[];
    changedAt?: Date | string;
    patientProfile: Prisma.PatientProfileCreateNestedOneWithoutBackgroundVersionsInput;
};
export type PatientBackgroundVersionUncheckedCreateWithoutEncountersInput = {
    id?: string;
    patientProfileId: string;
    versionNumber: number;
    snapshotData: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    changeDescription?: string | null;
    changedFields?: Prisma.PatientBackgroundVersionCreatechangedFieldsInput | string[];
    changedAt?: Date | string;
};
export type PatientBackgroundVersionCreateOrConnectWithoutEncountersInput = {
    where: Prisma.PatientBackgroundVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientBackgroundVersionCreateWithoutEncountersInput, Prisma.PatientBackgroundVersionUncheckedCreateWithoutEncountersInput>;
};
export type PatientBackgroundVersionUpsertWithoutEncountersInput = {
    update: Prisma.XOR<Prisma.PatientBackgroundVersionUpdateWithoutEncountersInput, Prisma.PatientBackgroundVersionUncheckedUpdateWithoutEncountersInput>;
    create: Prisma.XOR<Prisma.PatientBackgroundVersionCreateWithoutEncountersInput, Prisma.PatientBackgroundVersionUncheckedCreateWithoutEncountersInput>;
    where?: Prisma.PatientBackgroundVersionWhereInput;
};
export type PatientBackgroundVersionUpdateToOneWithWhereWithoutEncountersInput = {
    where?: Prisma.PatientBackgroundVersionWhereInput;
    data: Prisma.XOR<Prisma.PatientBackgroundVersionUpdateWithoutEncountersInput, Prisma.PatientBackgroundVersionUncheckedUpdateWithoutEncountersInput>;
};
export type PatientBackgroundVersionUpdateWithoutEncountersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    snapshotData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    changeDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    changedFields?: Prisma.PatientBackgroundVersionUpdatechangedFieldsInput | string[];
    changedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patientProfile?: Prisma.PatientProfileUpdateOneRequiredWithoutBackgroundVersionsNestedInput;
};
export type PatientBackgroundVersionUncheckedUpdateWithoutEncountersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    patientProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    versionNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    snapshotData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    changeDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    changedFields?: Prisma.PatientBackgroundVersionUpdatechangedFieldsInput | string[];
    changedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientBackgroundVersionCreateManyPatientProfileInput = {
    id?: string;
    versionNumber: number;
    snapshotData: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    changeDescription?: string | null;
    changedFields?: Prisma.PatientBackgroundVersionCreatechangedFieldsInput | string[];
    changedAt?: Date | string;
};
export type PatientBackgroundVersionUpdateWithoutPatientProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    snapshotData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    changeDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    changedFields?: Prisma.PatientBackgroundVersionUpdatechangedFieldsInput | string[];
    changedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    encounters?: Prisma.ClinicalEncounterUpdateManyWithoutBackgroundVersionNestedInput;
};
export type PatientBackgroundVersionUncheckedUpdateWithoutPatientProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    snapshotData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    changeDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    changedFields?: Prisma.PatientBackgroundVersionUpdatechangedFieldsInput | string[];
    changedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    encounters?: Prisma.ClinicalEncounterUncheckedUpdateManyWithoutBackgroundVersionNestedInput;
};
export type PatientBackgroundVersionUncheckedUpdateManyWithoutPatientProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versionNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    snapshotData?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    changeDescription?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    changedFields?: Prisma.PatientBackgroundVersionUpdatechangedFieldsInput | string[];
    changedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientBackgroundVersionCountOutputType = {
    encounters: number;
};
export type PatientBackgroundVersionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    encounters?: boolean | PatientBackgroundVersionCountOutputTypeCountEncountersArgs;
};
export type PatientBackgroundVersionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientBackgroundVersionCountOutputTypeSelect<ExtArgs> | null;
};
export type PatientBackgroundVersionCountOutputTypeCountEncountersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClinicalEncounterWhereInput;
};
export type PatientBackgroundVersionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    patientProfileId?: boolean;
    versionNumber?: boolean;
    snapshotData?: boolean;
    changeDescription?: boolean;
    changedFields?: boolean;
    changedAt?: boolean;
    patientProfile?: boolean | Prisma.PatientProfileDefaultArgs<ExtArgs>;
    encounters?: boolean | Prisma.PatientBackgroundVersion$encountersArgs<ExtArgs>;
    _count?: boolean | Prisma.PatientBackgroundVersionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patientBackgroundVersion"]>;
export type PatientBackgroundVersionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    patientProfileId?: boolean;
    versionNumber?: boolean;
    snapshotData?: boolean;
    changeDescription?: boolean;
    changedFields?: boolean;
    changedAt?: boolean;
    patientProfile?: boolean | Prisma.PatientProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patientBackgroundVersion"]>;
export type PatientBackgroundVersionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    patientProfileId?: boolean;
    versionNumber?: boolean;
    snapshotData?: boolean;
    changeDescription?: boolean;
    changedFields?: boolean;
    changedAt?: boolean;
    patientProfile?: boolean | Prisma.PatientProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patientBackgroundVersion"]>;
export type PatientBackgroundVersionSelectScalar = {
    id?: boolean;
    patientProfileId?: boolean;
    versionNumber?: boolean;
    snapshotData?: boolean;
    changeDescription?: boolean;
    changedFields?: boolean;
    changedAt?: boolean;
};
export type PatientBackgroundVersionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "patientProfileId" | "versionNumber" | "snapshotData" | "changeDescription" | "changedFields" | "changedAt", ExtArgs["result"]["patientBackgroundVersion"]>;
export type PatientBackgroundVersionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patientProfile?: boolean | Prisma.PatientProfileDefaultArgs<ExtArgs>;
    encounters?: boolean | Prisma.PatientBackgroundVersion$encountersArgs<ExtArgs>;
    _count?: boolean | Prisma.PatientBackgroundVersionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PatientBackgroundVersionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patientProfile?: boolean | Prisma.PatientProfileDefaultArgs<ExtArgs>;
};
export type PatientBackgroundVersionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patientProfile?: boolean | Prisma.PatientProfileDefaultArgs<ExtArgs>;
};
export type $PatientBackgroundVersionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PatientBackgroundVersion";
    objects: {
        patientProfile: Prisma.$PatientProfilePayload<ExtArgs>;
        encounters: Prisma.$ClinicalEncounterPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        patientProfileId: string;
        versionNumber: number;
        snapshotData: runtime.JsonValue;
        changeDescription: string | null;
        changedFields: string[];
        changedAt: Date;
    }, ExtArgs["result"]["patientBackgroundVersion"]>;
    composites: {};
};
export type PatientBackgroundVersionGetPayload<S extends boolean | null | undefined | PatientBackgroundVersionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PatientBackgroundVersionPayload, S>;
export type PatientBackgroundVersionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PatientBackgroundVersionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PatientBackgroundVersionCountAggregateInputType | true;
};
export interface PatientBackgroundVersionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PatientBackgroundVersion'];
        meta: {
            name: 'PatientBackgroundVersion';
        };
    };
    findUnique<T extends PatientBackgroundVersionFindUniqueArgs>(args: Prisma.SelectSubset<T, PatientBackgroundVersionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PatientBackgroundVersionClient<runtime.Types.Result.GetResult<Prisma.$PatientBackgroundVersionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PatientBackgroundVersionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PatientBackgroundVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PatientBackgroundVersionClient<runtime.Types.Result.GetResult<Prisma.$PatientBackgroundVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PatientBackgroundVersionFindFirstArgs>(args?: Prisma.SelectSubset<T, PatientBackgroundVersionFindFirstArgs<ExtArgs>>): Prisma.Prisma__PatientBackgroundVersionClient<runtime.Types.Result.GetResult<Prisma.$PatientBackgroundVersionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PatientBackgroundVersionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PatientBackgroundVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PatientBackgroundVersionClient<runtime.Types.Result.GetResult<Prisma.$PatientBackgroundVersionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PatientBackgroundVersionFindManyArgs>(args?: Prisma.SelectSubset<T, PatientBackgroundVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientBackgroundVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PatientBackgroundVersionCreateArgs>(args: Prisma.SelectSubset<T, PatientBackgroundVersionCreateArgs<ExtArgs>>): Prisma.Prisma__PatientBackgroundVersionClient<runtime.Types.Result.GetResult<Prisma.$PatientBackgroundVersionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PatientBackgroundVersionCreateManyArgs>(args?: Prisma.SelectSubset<T, PatientBackgroundVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PatientBackgroundVersionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PatientBackgroundVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientBackgroundVersionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PatientBackgroundVersionDeleteArgs>(args: Prisma.SelectSubset<T, PatientBackgroundVersionDeleteArgs<ExtArgs>>): Prisma.Prisma__PatientBackgroundVersionClient<runtime.Types.Result.GetResult<Prisma.$PatientBackgroundVersionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PatientBackgroundVersionUpdateArgs>(args: Prisma.SelectSubset<T, PatientBackgroundVersionUpdateArgs<ExtArgs>>): Prisma.Prisma__PatientBackgroundVersionClient<runtime.Types.Result.GetResult<Prisma.$PatientBackgroundVersionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PatientBackgroundVersionDeleteManyArgs>(args?: Prisma.SelectSubset<T, PatientBackgroundVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PatientBackgroundVersionUpdateManyArgs>(args: Prisma.SelectSubset<T, PatientBackgroundVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PatientBackgroundVersionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PatientBackgroundVersionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientBackgroundVersionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PatientBackgroundVersionUpsertArgs>(args: Prisma.SelectSubset<T, PatientBackgroundVersionUpsertArgs<ExtArgs>>): Prisma.Prisma__PatientBackgroundVersionClient<runtime.Types.Result.GetResult<Prisma.$PatientBackgroundVersionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PatientBackgroundVersionCountArgs>(args?: Prisma.Subset<T, PatientBackgroundVersionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PatientBackgroundVersionCountAggregateOutputType> : number>;
    aggregate<T extends PatientBackgroundVersionAggregateArgs>(args: Prisma.Subset<T, PatientBackgroundVersionAggregateArgs>): Prisma.PrismaPromise<GetPatientBackgroundVersionAggregateType<T>>;
    groupBy<T extends PatientBackgroundVersionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PatientBackgroundVersionGroupByArgs['orderBy'];
    } : {
        orderBy?: PatientBackgroundVersionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PatientBackgroundVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientBackgroundVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PatientBackgroundVersionFieldRefs;
}
export interface Prisma__PatientBackgroundVersionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    patientProfile<T extends Prisma.PatientProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PatientProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__PatientProfileClient<runtime.Types.Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    encounters<T extends Prisma.PatientBackgroundVersion$encountersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PatientBackgroundVersion$encountersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClinicalEncounterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PatientBackgroundVersionFieldRefs {
    readonly id: Prisma.FieldRef<"PatientBackgroundVersion", 'String'>;
    readonly patientProfileId: Prisma.FieldRef<"PatientBackgroundVersion", 'String'>;
    readonly versionNumber: Prisma.FieldRef<"PatientBackgroundVersion", 'Int'>;
    readonly snapshotData: Prisma.FieldRef<"PatientBackgroundVersion", 'Json'>;
    readonly changeDescription: Prisma.FieldRef<"PatientBackgroundVersion", 'String'>;
    readonly changedFields: Prisma.FieldRef<"PatientBackgroundVersion", 'String[]'>;
    readonly changedAt: Prisma.FieldRef<"PatientBackgroundVersion", 'DateTime'>;
}
export type PatientBackgroundVersionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientBackgroundVersionSelect<ExtArgs> | null;
    omit?: Prisma.PatientBackgroundVersionOmit<ExtArgs> | null;
    include?: Prisma.PatientBackgroundVersionInclude<ExtArgs> | null;
    where: Prisma.PatientBackgroundVersionWhereUniqueInput;
};
export type PatientBackgroundVersionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientBackgroundVersionSelect<ExtArgs> | null;
    omit?: Prisma.PatientBackgroundVersionOmit<ExtArgs> | null;
    include?: Prisma.PatientBackgroundVersionInclude<ExtArgs> | null;
    where: Prisma.PatientBackgroundVersionWhereUniqueInput;
};
export type PatientBackgroundVersionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientBackgroundVersionSelect<ExtArgs> | null;
    omit?: Prisma.PatientBackgroundVersionOmit<ExtArgs> | null;
    include?: Prisma.PatientBackgroundVersionInclude<ExtArgs> | null;
    where?: Prisma.PatientBackgroundVersionWhereInput;
    orderBy?: Prisma.PatientBackgroundVersionOrderByWithRelationInput | Prisma.PatientBackgroundVersionOrderByWithRelationInput[];
    cursor?: Prisma.PatientBackgroundVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientBackgroundVersionScalarFieldEnum | Prisma.PatientBackgroundVersionScalarFieldEnum[];
};
export type PatientBackgroundVersionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientBackgroundVersionSelect<ExtArgs> | null;
    omit?: Prisma.PatientBackgroundVersionOmit<ExtArgs> | null;
    include?: Prisma.PatientBackgroundVersionInclude<ExtArgs> | null;
    where?: Prisma.PatientBackgroundVersionWhereInput;
    orderBy?: Prisma.PatientBackgroundVersionOrderByWithRelationInput | Prisma.PatientBackgroundVersionOrderByWithRelationInput[];
    cursor?: Prisma.PatientBackgroundVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientBackgroundVersionScalarFieldEnum | Prisma.PatientBackgroundVersionScalarFieldEnum[];
};
export type PatientBackgroundVersionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientBackgroundVersionSelect<ExtArgs> | null;
    omit?: Prisma.PatientBackgroundVersionOmit<ExtArgs> | null;
    include?: Prisma.PatientBackgroundVersionInclude<ExtArgs> | null;
    where?: Prisma.PatientBackgroundVersionWhereInput;
    orderBy?: Prisma.PatientBackgroundVersionOrderByWithRelationInput | Prisma.PatientBackgroundVersionOrderByWithRelationInput[];
    cursor?: Prisma.PatientBackgroundVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientBackgroundVersionScalarFieldEnum | Prisma.PatientBackgroundVersionScalarFieldEnum[];
};
export type PatientBackgroundVersionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientBackgroundVersionSelect<ExtArgs> | null;
    omit?: Prisma.PatientBackgroundVersionOmit<ExtArgs> | null;
    include?: Prisma.PatientBackgroundVersionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientBackgroundVersionCreateInput, Prisma.PatientBackgroundVersionUncheckedCreateInput>;
};
export type PatientBackgroundVersionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PatientBackgroundVersionCreateManyInput | Prisma.PatientBackgroundVersionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PatientBackgroundVersionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientBackgroundVersionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PatientBackgroundVersionOmit<ExtArgs> | null;
    data: Prisma.PatientBackgroundVersionCreateManyInput | Prisma.PatientBackgroundVersionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PatientBackgroundVersionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PatientBackgroundVersionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientBackgroundVersionSelect<ExtArgs> | null;
    omit?: Prisma.PatientBackgroundVersionOmit<ExtArgs> | null;
    include?: Prisma.PatientBackgroundVersionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientBackgroundVersionUpdateInput, Prisma.PatientBackgroundVersionUncheckedUpdateInput>;
    where: Prisma.PatientBackgroundVersionWhereUniqueInput;
};
export type PatientBackgroundVersionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PatientBackgroundVersionUpdateManyMutationInput, Prisma.PatientBackgroundVersionUncheckedUpdateManyInput>;
    where?: Prisma.PatientBackgroundVersionWhereInput;
    limit?: number;
};
export type PatientBackgroundVersionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientBackgroundVersionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PatientBackgroundVersionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientBackgroundVersionUpdateManyMutationInput, Prisma.PatientBackgroundVersionUncheckedUpdateManyInput>;
    where?: Prisma.PatientBackgroundVersionWhereInput;
    limit?: number;
    include?: Prisma.PatientBackgroundVersionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PatientBackgroundVersionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientBackgroundVersionSelect<ExtArgs> | null;
    omit?: Prisma.PatientBackgroundVersionOmit<ExtArgs> | null;
    include?: Prisma.PatientBackgroundVersionInclude<ExtArgs> | null;
    where: Prisma.PatientBackgroundVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientBackgroundVersionCreateInput, Prisma.PatientBackgroundVersionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PatientBackgroundVersionUpdateInput, Prisma.PatientBackgroundVersionUncheckedUpdateInput>;
};
export type PatientBackgroundVersionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientBackgroundVersionSelect<ExtArgs> | null;
    omit?: Prisma.PatientBackgroundVersionOmit<ExtArgs> | null;
    include?: Prisma.PatientBackgroundVersionInclude<ExtArgs> | null;
    where: Prisma.PatientBackgroundVersionWhereUniqueInput;
};
export type PatientBackgroundVersionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientBackgroundVersionWhereInput;
    limit?: number;
};
export type PatientBackgroundVersion$encountersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClinicalEncounterSelect<ExtArgs> | null;
    omit?: Prisma.ClinicalEncounterOmit<ExtArgs> | null;
    include?: Prisma.ClinicalEncounterInclude<ExtArgs> | null;
    where?: Prisma.ClinicalEncounterWhereInput;
    orderBy?: Prisma.ClinicalEncounterOrderByWithRelationInput | Prisma.ClinicalEncounterOrderByWithRelationInput[];
    cursor?: Prisma.ClinicalEncounterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClinicalEncounterScalarFieldEnum | Prisma.ClinicalEncounterScalarFieldEnum[];
};
export type PatientBackgroundVersionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientBackgroundVersionSelect<ExtArgs> | null;
    omit?: Prisma.PatientBackgroundVersionOmit<ExtArgs> | null;
    include?: Prisma.PatientBackgroundVersionInclude<ExtArgs> | null;
};

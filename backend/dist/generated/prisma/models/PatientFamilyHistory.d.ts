import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PatientFamilyHistoryModel = runtime.Types.Result.DefaultSelection<Prisma.$PatientFamilyHistoryPayload>;
export type AggregatePatientFamilyHistory = {
    _count: PatientFamilyHistoryCountAggregateOutputType | null;
    _min: PatientFamilyHistoryMinAggregateOutputType | null;
    _max: PatientFamilyHistoryMaxAggregateOutputType | null;
};
export type PatientFamilyHistoryMinAggregateOutputType = {
    id: string | null;
    backgroundId: string | null;
    parentesco: $Enums.FamilyRelation | null;
    enfermedad: $Enums.FamilyDisease | null;
    detalleOtra: string | null;
    createdAt: Date | null;
};
export type PatientFamilyHistoryMaxAggregateOutputType = {
    id: string | null;
    backgroundId: string | null;
    parentesco: $Enums.FamilyRelation | null;
    enfermedad: $Enums.FamilyDisease | null;
    detalleOtra: string | null;
    createdAt: Date | null;
};
export type PatientFamilyHistoryCountAggregateOutputType = {
    id: number;
    backgroundId: number;
    parentesco: number;
    enfermedad: number;
    detalleOtra: number;
    createdAt: number;
    _all: number;
};
export type PatientFamilyHistoryMinAggregateInputType = {
    id?: true;
    backgroundId?: true;
    parentesco?: true;
    enfermedad?: true;
    detalleOtra?: true;
    createdAt?: true;
};
export type PatientFamilyHistoryMaxAggregateInputType = {
    id?: true;
    backgroundId?: true;
    parentesco?: true;
    enfermedad?: true;
    detalleOtra?: true;
    createdAt?: true;
};
export type PatientFamilyHistoryCountAggregateInputType = {
    id?: true;
    backgroundId?: true;
    parentesco?: true;
    enfermedad?: true;
    detalleOtra?: true;
    createdAt?: true;
    _all?: true;
};
export type PatientFamilyHistoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientFamilyHistoryWhereInput;
    orderBy?: Prisma.PatientFamilyHistoryOrderByWithRelationInput | Prisma.PatientFamilyHistoryOrderByWithRelationInput[];
    cursor?: Prisma.PatientFamilyHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PatientFamilyHistoryCountAggregateInputType;
    _min?: PatientFamilyHistoryMinAggregateInputType;
    _max?: PatientFamilyHistoryMaxAggregateInputType;
};
export type GetPatientFamilyHistoryAggregateType<T extends PatientFamilyHistoryAggregateArgs> = {
    [P in keyof T & keyof AggregatePatientFamilyHistory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePatientFamilyHistory[P]> : Prisma.GetScalarType<T[P], AggregatePatientFamilyHistory[P]>;
};
export type PatientFamilyHistoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientFamilyHistoryWhereInput;
    orderBy?: Prisma.PatientFamilyHistoryOrderByWithAggregationInput | Prisma.PatientFamilyHistoryOrderByWithAggregationInput[];
    by: Prisma.PatientFamilyHistoryScalarFieldEnum[] | Prisma.PatientFamilyHistoryScalarFieldEnum;
    having?: Prisma.PatientFamilyHistoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PatientFamilyHistoryCountAggregateInputType | true;
    _min?: PatientFamilyHistoryMinAggregateInputType;
    _max?: PatientFamilyHistoryMaxAggregateInputType;
};
export type PatientFamilyHistoryGroupByOutputType = {
    id: string;
    backgroundId: string;
    parentesco: $Enums.FamilyRelation;
    enfermedad: $Enums.FamilyDisease;
    detalleOtra: string | null;
    createdAt: Date;
    _count: PatientFamilyHistoryCountAggregateOutputType | null;
    _min: PatientFamilyHistoryMinAggregateOutputType | null;
    _max: PatientFamilyHistoryMaxAggregateOutputType | null;
};
export type GetPatientFamilyHistoryGroupByPayload<T extends PatientFamilyHistoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PatientFamilyHistoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PatientFamilyHistoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PatientFamilyHistoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PatientFamilyHistoryGroupByOutputType[P]>;
}>>;
export type PatientFamilyHistoryWhereInput = {
    AND?: Prisma.PatientFamilyHistoryWhereInput | Prisma.PatientFamilyHistoryWhereInput[];
    OR?: Prisma.PatientFamilyHistoryWhereInput[];
    NOT?: Prisma.PatientFamilyHistoryWhereInput | Prisma.PatientFamilyHistoryWhereInput[];
    id?: Prisma.StringFilter<"PatientFamilyHistory"> | string;
    backgroundId?: Prisma.StringFilter<"PatientFamilyHistory"> | string;
    parentesco?: Prisma.EnumFamilyRelationFilter<"PatientFamilyHistory"> | $Enums.FamilyRelation;
    enfermedad?: Prisma.EnumFamilyDiseaseFilter<"PatientFamilyHistory"> | $Enums.FamilyDisease;
    detalleOtra?: Prisma.StringNullableFilter<"PatientFamilyHistory"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PatientFamilyHistory"> | Date | string;
    background?: Prisma.XOR<Prisma.PatientBackgroundScalarRelationFilter, Prisma.PatientBackgroundWhereInput>;
};
export type PatientFamilyHistoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    backgroundId?: Prisma.SortOrder;
    parentesco?: Prisma.SortOrder;
    enfermedad?: Prisma.SortOrder;
    detalleOtra?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    background?: Prisma.PatientBackgroundOrderByWithRelationInput;
};
export type PatientFamilyHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PatientFamilyHistoryWhereInput | Prisma.PatientFamilyHistoryWhereInput[];
    OR?: Prisma.PatientFamilyHistoryWhereInput[];
    NOT?: Prisma.PatientFamilyHistoryWhereInput | Prisma.PatientFamilyHistoryWhereInput[];
    backgroundId?: Prisma.StringFilter<"PatientFamilyHistory"> | string;
    parentesco?: Prisma.EnumFamilyRelationFilter<"PatientFamilyHistory"> | $Enums.FamilyRelation;
    enfermedad?: Prisma.EnumFamilyDiseaseFilter<"PatientFamilyHistory"> | $Enums.FamilyDisease;
    detalleOtra?: Prisma.StringNullableFilter<"PatientFamilyHistory"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PatientFamilyHistory"> | Date | string;
    background?: Prisma.XOR<Prisma.PatientBackgroundScalarRelationFilter, Prisma.PatientBackgroundWhereInput>;
}, "id">;
export type PatientFamilyHistoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    backgroundId?: Prisma.SortOrder;
    parentesco?: Prisma.SortOrder;
    enfermedad?: Prisma.SortOrder;
    detalleOtra?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PatientFamilyHistoryCountOrderByAggregateInput;
    _max?: Prisma.PatientFamilyHistoryMaxOrderByAggregateInput;
    _min?: Prisma.PatientFamilyHistoryMinOrderByAggregateInput;
};
export type PatientFamilyHistoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.PatientFamilyHistoryScalarWhereWithAggregatesInput | Prisma.PatientFamilyHistoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.PatientFamilyHistoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PatientFamilyHistoryScalarWhereWithAggregatesInput | Prisma.PatientFamilyHistoryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PatientFamilyHistory"> | string;
    backgroundId?: Prisma.StringWithAggregatesFilter<"PatientFamilyHistory"> | string;
    parentesco?: Prisma.EnumFamilyRelationWithAggregatesFilter<"PatientFamilyHistory"> | $Enums.FamilyRelation;
    enfermedad?: Prisma.EnumFamilyDiseaseWithAggregatesFilter<"PatientFamilyHistory"> | $Enums.FamilyDisease;
    detalleOtra?: Prisma.StringNullableWithAggregatesFilter<"PatientFamilyHistory"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PatientFamilyHistory"> | Date | string;
};
export type PatientFamilyHistoryCreateInput = {
    id?: string;
    parentesco: $Enums.FamilyRelation;
    enfermedad: $Enums.FamilyDisease;
    detalleOtra?: string | null;
    createdAt?: Date | string;
    background: Prisma.PatientBackgroundCreateNestedOneWithoutFamilyHistoryInput;
};
export type PatientFamilyHistoryUncheckedCreateInput = {
    id?: string;
    backgroundId: string;
    parentesco: $Enums.FamilyRelation;
    enfermedad: $Enums.FamilyDisease;
    detalleOtra?: string | null;
    createdAt?: Date | string;
};
export type PatientFamilyHistoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parentesco?: Prisma.EnumFamilyRelationFieldUpdateOperationsInput | $Enums.FamilyRelation;
    enfermedad?: Prisma.EnumFamilyDiseaseFieldUpdateOperationsInput | $Enums.FamilyDisease;
    detalleOtra?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    background?: Prisma.PatientBackgroundUpdateOneRequiredWithoutFamilyHistoryNestedInput;
};
export type PatientFamilyHistoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    backgroundId?: Prisma.StringFieldUpdateOperationsInput | string;
    parentesco?: Prisma.EnumFamilyRelationFieldUpdateOperationsInput | $Enums.FamilyRelation;
    enfermedad?: Prisma.EnumFamilyDiseaseFieldUpdateOperationsInput | $Enums.FamilyDisease;
    detalleOtra?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientFamilyHistoryCreateManyInput = {
    id?: string;
    backgroundId: string;
    parentesco: $Enums.FamilyRelation;
    enfermedad: $Enums.FamilyDisease;
    detalleOtra?: string | null;
    createdAt?: Date | string;
};
export type PatientFamilyHistoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parentesco?: Prisma.EnumFamilyRelationFieldUpdateOperationsInput | $Enums.FamilyRelation;
    enfermedad?: Prisma.EnumFamilyDiseaseFieldUpdateOperationsInput | $Enums.FamilyDisease;
    detalleOtra?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientFamilyHistoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    backgroundId?: Prisma.StringFieldUpdateOperationsInput | string;
    parentesco?: Prisma.EnumFamilyRelationFieldUpdateOperationsInput | $Enums.FamilyRelation;
    enfermedad?: Prisma.EnumFamilyDiseaseFieldUpdateOperationsInput | $Enums.FamilyDisease;
    detalleOtra?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientFamilyHistoryListRelationFilter = {
    every?: Prisma.PatientFamilyHistoryWhereInput;
    some?: Prisma.PatientFamilyHistoryWhereInput;
    none?: Prisma.PatientFamilyHistoryWhereInput;
};
export type PatientFamilyHistoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PatientFamilyHistoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    backgroundId?: Prisma.SortOrder;
    parentesco?: Prisma.SortOrder;
    enfermedad?: Prisma.SortOrder;
    detalleOtra?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PatientFamilyHistoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    backgroundId?: Prisma.SortOrder;
    parentesco?: Prisma.SortOrder;
    enfermedad?: Prisma.SortOrder;
    detalleOtra?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PatientFamilyHistoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    backgroundId?: Prisma.SortOrder;
    parentesco?: Prisma.SortOrder;
    enfermedad?: Prisma.SortOrder;
    detalleOtra?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PatientFamilyHistoryCreateNestedManyWithoutBackgroundInput = {
    create?: Prisma.XOR<Prisma.PatientFamilyHistoryCreateWithoutBackgroundInput, Prisma.PatientFamilyHistoryUncheckedCreateWithoutBackgroundInput> | Prisma.PatientFamilyHistoryCreateWithoutBackgroundInput[] | Prisma.PatientFamilyHistoryUncheckedCreateWithoutBackgroundInput[];
    connectOrCreate?: Prisma.PatientFamilyHistoryCreateOrConnectWithoutBackgroundInput | Prisma.PatientFamilyHistoryCreateOrConnectWithoutBackgroundInput[];
    createMany?: Prisma.PatientFamilyHistoryCreateManyBackgroundInputEnvelope;
    connect?: Prisma.PatientFamilyHistoryWhereUniqueInput | Prisma.PatientFamilyHistoryWhereUniqueInput[];
};
export type PatientFamilyHistoryUncheckedCreateNestedManyWithoutBackgroundInput = {
    create?: Prisma.XOR<Prisma.PatientFamilyHistoryCreateWithoutBackgroundInput, Prisma.PatientFamilyHistoryUncheckedCreateWithoutBackgroundInput> | Prisma.PatientFamilyHistoryCreateWithoutBackgroundInput[] | Prisma.PatientFamilyHistoryUncheckedCreateWithoutBackgroundInput[];
    connectOrCreate?: Prisma.PatientFamilyHistoryCreateOrConnectWithoutBackgroundInput | Prisma.PatientFamilyHistoryCreateOrConnectWithoutBackgroundInput[];
    createMany?: Prisma.PatientFamilyHistoryCreateManyBackgroundInputEnvelope;
    connect?: Prisma.PatientFamilyHistoryWhereUniqueInput | Prisma.PatientFamilyHistoryWhereUniqueInput[];
};
export type PatientFamilyHistoryUpdateManyWithoutBackgroundNestedInput = {
    create?: Prisma.XOR<Prisma.PatientFamilyHistoryCreateWithoutBackgroundInput, Prisma.PatientFamilyHistoryUncheckedCreateWithoutBackgroundInput> | Prisma.PatientFamilyHistoryCreateWithoutBackgroundInput[] | Prisma.PatientFamilyHistoryUncheckedCreateWithoutBackgroundInput[];
    connectOrCreate?: Prisma.PatientFamilyHistoryCreateOrConnectWithoutBackgroundInput | Prisma.PatientFamilyHistoryCreateOrConnectWithoutBackgroundInput[];
    upsert?: Prisma.PatientFamilyHistoryUpsertWithWhereUniqueWithoutBackgroundInput | Prisma.PatientFamilyHistoryUpsertWithWhereUniqueWithoutBackgroundInput[];
    createMany?: Prisma.PatientFamilyHistoryCreateManyBackgroundInputEnvelope;
    set?: Prisma.PatientFamilyHistoryWhereUniqueInput | Prisma.PatientFamilyHistoryWhereUniqueInput[];
    disconnect?: Prisma.PatientFamilyHistoryWhereUniqueInput | Prisma.PatientFamilyHistoryWhereUniqueInput[];
    delete?: Prisma.PatientFamilyHistoryWhereUniqueInput | Prisma.PatientFamilyHistoryWhereUniqueInput[];
    connect?: Prisma.PatientFamilyHistoryWhereUniqueInput | Prisma.PatientFamilyHistoryWhereUniqueInput[];
    update?: Prisma.PatientFamilyHistoryUpdateWithWhereUniqueWithoutBackgroundInput | Prisma.PatientFamilyHistoryUpdateWithWhereUniqueWithoutBackgroundInput[];
    updateMany?: Prisma.PatientFamilyHistoryUpdateManyWithWhereWithoutBackgroundInput | Prisma.PatientFamilyHistoryUpdateManyWithWhereWithoutBackgroundInput[];
    deleteMany?: Prisma.PatientFamilyHistoryScalarWhereInput | Prisma.PatientFamilyHistoryScalarWhereInput[];
};
export type PatientFamilyHistoryUncheckedUpdateManyWithoutBackgroundNestedInput = {
    create?: Prisma.XOR<Prisma.PatientFamilyHistoryCreateWithoutBackgroundInput, Prisma.PatientFamilyHistoryUncheckedCreateWithoutBackgroundInput> | Prisma.PatientFamilyHistoryCreateWithoutBackgroundInput[] | Prisma.PatientFamilyHistoryUncheckedCreateWithoutBackgroundInput[];
    connectOrCreate?: Prisma.PatientFamilyHistoryCreateOrConnectWithoutBackgroundInput | Prisma.PatientFamilyHistoryCreateOrConnectWithoutBackgroundInput[];
    upsert?: Prisma.PatientFamilyHistoryUpsertWithWhereUniqueWithoutBackgroundInput | Prisma.PatientFamilyHistoryUpsertWithWhereUniqueWithoutBackgroundInput[];
    createMany?: Prisma.PatientFamilyHistoryCreateManyBackgroundInputEnvelope;
    set?: Prisma.PatientFamilyHistoryWhereUniqueInput | Prisma.PatientFamilyHistoryWhereUniqueInput[];
    disconnect?: Prisma.PatientFamilyHistoryWhereUniqueInput | Prisma.PatientFamilyHistoryWhereUniqueInput[];
    delete?: Prisma.PatientFamilyHistoryWhereUniqueInput | Prisma.PatientFamilyHistoryWhereUniqueInput[];
    connect?: Prisma.PatientFamilyHistoryWhereUniqueInput | Prisma.PatientFamilyHistoryWhereUniqueInput[];
    update?: Prisma.PatientFamilyHistoryUpdateWithWhereUniqueWithoutBackgroundInput | Prisma.PatientFamilyHistoryUpdateWithWhereUniqueWithoutBackgroundInput[];
    updateMany?: Prisma.PatientFamilyHistoryUpdateManyWithWhereWithoutBackgroundInput | Prisma.PatientFamilyHistoryUpdateManyWithWhereWithoutBackgroundInput[];
    deleteMany?: Prisma.PatientFamilyHistoryScalarWhereInput | Prisma.PatientFamilyHistoryScalarWhereInput[];
};
export type EnumFamilyRelationFieldUpdateOperationsInput = {
    set?: $Enums.FamilyRelation;
};
export type EnumFamilyDiseaseFieldUpdateOperationsInput = {
    set?: $Enums.FamilyDisease;
};
export type PatientFamilyHistoryCreateWithoutBackgroundInput = {
    id?: string;
    parentesco: $Enums.FamilyRelation;
    enfermedad: $Enums.FamilyDisease;
    detalleOtra?: string | null;
    createdAt?: Date | string;
};
export type PatientFamilyHistoryUncheckedCreateWithoutBackgroundInput = {
    id?: string;
    parentesco: $Enums.FamilyRelation;
    enfermedad: $Enums.FamilyDisease;
    detalleOtra?: string | null;
    createdAt?: Date | string;
};
export type PatientFamilyHistoryCreateOrConnectWithoutBackgroundInput = {
    where: Prisma.PatientFamilyHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientFamilyHistoryCreateWithoutBackgroundInput, Prisma.PatientFamilyHistoryUncheckedCreateWithoutBackgroundInput>;
};
export type PatientFamilyHistoryCreateManyBackgroundInputEnvelope = {
    data: Prisma.PatientFamilyHistoryCreateManyBackgroundInput | Prisma.PatientFamilyHistoryCreateManyBackgroundInput[];
    skipDuplicates?: boolean;
};
export type PatientFamilyHistoryUpsertWithWhereUniqueWithoutBackgroundInput = {
    where: Prisma.PatientFamilyHistoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.PatientFamilyHistoryUpdateWithoutBackgroundInput, Prisma.PatientFamilyHistoryUncheckedUpdateWithoutBackgroundInput>;
    create: Prisma.XOR<Prisma.PatientFamilyHistoryCreateWithoutBackgroundInput, Prisma.PatientFamilyHistoryUncheckedCreateWithoutBackgroundInput>;
};
export type PatientFamilyHistoryUpdateWithWhereUniqueWithoutBackgroundInput = {
    where: Prisma.PatientFamilyHistoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.PatientFamilyHistoryUpdateWithoutBackgroundInput, Prisma.PatientFamilyHistoryUncheckedUpdateWithoutBackgroundInput>;
};
export type PatientFamilyHistoryUpdateManyWithWhereWithoutBackgroundInput = {
    where: Prisma.PatientFamilyHistoryScalarWhereInput;
    data: Prisma.XOR<Prisma.PatientFamilyHistoryUpdateManyMutationInput, Prisma.PatientFamilyHistoryUncheckedUpdateManyWithoutBackgroundInput>;
};
export type PatientFamilyHistoryScalarWhereInput = {
    AND?: Prisma.PatientFamilyHistoryScalarWhereInput | Prisma.PatientFamilyHistoryScalarWhereInput[];
    OR?: Prisma.PatientFamilyHistoryScalarWhereInput[];
    NOT?: Prisma.PatientFamilyHistoryScalarWhereInput | Prisma.PatientFamilyHistoryScalarWhereInput[];
    id?: Prisma.StringFilter<"PatientFamilyHistory"> | string;
    backgroundId?: Prisma.StringFilter<"PatientFamilyHistory"> | string;
    parentesco?: Prisma.EnumFamilyRelationFilter<"PatientFamilyHistory"> | $Enums.FamilyRelation;
    enfermedad?: Prisma.EnumFamilyDiseaseFilter<"PatientFamilyHistory"> | $Enums.FamilyDisease;
    detalleOtra?: Prisma.StringNullableFilter<"PatientFamilyHistory"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PatientFamilyHistory"> | Date | string;
};
export type PatientFamilyHistoryCreateManyBackgroundInput = {
    id?: string;
    parentesco: $Enums.FamilyRelation;
    enfermedad: $Enums.FamilyDisease;
    detalleOtra?: string | null;
    createdAt?: Date | string;
};
export type PatientFamilyHistoryUpdateWithoutBackgroundInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parentesco?: Prisma.EnumFamilyRelationFieldUpdateOperationsInput | $Enums.FamilyRelation;
    enfermedad?: Prisma.EnumFamilyDiseaseFieldUpdateOperationsInput | $Enums.FamilyDisease;
    detalleOtra?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientFamilyHistoryUncheckedUpdateWithoutBackgroundInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parentesco?: Prisma.EnumFamilyRelationFieldUpdateOperationsInput | $Enums.FamilyRelation;
    enfermedad?: Prisma.EnumFamilyDiseaseFieldUpdateOperationsInput | $Enums.FamilyDisease;
    detalleOtra?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientFamilyHistoryUncheckedUpdateManyWithoutBackgroundInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parentesco?: Prisma.EnumFamilyRelationFieldUpdateOperationsInput | $Enums.FamilyRelation;
    enfermedad?: Prisma.EnumFamilyDiseaseFieldUpdateOperationsInput | $Enums.FamilyDisease;
    detalleOtra?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientFamilyHistorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    backgroundId?: boolean;
    parentesco?: boolean;
    enfermedad?: boolean;
    detalleOtra?: boolean;
    createdAt?: boolean;
    background?: boolean | Prisma.PatientBackgroundDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patientFamilyHistory"]>;
export type PatientFamilyHistorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    backgroundId?: boolean;
    parentesco?: boolean;
    enfermedad?: boolean;
    detalleOtra?: boolean;
    createdAt?: boolean;
    background?: boolean | Prisma.PatientBackgroundDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patientFamilyHistory"]>;
export type PatientFamilyHistorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    backgroundId?: boolean;
    parentesco?: boolean;
    enfermedad?: boolean;
    detalleOtra?: boolean;
    createdAt?: boolean;
    background?: boolean | Prisma.PatientBackgroundDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patientFamilyHistory"]>;
export type PatientFamilyHistorySelectScalar = {
    id?: boolean;
    backgroundId?: boolean;
    parentesco?: boolean;
    enfermedad?: boolean;
    detalleOtra?: boolean;
    createdAt?: boolean;
};
export type PatientFamilyHistoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "backgroundId" | "parentesco" | "enfermedad" | "detalleOtra" | "createdAt", ExtArgs["result"]["patientFamilyHistory"]>;
export type PatientFamilyHistoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    background?: boolean | Prisma.PatientBackgroundDefaultArgs<ExtArgs>;
};
export type PatientFamilyHistoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    background?: boolean | Prisma.PatientBackgroundDefaultArgs<ExtArgs>;
};
export type PatientFamilyHistoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    background?: boolean | Prisma.PatientBackgroundDefaultArgs<ExtArgs>;
};
export type $PatientFamilyHistoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PatientFamilyHistory";
    objects: {
        background: Prisma.$PatientBackgroundPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        backgroundId: string;
        parentesco: $Enums.FamilyRelation;
        enfermedad: $Enums.FamilyDisease;
        detalleOtra: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["patientFamilyHistory"]>;
    composites: {};
};
export type PatientFamilyHistoryGetPayload<S extends boolean | null | undefined | PatientFamilyHistoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PatientFamilyHistoryPayload, S>;
export type PatientFamilyHistoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PatientFamilyHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PatientFamilyHistoryCountAggregateInputType | true;
};
export interface PatientFamilyHistoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PatientFamilyHistory'];
        meta: {
            name: 'PatientFamilyHistory';
        };
    };
    findUnique<T extends PatientFamilyHistoryFindUniqueArgs>(args: Prisma.SelectSubset<T, PatientFamilyHistoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PatientFamilyHistoryClient<runtime.Types.Result.GetResult<Prisma.$PatientFamilyHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PatientFamilyHistoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PatientFamilyHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PatientFamilyHistoryClient<runtime.Types.Result.GetResult<Prisma.$PatientFamilyHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PatientFamilyHistoryFindFirstArgs>(args?: Prisma.SelectSubset<T, PatientFamilyHistoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__PatientFamilyHistoryClient<runtime.Types.Result.GetResult<Prisma.$PatientFamilyHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PatientFamilyHistoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PatientFamilyHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PatientFamilyHistoryClient<runtime.Types.Result.GetResult<Prisma.$PatientFamilyHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PatientFamilyHistoryFindManyArgs>(args?: Prisma.SelectSubset<T, PatientFamilyHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientFamilyHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PatientFamilyHistoryCreateArgs>(args: Prisma.SelectSubset<T, PatientFamilyHistoryCreateArgs<ExtArgs>>): Prisma.Prisma__PatientFamilyHistoryClient<runtime.Types.Result.GetResult<Prisma.$PatientFamilyHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PatientFamilyHistoryCreateManyArgs>(args?: Prisma.SelectSubset<T, PatientFamilyHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PatientFamilyHistoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PatientFamilyHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientFamilyHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PatientFamilyHistoryDeleteArgs>(args: Prisma.SelectSubset<T, PatientFamilyHistoryDeleteArgs<ExtArgs>>): Prisma.Prisma__PatientFamilyHistoryClient<runtime.Types.Result.GetResult<Prisma.$PatientFamilyHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PatientFamilyHistoryUpdateArgs>(args: Prisma.SelectSubset<T, PatientFamilyHistoryUpdateArgs<ExtArgs>>): Prisma.Prisma__PatientFamilyHistoryClient<runtime.Types.Result.GetResult<Prisma.$PatientFamilyHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PatientFamilyHistoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, PatientFamilyHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PatientFamilyHistoryUpdateManyArgs>(args: Prisma.SelectSubset<T, PatientFamilyHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PatientFamilyHistoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PatientFamilyHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientFamilyHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PatientFamilyHistoryUpsertArgs>(args: Prisma.SelectSubset<T, PatientFamilyHistoryUpsertArgs<ExtArgs>>): Prisma.Prisma__PatientFamilyHistoryClient<runtime.Types.Result.GetResult<Prisma.$PatientFamilyHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PatientFamilyHistoryCountArgs>(args?: Prisma.Subset<T, PatientFamilyHistoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PatientFamilyHistoryCountAggregateOutputType> : number>;
    aggregate<T extends PatientFamilyHistoryAggregateArgs>(args: Prisma.Subset<T, PatientFamilyHistoryAggregateArgs>): Prisma.PrismaPromise<GetPatientFamilyHistoryAggregateType<T>>;
    groupBy<T extends PatientFamilyHistoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PatientFamilyHistoryGroupByArgs['orderBy'];
    } : {
        orderBy?: PatientFamilyHistoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PatientFamilyHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientFamilyHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PatientFamilyHistoryFieldRefs;
}
export interface Prisma__PatientFamilyHistoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    background<T extends Prisma.PatientBackgroundDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PatientBackgroundDefaultArgs<ExtArgs>>): Prisma.Prisma__PatientBackgroundClient<runtime.Types.Result.GetResult<Prisma.$PatientBackgroundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PatientFamilyHistoryFieldRefs {
    readonly id: Prisma.FieldRef<"PatientFamilyHistory", 'String'>;
    readonly backgroundId: Prisma.FieldRef<"PatientFamilyHistory", 'String'>;
    readonly parentesco: Prisma.FieldRef<"PatientFamilyHistory", 'FamilyRelation'>;
    readonly enfermedad: Prisma.FieldRef<"PatientFamilyHistory", 'FamilyDisease'>;
    readonly detalleOtra: Prisma.FieldRef<"PatientFamilyHistory", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PatientFamilyHistory", 'DateTime'>;
}
export type PatientFamilyHistoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientFamilyHistorySelect<ExtArgs> | null;
    omit?: Prisma.PatientFamilyHistoryOmit<ExtArgs> | null;
    include?: Prisma.PatientFamilyHistoryInclude<ExtArgs> | null;
    where: Prisma.PatientFamilyHistoryWhereUniqueInput;
};
export type PatientFamilyHistoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientFamilyHistorySelect<ExtArgs> | null;
    omit?: Prisma.PatientFamilyHistoryOmit<ExtArgs> | null;
    include?: Prisma.PatientFamilyHistoryInclude<ExtArgs> | null;
    where: Prisma.PatientFamilyHistoryWhereUniqueInput;
};
export type PatientFamilyHistoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientFamilyHistorySelect<ExtArgs> | null;
    omit?: Prisma.PatientFamilyHistoryOmit<ExtArgs> | null;
    include?: Prisma.PatientFamilyHistoryInclude<ExtArgs> | null;
    where?: Prisma.PatientFamilyHistoryWhereInput;
    orderBy?: Prisma.PatientFamilyHistoryOrderByWithRelationInput | Prisma.PatientFamilyHistoryOrderByWithRelationInput[];
    cursor?: Prisma.PatientFamilyHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientFamilyHistoryScalarFieldEnum | Prisma.PatientFamilyHistoryScalarFieldEnum[];
};
export type PatientFamilyHistoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientFamilyHistorySelect<ExtArgs> | null;
    omit?: Prisma.PatientFamilyHistoryOmit<ExtArgs> | null;
    include?: Prisma.PatientFamilyHistoryInclude<ExtArgs> | null;
    where?: Prisma.PatientFamilyHistoryWhereInput;
    orderBy?: Prisma.PatientFamilyHistoryOrderByWithRelationInput | Prisma.PatientFamilyHistoryOrderByWithRelationInput[];
    cursor?: Prisma.PatientFamilyHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientFamilyHistoryScalarFieldEnum | Prisma.PatientFamilyHistoryScalarFieldEnum[];
};
export type PatientFamilyHistoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientFamilyHistorySelect<ExtArgs> | null;
    omit?: Prisma.PatientFamilyHistoryOmit<ExtArgs> | null;
    include?: Prisma.PatientFamilyHistoryInclude<ExtArgs> | null;
    where?: Prisma.PatientFamilyHistoryWhereInput;
    orderBy?: Prisma.PatientFamilyHistoryOrderByWithRelationInput | Prisma.PatientFamilyHistoryOrderByWithRelationInput[];
    cursor?: Prisma.PatientFamilyHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientFamilyHistoryScalarFieldEnum | Prisma.PatientFamilyHistoryScalarFieldEnum[];
};
export type PatientFamilyHistoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientFamilyHistorySelect<ExtArgs> | null;
    omit?: Prisma.PatientFamilyHistoryOmit<ExtArgs> | null;
    include?: Prisma.PatientFamilyHistoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientFamilyHistoryCreateInput, Prisma.PatientFamilyHistoryUncheckedCreateInput>;
};
export type PatientFamilyHistoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PatientFamilyHistoryCreateManyInput | Prisma.PatientFamilyHistoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PatientFamilyHistoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientFamilyHistorySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PatientFamilyHistoryOmit<ExtArgs> | null;
    data: Prisma.PatientFamilyHistoryCreateManyInput | Prisma.PatientFamilyHistoryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PatientFamilyHistoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PatientFamilyHistoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientFamilyHistorySelect<ExtArgs> | null;
    omit?: Prisma.PatientFamilyHistoryOmit<ExtArgs> | null;
    include?: Prisma.PatientFamilyHistoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientFamilyHistoryUpdateInput, Prisma.PatientFamilyHistoryUncheckedUpdateInput>;
    where: Prisma.PatientFamilyHistoryWhereUniqueInput;
};
export type PatientFamilyHistoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PatientFamilyHistoryUpdateManyMutationInput, Prisma.PatientFamilyHistoryUncheckedUpdateManyInput>;
    where?: Prisma.PatientFamilyHistoryWhereInput;
    limit?: number;
};
export type PatientFamilyHistoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientFamilyHistorySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PatientFamilyHistoryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientFamilyHistoryUpdateManyMutationInput, Prisma.PatientFamilyHistoryUncheckedUpdateManyInput>;
    where?: Prisma.PatientFamilyHistoryWhereInput;
    limit?: number;
    include?: Prisma.PatientFamilyHistoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PatientFamilyHistoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientFamilyHistorySelect<ExtArgs> | null;
    omit?: Prisma.PatientFamilyHistoryOmit<ExtArgs> | null;
    include?: Prisma.PatientFamilyHistoryInclude<ExtArgs> | null;
    where: Prisma.PatientFamilyHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientFamilyHistoryCreateInput, Prisma.PatientFamilyHistoryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PatientFamilyHistoryUpdateInput, Prisma.PatientFamilyHistoryUncheckedUpdateInput>;
};
export type PatientFamilyHistoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientFamilyHistorySelect<ExtArgs> | null;
    omit?: Prisma.PatientFamilyHistoryOmit<ExtArgs> | null;
    include?: Prisma.PatientFamilyHistoryInclude<ExtArgs> | null;
    where: Prisma.PatientFamilyHistoryWhereUniqueInput;
};
export type PatientFamilyHistoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientFamilyHistoryWhereInput;
    limit?: number;
};
export type PatientFamilyHistoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientFamilyHistorySelect<ExtArgs> | null;
    omit?: Prisma.PatientFamilyHistoryOmit<ExtArgs> | null;
    include?: Prisma.PatientFamilyHistoryInclude<ExtArgs> | null;
};

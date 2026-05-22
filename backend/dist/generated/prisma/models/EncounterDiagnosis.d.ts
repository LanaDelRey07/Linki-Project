import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EncounterDiagnosisModel = runtime.Types.Result.DefaultSelection<Prisma.$EncounterDiagnosisPayload>;
export type AggregateEncounterDiagnosis = {
    _count: EncounterDiagnosisCountAggregateOutputType | null;
    _min: EncounterDiagnosisMinAggregateOutputType | null;
    _max: EncounterDiagnosisMaxAggregateOutputType | null;
};
export type EncounterDiagnosisMinAggregateOutputType = {
    id: string | null;
    encounterId: string | null;
    cie10Code: string | null;
    esDiagnosticoPrincipal: boolean | null;
};
export type EncounterDiagnosisMaxAggregateOutputType = {
    id: string | null;
    encounterId: string | null;
    cie10Code: string | null;
    esDiagnosticoPrincipal: boolean | null;
};
export type EncounterDiagnosisCountAggregateOutputType = {
    id: number;
    encounterId: number;
    cie10Code: number;
    esDiagnosticoPrincipal: number;
    _all: number;
};
export type EncounterDiagnosisMinAggregateInputType = {
    id?: true;
    encounterId?: true;
    cie10Code?: true;
    esDiagnosticoPrincipal?: true;
};
export type EncounterDiagnosisMaxAggregateInputType = {
    id?: true;
    encounterId?: true;
    cie10Code?: true;
    esDiagnosticoPrincipal?: true;
};
export type EncounterDiagnosisCountAggregateInputType = {
    id?: true;
    encounterId?: true;
    cie10Code?: true;
    esDiagnosticoPrincipal?: true;
    _all?: true;
};
export type EncounterDiagnosisAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EncounterDiagnosisWhereInput;
    orderBy?: Prisma.EncounterDiagnosisOrderByWithRelationInput | Prisma.EncounterDiagnosisOrderByWithRelationInput[];
    cursor?: Prisma.EncounterDiagnosisWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EncounterDiagnosisCountAggregateInputType;
    _min?: EncounterDiagnosisMinAggregateInputType;
    _max?: EncounterDiagnosisMaxAggregateInputType;
};
export type GetEncounterDiagnosisAggregateType<T extends EncounterDiagnosisAggregateArgs> = {
    [P in keyof T & keyof AggregateEncounterDiagnosis]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEncounterDiagnosis[P]> : Prisma.GetScalarType<T[P], AggregateEncounterDiagnosis[P]>;
};
export type EncounterDiagnosisGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EncounterDiagnosisWhereInput;
    orderBy?: Prisma.EncounterDiagnosisOrderByWithAggregationInput | Prisma.EncounterDiagnosisOrderByWithAggregationInput[];
    by: Prisma.EncounterDiagnosisScalarFieldEnum[] | Prisma.EncounterDiagnosisScalarFieldEnum;
    having?: Prisma.EncounterDiagnosisScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EncounterDiagnosisCountAggregateInputType | true;
    _min?: EncounterDiagnosisMinAggregateInputType;
    _max?: EncounterDiagnosisMaxAggregateInputType;
};
export type EncounterDiagnosisGroupByOutputType = {
    id: string;
    encounterId: string;
    cie10Code: string;
    esDiagnosticoPrincipal: boolean;
    _count: EncounterDiagnosisCountAggregateOutputType | null;
    _min: EncounterDiagnosisMinAggregateOutputType | null;
    _max: EncounterDiagnosisMaxAggregateOutputType | null;
};
export type GetEncounterDiagnosisGroupByPayload<T extends EncounterDiagnosisGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EncounterDiagnosisGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EncounterDiagnosisGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EncounterDiagnosisGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EncounterDiagnosisGroupByOutputType[P]>;
}>>;
export type EncounterDiagnosisWhereInput = {
    AND?: Prisma.EncounterDiagnosisWhereInput | Prisma.EncounterDiagnosisWhereInput[];
    OR?: Prisma.EncounterDiagnosisWhereInput[];
    NOT?: Prisma.EncounterDiagnosisWhereInput | Prisma.EncounterDiagnosisWhereInput[];
    id?: Prisma.StringFilter<"EncounterDiagnosis"> | string;
    encounterId?: Prisma.StringFilter<"EncounterDiagnosis"> | string;
    cie10Code?: Prisma.StringFilter<"EncounterDiagnosis"> | string;
    esDiagnosticoPrincipal?: Prisma.BoolFilter<"EncounterDiagnosis"> | boolean;
    encounter?: Prisma.XOR<Prisma.ClinicalEncounterScalarRelationFilter, Prisma.ClinicalEncounterWhereInput>;
    cie10Entry?: Prisma.XOR<Prisma.Cie10CodeScalarRelationFilter, Prisma.Cie10CodeWhereInput>;
};
export type EncounterDiagnosisOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    encounterId?: Prisma.SortOrder;
    cie10Code?: Prisma.SortOrder;
    esDiagnosticoPrincipal?: Prisma.SortOrder;
    encounter?: Prisma.ClinicalEncounterOrderByWithRelationInput;
    cie10Entry?: Prisma.Cie10CodeOrderByWithRelationInput;
};
export type EncounterDiagnosisWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    encounterId_cie10Code?: Prisma.EncounterDiagnosisEncounterIdCie10CodeCompoundUniqueInput;
    AND?: Prisma.EncounterDiagnosisWhereInput | Prisma.EncounterDiagnosisWhereInput[];
    OR?: Prisma.EncounterDiagnosisWhereInput[];
    NOT?: Prisma.EncounterDiagnosisWhereInput | Prisma.EncounterDiagnosisWhereInput[];
    encounterId?: Prisma.StringFilter<"EncounterDiagnosis"> | string;
    cie10Code?: Prisma.StringFilter<"EncounterDiagnosis"> | string;
    esDiagnosticoPrincipal?: Prisma.BoolFilter<"EncounterDiagnosis"> | boolean;
    encounter?: Prisma.XOR<Prisma.ClinicalEncounterScalarRelationFilter, Prisma.ClinicalEncounterWhereInput>;
    cie10Entry?: Prisma.XOR<Prisma.Cie10CodeScalarRelationFilter, Prisma.Cie10CodeWhereInput>;
}, "id" | "encounterId_cie10Code">;
export type EncounterDiagnosisOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    encounterId?: Prisma.SortOrder;
    cie10Code?: Prisma.SortOrder;
    esDiagnosticoPrincipal?: Prisma.SortOrder;
    _count?: Prisma.EncounterDiagnosisCountOrderByAggregateInput;
    _max?: Prisma.EncounterDiagnosisMaxOrderByAggregateInput;
    _min?: Prisma.EncounterDiagnosisMinOrderByAggregateInput;
};
export type EncounterDiagnosisScalarWhereWithAggregatesInput = {
    AND?: Prisma.EncounterDiagnosisScalarWhereWithAggregatesInput | Prisma.EncounterDiagnosisScalarWhereWithAggregatesInput[];
    OR?: Prisma.EncounterDiagnosisScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EncounterDiagnosisScalarWhereWithAggregatesInput | Prisma.EncounterDiagnosisScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"EncounterDiagnosis"> | string;
    encounterId?: Prisma.StringWithAggregatesFilter<"EncounterDiagnosis"> | string;
    cie10Code?: Prisma.StringWithAggregatesFilter<"EncounterDiagnosis"> | string;
    esDiagnosticoPrincipal?: Prisma.BoolWithAggregatesFilter<"EncounterDiagnosis"> | boolean;
};
export type EncounterDiagnosisCreateInput = {
    id?: string;
    esDiagnosticoPrincipal?: boolean;
    encounter: Prisma.ClinicalEncounterCreateNestedOneWithoutDiagnosesInput;
    cie10Entry: Prisma.Cie10CodeCreateNestedOneWithoutDiagnosesInput;
};
export type EncounterDiagnosisUncheckedCreateInput = {
    id?: string;
    encounterId: string;
    cie10Code: string;
    esDiagnosticoPrincipal?: boolean;
};
export type EncounterDiagnosisUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    esDiagnosticoPrincipal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    encounter?: Prisma.ClinicalEncounterUpdateOneRequiredWithoutDiagnosesNestedInput;
    cie10Entry?: Prisma.Cie10CodeUpdateOneRequiredWithoutDiagnosesNestedInput;
};
export type EncounterDiagnosisUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    encounterId?: Prisma.StringFieldUpdateOperationsInput | string;
    cie10Code?: Prisma.StringFieldUpdateOperationsInput | string;
    esDiagnosticoPrincipal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type EncounterDiagnosisCreateManyInput = {
    id?: string;
    encounterId: string;
    cie10Code: string;
    esDiagnosticoPrincipal?: boolean;
};
export type EncounterDiagnosisUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    esDiagnosticoPrincipal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type EncounterDiagnosisUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    encounterId?: Prisma.StringFieldUpdateOperationsInput | string;
    cie10Code?: Prisma.StringFieldUpdateOperationsInput | string;
    esDiagnosticoPrincipal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type EncounterDiagnosisListRelationFilter = {
    every?: Prisma.EncounterDiagnosisWhereInput;
    some?: Prisma.EncounterDiagnosisWhereInput;
    none?: Prisma.EncounterDiagnosisWhereInput;
};
export type EncounterDiagnosisOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EncounterDiagnosisEncounterIdCie10CodeCompoundUniqueInput = {
    encounterId: string;
    cie10Code: string;
};
export type EncounterDiagnosisCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    encounterId?: Prisma.SortOrder;
    cie10Code?: Prisma.SortOrder;
    esDiagnosticoPrincipal?: Prisma.SortOrder;
};
export type EncounterDiagnosisMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    encounterId?: Prisma.SortOrder;
    cie10Code?: Prisma.SortOrder;
    esDiagnosticoPrincipal?: Prisma.SortOrder;
};
export type EncounterDiagnosisMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    encounterId?: Prisma.SortOrder;
    cie10Code?: Prisma.SortOrder;
    esDiagnosticoPrincipal?: Prisma.SortOrder;
};
export type EncounterDiagnosisCreateNestedManyWithoutEncounterInput = {
    create?: Prisma.XOR<Prisma.EncounterDiagnosisCreateWithoutEncounterInput, Prisma.EncounterDiagnosisUncheckedCreateWithoutEncounterInput> | Prisma.EncounterDiagnosisCreateWithoutEncounterInput[] | Prisma.EncounterDiagnosisUncheckedCreateWithoutEncounterInput[];
    connectOrCreate?: Prisma.EncounterDiagnosisCreateOrConnectWithoutEncounterInput | Prisma.EncounterDiagnosisCreateOrConnectWithoutEncounterInput[];
    createMany?: Prisma.EncounterDiagnosisCreateManyEncounterInputEnvelope;
    connect?: Prisma.EncounterDiagnosisWhereUniqueInput | Prisma.EncounterDiagnosisWhereUniqueInput[];
};
export type EncounterDiagnosisUncheckedCreateNestedManyWithoutEncounterInput = {
    create?: Prisma.XOR<Prisma.EncounterDiagnosisCreateWithoutEncounterInput, Prisma.EncounterDiagnosisUncheckedCreateWithoutEncounterInput> | Prisma.EncounterDiagnosisCreateWithoutEncounterInput[] | Prisma.EncounterDiagnosisUncheckedCreateWithoutEncounterInput[];
    connectOrCreate?: Prisma.EncounterDiagnosisCreateOrConnectWithoutEncounterInput | Prisma.EncounterDiagnosisCreateOrConnectWithoutEncounterInput[];
    createMany?: Prisma.EncounterDiagnosisCreateManyEncounterInputEnvelope;
    connect?: Prisma.EncounterDiagnosisWhereUniqueInput | Prisma.EncounterDiagnosisWhereUniqueInput[];
};
export type EncounterDiagnosisUpdateManyWithoutEncounterNestedInput = {
    create?: Prisma.XOR<Prisma.EncounterDiagnosisCreateWithoutEncounterInput, Prisma.EncounterDiagnosisUncheckedCreateWithoutEncounterInput> | Prisma.EncounterDiagnosisCreateWithoutEncounterInput[] | Prisma.EncounterDiagnosisUncheckedCreateWithoutEncounterInput[];
    connectOrCreate?: Prisma.EncounterDiagnosisCreateOrConnectWithoutEncounterInput | Prisma.EncounterDiagnosisCreateOrConnectWithoutEncounterInput[];
    upsert?: Prisma.EncounterDiagnosisUpsertWithWhereUniqueWithoutEncounterInput | Prisma.EncounterDiagnosisUpsertWithWhereUniqueWithoutEncounterInput[];
    createMany?: Prisma.EncounterDiagnosisCreateManyEncounterInputEnvelope;
    set?: Prisma.EncounterDiagnosisWhereUniqueInput | Prisma.EncounterDiagnosisWhereUniqueInput[];
    disconnect?: Prisma.EncounterDiagnosisWhereUniqueInput | Prisma.EncounterDiagnosisWhereUniqueInput[];
    delete?: Prisma.EncounterDiagnosisWhereUniqueInput | Prisma.EncounterDiagnosisWhereUniqueInput[];
    connect?: Prisma.EncounterDiagnosisWhereUniqueInput | Prisma.EncounterDiagnosisWhereUniqueInput[];
    update?: Prisma.EncounterDiagnosisUpdateWithWhereUniqueWithoutEncounterInput | Prisma.EncounterDiagnosisUpdateWithWhereUniqueWithoutEncounterInput[];
    updateMany?: Prisma.EncounterDiagnosisUpdateManyWithWhereWithoutEncounterInput | Prisma.EncounterDiagnosisUpdateManyWithWhereWithoutEncounterInput[];
    deleteMany?: Prisma.EncounterDiagnosisScalarWhereInput | Prisma.EncounterDiagnosisScalarWhereInput[];
};
export type EncounterDiagnosisUncheckedUpdateManyWithoutEncounterNestedInput = {
    create?: Prisma.XOR<Prisma.EncounterDiagnosisCreateWithoutEncounterInput, Prisma.EncounterDiagnosisUncheckedCreateWithoutEncounterInput> | Prisma.EncounterDiagnosisCreateWithoutEncounterInput[] | Prisma.EncounterDiagnosisUncheckedCreateWithoutEncounterInput[];
    connectOrCreate?: Prisma.EncounterDiagnosisCreateOrConnectWithoutEncounterInput | Prisma.EncounterDiagnosisCreateOrConnectWithoutEncounterInput[];
    upsert?: Prisma.EncounterDiagnosisUpsertWithWhereUniqueWithoutEncounterInput | Prisma.EncounterDiagnosisUpsertWithWhereUniqueWithoutEncounterInput[];
    createMany?: Prisma.EncounterDiagnosisCreateManyEncounterInputEnvelope;
    set?: Prisma.EncounterDiagnosisWhereUniqueInput | Prisma.EncounterDiagnosisWhereUniqueInput[];
    disconnect?: Prisma.EncounterDiagnosisWhereUniqueInput | Prisma.EncounterDiagnosisWhereUniqueInput[];
    delete?: Prisma.EncounterDiagnosisWhereUniqueInput | Prisma.EncounterDiagnosisWhereUniqueInput[];
    connect?: Prisma.EncounterDiagnosisWhereUniqueInput | Prisma.EncounterDiagnosisWhereUniqueInput[];
    update?: Prisma.EncounterDiagnosisUpdateWithWhereUniqueWithoutEncounterInput | Prisma.EncounterDiagnosisUpdateWithWhereUniqueWithoutEncounterInput[];
    updateMany?: Prisma.EncounterDiagnosisUpdateManyWithWhereWithoutEncounterInput | Prisma.EncounterDiagnosisUpdateManyWithWhereWithoutEncounterInput[];
    deleteMany?: Prisma.EncounterDiagnosisScalarWhereInput | Prisma.EncounterDiagnosisScalarWhereInput[];
};
export type EncounterDiagnosisCreateNestedManyWithoutCie10EntryInput = {
    create?: Prisma.XOR<Prisma.EncounterDiagnosisCreateWithoutCie10EntryInput, Prisma.EncounterDiagnosisUncheckedCreateWithoutCie10EntryInput> | Prisma.EncounterDiagnosisCreateWithoutCie10EntryInput[] | Prisma.EncounterDiagnosisUncheckedCreateWithoutCie10EntryInput[];
    connectOrCreate?: Prisma.EncounterDiagnosisCreateOrConnectWithoutCie10EntryInput | Prisma.EncounterDiagnosisCreateOrConnectWithoutCie10EntryInput[];
    createMany?: Prisma.EncounterDiagnosisCreateManyCie10EntryInputEnvelope;
    connect?: Prisma.EncounterDiagnosisWhereUniqueInput | Prisma.EncounterDiagnosisWhereUniqueInput[];
};
export type EncounterDiagnosisUncheckedCreateNestedManyWithoutCie10EntryInput = {
    create?: Prisma.XOR<Prisma.EncounterDiagnosisCreateWithoutCie10EntryInput, Prisma.EncounterDiagnosisUncheckedCreateWithoutCie10EntryInput> | Prisma.EncounterDiagnosisCreateWithoutCie10EntryInput[] | Prisma.EncounterDiagnosisUncheckedCreateWithoutCie10EntryInput[];
    connectOrCreate?: Prisma.EncounterDiagnosisCreateOrConnectWithoutCie10EntryInput | Prisma.EncounterDiagnosisCreateOrConnectWithoutCie10EntryInput[];
    createMany?: Prisma.EncounterDiagnosisCreateManyCie10EntryInputEnvelope;
    connect?: Prisma.EncounterDiagnosisWhereUniqueInput | Prisma.EncounterDiagnosisWhereUniqueInput[];
};
export type EncounterDiagnosisUpdateManyWithoutCie10EntryNestedInput = {
    create?: Prisma.XOR<Prisma.EncounterDiagnosisCreateWithoutCie10EntryInput, Prisma.EncounterDiagnosisUncheckedCreateWithoutCie10EntryInput> | Prisma.EncounterDiagnosisCreateWithoutCie10EntryInput[] | Prisma.EncounterDiagnosisUncheckedCreateWithoutCie10EntryInput[];
    connectOrCreate?: Prisma.EncounterDiagnosisCreateOrConnectWithoutCie10EntryInput | Prisma.EncounterDiagnosisCreateOrConnectWithoutCie10EntryInput[];
    upsert?: Prisma.EncounterDiagnosisUpsertWithWhereUniqueWithoutCie10EntryInput | Prisma.EncounterDiagnosisUpsertWithWhereUniqueWithoutCie10EntryInput[];
    createMany?: Prisma.EncounterDiagnosisCreateManyCie10EntryInputEnvelope;
    set?: Prisma.EncounterDiagnosisWhereUniqueInput | Prisma.EncounterDiagnosisWhereUniqueInput[];
    disconnect?: Prisma.EncounterDiagnosisWhereUniqueInput | Prisma.EncounterDiagnosisWhereUniqueInput[];
    delete?: Prisma.EncounterDiagnosisWhereUniqueInput | Prisma.EncounterDiagnosisWhereUniqueInput[];
    connect?: Prisma.EncounterDiagnosisWhereUniqueInput | Prisma.EncounterDiagnosisWhereUniqueInput[];
    update?: Prisma.EncounterDiagnosisUpdateWithWhereUniqueWithoutCie10EntryInput | Prisma.EncounterDiagnosisUpdateWithWhereUniqueWithoutCie10EntryInput[];
    updateMany?: Prisma.EncounterDiagnosisUpdateManyWithWhereWithoutCie10EntryInput | Prisma.EncounterDiagnosisUpdateManyWithWhereWithoutCie10EntryInput[];
    deleteMany?: Prisma.EncounterDiagnosisScalarWhereInput | Prisma.EncounterDiagnosisScalarWhereInput[];
};
export type EncounterDiagnosisUncheckedUpdateManyWithoutCie10EntryNestedInput = {
    create?: Prisma.XOR<Prisma.EncounterDiagnosisCreateWithoutCie10EntryInput, Prisma.EncounterDiagnosisUncheckedCreateWithoutCie10EntryInput> | Prisma.EncounterDiagnosisCreateWithoutCie10EntryInput[] | Prisma.EncounterDiagnosisUncheckedCreateWithoutCie10EntryInput[];
    connectOrCreate?: Prisma.EncounterDiagnosisCreateOrConnectWithoutCie10EntryInput | Prisma.EncounterDiagnosisCreateOrConnectWithoutCie10EntryInput[];
    upsert?: Prisma.EncounterDiagnosisUpsertWithWhereUniqueWithoutCie10EntryInput | Prisma.EncounterDiagnosisUpsertWithWhereUniqueWithoutCie10EntryInput[];
    createMany?: Prisma.EncounterDiagnosisCreateManyCie10EntryInputEnvelope;
    set?: Prisma.EncounterDiagnosisWhereUniqueInput | Prisma.EncounterDiagnosisWhereUniqueInput[];
    disconnect?: Prisma.EncounterDiagnosisWhereUniqueInput | Prisma.EncounterDiagnosisWhereUniqueInput[];
    delete?: Prisma.EncounterDiagnosisWhereUniqueInput | Prisma.EncounterDiagnosisWhereUniqueInput[];
    connect?: Prisma.EncounterDiagnosisWhereUniqueInput | Prisma.EncounterDiagnosisWhereUniqueInput[];
    update?: Prisma.EncounterDiagnosisUpdateWithWhereUniqueWithoutCie10EntryInput | Prisma.EncounterDiagnosisUpdateWithWhereUniqueWithoutCie10EntryInput[];
    updateMany?: Prisma.EncounterDiagnosisUpdateManyWithWhereWithoutCie10EntryInput | Prisma.EncounterDiagnosisUpdateManyWithWhereWithoutCie10EntryInput[];
    deleteMany?: Prisma.EncounterDiagnosisScalarWhereInput | Prisma.EncounterDiagnosisScalarWhereInput[];
};
export type EncounterDiagnosisCreateWithoutEncounterInput = {
    id?: string;
    esDiagnosticoPrincipal?: boolean;
    cie10Entry: Prisma.Cie10CodeCreateNestedOneWithoutDiagnosesInput;
};
export type EncounterDiagnosisUncheckedCreateWithoutEncounterInput = {
    id?: string;
    cie10Code: string;
    esDiagnosticoPrincipal?: boolean;
};
export type EncounterDiagnosisCreateOrConnectWithoutEncounterInput = {
    where: Prisma.EncounterDiagnosisWhereUniqueInput;
    create: Prisma.XOR<Prisma.EncounterDiagnosisCreateWithoutEncounterInput, Prisma.EncounterDiagnosisUncheckedCreateWithoutEncounterInput>;
};
export type EncounterDiagnosisCreateManyEncounterInputEnvelope = {
    data: Prisma.EncounterDiagnosisCreateManyEncounterInput | Prisma.EncounterDiagnosisCreateManyEncounterInput[];
    skipDuplicates?: boolean;
};
export type EncounterDiagnosisUpsertWithWhereUniqueWithoutEncounterInput = {
    where: Prisma.EncounterDiagnosisWhereUniqueInput;
    update: Prisma.XOR<Prisma.EncounterDiagnosisUpdateWithoutEncounterInput, Prisma.EncounterDiagnosisUncheckedUpdateWithoutEncounterInput>;
    create: Prisma.XOR<Prisma.EncounterDiagnosisCreateWithoutEncounterInput, Prisma.EncounterDiagnosisUncheckedCreateWithoutEncounterInput>;
};
export type EncounterDiagnosisUpdateWithWhereUniqueWithoutEncounterInput = {
    where: Prisma.EncounterDiagnosisWhereUniqueInput;
    data: Prisma.XOR<Prisma.EncounterDiagnosisUpdateWithoutEncounterInput, Prisma.EncounterDiagnosisUncheckedUpdateWithoutEncounterInput>;
};
export type EncounterDiagnosisUpdateManyWithWhereWithoutEncounterInput = {
    where: Prisma.EncounterDiagnosisScalarWhereInput;
    data: Prisma.XOR<Prisma.EncounterDiagnosisUpdateManyMutationInput, Prisma.EncounterDiagnosisUncheckedUpdateManyWithoutEncounterInput>;
};
export type EncounterDiagnosisScalarWhereInput = {
    AND?: Prisma.EncounterDiagnosisScalarWhereInput | Prisma.EncounterDiagnosisScalarWhereInput[];
    OR?: Prisma.EncounterDiagnosisScalarWhereInput[];
    NOT?: Prisma.EncounterDiagnosisScalarWhereInput | Prisma.EncounterDiagnosisScalarWhereInput[];
    id?: Prisma.StringFilter<"EncounterDiagnosis"> | string;
    encounterId?: Prisma.StringFilter<"EncounterDiagnosis"> | string;
    cie10Code?: Prisma.StringFilter<"EncounterDiagnosis"> | string;
    esDiagnosticoPrincipal?: Prisma.BoolFilter<"EncounterDiagnosis"> | boolean;
};
export type EncounterDiagnosisCreateWithoutCie10EntryInput = {
    id?: string;
    esDiagnosticoPrincipal?: boolean;
    encounter: Prisma.ClinicalEncounterCreateNestedOneWithoutDiagnosesInput;
};
export type EncounterDiagnosisUncheckedCreateWithoutCie10EntryInput = {
    id?: string;
    encounterId: string;
    esDiagnosticoPrincipal?: boolean;
};
export type EncounterDiagnosisCreateOrConnectWithoutCie10EntryInput = {
    where: Prisma.EncounterDiagnosisWhereUniqueInput;
    create: Prisma.XOR<Prisma.EncounterDiagnosisCreateWithoutCie10EntryInput, Prisma.EncounterDiagnosisUncheckedCreateWithoutCie10EntryInput>;
};
export type EncounterDiagnosisCreateManyCie10EntryInputEnvelope = {
    data: Prisma.EncounterDiagnosisCreateManyCie10EntryInput | Prisma.EncounterDiagnosisCreateManyCie10EntryInput[];
    skipDuplicates?: boolean;
};
export type EncounterDiagnosisUpsertWithWhereUniqueWithoutCie10EntryInput = {
    where: Prisma.EncounterDiagnosisWhereUniqueInput;
    update: Prisma.XOR<Prisma.EncounterDiagnosisUpdateWithoutCie10EntryInput, Prisma.EncounterDiagnosisUncheckedUpdateWithoutCie10EntryInput>;
    create: Prisma.XOR<Prisma.EncounterDiagnosisCreateWithoutCie10EntryInput, Prisma.EncounterDiagnosisUncheckedCreateWithoutCie10EntryInput>;
};
export type EncounterDiagnosisUpdateWithWhereUniqueWithoutCie10EntryInput = {
    where: Prisma.EncounterDiagnosisWhereUniqueInput;
    data: Prisma.XOR<Prisma.EncounterDiagnosisUpdateWithoutCie10EntryInput, Prisma.EncounterDiagnosisUncheckedUpdateWithoutCie10EntryInput>;
};
export type EncounterDiagnosisUpdateManyWithWhereWithoutCie10EntryInput = {
    where: Prisma.EncounterDiagnosisScalarWhereInput;
    data: Prisma.XOR<Prisma.EncounterDiagnosisUpdateManyMutationInput, Prisma.EncounterDiagnosisUncheckedUpdateManyWithoutCie10EntryInput>;
};
export type EncounterDiagnosisCreateManyEncounterInput = {
    id?: string;
    cie10Code: string;
    esDiagnosticoPrincipal?: boolean;
};
export type EncounterDiagnosisUpdateWithoutEncounterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    esDiagnosticoPrincipal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cie10Entry?: Prisma.Cie10CodeUpdateOneRequiredWithoutDiagnosesNestedInput;
};
export type EncounterDiagnosisUncheckedUpdateWithoutEncounterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cie10Code?: Prisma.StringFieldUpdateOperationsInput | string;
    esDiagnosticoPrincipal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type EncounterDiagnosisUncheckedUpdateManyWithoutEncounterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cie10Code?: Prisma.StringFieldUpdateOperationsInput | string;
    esDiagnosticoPrincipal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type EncounterDiagnosisCreateManyCie10EntryInput = {
    id?: string;
    encounterId: string;
    esDiagnosticoPrincipal?: boolean;
};
export type EncounterDiagnosisUpdateWithoutCie10EntryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    esDiagnosticoPrincipal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    encounter?: Prisma.ClinicalEncounterUpdateOneRequiredWithoutDiagnosesNestedInput;
};
export type EncounterDiagnosisUncheckedUpdateWithoutCie10EntryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    encounterId?: Prisma.StringFieldUpdateOperationsInput | string;
    esDiagnosticoPrincipal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type EncounterDiagnosisUncheckedUpdateManyWithoutCie10EntryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    encounterId?: Prisma.StringFieldUpdateOperationsInput | string;
    esDiagnosticoPrincipal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type EncounterDiagnosisSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    encounterId?: boolean;
    cie10Code?: boolean;
    esDiagnosticoPrincipal?: boolean;
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
    cie10Entry?: boolean | Prisma.Cie10CodeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["encounterDiagnosis"]>;
export type EncounterDiagnosisSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    encounterId?: boolean;
    cie10Code?: boolean;
    esDiagnosticoPrincipal?: boolean;
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
    cie10Entry?: boolean | Prisma.Cie10CodeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["encounterDiagnosis"]>;
export type EncounterDiagnosisSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    encounterId?: boolean;
    cie10Code?: boolean;
    esDiagnosticoPrincipal?: boolean;
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
    cie10Entry?: boolean | Prisma.Cie10CodeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["encounterDiagnosis"]>;
export type EncounterDiagnosisSelectScalar = {
    id?: boolean;
    encounterId?: boolean;
    cie10Code?: boolean;
    esDiagnosticoPrincipal?: boolean;
};
export type EncounterDiagnosisOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "encounterId" | "cie10Code" | "esDiagnosticoPrincipal", ExtArgs["result"]["encounterDiagnosis"]>;
export type EncounterDiagnosisInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
    cie10Entry?: boolean | Prisma.Cie10CodeDefaultArgs<ExtArgs>;
};
export type EncounterDiagnosisIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
    cie10Entry?: boolean | Prisma.Cie10CodeDefaultArgs<ExtArgs>;
};
export type EncounterDiagnosisIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
    cie10Entry?: boolean | Prisma.Cie10CodeDefaultArgs<ExtArgs>;
};
export type $EncounterDiagnosisPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EncounterDiagnosis";
    objects: {
        encounter: Prisma.$ClinicalEncounterPayload<ExtArgs>;
        cie10Entry: Prisma.$Cie10CodePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        encounterId: string;
        cie10Code: string;
        esDiagnosticoPrincipal: boolean;
    }, ExtArgs["result"]["encounterDiagnosis"]>;
    composites: {};
};
export type EncounterDiagnosisGetPayload<S extends boolean | null | undefined | EncounterDiagnosisDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EncounterDiagnosisPayload, S>;
export type EncounterDiagnosisCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EncounterDiagnosisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EncounterDiagnosisCountAggregateInputType | true;
};
export interface EncounterDiagnosisDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EncounterDiagnosis'];
        meta: {
            name: 'EncounterDiagnosis';
        };
    };
    findUnique<T extends EncounterDiagnosisFindUniqueArgs>(args: Prisma.SelectSubset<T, EncounterDiagnosisFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EncounterDiagnosisClient<runtime.Types.Result.GetResult<Prisma.$EncounterDiagnosisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EncounterDiagnosisFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EncounterDiagnosisFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EncounterDiagnosisClient<runtime.Types.Result.GetResult<Prisma.$EncounterDiagnosisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EncounterDiagnosisFindFirstArgs>(args?: Prisma.SelectSubset<T, EncounterDiagnosisFindFirstArgs<ExtArgs>>): Prisma.Prisma__EncounterDiagnosisClient<runtime.Types.Result.GetResult<Prisma.$EncounterDiagnosisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EncounterDiagnosisFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EncounterDiagnosisFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EncounterDiagnosisClient<runtime.Types.Result.GetResult<Prisma.$EncounterDiagnosisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EncounterDiagnosisFindManyArgs>(args?: Prisma.SelectSubset<T, EncounterDiagnosisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EncounterDiagnosisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EncounterDiagnosisCreateArgs>(args: Prisma.SelectSubset<T, EncounterDiagnosisCreateArgs<ExtArgs>>): Prisma.Prisma__EncounterDiagnosisClient<runtime.Types.Result.GetResult<Prisma.$EncounterDiagnosisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EncounterDiagnosisCreateManyArgs>(args?: Prisma.SelectSubset<T, EncounterDiagnosisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EncounterDiagnosisCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EncounterDiagnosisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EncounterDiagnosisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EncounterDiagnosisDeleteArgs>(args: Prisma.SelectSubset<T, EncounterDiagnosisDeleteArgs<ExtArgs>>): Prisma.Prisma__EncounterDiagnosisClient<runtime.Types.Result.GetResult<Prisma.$EncounterDiagnosisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EncounterDiagnosisUpdateArgs>(args: Prisma.SelectSubset<T, EncounterDiagnosisUpdateArgs<ExtArgs>>): Prisma.Prisma__EncounterDiagnosisClient<runtime.Types.Result.GetResult<Prisma.$EncounterDiagnosisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EncounterDiagnosisDeleteManyArgs>(args?: Prisma.SelectSubset<T, EncounterDiagnosisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EncounterDiagnosisUpdateManyArgs>(args: Prisma.SelectSubset<T, EncounterDiagnosisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EncounterDiagnosisUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EncounterDiagnosisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EncounterDiagnosisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EncounterDiagnosisUpsertArgs>(args: Prisma.SelectSubset<T, EncounterDiagnosisUpsertArgs<ExtArgs>>): Prisma.Prisma__EncounterDiagnosisClient<runtime.Types.Result.GetResult<Prisma.$EncounterDiagnosisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EncounterDiagnosisCountArgs>(args?: Prisma.Subset<T, EncounterDiagnosisCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EncounterDiagnosisCountAggregateOutputType> : number>;
    aggregate<T extends EncounterDiagnosisAggregateArgs>(args: Prisma.Subset<T, EncounterDiagnosisAggregateArgs>): Prisma.PrismaPromise<GetEncounterDiagnosisAggregateType<T>>;
    groupBy<T extends EncounterDiagnosisGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EncounterDiagnosisGroupByArgs['orderBy'];
    } : {
        orderBy?: EncounterDiagnosisGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EncounterDiagnosisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEncounterDiagnosisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EncounterDiagnosisFieldRefs;
}
export interface Prisma__EncounterDiagnosisClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    encounter<T extends Prisma.ClinicalEncounterDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClinicalEncounterDefaultArgs<ExtArgs>>): Prisma.Prisma__ClinicalEncounterClient<runtime.Types.Result.GetResult<Prisma.$ClinicalEncounterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    cie10Entry<T extends Prisma.Cie10CodeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Cie10CodeDefaultArgs<ExtArgs>>): Prisma.Prisma__Cie10CodeClient<runtime.Types.Result.GetResult<Prisma.$Cie10CodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EncounterDiagnosisFieldRefs {
    readonly id: Prisma.FieldRef<"EncounterDiagnosis", 'String'>;
    readonly encounterId: Prisma.FieldRef<"EncounterDiagnosis", 'String'>;
    readonly cie10Code: Prisma.FieldRef<"EncounterDiagnosis", 'String'>;
    readonly esDiagnosticoPrincipal: Prisma.FieldRef<"EncounterDiagnosis", 'Boolean'>;
}
export type EncounterDiagnosisFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterDiagnosisSelect<ExtArgs> | null;
    omit?: Prisma.EncounterDiagnosisOmit<ExtArgs> | null;
    include?: Prisma.EncounterDiagnosisInclude<ExtArgs> | null;
    where: Prisma.EncounterDiagnosisWhereUniqueInput;
};
export type EncounterDiagnosisFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterDiagnosisSelect<ExtArgs> | null;
    omit?: Prisma.EncounterDiagnosisOmit<ExtArgs> | null;
    include?: Prisma.EncounterDiagnosisInclude<ExtArgs> | null;
    where: Prisma.EncounterDiagnosisWhereUniqueInput;
};
export type EncounterDiagnosisFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterDiagnosisSelect<ExtArgs> | null;
    omit?: Prisma.EncounterDiagnosisOmit<ExtArgs> | null;
    include?: Prisma.EncounterDiagnosisInclude<ExtArgs> | null;
    where?: Prisma.EncounterDiagnosisWhereInput;
    orderBy?: Prisma.EncounterDiagnosisOrderByWithRelationInput | Prisma.EncounterDiagnosisOrderByWithRelationInput[];
    cursor?: Prisma.EncounterDiagnosisWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EncounterDiagnosisScalarFieldEnum | Prisma.EncounterDiagnosisScalarFieldEnum[];
};
export type EncounterDiagnosisFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterDiagnosisSelect<ExtArgs> | null;
    omit?: Prisma.EncounterDiagnosisOmit<ExtArgs> | null;
    include?: Prisma.EncounterDiagnosisInclude<ExtArgs> | null;
    where?: Prisma.EncounterDiagnosisWhereInput;
    orderBy?: Prisma.EncounterDiagnosisOrderByWithRelationInput | Prisma.EncounterDiagnosisOrderByWithRelationInput[];
    cursor?: Prisma.EncounterDiagnosisWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EncounterDiagnosisScalarFieldEnum | Prisma.EncounterDiagnosisScalarFieldEnum[];
};
export type EncounterDiagnosisFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterDiagnosisSelect<ExtArgs> | null;
    omit?: Prisma.EncounterDiagnosisOmit<ExtArgs> | null;
    include?: Prisma.EncounterDiagnosisInclude<ExtArgs> | null;
    where?: Prisma.EncounterDiagnosisWhereInput;
    orderBy?: Prisma.EncounterDiagnosisOrderByWithRelationInput | Prisma.EncounterDiagnosisOrderByWithRelationInput[];
    cursor?: Prisma.EncounterDiagnosisWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EncounterDiagnosisScalarFieldEnum | Prisma.EncounterDiagnosisScalarFieldEnum[];
};
export type EncounterDiagnosisCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterDiagnosisSelect<ExtArgs> | null;
    omit?: Prisma.EncounterDiagnosisOmit<ExtArgs> | null;
    include?: Prisma.EncounterDiagnosisInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EncounterDiagnosisCreateInput, Prisma.EncounterDiagnosisUncheckedCreateInput>;
};
export type EncounterDiagnosisCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EncounterDiagnosisCreateManyInput | Prisma.EncounterDiagnosisCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EncounterDiagnosisCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterDiagnosisSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EncounterDiagnosisOmit<ExtArgs> | null;
    data: Prisma.EncounterDiagnosisCreateManyInput | Prisma.EncounterDiagnosisCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EncounterDiagnosisIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EncounterDiagnosisUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterDiagnosisSelect<ExtArgs> | null;
    omit?: Prisma.EncounterDiagnosisOmit<ExtArgs> | null;
    include?: Prisma.EncounterDiagnosisInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EncounterDiagnosisUpdateInput, Prisma.EncounterDiagnosisUncheckedUpdateInput>;
    where: Prisma.EncounterDiagnosisWhereUniqueInput;
};
export type EncounterDiagnosisUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EncounterDiagnosisUpdateManyMutationInput, Prisma.EncounterDiagnosisUncheckedUpdateManyInput>;
    where?: Prisma.EncounterDiagnosisWhereInput;
    limit?: number;
};
export type EncounterDiagnosisUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterDiagnosisSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EncounterDiagnosisOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EncounterDiagnosisUpdateManyMutationInput, Prisma.EncounterDiagnosisUncheckedUpdateManyInput>;
    where?: Prisma.EncounterDiagnosisWhereInput;
    limit?: number;
    include?: Prisma.EncounterDiagnosisIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EncounterDiagnosisUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterDiagnosisSelect<ExtArgs> | null;
    omit?: Prisma.EncounterDiagnosisOmit<ExtArgs> | null;
    include?: Prisma.EncounterDiagnosisInclude<ExtArgs> | null;
    where: Prisma.EncounterDiagnosisWhereUniqueInput;
    create: Prisma.XOR<Prisma.EncounterDiagnosisCreateInput, Prisma.EncounterDiagnosisUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EncounterDiagnosisUpdateInput, Prisma.EncounterDiagnosisUncheckedUpdateInput>;
};
export type EncounterDiagnosisDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterDiagnosisSelect<ExtArgs> | null;
    omit?: Prisma.EncounterDiagnosisOmit<ExtArgs> | null;
    include?: Prisma.EncounterDiagnosisInclude<ExtArgs> | null;
    where: Prisma.EncounterDiagnosisWhereUniqueInput;
};
export type EncounterDiagnosisDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EncounterDiagnosisWhereInput;
    limit?: number;
};
export type EncounterDiagnosisDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterDiagnosisSelect<ExtArgs> | null;
    omit?: Prisma.EncounterDiagnosisOmit<ExtArgs> | null;
    include?: Prisma.EncounterDiagnosisInclude<ExtArgs> | null;
};

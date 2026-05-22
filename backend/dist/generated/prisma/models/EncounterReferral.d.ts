import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EncounterReferralModel = runtime.Types.Result.DefaultSelection<Prisma.$EncounterReferralPayload>;
export type AggregateEncounterReferral = {
    _count: EncounterReferralCountAggregateOutputType | null;
    _min: EncounterReferralMinAggregateOutputType | null;
    _max: EncounterReferralMaxAggregateOutputType | null;
};
export type EncounterReferralMinAggregateOutputType = {
    id: string | null;
    encounterId: string | null;
    especialidadDestino: string | null;
    motivo: string | null;
    createdAt: Date | null;
};
export type EncounterReferralMaxAggregateOutputType = {
    id: string | null;
    encounterId: string | null;
    especialidadDestino: string | null;
    motivo: string | null;
    createdAt: Date | null;
};
export type EncounterReferralCountAggregateOutputType = {
    id: number;
    encounterId: number;
    especialidadDestino: number;
    motivo: number;
    createdAt: number;
    _all: number;
};
export type EncounterReferralMinAggregateInputType = {
    id?: true;
    encounterId?: true;
    especialidadDestino?: true;
    motivo?: true;
    createdAt?: true;
};
export type EncounterReferralMaxAggregateInputType = {
    id?: true;
    encounterId?: true;
    especialidadDestino?: true;
    motivo?: true;
    createdAt?: true;
};
export type EncounterReferralCountAggregateInputType = {
    id?: true;
    encounterId?: true;
    especialidadDestino?: true;
    motivo?: true;
    createdAt?: true;
    _all?: true;
};
export type EncounterReferralAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EncounterReferralWhereInput;
    orderBy?: Prisma.EncounterReferralOrderByWithRelationInput | Prisma.EncounterReferralOrderByWithRelationInput[];
    cursor?: Prisma.EncounterReferralWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EncounterReferralCountAggregateInputType;
    _min?: EncounterReferralMinAggregateInputType;
    _max?: EncounterReferralMaxAggregateInputType;
};
export type GetEncounterReferralAggregateType<T extends EncounterReferralAggregateArgs> = {
    [P in keyof T & keyof AggregateEncounterReferral]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEncounterReferral[P]> : Prisma.GetScalarType<T[P], AggregateEncounterReferral[P]>;
};
export type EncounterReferralGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EncounterReferralWhereInput;
    orderBy?: Prisma.EncounterReferralOrderByWithAggregationInput | Prisma.EncounterReferralOrderByWithAggregationInput[];
    by: Prisma.EncounterReferralScalarFieldEnum[] | Prisma.EncounterReferralScalarFieldEnum;
    having?: Prisma.EncounterReferralScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EncounterReferralCountAggregateInputType | true;
    _min?: EncounterReferralMinAggregateInputType;
    _max?: EncounterReferralMaxAggregateInputType;
};
export type EncounterReferralGroupByOutputType = {
    id: string;
    encounterId: string;
    especialidadDestino: string;
    motivo: string | null;
    createdAt: Date;
    _count: EncounterReferralCountAggregateOutputType | null;
    _min: EncounterReferralMinAggregateOutputType | null;
    _max: EncounterReferralMaxAggregateOutputType | null;
};
export type GetEncounterReferralGroupByPayload<T extends EncounterReferralGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EncounterReferralGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EncounterReferralGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EncounterReferralGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EncounterReferralGroupByOutputType[P]>;
}>>;
export type EncounterReferralWhereInput = {
    AND?: Prisma.EncounterReferralWhereInput | Prisma.EncounterReferralWhereInput[];
    OR?: Prisma.EncounterReferralWhereInput[];
    NOT?: Prisma.EncounterReferralWhereInput | Prisma.EncounterReferralWhereInput[];
    id?: Prisma.StringFilter<"EncounterReferral"> | string;
    encounterId?: Prisma.StringFilter<"EncounterReferral"> | string;
    especialidadDestino?: Prisma.StringFilter<"EncounterReferral"> | string;
    motivo?: Prisma.StringNullableFilter<"EncounterReferral"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"EncounterReferral"> | Date | string;
    encounter?: Prisma.XOR<Prisma.ClinicalEncounterScalarRelationFilter, Prisma.ClinicalEncounterWhereInput>;
};
export type EncounterReferralOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    encounterId?: Prisma.SortOrder;
    especialidadDestino?: Prisma.SortOrder;
    motivo?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    encounter?: Prisma.ClinicalEncounterOrderByWithRelationInput;
};
export type EncounterReferralWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.EncounterReferralWhereInput | Prisma.EncounterReferralWhereInput[];
    OR?: Prisma.EncounterReferralWhereInput[];
    NOT?: Prisma.EncounterReferralWhereInput | Prisma.EncounterReferralWhereInput[];
    encounterId?: Prisma.StringFilter<"EncounterReferral"> | string;
    especialidadDestino?: Prisma.StringFilter<"EncounterReferral"> | string;
    motivo?: Prisma.StringNullableFilter<"EncounterReferral"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"EncounterReferral"> | Date | string;
    encounter?: Prisma.XOR<Prisma.ClinicalEncounterScalarRelationFilter, Prisma.ClinicalEncounterWhereInput>;
}, "id">;
export type EncounterReferralOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    encounterId?: Prisma.SortOrder;
    especialidadDestino?: Prisma.SortOrder;
    motivo?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.EncounterReferralCountOrderByAggregateInput;
    _max?: Prisma.EncounterReferralMaxOrderByAggregateInput;
    _min?: Prisma.EncounterReferralMinOrderByAggregateInput;
};
export type EncounterReferralScalarWhereWithAggregatesInput = {
    AND?: Prisma.EncounterReferralScalarWhereWithAggregatesInput | Prisma.EncounterReferralScalarWhereWithAggregatesInput[];
    OR?: Prisma.EncounterReferralScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EncounterReferralScalarWhereWithAggregatesInput | Prisma.EncounterReferralScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"EncounterReferral"> | string;
    encounterId?: Prisma.StringWithAggregatesFilter<"EncounterReferral"> | string;
    especialidadDestino?: Prisma.StringWithAggregatesFilter<"EncounterReferral"> | string;
    motivo?: Prisma.StringNullableWithAggregatesFilter<"EncounterReferral"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"EncounterReferral"> | Date | string;
};
export type EncounterReferralCreateInput = {
    id?: string;
    especialidadDestino: string;
    motivo?: string | null;
    createdAt?: Date | string;
    encounter: Prisma.ClinicalEncounterCreateNestedOneWithoutReferralsInput;
};
export type EncounterReferralUncheckedCreateInput = {
    id?: string;
    encounterId: string;
    especialidadDestino: string;
    motivo?: string | null;
    createdAt?: Date | string;
};
export type EncounterReferralUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidadDestino?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    encounter?: Prisma.ClinicalEncounterUpdateOneRequiredWithoutReferralsNestedInput;
};
export type EncounterReferralUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    encounterId?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidadDestino?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EncounterReferralCreateManyInput = {
    id?: string;
    encounterId: string;
    especialidadDestino: string;
    motivo?: string | null;
    createdAt?: Date | string;
};
export type EncounterReferralUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidadDestino?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EncounterReferralUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    encounterId?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidadDestino?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EncounterReferralListRelationFilter = {
    every?: Prisma.EncounterReferralWhereInput;
    some?: Prisma.EncounterReferralWhereInput;
    none?: Prisma.EncounterReferralWhereInput;
};
export type EncounterReferralOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EncounterReferralCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    encounterId?: Prisma.SortOrder;
    especialidadDestino?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EncounterReferralMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    encounterId?: Prisma.SortOrder;
    especialidadDestino?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EncounterReferralMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    encounterId?: Prisma.SortOrder;
    especialidadDestino?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EncounterReferralCreateNestedManyWithoutEncounterInput = {
    create?: Prisma.XOR<Prisma.EncounterReferralCreateWithoutEncounterInput, Prisma.EncounterReferralUncheckedCreateWithoutEncounterInput> | Prisma.EncounterReferralCreateWithoutEncounterInput[] | Prisma.EncounterReferralUncheckedCreateWithoutEncounterInput[];
    connectOrCreate?: Prisma.EncounterReferralCreateOrConnectWithoutEncounterInput | Prisma.EncounterReferralCreateOrConnectWithoutEncounterInput[];
    createMany?: Prisma.EncounterReferralCreateManyEncounterInputEnvelope;
    connect?: Prisma.EncounterReferralWhereUniqueInput | Prisma.EncounterReferralWhereUniqueInput[];
};
export type EncounterReferralUncheckedCreateNestedManyWithoutEncounterInput = {
    create?: Prisma.XOR<Prisma.EncounterReferralCreateWithoutEncounterInput, Prisma.EncounterReferralUncheckedCreateWithoutEncounterInput> | Prisma.EncounterReferralCreateWithoutEncounterInput[] | Prisma.EncounterReferralUncheckedCreateWithoutEncounterInput[];
    connectOrCreate?: Prisma.EncounterReferralCreateOrConnectWithoutEncounterInput | Prisma.EncounterReferralCreateOrConnectWithoutEncounterInput[];
    createMany?: Prisma.EncounterReferralCreateManyEncounterInputEnvelope;
    connect?: Prisma.EncounterReferralWhereUniqueInput | Prisma.EncounterReferralWhereUniqueInput[];
};
export type EncounterReferralUpdateManyWithoutEncounterNestedInput = {
    create?: Prisma.XOR<Prisma.EncounterReferralCreateWithoutEncounterInput, Prisma.EncounterReferralUncheckedCreateWithoutEncounterInput> | Prisma.EncounterReferralCreateWithoutEncounterInput[] | Prisma.EncounterReferralUncheckedCreateWithoutEncounterInput[];
    connectOrCreate?: Prisma.EncounterReferralCreateOrConnectWithoutEncounterInput | Prisma.EncounterReferralCreateOrConnectWithoutEncounterInput[];
    upsert?: Prisma.EncounterReferralUpsertWithWhereUniqueWithoutEncounterInput | Prisma.EncounterReferralUpsertWithWhereUniqueWithoutEncounterInput[];
    createMany?: Prisma.EncounterReferralCreateManyEncounterInputEnvelope;
    set?: Prisma.EncounterReferralWhereUniqueInput | Prisma.EncounterReferralWhereUniqueInput[];
    disconnect?: Prisma.EncounterReferralWhereUniqueInput | Prisma.EncounterReferralWhereUniqueInput[];
    delete?: Prisma.EncounterReferralWhereUniqueInput | Prisma.EncounterReferralWhereUniqueInput[];
    connect?: Prisma.EncounterReferralWhereUniqueInput | Prisma.EncounterReferralWhereUniqueInput[];
    update?: Prisma.EncounterReferralUpdateWithWhereUniqueWithoutEncounterInput | Prisma.EncounterReferralUpdateWithWhereUniqueWithoutEncounterInput[];
    updateMany?: Prisma.EncounterReferralUpdateManyWithWhereWithoutEncounterInput | Prisma.EncounterReferralUpdateManyWithWhereWithoutEncounterInput[];
    deleteMany?: Prisma.EncounterReferralScalarWhereInput | Prisma.EncounterReferralScalarWhereInput[];
};
export type EncounterReferralUncheckedUpdateManyWithoutEncounterNestedInput = {
    create?: Prisma.XOR<Prisma.EncounterReferralCreateWithoutEncounterInput, Prisma.EncounterReferralUncheckedCreateWithoutEncounterInput> | Prisma.EncounterReferralCreateWithoutEncounterInput[] | Prisma.EncounterReferralUncheckedCreateWithoutEncounterInput[];
    connectOrCreate?: Prisma.EncounterReferralCreateOrConnectWithoutEncounterInput | Prisma.EncounterReferralCreateOrConnectWithoutEncounterInput[];
    upsert?: Prisma.EncounterReferralUpsertWithWhereUniqueWithoutEncounterInput | Prisma.EncounterReferralUpsertWithWhereUniqueWithoutEncounterInput[];
    createMany?: Prisma.EncounterReferralCreateManyEncounterInputEnvelope;
    set?: Prisma.EncounterReferralWhereUniqueInput | Prisma.EncounterReferralWhereUniqueInput[];
    disconnect?: Prisma.EncounterReferralWhereUniqueInput | Prisma.EncounterReferralWhereUniqueInput[];
    delete?: Prisma.EncounterReferralWhereUniqueInput | Prisma.EncounterReferralWhereUniqueInput[];
    connect?: Prisma.EncounterReferralWhereUniqueInput | Prisma.EncounterReferralWhereUniqueInput[];
    update?: Prisma.EncounterReferralUpdateWithWhereUniqueWithoutEncounterInput | Prisma.EncounterReferralUpdateWithWhereUniqueWithoutEncounterInput[];
    updateMany?: Prisma.EncounterReferralUpdateManyWithWhereWithoutEncounterInput | Prisma.EncounterReferralUpdateManyWithWhereWithoutEncounterInput[];
    deleteMany?: Prisma.EncounterReferralScalarWhereInput | Prisma.EncounterReferralScalarWhereInput[];
};
export type EncounterReferralCreateWithoutEncounterInput = {
    id?: string;
    especialidadDestino: string;
    motivo?: string | null;
    createdAt?: Date | string;
};
export type EncounterReferralUncheckedCreateWithoutEncounterInput = {
    id?: string;
    especialidadDestino: string;
    motivo?: string | null;
    createdAt?: Date | string;
};
export type EncounterReferralCreateOrConnectWithoutEncounterInput = {
    where: Prisma.EncounterReferralWhereUniqueInput;
    create: Prisma.XOR<Prisma.EncounterReferralCreateWithoutEncounterInput, Prisma.EncounterReferralUncheckedCreateWithoutEncounterInput>;
};
export type EncounterReferralCreateManyEncounterInputEnvelope = {
    data: Prisma.EncounterReferralCreateManyEncounterInput | Prisma.EncounterReferralCreateManyEncounterInput[];
    skipDuplicates?: boolean;
};
export type EncounterReferralUpsertWithWhereUniqueWithoutEncounterInput = {
    where: Prisma.EncounterReferralWhereUniqueInput;
    update: Prisma.XOR<Prisma.EncounterReferralUpdateWithoutEncounterInput, Prisma.EncounterReferralUncheckedUpdateWithoutEncounterInput>;
    create: Prisma.XOR<Prisma.EncounterReferralCreateWithoutEncounterInput, Prisma.EncounterReferralUncheckedCreateWithoutEncounterInput>;
};
export type EncounterReferralUpdateWithWhereUniqueWithoutEncounterInput = {
    where: Prisma.EncounterReferralWhereUniqueInput;
    data: Prisma.XOR<Prisma.EncounterReferralUpdateWithoutEncounterInput, Prisma.EncounterReferralUncheckedUpdateWithoutEncounterInput>;
};
export type EncounterReferralUpdateManyWithWhereWithoutEncounterInput = {
    where: Prisma.EncounterReferralScalarWhereInput;
    data: Prisma.XOR<Prisma.EncounterReferralUpdateManyMutationInput, Prisma.EncounterReferralUncheckedUpdateManyWithoutEncounterInput>;
};
export type EncounterReferralScalarWhereInput = {
    AND?: Prisma.EncounterReferralScalarWhereInput | Prisma.EncounterReferralScalarWhereInput[];
    OR?: Prisma.EncounterReferralScalarWhereInput[];
    NOT?: Prisma.EncounterReferralScalarWhereInput | Prisma.EncounterReferralScalarWhereInput[];
    id?: Prisma.StringFilter<"EncounterReferral"> | string;
    encounterId?: Prisma.StringFilter<"EncounterReferral"> | string;
    especialidadDestino?: Prisma.StringFilter<"EncounterReferral"> | string;
    motivo?: Prisma.StringNullableFilter<"EncounterReferral"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"EncounterReferral"> | Date | string;
};
export type EncounterReferralCreateManyEncounterInput = {
    id?: string;
    especialidadDestino: string;
    motivo?: string | null;
    createdAt?: Date | string;
};
export type EncounterReferralUpdateWithoutEncounterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidadDestino?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EncounterReferralUncheckedUpdateWithoutEncounterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidadDestino?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EncounterReferralUncheckedUpdateManyWithoutEncounterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidadDestino?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EncounterReferralSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    encounterId?: boolean;
    especialidadDestino?: boolean;
    motivo?: boolean;
    createdAt?: boolean;
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["encounterReferral"]>;
export type EncounterReferralSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    encounterId?: boolean;
    especialidadDestino?: boolean;
    motivo?: boolean;
    createdAt?: boolean;
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["encounterReferral"]>;
export type EncounterReferralSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    encounterId?: boolean;
    especialidadDestino?: boolean;
    motivo?: boolean;
    createdAt?: boolean;
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["encounterReferral"]>;
export type EncounterReferralSelectScalar = {
    id?: boolean;
    encounterId?: boolean;
    especialidadDestino?: boolean;
    motivo?: boolean;
    createdAt?: boolean;
};
export type EncounterReferralOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "encounterId" | "especialidadDestino" | "motivo" | "createdAt", ExtArgs["result"]["encounterReferral"]>;
export type EncounterReferralInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
};
export type EncounterReferralIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
};
export type EncounterReferralIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
};
export type $EncounterReferralPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EncounterReferral";
    objects: {
        encounter: Prisma.$ClinicalEncounterPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        encounterId: string;
        especialidadDestino: string;
        motivo: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["encounterReferral"]>;
    composites: {};
};
export type EncounterReferralGetPayload<S extends boolean | null | undefined | EncounterReferralDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EncounterReferralPayload, S>;
export type EncounterReferralCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EncounterReferralFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EncounterReferralCountAggregateInputType | true;
};
export interface EncounterReferralDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EncounterReferral'];
        meta: {
            name: 'EncounterReferral';
        };
    };
    findUnique<T extends EncounterReferralFindUniqueArgs>(args: Prisma.SelectSubset<T, EncounterReferralFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EncounterReferralClient<runtime.Types.Result.GetResult<Prisma.$EncounterReferralPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EncounterReferralFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EncounterReferralFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EncounterReferralClient<runtime.Types.Result.GetResult<Prisma.$EncounterReferralPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EncounterReferralFindFirstArgs>(args?: Prisma.SelectSubset<T, EncounterReferralFindFirstArgs<ExtArgs>>): Prisma.Prisma__EncounterReferralClient<runtime.Types.Result.GetResult<Prisma.$EncounterReferralPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EncounterReferralFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EncounterReferralFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EncounterReferralClient<runtime.Types.Result.GetResult<Prisma.$EncounterReferralPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EncounterReferralFindManyArgs>(args?: Prisma.SelectSubset<T, EncounterReferralFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EncounterReferralPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EncounterReferralCreateArgs>(args: Prisma.SelectSubset<T, EncounterReferralCreateArgs<ExtArgs>>): Prisma.Prisma__EncounterReferralClient<runtime.Types.Result.GetResult<Prisma.$EncounterReferralPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EncounterReferralCreateManyArgs>(args?: Prisma.SelectSubset<T, EncounterReferralCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EncounterReferralCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EncounterReferralCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EncounterReferralPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EncounterReferralDeleteArgs>(args: Prisma.SelectSubset<T, EncounterReferralDeleteArgs<ExtArgs>>): Prisma.Prisma__EncounterReferralClient<runtime.Types.Result.GetResult<Prisma.$EncounterReferralPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EncounterReferralUpdateArgs>(args: Prisma.SelectSubset<T, EncounterReferralUpdateArgs<ExtArgs>>): Prisma.Prisma__EncounterReferralClient<runtime.Types.Result.GetResult<Prisma.$EncounterReferralPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EncounterReferralDeleteManyArgs>(args?: Prisma.SelectSubset<T, EncounterReferralDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EncounterReferralUpdateManyArgs>(args: Prisma.SelectSubset<T, EncounterReferralUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EncounterReferralUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EncounterReferralUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EncounterReferralPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EncounterReferralUpsertArgs>(args: Prisma.SelectSubset<T, EncounterReferralUpsertArgs<ExtArgs>>): Prisma.Prisma__EncounterReferralClient<runtime.Types.Result.GetResult<Prisma.$EncounterReferralPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EncounterReferralCountArgs>(args?: Prisma.Subset<T, EncounterReferralCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EncounterReferralCountAggregateOutputType> : number>;
    aggregate<T extends EncounterReferralAggregateArgs>(args: Prisma.Subset<T, EncounterReferralAggregateArgs>): Prisma.PrismaPromise<GetEncounterReferralAggregateType<T>>;
    groupBy<T extends EncounterReferralGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EncounterReferralGroupByArgs['orderBy'];
    } : {
        orderBy?: EncounterReferralGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EncounterReferralGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEncounterReferralGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EncounterReferralFieldRefs;
}
export interface Prisma__EncounterReferralClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    encounter<T extends Prisma.ClinicalEncounterDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClinicalEncounterDefaultArgs<ExtArgs>>): Prisma.Prisma__ClinicalEncounterClient<runtime.Types.Result.GetResult<Prisma.$ClinicalEncounterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EncounterReferralFieldRefs {
    readonly id: Prisma.FieldRef<"EncounterReferral", 'String'>;
    readonly encounterId: Prisma.FieldRef<"EncounterReferral", 'String'>;
    readonly especialidadDestino: Prisma.FieldRef<"EncounterReferral", 'String'>;
    readonly motivo: Prisma.FieldRef<"EncounterReferral", 'String'>;
    readonly createdAt: Prisma.FieldRef<"EncounterReferral", 'DateTime'>;
}
export type EncounterReferralFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterReferralSelect<ExtArgs> | null;
    omit?: Prisma.EncounterReferralOmit<ExtArgs> | null;
    include?: Prisma.EncounterReferralInclude<ExtArgs> | null;
    where: Prisma.EncounterReferralWhereUniqueInput;
};
export type EncounterReferralFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterReferralSelect<ExtArgs> | null;
    omit?: Prisma.EncounterReferralOmit<ExtArgs> | null;
    include?: Prisma.EncounterReferralInclude<ExtArgs> | null;
    where: Prisma.EncounterReferralWhereUniqueInput;
};
export type EncounterReferralFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterReferralSelect<ExtArgs> | null;
    omit?: Prisma.EncounterReferralOmit<ExtArgs> | null;
    include?: Prisma.EncounterReferralInclude<ExtArgs> | null;
    where?: Prisma.EncounterReferralWhereInput;
    orderBy?: Prisma.EncounterReferralOrderByWithRelationInput | Prisma.EncounterReferralOrderByWithRelationInput[];
    cursor?: Prisma.EncounterReferralWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EncounterReferralScalarFieldEnum | Prisma.EncounterReferralScalarFieldEnum[];
};
export type EncounterReferralFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterReferralSelect<ExtArgs> | null;
    omit?: Prisma.EncounterReferralOmit<ExtArgs> | null;
    include?: Prisma.EncounterReferralInclude<ExtArgs> | null;
    where?: Prisma.EncounterReferralWhereInput;
    orderBy?: Prisma.EncounterReferralOrderByWithRelationInput | Prisma.EncounterReferralOrderByWithRelationInput[];
    cursor?: Prisma.EncounterReferralWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EncounterReferralScalarFieldEnum | Prisma.EncounterReferralScalarFieldEnum[];
};
export type EncounterReferralFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterReferralSelect<ExtArgs> | null;
    omit?: Prisma.EncounterReferralOmit<ExtArgs> | null;
    include?: Prisma.EncounterReferralInclude<ExtArgs> | null;
    where?: Prisma.EncounterReferralWhereInput;
    orderBy?: Prisma.EncounterReferralOrderByWithRelationInput | Prisma.EncounterReferralOrderByWithRelationInput[];
    cursor?: Prisma.EncounterReferralWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EncounterReferralScalarFieldEnum | Prisma.EncounterReferralScalarFieldEnum[];
};
export type EncounterReferralCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterReferralSelect<ExtArgs> | null;
    omit?: Prisma.EncounterReferralOmit<ExtArgs> | null;
    include?: Prisma.EncounterReferralInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EncounterReferralCreateInput, Prisma.EncounterReferralUncheckedCreateInput>;
};
export type EncounterReferralCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EncounterReferralCreateManyInput | Prisma.EncounterReferralCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EncounterReferralCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterReferralSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EncounterReferralOmit<ExtArgs> | null;
    data: Prisma.EncounterReferralCreateManyInput | Prisma.EncounterReferralCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EncounterReferralIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EncounterReferralUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterReferralSelect<ExtArgs> | null;
    omit?: Prisma.EncounterReferralOmit<ExtArgs> | null;
    include?: Prisma.EncounterReferralInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EncounterReferralUpdateInput, Prisma.EncounterReferralUncheckedUpdateInput>;
    where: Prisma.EncounterReferralWhereUniqueInput;
};
export type EncounterReferralUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EncounterReferralUpdateManyMutationInput, Prisma.EncounterReferralUncheckedUpdateManyInput>;
    where?: Prisma.EncounterReferralWhereInput;
    limit?: number;
};
export type EncounterReferralUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterReferralSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EncounterReferralOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EncounterReferralUpdateManyMutationInput, Prisma.EncounterReferralUncheckedUpdateManyInput>;
    where?: Prisma.EncounterReferralWhereInput;
    limit?: number;
    include?: Prisma.EncounterReferralIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EncounterReferralUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterReferralSelect<ExtArgs> | null;
    omit?: Prisma.EncounterReferralOmit<ExtArgs> | null;
    include?: Prisma.EncounterReferralInclude<ExtArgs> | null;
    where: Prisma.EncounterReferralWhereUniqueInput;
    create: Prisma.XOR<Prisma.EncounterReferralCreateInput, Prisma.EncounterReferralUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EncounterReferralUpdateInput, Prisma.EncounterReferralUncheckedUpdateInput>;
};
export type EncounterReferralDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterReferralSelect<ExtArgs> | null;
    omit?: Prisma.EncounterReferralOmit<ExtArgs> | null;
    include?: Prisma.EncounterReferralInclude<ExtArgs> | null;
    where: Prisma.EncounterReferralWhereUniqueInput;
};
export type EncounterReferralDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EncounterReferralWhereInput;
    limit?: number;
};
export type EncounterReferralDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterReferralSelect<ExtArgs> | null;
    omit?: Prisma.EncounterReferralOmit<ExtArgs> | null;
    include?: Prisma.EncounterReferralInclude<ExtArgs> | null;
};

import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EncounterSystemReviewModel = runtime.Types.Result.DefaultSelection<Prisma.$EncounterSystemReviewPayload>;
export type AggregateEncounterSystemReview = {
    _count: EncounterSystemReviewCountAggregateOutputType | null;
    _min: EncounterSystemReviewMinAggregateOutputType | null;
    _max: EncounterSystemReviewMaxAggregateOutputType | null;
};
export type EncounterSystemReviewMinAggregateOutputType = {
    id: string | null;
    encounterId: string | null;
    sistema: $Enums.SystemReview | null;
    detalle: string | null;
};
export type EncounterSystemReviewMaxAggregateOutputType = {
    id: string | null;
    encounterId: string | null;
    sistema: $Enums.SystemReview | null;
    detalle: string | null;
};
export type EncounterSystemReviewCountAggregateOutputType = {
    id: number;
    encounterId: number;
    sistema: number;
    detalle: number;
    _all: number;
};
export type EncounterSystemReviewMinAggregateInputType = {
    id?: true;
    encounterId?: true;
    sistema?: true;
    detalle?: true;
};
export type EncounterSystemReviewMaxAggregateInputType = {
    id?: true;
    encounterId?: true;
    sistema?: true;
    detalle?: true;
};
export type EncounterSystemReviewCountAggregateInputType = {
    id?: true;
    encounterId?: true;
    sistema?: true;
    detalle?: true;
    _all?: true;
};
export type EncounterSystemReviewAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EncounterSystemReviewWhereInput;
    orderBy?: Prisma.EncounterSystemReviewOrderByWithRelationInput | Prisma.EncounterSystemReviewOrderByWithRelationInput[];
    cursor?: Prisma.EncounterSystemReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EncounterSystemReviewCountAggregateInputType;
    _min?: EncounterSystemReviewMinAggregateInputType;
    _max?: EncounterSystemReviewMaxAggregateInputType;
};
export type GetEncounterSystemReviewAggregateType<T extends EncounterSystemReviewAggregateArgs> = {
    [P in keyof T & keyof AggregateEncounterSystemReview]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEncounterSystemReview[P]> : Prisma.GetScalarType<T[P], AggregateEncounterSystemReview[P]>;
};
export type EncounterSystemReviewGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EncounterSystemReviewWhereInput;
    orderBy?: Prisma.EncounterSystemReviewOrderByWithAggregationInput | Prisma.EncounterSystemReviewOrderByWithAggregationInput[];
    by: Prisma.EncounterSystemReviewScalarFieldEnum[] | Prisma.EncounterSystemReviewScalarFieldEnum;
    having?: Prisma.EncounterSystemReviewScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EncounterSystemReviewCountAggregateInputType | true;
    _min?: EncounterSystemReviewMinAggregateInputType;
    _max?: EncounterSystemReviewMaxAggregateInputType;
};
export type EncounterSystemReviewGroupByOutputType = {
    id: string;
    encounterId: string;
    sistema: $Enums.SystemReview;
    detalle: string | null;
    _count: EncounterSystemReviewCountAggregateOutputType | null;
    _min: EncounterSystemReviewMinAggregateOutputType | null;
    _max: EncounterSystemReviewMaxAggregateOutputType | null;
};
export type GetEncounterSystemReviewGroupByPayload<T extends EncounterSystemReviewGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EncounterSystemReviewGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EncounterSystemReviewGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EncounterSystemReviewGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EncounterSystemReviewGroupByOutputType[P]>;
}>>;
export type EncounterSystemReviewWhereInput = {
    AND?: Prisma.EncounterSystemReviewWhereInput | Prisma.EncounterSystemReviewWhereInput[];
    OR?: Prisma.EncounterSystemReviewWhereInput[];
    NOT?: Prisma.EncounterSystemReviewWhereInput | Prisma.EncounterSystemReviewWhereInput[];
    id?: Prisma.StringFilter<"EncounterSystemReview"> | string;
    encounterId?: Prisma.StringFilter<"EncounterSystemReview"> | string;
    sistema?: Prisma.EnumSystemReviewFilter<"EncounterSystemReview"> | $Enums.SystemReview;
    detalle?: Prisma.StringNullableFilter<"EncounterSystemReview"> | string | null;
    encounter?: Prisma.XOR<Prisma.ClinicalEncounterScalarRelationFilter, Prisma.ClinicalEncounterWhereInput>;
};
export type EncounterSystemReviewOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    encounterId?: Prisma.SortOrder;
    sistema?: Prisma.SortOrder;
    detalle?: Prisma.SortOrderInput | Prisma.SortOrder;
    encounter?: Prisma.ClinicalEncounterOrderByWithRelationInput;
};
export type EncounterSystemReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    encounterId_sistema?: Prisma.EncounterSystemReviewEncounterIdSistemaCompoundUniqueInput;
    AND?: Prisma.EncounterSystemReviewWhereInput | Prisma.EncounterSystemReviewWhereInput[];
    OR?: Prisma.EncounterSystemReviewWhereInput[];
    NOT?: Prisma.EncounterSystemReviewWhereInput | Prisma.EncounterSystemReviewWhereInput[];
    encounterId?: Prisma.StringFilter<"EncounterSystemReview"> | string;
    sistema?: Prisma.EnumSystemReviewFilter<"EncounterSystemReview"> | $Enums.SystemReview;
    detalle?: Prisma.StringNullableFilter<"EncounterSystemReview"> | string | null;
    encounter?: Prisma.XOR<Prisma.ClinicalEncounterScalarRelationFilter, Prisma.ClinicalEncounterWhereInput>;
}, "id" | "encounterId_sistema">;
export type EncounterSystemReviewOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    encounterId?: Prisma.SortOrder;
    sistema?: Prisma.SortOrder;
    detalle?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.EncounterSystemReviewCountOrderByAggregateInput;
    _max?: Prisma.EncounterSystemReviewMaxOrderByAggregateInput;
    _min?: Prisma.EncounterSystemReviewMinOrderByAggregateInput;
};
export type EncounterSystemReviewScalarWhereWithAggregatesInput = {
    AND?: Prisma.EncounterSystemReviewScalarWhereWithAggregatesInput | Prisma.EncounterSystemReviewScalarWhereWithAggregatesInput[];
    OR?: Prisma.EncounterSystemReviewScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EncounterSystemReviewScalarWhereWithAggregatesInput | Prisma.EncounterSystemReviewScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"EncounterSystemReview"> | string;
    encounterId?: Prisma.StringWithAggregatesFilter<"EncounterSystemReview"> | string;
    sistema?: Prisma.EnumSystemReviewWithAggregatesFilter<"EncounterSystemReview"> | $Enums.SystemReview;
    detalle?: Prisma.StringNullableWithAggregatesFilter<"EncounterSystemReview"> | string | null;
};
export type EncounterSystemReviewCreateInput = {
    id?: string;
    sistema: $Enums.SystemReview;
    detalle?: string | null;
    encounter: Prisma.ClinicalEncounterCreateNestedOneWithoutSystemReviewsInput;
};
export type EncounterSystemReviewUncheckedCreateInput = {
    id?: string;
    encounterId: string;
    sistema: $Enums.SystemReview;
    detalle?: string | null;
};
export type EncounterSystemReviewUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sistema?: Prisma.EnumSystemReviewFieldUpdateOperationsInput | $Enums.SystemReview;
    detalle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    encounter?: Prisma.ClinicalEncounterUpdateOneRequiredWithoutSystemReviewsNestedInput;
};
export type EncounterSystemReviewUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    encounterId?: Prisma.StringFieldUpdateOperationsInput | string;
    sistema?: Prisma.EnumSystemReviewFieldUpdateOperationsInput | $Enums.SystemReview;
    detalle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type EncounterSystemReviewCreateManyInput = {
    id?: string;
    encounterId: string;
    sistema: $Enums.SystemReview;
    detalle?: string | null;
};
export type EncounterSystemReviewUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sistema?: Prisma.EnumSystemReviewFieldUpdateOperationsInput | $Enums.SystemReview;
    detalle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type EncounterSystemReviewUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    encounterId?: Prisma.StringFieldUpdateOperationsInput | string;
    sistema?: Prisma.EnumSystemReviewFieldUpdateOperationsInput | $Enums.SystemReview;
    detalle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type EncounterSystemReviewListRelationFilter = {
    every?: Prisma.EncounterSystemReviewWhereInput;
    some?: Prisma.EncounterSystemReviewWhereInput;
    none?: Prisma.EncounterSystemReviewWhereInput;
};
export type EncounterSystemReviewOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EncounterSystemReviewEncounterIdSistemaCompoundUniqueInput = {
    encounterId: string;
    sistema: $Enums.SystemReview;
};
export type EncounterSystemReviewCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    encounterId?: Prisma.SortOrder;
    sistema?: Prisma.SortOrder;
    detalle?: Prisma.SortOrder;
};
export type EncounterSystemReviewMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    encounterId?: Prisma.SortOrder;
    sistema?: Prisma.SortOrder;
    detalle?: Prisma.SortOrder;
};
export type EncounterSystemReviewMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    encounterId?: Prisma.SortOrder;
    sistema?: Prisma.SortOrder;
    detalle?: Prisma.SortOrder;
};
export type EncounterSystemReviewCreateNestedManyWithoutEncounterInput = {
    create?: Prisma.XOR<Prisma.EncounterSystemReviewCreateWithoutEncounterInput, Prisma.EncounterSystemReviewUncheckedCreateWithoutEncounterInput> | Prisma.EncounterSystemReviewCreateWithoutEncounterInput[] | Prisma.EncounterSystemReviewUncheckedCreateWithoutEncounterInput[];
    connectOrCreate?: Prisma.EncounterSystemReviewCreateOrConnectWithoutEncounterInput | Prisma.EncounterSystemReviewCreateOrConnectWithoutEncounterInput[];
    createMany?: Prisma.EncounterSystemReviewCreateManyEncounterInputEnvelope;
    connect?: Prisma.EncounterSystemReviewWhereUniqueInput | Prisma.EncounterSystemReviewWhereUniqueInput[];
};
export type EncounterSystemReviewUncheckedCreateNestedManyWithoutEncounterInput = {
    create?: Prisma.XOR<Prisma.EncounterSystemReviewCreateWithoutEncounterInput, Prisma.EncounterSystemReviewUncheckedCreateWithoutEncounterInput> | Prisma.EncounterSystemReviewCreateWithoutEncounterInput[] | Prisma.EncounterSystemReviewUncheckedCreateWithoutEncounterInput[];
    connectOrCreate?: Prisma.EncounterSystemReviewCreateOrConnectWithoutEncounterInput | Prisma.EncounterSystemReviewCreateOrConnectWithoutEncounterInput[];
    createMany?: Prisma.EncounterSystemReviewCreateManyEncounterInputEnvelope;
    connect?: Prisma.EncounterSystemReviewWhereUniqueInput | Prisma.EncounterSystemReviewWhereUniqueInput[];
};
export type EncounterSystemReviewUpdateManyWithoutEncounterNestedInput = {
    create?: Prisma.XOR<Prisma.EncounterSystemReviewCreateWithoutEncounterInput, Prisma.EncounterSystemReviewUncheckedCreateWithoutEncounterInput> | Prisma.EncounterSystemReviewCreateWithoutEncounterInput[] | Prisma.EncounterSystemReviewUncheckedCreateWithoutEncounterInput[];
    connectOrCreate?: Prisma.EncounterSystemReviewCreateOrConnectWithoutEncounterInput | Prisma.EncounterSystemReviewCreateOrConnectWithoutEncounterInput[];
    upsert?: Prisma.EncounterSystemReviewUpsertWithWhereUniqueWithoutEncounterInput | Prisma.EncounterSystemReviewUpsertWithWhereUniqueWithoutEncounterInput[];
    createMany?: Prisma.EncounterSystemReviewCreateManyEncounterInputEnvelope;
    set?: Prisma.EncounterSystemReviewWhereUniqueInput | Prisma.EncounterSystemReviewWhereUniqueInput[];
    disconnect?: Prisma.EncounterSystemReviewWhereUniqueInput | Prisma.EncounterSystemReviewWhereUniqueInput[];
    delete?: Prisma.EncounterSystemReviewWhereUniqueInput | Prisma.EncounterSystemReviewWhereUniqueInput[];
    connect?: Prisma.EncounterSystemReviewWhereUniqueInput | Prisma.EncounterSystemReviewWhereUniqueInput[];
    update?: Prisma.EncounterSystemReviewUpdateWithWhereUniqueWithoutEncounterInput | Prisma.EncounterSystemReviewUpdateWithWhereUniqueWithoutEncounterInput[];
    updateMany?: Prisma.EncounterSystemReviewUpdateManyWithWhereWithoutEncounterInput | Prisma.EncounterSystemReviewUpdateManyWithWhereWithoutEncounterInput[];
    deleteMany?: Prisma.EncounterSystemReviewScalarWhereInput | Prisma.EncounterSystemReviewScalarWhereInput[];
};
export type EncounterSystemReviewUncheckedUpdateManyWithoutEncounterNestedInput = {
    create?: Prisma.XOR<Prisma.EncounterSystemReviewCreateWithoutEncounterInput, Prisma.EncounterSystemReviewUncheckedCreateWithoutEncounterInput> | Prisma.EncounterSystemReviewCreateWithoutEncounterInput[] | Prisma.EncounterSystemReviewUncheckedCreateWithoutEncounterInput[];
    connectOrCreate?: Prisma.EncounterSystemReviewCreateOrConnectWithoutEncounterInput | Prisma.EncounterSystemReviewCreateOrConnectWithoutEncounterInput[];
    upsert?: Prisma.EncounterSystemReviewUpsertWithWhereUniqueWithoutEncounterInput | Prisma.EncounterSystemReviewUpsertWithWhereUniqueWithoutEncounterInput[];
    createMany?: Prisma.EncounterSystemReviewCreateManyEncounterInputEnvelope;
    set?: Prisma.EncounterSystemReviewWhereUniqueInput | Prisma.EncounterSystemReviewWhereUniqueInput[];
    disconnect?: Prisma.EncounterSystemReviewWhereUniqueInput | Prisma.EncounterSystemReviewWhereUniqueInput[];
    delete?: Prisma.EncounterSystemReviewWhereUniqueInput | Prisma.EncounterSystemReviewWhereUniqueInput[];
    connect?: Prisma.EncounterSystemReviewWhereUniqueInput | Prisma.EncounterSystemReviewWhereUniqueInput[];
    update?: Prisma.EncounterSystemReviewUpdateWithWhereUniqueWithoutEncounterInput | Prisma.EncounterSystemReviewUpdateWithWhereUniqueWithoutEncounterInput[];
    updateMany?: Prisma.EncounterSystemReviewUpdateManyWithWhereWithoutEncounterInput | Prisma.EncounterSystemReviewUpdateManyWithWhereWithoutEncounterInput[];
    deleteMany?: Prisma.EncounterSystemReviewScalarWhereInput | Prisma.EncounterSystemReviewScalarWhereInput[];
};
export type EnumSystemReviewFieldUpdateOperationsInput = {
    set?: $Enums.SystemReview;
};
export type EncounterSystemReviewCreateWithoutEncounterInput = {
    id?: string;
    sistema: $Enums.SystemReview;
    detalle?: string | null;
};
export type EncounterSystemReviewUncheckedCreateWithoutEncounterInput = {
    id?: string;
    sistema: $Enums.SystemReview;
    detalle?: string | null;
};
export type EncounterSystemReviewCreateOrConnectWithoutEncounterInput = {
    where: Prisma.EncounterSystemReviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.EncounterSystemReviewCreateWithoutEncounterInput, Prisma.EncounterSystemReviewUncheckedCreateWithoutEncounterInput>;
};
export type EncounterSystemReviewCreateManyEncounterInputEnvelope = {
    data: Prisma.EncounterSystemReviewCreateManyEncounterInput | Prisma.EncounterSystemReviewCreateManyEncounterInput[];
    skipDuplicates?: boolean;
};
export type EncounterSystemReviewUpsertWithWhereUniqueWithoutEncounterInput = {
    where: Prisma.EncounterSystemReviewWhereUniqueInput;
    update: Prisma.XOR<Prisma.EncounterSystemReviewUpdateWithoutEncounterInput, Prisma.EncounterSystemReviewUncheckedUpdateWithoutEncounterInput>;
    create: Prisma.XOR<Prisma.EncounterSystemReviewCreateWithoutEncounterInput, Prisma.EncounterSystemReviewUncheckedCreateWithoutEncounterInput>;
};
export type EncounterSystemReviewUpdateWithWhereUniqueWithoutEncounterInput = {
    where: Prisma.EncounterSystemReviewWhereUniqueInput;
    data: Prisma.XOR<Prisma.EncounterSystemReviewUpdateWithoutEncounterInput, Prisma.EncounterSystemReviewUncheckedUpdateWithoutEncounterInput>;
};
export type EncounterSystemReviewUpdateManyWithWhereWithoutEncounterInput = {
    where: Prisma.EncounterSystemReviewScalarWhereInput;
    data: Prisma.XOR<Prisma.EncounterSystemReviewUpdateManyMutationInput, Prisma.EncounterSystemReviewUncheckedUpdateManyWithoutEncounterInput>;
};
export type EncounterSystemReviewScalarWhereInput = {
    AND?: Prisma.EncounterSystemReviewScalarWhereInput | Prisma.EncounterSystemReviewScalarWhereInput[];
    OR?: Prisma.EncounterSystemReviewScalarWhereInput[];
    NOT?: Prisma.EncounterSystemReviewScalarWhereInput | Prisma.EncounterSystemReviewScalarWhereInput[];
    id?: Prisma.StringFilter<"EncounterSystemReview"> | string;
    encounterId?: Prisma.StringFilter<"EncounterSystemReview"> | string;
    sistema?: Prisma.EnumSystemReviewFilter<"EncounterSystemReview"> | $Enums.SystemReview;
    detalle?: Prisma.StringNullableFilter<"EncounterSystemReview"> | string | null;
};
export type EncounterSystemReviewCreateManyEncounterInput = {
    id?: string;
    sistema: $Enums.SystemReview;
    detalle?: string | null;
};
export type EncounterSystemReviewUpdateWithoutEncounterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sistema?: Prisma.EnumSystemReviewFieldUpdateOperationsInput | $Enums.SystemReview;
    detalle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type EncounterSystemReviewUncheckedUpdateWithoutEncounterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sistema?: Prisma.EnumSystemReviewFieldUpdateOperationsInput | $Enums.SystemReview;
    detalle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type EncounterSystemReviewUncheckedUpdateManyWithoutEncounterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sistema?: Prisma.EnumSystemReviewFieldUpdateOperationsInput | $Enums.SystemReview;
    detalle?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type EncounterSystemReviewSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    encounterId?: boolean;
    sistema?: boolean;
    detalle?: boolean;
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["encounterSystemReview"]>;
export type EncounterSystemReviewSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    encounterId?: boolean;
    sistema?: boolean;
    detalle?: boolean;
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["encounterSystemReview"]>;
export type EncounterSystemReviewSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    encounterId?: boolean;
    sistema?: boolean;
    detalle?: boolean;
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["encounterSystemReview"]>;
export type EncounterSystemReviewSelectScalar = {
    id?: boolean;
    encounterId?: boolean;
    sistema?: boolean;
    detalle?: boolean;
};
export type EncounterSystemReviewOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "encounterId" | "sistema" | "detalle", ExtArgs["result"]["encounterSystemReview"]>;
export type EncounterSystemReviewInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
};
export type EncounterSystemReviewIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
};
export type EncounterSystemReviewIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
};
export type $EncounterSystemReviewPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EncounterSystemReview";
    objects: {
        encounter: Prisma.$ClinicalEncounterPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        encounterId: string;
        sistema: $Enums.SystemReview;
        detalle: string | null;
    }, ExtArgs["result"]["encounterSystemReview"]>;
    composites: {};
};
export type EncounterSystemReviewGetPayload<S extends boolean | null | undefined | EncounterSystemReviewDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EncounterSystemReviewPayload, S>;
export type EncounterSystemReviewCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EncounterSystemReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EncounterSystemReviewCountAggregateInputType | true;
};
export interface EncounterSystemReviewDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EncounterSystemReview'];
        meta: {
            name: 'EncounterSystemReview';
        };
    };
    findUnique<T extends EncounterSystemReviewFindUniqueArgs>(args: Prisma.SelectSubset<T, EncounterSystemReviewFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EncounterSystemReviewClient<runtime.Types.Result.GetResult<Prisma.$EncounterSystemReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EncounterSystemReviewFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EncounterSystemReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EncounterSystemReviewClient<runtime.Types.Result.GetResult<Prisma.$EncounterSystemReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EncounterSystemReviewFindFirstArgs>(args?: Prisma.SelectSubset<T, EncounterSystemReviewFindFirstArgs<ExtArgs>>): Prisma.Prisma__EncounterSystemReviewClient<runtime.Types.Result.GetResult<Prisma.$EncounterSystemReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EncounterSystemReviewFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EncounterSystemReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EncounterSystemReviewClient<runtime.Types.Result.GetResult<Prisma.$EncounterSystemReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EncounterSystemReviewFindManyArgs>(args?: Prisma.SelectSubset<T, EncounterSystemReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EncounterSystemReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EncounterSystemReviewCreateArgs>(args: Prisma.SelectSubset<T, EncounterSystemReviewCreateArgs<ExtArgs>>): Prisma.Prisma__EncounterSystemReviewClient<runtime.Types.Result.GetResult<Prisma.$EncounterSystemReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EncounterSystemReviewCreateManyArgs>(args?: Prisma.SelectSubset<T, EncounterSystemReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EncounterSystemReviewCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EncounterSystemReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EncounterSystemReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EncounterSystemReviewDeleteArgs>(args: Prisma.SelectSubset<T, EncounterSystemReviewDeleteArgs<ExtArgs>>): Prisma.Prisma__EncounterSystemReviewClient<runtime.Types.Result.GetResult<Prisma.$EncounterSystemReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EncounterSystemReviewUpdateArgs>(args: Prisma.SelectSubset<T, EncounterSystemReviewUpdateArgs<ExtArgs>>): Prisma.Prisma__EncounterSystemReviewClient<runtime.Types.Result.GetResult<Prisma.$EncounterSystemReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EncounterSystemReviewDeleteManyArgs>(args?: Prisma.SelectSubset<T, EncounterSystemReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EncounterSystemReviewUpdateManyArgs>(args: Prisma.SelectSubset<T, EncounterSystemReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EncounterSystemReviewUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EncounterSystemReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EncounterSystemReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EncounterSystemReviewUpsertArgs>(args: Prisma.SelectSubset<T, EncounterSystemReviewUpsertArgs<ExtArgs>>): Prisma.Prisma__EncounterSystemReviewClient<runtime.Types.Result.GetResult<Prisma.$EncounterSystemReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EncounterSystemReviewCountArgs>(args?: Prisma.Subset<T, EncounterSystemReviewCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EncounterSystemReviewCountAggregateOutputType> : number>;
    aggregate<T extends EncounterSystemReviewAggregateArgs>(args: Prisma.Subset<T, EncounterSystemReviewAggregateArgs>): Prisma.PrismaPromise<GetEncounterSystemReviewAggregateType<T>>;
    groupBy<T extends EncounterSystemReviewGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EncounterSystemReviewGroupByArgs['orderBy'];
    } : {
        orderBy?: EncounterSystemReviewGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EncounterSystemReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEncounterSystemReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EncounterSystemReviewFieldRefs;
}
export interface Prisma__EncounterSystemReviewClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    encounter<T extends Prisma.ClinicalEncounterDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClinicalEncounterDefaultArgs<ExtArgs>>): Prisma.Prisma__ClinicalEncounterClient<runtime.Types.Result.GetResult<Prisma.$ClinicalEncounterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EncounterSystemReviewFieldRefs {
    readonly id: Prisma.FieldRef<"EncounterSystemReview", 'String'>;
    readonly encounterId: Prisma.FieldRef<"EncounterSystemReview", 'String'>;
    readonly sistema: Prisma.FieldRef<"EncounterSystemReview", 'SystemReview'>;
    readonly detalle: Prisma.FieldRef<"EncounterSystemReview", 'String'>;
}
export type EncounterSystemReviewFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterSystemReviewSelect<ExtArgs> | null;
    omit?: Prisma.EncounterSystemReviewOmit<ExtArgs> | null;
    include?: Prisma.EncounterSystemReviewInclude<ExtArgs> | null;
    where: Prisma.EncounterSystemReviewWhereUniqueInput;
};
export type EncounterSystemReviewFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterSystemReviewSelect<ExtArgs> | null;
    omit?: Prisma.EncounterSystemReviewOmit<ExtArgs> | null;
    include?: Prisma.EncounterSystemReviewInclude<ExtArgs> | null;
    where: Prisma.EncounterSystemReviewWhereUniqueInput;
};
export type EncounterSystemReviewFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterSystemReviewSelect<ExtArgs> | null;
    omit?: Prisma.EncounterSystemReviewOmit<ExtArgs> | null;
    include?: Prisma.EncounterSystemReviewInclude<ExtArgs> | null;
    where?: Prisma.EncounterSystemReviewWhereInput;
    orderBy?: Prisma.EncounterSystemReviewOrderByWithRelationInput | Prisma.EncounterSystemReviewOrderByWithRelationInput[];
    cursor?: Prisma.EncounterSystemReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EncounterSystemReviewScalarFieldEnum | Prisma.EncounterSystemReviewScalarFieldEnum[];
};
export type EncounterSystemReviewFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterSystemReviewSelect<ExtArgs> | null;
    omit?: Prisma.EncounterSystemReviewOmit<ExtArgs> | null;
    include?: Prisma.EncounterSystemReviewInclude<ExtArgs> | null;
    where?: Prisma.EncounterSystemReviewWhereInput;
    orderBy?: Prisma.EncounterSystemReviewOrderByWithRelationInput | Prisma.EncounterSystemReviewOrderByWithRelationInput[];
    cursor?: Prisma.EncounterSystemReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EncounterSystemReviewScalarFieldEnum | Prisma.EncounterSystemReviewScalarFieldEnum[];
};
export type EncounterSystemReviewFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterSystemReviewSelect<ExtArgs> | null;
    omit?: Prisma.EncounterSystemReviewOmit<ExtArgs> | null;
    include?: Prisma.EncounterSystemReviewInclude<ExtArgs> | null;
    where?: Prisma.EncounterSystemReviewWhereInput;
    orderBy?: Prisma.EncounterSystemReviewOrderByWithRelationInput | Prisma.EncounterSystemReviewOrderByWithRelationInput[];
    cursor?: Prisma.EncounterSystemReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EncounterSystemReviewScalarFieldEnum | Prisma.EncounterSystemReviewScalarFieldEnum[];
};
export type EncounterSystemReviewCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterSystemReviewSelect<ExtArgs> | null;
    omit?: Prisma.EncounterSystemReviewOmit<ExtArgs> | null;
    include?: Prisma.EncounterSystemReviewInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EncounterSystemReviewCreateInput, Prisma.EncounterSystemReviewUncheckedCreateInput>;
};
export type EncounterSystemReviewCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EncounterSystemReviewCreateManyInput | Prisma.EncounterSystemReviewCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EncounterSystemReviewCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterSystemReviewSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EncounterSystemReviewOmit<ExtArgs> | null;
    data: Prisma.EncounterSystemReviewCreateManyInput | Prisma.EncounterSystemReviewCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EncounterSystemReviewIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EncounterSystemReviewUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterSystemReviewSelect<ExtArgs> | null;
    omit?: Prisma.EncounterSystemReviewOmit<ExtArgs> | null;
    include?: Prisma.EncounterSystemReviewInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EncounterSystemReviewUpdateInput, Prisma.EncounterSystemReviewUncheckedUpdateInput>;
    where: Prisma.EncounterSystemReviewWhereUniqueInput;
};
export type EncounterSystemReviewUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EncounterSystemReviewUpdateManyMutationInput, Prisma.EncounterSystemReviewUncheckedUpdateManyInput>;
    where?: Prisma.EncounterSystemReviewWhereInput;
    limit?: number;
};
export type EncounterSystemReviewUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterSystemReviewSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EncounterSystemReviewOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EncounterSystemReviewUpdateManyMutationInput, Prisma.EncounterSystemReviewUncheckedUpdateManyInput>;
    where?: Prisma.EncounterSystemReviewWhereInput;
    limit?: number;
    include?: Prisma.EncounterSystemReviewIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EncounterSystemReviewUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterSystemReviewSelect<ExtArgs> | null;
    omit?: Prisma.EncounterSystemReviewOmit<ExtArgs> | null;
    include?: Prisma.EncounterSystemReviewInclude<ExtArgs> | null;
    where: Prisma.EncounterSystemReviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.EncounterSystemReviewCreateInput, Prisma.EncounterSystemReviewUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EncounterSystemReviewUpdateInput, Prisma.EncounterSystemReviewUncheckedUpdateInput>;
};
export type EncounterSystemReviewDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterSystemReviewSelect<ExtArgs> | null;
    omit?: Prisma.EncounterSystemReviewOmit<ExtArgs> | null;
    include?: Prisma.EncounterSystemReviewInclude<ExtArgs> | null;
    where: Prisma.EncounterSystemReviewWhereUniqueInput;
};
export type EncounterSystemReviewDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EncounterSystemReviewWhereInput;
    limit?: number;
};
export type EncounterSystemReviewDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterSystemReviewSelect<ExtArgs> | null;
    omit?: Prisma.EncounterSystemReviewOmit<ExtArgs> | null;
    include?: Prisma.EncounterSystemReviewInclude<ExtArgs> | null;
};

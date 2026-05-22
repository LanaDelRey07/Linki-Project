import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EncounterLabOrderModel = runtime.Types.Result.DefaultSelection<Prisma.$EncounterLabOrderPayload>;
export type AggregateEncounterLabOrder = {
    _count: EncounterLabOrderCountAggregateOutputType | null;
    _min: EncounterLabOrderMinAggregateOutputType | null;
    _max: EncounterLabOrderMaxAggregateOutputType | null;
};
export type EncounterLabOrderMinAggregateOutputType = {
    id: string | null;
    encounterId: string | null;
    estudio: string | null;
    createdAt: Date | null;
};
export type EncounterLabOrderMaxAggregateOutputType = {
    id: string | null;
    encounterId: string | null;
    estudio: string | null;
    createdAt: Date | null;
};
export type EncounterLabOrderCountAggregateOutputType = {
    id: number;
    encounterId: number;
    estudio: number;
    createdAt: number;
    _all: number;
};
export type EncounterLabOrderMinAggregateInputType = {
    id?: true;
    encounterId?: true;
    estudio?: true;
    createdAt?: true;
};
export type EncounterLabOrderMaxAggregateInputType = {
    id?: true;
    encounterId?: true;
    estudio?: true;
    createdAt?: true;
};
export type EncounterLabOrderCountAggregateInputType = {
    id?: true;
    encounterId?: true;
    estudio?: true;
    createdAt?: true;
    _all?: true;
};
export type EncounterLabOrderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EncounterLabOrderWhereInput;
    orderBy?: Prisma.EncounterLabOrderOrderByWithRelationInput | Prisma.EncounterLabOrderOrderByWithRelationInput[];
    cursor?: Prisma.EncounterLabOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EncounterLabOrderCountAggregateInputType;
    _min?: EncounterLabOrderMinAggregateInputType;
    _max?: EncounterLabOrderMaxAggregateInputType;
};
export type GetEncounterLabOrderAggregateType<T extends EncounterLabOrderAggregateArgs> = {
    [P in keyof T & keyof AggregateEncounterLabOrder]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEncounterLabOrder[P]> : Prisma.GetScalarType<T[P], AggregateEncounterLabOrder[P]>;
};
export type EncounterLabOrderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EncounterLabOrderWhereInput;
    orderBy?: Prisma.EncounterLabOrderOrderByWithAggregationInput | Prisma.EncounterLabOrderOrderByWithAggregationInput[];
    by: Prisma.EncounterLabOrderScalarFieldEnum[] | Prisma.EncounterLabOrderScalarFieldEnum;
    having?: Prisma.EncounterLabOrderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EncounterLabOrderCountAggregateInputType | true;
    _min?: EncounterLabOrderMinAggregateInputType;
    _max?: EncounterLabOrderMaxAggregateInputType;
};
export type EncounterLabOrderGroupByOutputType = {
    id: string;
    encounterId: string;
    estudio: string;
    createdAt: Date;
    _count: EncounterLabOrderCountAggregateOutputType | null;
    _min: EncounterLabOrderMinAggregateOutputType | null;
    _max: EncounterLabOrderMaxAggregateOutputType | null;
};
export type GetEncounterLabOrderGroupByPayload<T extends EncounterLabOrderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EncounterLabOrderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EncounterLabOrderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EncounterLabOrderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EncounterLabOrderGroupByOutputType[P]>;
}>>;
export type EncounterLabOrderWhereInput = {
    AND?: Prisma.EncounterLabOrderWhereInput | Prisma.EncounterLabOrderWhereInput[];
    OR?: Prisma.EncounterLabOrderWhereInput[];
    NOT?: Prisma.EncounterLabOrderWhereInput | Prisma.EncounterLabOrderWhereInput[];
    id?: Prisma.StringFilter<"EncounterLabOrder"> | string;
    encounterId?: Prisma.StringFilter<"EncounterLabOrder"> | string;
    estudio?: Prisma.StringFilter<"EncounterLabOrder"> | string;
    createdAt?: Prisma.DateTimeFilter<"EncounterLabOrder"> | Date | string;
    encounter?: Prisma.XOR<Prisma.ClinicalEncounterScalarRelationFilter, Prisma.ClinicalEncounterWhereInput>;
};
export type EncounterLabOrderOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    encounterId?: Prisma.SortOrder;
    estudio?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    encounter?: Prisma.ClinicalEncounterOrderByWithRelationInput;
};
export type EncounterLabOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.EncounterLabOrderWhereInput | Prisma.EncounterLabOrderWhereInput[];
    OR?: Prisma.EncounterLabOrderWhereInput[];
    NOT?: Prisma.EncounterLabOrderWhereInput | Prisma.EncounterLabOrderWhereInput[];
    encounterId?: Prisma.StringFilter<"EncounterLabOrder"> | string;
    estudio?: Prisma.StringFilter<"EncounterLabOrder"> | string;
    createdAt?: Prisma.DateTimeFilter<"EncounterLabOrder"> | Date | string;
    encounter?: Prisma.XOR<Prisma.ClinicalEncounterScalarRelationFilter, Prisma.ClinicalEncounterWhereInput>;
}, "id">;
export type EncounterLabOrderOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    encounterId?: Prisma.SortOrder;
    estudio?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.EncounterLabOrderCountOrderByAggregateInput;
    _max?: Prisma.EncounterLabOrderMaxOrderByAggregateInput;
    _min?: Prisma.EncounterLabOrderMinOrderByAggregateInput;
};
export type EncounterLabOrderScalarWhereWithAggregatesInput = {
    AND?: Prisma.EncounterLabOrderScalarWhereWithAggregatesInput | Prisma.EncounterLabOrderScalarWhereWithAggregatesInput[];
    OR?: Prisma.EncounterLabOrderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EncounterLabOrderScalarWhereWithAggregatesInput | Prisma.EncounterLabOrderScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"EncounterLabOrder"> | string;
    encounterId?: Prisma.StringWithAggregatesFilter<"EncounterLabOrder"> | string;
    estudio?: Prisma.StringWithAggregatesFilter<"EncounterLabOrder"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"EncounterLabOrder"> | Date | string;
};
export type EncounterLabOrderCreateInput = {
    id?: string;
    estudio: string;
    createdAt?: Date | string;
    encounter: Prisma.ClinicalEncounterCreateNestedOneWithoutLabOrdersInput;
};
export type EncounterLabOrderUncheckedCreateInput = {
    id?: string;
    encounterId: string;
    estudio: string;
    createdAt?: Date | string;
};
export type EncounterLabOrderUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    estudio?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    encounter?: Prisma.ClinicalEncounterUpdateOneRequiredWithoutLabOrdersNestedInput;
};
export type EncounterLabOrderUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    encounterId?: Prisma.StringFieldUpdateOperationsInput | string;
    estudio?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EncounterLabOrderCreateManyInput = {
    id?: string;
    encounterId: string;
    estudio: string;
    createdAt?: Date | string;
};
export type EncounterLabOrderUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    estudio?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EncounterLabOrderUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    encounterId?: Prisma.StringFieldUpdateOperationsInput | string;
    estudio?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EncounterLabOrderListRelationFilter = {
    every?: Prisma.EncounterLabOrderWhereInput;
    some?: Prisma.EncounterLabOrderWhereInput;
    none?: Prisma.EncounterLabOrderWhereInput;
};
export type EncounterLabOrderOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EncounterLabOrderCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    encounterId?: Prisma.SortOrder;
    estudio?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EncounterLabOrderMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    encounterId?: Prisma.SortOrder;
    estudio?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EncounterLabOrderMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    encounterId?: Prisma.SortOrder;
    estudio?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EncounterLabOrderCreateNestedManyWithoutEncounterInput = {
    create?: Prisma.XOR<Prisma.EncounterLabOrderCreateWithoutEncounterInput, Prisma.EncounterLabOrderUncheckedCreateWithoutEncounterInput> | Prisma.EncounterLabOrderCreateWithoutEncounterInput[] | Prisma.EncounterLabOrderUncheckedCreateWithoutEncounterInput[];
    connectOrCreate?: Prisma.EncounterLabOrderCreateOrConnectWithoutEncounterInput | Prisma.EncounterLabOrderCreateOrConnectWithoutEncounterInput[];
    createMany?: Prisma.EncounterLabOrderCreateManyEncounterInputEnvelope;
    connect?: Prisma.EncounterLabOrderWhereUniqueInput | Prisma.EncounterLabOrderWhereUniqueInput[];
};
export type EncounterLabOrderUncheckedCreateNestedManyWithoutEncounterInput = {
    create?: Prisma.XOR<Prisma.EncounterLabOrderCreateWithoutEncounterInput, Prisma.EncounterLabOrderUncheckedCreateWithoutEncounterInput> | Prisma.EncounterLabOrderCreateWithoutEncounterInput[] | Prisma.EncounterLabOrderUncheckedCreateWithoutEncounterInput[];
    connectOrCreate?: Prisma.EncounterLabOrderCreateOrConnectWithoutEncounterInput | Prisma.EncounterLabOrderCreateOrConnectWithoutEncounterInput[];
    createMany?: Prisma.EncounterLabOrderCreateManyEncounterInputEnvelope;
    connect?: Prisma.EncounterLabOrderWhereUniqueInput | Prisma.EncounterLabOrderWhereUniqueInput[];
};
export type EncounterLabOrderUpdateManyWithoutEncounterNestedInput = {
    create?: Prisma.XOR<Prisma.EncounterLabOrderCreateWithoutEncounterInput, Prisma.EncounterLabOrderUncheckedCreateWithoutEncounterInput> | Prisma.EncounterLabOrderCreateWithoutEncounterInput[] | Prisma.EncounterLabOrderUncheckedCreateWithoutEncounterInput[];
    connectOrCreate?: Prisma.EncounterLabOrderCreateOrConnectWithoutEncounterInput | Prisma.EncounterLabOrderCreateOrConnectWithoutEncounterInput[];
    upsert?: Prisma.EncounterLabOrderUpsertWithWhereUniqueWithoutEncounterInput | Prisma.EncounterLabOrderUpsertWithWhereUniqueWithoutEncounterInput[];
    createMany?: Prisma.EncounterLabOrderCreateManyEncounterInputEnvelope;
    set?: Prisma.EncounterLabOrderWhereUniqueInput | Prisma.EncounterLabOrderWhereUniqueInput[];
    disconnect?: Prisma.EncounterLabOrderWhereUniqueInput | Prisma.EncounterLabOrderWhereUniqueInput[];
    delete?: Prisma.EncounterLabOrderWhereUniqueInput | Prisma.EncounterLabOrderWhereUniqueInput[];
    connect?: Prisma.EncounterLabOrderWhereUniqueInput | Prisma.EncounterLabOrderWhereUniqueInput[];
    update?: Prisma.EncounterLabOrderUpdateWithWhereUniqueWithoutEncounterInput | Prisma.EncounterLabOrderUpdateWithWhereUniqueWithoutEncounterInput[];
    updateMany?: Prisma.EncounterLabOrderUpdateManyWithWhereWithoutEncounterInput | Prisma.EncounterLabOrderUpdateManyWithWhereWithoutEncounterInput[];
    deleteMany?: Prisma.EncounterLabOrderScalarWhereInput | Prisma.EncounterLabOrderScalarWhereInput[];
};
export type EncounterLabOrderUncheckedUpdateManyWithoutEncounterNestedInput = {
    create?: Prisma.XOR<Prisma.EncounterLabOrderCreateWithoutEncounterInput, Prisma.EncounterLabOrderUncheckedCreateWithoutEncounterInput> | Prisma.EncounterLabOrderCreateWithoutEncounterInput[] | Prisma.EncounterLabOrderUncheckedCreateWithoutEncounterInput[];
    connectOrCreate?: Prisma.EncounterLabOrderCreateOrConnectWithoutEncounterInput | Prisma.EncounterLabOrderCreateOrConnectWithoutEncounterInput[];
    upsert?: Prisma.EncounterLabOrderUpsertWithWhereUniqueWithoutEncounterInput | Prisma.EncounterLabOrderUpsertWithWhereUniqueWithoutEncounterInput[];
    createMany?: Prisma.EncounterLabOrderCreateManyEncounterInputEnvelope;
    set?: Prisma.EncounterLabOrderWhereUniqueInput | Prisma.EncounterLabOrderWhereUniqueInput[];
    disconnect?: Prisma.EncounterLabOrderWhereUniqueInput | Prisma.EncounterLabOrderWhereUniqueInput[];
    delete?: Prisma.EncounterLabOrderWhereUniqueInput | Prisma.EncounterLabOrderWhereUniqueInput[];
    connect?: Prisma.EncounterLabOrderWhereUniqueInput | Prisma.EncounterLabOrderWhereUniqueInput[];
    update?: Prisma.EncounterLabOrderUpdateWithWhereUniqueWithoutEncounterInput | Prisma.EncounterLabOrderUpdateWithWhereUniqueWithoutEncounterInput[];
    updateMany?: Prisma.EncounterLabOrderUpdateManyWithWhereWithoutEncounterInput | Prisma.EncounterLabOrderUpdateManyWithWhereWithoutEncounterInput[];
    deleteMany?: Prisma.EncounterLabOrderScalarWhereInput | Prisma.EncounterLabOrderScalarWhereInput[];
};
export type EncounterLabOrderCreateWithoutEncounterInput = {
    id?: string;
    estudio: string;
    createdAt?: Date | string;
};
export type EncounterLabOrderUncheckedCreateWithoutEncounterInput = {
    id?: string;
    estudio: string;
    createdAt?: Date | string;
};
export type EncounterLabOrderCreateOrConnectWithoutEncounterInput = {
    where: Prisma.EncounterLabOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.EncounterLabOrderCreateWithoutEncounterInput, Prisma.EncounterLabOrderUncheckedCreateWithoutEncounterInput>;
};
export type EncounterLabOrderCreateManyEncounterInputEnvelope = {
    data: Prisma.EncounterLabOrderCreateManyEncounterInput | Prisma.EncounterLabOrderCreateManyEncounterInput[];
    skipDuplicates?: boolean;
};
export type EncounterLabOrderUpsertWithWhereUniqueWithoutEncounterInput = {
    where: Prisma.EncounterLabOrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.EncounterLabOrderUpdateWithoutEncounterInput, Prisma.EncounterLabOrderUncheckedUpdateWithoutEncounterInput>;
    create: Prisma.XOR<Prisma.EncounterLabOrderCreateWithoutEncounterInput, Prisma.EncounterLabOrderUncheckedCreateWithoutEncounterInput>;
};
export type EncounterLabOrderUpdateWithWhereUniqueWithoutEncounterInput = {
    where: Prisma.EncounterLabOrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.EncounterLabOrderUpdateWithoutEncounterInput, Prisma.EncounterLabOrderUncheckedUpdateWithoutEncounterInput>;
};
export type EncounterLabOrderUpdateManyWithWhereWithoutEncounterInput = {
    where: Prisma.EncounterLabOrderScalarWhereInput;
    data: Prisma.XOR<Prisma.EncounterLabOrderUpdateManyMutationInput, Prisma.EncounterLabOrderUncheckedUpdateManyWithoutEncounterInput>;
};
export type EncounterLabOrderScalarWhereInput = {
    AND?: Prisma.EncounterLabOrderScalarWhereInput | Prisma.EncounterLabOrderScalarWhereInput[];
    OR?: Prisma.EncounterLabOrderScalarWhereInput[];
    NOT?: Prisma.EncounterLabOrderScalarWhereInput | Prisma.EncounterLabOrderScalarWhereInput[];
    id?: Prisma.StringFilter<"EncounterLabOrder"> | string;
    encounterId?: Prisma.StringFilter<"EncounterLabOrder"> | string;
    estudio?: Prisma.StringFilter<"EncounterLabOrder"> | string;
    createdAt?: Prisma.DateTimeFilter<"EncounterLabOrder"> | Date | string;
};
export type EncounterLabOrderCreateManyEncounterInput = {
    id?: string;
    estudio: string;
    createdAt?: Date | string;
};
export type EncounterLabOrderUpdateWithoutEncounterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    estudio?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EncounterLabOrderUncheckedUpdateWithoutEncounterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    estudio?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EncounterLabOrderUncheckedUpdateManyWithoutEncounterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    estudio?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EncounterLabOrderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    encounterId?: boolean;
    estudio?: boolean;
    createdAt?: boolean;
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["encounterLabOrder"]>;
export type EncounterLabOrderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    encounterId?: boolean;
    estudio?: boolean;
    createdAt?: boolean;
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["encounterLabOrder"]>;
export type EncounterLabOrderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    encounterId?: boolean;
    estudio?: boolean;
    createdAt?: boolean;
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["encounterLabOrder"]>;
export type EncounterLabOrderSelectScalar = {
    id?: boolean;
    encounterId?: boolean;
    estudio?: boolean;
    createdAt?: boolean;
};
export type EncounterLabOrderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "encounterId" | "estudio" | "createdAt", ExtArgs["result"]["encounterLabOrder"]>;
export type EncounterLabOrderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
};
export type EncounterLabOrderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
};
export type EncounterLabOrderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
};
export type $EncounterLabOrderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EncounterLabOrder";
    objects: {
        encounter: Prisma.$ClinicalEncounterPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        encounterId: string;
        estudio: string;
        createdAt: Date;
    }, ExtArgs["result"]["encounterLabOrder"]>;
    composites: {};
};
export type EncounterLabOrderGetPayload<S extends boolean | null | undefined | EncounterLabOrderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EncounterLabOrderPayload, S>;
export type EncounterLabOrderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EncounterLabOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EncounterLabOrderCountAggregateInputType | true;
};
export interface EncounterLabOrderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EncounterLabOrder'];
        meta: {
            name: 'EncounterLabOrder';
        };
    };
    findUnique<T extends EncounterLabOrderFindUniqueArgs>(args: Prisma.SelectSubset<T, EncounterLabOrderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EncounterLabOrderClient<runtime.Types.Result.GetResult<Prisma.$EncounterLabOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EncounterLabOrderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EncounterLabOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EncounterLabOrderClient<runtime.Types.Result.GetResult<Prisma.$EncounterLabOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EncounterLabOrderFindFirstArgs>(args?: Prisma.SelectSubset<T, EncounterLabOrderFindFirstArgs<ExtArgs>>): Prisma.Prisma__EncounterLabOrderClient<runtime.Types.Result.GetResult<Prisma.$EncounterLabOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EncounterLabOrderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EncounterLabOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EncounterLabOrderClient<runtime.Types.Result.GetResult<Prisma.$EncounterLabOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EncounterLabOrderFindManyArgs>(args?: Prisma.SelectSubset<T, EncounterLabOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EncounterLabOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EncounterLabOrderCreateArgs>(args: Prisma.SelectSubset<T, EncounterLabOrderCreateArgs<ExtArgs>>): Prisma.Prisma__EncounterLabOrderClient<runtime.Types.Result.GetResult<Prisma.$EncounterLabOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EncounterLabOrderCreateManyArgs>(args?: Prisma.SelectSubset<T, EncounterLabOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EncounterLabOrderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EncounterLabOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EncounterLabOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EncounterLabOrderDeleteArgs>(args: Prisma.SelectSubset<T, EncounterLabOrderDeleteArgs<ExtArgs>>): Prisma.Prisma__EncounterLabOrderClient<runtime.Types.Result.GetResult<Prisma.$EncounterLabOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EncounterLabOrderUpdateArgs>(args: Prisma.SelectSubset<T, EncounterLabOrderUpdateArgs<ExtArgs>>): Prisma.Prisma__EncounterLabOrderClient<runtime.Types.Result.GetResult<Prisma.$EncounterLabOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EncounterLabOrderDeleteManyArgs>(args?: Prisma.SelectSubset<T, EncounterLabOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EncounterLabOrderUpdateManyArgs>(args: Prisma.SelectSubset<T, EncounterLabOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EncounterLabOrderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EncounterLabOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EncounterLabOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EncounterLabOrderUpsertArgs>(args: Prisma.SelectSubset<T, EncounterLabOrderUpsertArgs<ExtArgs>>): Prisma.Prisma__EncounterLabOrderClient<runtime.Types.Result.GetResult<Prisma.$EncounterLabOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EncounterLabOrderCountArgs>(args?: Prisma.Subset<T, EncounterLabOrderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EncounterLabOrderCountAggregateOutputType> : number>;
    aggregate<T extends EncounterLabOrderAggregateArgs>(args: Prisma.Subset<T, EncounterLabOrderAggregateArgs>): Prisma.PrismaPromise<GetEncounterLabOrderAggregateType<T>>;
    groupBy<T extends EncounterLabOrderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EncounterLabOrderGroupByArgs['orderBy'];
    } : {
        orderBy?: EncounterLabOrderGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EncounterLabOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEncounterLabOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EncounterLabOrderFieldRefs;
}
export interface Prisma__EncounterLabOrderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    encounter<T extends Prisma.ClinicalEncounterDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClinicalEncounterDefaultArgs<ExtArgs>>): Prisma.Prisma__ClinicalEncounterClient<runtime.Types.Result.GetResult<Prisma.$ClinicalEncounterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EncounterLabOrderFieldRefs {
    readonly id: Prisma.FieldRef<"EncounterLabOrder", 'String'>;
    readonly encounterId: Prisma.FieldRef<"EncounterLabOrder", 'String'>;
    readonly estudio: Prisma.FieldRef<"EncounterLabOrder", 'String'>;
    readonly createdAt: Prisma.FieldRef<"EncounterLabOrder", 'DateTime'>;
}
export type EncounterLabOrderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterLabOrderSelect<ExtArgs> | null;
    omit?: Prisma.EncounterLabOrderOmit<ExtArgs> | null;
    include?: Prisma.EncounterLabOrderInclude<ExtArgs> | null;
    where: Prisma.EncounterLabOrderWhereUniqueInput;
};
export type EncounterLabOrderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterLabOrderSelect<ExtArgs> | null;
    omit?: Prisma.EncounterLabOrderOmit<ExtArgs> | null;
    include?: Prisma.EncounterLabOrderInclude<ExtArgs> | null;
    where: Prisma.EncounterLabOrderWhereUniqueInput;
};
export type EncounterLabOrderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterLabOrderSelect<ExtArgs> | null;
    omit?: Prisma.EncounterLabOrderOmit<ExtArgs> | null;
    include?: Prisma.EncounterLabOrderInclude<ExtArgs> | null;
    where?: Prisma.EncounterLabOrderWhereInput;
    orderBy?: Prisma.EncounterLabOrderOrderByWithRelationInput | Prisma.EncounterLabOrderOrderByWithRelationInput[];
    cursor?: Prisma.EncounterLabOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EncounterLabOrderScalarFieldEnum | Prisma.EncounterLabOrderScalarFieldEnum[];
};
export type EncounterLabOrderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterLabOrderSelect<ExtArgs> | null;
    omit?: Prisma.EncounterLabOrderOmit<ExtArgs> | null;
    include?: Prisma.EncounterLabOrderInclude<ExtArgs> | null;
    where?: Prisma.EncounterLabOrderWhereInput;
    orderBy?: Prisma.EncounterLabOrderOrderByWithRelationInput | Prisma.EncounterLabOrderOrderByWithRelationInput[];
    cursor?: Prisma.EncounterLabOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EncounterLabOrderScalarFieldEnum | Prisma.EncounterLabOrderScalarFieldEnum[];
};
export type EncounterLabOrderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterLabOrderSelect<ExtArgs> | null;
    omit?: Prisma.EncounterLabOrderOmit<ExtArgs> | null;
    include?: Prisma.EncounterLabOrderInclude<ExtArgs> | null;
    where?: Prisma.EncounterLabOrderWhereInput;
    orderBy?: Prisma.EncounterLabOrderOrderByWithRelationInput | Prisma.EncounterLabOrderOrderByWithRelationInput[];
    cursor?: Prisma.EncounterLabOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EncounterLabOrderScalarFieldEnum | Prisma.EncounterLabOrderScalarFieldEnum[];
};
export type EncounterLabOrderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterLabOrderSelect<ExtArgs> | null;
    omit?: Prisma.EncounterLabOrderOmit<ExtArgs> | null;
    include?: Prisma.EncounterLabOrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EncounterLabOrderCreateInput, Prisma.EncounterLabOrderUncheckedCreateInput>;
};
export type EncounterLabOrderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EncounterLabOrderCreateManyInput | Prisma.EncounterLabOrderCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EncounterLabOrderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterLabOrderSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EncounterLabOrderOmit<ExtArgs> | null;
    data: Prisma.EncounterLabOrderCreateManyInput | Prisma.EncounterLabOrderCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EncounterLabOrderIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EncounterLabOrderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterLabOrderSelect<ExtArgs> | null;
    omit?: Prisma.EncounterLabOrderOmit<ExtArgs> | null;
    include?: Prisma.EncounterLabOrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EncounterLabOrderUpdateInput, Prisma.EncounterLabOrderUncheckedUpdateInput>;
    where: Prisma.EncounterLabOrderWhereUniqueInput;
};
export type EncounterLabOrderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EncounterLabOrderUpdateManyMutationInput, Prisma.EncounterLabOrderUncheckedUpdateManyInput>;
    where?: Prisma.EncounterLabOrderWhereInput;
    limit?: number;
};
export type EncounterLabOrderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterLabOrderSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EncounterLabOrderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EncounterLabOrderUpdateManyMutationInput, Prisma.EncounterLabOrderUncheckedUpdateManyInput>;
    where?: Prisma.EncounterLabOrderWhereInput;
    limit?: number;
    include?: Prisma.EncounterLabOrderIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EncounterLabOrderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterLabOrderSelect<ExtArgs> | null;
    omit?: Prisma.EncounterLabOrderOmit<ExtArgs> | null;
    include?: Prisma.EncounterLabOrderInclude<ExtArgs> | null;
    where: Prisma.EncounterLabOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.EncounterLabOrderCreateInput, Prisma.EncounterLabOrderUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EncounterLabOrderUpdateInput, Prisma.EncounterLabOrderUncheckedUpdateInput>;
};
export type EncounterLabOrderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterLabOrderSelect<ExtArgs> | null;
    omit?: Prisma.EncounterLabOrderOmit<ExtArgs> | null;
    include?: Prisma.EncounterLabOrderInclude<ExtArgs> | null;
    where: Prisma.EncounterLabOrderWhereUniqueInput;
};
export type EncounterLabOrderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EncounterLabOrderWhereInput;
    limit?: number;
};
export type EncounterLabOrderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterLabOrderSelect<ExtArgs> | null;
    omit?: Prisma.EncounterLabOrderOmit<ExtArgs> | null;
    include?: Prisma.EncounterLabOrderInclude<ExtArgs> | null;
};

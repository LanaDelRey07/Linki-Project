import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EncounterImagingOrderModel = runtime.Types.Result.DefaultSelection<Prisma.$EncounterImagingOrderPayload>;
export type AggregateEncounterImagingOrder = {
    _count: EncounterImagingOrderCountAggregateOutputType | null;
    _min: EncounterImagingOrderMinAggregateOutputType | null;
    _max: EncounterImagingOrderMaxAggregateOutputType | null;
};
export type EncounterImagingOrderMinAggregateOutputType = {
    id: string | null;
    encounterId: string | null;
    estudio: string | null;
    createdAt: Date | null;
};
export type EncounterImagingOrderMaxAggregateOutputType = {
    id: string | null;
    encounterId: string | null;
    estudio: string | null;
    createdAt: Date | null;
};
export type EncounterImagingOrderCountAggregateOutputType = {
    id: number;
    encounterId: number;
    estudio: number;
    createdAt: number;
    _all: number;
};
export type EncounterImagingOrderMinAggregateInputType = {
    id?: true;
    encounterId?: true;
    estudio?: true;
    createdAt?: true;
};
export type EncounterImagingOrderMaxAggregateInputType = {
    id?: true;
    encounterId?: true;
    estudio?: true;
    createdAt?: true;
};
export type EncounterImagingOrderCountAggregateInputType = {
    id?: true;
    encounterId?: true;
    estudio?: true;
    createdAt?: true;
    _all?: true;
};
export type EncounterImagingOrderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EncounterImagingOrderWhereInput;
    orderBy?: Prisma.EncounterImagingOrderOrderByWithRelationInput | Prisma.EncounterImagingOrderOrderByWithRelationInput[];
    cursor?: Prisma.EncounterImagingOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EncounterImagingOrderCountAggregateInputType;
    _min?: EncounterImagingOrderMinAggregateInputType;
    _max?: EncounterImagingOrderMaxAggregateInputType;
};
export type GetEncounterImagingOrderAggregateType<T extends EncounterImagingOrderAggregateArgs> = {
    [P in keyof T & keyof AggregateEncounterImagingOrder]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEncounterImagingOrder[P]> : Prisma.GetScalarType<T[P], AggregateEncounterImagingOrder[P]>;
};
export type EncounterImagingOrderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EncounterImagingOrderWhereInput;
    orderBy?: Prisma.EncounterImagingOrderOrderByWithAggregationInput | Prisma.EncounterImagingOrderOrderByWithAggregationInput[];
    by: Prisma.EncounterImagingOrderScalarFieldEnum[] | Prisma.EncounterImagingOrderScalarFieldEnum;
    having?: Prisma.EncounterImagingOrderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EncounterImagingOrderCountAggregateInputType | true;
    _min?: EncounterImagingOrderMinAggregateInputType;
    _max?: EncounterImagingOrderMaxAggregateInputType;
};
export type EncounterImagingOrderGroupByOutputType = {
    id: string;
    encounterId: string;
    estudio: string;
    createdAt: Date;
    _count: EncounterImagingOrderCountAggregateOutputType | null;
    _min: EncounterImagingOrderMinAggregateOutputType | null;
    _max: EncounterImagingOrderMaxAggregateOutputType | null;
};
export type GetEncounterImagingOrderGroupByPayload<T extends EncounterImagingOrderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EncounterImagingOrderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EncounterImagingOrderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EncounterImagingOrderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EncounterImagingOrderGroupByOutputType[P]>;
}>>;
export type EncounterImagingOrderWhereInput = {
    AND?: Prisma.EncounterImagingOrderWhereInput | Prisma.EncounterImagingOrderWhereInput[];
    OR?: Prisma.EncounterImagingOrderWhereInput[];
    NOT?: Prisma.EncounterImagingOrderWhereInput | Prisma.EncounterImagingOrderWhereInput[];
    id?: Prisma.StringFilter<"EncounterImagingOrder"> | string;
    encounterId?: Prisma.StringFilter<"EncounterImagingOrder"> | string;
    estudio?: Prisma.StringFilter<"EncounterImagingOrder"> | string;
    createdAt?: Prisma.DateTimeFilter<"EncounterImagingOrder"> | Date | string;
    encounter?: Prisma.XOR<Prisma.ClinicalEncounterScalarRelationFilter, Prisma.ClinicalEncounterWhereInput>;
};
export type EncounterImagingOrderOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    encounterId?: Prisma.SortOrder;
    estudio?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    encounter?: Prisma.ClinicalEncounterOrderByWithRelationInput;
};
export type EncounterImagingOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.EncounterImagingOrderWhereInput | Prisma.EncounterImagingOrderWhereInput[];
    OR?: Prisma.EncounterImagingOrderWhereInput[];
    NOT?: Prisma.EncounterImagingOrderWhereInput | Prisma.EncounterImagingOrderWhereInput[];
    encounterId?: Prisma.StringFilter<"EncounterImagingOrder"> | string;
    estudio?: Prisma.StringFilter<"EncounterImagingOrder"> | string;
    createdAt?: Prisma.DateTimeFilter<"EncounterImagingOrder"> | Date | string;
    encounter?: Prisma.XOR<Prisma.ClinicalEncounterScalarRelationFilter, Prisma.ClinicalEncounterWhereInput>;
}, "id">;
export type EncounterImagingOrderOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    encounterId?: Prisma.SortOrder;
    estudio?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.EncounterImagingOrderCountOrderByAggregateInput;
    _max?: Prisma.EncounterImagingOrderMaxOrderByAggregateInput;
    _min?: Prisma.EncounterImagingOrderMinOrderByAggregateInput;
};
export type EncounterImagingOrderScalarWhereWithAggregatesInput = {
    AND?: Prisma.EncounterImagingOrderScalarWhereWithAggregatesInput | Prisma.EncounterImagingOrderScalarWhereWithAggregatesInput[];
    OR?: Prisma.EncounterImagingOrderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EncounterImagingOrderScalarWhereWithAggregatesInput | Prisma.EncounterImagingOrderScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"EncounterImagingOrder"> | string;
    encounterId?: Prisma.StringWithAggregatesFilter<"EncounterImagingOrder"> | string;
    estudio?: Prisma.StringWithAggregatesFilter<"EncounterImagingOrder"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"EncounterImagingOrder"> | Date | string;
};
export type EncounterImagingOrderCreateInput = {
    id?: string;
    estudio: string;
    createdAt?: Date | string;
    encounter: Prisma.ClinicalEncounterCreateNestedOneWithoutImagingOrdersInput;
};
export type EncounterImagingOrderUncheckedCreateInput = {
    id?: string;
    encounterId: string;
    estudio: string;
    createdAt?: Date | string;
};
export type EncounterImagingOrderUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    estudio?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    encounter?: Prisma.ClinicalEncounterUpdateOneRequiredWithoutImagingOrdersNestedInput;
};
export type EncounterImagingOrderUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    encounterId?: Prisma.StringFieldUpdateOperationsInput | string;
    estudio?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EncounterImagingOrderCreateManyInput = {
    id?: string;
    encounterId: string;
    estudio: string;
    createdAt?: Date | string;
};
export type EncounterImagingOrderUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    estudio?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EncounterImagingOrderUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    encounterId?: Prisma.StringFieldUpdateOperationsInput | string;
    estudio?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EncounterImagingOrderListRelationFilter = {
    every?: Prisma.EncounterImagingOrderWhereInput;
    some?: Prisma.EncounterImagingOrderWhereInput;
    none?: Prisma.EncounterImagingOrderWhereInput;
};
export type EncounterImagingOrderOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EncounterImagingOrderCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    encounterId?: Prisma.SortOrder;
    estudio?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EncounterImagingOrderMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    encounterId?: Prisma.SortOrder;
    estudio?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EncounterImagingOrderMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    encounterId?: Prisma.SortOrder;
    estudio?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EncounterImagingOrderCreateNestedManyWithoutEncounterInput = {
    create?: Prisma.XOR<Prisma.EncounterImagingOrderCreateWithoutEncounterInput, Prisma.EncounterImagingOrderUncheckedCreateWithoutEncounterInput> | Prisma.EncounterImagingOrderCreateWithoutEncounterInput[] | Prisma.EncounterImagingOrderUncheckedCreateWithoutEncounterInput[];
    connectOrCreate?: Prisma.EncounterImagingOrderCreateOrConnectWithoutEncounterInput | Prisma.EncounterImagingOrderCreateOrConnectWithoutEncounterInput[];
    createMany?: Prisma.EncounterImagingOrderCreateManyEncounterInputEnvelope;
    connect?: Prisma.EncounterImagingOrderWhereUniqueInput | Prisma.EncounterImagingOrderWhereUniqueInput[];
};
export type EncounterImagingOrderUncheckedCreateNestedManyWithoutEncounterInput = {
    create?: Prisma.XOR<Prisma.EncounterImagingOrderCreateWithoutEncounterInput, Prisma.EncounterImagingOrderUncheckedCreateWithoutEncounterInput> | Prisma.EncounterImagingOrderCreateWithoutEncounterInput[] | Prisma.EncounterImagingOrderUncheckedCreateWithoutEncounterInput[];
    connectOrCreate?: Prisma.EncounterImagingOrderCreateOrConnectWithoutEncounterInput | Prisma.EncounterImagingOrderCreateOrConnectWithoutEncounterInput[];
    createMany?: Prisma.EncounterImagingOrderCreateManyEncounterInputEnvelope;
    connect?: Prisma.EncounterImagingOrderWhereUniqueInput | Prisma.EncounterImagingOrderWhereUniqueInput[];
};
export type EncounterImagingOrderUpdateManyWithoutEncounterNestedInput = {
    create?: Prisma.XOR<Prisma.EncounterImagingOrderCreateWithoutEncounterInput, Prisma.EncounterImagingOrderUncheckedCreateWithoutEncounterInput> | Prisma.EncounterImagingOrderCreateWithoutEncounterInput[] | Prisma.EncounterImagingOrderUncheckedCreateWithoutEncounterInput[];
    connectOrCreate?: Prisma.EncounterImagingOrderCreateOrConnectWithoutEncounterInput | Prisma.EncounterImagingOrderCreateOrConnectWithoutEncounterInput[];
    upsert?: Prisma.EncounterImagingOrderUpsertWithWhereUniqueWithoutEncounterInput | Prisma.EncounterImagingOrderUpsertWithWhereUniqueWithoutEncounterInput[];
    createMany?: Prisma.EncounterImagingOrderCreateManyEncounterInputEnvelope;
    set?: Prisma.EncounterImagingOrderWhereUniqueInput | Prisma.EncounterImagingOrderWhereUniqueInput[];
    disconnect?: Prisma.EncounterImagingOrderWhereUniqueInput | Prisma.EncounterImagingOrderWhereUniqueInput[];
    delete?: Prisma.EncounterImagingOrderWhereUniqueInput | Prisma.EncounterImagingOrderWhereUniqueInput[];
    connect?: Prisma.EncounterImagingOrderWhereUniqueInput | Prisma.EncounterImagingOrderWhereUniqueInput[];
    update?: Prisma.EncounterImagingOrderUpdateWithWhereUniqueWithoutEncounterInput | Prisma.EncounterImagingOrderUpdateWithWhereUniqueWithoutEncounterInput[];
    updateMany?: Prisma.EncounterImagingOrderUpdateManyWithWhereWithoutEncounterInput | Prisma.EncounterImagingOrderUpdateManyWithWhereWithoutEncounterInput[];
    deleteMany?: Prisma.EncounterImagingOrderScalarWhereInput | Prisma.EncounterImagingOrderScalarWhereInput[];
};
export type EncounterImagingOrderUncheckedUpdateManyWithoutEncounterNestedInput = {
    create?: Prisma.XOR<Prisma.EncounterImagingOrderCreateWithoutEncounterInput, Prisma.EncounterImagingOrderUncheckedCreateWithoutEncounterInput> | Prisma.EncounterImagingOrderCreateWithoutEncounterInput[] | Prisma.EncounterImagingOrderUncheckedCreateWithoutEncounterInput[];
    connectOrCreate?: Prisma.EncounterImagingOrderCreateOrConnectWithoutEncounterInput | Prisma.EncounterImagingOrderCreateOrConnectWithoutEncounterInput[];
    upsert?: Prisma.EncounterImagingOrderUpsertWithWhereUniqueWithoutEncounterInput | Prisma.EncounterImagingOrderUpsertWithWhereUniqueWithoutEncounterInput[];
    createMany?: Prisma.EncounterImagingOrderCreateManyEncounterInputEnvelope;
    set?: Prisma.EncounterImagingOrderWhereUniqueInput | Prisma.EncounterImagingOrderWhereUniqueInput[];
    disconnect?: Prisma.EncounterImagingOrderWhereUniqueInput | Prisma.EncounterImagingOrderWhereUniqueInput[];
    delete?: Prisma.EncounterImagingOrderWhereUniqueInput | Prisma.EncounterImagingOrderWhereUniqueInput[];
    connect?: Prisma.EncounterImagingOrderWhereUniqueInput | Prisma.EncounterImagingOrderWhereUniqueInput[];
    update?: Prisma.EncounterImagingOrderUpdateWithWhereUniqueWithoutEncounterInput | Prisma.EncounterImagingOrderUpdateWithWhereUniqueWithoutEncounterInput[];
    updateMany?: Prisma.EncounterImagingOrderUpdateManyWithWhereWithoutEncounterInput | Prisma.EncounterImagingOrderUpdateManyWithWhereWithoutEncounterInput[];
    deleteMany?: Prisma.EncounterImagingOrderScalarWhereInput | Prisma.EncounterImagingOrderScalarWhereInput[];
};
export type EncounterImagingOrderCreateWithoutEncounterInput = {
    id?: string;
    estudio: string;
    createdAt?: Date | string;
};
export type EncounterImagingOrderUncheckedCreateWithoutEncounterInput = {
    id?: string;
    estudio: string;
    createdAt?: Date | string;
};
export type EncounterImagingOrderCreateOrConnectWithoutEncounterInput = {
    where: Prisma.EncounterImagingOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.EncounterImagingOrderCreateWithoutEncounterInput, Prisma.EncounterImagingOrderUncheckedCreateWithoutEncounterInput>;
};
export type EncounterImagingOrderCreateManyEncounterInputEnvelope = {
    data: Prisma.EncounterImagingOrderCreateManyEncounterInput | Prisma.EncounterImagingOrderCreateManyEncounterInput[];
    skipDuplicates?: boolean;
};
export type EncounterImagingOrderUpsertWithWhereUniqueWithoutEncounterInput = {
    where: Prisma.EncounterImagingOrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.EncounterImagingOrderUpdateWithoutEncounterInput, Prisma.EncounterImagingOrderUncheckedUpdateWithoutEncounterInput>;
    create: Prisma.XOR<Prisma.EncounterImagingOrderCreateWithoutEncounterInput, Prisma.EncounterImagingOrderUncheckedCreateWithoutEncounterInput>;
};
export type EncounterImagingOrderUpdateWithWhereUniqueWithoutEncounterInput = {
    where: Prisma.EncounterImagingOrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.EncounterImagingOrderUpdateWithoutEncounterInput, Prisma.EncounterImagingOrderUncheckedUpdateWithoutEncounterInput>;
};
export type EncounterImagingOrderUpdateManyWithWhereWithoutEncounterInput = {
    where: Prisma.EncounterImagingOrderScalarWhereInput;
    data: Prisma.XOR<Prisma.EncounterImagingOrderUpdateManyMutationInput, Prisma.EncounterImagingOrderUncheckedUpdateManyWithoutEncounterInput>;
};
export type EncounterImagingOrderScalarWhereInput = {
    AND?: Prisma.EncounterImagingOrderScalarWhereInput | Prisma.EncounterImagingOrderScalarWhereInput[];
    OR?: Prisma.EncounterImagingOrderScalarWhereInput[];
    NOT?: Prisma.EncounterImagingOrderScalarWhereInput | Prisma.EncounterImagingOrderScalarWhereInput[];
    id?: Prisma.StringFilter<"EncounterImagingOrder"> | string;
    encounterId?: Prisma.StringFilter<"EncounterImagingOrder"> | string;
    estudio?: Prisma.StringFilter<"EncounterImagingOrder"> | string;
    createdAt?: Prisma.DateTimeFilter<"EncounterImagingOrder"> | Date | string;
};
export type EncounterImagingOrderCreateManyEncounterInput = {
    id?: string;
    estudio: string;
    createdAt?: Date | string;
};
export type EncounterImagingOrderUpdateWithoutEncounterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    estudio?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EncounterImagingOrderUncheckedUpdateWithoutEncounterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    estudio?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EncounterImagingOrderUncheckedUpdateManyWithoutEncounterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    estudio?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EncounterImagingOrderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    encounterId?: boolean;
    estudio?: boolean;
    createdAt?: boolean;
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["encounterImagingOrder"]>;
export type EncounterImagingOrderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    encounterId?: boolean;
    estudio?: boolean;
    createdAt?: boolean;
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["encounterImagingOrder"]>;
export type EncounterImagingOrderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    encounterId?: boolean;
    estudio?: boolean;
    createdAt?: boolean;
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["encounterImagingOrder"]>;
export type EncounterImagingOrderSelectScalar = {
    id?: boolean;
    encounterId?: boolean;
    estudio?: boolean;
    createdAt?: boolean;
};
export type EncounterImagingOrderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "encounterId" | "estudio" | "createdAt", ExtArgs["result"]["encounterImagingOrder"]>;
export type EncounterImagingOrderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
};
export type EncounterImagingOrderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
};
export type EncounterImagingOrderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
};
export type $EncounterImagingOrderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EncounterImagingOrder";
    objects: {
        encounter: Prisma.$ClinicalEncounterPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        encounterId: string;
        estudio: string;
        createdAt: Date;
    }, ExtArgs["result"]["encounterImagingOrder"]>;
    composites: {};
};
export type EncounterImagingOrderGetPayload<S extends boolean | null | undefined | EncounterImagingOrderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EncounterImagingOrderPayload, S>;
export type EncounterImagingOrderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EncounterImagingOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EncounterImagingOrderCountAggregateInputType | true;
};
export interface EncounterImagingOrderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EncounterImagingOrder'];
        meta: {
            name: 'EncounterImagingOrder';
        };
    };
    findUnique<T extends EncounterImagingOrderFindUniqueArgs>(args: Prisma.SelectSubset<T, EncounterImagingOrderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EncounterImagingOrderClient<runtime.Types.Result.GetResult<Prisma.$EncounterImagingOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EncounterImagingOrderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EncounterImagingOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EncounterImagingOrderClient<runtime.Types.Result.GetResult<Prisma.$EncounterImagingOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EncounterImagingOrderFindFirstArgs>(args?: Prisma.SelectSubset<T, EncounterImagingOrderFindFirstArgs<ExtArgs>>): Prisma.Prisma__EncounterImagingOrderClient<runtime.Types.Result.GetResult<Prisma.$EncounterImagingOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EncounterImagingOrderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EncounterImagingOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EncounterImagingOrderClient<runtime.Types.Result.GetResult<Prisma.$EncounterImagingOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EncounterImagingOrderFindManyArgs>(args?: Prisma.SelectSubset<T, EncounterImagingOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EncounterImagingOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EncounterImagingOrderCreateArgs>(args: Prisma.SelectSubset<T, EncounterImagingOrderCreateArgs<ExtArgs>>): Prisma.Prisma__EncounterImagingOrderClient<runtime.Types.Result.GetResult<Prisma.$EncounterImagingOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EncounterImagingOrderCreateManyArgs>(args?: Prisma.SelectSubset<T, EncounterImagingOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EncounterImagingOrderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EncounterImagingOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EncounterImagingOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EncounterImagingOrderDeleteArgs>(args: Prisma.SelectSubset<T, EncounterImagingOrderDeleteArgs<ExtArgs>>): Prisma.Prisma__EncounterImagingOrderClient<runtime.Types.Result.GetResult<Prisma.$EncounterImagingOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EncounterImagingOrderUpdateArgs>(args: Prisma.SelectSubset<T, EncounterImagingOrderUpdateArgs<ExtArgs>>): Prisma.Prisma__EncounterImagingOrderClient<runtime.Types.Result.GetResult<Prisma.$EncounterImagingOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EncounterImagingOrderDeleteManyArgs>(args?: Prisma.SelectSubset<T, EncounterImagingOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EncounterImagingOrderUpdateManyArgs>(args: Prisma.SelectSubset<T, EncounterImagingOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EncounterImagingOrderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EncounterImagingOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EncounterImagingOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EncounterImagingOrderUpsertArgs>(args: Prisma.SelectSubset<T, EncounterImagingOrderUpsertArgs<ExtArgs>>): Prisma.Prisma__EncounterImagingOrderClient<runtime.Types.Result.GetResult<Prisma.$EncounterImagingOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EncounterImagingOrderCountArgs>(args?: Prisma.Subset<T, EncounterImagingOrderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EncounterImagingOrderCountAggregateOutputType> : number>;
    aggregate<T extends EncounterImagingOrderAggregateArgs>(args: Prisma.Subset<T, EncounterImagingOrderAggregateArgs>): Prisma.PrismaPromise<GetEncounterImagingOrderAggregateType<T>>;
    groupBy<T extends EncounterImagingOrderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EncounterImagingOrderGroupByArgs['orderBy'];
    } : {
        orderBy?: EncounterImagingOrderGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EncounterImagingOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEncounterImagingOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EncounterImagingOrderFieldRefs;
}
export interface Prisma__EncounterImagingOrderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    encounter<T extends Prisma.ClinicalEncounterDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClinicalEncounterDefaultArgs<ExtArgs>>): Prisma.Prisma__ClinicalEncounterClient<runtime.Types.Result.GetResult<Prisma.$ClinicalEncounterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EncounterImagingOrderFieldRefs {
    readonly id: Prisma.FieldRef<"EncounterImagingOrder", 'String'>;
    readonly encounterId: Prisma.FieldRef<"EncounterImagingOrder", 'String'>;
    readonly estudio: Prisma.FieldRef<"EncounterImagingOrder", 'String'>;
    readonly createdAt: Prisma.FieldRef<"EncounterImagingOrder", 'DateTime'>;
}
export type EncounterImagingOrderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterImagingOrderSelect<ExtArgs> | null;
    omit?: Prisma.EncounterImagingOrderOmit<ExtArgs> | null;
    include?: Prisma.EncounterImagingOrderInclude<ExtArgs> | null;
    where: Prisma.EncounterImagingOrderWhereUniqueInput;
};
export type EncounterImagingOrderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterImagingOrderSelect<ExtArgs> | null;
    omit?: Prisma.EncounterImagingOrderOmit<ExtArgs> | null;
    include?: Prisma.EncounterImagingOrderInclude<ExtArgs> | null;
    where: Prisma.EncounterImagingOrderWhereUniqueInput;
};
export type EncounterImagingOrderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterImagingOrderSelect<ExtArgs> | null;
    omit?: Prisma.EncounterImagingOrderOmit<ExtArgs> | null;
    include?: Prisma.EncounterImagingOrderInclude<ExtArgs> | null;
    where?: Prisma.EncounterImagingOrderWhereInput;
    orderBy?: Prisma.EncounterImagingOrderOrderByWithRelationInput | Prisma.EncounterImagingOrderOrderByWithRelationInput[];
    cursor?: Prisma.EncounterImagingOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EncounterImagingOrderScalarFieldEnum | Prisma.EncounterImagingOrderScalarFieldEnum[];
};
export type EncounterImagingOrderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterImagingOrderSelect<ExtArgs> | null;
    omit?: Prisma.EncounterImagingOrderOmit<ExtArgs> | null;
    include?: Prisma.EncounterImagingOrderInclude<ExtArgs> | null;
    where?: Prisma.EncounterImagingOrderWhereInput;
    orderBy?: Prisma.EncounterImagingOrderOrderByWithRelationInput | Prisma.EncounterImagingOrderOrderByWithRelationInput[];
    cursor?: Prisma.EncounterImagingOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EncounterImagingOrderScalarFieldEnum | Prisma.EncounterImagingOrderScalarFieldEnum[];
};
export type EncounterImagingOrderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterImagingOrderSelect<ExtArgs> | null;
    omit?: Prisma.EncounterImagingOrderOmit<ExtArgs> | null;
    include?: Prisma.EncounterImagingOrderInclude<ExtArgs> | null;
    where?: Prisma.EncounterImagingOrderWhereInput;
    orderBy?: Prisma.EncounterImagingOrderOrderByWithRelationInput | Prisma.EncounterImagingOrderOrderByWithRelationInput[];
    cursor?: Prisma.EncounterImagingOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EncounterImagingOrderScalarFieldEnum | Prisma.EncounterImagingOrderScalarFieldEnum[];
};
export type EncounterImagingOrderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterImagingOrderSelect<ExtArgs> | null;
    omit?: Prisma.EncounterImagingOrderOmit<ExtArgs> | null;
    include?: Prisma.EncounterImagingOrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EncounterImagingOrderCreateInput, Prisma.EncounterImagingOrderUncheckedCreateInput>;
};
export type EncounterImagingOrderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EncounterImagingOrderCreateManyInput | Prisma.EncounterImagingOrderCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EncounterImagingOrderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterImagingOrderSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EncounterImagingOrderOmit<ExtArgs> | null;
    data: Prisma.EncounterImagingOrderCreateManyInput | Prisma.EncounterImagingOrderCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EncounterImagingOrderIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EncounterImagingOrderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterImagingOrderSelect<ExtArgs> | null;
    omit?: Prisma.EncounterImagingOrderOmit<ExtArgs> | null;
    include?: Prisma.EncounterImagingOrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EncounterImagingOrderUpdateInput, Prisma.EncounterImagingOrderUncheckedUpdateInput>;
    where: Prisma.EncounterImagingOrderWhereUniqueInput;
};
export type EncounterImagingOrderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EncounterImagingOrderUpdateManyMutationInput, Prisma.EncounterImagingOrderUncheckedUpdateManyInput>;
    where?: Prisma.EncounterImagingOrderWhereInput;
    limit?: number;
};
export type EncounterImagingOrderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterImagingOrderSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EncounterImagingOrderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EncounterImagingOrderUpdateManyMutationInput, Prisma.EncounterImagingOrderUncheckedUpdateManyInput>;
    where?: Prisma.EncounterImagingOrderWhereInput;
    limit?: number;
    include?: Prisma.EncounterImagingOrderIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EncounterImagingOrderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterImagingOrderSelect<ExtArgs> | null;
    omit?: Prisma.EncounterImagingOrderOmit<ExtArgs> | null;
    include?: Prisma.EncounterImagingOrderInclude<ExtArgs> | null;
    where: Prisma.EncounterImagingOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.EncounterImagingOrderCreateInput, Prisma.EncounterImagingOrderUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EncounterImagingOrderUpdateInput, Prisma.EncounterImagingOrderUncheckedUpdateInput>;
};
export type EncounterImagingOrderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterImagingOrderSelect<ExtArgs> | null;
    omit?: Prisma.EncounterImagingOrderOmit<ExtArgs> | null;
    include?: Prisma.EncounterImagingOrderInclude<ExtArgs> | null;
    where: Prisma.EncounterImagingOrderWhereUniqueInput;
};
export type EncounterImagingOrderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EncounterImagingOrderWhereInput;
    limit?: number;
};
export type EncounterImagingOrderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterImagingOrderSelect<ExtArgs> | null;
    omit?: Prisma.EncounterImagingOrderOmit<ExtArgs> | null;
    include?: Prisma.EncounterImagingOrderInclude<ExtArgs> | null;
};

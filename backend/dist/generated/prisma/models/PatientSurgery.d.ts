import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PatientSurgeryModel = runtime.Types.Result.DefaultSelection<Prisma.$PatientSurgeryPayload>;
export type AggregatePatientSurgery = {
    _count: PatientSurgeryCountAggregateOutputType | null;
    _avg: PatientSurgeryAvgAggregateOutputType | null;
    _sum: PatientSurgerySumAggregateOutputType | null;
    _min: PatientSurgeryMinAggregateOutputType | null;
    _max: PatientSurgeryMaxAggregateOutputType | null;
};
export type PatientSurgeryAvgAggregateOutputType = {
    anoAproximado: number | null;
};
export type PatientSurgerySumAggregateOutputType = {
    anoAproximado: number | null;
};
export type PatientSurgeryMinAggregateOutputType = {
    id: string | null;
    backgroundId: string | null;
    tipoCirugia: string | null;
    anoAproximado: number | null;
    createdAt: Date | null;
};
export type PatientSurgeryMaxAggregateOutputType = {
    id: string | null;
    backgroundId: string | null;
    tipoCirugia: string | null;
    anoAproximado: number | null;
    createdAt: Date | null;
};
export type PatientSurgeryCountAggregateOutputType = {
    id: number;
    backgroundId: number;
    tipoCirugia: number;
    anoAproximado: number;
    createdAt: number;
    _all: number;
};
export type PatientSurgeryAvgAggregateInputType = {
    anoAproximado?: true;
};
export type PatientSurgerySumAggregateInputType = {
    anoAproximado?: true;
};
export type PatientSurgeryMinAggregateInputType = {
    id?: true;
    backgroundId?: true;
    tipoCirugia?: true;
    anoAproximado?: true;
    createdAt?: true;
};
export type PatientSurgeryMaxAggregateInputType = {
    id?: true;
    backgroundId?: true;
    tipoCirugia?: true;
    anoAproximado?: true;
    createdAt?: true;
};
export type PatientSurgeryCountAggregateInputType = {
    id?: true;
    backgroundId?: true;
    tipoCirugia?: true;
    anoAproximado?: true;
    createdAt?: true;
    _all?: true;
};
export type PatientSurgeryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientSurgeryWhereInput;
    orderBy?: Prisma.PatientSurgeryOrderByWithRelationInput | Prisma.PatientSurgeryOrderByWithRelationInput[];
    cursor?: Prisma.PatientSurgeryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PatientSurgeryCountAggregateInputType;
    _avg?: PatientSurgeryAvgAggregateInputType;
    _sum?: PatientSurgerySumAggregateInputType;
    _min?: PatientSurgeryMinAggregateInputType;
    _max?: PatientSurgeryMaxAggregateInputType;
};
export type GetPatientSurgeryAggregateType<T extends PatientSurgeryAggregateArgs> = {
    [P in keyof T & keyof AggregatePatientSurgery]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePatientSurgery[P]> : Prisma.GetScalarType<T[P], AggregatePatientSurgery[P]>;
};
export type PatientSurgeryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientSurgeryWhereInput;
    orderBy?: Prisma.PatientSurgeryOrderByWithAggregationInput | Prisma.PatientSurgeryOrderByWithAggregationInput[];
    by: Prisma.PatientSurgeryScalarFieldEnum[] | Prisma.PatientSurgeryScalarFieldEnum;
    having?: Prisma.PatientSurgeryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PatientSurgeryCountAggregateInputType | true;
    _avg?: PatientSurgeryAvgAggregateInputType;
    _sum?: PatientSurgerySumAggregateInputType;
    _min?: PatientSurgeryMinAggregateInputType;
    _max?: PatientSurgeryMaxAggregateInputType;
};
export type PatientSurgeryGroupByOutputType = {
    id: string;
    backgroundId: string;
    tipoCirugia: string;
    anoAproximado: number | null;
    createdAt: Date;
    _count: PatientSurgeryCountAggregateOutputType | null;
    _avg: PatientSurgeryAvgAggregateOutputType | null;
    _sum: PatientSurgerySumAggregateOutputType | null;
    _min: PatientSurgeryMinAggregateOutputType | null;
    _max: PatientSurgeryMaxAggregateOutputType | null;
};
export type GetPatientSurgeryGroupByPayload<T extends PatientSurgeryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PatientSurgeryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PatientSurgeryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PatientSurgeryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PatientSurgeryGroupByOutputType[P]>;
}>>;
export type PatientSurgeryWhereInput = {
    AND?: Prisma.PatientSurgeryWhereInput | Prisma.PatientSurgeryWhereInput[];
    OR?: Prisma.PatientSurgeryWhereInput[];
    NOT?: Prisma.PatientSurgeryWhereInput | Prisma.PatientSurgeryWhereInput[];
    id?: Prisma.StringFilter<"PatientSurgery"> | string;
    backgroundId?: Prisma.StringFilter<"PatientSurgery"> | string;
    tipoCirugia?: Prisma.StringFilter<"PatientSurgery"> | string;
    anoAproximado?: Prisma.IntNullableFilter<"PatientSurgery"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"PatientSurgery"> | Date | string;
    background?: Prisma.XOR<Prisma.PatientBackgroundScalarRelationFilter, Prisma.PatientBackgroundWhereInput>;
};
export type PatientSurgeryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    backgroundId?: Prisma.SortOrder;
    tipoCirugia?: Prisma.SortOrder;
    anoAproximado?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    background?: Prisma.PatientBackgroundOrderByWithRelationInput;
};
export type PatientSurgeryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PatientSurgeryWhereInput | Prisma.PatientSurgeryWhereInput[];
    OR?: Prisma.PatientSurgeryWhereInput[];
    NOT?: Prisma.PatientSurgeryWhereInput | Prisma.PatientSurgeryWhereInput[];
    backgroundId?: Prisma.StringFilter<"PatientSurgery"> | string;
    tipoCirugia?: Prisma.StringFilter<"PatientSurgery"> | string;
    anoAproximado?: Prisma.IntNullableFilter<"PatientSurgery"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"PatientSurgery"> | Date | string;
    background?: Prisma.XOR<Prisma.PatientBackgroundScalarRelationFilter, Prisma.PatientBackgroundWhereInput>;
}, "id">;
export type PatientSurgeryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    backgroundId?: Prisma.SortOrder;
    tipoCirugia?: Prisma.SortOrder;
    anoAproximado?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PatientSurgeryCountOrderByAggregateInput;
    _avg?: Prisma.PatientSurgeryAvgOrderByAggregateInput;
    _max?: Prisma.PatientSurgeryMaxOrderByAggregateInput;
    _min?: Prisma.PatientSurgeryMinOrderByAggregateInput;
    _sum?: Prisma.PatientSurgerySumOrderByAggregateInput;
};
export type PatientSurgeryScalarWhereWithAggregatesInput = {
    AND?: Prisma.PatientSurgeryScalarWhereWithAggregatesInput | Prisma.PatientSurgeryScalarWhereWithAggregatesInput[];
    OR?: Prisma.PatientSurgeryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PatientSurgeryScalarWhereWithAggregatesInput | Prisma.PatientSurgeryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PatientSurgery"> | string;
    backgroundId?: Prisma.StringWithAggregatesFilter<"PatientSurgery"> | string;
    tipoCirugia?: Prisma.StringWithAggregatesFilter<"PatientSurgery"> | string;
    anoAproximado?: Prisma.IntNullableWithAggregatesFilter<"PatientSurgery"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PatientSurgery"> | Date | string;
};
export type PatientSurgeryCreateInput = {
    id?: string;
    tipoCirugia: string;
    anoAproximado?: number | null;
    createdAt?: Date | string;
    background: Prisma.PatientBackgroundCreateNestedOneWithoutSurgeriesInput;
};
export type PatientSurgeryUncheckedCreateInput = {
    id?: string;
    backgroundId: string;
    tipoCirugia: string;
    anoAproximado?: number | null;
    createdAt?: Date | string;
};
export type PatientSurgeryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoCirugia?: Prisma.StringFieldUpdateOperationsInput | string;
    anoAproximado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    background?: Prisma.PatientBackgroundUpdateOneRequiredWithoutSurgeriesNestedInput;
};
export type PatientSurgeryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    backgroundId?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoCirugia?: Prisma.StringFieldUpdateOperationsInput | string;
    anoAproximado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientSurgeryCreateManyInput = {
    id?: string;
    backgroundId: string;
    tipoCirugia: string;
    anoAproximado?: number | null;
    createdAt?: Date | string;
};
export type PatientSurgeryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoCirugia?: Prisma.StringFieldUpdateOperationsInput | string;
    anoAproximado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientSurgeryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    backgroundId?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoCirugia?: Prisma.StringFieldUpdateOperationsInput | string;
    anoAproximado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientSurgeryListRelationFilter = {
    every?: Prisma.PatientSurgeryWhereInput;
    some?: Prisma.PatientSurgeryWhereInput;
    none?: Prisma.PatientSurgeryWhereInput;
};
export type PatientSurgeryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PatientSurgeryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    backgroundId?: Prisma.SortOrder;
    tipoCirugia?: Prisma.SortOrder;
    anoAproximado?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PatientSurgeryAvgOrderByAggregateInput = {
    anoAproximado?: Prisma.SortOrder;
};
export type PatientSurgeryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    backgroundId?: Prisma.SortOrder;
    tipoCirugia?: Prisma.SortOrder;
    anoAproximado?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PatientSurgeryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    backgroundId?: Prisma.SortOrder;
    tipoCirugia?: Prisma.SortOrder;
    anoAproximado?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PatientSurgerySumOrderByAggregateInput = {
    anoAproximado?: Prisma.SortOrder;
};
export type PatientSurgeryCreateNestedManyWithoutBackgroundInput = {
    create?: Prisma.XOR<Prisma.PatientSurgeryCreateWithoutBackgroundInput, Prisma.PatientSurgeryUncheckedCreateWithoutBackgroundInput> | Prisma.PatientSurgeryCreateWithoutBackgroundInput[] | Prisma.PatientSurgeryUncheckedCreateWithoutBackgroundInput[];
    connectOrCreate?: Prisma.PatientSurgeryCreateOrConnectWithoutBackgroundInput | Prisma.PatientSurgeryCreateOrConnectWithoutBackgroundInput[];
    createMany?: Prisma.PatientSurgeryCreateManyBackgroundInputEnvelope;
    connect?: Prisma.PatientSurgeryWhereUniqueInput | Prisma.PatientSurgeryWhereUniqueInput[];
};
export type PatientSurgeryUncheckedCreateNestedManyWithoutBackgroundInput = {
    create?: Prisma.XOR<Prisma.PatientSurgeryCreateWithoutBackgroundInput, Prisma.PatientSurgeryUncheckedCreateWithoutBackgroundInput> | Prisma.PatientSurgeryCreateWithoutBackgroundInput[] | Prisma.PatientSurgeryUncheckedCreateWithoutBackgroundInput[];
    connectOrCreate?: Prisma.PatientSurgeryCreateOrConnectWithoutBackgroundInput | Prisma.PatientSurgeryCreateOrConnectWithoutBackgroundInput[];
    createMany?: Prisma.PatientSurgeryCreateManyBackgroundInputEnvelope;
    connect?: Prisma.PatientSurgeryWhereUniqueInput | Prisma.PatientSurgeryWhereUniqueInput[];
};
export type PatientSurgeryUpdateManyWithoutBackgroundNestedInput = {
    create?: Prisma.XOR<Prisma.PatientSurgeryCreateWithoutBackgroundInput, Prisma.PatientSurgeryUncheckedCreateWithoutBackgroundInput> | Prisma.PatientSurgeryCreateWithoutBackgroundInput[] | Prisma.PatientSurgeryUncheckedCreateWithoutBackgroundInput[];
    connectOrCreate?: Prisma.PatientSurgeryCreateOrConnectWithoutBackgroundInput | Prisma.PatientSurgeryCreateOrConnectWithoutBackgroundInput[];
    upsert?: Prisma.PatientSurgeryUpsertWithWhereUniqueWithoutBackgroundInput | Prisma.PatientSurgeryUpsertWithWhereUniqueWithoutBackgroundInput[];
    createMany?: Prisma.PatientSurgeryCreateManyBackgroundInputEnvelope;
    set?: Prisma.PatientSurgeryWhereUniqueInput | Prisma.PatientSurgeryWhereUniqueInput[];
    disconnect?: Prisma.PatientSurgeryWhereUniqueInput | Prisma.PatientSurgeryWhereUniqueInput[];
    delete?: Prisma.PatientSurgeryWhereUniqueInput | Prisma.PatientSurgeryWhereUniqueInput[];
    connect?: Prisma.PatientSurgeryWhereUniqueInput | Prisma.PatientSurgeryWhereUniqueInput[];
    update?: Prisma.PatientSurgeryUpdateWithWhereUniqueWithoutBackgroundInput | Prisma.PatientSurgeryUpdateWithWhereUniqueWithoutBackgroundInput[];
    updateMany?: Prisma.PatientSurgeryUpdateManyWithWhereWithoutBackgroundInput | Prisma.PatientSurgeryUpdateManyWithWhereWithoutBackgroundInput[];
    deleteMany?: Prisma.PatientSurgeryScalarWhereInput | Prisma.PatientSurgeryScalarWhereInput[];
};
export type PatientSurgeryUncheckedUpdateManyWithoutBackgroundNestedInput = {
    create?: Prisma.XOR<Prisma.PatientSurgeryCreateWithoutBackgroundInput, Prisma.PatientSurgeryUncheckedCreateWithoutBackgroundInput> | Prisma.PatientSurgeryCreateWithoutBackgroundInput[] | Prisma.PatientSurgeryUncheckedCreateWithoutBackgroundInput[];
    connectOrCreate?: Prisma.PatientSurgeryCreateOrConnectWithoutBackgroundInput | Prisma.PatientSurgeryCreateOrConnectWithoutBackgroundInput[];
    upsert?: Prisma.PatientSurgeryUpsertWithWhereUniqueWithoutBackgroundInput | Prisma.PatientSurgeryUpsertWithWhereUniqueWithoutBackgroundInput[];
    createMany?: Prisma.PatientSurgeryCreateManyBackgroundInputEnvelope;
    set?: Prisma.PatientSurgeryWhereUniqueInput | Prisma.PatientSurgeryWhereUniqueInput[];
    disconnect?: Prisma.PatientSurgeryWhereUniqueInput | Prisma.PatientSurgeryWhereUniqueInput[];
    delete?: Prisma.PatientSurgeryWhereUniqueInput | Prisma.PatientSurgeryWhereUniqueInput[];
    connect?: Prisma.PatientSurgeryWhereUniqueInput | Prisma.PatientSurgeryWhereUniqueInput[];
    update?: Prisma.PatientSurgeryUpdateWithWhereUniqueWithoutBackgroundInput | Prisma.PatientSurgeryUpdateWithWhereUniqueWithoutBackgroundInput[];
    updateMany?: Prisma.PatientSurgeryUpdateManyWithWhereWithoutBackgroundInput | Prisma.PatientSurgeryUpdateManyWithWhereWithoutBackgroundInput[];
    deleteMany?: Prisma.PatientSurgeryScalarWhereInput | Prisma.PatientSurgeryScalarWhereInput[];
};
export type PatientSurgeryCreateWithoutBackgroundInput = {
    id?: string;
    tipoCirugia: string;
    anoAproximado?: number | null;
    createdAt?: Date | string;
};
export type PatientSurgeryUncheckedCreateWithoutBackgroundInput = {
    id?: string;
    tipoCirugia: string;
    anoAproximado?: number | null;
    createdAt?: Date | string;
};
export type PatientSurgeryCreateOrConnectWithoutBackgroundInput = {
    where: Prisma.PatientSurgeryWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientSurgeryCreateWithoutBackgroundInput, Prisma.PatientSurgeryUncheckedCreateWithoutBackgroundInput>;
};
export type PatientSurgeryCreateManyBackgroundInputEnvelope = {
    data: Prisma.PatientSurgeryCreateManyBackgroundInput | Prisma.PatientSurgeryCreateManyBackgroundInput[];
    skipDuplicates?: boolean;
};
export type PatientSurgeryUpsertWithWhereUniqueWithoutBackgroundInput = {
    where: Prisma.PatientSurgeryWhereUniqueInput;
    update: Prisma.XOR<Prisma.PatientSurgeryUpdateWithoutBackgroundInput, Prisma.PatientSurgeryUncheckedUpdateWithoutBackgroundInput>;
    create: Prisma.XOR<Prisma.PatientSurgeryCreateWithoutBackgroundInput, Prisma.PatientSurgeryUncheckedCreateWithoutBackgroundInput>;
};
export type PatientSurgeryUpdateWithWhereUniqueWithoutBackgroundInput = {
    where: Prisma.PatientSurgeryWhereUniqueInput;
    data: Prisma.XOR<Prisma.PatientSurgeryUpdateWithoutBackgroundInput, Prisma.PatientSurgeryUncheckedUpdateWithoutBackgroundInput>;
};
export type PatientSurgeryUpdateManyWithWhereWithoutBackgroundInput = {
    where: Prisma.PatientSurgeryScalarWhereInput;
    data: Prisma.XOR<Prisma.PatientSurgeryUpdateManyMutationInput, Prisma.PatientSurgeryUncheckedUpdateManyWithoutBackgroundInput>;
};
export type PatientSurgeryScalarWhereInput = {
    AND?: Prisma.PatientSurgeryScalarWhereInput | Prisma.PatientSurgeryScalarWhereInput[];
    OR?: Prisma.PatientSurgeryScalarWhereInput[];
    NOT?: Prisma.PatientSurgeryScalarWhereInput | Prisma.PatientSurgeryScalarWhereInput[];
    id?: Prisma.StringFilter<"PatientSurgery"> | string;
    backgroundId?: Prisma.StringFilter<"PatientSurgery"> | string;
    tipoCirugia?: Prisma.StringFilter<"PatientSurgery"> | string;
    anoAproximado?: Prisma.IntNullableFilter<"PatientSurgery"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"PatientSurgery"> | Date | string;
};
export type PatientSurgeryCreateManyBackgroundInput = {
    id?: string;
    tipoCirugia: string;
    anoAproximado?: number | null;
    createdAt?: Date | string;
};
export type PatientSurgeryUpdateWithoutBackgroundInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoCirugia?: Prisma.StringFieldUpdateOperationsInput | string;
    anoAproximado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientSurgeryUncheckedUpdateWithoutBackgroundInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoCirugia?: Prisma.StringFieldUpdateOperationsInput | string;
    anoAproximado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientSurgeryUncheckedUpdateManyWithoutBackgroundInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoCirugia?: Prisma.StringFieldUpdateOperationsInput | string;
    anoAproximado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientSurgerySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    backgroundId?: boolean;
    tipoCirugia?: boolean;
    anoAproximado?: boolean;
    createdAt?: boolean;
    background?: boolean | Prisma.PatientBackgroundDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patientSurgery"]>;
export type PatientSurgerySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    backgroundId?: boolean;
    tipoCirugia?: boolean;
    anoAproximado?: boolean;
    createdAt?: boolean;
    background?: boolean | Prisma.PatientBackgroundDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patientSurgery"]>;
export type PatientSurgerySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    backgroundId?: boolean;
    tipoCirugia?: boolean;
    anoAproximado?: boolean;
    createdAt?: boolean;
    background?: boolean | Prisma.PatientBackgroundDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patientSurgery"]>;
export type PatientSurgerySelectScalar = {
    id?: boolean;
    backgroundId?: boolean;
    tipoCirugia?: boolean;
    anoAproximado?: boolean;
    createdAt?: boolean;
};
export type PatientSurgeryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "backgroundId" | "tipoCirugia" | "anoAproximado" | "createdAt", ExtArgs["result"]["patientSurgery"]>;
export type PatientSurgeryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    background?: boolean | Prisma.PatientBackgroundDefaultArgs<ExtArgs>;
};
export type PatientSurgeryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    background?: boolean | Prisma.PatientBackgroundDefaultArgs<ExtArgs>;
};
export type PatientSurgeryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    background?: boolean | Prisma.PatientBackgroundDefaultArgs<ExtArgs>;
};
export type $PatientSurgeryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PatientSurgery";
    objects: {
        background: Prisma.$PatientBackgroundPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        backgroundId: string;
        tipoCirugia: string;
        anoAproximado: number | null;
        createdAt: Date;
    }, ExtArgs["result"]["patientSurgery"]>;
    composites: {};
};
export type PatientSurgeryGetPayload<S extends boolean | null | undefined | PatientSurgeryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PatientSurgeryPayload, S>;
export type PatientSurgeryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PatientSurgeryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PatientSurgeryCountAggregateInputType | true;
};
export interface PatientSurgeryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PatientSurgery'];
        meta: {
            name: 'PatientSurgery';
        };
    };
    findUnique<T extends PatientSurgeryFindUniqueArgs>(args: Prisma.SelectSubset<T, PatientSurgeryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PatientSurgeryClient<runtime.Types.Result.GetResult<Prisma.$PatientSurgeryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PatientSurgeryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PatientSurgeryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PatientSurgeryClient<runtime.Types.Result.GetResult<Prisma.$PatientSurgeryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PatientSurgeryFindFirstArgs>(args?: Prisma.SelectSubset<T, PatientSurgeryFindFirstArgs<ExtArgs>>): Prisma.Prisma__PatientSurgeryClient<runtime.Types.Result.GetResult<Prisma.$PatientSurgeryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PatientSurgeryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PatientSurgeryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PatientSurgeryClient<runtime.Types.Result.GetResult<Prisma.$PatientSurgeryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PatientSurgeryFindManyArgs>(args?: Prisma.SelectSubset<T, PatientSurgeryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientSurgeryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PatientSurgeryCreateArgs>(args: Prisma.SelectSubset<T, PatientSurgeryCreateArgs<ExtArgs>>): Prisma.Prisma__PatientSurgeryClient<runtime.Types.Result.GetResult<Prisma.$PatientSurgeryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PatientSurgeryCreateManyArgs>(args?: Prisma.SelectSubset<T, PatientSurgeryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PatientSurgeryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PatientSurgeryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientSurgeryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PatientSurgeryDeleteArgs>(args: Prisma.SelectSubset<T, PatientSurgeryDeleteArgs<ExtArgs>>): Prisma.Prisma__PatientSurgeryClient<runtime.Types.Result.GetResult<Prisma.$PatientSurgeryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PatientSurgeryUpdateArgs>(args: Prisma.SelectSubset<T, PatientSurgeryUpdateArgs<ExtArgs>>): Prisma.Prisma__PatientSurgeryClient<runtime.Types.Result.GetResult<Prisma.$PatientSurgeryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PatientSurgeryDeleteManyArgs>(args?: Prisma.SelectSubset<T, PatientSurgeryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PatientSurgeryUpdateManyArgs>(args: Prisma.SelectSubset<T, PatientSurgeryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PatientSurgeryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PatientSurgeryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientSurgeryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PatientSurgeryUpsertArgs>(args: Prisma.SelectSubset<T, PatientSurgeryUpsertArgs<ExtArgs>>): Prisma.Prisma__PatientSurgeryClient<runtime.Types.Result.GetResult<Prisma.$PatientSurgeryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PatientSurgeryCountArgs>(args?: Prisma.Subset<T, PatientSurgeryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PatientSurgeryCountAggregateOutputType> : number>;
    aggregate<T extends PatientSurgeryAggregateArgs>(args: Prisma.Subset<T, PatientSurgeryAggregateArgs>): Prisma.PrismaPromise<GetPatientSurgeryAggregateType<T>>;
    groupBy<T extends PatientSurgeryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PatientSurgeryGroupByArgs['orderBy'];
    } : {
        orderBy?: PatientSurgeryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PatientSurgeryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientSurgeryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PatientSurgeryFieldRefs;
}
export interface Prisma__PatientSurgeryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    background<T extends Prisma.PatientBackgroundDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PatientBackgroundDefaultArgs<ExtArgs>>): Prisma.Prisma__PatientBackgroundClient<runtime.Types.Result.GetResult<Prisma.$PatientBackgroundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PatientSurgeryFieldRefs {
    readonly id: Prisma.FieldRef<"PatientSurgery", 'String'>;
    readonly backgroundId: Prisma.FieldRef<"PatientSurgery", 'String'>;
    readonly tipoCirugia: Prisma.FieldRef<"PatientSurgery", 'String'>;
    readonly anoAproximado: Prisma.FieldRef<"PatientSurgery", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"PatientSurgery", 'DateTime'>;
}
export type PatientSurgeryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSurgerySelect<ExtArgs> | null;
    omit?: Prisma.PatientSurgeryOmit<ExtArgs> | null;
    include?: Prisma.PatientSurgeryInclude<ExtArgs> | null;
    where: Prisma.PatientSurgeryWhereUniqueInput;
};
export type PatientSurgeryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSurgerySelect<ExtArgs> | null;
    omit?: Prisma.PatientSurgeryOmit<ExtArgs> | null;
    include?: Prisma.PatientSurgeryInclude<ExtArgs> | null;
    where: Prisma.PatientSurgeryWhereUniqueInput;
};
export type PatientSurgeryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSurgerySelect<ExtArgs> | null;
    omit?: Prisma.PatientSurgeryOmit<ExtArgs> | null;
    include?: Prisma.PatientSurgeryInclude<ExtArgs> | null;
    where?: Prisma.PatientSurgeryWhereInput;
    orderBy?: Prisma.PatientSurgeryOrderByWithRelationInput | Prisma.PatientSurgeryOrderByWithRelationInput[];
    cursor?: Prisma.PatientSurgeryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientSurgeryScalarFieldEnum | Prisma.PatientSurgeryScalarFieldEnum[];
};
export type PatientSurgeryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSurgerySelect<ExtArgs> | null;
    omit?: Prisma.PatientSurgeryOmit<ExtArgs> | null;
    include?: Prisma.PatientSurgeryInclude<ExtArgs> | null;
    where?: Prisma.PatientSurgeryWhereInput;
    orderBy?: Prisma.PatientSurgeryOrderByWithRelationInput | Prisma.PatientSurgeryOrderByWithRelationInput[];
    cursor?: Prisma.PatientSurgeryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientSurgeryScalarFieldEnum | Prisma.PatientSurgeryScalarFieldEnum[];
};
export type PatientSurgeryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSurgerySelect<ExtArgs> | null;
    omit?: Prisma.PatientSurgeryOmit<ExtArgs> | null;
    include?: Prisma.PatientSurgeryInclude<ExtArgs> | null;
    where?: Prisma.PatientSurgeryWhereInput;
    orderBy?: Prisma.PatientSurgeryOrderByWithRelationInput | Prisma.PatientSurgeryOrderByWithRelationInput[];
    cursor?: Prisma.PatientSurgeryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientSurgeryScalarFieldEnum | Prisma.PatientSurgeryScalarFieldEnum[];
};
export type PatientSurgeryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSurgerySelect<ExtArgs> | null;
    omit?: Prisma.PatientSurgeryOmit<ExtArgs> | null;
    include?: Prisma.PatientSurgeryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientSurgeryCreateInput, Prisma.PatientSurgeryUncheckedCreateInput>;
};
export type PatientSurgeryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PatientSurgeryCreateManyInput | Prisma.PatientSurgeryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PatientSurgeryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSurgerySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PatientSurgeryOmit<ExtArgs> | null;
    data: Prisma.PatientSurgeryCreateManyInput | Prisma.PatientSurgeryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PatientSurgeryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PatientSurgeryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSurgerySelect<ExtArgs> | null;
    omit?: Prisma.PatientSurgeryOmit<ExtArgs> | null;
    include?: Prisma.PatientSurgeryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientSurgeryUpdateInput, Prisma.PatientSurgeryUncheckedUpdateInput>;
    where: Prisma.PatientSurgeryWhereUniqueInput;
};
export type PatientSurgeryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PatientSurgeryUpdateManyMutationInput, Prisma.PatientSurgeryUncheckedUpdateManyInput>;
    where?: Prisma.PatientSurgeryWhereInput;
    limit?: number;
};
export type PatientSurgeryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSurgerySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PatientSurgeryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientSurgeryUpdateManyMutationInput, Prisma.PatientSurgeryUncheckedUpdateManyInput>;
    where?: Prisma.PatientSurgeryWhereInput;
    limit?: number;
    include?: Prisma.PatientSurgeryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PatientSurgeryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSurgerySelect<ExtArgs> | null;
    omit?: Prisma.PatientSurgeryOmit<ExtArgs> | null;
    include?: Prisma.PatientSurgeryInclude<ExtArgs> | null;
    where: Prisma.PatientSurgeryWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientSurgeryCreateInput, Prisma.PatientSurgeryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PatientSurgeryUpdateInput, Prisma.PatientSurgeryUncheckedUpdateInput>;
};
export type PatientSurgeryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSurgerySelect<ExtArgs> | null;
    omit?: Prisma.PatientSurgeryOmit<ExtArgs> | null;
    include?: Prisma.PatientSurgeryInclude<ExtArgs> | null;
    where: Prisma.PatientSurgeryWhereUniqueInput;
};
export type PatientSurgeryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientSurgeryWhereInput;
    limit?: number;
};
export type PatientSurgeryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientSurgerySelect<ExtArgs> | null;
    omit?: Prisma.PatientSurgeryOmit<ExtArgs> | null;
    include?: Prisma.PatientSurgeryInclude<ExtArgs> | null;
};

import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PatientChronicConditionModel = runtime.Types.Result.DefaultSelection<Prisma.$PatientChronicConditionPayload>;
export type AggregatePatientChronicCondition = {
    _count: PatientChronicConditionCountAggregateOutputType | null;
    _min: PatientChronicConditionMinAggregateOutputType | null;
    _max: PatientChronicConditionMaxAggregateOutputType | null;
};
export type PatientChronicConditionMinAggregateOutputType = {
    id: string | null;
    backgroundId: string | null;
    tipo: $Enums.ChronicConditionType | null;
    detalleOtra: string | null;
    createdAt: Date | null;
};
export type PatientChronicConditionMaxAggregateOutputType = {
    id: string | null;
    backgroundId: string | null;
    tipo: $Enums.ChronicConditionType | null;
    detalleOtra: string | null;
    createdAt: Date | null;
};
export type PatientChronicConditionCountAggregateOutputType = {
    id: number;
    backgroundId: number;
    tipo: number;
    detalleOtra: number;
    createdAt: number;
    _all: number;
};
export type PatientChronicConditionMinAggregateInputType = {
    id?: true;
    backgroundId?: true;
    tipo?: true;
    detalleOtra?: true;
    createdAt?: true;
};
export type PatientChronicConditionMaxAggregateInputType = {
    id?: true;
    backgroundId?: true;
    tipo?: true;
    detalleOtra?: true;
    createdAt?: true;
};
export type PatientChronicConditionCountAggregateInputType = {
    id?: true;
    backgroundId?: true;
    tipo?: true;
    detalleOtra?: true;
    createdAt?: true;
    _all?: true;
};
export type PatientChronicConditionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientChronicConditionWhereInput;
    orderBy?: Prisma.PatientChronicConditionOrderByWithRelationInput | Prisma.PatientChronicConditionOrderByWithRelationInput[];
    cursor?: Prisma.PatientChronicConditionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PatientChronicConditionCountAggregateInputType;
    _min?: PatientChronicConditionMinAggregateInputType;
    _max?: PatientChronicConditionMaxAggregateInputType;
};
export type GetPatientChronicConditionAggregateType<T extends PatientChronicConditionAggregateArgs> = {
    [P in keyof T & keyof AggregatePatientChronicCondition]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePatientChronicCondition[P]> : Prisma.GetScalarType<T[P], AggregatePatientChronicCondition[P]>;
};
export type PatientChronicConditionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientChronicConditionWhereInput;
    orderBy?: Prisma.PatientChronicConditionOrderByWithAggregationInput | Prisma.PatientChronicConditionOrderByWithAggregationInput[];
    by: Prisma.PatientChronicConditionScalarFieldEnum[] | Prisma.PatientChronicConditionScalarFieldEnum;
    having?: Prisma.PatientChronicConditionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PatientChronicConditionCountAggregateInputType | true;
    _min?: PatientChronicConditionMinAggregateInputType;
    _max?: PatientChronicConditionMaxAggregateInputType;
};
export type PatientChronicConditionGroupByOutputType = {
    id: string;
    backgroundId: string;
    tipo: $Enums.ChronicConditionType;
    detalleOtra: string | null;
    createdAt: Date;
    _count: PatientChronicConditionCountAggregateOutputType | null;
    _min: PatientChronicConditionMinAggregateOutputType | null;
    _max: PatientChronicConditionMaxAggregateOutputType | null;
};
export type GetPatientChronicConditionGroupByPayload<T extends PatientChronicConditionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PatientChronicConditionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PatientChronicConditionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PatientChronicConditionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PatientChronicConditionGroupByOutputType[P]>;
}>>;
export type PatientChronicConditionWhereInput = {
    AND?: Prisma.PatientChronicConditionWhereInput | Prisma.PatientChronicConditionWhereInput[];
    OR?: Prisma.PatientChronicConditionWhereInput[];
    NOT?: Prisma.PatientChronicConditionWhereInput | Prisma.PatientChronicConditionWhereInput[];
    id?: Prisma.StringFilter<"PatientChronicCondition"> | string;
    backgroundId?: Prisma.StringFilter<"PatientChronicCondition"> | string;
    tipo?: Prisma.EnumChronicConditionTypeFilter<"PatientChronicCondition"> | $Enums.ChronicConditionType;
    detalleOtra?: Prisma.StringNullableFilter<"PatientChronicCondition"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PatientChronicCondition"> | Date | string;
    background?: Prisma.XOR<Prisma.PatientBackgroundScalarRelationFilter, Prisma.PatientBackgroundWhereInput>;
};
export type PatientChronicConditionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    backgroundId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    detalleOtra?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    background?: Prisma.PatientBackgroundOrderByWithRelationInput;
};
export type PatientChronicConditionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PatientChronicConditionWhereInput | Prisma.PatientChronicConditionWhereInput[];
    OR?: Prisma.PatientChronicConditionWhereInput[];
    NOT?: Prisma.PatientChronicConditionWhereInput | Prisma.PatientChronicConditionWhereInput[];
    backgroundId?: Prisma.StringFilter<"PatientChronicCondition"> | string;
    tipo?: Prisma.EnumChronicConditionTypeFilter<"PatientChronicCondition"> | $Enums.ChronicConditionType;
    detalleOtra?: Prisma.StringNullableFilter<"PatientChronicCondition"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PatientChronicCondition"> | Date | string;
    background?: Prisma.XOR<Prisma.PatientBackgroundScalarRelationFilter, Prisma.PatientBackgroundWhereInput>;
}, "id">;
export type PatientChronicConditionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    backgroundId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    detalleOtra?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PatientChronicConditionCountOrderByAggregateInput;
    _max?: Prisma.PatientChronicConditionMaxOrderByAggregateInput;
    _min?: Prisma.PatientChronicConditionMinOrderByAggregateInput;
};
export type PatientChronicConditionScalarWhereWithAggregatesInput = {
    AND?: Prisma.PatientChronicConditionScalarWhereWithAggregatesInput | Prisma.PatientChronicConditionScalarWhereWithAggregatesInput[];
    OR?: Prisma.PatientChronicConditionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PatientChronicConditionScalarWhereWithAggregatesInput | Prisma.PatientChronicConditionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PatientChronicCondition"> | string;
    backgroundId?: Prisma.StringWithAggregatesFilter<"PatientChronicCondition"> | string;
    tipo?: Prisma.EnumChronicConditionTypeWithAggregatesFilter<"PatientChronicCondition"> | $Enums.ChronicConditionType;
    detalleOtra?: Prisma.StringNullableWithAggregatesFilter<"PatientChronicCondition"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PatientChronicCondition"> | Date | string;
};
export type PatientChronicConditionCreateInput = {
    id?: string;
    tipo: $Enums.ChronicConditionType;
    detalleOtra?: string | null;
    createdAt?: Date | string;
    background: Prisma.PatientBackgroundCreateNestedOneWithoutChronicConditionsInput;
};
export type PatientChronicConditionUncheckedCreateInput = {
    id?: string;
    backgroundId: string;
    tipo: $Enums.ChronicConditionType;
    detalleOtra?: string | null;
    createdAt?: Date | string;
};
export type PatientChronicConditionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumChronicConditionTypeFieldUpdateOperationsInput | $Enums.ChronicConditionType;
    detalleOtra?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    background?: Prisma.PatientBackgroundUpdateOneRequiredWithoutChronicConditionsNestedInput;
};
export type PatientChronicConditionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    backgroundId?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumChronicConditionTypeFieldUpdateOperationsInput | $Enums.ChronicConditionType;
    detalleOtra?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientChronicConditionCreateManyInput = {
    id?: string;
    backgroundId: string;
    tipo: $Enums.ChronicConditionType;
    detalleOtra?: string | null;
    createdAt?: Date | string;
};
export type PatientChronicConditionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumChronicConditionTypeFieldUpdateOperationsInput | $Enums.ChronicConditionType;
    detalleOtra?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientChronicConditionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    backgroundId?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumChronicConditionTypeFieldUpdateOperationsInput | $Enums.ChronicConditionType;
    detalleOtra?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientChronicConditionListRelationFilter = {
    every?: Prisma.PatientChronicConditionWhereInput;
    some?: Prisma.PatientChronicConditionWhereInput;
    none?: Prisma.PatientChronicConditionWhereInput;
};
export type PatientChronicConditionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PatientChronicConditionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    backgroundId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    detalleOtra?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PatientChronicConditionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    backgroundId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    detalleOtra?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PatientChronicConditionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    backgroundId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    detalleOtra?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PatientChronicConditionCreateNestedManyWithoutBackgroundInput = {
    create?: Prisma.XOR<Prisma.PatientChronicConditionCreateWithoutBackgroundInput, Prisma.PatientChronicConditionUncheckedCreateWithoutBackgroundInput> | Prisma.PatientChronicConditionCreateWithoutBackgroundInput[] | Prisma.PatientChronicConditionUncheckedCreateWithoutBackgroundInput[];
    connectOrCreate?: Prisma.PatientChronicConditionCreateOrConnectWithoutBackgroundInput | Prisma.PatientChronicConditionCreateOrConnectWithoutBackgroundInput[];
    createMany?: Prisma.PatientChronicConditionCreateManyBackgroundInputEnvelope;
    connect?: Prisma.PatientChronicConditionWhereUniqueInput | Prisma.PatientChronicConditionWhereUniqueInput[];
};
export type PatientChronicConditionUncheckedCreateNestedManyWithoutBackgroundInput = {
    create?: Prisma.XOR<Prisma.PatientChronicConditionCreateWithoutBackgroundInput, Prisma.PatientChronicConditionUncheckedCreateWithoutBackgroundInput> | Prisma.PatientChronicConditionCreateWithoutBackgroundInput[] | Prisma.PatientChronicConditionUncheckedCreateWithoutBackgroundInput[];
    connectOrCreate?: Prisma.PatientChronicConditionCreateOrConnectWithoutBackgroundInput | Prisma.PatientChronicConditionCreateOrConnectWithoutBackgroundInput[];
    createMany?: Prisma.PatientChronicConditionCreateManyBackgroundInputEnvelope;
    connect?: Prisma.PatientChronicConditionWhereUniqueInput | Prisma.PatientChronicConditionWhereUniqueInput[];
};
export type PatientChronicConditionUpdateManyWithoutBackgroundNestedInput = {
    create?: Prisma.XOR<Prisma.PatientChronicConditionCreateWithoutBackgroundInput, Prisma.PatientChronicConditionUncheckedCreateWithoutBackgroundInput> | Prisma.PatientChronicConditionCreateWithoutBackgroundInput[] | Prisma.PatientChronicConditionUncheckedCreateWithoutBackgroundInput[];
    connectOrCreate?: Prisma.PatientChronicConditionCreateOrConnectWithoutBackgroundInput | Prisma.PatientChronicConditionCreateOrConnectWithoutBackgroundInput[];
    upsert?: Prisma.PatientChronicConditionUpsertWithWhereUniqueWithoutBackgroundInput | Prisma.PatientChronicConditionUpsertWithWhereUniqueWithoutBackgroundInput[];
    createMany?: Prisma.PatientChronicConditionCreateManyBackgroundInputEnvelope;
    set?: Prisma.PatientChronicConditionWhereUniqueInput | Prisma.PatientChronicConditionWhereUniqueInput[];
    disconnect?: Prisma.PatientChronicConditionWhereUniqueInput | Prisma.PatientChronicConditionWhereUniqueInput[];
    delete?: Prisma.PatientChronicConditionWhereUniqueInput | Prisma.PatientChronicConditionWhereUniqueInput[];
    connect?: Prisma.PatientChronicConditionWhereUniqueInput | Prisma.PatientChronicConditionWhereUniqueInput[];
    update?: Prisma.PatientChronicConditionUpdateWithWhereUniqueWithoutBackgroundInput | Prisma.PatientChronicConditionUpdateWithWhereUniqueWithoutBackgroundInput[];
    updateMany?: Prisma.PatientChronicConditionUpdateManyWithWhereWithoutBackgroundInput | Prisma.PatientChronicConditionUpdateManyWithWhereWithoutBackgroundInput[];
    deleteMany?: Prisma.PatientChronicConditionScalarWhereInput | Prisma.PatientChronicConditionScalarWhereInput[];
};
export type PatientChronicConditionUncheckedUpdateManyWithoutBackgroundNestedInput = {
    create?: Prisma.XOR<Prisma.PatientChronicConditionCreateWithoutBackgroundInput, Prisma.PatientChronicConditionUncheckedCreateWithoutBackgroundInput> | Prisma.PatientChronicConditionCreateWithoutBackgroundInput[] | Prisma.PatientChronicConditionUncheckedCreateWithoutBackgroundInput[];
    connectOrCreate?: Prisma.PatientChronicConditionCreateOrConnectWithoutBackgroundInput | Prisma.PatientChronicConditionCreateOrConnectWithoutBackgroundInput[];
    upsert?: Prisma.PatientChronicConditionUpsertWithWhereUniqueWithoutBackgroundInput | Prisma.PatientChronicConditionUpsertWithWhereUniqueWithoutBackgroundInput[];
    createMany?: Prisma.PatientChronicConditionCreateManyBackgroundInputEnvelope;
    set?: Prisma.PatientChronicConditionWhereUniqueInput | Prisma.PatientChronicConditionWhereUniqueInput[];
    disconnect?: Prisma.PatientChronicConditionWhereUniqueInput | Prisma.PatientChronicConditionWhereUniqueInput[];
    delete?: Prisma.PatientChronicConditionWhereUniqueInput | Prisma.PatientChronicConditionWhereUniqueInput[];
    connect?: Prisma.PatientChronicConditionWhereUniqueInput | Prisma.PatientChronicConditionWhereUniqueInput[];
    update?: Prisma.PatientChronicConditionUpdateWithWhereUniqueWithoutBackgroundInput | Prisma.PatientChronicConditionUpdateWithWhereUniqueWithoutBackgroundInput[];
    updateMany?: Prisma.PatientChronicConditionUpdateManyWithWhereWithoutBackgroundInput | Prisma.PatientChronicConditionUpdateManyWithWhereWithoutBackgroundInput[];
    deleteMany?: Prisma.PatientChronicConditionScalarWhereInput | Prisma.PatientChronicConditionScalarWhereInput[];
};
export type EnumChronicConditionTypeFieldUpdateOperationsInput = {
    set?: $Enums.ChronicConditionType;
};
export type PatientChronicConditionCreateWithoutBackgroundInput = {
    id?: string;
    tipo: $Enums.ChronicConditionType;
    detalleOtra?: string | null;
    createdAt?: Date | string;
};
export type PatientChronicConditionUncheckedCreateWithoutBackgroundInput = {
    id?: string;
    tipo: $Enums.ChronicConditionType;
    detalleOtra?: string | null;
    createdAt?: Date | string;
};
export type PatientChronicConditionCreateOrConnectWithoutBackgroundInput = {
    where: Prisma.PatientChronicConditionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientChronicConditionCreateWithoutBackgroundInput, Prisma.PatientChronicConditionUncheckedCreateWithoutBackgroundInput>;
};
export type PatientChronicConditionCreateManyBackgroundInputEnvelope = {
    data: Prisma.PatientChronicConditionCreateManyBackgroundInput | Prisma.PatientChronicConditionCreateManyBackgroundInput[];
    skipDuplicates?: boolean;
};
export type PatientChronicConditionUpsertWithWhereUniqueWithoutBackgroundInput = {
    where: Prisma.PatientChronicConditionWhereUniqueInput;
    update: Prisma.XOR<Prisma.PatientChronicConditionUpdateWithoutBackgroundInput, Prisma.PatientChronicConditionUncheckedUpdateWithoutBackgroundInput>;
    create: Prisma.XOR<Prisma.PatientChronicConditionCreateWithoutBackgroundInput, Prisma.PatientChronicConditionUncheckedCreateWithoutBackgroundInput>;
};
export type PatientChronicConditionUpdateWithWhereUniqueWithoutBackgroundInput = {
    where: Prisma.PatientChronicConditionWhereUniqueInput;
    data: Prisma.XOR<Prisma.PatientChronicConditionUpdateWithoutBackgroundInput, Prisma.PatientChronicConditionUncheckedUpdateWithoutBackgroundInput>;
};
export type PatientChronicConditionUpdateManyWithWhereWithoutBackgroundInput = {
    where: Prisma.PatientChronicConditionScalarWhereInput;
    data: Prisma.XOR<Prisma.PatientChronicConditionUpdateManyMutationInput, Prisma.PatientChronicConditionUncheckedUpdateManyWithoutBackgroundInput>;
};
export type PatientChronicConditionScalarWhereInput = {
    AND?: Prisma.PatientChronicConditionScalarWhereInput | Prisma.PatientChronicConditionScalarWhereInput[];
    OR?: Prisma.PatientChronicConditionScalarWhereInput[];
    NOT?: Prisma.PatientChronicConditionScalarWhereInput | Prisma.PatientChronicConditionScalarWhereInput[];
    id?: Prisma.StringFilter<"PatientChronicCondition"> | string;
    backgroundId?: Prisma.StringFilter<"PatientChronicCondition"> | string;
    tipo?: Prisma.EnumChronicConditionTypeFilter<"PatientChronicCondition"> | $Enums.ChronicConditionType;
    detalleOtra?: Prisma.StringNullableFilter<"PatientChronicCondition"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PatientChronicCondition"> | Date | string;
};
export type PatientChronicConditionCreateManyBackgroundInput = {
    id?: string;
    tipo: $Enums.ChronicConditionType;
    detalleOtra?: string | null;
    createdAt?: Date | string;
};
export type PatientChronicConditionUpdateWithoutBackgroundInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumChronicConditionTypeFieldUpdateOperationsInput | $Enums.ChronicConditionType;
    detalleOtra?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientChronicConditionUncheckedUpdateWithoutBackgroundInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumChronicConditionTypeFieldUpdateOperationsInput | $Enums.ChronicConditionType;
    detalleOtra?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientChronicConditionUncheckedUpdateManyWithoutBackgroundInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumChronicConditionTypeFieldUpdateOperationsInput | $Enums.ChronicConditionType;
    detalleOtra?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientChronicConditionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    backgroundId?: boolean;
    tipo?: boolean;
    detalleOtra?: boolean;
    createdAt?: boolean;
    background?: boolean | Prisma.PatientBackgroundDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patientChronicCondition"]>;
export type PatientChronicConditionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    backgroundId?: boolean;
    tipo?: boolean;
    detalleOtra?: boolean;
    createdAt?: boolean;
    background?: boolean | Prisma.PatientBackgroundDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patientChronicCondition"]>;
export type PatientChronicConditionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    backgroundId?: boolean;
    tipo?: boolean;
    detalleOtra?: boolean;
    createdAt?: boolean;
    background?: boolean | Prisma.PatientBackgroundDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patientChronicCondition"]>;
export type PatientChronicConditionSelectScalar = {
    id?: boolean;
    backgroundId?: boolean;
    tipo?: boolean;
    detalleOtra?: boolean;
    createdAt?: boolean;
};
export type PatientChronicConditionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "backgroundId" | "tipo" | "detalleOtra" | "createdAt", ExtArgs["result"]["patientChronicCondition"]>;
export type PatientChronicConditionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    background?: boolean | Prisma.PatientBackgroundDefaultArgs<ExtArgs>;
};
export type PatientChronicConditionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    background?: boolean | Prisma.PatientBackgroundDefaultArgs<ExtArgs>;
};
export type PatientChronicConditionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    background?: boolean | Prisma.PatientBackgroundDefaultArgs<ExtArgs>;
};
export type $PatientChronicConditionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PatientChronicCondition";
    objects: {
        background: Prisma.$PatientBackgroundPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        backgroundId: string;
        tipo: $Enums.ChronicConditionType;
        detalleOtra: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["patientChronicCondition"]>;
    composites: {};
};
export type PatientChronicConditionGetPayload<S extends boolean | null | undefined | PatientChronicConditionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PatientChronicConditionPayload, S>;
export type PatientChronicConditionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PatientChronicConditionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PatientChronicConditionCountAggregateInputType | true;
};
export interface PatientChronicConditionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PatientChronicCondition'];
        meta: {
            name: 'PatientChronicCondition';
        };
    };
    findUnique<T extends PatientChronicConditionFindUniqueArgs>(args: Prisma.SelectSubset<T, PatientChronicConditionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PatientChronicConditionClient<runtime.Types.Result.GetResult<Prisma.$PatientChronicConditionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PatientChronicConditionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PatientChronicConditionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PatientChronicConditionClient<runtime.Types.Result.GetResult<Prisma.$PatientChronicConditionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PatientChronicConditionFindFirstArgs>(args?: Prisma.SelectSubset<T, PatientChronicConditionFindFirstArgs<ExtArgs>>): Prisma.Prisma__PatientChronicConditionClient<runtime.Types.Result.GetResult<Prisma.$PatientChronicConditionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PatientChronicConditionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PatientChronicConditionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PatientChronicConditionClient<runtime.Types.Result.GetResult<Prisma.$PatientChronicConditionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PatientChronicConditionFindManyArgs>(args?: Prisma.SelectSubset<T, PatientChronicConditionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientChronicConditionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PatientChronicConditionCreateArgs>(args: Prisma.SelectSubset<T, PatientChronicConditionCreateArgs<ExtArgs>>): Prisma.Prisma__PatientChronicConditionClient<runtime.Types.Result.GetResult<Prisma.$PatientChronicConditionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PatientChronicConditionCreateManyArgs>(args?: Prisma.SelectSubset<T, PatientChronicConditionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PatientChronicConditionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PatientChronicConditionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientChronicConditionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PatientChronicConditionDeleteArgs>(args: Prisma.SelectSubset<T, PatientChronicConditionDeleteArgs<ExtArgs>>): Prisma.Prisma__PatientChronicConditionClient<runtime.Types.Result.GetResult<Prisma.$PatientChronicConditionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PatientChronicConditionUpdateArgs>(args: Prisma.SelectSubset<T, PatientChronicConditionUpdateArgs<ExtArgs>>): Prisma.Prisma__PatientChronicConditionClient<runtime.Types.Result.GetResult<Prisma.$PatientChronicConditionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PatientChronicConditionDeleteManyArgs>(args?: Prisma.SelectSubset<T, PatientChronicConditionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PatientChronicConditionUpdateManyArgs>(args: Prisma.SelectSubset<T, PatientChronicConditionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PatientChronicConditionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PatientChronicConditionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientChronicConditionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PatientChronicConditionUpsertArgs>(args: Prisma.SelectSubset<T, PatientChronicConditionUpsertArgs<ExtArgs>>): Prisma.Prisma__PatientChronicConditionClient<runtime.Types.Result.GetResult<Prisma.$PatientChronicConditionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PatientChronicConditionCountArgs>(args?: Prisma.Subset<T, PatientChronicConditionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PatientChronicConditionCountAggregateOutputType> : number>;
    aggregate<T extends PatientChronicConditionAggregateArgs>(args: Prisma.Subset<T, PatientChronicConditionAggregateArgs>): Prisma.PrismaPromise<GetPatientChronicConditionAggregateType<T>>;
    groupBy<T extends PatientChronicConditionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PatientChronicConditionGroupByArgs['orderBy'];
    } : {
        orderBy?: PatientChronicConditionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PatientChronicConditionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientChronicConditionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PatientChronicConditionFieldRefs;
}
export interface Prisma__PatientChronicConditionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    background<T extends Prisma.PatientBackgroundDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PatientBackgroundDefaultArgs<ExtArgs>>): Prisma.Prisma__PatientBackgroundClient<runtime.Types.Result.GetResult<Prisma.$PatientBackgroundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PatientChronicConditionFieldRefs {
    readonly id: Prisma.FieldRef<"PatientChronicCondition", 'String'>;
    readonly backgroundId: Prisma.FieldRef<"PatientChronicCondition", 'String'>;
    readonly tipo: Prisma.FieldRef<"PatientChronicCondition", 'ChronicConditionType'>;
    readonly detalleOtra: Prisma.FieldRef<"PatientChronicCondition", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PatientChronicCondition", 'DateTime'>;
}
export type PatientChronicConditionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientChronicConditionSelect<ExtArgs> | null;
    omit?: Prisma.PatientChronicConditionOmit<ExtArgs> | null;
    include?: Prisma.PatientChronicConditionInclude<ExtArgs> | null;
    where: Prisma.PatientChronicConditionWhereUniqueInput;
};
export type PatientChronicConditionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientChronicConditionSelect<ExtArgs> | null;
    omit?: Prisma.PatientChronicConditionOmit<ExtArgs> | null;
    include?: Prisma.PatientChronicConditionInclude<ExtArgs> | null;
    where: Prisma.PatientChronicConditionWhereUniqueInput;
};
export type PatientChronicConditionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientChronicConditionSelect<ExtArgs> | null;
    omit?: Prisma.PatientChronicConditionOmit<ExtArgs> | null;
    include?: Prisma.PatientChronicConditionInclude<ExtArgs> | null;
    where?: Prisma.PatientChronicConditionWhereInput;
    orderBy?: Prisma.PatientChronicConditionOrderByWithRelationInput | Prisma.PatientChronicConditionOrderByWithRelationInput[];
    cursor?: Prisma.PatientChronicConditionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientChronicConditionScalarFieldEnum | Prisma.PatientChronicConditionScalarFieldEnum[];
};
export type PatientChronicConditionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientChronicConditionSelect<ExtArgs> | null;
    omit?: Prisma.PatientChronicConditionOmit<ExtArgs> | null;
    include?: Prisma.PatientChronicConditionInclude<ExtArgs> | null;
    where?: Prisma.PatientChronicConditionWhereInput;
    orderBy?: Prisma.PatientChronicConditionOrderByWithRelationInput | Prisma.PatientChronicConditionOrderByWithRelationInput[];
    cursor?: Prisma.PatientChronicConditionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientChronicConditionScalarFieldEnum | Prisma.PatientChronicConditionScalarFieldEnum[];
};
export type PatientChronicConditionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientChronicConditionSelect<ExtArgs> | null;
    omit?: Prisma.PatientChronicConditionOmit<ExtArgs> | null;
    include?: Prisma.PatientChronicConditionInclude<ExtArgs> | null;
    where?: Prisma.PatientChronicConditionWhereInput;
    orderBy?: Prisma.PatientChronicConditionOrderByWithRelationInput | Prisma.PatientChronicConditionOrderByWithRelationInput[];
    cursor?: Prisma.PatientChronicConditionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientChronicConditionScalarFieldEnum | Prisma.PatientChronicConditionScalarFieldEnum[];
};
export type PatientChronicConditionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientChronicConditionSelect<ExtArgs> | null;
    omit?: Prisma.PatientChronicConditionOmit<ExtArgs> | null;
    include?: Prisma.PatientChronicConditionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientChronicConditionCreateInput, Prisma.PatientChronicConditionUncheckedCreateInput>;
};
export type PatientChronicConditionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PatientChronicConditionCreateManyInput | Prisma.PatientChronicConditionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PatientChronicConditionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientChronicConditionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PatientChronicConditionOmit<ExtArgs> | null;
    data: Prisma.PatientChronicConditionCreateManyInput | Prisma.PatientChronicConditionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PatientChronicConditionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PatientChronicConditionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientChronicConditionSelect<ExtArgs> | null;
    omit?: Prisma.PatientChronicConditionOmit<ExtArgs> | null;
    include?: Prisma.PatientChronicConditionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientChronicConditionUpdateInput, Prisma.PatientChronicConditionUncheckedUpdateInput>;
    where: Prisma.PatientChronicConditionWhereUniqueInput;
};
export type PatientChronicConditionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PatientChronicConditionUpdateManyMutationInput, Prisma.PatientChronicConditionUncheckedUpdateManyInput>;
    where?: Prisma.PatientChronicConditionWhereInput;
    limit?: number;
};
export type PatientChronicConditionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientChronicConditionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PatientChronicConditionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientChronicConditionUpdateManyMutationInput, Prisma.PatientChronicConditionUncheckedUpdateManyInput>;
    where?: Prisma.PatientChronicConditionWhereInput;
    limit?: number;
    include?: Prisma.PatientChronicConditionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PatientChronicConditionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientChronicConditionSelect<ExtArgs> | null;
    omit?: Prisma.PatientChronicConditionOmit<ExtArgs> | null;
    include?: Prisma.PatientChronicConditionInclude<ExtArgs> | null;
    where: Prisma.PatientChronicConditionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientChronicConditionCreateInput, Prisma.PatientChronicConditionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PatientChronicConditionUpdateInput, Prisma.PatientChronicConditionUncheckedUpdateInput>;
};
export type PatientChronicConditionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientChronicConditionSelect<ExtArgs> | null;
    omit?: Prisma.PatientChronicConditionOmit<ExtArgs> | null;
    include?: Prisma.PatientChronicConditionInclude<ExtArgs> | null;
    where: Prisma.PatientChronicConditionWhereUniqueInput;
};
export type PatientChronicConditionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientChronicConditionWhereInput;
    limit?: number;
};
export type PatientChronicConditionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientChronicConditionSelect<ExtArgs> | null;
    omit?: Prisma.PatientChronicConditionOmit<ExtArgs> | null;
    include?: Prisma.PatientChronicConditionInclude<ExtArgs> | null;
};

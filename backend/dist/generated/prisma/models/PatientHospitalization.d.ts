import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PatientHospitalizationModel = runtime.Types.Result.DefaultSelection<Prisma.$PatientHospitalizationPayload>;
export type AggregatePatientHospitalization = {
    _count: PatientHospitalizationCountAggregateOutputType | null;
    _avg: PatientHospitalizationAvgAggregateOutputType | null;
    _sum: PatientHospitalizationSumAggregateOutputType | null;
    _min: PatientHospitalizationMinAggregateOutputType | null;
    _max: PatientHospitalizationMaxAggregateOutputType | null;
};
export type PatientHospitalizationAvgAggregateOutputType = {
    anoAproximado: number | null;
};
export type PatientHospitalizationSumAggregateOutputType = {
    anoAproximado: number | null;
};
export type PatientHospitalizationMinAggregateOutputType = {
    id: string | null;
    backgroundId: string | null;
    motivo: string | null;
    anoAproximado: number | null;
    createdAt: Date | null;
};
export type PatientHospitalizationMaxAggregateOutputType = {
    id: string | null;
    backgroundId: string | null;
    motivo: string | null;
    anoAproximado: number | null;
    createdAt: Date | null;
};
export type PatientHospitalizationCountAggregateOutputType = {
    id: number;
    backgroundId: number;
    motivo: number;
    anoAproximado: number;
    createdAt: number;
    _all: number;
};
export type PatientHospitalizationAvgAggregateInputType = {
    anoAproximado?: true;
};
export type PatientHospitalizationSumAggregateInputType = {
    anoAproximado?: true;
};
export type PatientHospitalizationMinAggregateInputType = {
    id?: true;
    backgroundId?: true;
    motivo?: true;
    anoAproximado?: true;
    createdAt?: true;
};
export type PatientHospitalizationMaxAggregateInputType = {
    id?: true;
    backgroundId?: true;
    motivo?: true;
    anoAproximado?: true;
    createdAt?: true;
};
export type PatientHospitalizationCountAggregateInputType = {
    id?: true;
    backgroundId?: true;
    motivo?: true;
    anoAproximado?: true;
    createdAt?: true;
    _all?: true;
};
export type PatientHospitalizationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientHospitalizationWhereInput;
    orderBy?: Prisma.PatientHospitalizationOrderByWithRelationInput | Prisma.PatientHospitalizationOrderByWithRelationInput[];
    cursor?: Prisma.PatientHospitalizationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PatientHospitalizationCountAggregateInputType;
    _avg?: PatientHospitalizationAvgAggregateInputType;
    _sum?: PatientHospitalizationSumAggregateInputType;
    _min?: PatientHospitalizationMinAggregateInputType;
    _max?: PatientHospitalizationMaxAggregateInputType;
};
export type GetPatientHospitalizationAggregateType<T extends PatientHospitalizationAggregateArgs> = {
    [P in keyof T & keyof AggregatePatientHospitalization]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePatientHospitalization[P]> : Prisma.GetScalarType<T[P], AggregatePatientHospitalization[P]>;
};
export type PatientHospitalizationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientHospitalizationWhereInput;
    orderBy?: Prisma.PatientHospitalizationOrderByWithAggregationInput | Prisma.PatientHospitalizationOrderByWithAggregationInput[];
    by: Prisma.PatientHospitalizationScalarFieldEnum[] | Prisma.PatientHospitalizationScalarFieldEnum;
    having?: Prisma.PatientHospitalizationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PatientHospitalizationCountAggregateInputType | true;
    _avg?: PatientHospitalizationAvgAggregateInputType;
    _sum?: PatientHospitalizationSumAggregateInputType;
    _min?: PatientHospitalizationMinAggregateInputType;
    _max?: PatientHospitalizationMaxAggregateInputType;
};
export type PatientHospitalizationGroupByOutputType = {
    id: string;
    backgroundId: string;
    motivo: string;
    anoAproximado: number | null;
    createdAt: Date;
    _count: PatientHospitalizationCountAggregateOutputType | null;
    _avg: PatientHospitalizationAvgAggregateOutputType | null;
    _sum: PatientHospitalizationSumAggregateOutputType | null;
    _min: PatientHospitalizationMinAggregateOutputType | null;
    _max: PatientHospitalizationMaxAggregateOutputType | null;
};
export type GetPatientHospitalizationGroupByPayload<T extends PatientHospitalizationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PatientHospitalizationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PatientHospitalizationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PatientHospitalizationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PatientHospitalizationGroupByOutputType[P]>;
}>>;
export type PatientHospitalizationWhereInput = {
    AND?: Prisma.PatientHospitalizationWhereInput | Prisma.PatientHospitalizationWhereInput[];
    OR?: Prisma.PatientHospitalizationWhereInput[];
    NOT?: Prisma.PatientHospitalizationWhereInput | Prisma.PatientHospitalizationWhereInput[];
    id?: Prisma.StringFilter<"PatientHospitalization"> | string;
    backgroundId?: Prisma.StringFilter<"PatientHospitalization"> | string;
    motivo?: Prisma.StringFilter<"PatientHospitalization"> | string;
    anoAproximado?: Prisma.IntNullableFilter<"PatientHospitalization"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"PatientHospitalization"> | Date | string;
    background?: Prisma.XOR<Prisma.PatientBackgroundScalarRelationFilter, Prisma.PatientBackgroundWhereInput>;
};
export type PatientHospitalizationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    backgroundId?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    anoAproximado?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    background?: Prisma.PatientBackgroundOrderByWithRelationInput;
};
export type PatientHospitalizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PatientHospitalizationWhereInput | Prisma.PatientHospitalizationWhereInput[];
    OR?: Prisma.PatientHospitalizationWhereInput[];
    NOT?: Prisma.PatientHospitalizationWhereInput | Prisma.PatientHospitalizationWhereInput[];
    backgroundId?: Prisma.StringFilter<"PatientHospitalization"> | string;
    motivo?: Prisma.StringFilter<"PatientHospitalization"> | string;
    anoAproximado?: Prisma.IntNullableFilter<"PatientHospitalization"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"PatientHospitalization"> | Date | string;
    background?: Prisma.XOR<Prisma.PatientBackgroundScalarRelationFilter, Prisma.PatientBackgroundWhereInput>;
}, "id">;
export type PatientHospitalizationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    backgroundId?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    anoAproximado?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PatientHospitalizationCountOrderByAggregateInput;
    _avg?: Prisma.PatientHospitalizationAvgOrderByAggregateInput;
    _max?: Prisma.PatientHospitalizationMaxOrderByAggregateInput;
    _min?: Prisma.PatientHospitalizationMinOrderByAggregateInput;
    _sum?: Prisma.PatientHospitalizationSumOrderByAggregateInput;
};
export type PatientHospitalizationScalarWhereWithAggregatesInput = {
    AND?: Prisma.PatientHospitalizationScalarWhereWithAggregatesInput | Prisma.PatientHospitalizationScalarWhereWithAggregatesInput[];
    OR?: Prisma.PatientHospitalizationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PatientHospitalizationScalarWhereWithAggregatesInput | Prisma.PatientHospitalizationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PatientHospitalization"> | string;
    backgroundId?: Prisma.StringWithAggregatesFilter<"PatientHospitalization"> | string;
    motivo?: Prisma.StringWithAggregatesFilter<"PatientHospitalization"> | string;
    anoAproximado?: Prisma.IntNullableWithAggregatesFilter<"PatientHospitalization"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PatientHospitalization"> | Date | string;
};
export type PatientHospitalizationCreateInput = {
    id?: string;
    motivo: string;
    anoAproximado?: number | null;
    createdAt?: Date | string;
    background: Prisma.PatientBackgroundCreateNestedOneWithoutHospitalizationsInput;
};
export type PatientHospitalizationUncheckedCreateInput = {
    id?: string;
    backgroundId: string;
    motivo: string;
    anoAproximado?: number | null;
    createdAt?: Date | string;
};
export type PatientHospitalizationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    anoAproximado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    background?: Prisma.PatientBackgroundUpdateOneRequiredWithoutHospitalizationsNestedInput;
};
export type PatientHospitalizationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    backgroundId?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    anoAproximado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientHospitalizationCreateManyInput = {
    id?: string;
    backgroundId: string;
    motivo: string;
    anoAproximado?: number | null;
    createdAt?: Date | string;
};
export type PatientHospitalizationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    anoAproximado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientHospitalizationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    backgroundId?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    anoAproximado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientHospitalizationListRelationFilter = {
    every?: Prisma.PatientHospitalizationWhereInput;
    some?: Prisma.PatientHospitalizationWhereInput;
    none?: Prisma.PatientHospitalizationWhereInput;
};
export type PatientHospitalizationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PatientHospitalizationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    backgroundId?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    anoAproximado?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PatientHospitalizationAvgOrderByAggregateInput = {
    anoAproximado?: Prisma.SortOrder;
};
export type PatientHospitalizationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    backgroundId?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    anoAproximado?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PatientHospitalizationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    backgroundId?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    anoAproximado?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PatientHospitalizationSumOrderByAggregateInput = {
    anoAproximado?: Prisma.SortOrder;
};
export type PatientHospitalizationCreateNestedManyWithoutBackgroundInput = {
    create?: Prisma.XOR<Prisma.PatientHospitalizationCreateWithoutBackgroundInput, Prisma.PatientHospitalizationUncheckedCreateWithoutBackgroundInput> | Prisma.PatientHospitalizationCreateWithoutBackgroundInput[] | Prisma.PatientHospitalizationUncheckedCreateWithoutBackgroundInput[];
    connectOrCreate?: Prisma.PatientHospitalizationCreateOrConnectWithoutBackgroundInput | Prisma.PatientHospitalizationCreateOrConnectWithoutBackgroundInput[];
    createMany?: Prisma.PatientHospitalizationCreateManyBackgroundInputEnvelope;
    connect?: Prisma.PatientHospitalizationWhereUniqueInput | Prisma.PatientHospitalizationWhereUniqueInput[];
};
export type PatientHospitalizationUncheckedCreateNestedManyWithoutBackgroundInput = {
    create?: Prisma.XOR<Prisma.PatientHospitalizationCreateWithoutBackgroundInput, Prisma.PatientHospitalizationUncheckedCreateWithoutBackgroundInput> | Prisma.PatientHospitalizationCreateWithoutBackgroundInput[] | Prisma.PatientHospitalizationUncheckedCreateWithoutBackgroundInput[];
    connectOrCreate?: Prisma.PatientHospitalizationCreateOrConnectWithoutBackgroundInput | Prisma.PatientHospitalizationCreateOrConnectWithoutBackgroundInput[];
    createMany?: Prisma.PatientHospitalizationCreateManyBackgroundInputEnvelope;
    connect?: Prisma.PatientHospitalizationWhereUniqueInput | Prisma.PatientHospitalizationWhereUniqueInput[];
};
export type PatientHospitalizationUpdateManyWithoutBackgroundNestedInput = {
    create?: Prisma.XOR<Prisma.PatientHospitalizationCreateWithoutBackgroundInput, Prisma.PatientHospitalizationUncheckedCreateWithoutBackgroundInput> | Prisma.PatientHospitalizationCreateWithoutBackgroundInput[] | Prisma.PatientHospitalizationUncheckedCreateWithoutBackgroundInput[];
    connectOrCreate?: Prisma.PatientHospitalizationCreateOrConnectWithoutBackgroundInput | Prisma.PatientHospitalizationCreateOrConnectWithoutBackgroundInput[];
    upsert?: Prisma.PatientHospitalizationUpsertWithWhereUniqueWithoutBackgroundInput | Prisma.PatientHospitalizationUpsertWithWhereUniqueWithoutBackgroundInput[];
    createMany?: Prisma.PatientHospitalizationCreateManyBackgroundInputEnvelope;
    set?: Prisma.PatientHospitalizationWhereUniqueInput | Prisma.PatientHospitalizationWhereUniqueInput[];
    disconnect?: Prisma.PatientHospitalizationWhereUniqueInput | Prisma.PatientHospitalizationWhereUniqueInput[];
    delete?: Prisma.PatientHospitalizationWhereUniqueInput | Prisma.PatientHospitalizationWhereUniqueInput[];
    connect?: Prisma.PatientHospitalizationWhereUniqueInput | Prisma.PatientHospitalizationWhereUniqueInput[];
    update?: Prisma.PatientHospitalizationUpdateWithWhereUniqueWithoutBackgroundInput | Prisma.PatientHospitalizationUpdateWithWhereUniqueWithoutBackgroundInput[];
    updateMany?: Prisma.PatientHospitalizationUpdateManyWithWhereWithoutBackgroundInput | Prisma.PatientHospitalizationUpdateManyWithWhereWithoutBackgroundInput[];
    deleteMany?: Prisma.PatientHospitalizationScalarWhereInput | Prisma.PatientHospitalizationScalarWhereInput[];
};
export type PatientHospitalizationUncheckedUpdateManyWithoutBackgroundNestedInput = {
    create?: Prisma.XOR<Prisma.PatientHospitalizationCreateWithoutBackgroundInput, Prisma.PatientHospitalizationUncheckedCreateWithoutBackgroundInput> | Prisma.PatientHospitalizationCreateWithoutBackgroundInput[] | Prisma.PatientHospitalizationUncheckedCreateWithoutBackgroundInput[];
    connectOrCreate?: Prisma.PatientHospitalizationCreateOrConnectWithoutBackgroundInput | Prisma.PatientHospitalizationCreateOrConnectWithoutBackgroundInput[];
    upsert?: Prisma.PatientHospitalizationUpsertWithWhereUniqueWithoutBackgroundInput | Prisma.PatientHospitalizationUpsertWithWhereUniqueWithoutBackgroundInput[];
    createMany?: Prisma.PatientHospitalizationCreateManyBackgroundInputEnvelope;
    set?: Prisma.PatientHospitalizationWhereUniqueInput | Prisma.PatientHospitalizationWhereUniqueInput[];
    disconnect?: Prisma.PatientHospitalizationWhereUniqueInput | Prisma.PatientHospitalizationWhereUniqueInput[];
    delete?: Prisma.PatientHospitalizationWhereUniqueInput | Prisma.PatientHospitalizationWhereUniqueInput[];
    connect?: Prisma.PatientHospitalizationWhereUniqueInput | Prisma.PatientHospitalizationWhereUniqueInput[];
    update?: Prisma.PatientHospitalizationUpdateWithWhereUniqueWithoutBackgroundInput | Prisma.PatientHospitalizationUpdateWithWhereUniqueWithoutBackgroundInput[];
    updateMany?: Prisma.PatientHospitalizationUpdateManyWithWhereWithoutBackgroundInput | Prisma.PatientHospitalizationUpdateManyWithWhereWithoutBackgroundInput[];
    deleteMany?: Prisma.PatientHospitalizationScalarWhereInput | Prisma.PatientHospitalizationScalarWhereInput[];
};
export type PatientHospitalizationCreateWithoutBackgroundInput = {
    id?: string;
    motivo: string;
    anoAproximado?: number | null;
    createdAt?: Date | string;
};
export type PatientHospitalizationUncheckedCreateWithoutBackgroundInput = {
    id?: string;
    motivo: string;
    anoAproximado?: number | null;
    createdAt?: Date | string;
};
export type PatientHospitalizationCreateOrConnectWithoutBackgroundInput = {
    where: Prisma.PatientHospitalizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientHospitalizationCreateWithoutBackgroundInput, Prisma.PatientHospitalizationUncheckedCreateWithoutBackgroundInput>;
};
export type PatientHospitalizationCreateManyBackgroundInputEnvelope = {
    data: Prisma.PatientHospitalizationCreateManyBackgroundInput | Prisma.PatientHospitalizationCreateManyBackgroundInput[];
    skipDuplicates?: boolean;
};
export type PatientHospitalizationUpsertWithWhereUniqueWithoutBackgroundInput = {
    where: Prisma.PatientHospitalizationWhereUniqueInput;
    update: Prisma.XOR<Prisma.PatientHospitalizationUpdateWithoutBackgroundInput, Prisma.PatientHospitalizationUncheckedUpdateWithoutBackgroundInput>;
    create: Prisma.XOR<Prisma.PatientHospitalizationCreateWithoutBackgroundInput, Prisma.PatientHospitalizationUncheckedCreateWithoutBackgroundInput>;
};
export type PatientHospitalizationUpdateWithWhereUniqueWithoutBackgroundInput = {
    where: Prisma.PatientHospitalizationWhereUniqueInput;
    data: Prisma.XOR<Prisma.PatientHospitalizationUpdateWithoutBackgroundInput, Prisma.PatientHospitalizationUncheckedUpdateWithoutBackgroundInput>;
};
export type PatientHospitalizationUpdateManyWithWhereWithoutBackgroundInput = {
    where: Prisma.PatientHospitalizationScalarWhereInput;
    data: Prisma.XOR<Prisma.PatientHospitalizationUpdateManyMutationInput, Prisma.PatientHospitalizationUncheckedUpdateManyWithoutBackgroundInput>;
};
export type PatientHospitalizationScalarWhereInput = {
    AND?: Prisma.PatientHospitalizationScalarWhereInput | Prisma.PatientHospitalizationScalarWhereInput[];
    OR?: Prisma.PatientHospitalizationScalarWhereInput[];
    NOT?: Prisma.PatientHospitalizationScalarWhereInput | Prisma.PatientHospitalizationScalarWhereInput[];
    id?: Prisma.StringFilter<"PatientHospitalization"> | string;
    backgroundId?: Prisma.StringFilter<"PatientHospitalization"> | string;
    motivo?: Prisma.StringFilter<"PatientHospitalization"> | string;
    anoAproximado?: Prisma.IntNullableFilter<"PatientHospitalization"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"PatientHospitalization"> | Date | string;
};
export type PatientHospitalizationCreateManyBackgroundInput = {
    id?: string;
    motivo: string;
    anoAproximado?: number | null;
    createdAt?: Date | string;
};
export type PatientHospitalizationUpdateWithoutBackgroundInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    anoAproximado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientHospitalizationUncheckedUpdateWithoutBackgroundInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    anoAproximado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientHospitalizationUncheckedUpdateManyWithoutBackgroundInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    anoAproximado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientHospitalizationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    backgroundId?: boolean;
    motivo?: boolean;
    anoAproximado?: boolean;
    createdAt?: boolean;
    background?: boolean | Prisma.PatientBackgroundDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patientHospitalization"]>;
export type PatientHospitalizationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    backgroundId?: boolean;
    motivo?: boolean;
    anoAproximado?: boolean;
    createdAt?: boolean;
    background?: boolean | Prisma.PatientBackgroundDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patientHospitalization"]>;
export type PatientHospitalizationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    backgroundId?: boolean;
    motivo?: boolean;
    anoAproximado?: boolean;
    createdAt?: boolean;
    background?: boolean | Prisma.PatientBackgroundDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patientHospitalization"]>;
export type PatientHospitalizationSelectScalar = {
    id?: boolean;
    backgroundId?: boolean;
    motivo?: boolean;
    anoAproximado?: boolean;
    createdAt?: boolean;
};
export type PatientHospitalizationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "backgroundId" | "motivo" | "anoAproximado" | "createdAt", ExtArgs["result"]["patientHospitalization"]>;
export type PatientHospitalizationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    background?: boolean | Prisma.PatientBackgroundDefaultArgs<ExtArgs>;
};
export type PatientHospitalizationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    background?: boolean | Prisma.PatientBackgroundDefaultArgs<ExtArgs>;
};
export type PatientHospitalizationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    background?: boolean | Prisma.PatientBackgroundDefaultArgs<ExtArgs>;
};
export type $PatientHospitalizationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PatientHospitalization";
    objects: {
        background: Prisma.$PatientBackgroundPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        backgroundId: string;
        motivo: string;
        anoAproximado: number | null;
        createdAt: Date;
    }, ExtArgs["result"]["patientHospitalization"]>;
    composites: {};
};
export type PatientHospitalizationGetPayload<S extends boolean | null | undefined | PatientHospitalizationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PatientHospitalizationPayload, S>;
export type PatientHospitalizationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PatientHospitalizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PatientHospitalizationCountAggregateInputType | true;
};
export interface PatientHospitalizationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PatientHospitalization'];
        meta: {
            name: 'PatientHospitalization';
        };
    };
    findUnique<T extends PatientHospitalizationFindUniqueArgs>(args: Prisma.SelectSubset<T, PatientHospitalizationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PatientHospitalizationClient<runtime.Types.Result.GetResult<Prisma.$PatientHospitalizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PatientHospitalizationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PatientHospitalizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PatientHospitalizationClient<runtime.Types.Result.GetResult<Prisma.$PatientHospitalizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PatientHospitalizationFindFirstArgs>(args?: Prisma.SelectSubset<T, PatientHospitalizationFindFirstArgs<ExtArgs>>): Prisma.Prisma__PatientHospitalizationClient<runtime.Types.Result.GetResult<Prisma.$PatientHospitalizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PatientHospitalizationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PatientHospitalizationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PatientHospitalizationClient<runtime.Types.Result.GetResult<Prisma.$PatientHospitalizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PatientHospitalizationFindManyArgs>(args?: Prisma.SelectSubset<T, PatientHospitalizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientHospitalizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PatientHospitalizationCreateArgs>(args: Prisma.SelectSubset<T, PatientHospitalizationCreateArgs<ExtArgs>>): Prisma.Prisma__PatientHospitalizationClient<runtime.Types.Result.GetResult<Prisma.$PatientHospitalizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PatientHospitalizationCreateManyArgs>(args?: Prisma.SelectSubset<T, PatientHospitalizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PatientHospitalizationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PatientHospitalizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientHospitalizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PatientHospitalizationDeleteArgs>(args: Prisma.SelectSubset<T, PatientHospitalizationDeleteArgs<ExtArgs>>): Prisma.Prisma__PatientHospitalizationClient<runtime.Types.Result.GetResult<Prisma.$PatientHospitalizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PatientHospitalizationUpdateArgs>(args: Prisma.SelectSubset<T, PatientHospitalizationUpdateArgs<ExtArgs>>): Prisma.Prisma__PatientHospitalizationClient<runtime.Types.Result.GetResult<Prisma.$PatientHospitalizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PatientHospitalizationDeleteManyArgs>(args?: Prisma.SelectSubset<T, PatientHospitalizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PatientHospitalizationUpdateManyArgs>(args: Prisma.SelectSubset<T, PatientHospitalizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PatientHospitalizationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PatientHospitalizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientHospitalizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PatientHospitalizationUpsertArgs>(args: Prisma.SelectSubset<T, PatientHospitalizationUpsertArgs<ExtArgs>>): Prisma.Prisma__PatientHospitalizationClient<runtime.Types.Result.GetResult<Prisma.$PatientHospitalizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PatientHospitalizationCountArgs>(args?: Prisma.Subset<T, PatientHospitalizationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PatientHospitalizationCountAggregateOutputType> : number>;
    aggregate<T extends PatientHospitalizationAggregateArgs>(args: Prisma.Subset<T, PatientHospitalizationAggregateArgs>): Prisma.PrismaPromise<GetPatientHospitalizationAggregateType<T>>;
    groupBy<T extends PatientHospitalizationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PatientHospitalizationGroupByArgs['orderBy'];
    } : {
        orderBy?: PatientHospitalizationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PatientHospitalizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientHospitalizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PatientHospitalizationFieldRefs;
}
export interface Prisma__PatientHospitalizationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    background<T extends Prisma.PatientBackgroundDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PatientBackgroundDefaultArgs<ExtArgs>>): Prisma.Prisma__PatientBackgroundClient<runtime.Types.Result.GetResult<Prisma.$PatientBackgroundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PatientHospitalizationFieldRefs {
    readonly id: Prisma.FieldRef<"PatientHospitalization", 'String'>;
    readonly backgroundId: Prisma.FieldRef<"PatientHospitalization", 'String'>;
    readonly motivo: Prisma.FieldRef<"PatientHospitalization", 'String'>;
    readonly anoAproximado: Prisma.FieldRef<"PatientHospitalization", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"PatientHospitalization", 'DateTime'>;
}
export type PatientHospitalizationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientHospitalizationSelect<ExtArgs> | null;
    omit?: Prisma.PatientHospitalizationOmit<ExtArgs> | null;
    include?: Prisma.PatientHospitalizationInclude<ExtArgs> | null;
    where: Prisma.PatientHospitalizationWhereUniqueInput;
};
export type PatientHospitalizationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientHospitalizationSelect<ExtArgs> | null;
    omit?: Prisma.PatientHospitalizationOmit<ExtArgs> | null;
    include?: Prisma.PatientHospitalizationInclude<ExtArgs> | null;
    where: Prisma.PatientHospitalizationWhereUniqueInput;
};
export type PatientHospitalizationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientHospitalizationSelect<ExtArgs> | null;
    omit?: Prisma.PatientHospitalizationOmit<ExtArgs> | null;
    include?: Prisma.PatientHospitalizationInclude<ExtArgs> | null;
    where?: Prisma.PatientHospitalizationWhereInput;
    orderBy?: Prisma.PatientHospitalizationOrderByWithRelationInput | Prisma.PatientHospitalizationOrderByWithRelationInput[];
    cursor?: Prisma.PatientHospitalizationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientHospitalizationScalarFieldEnum | Prisma.PatientHospitalizationScalarFieldEnum[];
};
export type PatientHospitalizationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientHospitalizationSelect<ExtArgs> | null;
    omit?: Prisma.PatientHospitalizationOmit<ExtArgs> | null;
    include?: Prisma.PatientHospitalizationInclude<ExtArgs> | null;
    where?: Prisma.PatientHospitalizationWhereInput;
    orderBy?: Prisma.PatientHospitalizationOrderByWithRelationInput | Prisma.PatientHospitalizationOrderByWithRelationInput[];
    cursor?: Prisma.PatientHospitalizationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientHospitalizationScalarFieldEnum | Prisma.PatientHospitalizationScalarFieldEnum[];
};
export type PatientHospitalizationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientHospitalizationSelect<ExtArgs> | null;
    omit?: Prisma.PatientHospitalizationOmit<ExtArgs> | null;
    include?: Prisma.PatientHospitalizationInclude<ExtArgs> | null;
    where?: Prisma.PatientHospitalizationWhereInput;
    orderBy?: Prisma.PatientHospitalizationOrderByWithRelationInput | Prisma.PatientHospitalizationOrderByWithRelationInput[];
    cursor?: Prisma.PatientHospitalizationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientHospitalizationScalarFieldEnum | Prisma.PatientHospitalizationScalarFieldEnum[];
};
export type PatientHospitalizationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientHospitalizationSelect<ExtArgs> | null;
    omit?: Prisma.PatientHospitalizationOmit<ExtArgs> | null;
    include?: Prisma.PatientHospitalizationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientHospitalizationCreateInput, Prisma.PatientHospitalizationUncheckedCreateInput>;
};
export type PatientHospitalizationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PatientHospitalizationCreateManyInput | Prisma.PatientHospitalizationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PatientHospitalizationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientHospitalizationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PatientHospitalizationOmit<ExtArgs> | null;
    data: Prisma.PatientHospitalizationCreateManyInput | Prisma.PatientHospitalizationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PatientHospitalizationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PatientHospitalizationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientHospitalizationSelect<ExtArgs> | null;
    omit?: Prisma.PatientHospitalizationOmit<ExtArgs> | null;
    include?: Prisma.PatientHospitalizationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientHospitalizationUpdateInput, Prisma.PatientHospitalizationUncheckedUpdateInput>;
    where: Prisma.PatientHospitalizationWhereUniqueInput;
};
export type PatientHospitalizationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PatientHospitalizationUpdateManyMutationInput, Prisma.PatientHospitalizationUncheckedUpdateManyInput>;
    where?: Prisma.PatientHospitalizationWhereInput;
    limit?: number;
};
export type PatientHospitalizationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientHospitalizationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PatientHospitalizationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientHospitalizationUpdateManyMutationInput, Prisma.PatientHospitalizationUncheckedUpdateManyInput>;
    where?: Prisma.PatientHospitalizationWhereInput;
    limit?: number;
    include?: Prisma.PatientHospitalizationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PatientHospitalizationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientHospitalizationSelect<ExtArgs> | null;
    omit?: Prisma.PatientHospitalizationOmit<ExtArgs> | null;
    include?: Prisma.PatientHospitalizationInclude<ExtArgs> | null;
    where: Prisma.PatientHospitalizationWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientHospitalizationCreateInput, Prisma.PatientHospitalizationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PatientHospitalizationUpdateInput, Prisma.PatientHospitalizationUncheckedUpdateInput>;
};
export type PatientHospitalizationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientHospitalizationSelect<ExtArgs> | null;
    omit?: Prisma.PatientHospitalizationOmit<ExtArgs> | null;
    include?: Prisma.PatientHospitalizationInclude<ExtArgs> | null;
    where: Prisma.PatientHospitalizationWhereUniqueInput;
};
export type PatientHospitalizationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientHospitalizationWhereInput;
    limit?: number;
};
export type PatientHospitalizationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientHospitalizationSelect<ExtArgs> | null;
    omit?: Prisma.PatientHospitalizationOmit<ExtArgs> | null;
    include?: Prisma.PatientHospitalizationInclude<ExtArgs> | null;
};

import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PatientMedicationModel = runtime.Types.Result.DefaultSelection<Prisma.$PatientMedicationPayload>;
export type AggregatePatientMedication = {
    _count: PatientMedicationCountAggregateOutputType | null;
    _min: PatientMedicationMinAggregateOutputType | null;
    _max: PatientMedicationMaxAggregateOutputType | null;
};
export type PatientMedicationMinAggregateOutputType = {
    id: string | null;
    backgroundId: string | null;
    nombre: string | null;
    dosis: string | null;
    frecuencia: string | null;
    createdAt: Date | null;
};
export type PatientMedicationMaxAggregateOutputType = {
    id: string | null;
    backgroundId: string | null;
    nombre: string | null;
    dosis: string | null;
    frecuencia: string | null;
    createdAt: Date | null;
};
export type PatientMedicationCountAggregateOutputType = {
    id: number;
    backgroundId: number;
    nombre: number;
    dosis: number;
    frecuencia: number;
    createdAt: number;
    _all: number;
};
export type PatientMedicationMinAggregateInputType = {
    id?: true;
    backgroundId?: true;
    nombre?: true;
    dosis?: true;
    frecuencia?: true;
    createdAt?: true;
};
export type PatientMedicationMaxAggregateInputType = {
    id?: true;
    backgroundId?: true;
    nombre?: true;
    dosis?: true;
    frecuencia?: true;
    createdAt?: true;
};
export type PatientMedicationCountAggregateInputType = {
    id?: true;
    backgroundId?: true;
    nombre?: true;
    dosis?: true;
    frecuencia?: true;
    createdAt?: true;
    _all?: true;
};
export type PatientMedicationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientMedicationWhereInput;
    orderBy?: Prisma.PatientMedicationOrderByWithRelationInput | Prisma.PatientMedicationOrderByWithRelationInput[];
    cursor?: Prisma.PatientMedicationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PatientMedicationCountAggregateInputType;
    _min?: PatientMedicationMinAggregateInputType;
    _max?: PatientMedicationMaxAggregateInputType;
};
export type GetPatientMedicationAggregateType<T extends PatientMedicationAggregateArgs> = {
    [P in keyof T & keyof AggregatePatientMedication]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePatientMedication[P]> : Prisma.GetScalarType<T[P], AggregatePatientMedication[P]>;
};
export type PatientMedicationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientMedicationWhereInput;
    orderBy?: Prisma.PatientMedicationOrderByWithAggregationInput | Prisma.PatientMedicationOrderByWithAggregationInput[];
    by: Prisma.PatientMedicationScalarFieldEnum[] | Prisma.PatientMedicationScalarFieldEnum;
    having?: Prisma.PatientMedicationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PatientMedicationCountAggregateInputType | true;
    _min?: PatientMedicationMinAggregateInputType;
    _max?: PatientMedicationMaxAggregateInputType;
};
export type PatientMedicationGroupByOutputType = {
    id: string;
    backgroundId: string;
    nombre: string;
    dosis: string;
    frecuencia: string | null;
    createdAt: Date;
    _count: PatientMedicationCountAggregateOutputType | null;
    _min: PatientMedicationMinAggregateOutputType | null;
    _max: PatientMedicationMaxAggregateOutputType | null;
};
export type GetPatientMedicationGroupByPayload<T extends PatientMedicationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PatientMedicationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PatientMedicationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PatientMedicationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PatientMedicationGroupByOutputType[P]>;
}>>;
export type PatientMedicationWhereInput = {
    AND?: Prisma.PatientMedicationWhereInput | Prisma.PatientMedicationWhereInput[];
    OR?: Prisma.PatientMedicationWhereInput[];
    NOT?: Prisma.PatientMedicationWhereInput | Prisma.PatientMedicationWhereInput[];
    id?: Prisma.StringFilter<"PatientMedication"> | string;
    backgroundId?: Prisma.StringFilter<"PatientMedication"> | string;
    nombre?: Prisma.StringFilter<"PatientMedication"> | string;
    dosis?: Prisma.StringFilter<"PatientMedication"> | string;
    frecuencia?: Prisma.StringNullableFilter<"PatientMedication"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PatientMedication"> | Date | string;
    background?: Prisma.XOR<Prisma.PatientBackgroundScalarRelationFilter, Prisma.PatientBackgroundWhereInput>;
};
export type PatientMedicationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    backgroundId?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    dosis?: Prisma.SortOrder;
    frecuencia?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    background?: Prisma.PatientBackgroundOrderByWithRelationInput;
};
export type PatientMedicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PatientMedicationWhereInput | Prisma.PatientMedicationWhereInput[];
    OR?: Prisma.PatientMedicationWhereInput[];
    NOT?: Prisma.PatientMedicationWhereInput | Prisma.PatientMedicationWhereInput[];
    backgroundId?: Prisma.StringFilter<"PatientMedication"> | string;
    nombre?: Prisma.StringFilter<"PatientMedication"> | string;
    dosis?: Prisma.StringFilter<"PatientMedication"> | string;
    frecuencia?: Prisma.StringNullableFilter<"PatientMedication"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PatientMedication"> | Date | string;
    background?: Prisma.XOR<Prisma.PatientBackgroundScalarRelationFilter, Prisma.PatientBackgroundWhereInput>;
}, "id">;
export type PatientMedicationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    backgroundId?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    dosis?: Prisma.SortOrder;
    frecuencia?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PatientMedicationCountOrderByAggregateInput;
    _max?: Prisma.PatientMedicationMaxOrderByAggregateInput;
    _min?: Prisma.PatientMedicationMinOrderByAggregateInput;
};
export type PatientMedicationScalarWhereWithAggregatesInput = {
    AND?: Prisma.PatientMedicationScalarWhereWithAggregatesInput | Prisma.PatientMedicationScalarWhereWithAggregatesInput[];
    OR?: Prisma.PatientMedicationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PatientMedicationScalarWhereWithAggregatesInput | Prisma.PatientMedicationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PatientMedication"> | string;
    backgroundId?: Prisma.StringWithAggregatesFilter<"PatientMedication"> | string;
    nombre?: Prisma.StringWithAggregatesFilter<"PatientMedication"> | string;
    dosis?: Prisma.StringWithAggregatesFilter<"PatientMedication"> | string;
    frecuencia?: Prisma.StringNullableWithAggregatesFilter<"PatientMedication"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PatientMedication"> | Date | string;
};
export type PatientMedicationCreateInput = {
    id?: string;
    nombre: string;
    dosis: string;
    frecuencia?: string | null;
    createdAt?: Date | string;
    background: Prisma.PatientBackgroundCreateNestedOneWithoutMedicationsInput;
};
export type PatientMedicationUncheckedCreateInput = {
    id?: string;
    backgroundId: string;
    nombre: string;
    dosis: string;
    frecuencia?: string | null;
    createdAt?: Date | string;
};
export type PatientMedicationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    dosis?: Prisma.StringFieldUpdateOperationsInput | string;
    frecuencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    background?: Prisma.PatientBackgroundUpdateOneRequiredWithoutMedicationsNestedInput;
};
export type PatientMedicationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    backgroundId?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    dosis?: Prisma.StringFieldUpdateOperationsInput | string;
    frecuencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientMedicationCreateManyInput = {
    id?: string;
    backgroundId: string;
    nombre: string;
    dosis: string;
    frecuencia?: string | null;
    createdAt?: Date | string;
};
export type PatientMedicationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    dosis?: Prisma.StringFieldUpdateOperationsInput | string;
    frecuencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientMedicationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    backgroundId?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    dosis?: Prisma.StringFieldUpdateOperationsInput | string;
    frecuencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientMedicationListRelationFilter = {
    every?: Prisma.PatientMedicationWhereInput;
    some?: Prisma.PatientMedicationWhereInput;
    none?: Prisma.PatientMedicationWhereInput;
};
export type PatientMedicationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PatientMedicationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    backgroundId?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    dosis?: Prisma.SortOrder;
    frecuencia?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PatientMedicationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    backgroundId?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    dosis?: Prisma.SortOrder;
    frecuencia?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PatientMedicationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    backgroundId?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    dosis?: Prisma.SortOrder;
    frecuencia?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PatientMedicationCreateNestedManyWithoutBackgroundInput = {
    create?: Prisma.XOR<Prisma.PatientMedicationCreateWithoutBackgroundInput, Prisma.PatientMedicationUncheckedCreateWithoutBackgroundInput> | Prisma.PatientMedicationCreateWithoutBackgroundInput[] | Prisma.PatientMedicationUncheckedCreateWithoutBackgroundInput[];
    connectOrCreate?: Prisma.PatientMedicationCreateOrConnectWithoutBackgroundInput | Prisma.PatientMedicationCreateOrConnectWithoutBackgroundInput[];
    createMany?: Prisma.PatientMedicationCreateManyBackgroundInputEnvelope;
    connect?: Prisma.PatientMedicationWhereUniqueInput | Prisma.PatientMedicationWhereUniqueInput[];
};
export type PatientMedicationUncheckedCreateNestedManyWithoutBackgroundInput = {
    create?: Prisma.XOR<Prisma.PatientMedicationCreateWithoutBackgroundInput, Prisma.PatientMedicationUncheckedCreateWithoutBackgroundInput> | Prisma.PatientMedicationCreateWithoutBackgroundInput[] | Prisma.PatientMedicationUncheckedCreateWithoutBackgroundInput[];
    connectOrCreate?: Prisma.PatientMedicationCreateOrConnectWithoutBackgroundInput | Prisma.PatientMedicationCreateOrConnectWithoutBackgroundInput[];
    createMany?: Prisma.PatientMedicationCreateManyBackgroundInputEnvelope;
    connect?: Prisma.PatientMedicationWhereUniqueInput | Prisma.PatientMedicationWhereUniqueInput[];
};
export type PatientMedicationUpdateManyWithoutBackgroundNestedInput = {
    create?: Prisma.XOR<Prisma.PatientMedicationCreateWithoutBackgroundInput, Prisma.PatientMedicationUncheckedCreateWithoutBackgroundInput> | Prisma.PatientMedicationCreateWithoutBackgroundInput[] | Prisma.PatientMedicationUncheckedCreateWithoutBackgroundInput[];
    connectOrCreate?: Prisma.PatientMedicationCreateOrConnectWithoutBackgroundInput | Prisma.PatientMedicationCreateOrConnectWithoutBackgroundInput[];
    upsert?: Prisma.PatientMedicationUpsertWithWhereUniqueWithoutBackgroundInput | Prisma.PatientMedicationUpsertWithWhereUniqueWithoutBackgroundInput[];
    createMany?: Prisma.PatientMedicationCreateManyBackgroundInputEnvelope;
    set?: Prisma.PatientMedicationWhereUniqueInput | Prisma.PatientMedicationWhereUniqueInput[];
    disconnect?: Prisma.PatientMedicationWhereUniqueInput | Prisma.PatientMedicationWhereUniqueInput[];
    delete?: Prisma.PatientMedicationWhereUniqueInput | Prisma.PatientMedicationWhereUniqueInput[];
    connect?: Prisma.PatientMedicationWhereUniqueInput | Prisma.PatientMedicationWhereUniqueInput[];
    update?: Prisma.PatientMedicationUpdateWithWhereUniqueWithoutBackgroundInput | Prisma.PatientMedicationUpdateWithWhereUniqueWithoutBackgroundInput[];
    updateMany?: Prisma.PatientMedicationUpdateManyWithWhereWithoutBackgroundInput | Prisma.PatientMedicationUpdateManyWithWhereWithoutBackgroundInput[];
    deleteMany?: Prisma.PatientMedicationScalarWhereInput | Prisma.PatientMedicationScalarWhereInput[];
};
export type PatientMedicationUncheckedUpdateManyWithoutBackgroundNestedInput = {
    create?: Prisma.XOR<Prisma.PatientMedicationCreateWithoutBackgroundInput, Prisma.PatientMedicationUncheckedCreateWithoutBackgroundInput> | Prisma.PatientMedicationCreateWithoutBackgroundInput[] | Prisma.PatientMedicationUncheckedCreateWithoutBackgroundInput[];
    connectOrCreate?: Prisma.PatientMedicationCreateOrConnectWithoutBackgroundInput | Prisma.PatientMedicationCreateOrConnectWithoutBackgroundInput[];
    upsert?: Prisma.PatientMedicationUpsertWithWhereUniqueWithoutBackgroundInput | Prisma.PatientMedicationUpsertWithWhereUniqueWithoutBackgroundInput[];
    createMany?: Prisma.PatientMedicationCreateManyBackgroundInputEnvelope;
    set?: Prisma.PatientMedicationWhereUniqueInput | Prisma.PatientMedicationWhereUniqueInput[];
    disconnect?: Prisma.PatientMedicationWhereUniqueInput | Prisma.PatientMedicationWhereUniqueInput[];
    delete?: Prisma.PatientMedicationWhereUniqueInput | Prisma.PatientMedicationWhereUniqueInput[];
    connect?: Prisma.PatientMedicationWhereUniqueInput | Prisma.PatientMedicationWhereUniqueInput[];
    update?: Prisma.PatientMedicationUpdateWithWhereUniqueWithoutBackgroundInput | Prisma.PatientMedicationUpdateWithWhereUniqueWithoutBackgroundInput[];
    updateMany?: Prisma.PatientMedicationUpdateManyWithWhereWithoutBackgroundInput | Prisma.PatientMedicationUpdateManyWithWhereWithoutBackgroundInput[];
    deleteMany?: Prisma.PatientMedicationScalarWhereInput | Prisma.PatientMedicationScalarWhereInput[];
};
export type PatientMedicationCreateWithoutBackgroundInput = {
    id?: string;
    nombre: string;
    dosis: string;
    frecuencia?: string | null;
    createdAt?: Date | string;
};
export type PatientMedicationUncheckedCreateWithoutBackgroundInput = {
    id?: string;
    nombre: string;
    dosis: string;
    frecuencia?: string | null;
    createdAt?: Date | string;
};
export type PatientMedicationCreateOrConnectWithoutBackgroundInput = {
    where: Prisma.PatientMedicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientMedicationCreateWithoutBackgroundInput, Prisma.PatientMedicationUncheckedCreateWithoutBackgroundInput>;
};
export type PatientMedicationCreateManyBackgroundInputEnvelope = {
    data: Prisma.PatientMedicationCreateManyBackgroundInput | Prisma.PatientMedicationCreateManyBackgroundInput[];
    skipDuplicates?: boolean;
};
export type PatientMedicationUpsertWithWhereUniqueWithoutBackgroundInput = {
    where: Prisma.PatientMedicationWhereUniqueInput;
    update: Prisma.XOR<Prisma.PatientMedicationUpdateWithoutBackgroundInput, Prisma.PatientMedicationUncheckedUpdateWithoutBackgroundInput>;
    create: Prisma.XOR<Prisma.PatientMedicationCreateWithoutBackgroundInput, Prisma.PatientMedicationUncheckedCreateWithoutBackgroundInput>;
};
export type PatientMedicationUpdateWithWhereUniqueWithoutBackgroundInput = {
    where: Prisma.PatientMedicationWhereUniqueInput;
    data: Prisma.XOR<Prisma.PatientMedicationUpdateWithoutBackgroundInput, Prisma.PatientMedicationUncheckedUpdateWithoutBackgroundInput>;
};
export type PatientMedicationUpdateManyWithWhereWithoutBackgroundInput = {
    where: Prisma.PatientMedicationScalarWhereInput;
    data: Prisma.XOR<Prisma.PatientMedicationUpdateManyMutationInput, Prisma.PatientMedicationUncheckedUpdateManyWithoutBackgroundInput>;
};
export type PatientMedicationScalarWhereInput = {
    AND?: Prisma.PatientMedicationScalarWhereInput | Prisma.PatientMedicationScalarWhereInput[];
    OR?: Prisma.PatientMedicationScalarWhereInput[];
    NOT?: Prisma.PatientMedicationScalarWhereInput | Prisma.PatientMedicationScalarWhereInput[];
    id?: Prisma.StringFilter<"PatientMedication"> | string;
    backgroundId?: Prisma.StringFilter<"PatientMedication"> | string;
    nombre?: Prisma.StringFilter<"PatientMedication"> | string;
    dosis?: Prisma.StringFilter<"PatientMedication"> | string;
    frecuencia?: Prisma.StringNullableFilter<"PatientMedication"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PatientMedication"> | Date | string;
};
export type PatientMedicationCreateManyBackgroundInput = {
    id?: string;
    nombre: string;
    dosis: string;
    frecuencia?: string | null;
    createdAt?: Date | string;
};
export type PatientMedicationUpdateWithoutBackgroundInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    dosis?: Prisma.StringFieldUpdateOperationsInput | string;
    frecuencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientMedicationUncheckedUpdateWithoutBackgroundInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    dosis?: Prisma.StringFieldUpdateOperationsInput | string;
    frecuencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientMedicationUncheckedUpdateManyWithoutBackgroundInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    dosis?: Prisma.StringFieldUpdateOperationsInput | string;
    frecuencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientMedicationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    backgroundId?: boolean;
    nombre?: boolean;
    dosis?: boolean;
    frecuencia?: boolean;
    createdAt?: boolean;
    background?: boolean | Prisma.PatientBackgroundDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patientMedication"]>;
export type PatientMedicationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    backgroundId?: boolean;
    nombre?: boolean;
    dosis?: boolean;
    frecuencia?: boolean;
    createdAt?: boolean;
    background?: boolean | Prisma.PatientBackgroundDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patientMedication"]>;
export type PatientMedicationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    backgroundId?: boolean;
    nombre?: boolean;
    dosis?: boolean;
    frecuencia?: boolean;
    createdAt?: boolean;
    background?: boolean | Prisma.PatientBackgroundDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patientMedication"]>;
export type PatientMedicationSelectScalar = {
    id?: boolean;
    backgroundId?: boolean;
    nombre?: boolean;
    dosis?: boolean;
    frecuencia?: boolean;
    createdAt?: boolean;
};
export type PatientMedicationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "backgroundId" | "nombre" | "dosis" | "frecuencia" | "createdAt", ExtArgs["result"]["patientMedication"]>;
export type PatientMedicationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    background?: boolean | Prisma.PatientBackgroundDefaultArgs<ExtArgs>;
};
export type PatientMedicationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    background?: boolean | Prisma.PatientBackgroundDefaultArgs<ExtArgs>;
};
export type PatientMedicationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    background?: boolean | Prisma.PatientBackgroundDefaultArgs<ExtArgs>;
};
export type $PatientMedicationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PatientMedication";
    objects: {
        background: Prisma.$PatientBackgroundPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        backgroundId: string;
        nombre: string;
        dosis: string;
        frecuencia: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["patientMedication"]>;
    composites: {};
};
export type PatientMedicationGetPayload<S extends boolean | null | undefined | PatientMedicationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PatientMedicationPayload, S>;
export type PatientMedicationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PatientMedicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PatientMedicationCountAggregateInputType | true;
};
export interface PatientMedicationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PatientMedication'];
        meta: {
            name: 'PatientMedication';
        };
    };
    findUnique<T extends PatientMedicationFindUniqueArgs>(args: Prisma.SelectSubset<T, PatientMedicationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PatientMedicationClient<runtime.Types.Result.GetResult<Prisma.$PatientMedicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PatientMedicationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PatientMedicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PatientMedicationClient<runtime.Types.Result.GetResult<Prisma.$PatientMedicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PatientMedicationFindFirstArgs>(args?: Prisma.SelectSubset<T, PatientMedicationFindFirstArgs<ExtArgs>>): Prisma.Prisma__PatientMedicationClient<runtime.Types.Result.GetResult<Prisma.$PatientMedicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PatientMedicationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PatientMedicationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PatientMedicationClient<runtime.Types.Result.GetResult<Prisma.$PatientMedicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PatientMedicationFindManyArgs>(args?: Prisma.SelectSubset<T, PatientMedicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientMedicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PatientMedicationCreateArgs>(args: Prisma.SelectSubset<T, PatientMedicationCreateArgs<ExtArgs>>): Prisma.Prisma__PatientMedicationClient<runtime.Types.Result.GetResult<Prisma.$PatientMedicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PatientMedicationCreateManyArgs>(args?: Prisma.SelectSubset<T, PatientMedicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PatientMedicationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PatientMedicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientMedicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PatientMedicationDeleteArgs>(args: Prisma.SelectSubset<T, PatientMedicationDeleteArgs<ExtArgs>>): Prisma.Prisma__PatientMedicationClient<runtime.Types.Result.GetResult<Prisma.$PatientMedicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PatientMedicationUpdateArgs>(args: Prisma.SelectSubset<T, PatientMedicationUpdateArgs<ExtArgs>>): Prisma.Prisma__PatientMedicationClient<runtime.Types.Result.GetResult<Prisma.$PatientMedicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PatientMedicationDeleteManyArgs>(args?: Prisma.SelectSubset<T, PatientMedicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PatientMedicationUpdateManyArgs>(args: Prisma.SelectSubset<T, PatientMedicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PatientMedicationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PatientMedicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientMedicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PatientMedicationUpsertArgs>(args: Prisma.SelectSubset<T, PatientMedicationUpsertArgs<ExtArgs>>): Prisma.Prisma__PatientMedicationClient<runtime.Types.Result.GetResult<Prisma.$PatientMedicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PatientMedicationCountArgs>(args?: Prisma.Subset<T, PatientMedicationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PatientMedicationCountAggregateOutputType> : number>;
    aggregate<T extends PatientMedicationAggregateArgs>(args: Prisma.Subset<T, PatientMedicationAggregateArgs>): Prisma.PrismaPromise<GetPatientMedicationAggregateType<T>>;
    groupBy<T extends PatientMedicationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PatientMedicationGroupByArgs['orderBy'];
    } : {
        orderBy?: PatientMedicationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PatientMedicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientMedicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PatientMedicationFieldRefs;
}
export interface Prisma__PatientMedicationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    background<T extends Prisma.PatientBackgroundDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PatientBackgroundDefaultArgs<ExtArgs>>): Prisma.Prisma__PatientBackgroundClient<runtime.Types.Result.GetResult<Prisma.$PatientBackgroundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PatientMedicationFieldRefs {
    readonly id: Prisma.FieldRef<"PatientMedication", 'String'>;
    readonly backgroundId: Prisma.FieldRef<"PatientMedication", 'String'>;
    readonly nombre: Prisma.FieldRef<"PatientMedication", 'String'>;
    readonly dosis: Prisma.FieldRef<"PatientMedication", 'String'>;
    readonly frecuencia: Prisma.FieldRef<"PatientMedication", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PatientMedication", 'DateTime'>;
}
export type PatientMedicationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientMedicationSelect<ExtArgs> | null;
    omit?: Prisma.PatientMedicationOmit<ExtArgs> | null;
    include?: Prisma.PatientMedicationInclude<ExtArgs> | null;
    where: Prisma.PatientMedicationWhereUniqueInput;
};
export type PatientMedicationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientMedicationSelect<ExtArgs> | null;
    omit?: Prisma.PatientMedicationOmit<ExtArgs> | null;
    include?: Prisma.PatientMedicationInclude<ExtArgs> | null;
    where: Prisma.PatientMedicationWhereUniqueInput;
};
export type PatientMedicationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientMedicationSelect<ExtArgs> | null;
    omit?: Prisma.PatientMedicationOmit<ExtArgs> | null;
    include?: Prisma.PatientMedicationInclude<ExtArgs> | null;
    where?: Prisma.PatientMedicationWhereInput;
    orderBy?: Prisma.PatientMedicationOrderByWithRelationInput | Prisma.PatientMedicationOrderByWithRelationInput[];
    cursor?: Prisma.PatientMedicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientMedicationScalarFieldEnum | Prisma.PatientMedicationScalarFieldEnum[];
};
export type PatientMedicationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientMedicationSelect<ExtArgs> | null;
    omit?: Prisma.PatientMedicationOmit<ExtArgs> | null;
    include?: Prisma.PatientMedicationInclude<ExtArgs> | null;
    where?: Prisma.PatientMedicationWhereInput;
    orderBy?: Prisma.PatientMedicationOrderByWithRelationInput | Prisma.PatientMedicationOrderByWithRelationInput[];
    cursor?: Prisma.PatientMedicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientMedicationScalarFieldEnum | Prisma.PatientMedicationScalarFieldEnum[];
};
export type PatientMedicationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientMedicationSelect<ExtArgs> | null;
    omit?: Prisma.PatientMedicationOmit<ExtArgs> | null;
    include?: Prisma.PatientMedicationInclude<ExtArgs> | null;
    where?: Prisma.PatientMedicationWhereInput;
    orderBy?: Prisma.PatientMedicationOrderByWithRelationInput | Prisma.PatientMedicationOrderByWithRelationInput[];
    cursor?: Prisma.PatientMedicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientMedicationScalarFieldEnum | Prisma.PatientMedicationScalarFieldEnum[];
};
export type PatientMedicationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientMedicationSelect<ExtArgs> | null;
    omit?: Prisma.PatientMedicationOmit<ExtArgs> | null;
    include?: Prisma.PatientMedicationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientMedicationCreateInput, Prisma.PatientMedicationUncheckedCreateInput>;
};
export type PatientMedicationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PatientMedicationCreateManyInput | Prisma.PatientMedicationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PatientMedicationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientMedicationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PatientMedicationOmit<ExtArgs> | null;
    data: Prisma.PatientMedicationCreateManyInput | Prisma.PatientMedicationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PatientMedicationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PatientMedicationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientMedicationSelect<ExtArgs> | null;
    omit?: Prisma.PatientMedicationOmit<ExtArgs> | null;
    include?: Prisma.PatientMedicationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientMedicationUpdateInput, Prisma.PatientMedicationUncheckedUpdateInput>;
    where: Prisma.PatientMedicationWhereUniqueInput;
};
export type PatientMedicationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PatientMedicationUpdateManyMutationInput, Prisma.PatientMedicationUncheckedUpdateManyInput>;
    where?: Prisma.PatientMedicationWhereInput;
    limit?: number;
};
export type PatientMedicationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientMedicationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PatientMedicationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientMedicationUpdateManyMutationInput, Prisma.PatientMedicationUncheckedUpdateManyInput>;
    where?: Prisma.PatientMedicationWhereInput;
    limit?: number;
    include?: Prisma.PatientMedicationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PatientMedicationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientMedicationSelect<ExtArgs> | null;
    omit?: Prisma.PatientMedicationOmit<ExtArgs> | null;
    include?: Prisma.PatientMedicationInclude<ExtArgs> | null;
    where: Prisma.PatientMedicationWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientMedicationCreateInput, Prisma.PatientMedicationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PatientMedicationUpdateInput, Prisma.PatientMedicationUncheckedUpdateInput>;
};
export type PatientMedicationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientMedicationSelect<ExtArgs> | null;
    omit?: Prisma.PatientMedicationOmit<ExtArgs> | null;
    include?: Prisma.PatientMedicationInclude<ExtArgs> | null;
    where: Prisma.PatientMedicationWhereUniqueInput;
};
export type PatientMedicationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientMedicationWhereInput;
    limit?: number;
};
export type PatientMedicationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientMedicationSelect<ExtArgs> | null;
    omit?: Prisma.PatientMedicationOmit<ExtArgs> | null;
    include?: Prisma.PatientMedicationInclude<ExtArgs> | null;
};

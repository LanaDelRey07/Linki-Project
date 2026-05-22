import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PatientAllergyModel = runtime.Types.Result.DefaultSelection<Prisma.$PatientAllergyPayload>;
export type AggregatePatientAllergy = {
    _count: PatientAllergyCountAggregateOutputType | null;
    _min: PatientAllergyMinAggregateOutputType | null;
    _max: PatientAllergyMaxAggregateOutputType | null;
};
export type PatientAllergyMinAggregateOutputType = {
    id: string | null;
    backgroundId: string | null;
    tipoAlergia: $Enums.AllergyType | null;
    detalle: string | null;
    createdAt: Date | null;
};
export type PatientAllergyMaxAggregateOutputType = {
    id: string | null;
    backgroundId: string | null;
    tipoAlergia: $Enums.AllergyType | null;
    detalle: string | null;
    createdAt: Date | null;
};
export type PatientAllergyCountAggregateOutputType = {
    id: number;
    backgroundId: number;
    tipoAlergia: number;
    detalle: number;
    createdAt: number;
    _all: number;
};
export type PatientAllergyMinAggregateInputType = {
    id?: true;
    backgroundId?: true;
    tipoAlergia?: true;
    detalle?: true;
    createdAt?: true;
};
export type PatientAllergyMaxAggregateInputType = {
    id?: true;
    backgroundId?: true;
    tipoAlergia?: true;
    detalle?: true;
    createdAt?: true;
};
export type PatientAllergyCountAggregateInputType = {
    id?: true;
    backgroundId?: true;
    tipoAlergia?: true;
    detalle?: true;
    createdAt?: true;
    _all?: true;
};
export type PatientAllergyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientAllergyWhereInput;
    orderBy?: Prisma.PatientAllergyOrderByWithRelationInput | Prisma.PatientAllergyOrderByWithRelationInput[];
    cursor?: Prisma.PatientAllergyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PatientAllergyCountAggregateInputType;
    _min?: PatientAllergyMinAggregateInputType;
    _max?: PatientAllergyMaxAggregateInputType;
};
export type GetPatientAllergyAggregateType<T extends PatientAllergyAggregateArgs> = {
    [P in keyof T & keyof AggregatePatientAllergy]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePatientAllergy[P]> : Prisma.GetScalarType<T[P], AggregatePatientAllergy[P]>;
};
export type PatientAllergyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientAllergyWhereInput;
    orderBy?: Prisma.PatientAllergyOrderByWithAggregationInput | Prisma.PatientAllergyOrderByWithAggregationInput[];
    by: Prisma.PatientAllergyScalarFieldEnum[] | Prisma.PatientAllergyScalarFieldEnum;
    having?: Prisma.PatientAllergyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PatientAllergyCountAggregateInputType | true;
    _min?: PatientAllergyMinAggregateInputType;
    _max?: PatientAllergyMaxAggregateInputType;
};
export type PatientAllergyGroupByOutputType = {
    id: string;
    backgroundId: string;
    tipoAlergia: $Enums.AllergyType;
    detalle: string;
    createdAt: Date;
    _count: PatientAllergyCountAggregateOutputType | null;
    _min: PatientAllergyMinAggregateOutputType | null;
    _max: PatientAllergyMaxAggregateOutputType | null;
};
export type GetPatientAllergyGroupByPayload<T extends PatientAllergyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PatientAllergyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PatientAllergyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PatientAllergyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PatientAllergyGroupByOutputType[P]>;
}>>;
export type PatientAllergyWhereInput = {
    AND?: Prisma.PatientAllergyWhereInput | Prisma.PatientAllergyWhereInput[];
    OR?: Prisma.PatientAllergyWhereInput[];
    NOT?: Prisma.PatientAllergyWhereInput | Prisma.PatientAllergyWhereInput[];
    id?: Prisma.StringFilter<"PatientAllergy"> | string;
    backgroundId?: Prisma.StringFilter<"PatientAllergy"> | string;
    tipoAlergia?: Prisma.EnumAllergyTypeFilter<"PatientAllergy"> | $Enums.AllergyType;
    detalle?: Prisma.StringFilter<"PatientAllergy"> | string;
    createdAt?: Prisma.DateTimeFilter<"PatientAllergy"> | Date | string;
    background?: Prisma.XOR<Prisma.PatientBackgroundScalarRelationFilter, Prisma.PatientBackgroundWhereInput>;
};
export type PatientAllergyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    backgroundId?: Prisma.SortOrder;
    tipoAlergia?: Prisma.SortOrder;
    detalle?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    background?: Prisma.PatientBackgroundOrderByWithRelationInput;
};
export type PatientAllergyWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PatientAllergyWhereInput | Prisma.PatientAllergyWhereInput[];
    OR?: Prisma.PatientAllergyWhereInput[];
    NOT?: Prisma.PatientAllergyWhereInput | Prisma.PatientAllergyWhereInput[];
    backgroundId?: Prisma.StringFilter<"PatientAllergy"> | string;
    tipoAlergia?: Prisma.EnumAllergyTypeFilter<"PatientAllergy"> | $Enums.AllergyType;
    detalle?: Prisma.StringFilter<"PatientAllergy"> | string;
    createdAt?: Prisma.DateTimeFilter<"PatientAllergy"> | Date | string;
    background?: Prisma.XOR<Prisma.PatientBackgroundScalarRelationFilter, Prisma.PatientBackgroundWhereInput>;
}, "id">;
export type PatientAllergyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    backgroundId?: Prisma.SortOrder;
    tipoAlergia?: Prisma.SortOrder;
    detalle?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PatientAllergyCountOrderByAggregateInput;
    _max?: Prisma.PatientAllergyMaxOrderByAggregateInput;
    _min?: Prisma.PatientAllergyMinOrderByAggregateInput;
};
export type PatientAllergyScalarWhereWithAggregatesInput = {
    AND?: Prisma.PatientAllergyScalarWhereWithAggregatesInput | Prisma.PatientAllergyScalarWhereWithAggregatesInput[];
    OR?: Prisma.PatientAllergyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PatientAllergyScalarWhereWithAggregatesInput | Prisma.PatientAllergyScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PatientAllergy"> | string;
    backgroundId?: Prisma.StringWithAggregatesFilter<"PatientAllergy"> | string;
    tipoAlergia?: Prisma.EnumAllergyTypeWithAggregatesFilter<"PatientAllergy"> | $Enums.AllergyType;
    detalle?: Prisma.StringWithAggregatesFilter<"PatientAllergy"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PatientAllergy"> | Date | string;
};
export type PatientAllergyCreateInput = {
    id?: string;
    tipoAlergia: $Enums.AllergyType;
    detalle: string;
    createdAt?: Date | string;
    background: Prisma.PatientBackgroundCreateNestedOneWithoutAllergiesInput;
};
export type PatientAllergyUncheckedCreateInput = {
    id?: string;
    backgroundId: string;
    tipoAlergia: $Enums.AllergyType;
    detalle: string;
    createdAt?: Date | string;
};
export type PatientAllergyUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoAlergia?: Prisma.EnumAllergyTypeFieldUpdateOperationsInput | $Enums.AllergyType;
    detalle?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    background?: Prisma.PatientBackgroundUpdateOneRequiredWithoutAllergiesNestedInput;
};
export type PatientAllergyUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    backgroundId?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoAlergia?: Prisma.EnumAllergyTypeFieldUpdateOperationsInput | $Enums.AllergyType;
    detalle?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientAllergyCreateManyInput = {
    id?: string;
    backgroundId: string;
    tipoAlergia: $Enums.AllergyType;
    detalle: string;
    createdAt?: Date | string;
};
export type PatientAllergyUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoAlergia?: Prisma.EnumAllergyTypeFieldUpdateOperationsInput | $Enums.AllergyType;
    detalle?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientAllergyUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    backgroundId?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoAlergia?: Prisma.EnumAllergyTypeFieldUpdateOperationsInput | $Enums.AllergyType;
    detalle?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientAllergyListRelationFilter = {
    every?: Prisma.PatientAllergyWhereInput;
    some?: Prisma.PatientAllergyWhereInput;
    none?: Prisma.PatientAllergyWhereInput;
};
export type PatientAllergyOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PatientAllergyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    backgroundId?: Prisma.SortOrder;
    tipoAlergia?: Prisma.SortOrder;
    detalle?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PatientAllergyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    backgroundId?: Prisma.SortOrder;
    tipoAlergia?: Prisma.SortOrder;
    detalle?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PatientAllergyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    backgroundId?: Prisma.SortOrder;
    tipoAlergia?: Prisma.SortOrder;
    detalle?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PatientAllergyCreateNestedManyWithoutBackgroundInput = {
    create?: Prisma.XOR<Prisma.PatientAllergyCreateWithoutBackgroundInput, Prisma.PatientAllergyUncheckedCreateWithoutBackgroundInput> | Prisma.PatientAllergyCreateWithoutBackgroundInput[] | Prisma.PatientAllergyUncheckedCreateWithoutBackgroundInput[];
    connectOrCreate?: Prisma.PatientAllergyCreateOrConnectWithoutBackgroundInput | Prisma.PatientAllergyCreateOrConnectWithoutBackgroundInput[];
    createMany?: Prisma.PatientAllergyCreateManyBackgroundInputEnvelope;
    connect?: Prisma.PatientAllergyWhereUniqueInput | Prisma.PatientAllergyWhereUniqueInput[];
};
export type PatientAllergyUncheckedCreateNestedManyWithoutBackgroundInput = {
    create?: Prisma.XOR<Prisma.PatientAllergyCreateWithoutBackgroundInput, Prisma.PatientAllergyUncheckedCreateWithoutBackgroundInput> | Prisma.PatientAllergyCreateWithoutBackgroundInput[] | Prisma.PatientAllergyUncheckedCreateWithoutBackgroundInput[];
    connectOrCreate?: Prisma.PatientAllergyCreateOrConnectWithoutBackgroundInput | Prisma.PatientAllergyCreateOrConnectWithoutBackgroundInput[];
    createMany?: Prisma.PatientAllergyCreateManyBackgroundInputEnvelope;
    connect?: Prisma.PatientAllergyWhereUniqueInput | Prisma.PatientAllergyWhereUniqueInput[];
};
export type PatientAllergyUpdateManyWithoutBackgroundNestedInput = {
    create?: Prisma.XOR<Prisma.PatientAllergyCreateWithoutBackgroundInput, Prisma.PatientAllergyUncheckedCreateWithoutBackgroundInput> | Prisma.PatientAllergyCreateWithoutBackgroundInput[] | Prisma.PatientAllergyUncheckedCreateWithoutBackgroundInput[];
    connectOrCreate?: Prisma.PatientAllergyCreateOrConnectWithoutBackgroundInput | Prisma.PatientAllergyCreateOrConnectWithoutBackgroundInput[];
    upsert?: Prisma.PatientAllergyUpsertWithWhereUniqueWithoutBackgroundInput | Prisma.PatientAllergyUpsertWithWhereUniqueWithoutBackgroundInput[];
    createMany?: Prisma.PatientAllergyCreateManyBackgroundInputEnvelope;
    set?: Prisma.PatientAllergyWhereUniqueInput | Prisma.PatientAllergyWhereUniqueInput[];
    disconnect?: Prisma.PatientAllergyWhereUniqueInput | Prisma.PatientAllergyWhereUniqueInput[];
    delete?: Prisma.PatientAllergyWhereUniqueInput | Prisma.PatientAllergyWhereUniqueInput[];
    connect?: Prisma.PatientAllergyWhereUniqueInput | Prisma.PatientAllergyWhereUniqueInput[];
    update?: Prisma.PatientAllergyUpdateWithWhereUniqueWithoutBackgroundInput | Prisma.PatientAllergyUpdateWithWhereUniqueWithoutBackgroundInput[];
    updateMany?: Prisma.PatientAllergyUpdateManyWithWhereWithoutBackgroundInput | Prisma.PatientAllergyUpdateManyWithWhereWithoutBackgroundInput[];
    deleteMany?: Prisma.PatientAllergyScalarWhereInput | Prisma.PatientAllergyScalarWhereInput[];
};
export type PatientAllergyUncheckedUpdateManyWithoutBackgroundNestedInput = {
    create?: Prisma.XOR<Prisma.PatientAllergyCreateWithoutBackgroundInput, Prisma.PatientAllergyUncheckedCreateWithoutBackgroundInput> | Prisma.PatientAllergyCreateWithoutBackgroundInput[] | Prisma.PatientAllergyUncheckedCreateWithoutBackgroundInput[];
    connectOrCreate?: Prisma.PatientAllergyCreateOrConnectWithoutBackgroundInput | Prisma.PatientAllergyCreateOrConnectWithoutBackgroundInput[];
    upsert?: Prisma.PatientAllergyUpsertWithWhereUniqueWithoutBackgroundInput | Prisma.PatientAllergyUpsertWithWhereUniqueWithoutBackgroundInput[];
    createMany?: Prisma.PatientAllergyCreateManyBackgroundInputEnvelope;
    set?: Prisma.PatientAllergyWhereUniqueInput | Prisma.PatientAllergyWhereUniqueInput[];
    disconnect?: Prisma.PatientAllergyWhereUniqueInput | Prisma.PatientAllergyWhereUniqueInput[];
    delete?: Prisma.PatientAllergyWhereUniqueInput | Prisma.PatientAllergyWhereUniqueInput[];
    connect?: Prisma.PatientAllergyWhereUniqueInput | Prisma.PatientAllergyWhereUniqueInput[];
    update?: Prisma.PatientAllergyUpdateWithWhereUniqueWithoutBackgroundInput | Prisma.PatientAllergyUpdateWithWhereUniqueWithoutBackgroundInput[];
    updateMany?: Prisma.PatientAllergyUpdateManyWithWhereWithoutBackgroundInput | Prisma.PatientAllergyUpdateManyWithWhereWithoutBackgroundInput[];
    deleteMany?: Prisma.PatientAllergyScalarWhereInput | Prisma.PatientAllergyScalarWhereInput[];
};
export type EnumAllergyTypeFieldUpdateOperationsInput = {
    set?: $Enums.AllergyType;
};
export type PatientAllergyCreateWithoutBackgroundInput = {
    id?: string;
    tipoAlergia: $Enums.AllergyType;
    detalle: string;
    createdAt?: Date | string;
};
export type PatientAllergyUncheckedCreateWithoutBackgroundInput = {
    id?: string;
    tipoAlergia: $Enums.AllergyType;
    detalle: string;
    createdAt?: Date | string;
};
export type PatientAllergyCreateOrConnectWithoutBackgroundInput = {
    where: Prisma.PatientAllergyWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientAllergyCreateWithoutBackgroundInput, Prisma.PatientAllergyUncheckedCreateWithoutBackgroundInput>;
};
export type PatientAllergyCreateManyBackgroundInputEnvelope = {
    data: Prisma.PatientAllergyCreateManyBackgroundInput | Prisma.PatientAllergyCreateManyBackgroundInput[];
    skipDuplicates?: boolean;
};
export type PatientAllergyUpsertWithWhereUniqueWithoutBackgroundInput = {
    where: Prisma.PatientAllergyWhereUniqueInput;
    update: Prisma.XOR<Prisma.PatientAllergyUpdateWithoutBackgroundInput, Prisma.PatientAllergyUncheckedUpdateWithoutBackgroundInput>;
    create: Prisma.XOR<Prisma.PatientAllergyCreateWithoutBackgroundInput, Prisma.PatientAllergyUncheckedCreateWithoutBackgroundInput>;
};
export type PatientAllergyUpdateWithWhereUniqueWithoutBackgroundInput = {
    where: Prisma.PatientAllergyWhereUniqueInput;
    data: Prisma.XOR<Prisma.PatientAllergyUpdateWithoutBackgroundInput, Prisma.PatientAllergyUncheckedUpdateWithoutBackgroundInput>;
};
export type PatientAllergyUpdateManyWithWhereWithoutBackgroundInput = {
    where: Prisma.PatientAllergyScalarWhereInput;
    data: Prisma.XOR<Prisma.PatientAllergyUpdateManyMutationInput, Prisma.PatientAllergyUncheckedUpdateManyWithoutBackgroundInput>;
};
export type PatientAllergyScalarWhereInput = {
    AND?: Prisma.PatientAllergyScalarWhereInput | Prisma.PatientAllergyScalarWhereInput[];
    OR?: Prisma.PatientAllergyScalarWhereInput[];
    NOT?: Prisma.PatientAllergyScalarWhereInput | Prisma.PatientAllergyScalarWhereInput[];
    id?: Prisma.StringFilter<"PatientAllergy"> | string;
    backgroundId?: Prisma.StringFilter<"PatientAllergy"> | string;
    tipoAlergia?: Prisma.EnumAllergyTypeFilter<"PatientAllergy"> | $Enums.AllergyType;
    detalle?: Prisma.StringFilter<"PatientAllergy"> | string;
    createdAt?: Prisma.DateTimeFilter<"PatientAllergy"> | Date | string;
};
export type PatientAllergyCreateManyBackgroundInput = {
    id?: string;
    tipoAlergia: $Enums.AllergyType;
    detalle: string;
    createdAt?: Date | string;
};
export type PatientAllergyUpdateWithoutBackgroundInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoAlergia?: Prisma.EnumAllergyTypeFieldUpdateOperationsInput | $Enums.AllergyType;
    detalle?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientAllergyUncheckedUpdateWithoutBackgroundInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoAlergia?: Prisma.EnumAllergyTypeFieldUpdateOperationsInput | $Enums.AllergyType;
    detalle?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientAllergyUncheckedUpdateManyWithoutBackgroundInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoAlergia?: Prisma.EnumAllergyTypeFieldUpdateOperationsInput | $Enums.AllergyType;
    detalle?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientAllergySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    backgroundId?: boolean;
    tipoAlergia?: boolean;
    detalle?: boolean;
    createdAt?: boolean;
    background?: boolean | Prisma.PatientBackgroundDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patientAllergy"]>;
export type PatientAllergySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    backgroundId?: boolean;
    tipoAlergia?: boolean;
    detalle?: boolean;
    createdAt?: boolean;
    background?: boolean | Prisma.PatientBackgroundDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patientAllergy"]>;
export type PatientAllergySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    backgroundId?: boolean;
    tipoAlergia?: boolean;
    detalle?: boolean;
    createdAt?: boolean;
    background?: boolean | Prisma.PatientBackgroundDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patientAllergy"]>;
export type PatientAllergySelectScalar = {
    id?: boolean;
    backgroundId?: boolean;
    tipoAlergia?: boolean;
    detalle?: boolean;
    createdAt?: boolean;
};
export type PatientAllergyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "backgroundId" | "tipoAlergia" | "detalle" | "createdAt", ExtArgs["result"]["patientAllergy"]>;
export type PatientAllergyInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    background?: boolean | Prisma.PatientBackgroundDefaultArgs<ExtArgs>;
};
export type PatientAllergyIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    background?: boolean | Prisma.PatientBackgroundDefaultArgs<ExtArgs>;
};
export type PatientAllergyIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    background?: boolean | Prisma.PatientBackgroundDefaultArgs<ExtArgs>;
};
export type $PatientAllergyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PatientAllergy";
    objects: {
        background: Prisma.$PatientBackgroundPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        backgroundId: string;
        tipoAlergia: $Enums.AllergyType;
        detalle: string;
        createdAt: Date;
    }, ExtArgs["result"]["patientAllergy"]>;
    composites: {};
};
export type PatientAllergyGetPayload<S extends boolean | null | undefined | PatientAllergyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PatientAllergyPayload, S>;
export type PatientAllergyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PatientAllergyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PatientAllergyCountAggregateInputType | true;
};
export interface PatientAllergyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PatientAllergy'];
        meta: {
            name: 'PatientAllergy';
        };
    };
    findUnique<T extends PatientAllergyFindUniqueArgs>(args: Prisma.SelectSubset<T, PatientAllergyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PatientAllergyClient<runtime.Types.Result.GetResult<Prisma.$PatientAllergyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PatientAllergyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PatientAllergyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PatientAllergyClient<runtime.Types.Result.GetResult<Prisma.$PatientAllergyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PatientAllergyFindFirstArgs>(args?: Prisma.SelectSubset<T, PatientAllergyFindFirstArgs<ExtArgs>>): Prisma.Prisma__PatientAllergyClient<runtime.Types.Result.GetResult<Prisma.$PatientAllergyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PatientAllergyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PatientAllergyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PatientAllergyClient<runtime.Types.Result.GetResult<Prisma.$PatientAllergyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PatientAllergyFindManyArgs>(args?: Prisma.SelectSubset<T, PatientAllergyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientAllergyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PatientAllergyCreateArgs>(args: Prisma.SelectSubset<T, PatientAllergyCreateArgs<ExtArgs>>): Prisma.Prisma__PatientAllergyClient<runtime.Types.Result.GetResult<Prisma.$PatientAllergyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PatientAllergyCreateManyArgs>(args?: Prisma.SelectSubset<T, PatientAllergyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PatientAllergyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PatientAllergyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientAllergyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PatientAllergyDeleteArgs>(args: Prisma.SelectSubset<T, PatientAllergyDeleteArgs<ExtArgs>>): Prisma.Prisma__PatientAllergyClient<runtime.Types.Result.GetResult<Prisma.$PatientAllergyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PatientAllergyUpdateArgs>(args: Prisma.SelectSubset<T, PatientAllergyUpdateArgs<ExtArgs>>): Prisma.Prisma__PatientAllergyClient<runtime.Types.Result.GetResult<Prisma.$PatientAllergyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PatientAllergyDeleteManyArgs>(args?: Prisma.SelectSubset<T, PatientAllergyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PatientAllergyUpdateManyArgs>(args: Prisma.SelectSubset<T, PatientAllergyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PatientAllergyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PatientAllergyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientAllergyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PatientAllergyUpsertArgs>(args: Prisma.SelectSubset<T, PatientAllergyUpsertArgs<ExtArgs>>): Prisma.Prisma__PatientAllergyClient<runtime.Types.Result.GetResult<Prisma.$PatientAllergyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PatientAllergyCountArgs>(args?: Prisma.Subset<T, PatientAllergyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PatientAllergyCountAggregateOutputType> : number>;
    aggregate<T extends PatientAllergyAggregateArgs>(args: Prisma.Subset<T, PatientAllergyAggregateArgs>): Prisma.PrismaPromise<GetPatientAllergyAggregateType<T>>;
    groupBy<T extends PatientAllergyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PatientAllergyGroupByArgs['orderBy'];
    } : {
        orderBy?: PatientAllergyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PatientAllergyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientAllergyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PatientAllergyFieldRefs;
}
export interface Prisma__PatientAllergyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    background<T extends Prisma.PatientBackgroundDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PatientBackgroundDefaultArgs<ExtArgs>>): Prisma.Prisma__PatientBackgroundClient<runtime.Types.Result.GetResult<Prisma.$PatientBackgroundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PatientAllergyFieldRefs {
    readonly id: Prisma.FieldRef<"PatientAllergy", 'String'>;
    readonly backgroundId: Prisma.FieldRef<"PatientAllergy", 'String'>;
    readonly tipoAlergia: Prisma.FieldRef<"PatientAllergy", 'AllergyType'>;
    readonly detalle: Prisma.FieldRef<"PatientAllergy", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PatientAllergy", 'DateTime'>;
}
export type PatientAllergyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientAllergySelect<ExtArgs> | null;
    omit?: Prisma.PatientAllergyOmit<ExtArgs> | null;
    include?: Prisma.PatientAllergyInclude<ExtArgs> | null;
    where: Prisma.PatientAllergyWhereUniqueInput;
};
export type PatientAllergyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientAllergySelect<ExtArgs> | null;
    omit?: Prisma.PatientAllergyOmit<ExtArgs> | null;
    include?: Prisma.PatientAllergyInclude<ExtArgs> | null;
    where: Prisma.PatientAllergyWhereUniqueInput;
};
export type PatientAllergyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientAllergySelect<ExtArgs> | null;
    omit?: Prisma.PatientAllergyOmit<ExtArgs> | null;
    include?: Prisma.PatientAllergyInclude<ExtArgs> | null;
    where?: Prisma.PatientAllergyWhereInput;
    orderBy?: Prisma.PatientAllergyOrderByWithRelationInput | Prisma.PatientAllergyOrderByWithRelationInput[];
    cursor?: Prisma.PatientAllergyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientAllergyScalarFieldEnum | Prisma.PatientAllergyScalarFieldEnum[];
};
export type PatientAllergyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientAllergySelect<ExtArgs> | null;
    omit?: Prisma.PatientAllergyOmit<ExtArgs> | null;
    include?: Prisma.PatientAllergyInclude<ExtArgs> | null;
    where?: Prisma.PatientAllergyWhereInput;
    orderBy?: Prisma.PatientAllergyOrderByWithRelationInput | Prisma.PatientAllergyOrderByWithRelationInput[];
    cursor?: Prisma.PatientAllergyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientAllergyScalarFieldEnum | Prisma.PatientAllergyScalarFieldEnum[];
};
export type PatientAllergyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientAllergySelect<ExtArgs> | null;
    omit?: Prisma.PatientAllergyOmit<ExtArgs> | null;
    include?: Prisma.PatientAllergyInclude<ExtArgs> | null;
    where?: Prisma.PatientAllergyWhereInput;
    orderBy?: Prisma.PatientAllergyOrderByWithRelationInput | Prisma.PatientAllergyOrderByWithRelationInput[];
    cursor?: Prisma.PatientAllergyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientAllergyScalarFieldEnum | Prisma.PatientAllergyScalarFieldEnum[];
};
export type PatientAllergyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientAllergySelect<ExtArgs> | null;
    omit?: Prisma.PatientAllergyOmit<ExtArgs> | null;
    include?: Prisma.PatientAllergyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientAllergyCreateInput, Prisma.PatientAllergyUncheckedCreateInput>;
};
export type PatientAllergyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PatientAllergyCreateManyInput | Prisma.PatientAllergyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PatientAllergyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientAllergySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PatientAllergyOmit<ExtArgs> | null;
    data: Prisma.PatientAllergyCreateManyInput | Prisma.PatientAllergyCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PatientAllergyIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PatientAllergyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientAllergySelect<ExtArgs> | null;
    omit?: Prisma.PatientAllergyOmit<ExtArgs> | null;
    include?: Prisma.PatientAllergyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientAllergyUpdateInput, Prisma.PatientAllergyUncheckedUpdateInput>;
    where: Prisma.PatientAllergyWhereUniqueInput;
};
export type PatientAllergyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PatientAllergyUpdateManyMutationInput, Prisma.PatientAllergyUncheckedUpdateManyInput>;
    where?: Prisma.PatientAllergyWhereInput;
    limit?: number;
};
export type PatientAllergyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientAllergySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PatientAllergyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientAllergyUpdateManyMutationInput, Prisma.PatientAllergyUncheckedUpdateManyInput>;
    where?: Prisma.PatientAllergyWhereInput;
    limit?: number;
    include?: Prisma.PatientAllergyIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PatientAllergyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientAllergySelect<ExtArgs> | null;
    omit?: Prisma.PatientAllergyOmit<ExtArgs> | null;
    include?: Prisma.PatientAllergyInclude<ExtArgs> | null;
    where: Prisma.PatientAllergyWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientAllergyCreateInput, Prisma.PatientAllergyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PatientAllergyUpdateInput, Prisma.PatientAllergyUncheckedUpdateInput>;
};
export type PatientAllergyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientAllergySelect<ExtArgs> | null;
    omit?: Prisma.PatientAllergyOmit<ExtArgs> | null;
    include?: Prisma.PatientAllergyInclude<ExtArgs> | null;
    where: Prisma.PatientAllergyWhereUniqueInput;
};
export type PatientAllergyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientAllergyWhereInput;
    limit?: number;
};
export type PatientAllergyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientAllergySelect<ExtArgs> | null;
    omit?: Prisma.PatientAllergyOmit<ExtArgs> | null;
    include?: Prisma.PatientAllergyInclude<ExtArgs> | null;
};

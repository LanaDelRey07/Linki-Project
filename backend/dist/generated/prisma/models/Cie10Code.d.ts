import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type Cie10CodeModel = runtime.Types.Result.DefaultSelection<Prisma.$Cie10CodePayload>;
export type AggregateCie10Code = {
    _count: Cie10CodeCountAggregateOutputType | null;
    _min: Cie10CodeMinAggregateOutputType | null;
    _max: Cie10CodeMaxAggregateOutputType | null;
};
export type Cie10CodeMinAggregateOutputType = {
    id: string | null;
    code: string | null;
    descriptionEs: string | null;
    descriptionEn: string | null;
    category: string | null;
    isActive: boolean | null;
};
export type Cie10CodeMaxAggregateOutputType = {
    id: string | null;
    code: string | null;
    descriptionEs: string | null;
    descriptionEn: string | null;
    category: string | null;
    isActive: boolean | null;
};
export type Cie10CodeCountAggregateOutputType = {
    id: number;
    code: number;
    descriptionEs: number;
    descriptionEn: number;
    category: number;
    isActive: number;
    _all: number;
};
export type Cie10CodeMinAggregateInputType = {
    id?: true;
    code?: true;
    descriptionEs?: true;
    descriptionEn?: true;
    category?: true;
    isActive?: true;
};
export type Cie10CodeMaxAggregateInputType = {
    id?: true;
    code?: true;
    descriptionEs?: true;
    descriptionEn?: true;
    category?: true;
    isActive?: true;
};
export type Cie10CodeCountAggregateInputType = {
    id?: true;
    code?: true;
    descriptionEs?: true;
    descriptionEn?: true;
    category?: true;
    isActive?: true;
    _all?: true;
};
export type Cie10CodeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Cie10CodeWhereInput;
    orderBy?: Prisma.Cie10CodeOrderByWithRelationInput | Prisma.Cie10CodeOrderByWithRelationInput[];
    cursor?: Prisma.Cie10CodeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Cie10CodeCountAggregateInputType;
    _min?: Cie10CodeMinAggregateInputType;
    _max?: Cie10CodeMaxAggregateInputType;
};
export type GetCie10CodeAggregateType<T extends Cie10CodeAggregateArgs> = {
    [P in keyof T & keyof AggregateCie10Code]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCie10Code[P]> : Prisma.GetScalarType<T[P], AggregateCie10Code[P]>;
};
export type Cie10CodeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Cie10CodeWhereInput;
    orderBy?: Prisma.Cie10CodeOrderByWithAggregationInput | Prisma.Cie10CodeOrderByWithAggregationInput[];
    by: Prisma.Cie10CodeScalarFieldEnum[] | Prisma.Cie10CodeScalarFieldEnum;
    having?: Prisma.Cie10CodeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Cie10CodeCountAggregateInputType | true;
    _min?: Cie10CodeMinAggregateInputType;
    _max?: Cie10CodeMaxAggregateInputType;
};
export type Cie10CodeGroupByOutputType = {
    id: string;
    code: string;
    descriptionEs: string;
    descriptionEn: string | null;
    category: string | null;
    isActive: boolean;
    _count: Cie10CodeCountAggregateOutputType | null;
    _min: Cie10CodeMinAggregateOutputType | null;
    _max: Cie10CodeMaxAggregateOutputType | null;
};
export type GetCie10CodeGroupByPayload<T extends Cie10CodeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Cie10CodeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Cie10CodeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Cie10CodeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Cie10CodeGroupByOutputType[P]>;
}>>;
export type Cie10CodeWhereInput = {
    AND?: Prisma.Cie10CodeWhereInput | Prisma.Cie10CodeWhereInput[];
    OR?: Prisma.Cie10CodeWhereInput[];
    NOT?: Prisma.Cie10CodeWhereInput | Prisma.Cie10CodeWhereInput[];
    id?: Prisma.StringFilter<"Cie10Code"> | string;
    code?: Prisma.StringFilter<"Cie10Code"> | string;
    descriptionEs?: Prisma.StringFilter<"Cie10Code"> | string;
    descriptionEn?: Prisma.StringNullableFilter<"Cie10Code"> | string | null;
    category?: Prisma.StringNullableFilter<"Cie10Code"> | string | null;
    isActive?: Prisma.BoolFilter<"Cie10Code"> | boolean;
    diagnoses?: Prisma.EncounterDiagnosisListRelationFilter;
};
export type Cie10CodeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    descriptionEs?: Prisma.SortOrder;
    descriptionEn?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    diagnoses?: Prisma.EncounterDiagnosisOrderByRelationAggregateInput;
};
export type Cie10CodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    AND?: Prisma.Cie10CodeWhereInput | Prisma.Cie10CodeWhereInput[];
    OR?: Prisma.Cie10CodeWhereInput[];
    NOT?: Prisma.Cie10CodeWhereInput | Prisma.Cie10CodeWhereInput[];
    descriptionEs?: Prisma.StringFilter<"Cie10Code"> | string;
    descriptionEn?: Prisma.StringNullableFilter<"Cie10Code"> | string | null;
    category?: Prisma.StringNullableFilter<"Cie10Code"> | string | null;
    isActive?: Prisma.BoolFilter<"Cie10Code"> | boolean;
    diagnoses?: Prisma.EncounterDiagnosisListRelationFilter;
}, "id" | "code">;
export type Cie10CodeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    descriptionEs?: Prisma.SortOrder;
    descriptionEn?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    _count?: Prisma.Cie10CodeCountOrderByAggregateInput;
    _max?: Prisma.Cie10CodeMaxOrderByAggregateInput;
    _min?: Prisma.Cie10CodeMinOrderByAggregateInput;
};
export type Cie10CodeScalarWhereWithAggregatesInput = {
    AND?: Prisma.Cie10CodeScalarWhereWithAggregatesInput | Prisma.Cie10CodeScalarWhereWithAggregatesInput[];
    OR?: Prisma.Cie10CodeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.Cie10CodeScalarWhereWithAggregatesInput | Prisma.Cie10CodeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Cie10Code"> | string;
    code?: Prisma.StringWithAggregatesFilter<"Cie10Code"> | string;
    descriptionEs?: Prisma.StringWithAggregatesFilter<"Cie10Code"> | string;
    descriptionEn?: Prisma.StringNullableWithAggregatesFilter<"Cie10Code"> | string | null;
    category?: Prisma.StringNullableWithAggregatesFilter<"Cie10Code"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"Cie10Code"> | boolean;
};
export type Cie10CodeCreateInput = {
    id: string;
    code: string;
    descriptionEs: string;
    descriptionEn?: string | null;
    category?: string | null;
    isActive?: boolean;
    diagnoses?: Prisma.EncounterDiagnosisCreateNestedManyWithoutCie10EntryInput;
};
export type Cie10CodeUncheckedCreateInput = {
    id: string;
    code: string;
    descriptionEs: string;
    descriptionEn?: string | null;
    category?: string | null;
    isActive?: boolean;
    diagnoses?: Prisma.EncounterDiagnosisUncheckedCreateNestedManyWithoutCie10EntryInput;
};
export type Cie10CodeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    descriptionEs?: Prisma.StringFieldUpdateOperationsInput | string;
    descriptionEn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    diagnoses?: Prisma.EncounterDiagnosisUpdateManyWithoutCie10EntryNestedInput;
};
export type Cie10CodeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    descriptionEs?: Prisma.StringFieldUpdateOperationsInput | string;
    descriptionEn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    diagnoses?: Prisma.EncounterDiagnosisUncheckedUpdateManyWithoutCie10EntryNestedInput;
};
export type Cie10CodeCreateManyInput = {
    id: string;
    code: string;
    descriptionEs: string;
    descriptionEn?: string | null;
    category?: string | null;
    isActive?: boolean;
};
export type Cie10CodeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    descriptionEs?: Prisma.StringFieldUpdateOperationsInput | string;
    descriptionEn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type Cie10CodeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    descriptionEs?: Prisma.StringFieldUpdateOperationsInput | string;
    descriptionEn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type Cie10CodeScalarRelationFilter = {
    is?: Prisma.Cie10CodeWhereInput;
    isNot?: Prisma.Cie10CodeWhereInput;
};
export type Cie10CodeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    descriptionEs?: Prisma.SortOrder;
    descriptionEn?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type Cie10CodeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    descriptionEs?: Prisma.SortOrder;
    descriptionEn?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type Cie10CodeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    descriptionEs?: Prisma.SortOrder;
    descriptionEn?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type Cie10CodeCreateNestedOneWithoutDiagnosesInput = {
    create?: Prisma.XOR<Prisma.Cie10CodeCreateWithoutDiagnosesInput, Prisma.Cie10CodeUncheckedCreateWithoutDiagnosesInput>;
    connectOrCreate?: Prisma.Cie10CodeCreateOrConnectWithoutDiagnosesInput;
    connect?: Prisma.Cie10CodeWhereUniqueInput;
};
export type Cie10CodeUpdateOneRequiredWithoutDiagnosesNestedInput = {
    create?: Prisma.XOR<Prisma.Cie10CodeCreateWithoutDiagnosesInput, Prisma.Cie10CodeUncheckedCreateWithoutDiagnosesInput>;
    connectOrCreate?: Prisma.Cie10CodeCreateOrConnectWithoutDiagnosesInput;
    upsert?: Prisma.Cie10CodeUpsertWithoutDiagnosesInput;
    connect?: Prisma.Cie10CodeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.Cie10CodeUpdateToOneWithWhereWithoutDiagnosesInput, Prisma.Cie10CodeUpdateWithoutDiagnosesInput>, Prisma.Cie10CodeUncheckedUpdateWithoutDiagnosesInput>;
};
export type Cie10CodeCreateWithoutDiagnosesInput = {
    id: string;
    code: string;
    descriptionEs: string;
    descriptionEn?: string | null;
    category?: string | null;
    isActive?: boolean;
};
export type Cie10CodeUncheckedCreateWithoutDiagnosesInput = {
    id: string;
    code: string;
    descriptionEs: string;
    descriptionEn?: string | null;
    category?: string | null;
    isActive?: boolean;
};
export type Cie10CodeCreateOrConnectWithoutDiagnosesInput = {
    where: Prisma.Cie10CodeWhereUniqueInput;
    create: Prisma.XOR<Prisma.Cie10CodeCreateWithoutDiagnosesInput, Prisma.Cie10CodeUncheckedCreateWithoutDiagnosesInput>;
};
export type Cie10CodeUpsertWithoutDiagnosesInput = {
    update: Prisma.XOR<Prisma.Cie10CodeUpdateWithoutDiagnosesInput, Prisma.Cie10CodeUncheckedUpdateWithoutDiagnosesInput>;
    create: Prisma.XOR<Prisma.Cie10CodeCreateWithoutDiagnosesInput, Prisma.Cie10CodeUncheckedCreateWithoutDiagnosesInput>;
    where?: Prisma.Cie10CodeWhereInput;
};
export type Cie10CodeUpdateToOneWithWhereWithoutDiagnosesInput = {
    where?: Prisma.Cie10CodeWhereInput;
    data: Prisma.XOR<Prisma.Cie10CodeUpdateWithoutDiagnosesInput, Prisma.Cie10CodeUncheckedUpdateWithoutDiagnosesInput>;
};
export type Cie10CodeUpdateWithoutDiagnosesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    descriptionEs?: Prisma.StringFieldUpdateOperationsInput | string;
    descriptionEn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type Cie10CodeUncheckedUpdateWithoutDiagnosesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    descriptionEs?: Prisma.StringFieldUpdateOperationsInput | string;
    descriptionEn?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type Cie10CodeCountOutputType = {
    diagnoses: number;
};
export type Cie10CodeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    diagnoses?: boolean | Cie10CodeCountOutputTypeCountDiagnosesArgs;
};
export type Cie10CodeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Cie10CodeCountOutputTypeSelect<ExtArgs> | null;
};
export type Cie10CodeCountOutputTypeCountDiagnosesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EncounterDiagnosisWhereInput;
};
export type Cie10CodeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    descriptionEs?: boolean;
    descriptionEn?: boolean;
    category?: boolean;
    isActive?: boolean;
    diagnoses?: boolean | Prisma.Cie10Code$diagnosesArgs<ExtArgs>;
    _count?: boolean | Prisma.Cie10CodeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cie10Code"]>;
export type Cie10CodeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    descriptionEs?: boolean;
    descriptionEn?: boolean;
    category?: boolean;
    isActive?: boolean;
}, ExtArgs["result"]["cie10Code"]>;
export type Cie10CodeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    descriptionEs?: boolean;
    descriptionEn?: boolean;
    category?: boolean;
    isActive?: boolean;
}, ExtArgs["result"]["cie10Code"]>;
export type Cie10CodeSelectScalar = {
    id?: boolean;
    code?: boolean;
    descriptionEs?: boolean;
    descriptionEn?: boolean;
    category?: boolean;
    isActive?: boolean;
};
export type Cie10CodeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "descriptionEs" | "descriptionEn" | "category" | "isActive", ExtArgs["result"]["cie10Code"]>;
export type Cie10CodeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    diagnoses?: boolean | Prisma.Cie10Code$diagnosesArgs<ExtArgs>;
    _count?: boolean | Prisma.Cie10CodeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type Cie10CodeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type Cie10CodeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $Cie10CodePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Cie10Code";
    objects: {
        diagnoses: Prisma.$EncounterDiagnosisPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        code: string;
        descriptionEs: string;
        descriptionEn: string | null;
        category: string | null;
        isActive: boolean;
    }, ExtArgs["result"]["cie10Code"]>;
    composites: {};
};
export type Cie10CodeGetPayload<S extends boolean | null | undefined | Cie10CodeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$Cie10CodePayload, S>;
export type Cie10CodeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<Cie10CodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Cie10CodeCountAggregateInputType | true;
};
export interface Cie10CodeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Cie10Code'];
        meta: {
            name: 'Cie10Code';
        };
    };
    findUnique<T extends Cie10CodeFindUniqueArgs>(args: Prisma.SelectSubset<T, Cie10CodeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__Cie10CodeClient<runtime.Types.Result.GetResult<Prisma.$Cie10CodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends Cie10CodeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, Cie10CodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__Cie10CodeClient<runtime.Types.Result.GetResult<Prisma.$Cie10CodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends Cie10CodeFindFirstArgs>(args?: Prisma.SelectSubset<T, Cie10CodeFindFirstArgs<ExtArgs>>): Prisma.Prisma__Cie10CodeClient<runtime.Types.Result.GetResult<Prisma.$Cie10CodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends Cie10CodeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, Cie10CodeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__Cie10CodeClient<runtime.Types.Result.GetResult<Prisma.$Cie10CodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends Cie10CodeFindManyArgs>(args?: Prisma.SelectSubset<T, Cie10CodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Cie10CodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends Cie10CodeCreateArgs>(args: Prisma.SelectSubset<T, Cie10CodeCreateArgs<ExtArgs>>): Prisma.Prisma__Cie10CodeClient<runtime.Types.Result.GetResult<Prisma.$Cie10CodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends Cie10CodeCreateManyArgs>(args?: Prisma.SelectSubset<T, Cie10CodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends Cie10CodeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, Cie10CodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Cie10CodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends Cie10CodeDeleteArgs>(args: Prisma.SelectSubset<T, Cie10CodeDeleteArgs<ExtArgs>>): Prisma.Prisma__Cie10CodeClient<runtime.Types.Result.GetResult<Prisma.$Cie10CodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends Cie10CodeUpdateArgs>(args: Prisma.SelectSubset<T, Cie10CodeUpdateArgs<ExtArgs>>): Prisma.Prisma__Cie10CodeClient<runtime.Types.Result.GetResult<Prisma.$Cie10CodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends Cie10CodeDeleteManyArgs>(args?: Prisma.SelectSubset<T, Cie10CodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends Cie10CodeUpdateManyArgs>(args: Prisma.SelectSubset<T, Cie10CodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends Cie10CodeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, Cie10CodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Cie10CodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends Cie10CodeUpsertArgs>(args: Prisma.SelectSubset<T, Cie10CodeUpsertArgs<ExtArgs>>): Prisma.Prisma__Cie10CodeClient<runtime.Types.Result.GetResult<Prisma.$Cie10CodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends Cie10CodeCountArgs>(args?: Prisma.Subset<T, Cie10CodeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Cie10CodeCountAggregateOutputType> : number>;
    aggregate<T extends Cie10CodeAggregateArgs>(args: Prisma.Subset<T, Cie10CodeAggregateArgs>): Prisma.PrismaPromise<GetCie10CodeAggregateType<T>>;
    groupBy<T extends Cie10CodeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: Cie10CodeGroupByArgs['orderBy'];
    } : {
        orderBy?: Cie10CodeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, Cie10CodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCie10CodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: Cie10CodeFieldRefs;
}
export interface Prisma__Cie10CodeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    diagnoses<T extends Prisma.Cie10Code$diagnosesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Cie10Code$diagnosesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EncounterDiagnosisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface Cie10CodeFieldRefs {
    readonly id: Prisma.FieldRef<"Cie10Code", 'String'>;
    readonly code: Prisma.FieldRef<"Cie10Code", 'String'>;
    readonly descriptionEs: Prisma.FieldRef<"Cie10Code", 'String'>;
    readonly descriptionEn: Prisma.FieldRef<"Cie10Code", 'String'>;
    readonly category: Prisma.FieldRef<"Cie10Code", 'String'>;
    readonly isActive: Prisma.FieldRef<"Cie10Code", 'Boolean'>;
}
export type Cie10CodeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Cie10CodeSelect<ExtArgs> | null;
    omit?: Prisma.Cie10CodeOmit<ExtArgs> | null;
    include?: Prisma.Cie10CodeInclude<ExtArgs> | null;
    where: Prisma.Cie10CodeWhereUniqueInput;
};
export type Cie10CodeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Cie10CodeSelect<ExtArgs> | null;
    omit?: Prisma.Cie10CodeOmit<ExtArgs> | null;
    include?: Prisma.Cie10CodeInclude<ExtArgs> | null;
    where: Prisma.Cie10CodeWhereUniqueInput;
};
export type Cie10CodeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Cie10CodeSelect<ExtArgs> | null;
    omit?: Prisma.Cie10CodeOmit<ExtArgs> | null;
    include?: Prisma.Cie10CodeInclude<ExtArgs> | null;
    where?: Prisma.Cie10CodeWhereInput;
    orderBy?: Prisma.Cie10CodeOrderByWithRelationInput | Prisma.Cie10CodeOrderByWithRelationInput[];
    cursor?: Prisma.Cie10CodeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Cie10CodeScalarFieldEnum | Prisma.Cie10CodeScalarFieldEnum[];
};
export type Cie10CodeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Cie10CodeSelect<ExtArgs> | null;
    omit?: Prisma.Cie10CodeOmit<ExtArgs> | null;
    include?: Prisma.Cie10CodeInclude<ExtArgs> | null;
    where?: Prisma.Cie10CodeWhereInput;
    orderBy?: Prisma.Cie10CodeOrderByWithRelationInput | Prisma.Cie10CodeOrderByWithRelationInput[];
    cursor?: Prisma.Cie10CodeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Cie10CodeScalarFieldEnum | Prisma.Cie10CodeScalarFieldEnum[];
};
export type Cie10CodeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Cie10CodeSelect<ExtArgs> | null;
    omit?: Prisma.Cie10CodeOmit<ExtArgs> | null;
    include?: Prisma.Cie10CodeInclude<ExtArgs> | null;
    where?: Prisma.Cie10CodeWhereInput;
    orderBy?: Prisma.Cie10CodeOrderByWithRelationInput | Prisma.Cie10CodeOrderByWithRelationInput[];
    cursor?: Prisma.Cie10CodeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Cie10CodeScalarFieldEnum | Prisma.Cie10CodeScalarFieldEnum[];
};
export type Cie10CodeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Cie10CodeSelect<ExtArgs> | null;
    omit?: Prisma.Cie10CodeOmit<ExtArgs> | null;
    include?: Prisma.Cie10CodeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.Cie10CodeCreateInput, Prisma.Cie10CodeUncheckedCreateInput>;
};
export type Cie10CodeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.Cie10CodeCreateManyInput | Prisma.Cie10CodeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type Cie10CodeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Cie10CodeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.Cie10CodeOmit<ExtArgs> | null;
    data: Prisma.Cie10CodeCreateManyInput | Prisma.Cie10CodeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type Cie10CodeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Cie10CodeSelect<ExtArgs> | null;
    omit?: Prisma.Cie10CodeOmit<ExtArgs> | null;
    include?: Prisma.Cie10CodeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.Cie10CodeUpdateInput, Prisma.Cie10CodeUncheckedUpdateInput>;
    where: Prisma.Cie10CodeWhereUniqueInput;
};
export type Cie10CodeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.Cie10CodeUpdateManyMutationInput, Prisma.Cie10CodeUncheckedUpdateManyInput>;
    where?: Prisma.Cie10CodeWhereInput;
    limit?: number;
};
export type Cie10CodeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Cie10CodeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.Cie10CodeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.Cie10CodeUpdateManyMutationInput, Prisma.Cie10CodeUncheckedUpdateManyInput>;
    where?: Prisma.Cie10CodeWhereInput;
    limit?: number;
};
export type Cie10CodeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Cie10CodeSelect<ExtArgs> | null;
    omit?: Prisma.Cie10CodeOmit<ExtArgs> | null;
    include?: Prisma.Cie10CodeInclude<ExtArgs> | null;
    where: Prisma.Cie10CodeWhereUniqueInput;
    create: Prisma.XOR<Prisma.Cie10CodeCreateInput, Prisma.Cie10CodeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.Cie10CodeUpdateInput, Prisma.Cie10CodeUncheckedUpdateInput>;
};
export type Cie10CodeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Cie10CodeSelect<ExtArgs> | null;
    omit?: Prisma.Cie10CodeOmit<ExtArgs> | null;
    include?: Prisma.Cie10CodeInclude<ExtArgs> | null;
    where: Prisma.Cie10CodeWhereUniqueInput;
};
export type Cie10CodeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Cie10CodeWhereInput;
    limit?: number;
};
export type Cie10Code$diagnosesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Cie10CodeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Cie10CodeSelect<ExtArgs> | null;
    omit?: Prisma.Cie10CodeOmit<ExtArgs> | null;
    include?: Prisma.Cie10CodeInclude<ExtArgs> | null;
};

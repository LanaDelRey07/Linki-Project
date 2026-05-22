import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MedicalSpecialtyModel = runtime.Types.Result.DefaultSelection<Prisma.$MedicalSpecialtyPayload>;
export type AggregateMedicalSpecialty = {
    _count: MedicalSpecialtyCountAggregateOutputType | null;
    _min: MedicalSpecialtyMinAggregateOutputType | null;
    _max: MedicalSpecialtyMaxAggregateOutputType | null;
};
export type MedicalSpecialtyMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    isActive: boolean | null;
};
export type MedicalSpecialtyMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    isActive: boolean | null;
};
export type MedicalSpecialtyCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    isActive: number;
    _all: number;
};
export type MedicalSpecialtyMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    isActive?: true;
};
export type MedicalSpecialtyMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    isActive?: true;
};
export type MedicalSpecialtyCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    isActive?: true;
    _all?: true;
};
export type MedicalSpecialtyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MedicalSpecialtyWhereInput;
    orderBy?: Prisma.MedicalSpecialtyOrderByWithRelationInput | Prisma.MedicalSpecialtyOrderByWithRelationInput[];
    cursor?: Prisma.MedicalSpecialtyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MedicalSpecialtyCountAggregateInputType;
    _min?: MedicalSpecialtyMinAggregateInputType;
    _max?: MedicalSpecialtyMaxAggregateInputType;
};
export type GetMedicalSpecialtyAggregateType<T extends MedicalSpecialtyAggregateArgs> = {
    [P in keyof T & keyof AggregateMedicalSpecialty]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMedicalSpecialty[P]> : Prisma.GetScalarType<T[P], AggregateMedicalSpecialty[P]>;
};
export type MedicalSpecialtyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MedicalSpecialtyWhereInput;
    orderBy?: Prisma.MedicalSpecialtyOrderByWithAggregationInput | Prisma.MedicalSpecialtyOrderByWithAggregationInput[];
    by: Prisma.MedicalSpecialtyScalarFieldEnum[] | Prisma.MedicalSpecialtyScalarFieldEnum;
    having?: Prisma.MedicalSpecialtyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MedicalSpecialtyCountAggregateInputType | true;
    _min?: MedicalSpecialtyMinAggregateInputType;
    _max?: MedicalSpecialtyMaxAggregateInputType;
};
export type MedicalSpecialtyGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    isActive: boolean;
    _count: MedicalSpecialtyCountAggregateOutputType | null;
    _min: MedicalSpecialtyMinAggregateOutputType | null;
    _max: MedicalSpecialtyMaxAggregateOutputType | null;
};
export type GetMedicalSpecialtyGroupByPayload<T extends MedicalSpecialtyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MedicalSpecialtyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MedicalSpecialtyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MedicalSpecialtyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MedicalSpecialtyGroupByOutputType[P]>;
}>>;
export type MedicalSpecialtyWhereInput = {
    AND?: Prisma.MedicalSpecialtyWhereInput | Prisma.MedicalSpecialtyWhereInput[];
    OR?: Prisma.MedicalSpecialtyWhereInput[];
    NOT?: Prisma.MedicalSpecialtyWhereInput | Prisma.MedicalSpecialtyWhereInput[];
    id?: Prisma.StringFilter<"MedicalSpecialty"> | string;
    name?: Prisma.StringFilter<"MedicalSpecialty"> | string;
    description?: Prisma.StringNullableFilter<"MedicalSpecialty"> | string | null;
    isActive?: Prisma.BoolFilter<"MedicalSpecialty"> | boolean;
};
export type MedicalSpecialtyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type MedicalSpecialtyWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name?: string;
    AND?: Prisma.MedicalSpecialtyWhereInput | Prisma.MedicalSpecialtyWhereInput[];
    OR?: Prisma.MedicalSpecialtyWhereInput[];
    NOT?: Prisma.MedicalSpecialtyWhereInput | Prisma.MedicalSpecialtyWhereInput[];
    description?: Prisma.StringNullableFilter<"MedicalSpecialty"> | string | null;
    isActive?: Prisma.BoolFilter<"MedicalSpecialty"> | boolean;
}, "id" | "name">;
export type MedicalSpecialtyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    _count?: Prisma.MedicalSpecialtyCountOrderByAggregateInput;
    _max?: Prisma.MedicalSpecialtyMaxOrderByAggregateInput;
    _min?: Prisma.MedicalSpecialtyMinOrderByAggregateInput;
};
export type MedicalSpecialtyScalarWhereWithAggregatesInput = {
    AND?: Prisma.MedicalSpecialtyScalarWhereWithAggregatesInput | Prisma.MedicalSpecialtyScalarWhereWithAggregatesInput[];
    OR?: Prisma.MedicalSpecialtyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MedicalSpecialtyScalarWhereWithAggregatesInput | Prisma.MedicalSpecialtyScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"MedicalSpecialty"> | string;
    name?: Prisma.StringWithAggregatesFilter<"MedicalSpecialty"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"MedicalSpecialty"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"MedicalSpecialty"> | boolean;
};
export type MedicalSpecialtyCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    isActive?: boolean;
};
export type MedicalSpecialtyUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    isActive?: boolean;
};
export type MedicalSpecialtyUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type MedicalSpecialtyUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type MedicalSpecialtyCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    isActive?: boolean;
};
export type MedicalSpecialtyUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type MedicalSpecialtyUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type MedicalSpecialtyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type MedicalSpecialtyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type MedicalSpecialtyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type MedicalSpecialtySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    isActive?: boolean;
}, ExtArgs["result"]["medicalSpecialty"]>;
export type MedicalSpecialtySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    isActive?: boolean;
}, ExtArgs["result"]["medicalSpecialty"]>;
export type MedicalSpecialtySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    isActive?: boolean;
}, ExtArgs["result"]["medicalSpecialty"]>;
export type MedicalSpecialtySelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    isActive?: boolean;
};
export type MedicalSpecialtyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "isActive", ExtArgs["result"]["medicalSpecialty"]>;
export type $MedicalSpecialtyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MedicalSpecialty";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        description: string | null;
        isActive: boolean;
    }, ExtArgs["result"]["medicalSpecialty"]>;
    composites: {};
};
export type MedicalSpecialtyGetPayload<S extends boolean | null | undefined | MedicalSpecialtyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MedicalSpecialtyPayload, S>;
export type MedicalSpecialtyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MedicalSpecialtyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MedicalSpecialtyCountAggregateInputType | true;
};
export interface MedicalSpecialtyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MedicalSpecialty'];
        meta: {
            name: 'MedicalSpecialty';
        };
    };
    findUnique<T extends MedicalSpecialtyFindUniqueArgs>(args: Prisma.SelectSubset<T, MedicalSpecialtyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MedicalSpecialtyClient<runtime.Types.Result.GetResult<Prisma.$MedicalSpecialtyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MedicalSpecialtyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MedicalSpecialtyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MedicalSpecialtyClient<runtime.Types.Result.GetResult<Prisma.$MedicalSpecialtyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MedicalSpecialtyFindFirstArgs>(args?: Prisma.SelectSubset<T, MedicalSpecialtyFindFirstArgs<ExtArgs>>): Prisma.Prisma__MedicalSpecialtyClient<runtime.Types.Result.GetResult<Prisma.$MedicalSpecialtyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MedicalSpecialtyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MedicalSpecialtyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MedicalSpecialtyClient<runtime.Types.Result.GetResult<Prisma.$MedicalSpecialtyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MedicalSpecialtyFindManyArgs>(args?: Prisma.SelectSubset<T, MedicalSpecialtyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MedicalSpecialtyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MedicalSpecialtyCreateArgs>(args: Prisma.SelectSubset<T, MedicalSpecialtyCreateArgs<ExtArgs>>): Prisma.Prisma__MedicalSpecialtyClient<runtime.Types.Result.GetResult<Prisma.$MedicalSpecialtyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MedicalSpecialtyCreateManyArgs>(args?: Prisma.SelectSubset<T, MedicalSpecialtyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MedicalSpecialtyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MedicalSpecialtyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MedicalSpecialtyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MedicalSpecialtyDeleteArgs>(args: Prisma.SelectSubset<T, MedicalSpecialtyDeleteArgs<ExtArgs>>): Prisma.Prisma__MedicalSpecialtyClient<runtime.Types.Result.GetResult<Prisma.$MedicalSpecialtyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MedicalSpecialtyUpdateArgs>(args: Prisma.SelectSubset<T, MedicalSpecialtyUpdateArgs<ExtArgs>>): Prisma.Prisma__MedicalSpecialtyClient<runtime.Types.Result.GetResult<Prisma.$MedicalSpecialtyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MedicalSpecialtyDeleteManyArgs>(args?: Prisma.SelectSubset<T, MedicalSpecialtyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MedicalSpecialtyUpdateManyArgs>(args: Prisma.SelectSubset<T, MedicalSpecialtyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MedicalSpecialtyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MedicalSpecialtyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MedicalSpecialtyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MedicalSpecialtyUpsertArgs>(args: Prisma.SelectSubset<T, MedicalSpecialtyUpsertArgs<ExtArgs>>): Prisma.Prisma__MedicalSpecialtyClient<runtime.Types.Result.GetResult<Prisma.$MedicalSpecialtyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MedicalSpecialtyCountArgs>(args?: Prisma.Subset<T, MedicalSpecialtyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MedicalSpecialtyCountAggregateOutputType> : number>;
    aggregate<T extends MedicalSpecialtyAggregateArgs>(args: Prisma.Subset<T, MedicalSpecialtyAggregateArgs>): Prisma.PrismaPromise<GetMedicalSpecialtyAggregateType<T>>;
    groupBy<T extends MedicalSpecialtyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MedicalSpecialtyGroupByArgs['orderBy'];
    } : {
        orderBy?: MedicalSpecialtyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MedicalSpecialtyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicalSpecialtyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MedicalSpecialtyFieldRefs;
}
export interface Prisma__MedicalSpecialtyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MedicalSpecialtyFieldRefs {
    readonly id: Prisma.FieldRef<"MedicalSpecialty", 'String'>;
    readonly name: Prisma.FieldRef<"MedicalSpecialty", 'String'>;
    readonly description: Prisma.FieldRef<"MedicalSpecialty", 'String'>;
    readonly isActive: Prisma.FieldRef<"MedicalSpecialty", 'Boolean'>;
}
export type MedicalSpecialtyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicalSpecialtySelect<ExtArgs> | null;
    omit?: Prisma.MedicalSpecialtyOmit<ExtArgs> | null;
    where: Prisma.MedicalSpecialtyWhereUniqueInput;
};
export type MedicalSpecialtyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicalSpecialtySelect<ExtArgs> | null;
    omit?: Prisma.MedicalSpecialtyOmit<ExtArgs> | null;
    where: Prisma.MedicalSpecialtyWhereUniqueInput;
};
export type MedicalSpecialtyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicalSpecialtySelect<ExtArgs> | null;
    omit?: Prisma.MedicalSpecialtyOmit<ExtArgs> | null;
    where?: Prisma.MedicalSpecialtyWhereInput;
    orderBy?: Prisma.MedicalSpecialtyOrderByWithRelationInput | Prisma.MedicalSpecialtyOrderByWithRelationInput[];
    cursor?: Prisma.MedicalSpecialtyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MedicalSpecialtyScalarFieldEnum | Prisma.MedicalSpecialtyScalarFieldEnum[];
};
export type MedicalSpecialtyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicalSpecialtySelect<ExtArgs> | null;
    omit?: Prisma.MedicalSpecialtyOmit<ExtArgs> | null;
    where?: Prisma.MedicalSpecialtyWhereInput;
    orderBy?: Prisma.MedicalSpecialtyOrderByWithRelationInput | Prisma.MedicalSpecialtyOrderByWithRelationInput[];
    cursor?: Prisma.MedicalSpecialtyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MedicalSpecialtyScalarFieldEnum | Prisma.MedicalSpecialtyScalarFieldEnum[];
};
export type MedicalSpecialtyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicalSpecialtySelect<ExtArgs> | null;
    omit?: Prisma.MedicalSpecialtyOmit<ExtArgs> | null;
    where?: Prisma.MedicalSpecialtyWhereInput;
    orderBy?: Prisma.MedicalSpecialtyOrderByWithRelationInput | Prisma.MedicalSpecialtyOrderByWithRelationInput[];
    cursor?: Prisma.MedicalSpecialtyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MedicalSpecialtyScalarFieldEnum | Prisma.MedicalSpecialtyScalarFieldEnum[];
};
export type MedicalSpecialtyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicalSpecialtySelect<ExtArgs> | null;
    omit?: Prisma.MedicalSpecialtyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MedicalSpecialtyCreateInput, Prisma.MedicalSpecialtyUncheckedCreateInput>;
};
export type MedicalSpecialtyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MedicalSpecialtyCreateManyInput | Prisma.MedicalSpecialtyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MedicalSpecialtyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicalSpecialtySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MedicalSpecialtyOmit<ExtArgs> | null;
    data: Prisma.MedicalSpecialtyCreateManyInput | Prisma.MedicalSpecialtyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MedicalSpecialtyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicalSpecialtySelect<ExtArgs> | null;
    omit?: Prisma.MedicalSpecialtyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MedicalSpecialtyUpdateInput, Prisma.MedicalSpecialtyUncheckedUpdateInput>;
    where: Prisma.MedicalSpecialtyWhereUniqueInput;
};
export type MedicalSpecialtyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MedicalSpecialtyUpdateManyMutationInput, Prisma.MedicalSpecialtyUncheckedUpdateManyInput>;
    where?: Prisma.MedicalSpecialtyWhereInput;
    limit?: number;
};
export type MedicalSpecialtyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicalSpecialtySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MedicalSpecialtyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MedicalSpecialtyUpdateManyMutationInput, Prisma.MedicalSpecialtyUncheckedUpdateManyInput>;
    where?: Prisma.MedicalSpecialtyWhereInput;
    limit?: number;
};
export type MedicalSpecialtyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicalSpecialtySelect<ExtArgs> | null;
    omit?: Prisma.MedicalSpecialtyOmit<ExtArgs> | null;
    where: Prisma.MedicalSpecialtyWhereUniqueInput;
    create: Prisma.XOR<Prisma.MedicalSpecialtyCreateInput, Prisma.MedicalSpecialtyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MedicalSpecialtyUpdateInput, Prisma.MedicalSpecialtyUncheckedUpdateInput>;
};
export type MedicalSpecialtyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicalSpecialtySelect<ExtArgs> | null;
    omit?: Prisma.MedicalSpecialtyOmit<ExtArgs> | null;
    where: Prisma.MedicalSpecialtyWhereUniqueInput;
};
export type MedicalSpecialtyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MedicalSpecialtyWhereInput;
    limit?: number;
};
export type MedicalSpecialtyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicalSpecialtySelect<ExtArgs> | null;
    omit?: Prisma.MedicalSpecialtyOmit<ExtArgs> | null;
};

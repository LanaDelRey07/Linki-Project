import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LabStudiesCatalogModel = runtime.Types.Result.DefaultSelection<Prisma.$LabStudiesCatalogPayload>;
export type AggregateLabStudiesCatalog = {
    _count: LabStudiesCatalogCountAggregateOutputType | null;
    _min: LabStudiesCatalogMinAggregateOutputType | null;
    _max: LabStudiesCatalogMaxAggregateOutputType | null;
};
export type LabStudiesCatalogMinAggregateOutputType = {
    id: string | null;
    nombre: string | null;
    categoria: string | null;
    isActive: boolean | null;
};
export type LabStudiesCatalogMaxAggregateOutputType = {
    id: string | null;
    nombre: string | null;
    categoria: string | null;
    isActive: boolean | null;
};
export type LabStudiesCatalogCountAggregateOutputType = {
    id: number;
    nombre: number;
    categoria: number;
    isActive: number;
    _all: number;
};
export type LabStudiesCatalogMinAggregateInputType = {
    id?: true;
    nombre?: true;
    categoria?: true;
    isActive?: true;
};
export type LabStudiesCatalogMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    categoria?: true;
    isActive?: true;
};
export type LabStudiesCatalogCountAggregateInputType = {
    id?: true;
    nombre?: true;
    categoria?: true;
    isActive?: true;
    _all?: true;
};
export type LabStudiesCatalogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LabStudiesCatalogWhereInput;
    orderBy?: Prisma.LabStudiesCatalogOrderByWithRelationInput | Prisma.LabStudiesCatalogOrderByWithRelationInput[];
    cursor?: Prisma.LabStudiesCatalogWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LabStudiesCatalogCountAggregateInputType;
    _min?: LabStudiesCatalogMinAggregateInputType;
    _max?: LabStudiesCatalogMaxAggregateInputType;
};
export type GetLabStudiesCatalogAggregateType<T extends LabStudiesCatalogAggregateArgs> = {
    [P in keyof T & keyof AggregateLabStudiesCatalog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLabStudiesCatalog[P]> : Prisma.GetScalarType<T[P], AggregateLabStudiesCatalog[P]>;
};
export type LabStudiesCatalogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LabStudiesCatalogWhereInput;
    orderBy?: Prisma.LabStudiesCatalogOrderByWithAggregationInput | Prisma.LabStudiesCatalogOrderByWithAggregationInput[];
    by: Prisma.LabStudiesCatalogScalarFieldEnum[] | Prisma.LabStudiesCatalogScalarFieldEnum;
    having?: Prisma.LabStudiesCatalogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LabStudiesCatalogCountAggregateInputType | true;
    _min?: LabStudiesCatalogMinAggregateInputType;
    _max?: LabStudiesCatalogMaxAggregateInputType;
};
export type LabStudiesCatalogGroupByOutputType = {
    id: string;
    nombre: string;
    categoria: string | null;
    isActive: boolean;
    _count: LabStudiesCatalogCountAggregateOutputType | null;
    _min: LabStudiesCatalogMinAggregateOutputType | null;
    _max: LabStudiesCatalogMaxAggregateOutputType | null;
};
export type GetLabStudiesCatalogGroupByPayload<T extends LabStudiesCatalogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LabStudiesCatalogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LabStudiesCatalogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LabStudiesCatalogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LabStudiesCatalogGroupByOutputType[P]>;
}>>;
export type LabStudiesCatalogWhereInput = {
    AND?: Prisma.LabStudiesCatalogWhereInput | Prisma.LabStudiesCatalogWhereInput[];
    OR?: Prisma.LabStudiesCatalogWhereInput[];
    NOT?: Prisma.LabStudiesCatalogWhereInput | Prisma.LabStudiesCatalogWhereInput[];
    id?: Prisma.StringFilter<"LabStudiesCatalog"> | string;
    nombre?: Prisma.StringFilter<"LabStudiesCatalog"> | string;
    categoria?: Prisma.StringNullableFilter<"LabStudiesCatalog"> | string | null;
    isActive?: Prisma.BoolFilter<"LabStudiesCatalog"> | boolean;
};
export type LabStudiesCatalogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    categoria?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type LabStudiesCatalogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.LabStudiesCatalogWhereInput | Prisma.LabStudiesCatalogWhereInput[];
    OR?: Prisma.LabStudiesCatalogWhereInput[];
    NOT?: Prisma.LabStudiesCatalogWhereInput | Prisma.LabStudiesCatalogWhereInput[];
    nombre?: Prisma.StringFilter<"LabStudiesCatalog"> | string;
    categoria?: Prisma.StringNullableFilter<"LabStudiesCatalog"> | string | null;
    isActive?: Prisma.BoolFilter<"LabStudiesCatalog"> | boolean;
}, "id">;
export type LabStudiesCatalogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    categoria?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    _count?: Prisma.LabStudiesCatalogCountOrderByAggregateInput;
    _max?: Prisma.LabStudiesCatalogMaxOrderByAggregateInput;
    _min?: Prisma.LabStudiesCatalogMinOrderByAggregateInput;
};
export type LabStudiesCatalogScalarWhereWithAggregatesInput = {
    AND?: Prisma.LabStudiesCatalogScalarWhereWithAggregatesInput | Prisma.LabStudiesCatalogScalarWhereWithAggregatesInput[];
    OR?: Prisma.LabStudiesCatalogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LabStudiesCatalogScalarWhereWithAggregatesInput | Prisma.LabStudiesCatalogScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LabStudiesCatalog"> | string;
    nombre?: Prisma.StringWithAggregatesFilter<"LabStudiesCatalog"> | string;
    categoria?: Prisma.StringNullableWithAggregatesFilter<"LabStudiesCatalog"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"LabStudiesCatalog"> | boolean;
};
export type LabStudiesCatalogCreateInput = {
    id?: string;
    nombre: string;
    categoria?: string | null;
    isActive?: boolean;
};
export type LabStudiesCatalogUncheckedCreateInput = {
    id?: string;
    nombre: string;
    categoria?: string | null;
    isActive?: boolean;
};
export type LabStudiesCatalogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type LabStudiesCatalogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type LabStudiesCatalogCreateManyInput = {
    id?: string;
    nombre: string;
    categoria?: string | null;
    isActive?: boolean;
};
export type LabStudiesCatalogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type LabStudiesCatalogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type LabStudiesCatalogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type LabStudiesCatalogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type LabStudiesCatalogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type LabStudiesCatalogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    categoria?: boolean;
    isActive?: boolean;
}, ExtArgs["result"]["labStudiesCatalog"]>;
export type LabStudiesCatalogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    categoria?: boolean;
    isActive?: boolean;
}, ExtArgs["result"]["labStudiesCatalog"]>;
export type LabStudiesCatalogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    categoria?: boolean;
    isActive?: boolean;
}, ExtArgs["result"]["labStudiesCatalog"]>;
export type LabStudiesCatalogSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    categoria?: boolean;
    isActive?: boolean;
};
export type LabStudiesCatalogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "categoria" | "isActive", ExtArgs["result"]["labStudiesCatalog"]>;
export type $LabStudiesCatalogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LabStudiesCatalog";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nombre: string;
        categoria: string | null;
        isActive: boolean;
    }, ExtArgs["result"]["labStudiesCatalog"]>;
    composites: {};
};
export type LabStudiesCatalogGetPayload<S extends boolean | null | undefined | LabStudiesCatalogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LabStudiesCatalogPayload, S>;
export type LabStudiesCatalogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LabStudiesCatalogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LabStudiesCatalogCountAggregateInputType | true;
};
export interface LabStudiesCatalogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LabStudiesCatalog'];
        meta: {
            name: 'LabStudiesCatalog';
        };
    };
    findUnique<T extends LabStudiesCatalogFindUniqueArgs>(args: Prisma.SelectSubset<T, LabStudiesCatalogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LabStudiesCatalogClient<runtime.Types.Result.GetResult<Prisma.$LabStudiesCatalogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LabStudiesCatalogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LabStudiesCatalogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LabStudiesCatalogClient<runtime.Types.Result.GetResult<Prisma.$LabStudiesCatalogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LabStudiesCatalogFindFirstArgs>(args?: Prisma.SelectSubset<T, LabStudiesCatalogFindFirstArgs<ExtArgs>>): Prisma.Prisma__LabStudiesCatalogClient<runtime.Types.Result.GetResult<Prisma.$LabStudiesCatalogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LabStudiesCatalogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LabStudiesCatalogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LabStudiesCatalogClient<runtime.Types.Result.GetResult<Prisma.$LabStudiesCatalogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LabStudiesCatalogFindManyArgs>(args?: Prisma.SelectSubset<T, LabStudiesCatalogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LabStudiesCatalogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LabStudiesCatalogCreateArgs>(args: Prisma.SelectSubset<T, LabStudiesCatalogCreateArgs<ExtArgs>>): Prisma.Prisma__LabStudiesCatalogClient<runtime.Types.Result.GetResult<Prisma.$LabStudiesCatalogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LabStudiesCatalogCreateManyArgs>(args?: Prisma.SelectSubset<T, LabStudiesCatalogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LabStudiesCatalogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LabStudiesCatalogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LabStudiesCatalogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LabStudiesCatalogDeleteArgs>(args: Prisma.SelectSubset<T, LabStudiesCatalogDeleteArgs<ExtArgs>>): Prisma.Prisma__LabStudiesCatalogClient<runtime.Types.Result.GetResult<Prisma.$LabStudiesCatalogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LabStudiesCatalogUpdateArgs>(args: Prisma.SelectSubset<T, LabStudiesCatalogUpdateArgs<ExtArgs>>): Prisma.Prisma__LabStudiesCatalogClient<runtime.Types.Result.GetResult<Prisma.$LabStudiesCatalogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LabStudiesCatalogDeleteManyArgs>(args?: Prisma.SelectSubset<T, LabStudiesCatalogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LabStudiesCatalogUpdateManyArgs>(args: Prisma.SelectSubset<T, LabStudiesCatalogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LabStudiesCatalogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LabStudiesCatalogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LabStudiesCatalogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LabStudiesCatalogUpsertArgs>(args: Prisma.SelectSubset<T, LabStudiesCatalogUpsertArgs<ExtArgs>>): Prisma.Prisma__LabStudiesCatalogClient<runtime.Types.Result.GetResult<Prisma.$LabStudiesCatalogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LabStudiesCatalogCountArgs>(args?: Prisma.Subset<T, LabStudiesCatalogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LabStudiesCatalogCountAggregateOutputType> : number>;
    aggregate<T extends LabStudiesCatalogAggregateArgs>(args: Prisma.Subset<T, LabStudiesCatalogAggregateArgs>): Prisma.PrismaPromise<GetLabStudiesCatalogAggregateType<T>>;
    groupBy<T extends LabStudiesCatalogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LabStudiesCatalogGroupByArgs['orderBy'];
    } : {
        orderBy?: LabStudiesCatalogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LabStudiesCatalogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLabStudiesCatalogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LabStudiesCatalogFieldRefs;
}
export interface Prisma__LabStudiesCatalogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LabStudiesCatalogFieldRefs {
    readonly id: Prisma.FieldRef<"LabStudiesCatalog", 'String'>;
    readonly nombre: Prisma.FieldRef<"LabStudiesCatalog", 'String'>;
    readonly categoria: Prisma.FieldRef<"LabStudiesCatalog", 'String'>;
    readonly isActive: Prisma.FieldRef<"LabStudiesCatalog", 'Boolean'>;
}
export type LabStudiesCatalogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LabStudiesCatalogSelect<ExtArgs> | null;
    omit?: Prisma.LabStudiesCatalogOmit<ExtArgs> | null;
    where: Prisma.LabStudiesCatalogWhereUniqueInput;
};
export type LabStudiesCatalogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LabStudiesCatalogSelect<ExtArgs> | null;
    omit?: Prisma.LabStudiesCatalogOmit<ExtArgs> | null;
    where: Prisma.LabStudiesCatalogWhereUniqueInput;
};
export type LabStudiesCatalogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LabStudiesCatalogSelect<ExtArgs> | null;
    omit?: Prisma.LabStudiesCatalogOmit<ExtArgs> | null;
    where?: Prisma.LabStudiesCatalogWhereInput;
    orderBy?: Prisma.LabStudiesCatalogOrderByWithRelationInput | Prisma.LabStudiesCatalogOrderByWithRelationInput[];
    cursor?: Prisma.LabStudiesCatalogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LabStudiesCatalogScalarFieldEnum | Prisma.LabStudiesCatalogScalarFieldEnum[];
};
export type LabStudiesCatalogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LabStudiesCatalogSelect<ExtArgs> | null;
    omit?: Prisma.LabStudiesCatalogOmit<ExtArgs> | null;
    where?: Prisma.LabStudiesCatalogWhereInput;
    orderBy?: Prisma.LabStudiesCatalogOrderByWithRelationInput | Prisma.LabStudiesCatalogOrderByWithRelationInput[];
    cursor?: Prisma.LabStudiesCatalogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LabStudiesCatalogScalarFieldEnum | Prisma.LabStudiesCatalogScalarFieldEnum[];
};
export type LabStudiesCatalogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LabStudiesCatalogSelect<ExtArgs> | null;
    omit?: Prisma.LabStudiesCatalogOmit<ExtArgs> | null;
    where?: Prisma.LabStudiesCatalogWhereInput;
    orderBy?: Prisma.LabStudiesCatalogOrderByWithRelationInput | Prisma.LabStudiesCatalogOrderByWithRelationInput[];
    cursor?: Prisma.LabStudiesCatalogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LabStudiesCatalogScalarFieldEnum | Prisma.LabStudiesCatalogScalarFieldEnum[];
};
export type LabStudiesCatalogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LabStudiesCatalogSelect<ExtArgs> | null;
    omit?: Prisma.LabStudiesCatalogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LabStudiesCatalogCreateInput, Prisma.LabStudiesCatalogUncheckedCreateInput>;
};
export type LabStudiesCatalogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LabStudiesCatalogCreateManyInput | Prisma.LabStudiesCatalogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LabStudiesCatalogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LabStudiesCatalogSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LabStudiesCatalogOmit<ExtArgs> | null;
    data: Prisma.LabStudiesCatalogCreateManyInput | Prisma.LabStudiesCatalogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LabStudiesCatalogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LabStudiesCatalogSelect<ExtArgs> | null;
    omit?: Prisma.LabStudiesCatalogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LabStudiesCatalogUpdateInput, Prisma.LabStudiesCatalogUncheckedUpdateInput>;
    where: Prisma.LabStudiesCatalogWhereUniqueInput;
};
export type LabStudiesCatalogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LabStudiesCatalogUpdateManyMutationInput, Prisma.LabStudiesCatalogUncheckedUpdateManyInput>;
    where?: Prisma.LabStudiesCatalogWhereInput;
    limit?: number;
};
export type LabStudiesCatalogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LabStudiesCatalogSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LabStudiesCatalogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LabStudiesCatalogUpdateManyMutationInput, Prisma.LabStudiesCatalogUncheckedUpdateManyInput>;
    where?: Prisma.LabStudiesCatalogWhereInput;
    limit?: number;
};
export type LabStudiesCatalogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LabStudiesCatalogSelect<ExtArgs> | null;
    omit?: Prisma.LabStudiesCatalogOmit<ExtArgs> | null;
    where: Prisma.LabStudiesCatalogWhereUniqueInput;
    create: Prisma.XOR<Prisma.LabStudiesCatalogCreateInput, Prisma.LabStudiesCatalogUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LabStudiesCatalogUpdateInput, Prisma.LabStudiesCatalogUncheckedUpdateInput>;
};
export type LabStudiesCatalogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LabStudiesCatalogSelect<ExtArgs> | null;
    omit?: Prisma.LabStudiesCatalogOmit<ExtArgs> | null;
    where: Prisma.LabStudiesCatalogWhereUniqueInput;
};
export type LabStudiesCatalogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LabStudiesCatalogWhereInput;
    limit?: number;
};
export type LabStudiesCatalogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LabStudiesCatalogSelect<ExtArgs> | null;
    omit?: Prisma.LabStudiesCatalogOmit<ExtArgs> | null;
};

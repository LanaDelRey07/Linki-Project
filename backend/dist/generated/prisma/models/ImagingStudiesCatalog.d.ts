import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ImagingStudiesCatalogModel = runtime.Types.Result.DefaultSelection<Prisma.$ImagingStudiesCatalogPayload>;
export type AggregateImagingStudiesCatalog = {
    _count: ImagingStudiesCatalogCountAggregateOutputType | null;
    _min: ImagingStudiesCatalogMinAggregateOutputType | null;
    _max: ImagingStudiesCatalogMaxAggregateOutputType | null;
};
export type ImagingStudiesCatalogMinAggregateOutputType = {
    id: string | null;
    nombre: string | null;
    categoria: string | null;
    isActive: boolean | null;
};
export type ImagingStudiesCatalogMaxAggregateOutputType = {
    id: string | null;
    nombre: string | null;
    categoria: string | null;
    isActive: boolean | null;
};
export type ImagingStudiesCatalogCountAggregateOutputType = {
    id: number;
    nombre: number;
    categoria: number;
    isActive: number;
    _all: number;
};
export type ImagingStudiesCatalogMinAggregateInputType = {
    id?: true;
    nombre?: true;
    categoria?: true;
    isActive?: true;
};
export type ImagingStudiesCatalogMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    categoria?: true;
    isActive?: true;
};
export type ImagingStudiesCatalogCountAggregateInputType = {
    id?: true;
    nombre?: true;
    categoria?: true;
    isActive?: true;
    _all?: true;
};
export type ImagingStudiesCatalogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ImagingStudiesCatalogWhereInput;
    orderBy?: Prisma.ImagingStudiesCatalogOrderByWithRelationInput | Prisma.ImagingStudiesCatalogOrderByWithRelationInput[];
    cursor?: Prisma.ImagingStudiesCatalogWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ImagingStudiesCatalogCountAggregateInputType;
    _min?: ImagingStudiesCatalogMinAggregateInputType;
    _max?: ImagingStudiesCatalogMaxAggregateInputType;
};
export type GetImagingStudiesCatalogAggregateType<T extends ImagingStudiesCatalogAggregateArgs> = {
    [P in keyof T & keyof AggregateImagingStudiesCatalog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateImagingStudiesCatalog[P]> : Prisma.GetScalarType<T[P], AggregateImagingStudiesCatalog[P]>;
};
export type ImagingStudiesCatalogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ImagingStudiesCatalogWhereInput;
    orderBy?: Prisma.ImagingStudiesCatalogOrderByWithAggregationInput | Prisma.ImagingStudiesCatalogOrderByWithAggregationInput[];
    by: Prisma.ImagingStudiesCatalogScalarFieldEnum[] | Prisma.ImagingStudiesCatalogScalarFieldEnum;
    having?: Prisma.ImagingStudiesCatalogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ImagingStudiesCatalogCountAggregateInputType | true;
    _min?: ImagingStudiesCatalogMinAggregateInputType;
    _max?: ImagingStudiesCatalogMaxAggregateInputType;
};
export type ImagingStudiesCatalogGroupByOutputType = {
    id: string;
    nombre: string;
    categoria: string | null;
    isActive: boolean;
    _count: ImagingStudiesCatalogCountAggregateOutputType | null;
    _min: ImagingStudiesCatalogMinAggregateOutputType | null;
    _max: ImagingStudiesCatalogMaxAggregateOutputType | null;
};
export type GetImagingStudiesCatalogGroupByPayload<T extends ImagingStudiesCatalogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ImagingStudiesCatalogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ImagingStudiesCatalogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ImagingStudiesCatalogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ImagingStudiesCatalogGroupByOutputType[P]>;
}>>;
export type ImagingStudiesCatalogWhereInput = {
    AND?: Prisma.ImagingStudiesCatalogWhereInput | Prisma.ImagingStudiesCatalogWhereInput[];
    OR?: Prisma.ImagingStudiesCatalogWhereInput[];
    NOT?: Prisma.ImagingStudiesCatalogWhereInput | Prisma.ImagingStudiesCatalogWhereInput[];
    id?: Prisma.StringFilter<"ImagingStudiesCatalog"> | string;
    nombre?: Prisma.StringFilter<"ImagingStudiesCatalog"> | string;
    categoria?: Prisma.StringNullableFilter<"ImagingStudiesCatalog"> | string | null;
    isActive?: Prisma.BoolFilter<"ImagingStudiesCatalog"> | boolean;
};
export type ImagingStudiesCatalogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    categoria?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type ImagingStudiesCatalogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ImagingStudiesCatalogWhereInput | Prisma.ImagingStudiesCatalogWhereInput[];
    OR?: Prisma.ImagingStudiesCatalogWhereInput[];
    NOT?: Prisma.ImagingStudiesCatalogWhereInput | Prisma.ImagingStudiesCatalogWhereInput[];
    nombre?: Prisma.StringFilter<"ImagingStudiesCatalog"> | string;
    categoria?: Prisma.StringNullableFilter<"ImagingStudiesCatalog"> | string | null;
    isActive?: Prisma.BoolFilter<"ImagingStudiesCatalog"> | boolean;
}, "id">;
export type ImagingStudiesCatalogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    categoria?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    _count?: Prisma.ImagingStudiesCatalogCountOrderByAggregateInput;
    _max?: Prisma.ImagingStudiesCatalogMaxOrderByAggregateInput;
    _min?: Prisma.ImagingStudiesCatalogMinOrderByAggregateInput;
};
export type ImagingStudiesCatalogScalarWhereWithAggregatesInput = {
    AND?: Prisma.ImagingStudiesCatalogScalarWhereWithAggregatesInput | Prisma.ImagingStudiesCatalogScalarWhereWithAggregatesInput[];
    OR?: Prisma.ImagingStudiesCatalogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ImagingStudiesCatalogScalarWhereWithAggregatesInput | Prisma.ImagingStudiesCatalogScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ImagingStudiesCatalog"> | string;
    nombre?: Prisma.StringWithAggregatesFilter<"ImagingStudiesCatalog"> | string;
    categoria?: Prisma.StringNullableWithAggregatesFilter<"ImagingStudiesCatalog"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"ImagingStudiesCatalog"> | boolean;
};
export type ImagingStudiesCatalogCreateInput = {
    id?: string;
    nombre: string;
    categoria?: string | null;
    isActive?: boolean;
};
export type ImagingStudiesCatalogUncheckedCreateInput = {
    id?: string;
    nombre: string;
    categoria?: string | null;
    isActive?: boolean;
};
export type ImagingStudiesCatalogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ImagingStudiesCatalogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ImagingStudiesCatalogCreateManyInput = {
    id?: string;
    nombre: string;
    categoria?: string | null;
    isActive?: boolean;
};
export type ImagingStudiesCatalogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ImagingStudiesCatalogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ImagingStudiesCatalogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type ImagingStudiesCatalogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type ImagingStudiesCatalogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type ImagingStudiesCatalogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    categoria?: boolean;
    isActive?: boolean;
}, ExtArgs["result"]["imagingStudiesCatalog"]>;
export type ImagingStudiesCatalogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    categoria?: boolean;
    isActive?: boolean;
}, ExtArgs["result"]["imagingStudiesCatalog"]>;
export type ImagingStudiesCatalogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    categoria?: boolean;
    isActive?: boolean;
}, ExtArgs["result"]["imagingStudiesCatalog"]>;
export type ImagingStudiesCatalogSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    categoria?: boolean;
    isActive?: boolean;
};
export type ImagingStudiesCatalogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "categoria" | "isActive", ExtArgs["result"]["imagingStudiesCatalog"]>;
export type $ImagingStudiesCatalogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ImagingStudiesCatalog";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nombre: string;
        categoria: string | null;
        isActive: boolean;
    }, ExtArgs["result"]["imagingStudiesCatalog"]>;
    composites: {};
};
export type ImagingStudiesCatalogGetPayload<S extends boolean | null | undefined | ImagingStudiesCatalogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ImagingStudiesCatalogPayload, S>;
export type ImagingStudiesCatalogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ImagingStudiesCatalogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ImagingStudiesCatalogCountAggregateInputType | true;
};
export interface ImagingStudiesCatalogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ImagingStudiesCatalog'];
        meta: {
            name: 'ImagingStudiesCatalog';
        };
    };
    findUnique<T extends ImagingStudiesCatalogFindUniqueArgs>(args: Prisma.SelectSubset<T, ImagingStudiesCatalogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ImagingStudiesCatalogClient<runtime.Types.Result.GetResult<Prisma.$ImagingStudiesCatalogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ImagingStudiesCatalogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ImagingStudiesCatalogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ImagingStudiesCatalogClient<runtime.Types.Result.GetResult<Prisma.$ImagingStudiesCatalogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ImagingStudiesCatalogFindFirstArgs>(args?: Prisma.SelectSubset<T, ImagingStudiesCatalogFindFirstArgs<ExtArgs>>): Prisma.Prisma__ImagingStudiesCatalogClient<runtime.Types.Result.GetResult<Prisma.$ImagingStudiesCatalogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ImagingStudiesCatalogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ImagingStudiesCatalogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ImagingStudiesCatalogClient<runtime.Types.Result.GetResult<Prisma.$ImagingStudiesCatalogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ImagingStudiesCatalogFindManyArgs>(args?: Prisma.SelectSubset<T, ImagingStudiesCatalogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ImagingStudiesCatalogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ImagingStudiesCatalogCreateArgs>(args: Prisma.SelectSubset<T, ImagingStudiesCatalogCreateArgs<ExtArgs>>): Prisma.Prisma__ImagingStudiesCatalogClient<runtime.Types.Result.GetResult<Prisma.$ImagingStudiesCatalogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ImagingStudiesCatalogCreateManyArgs>(args?: Prisma.SelectSubset<T, ImagingStudiesCatalogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ImagingStudiesCatalogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ImagingStudiesCatalogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ImagingStudiesCatalogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ImagingStudiesCatalogDeleteArgs>(args: Prisma.SelectSubset<T, ImagingStudiesCatalogDeleteArgs<ExtArgs>>): Prisma.Prisma__ImagingStudiesCatalogClient<runtime.Types.Result.GetResult<Prisma.$ImagingStudiesCatalogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ImagingStudiesCatalogUpdateArgs>(args: Prisma.SelectSubset<T, ImagingStudiesCatalogUpdateArgs<ExtArgs>>): Prisma.Prisma__ImagingStudiesCatalogClient<runtime.Types.Result.GetResult<Prisma.$ImagingStudiesCatalogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ImagingStudiesCatalogDeleteManyArgs>(args?: Prisma.SelectSubset<T, ImagingStudiesCatalogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ImagingStudiesCatalogUpdateManyArgs>(args: Prisma.SelectSubset<T, ImagingStudiesCatalogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ImagingStudiesCatalogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ImagingStudiesCatalogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ImagingStudiesCatalogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ImagingStudiesCatalogUpsertArgs>(args: Prisma.SelectSubset<T, ImagingStudiesCatalogUpsertArgs<ExtArgs>>): Prisma.Prisma__ImagingStudiesCatalogClient<runtime.Types.Result.GetResult<Prisma.$ImagingStudiesCatalogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ImagingStudiesCatalogCountArgs>(args?: Prisma.Subset<T, ImagingStudiesCatalogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ImagingStudiesCatalogCountAggregateOutputType> : number>;
    aggregate<T extends ImagingStudiesCatalogAggregateArgs>(args: Prisma.Subset<T, ImagingStudiesCatalogAggregateArgs>): Prisma.PrismaPromise<GetImagingStudiesCatalogAggregateType<T>>;
    groupBy<T extends ImagingStudiesCatalogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ImagingStudiesCatalogGroupByArgs['orderBy'];
    } : {
        orderBy?: ImagingStudiesCatalogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ImagingStudiesCatalogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagingStudiesCatalogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ImagingStudiesCatalogFieldRefs;
}
export interface Prisma__ImagingStudiesCatalogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ImagingStudiesCatalogFieldRefs {
    readonly id: Prisma.FieldRef<"ImagingStudiesCatalog", 'String'>;
    readonly nombre: Prisma.FieldRef<"ImagingStudiesCatalog", 'String'>;
    readonly categoria: Prisma.FieldRef<"ImagingStudiesCatalog", 'String'>;
    readonly isActive: Prisma.FieldRef<"ImagingStudiesCatalog", 'Boolean'>;
}
export type ImagingStudiesCatalogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImagingStudiesCatalogSelect<ExtArgs> | null;
    omit?: Prisma.ImagingStudiesCatalogOmit<ExtArgs> | null;
    where: Prisma.ImagingStudiesCatalogWhereUniqueInput;
};
export type ImagingStudiesCatalogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImagingStudiesCatalogSelect<ExtArgs> | null;
    omit?: Prisma.ImagingStudiesCatalogOmit<ExtArgs> | null;
    where: Prisma.ImagingStudiesCatalogWhereUniqueInput;
};
export type ImagingStudiesCatalogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImagingStudiesCatalogSelect<ExtArgs> | null;
    omit?: Prisma.ImagingStudiesCatalogOmit<ExtArgs> | null;
    where?: Prisma.ImagingStudiesCatalogWhereInput;
    orderBy?: Prisma.ImagingStudiesCatalogOrderByWithRelationInput | Prisma.ImagingStudiesCatalogOrderByWithRelationInput[];
    cursor?: Prisma.ImagingStudiesCatalogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ImagingStudiesCatalogScalarFieldEnum | Prisma.ImagingStudiesCatalogScalarFieldEnum[];
};
export type ImagingStudiesCatalogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImagingStudiesCatalogSelect<ExtArgs> | null;
    omit?: Prisma.ImagingStudiesCatalogOmit<ExtArgs> | null;
    where?: Prisma.ImagingStudiesCatalogWhereInput;
    orderBy?: Prisma.ImagingStudiesCatalogOrderByWithRelationInput | Prisma.ImagingStudiesCatalogOrderByWithRelationInput[];
    cursor?: Prisma.ImagingStudiesCatalogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ImagingStudiesCatalogScalarFieldEnum | Prisma.ImagingStudiesCatalogScalarFieldEnum[];
};
export type ImagingStudiesCatalogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImagingStudiesCatalogSelect<ExtArgs> | null;
    omit?: Prisma.ImagingStudiesCatalogOmit<ExtArgs> | null;
    where?: Prisma.ImagingStudiesCatalogWhereInput;
    orderBy?: Prisma.ImagingStudiesCatalogOrderByWithRelationInput | Prisma.ImagingStudiesCatalogOrderByWithRelationInput[];
    cursor?: Prisma.ImagingStudiesCatalogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ImagingStudiesCatalogScalarFieldEnum | Prisma.ImagingStudiesCatalogScalarFieldEnum[];
};
export type ImagingStudiesCatalogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImagingStudiesCatalogSelect<ExtArgs> | null;
    omit?: Prisma.ImagingStudiesCatalogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ImagingStudiesCatalogCreateInput, Prisma.ImagingStudiesCatalogUncheckedCreateInput>;
};
export type ImagingStudiesCatalogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ImagingStudiesCatalogCreateManyInput | Prisma.ImagingStudiesCatalogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ImagingStudiesCatalogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImagingStudiesCatalogSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ImagingStudiesCatalogOmit<ExtArgs> | null;
    data: Prisma.ImagingStudiesCatalogCreateManyInput | Prisma.ImagingStudiesCatalogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ImagingStudiesCatalogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImagingStudiesCatalogSelect<ExtArgs> | null;
    omit?: Prisma.ImagingStudiesCatalogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ImagingStudiesCatalogUpdateInput, Prisma.ImagingStudiesCatalogUncheckedUpdateInput>;
    where: Prisma.ImagingStudiesCatalogWhereUniqueInput;
};
export type ImagingStudiesCatalogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ImagingStudiesCatalogUpdateManyMutationInput, Prisma.ImagingStudiesCatalogUncheckedUpdateManyInput>;
    where?: Prisma.ImagingStudiesCatalogWhereInput;
    limit?: number;
};
export type ImagingStudiesCatalogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImagingStudiesCatalogSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ImagingStudiesCatalogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ImagingStudiesCatalogUpdateManyMutationInput, Prisma.ImagingStudiesCatalogUncheckedUpdateManyInput>;
    where?: Prisma.ImagingStudiesCatalogWhereInput;
    limit?: number;
};
export type ImagingStudiesCatalogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImagingStudiesCatalogSelect<ExtArgs> | null;
    omit?: Prisma.ImagingStudiesCatalogOmit<ExtArgs> | null;
    where: Prisma.ImagingStudiesCatalogWhereUniqueInput;
    create: Prisma.XOR<Prisma.ImagingStudiesCatalogCreateInput, Prisma.ImagingStudiesCatalogUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ImagingStudiesCatalogUpdateInput, Prisma.ImagingStudiesCatalogUncheckedUpdateInput>;
};
export type ImagingStudiesCatalogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImagingStudiesCatalogSelect<ExtArgs> | null;
    omit?: Prisma.ImagingStudiesCatalogOmit<ExtArgs> | null;
    where: Prisma.ImagingStudiesCatalogWhereUniqueInput;
};
export type ImagingStudiesCatalogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ImagingStudiesCatalogWhereInput;
    limit?: number;
};
export type ImagingStudiesCatalogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImagingStudiesCatalogSelect<ExtArgs> | null;
    omit?: Prisma.ImagingStudiesCatalogOmit<ExtArgs> | null;
};

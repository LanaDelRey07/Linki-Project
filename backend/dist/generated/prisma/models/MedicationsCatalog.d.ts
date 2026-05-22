import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MedicationsCatalogModel = runtime.Types.Result.DefaultSelection<Prisma.$MedicationsCatalogPayload>;
export type AggregateMedicationsCatalog = {
    _count: MedicationsCatalogCountAggregateOutputType | null;
    _min: MedicationsCatalogMinAggregateOutputType | null;
    _max: MedicationsCatalogMaxAggregateOutputType | null;
};
export type MedicationsCatalogMinAggregateOutputType = {
    id: string | null;
    nombreGenerico: string | null;
    nombreComercial: string | null;
    presentacion: string | null;
    viaAdministracion: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type MedicationsCatalogMaxAggregateOutputType = {
    id: string | null;
    nombreGenerico: string | null;
    nombreComercial: string | null;
    presentacion: string | null;
    viaAdministracion: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type MedicationsCatalogCountAggregateOutputType = {
    id: number;
    nombreGenerico: number;
    nombreComercial: number;
    presentacion: number;
    viaAdministracion: number;
    isActive: number;
    createdAt: number;
    _all: number;
};
export type MedicationsCatalogMinAggregateInputType = {
    id?: true;
    nombreGenerico?: true;
    nombreComercial?: true;
    presentacion?: true;
    viaAdministracion?: true;
    isActive?: true;
    createdAt?: true;
};
export type MedicationsCatalogMaxAggregateInputType = {
    id?: true;
    nombreGenerico?: true;
    nombreComercial?: true;
    presentacion?: true;
    viaAdministracion?: true;
    isActive?: true;
    createdAt?: true;
};
export type MedicationsCatalogCountAggregateInputType = {
    id?: true;
    nombreGenerico?: true;
    nombreComercial?: true;
    presentacion?: true;
    viaAdministracion?: true;
    isActive?: true;
    createdAt?: true;
    _all?: true;
};
export type MedicationsCatalogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MedicationsCatalogWhereInput;
    orderBy?: Prisma.MedicationsCatalogOrderByWithRelationInput | Prisma.MedicationsCatalogOrderByWithRelationInput[];
    cursor?: Prisma.MedicationsCatalogWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MedicationsCatalogCountAggregateInputType;
    _min?: MedicationsCatalogMinAggregateInputType;
    _max?: MedicationsCatalogMaxAggregateInputType;
};
export type GetMedicationsCatalogAggregateType<T extends MedicationsCatalogAggregateArgs> = {
    [P in keyof T & keyof AggregateMedicationsCatalog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMedicationsCatalog[P]> : Prisma.GetScalarType<T[P], AggregateMedicationsCatalog[P]>;
};
export type MedicationsCatalogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MedicationsCatalogWhereInput;
    orderBy?: Prisma.MedicationsCatalogOrderByWithAggregationInput | Prisma.MedicationsCatalogOrderByWithAggregationInput[];
    by: Prisma.MedicationsCatalogScalarFieldEnum[] | Prisma.MedicationsCatalogScalarFieldEnum;
    having?: Prisma.MedicationsCatalogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MedicationsCatalogCountAggregateInputType | true;
    _min?: MedicationsCatalogMinAggregateInputType;
    _max?: MedicationsCatalogMaxAggregateInputType;
};
export type MedicationsCatalogGroupByOutputType = {
    id: string;
    nombreGenerico: string;
    nombreComercial: string | null;
    presentacion: string | null;
    viaAdministracion: string | null;
    isActive: boolean;
    createdAt: Date;
    _count: MedicationsCatalogCountAggregateOutputType | null;
    _min: MedicationsCatalogMinAggregateOutputType | null;
    _max: MedicationsCatalogMaxAggregateOutputType | null;
};
export type GetMedicationsCatalogGroupByPayload<T extends MedicationsCatalogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MedicationsCatalogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MedicationsCatalogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MedicationsCatalogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MedicationsCatalogGroupByOutputType[P]>;
}>>;
export type MedicationsCatalogWhereInput = {
    AND?: Prisma.MedicationsCatalogWhereInput | Prisma.MedicationsCatalogWhereInput[];
    OR?: Prisma.MedicationsCatalogWhereInput[];
    NOT?: Prisma.MedicationsCatalogWhereInput | Prisma.MedicationsCatalogWhereInput[];
    id?: Prisma.StringFilter<"MedicationsCatalog"> | string;
    nombreGenerico?: Prisma.StringFilter<"MedicationsCatalog"> | string;
    nombreComercial?: Prisma.StringNullableFilter<"MedicationsCatalog"> | string | null;
    presentacion?: Prisma.StringNullableFilter<"MedicationsCatalog"> | string | null;
    viaAdministracion?: Prisma.StringNullableFilter<"MedicationsCatalog"> | string | null;
    isActive?: Prisma.BoolFilter<"MedicationsCatalog"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"MedicationsCatalog"> | Date | string;
};
export type MedicationsCatalogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombreGenerico?: Prisma.SortOrder;
    nombreComercial?: Prisma.SortOrderInput | Prisma.SortOrder;
    presentacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    viaAdministracion?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MedicationsCatalogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MedicationsCatalogWhereInput | Prisma.MedicationsCatalogWhereInput[];
    OR?: Prisma.MedicationsCatalogWhereInput[];
    NOT?: Prisma.MedicationsCatalogWhereInput | Prisma.MedicationsCatalogWhereInput[];
    nombreGenerico?: Prisma.StringFilter<"MedicationsCatalog"> | string;
    nombreComercial?: Prisma.StringNullableFilter<"MedicationsCatalog"> | string | null;
    presentacion?: Prisma.StringNullableFilter<"MedicationsCatalog"> | string | null;
    viaAdministracion?: Prisma.StringNullableFilter<"MedicationsCatalog"> | string | null;
    isActive?: Prisma.BoolFilter<"MedicationsCatalog"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"MedicationsCatalog"> | Date | string;
}, "id">;
export type MedicationsCatalogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombreGenerico?: Prisma.SortOrder;
    nombreComercial?: Prisma.SortOrderInput | Prisma.SortOrder;
    presentacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    viaAdministracion?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.MedicationsCatalogCountOrderByAggregateInput;
    _max?: Prisma.MedicationsCatalogMaxOrderByAggregateInput;
    _min?: Prisma.MedicationsCatalogMinOrderByAggregateInput;
};
export type MedicationsCatalogScalarWhereWithAggregatesInput = {
    AND?: Prisma.MedicationsCatalogScalarWhereWithAggregatesInput | Prisma.MedicationsCatalogScalarWhereWithAggregatesInput[];
    OR?: Prisma.MedicationsCatalogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MedicationsCatalogScalarWhereWithAggregatesInput | Prisma.MedicationsCatalogScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"MedicationsCatalog"> | string;
    nombreGenerico?: Prisma.StringWithAggregatesFilter<"MedicationsCatalog"> | string;
    nombreComercial?: Prisma.StringNullableWithAggregatesFilter<"MedicationsCatalog"> | string | null;
    presentacion?: Prisma.StringNullableWithAggregatesFilter<"MedicationsCatalog"> | string | null;
    viaAdministracion?: Prisma.StringNullableWithAggregatesFilter<"MedicationsCatalog"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"MedicationsCatalog"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MedicationsCatalog"> | Date | string;
};
export type MedicationsCatalogCreateInput = {
    id?: string;
    nombreGenerico: string;
    nombreComercial?: string | null;
    presentacion?: string | null;
    viaAdministracion?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type MedicationsCatalogUncheckedCreateInput = {
    id?: string;
    nombreGenerico: string;
    nombreComercial?: string | null;
    presentacion?: string | null;
    viaAdministracion?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type MedicationsCatalogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreGenerico?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreComercial?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    presentacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    viaAdministracion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MedicationsCatalogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreGenerico?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreComercial?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    presentacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    viaAdministracion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MedicationsCatalogCreateManyInput = {
    id?: string;
    nombreGenerico: string;
    nombreComercial?: string | null;
    presentacion?: string | null;
    viaAdministracion?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type MedicationsCatalogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreGenerico?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreComercial?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    presentacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    viaAdministracion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MedicationsCatalogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreGenerico?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreComercial?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    presentacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    viaAdministracion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MedicationsCatalogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombreGenerico?: Prisma.SortOrder;
    nombreComercial?: Prisma.SortOrder;
    presentacion?: Prisma.SortOrder;
    viaAdministracion?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MedicationsCatalogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombreGenerico?: Prisma.SortOrder;
    nombreComercial?: Prisma.SortOrder;
    presentacion?: Prisma.SortOrder;
    viaAdministracion?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MedicationsCatalogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombreGenerico?: Prisma.SortOrder;
    nombreComercial?: Prisma.SortOrder;
    presentacion?: Prisma.SortOrder;
    viaAdministracion?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MedicationsCatalogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombreGenerico?: boolean;
    nombreComercial?: boolean;
    presentacion?: boolean;
    viaAdministracion?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["medicationsCatalog"]>;
export type MedicationsCatalogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombreGenerico?: boolean;
    nombreComercial?: boolean;
    presentacion?: boolean;
    viaAdministracion?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["medicationsCatalog"]>;
export type MedicationsCatalogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombreGenerico?: boolean;
    nombreComercial?: boolean;
    presentacion?: boolean;
    viaAdministracion?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["medicationsCatalog"]>;
export type MedicationsCatalogSelectScalar = {
    id?: boolean;
    nombreGenerico?: boolean;
    nombreComercial?: boolean;
    presentacion?: boolean;
    viaAdministracion?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
};
export type MedicationsCatalogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombreGenerico" | "nombreComercial" | "presentacion" | "viaAdministracion" | "isActive" | "createdAt", ExtArgs["result"]["medicationsCatalog"]>;
export type $MedicationsCatalogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MedicationsCatalog";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nombreGenerico: string;
        nombreComercial: string | null;
        presentacion: string | null;
        viaAdministracion: string | null;
        isActive: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["medicationsCatalog"]>;
    composites: {};
};
export type MedicationsCatalogGetPayload<S extends boolean | null | undefined | MedicationsCatalogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MedicationsCatalogPayload, S>;
export type MedicationsCatalogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MedicationsCatalogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MedicationsCatalogCountAggregateInputType | true;
};
export interface MedicationsCatalogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MedicationsCatalog'];
        meta: {
            name: 'MedicationsCatalog';
        };
    };
    findUnique<T extends MedicationsCatalogFindUniqueArgs>(args: Prisma.SelectSubset<T, MedicationsCatalogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MedicationsCatalogClient<runtime.Types.Result.GetResult<Prisma.$MedicationsCatalogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MedicationsCatalogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MedicationsCatalogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MedicationsCatalogClient<runtime.Types.Result.GetResult<Prisma.$MedicationsCatalogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MedicationsCatalogFindFirstArgs>(args?: Prisma.SelectSubset<T, MedicationsCatalogFindFirstArgs<ExtArgs>>): Prisma.Prisma__MedicationsCatalogClient<runtime.Types.Result.GetResult<Prisma.$MedicationsCatalogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MedicationsCatalogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MedicationsCatalogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MedicationsCatalogClient<runtime.Types.Result.GetResult<Prisma.$MedicationsCatalogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MedicationsCatalogFindManyArgs>(args?: Prisma.SelectSubset<T, MedicationsCatalogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MedicationsCatalogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MedicationsCatalogCreateArgs>(args: Prisma.SelectSubset<T, MedicationsCatalogCreateArgs<ExtArgs>>): Prisma.Prisma__MedicationsCatalogClient<runtime.Types.Result.GetResult<Prisma.$MedicationsCatalogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MedicationsCatalogCreateManyArgs>(args?: Prisma.SelectSubset<T, MedicationsCatalogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MedicationsCatalogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MedicationsCatalogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MedicationsCatalogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MedicationsCatalogDeleteArgs>(args: Prisma.SelectSubset<T, MedicationsCatalogDeleteArgs<ExtArgs>>): Prisma.Prisma__MedicationsCatalogClient<runtime.Types.Result.GetResult<Prisma.$MedicationsCatalogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MedicationsCatalogUpdateArgs>(args: Prisma.SelectSubset<T, MedicationsCatalogUpdateArgs<ExtArgs>>): Prisma.Prisma__MedicationsCatalogClient<runtime.Types.Result.GetResult<Prisma.$MedicationsCatalogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MedicationsCatalogDeleteManyArgs>(args?: Prisma.SelectSubset<T, MedicationsCatalogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MedicationsCatalogUpdateManyArgs>(args: Prisma.SelectSubset<T, MedicationsCatalogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MedicationsCatalogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MedicationsCatalogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MedicationsCatalogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MedicationsCatalogUpsertArgs>(args: Prisma.SelectSubset<T, MedicationsCatalogUpsertArgs<ExtArgs>>): Prisma.Prisma__MedicationsCatalogClient<runtime.Types.Result.GetResult<Prisma.$MedicationsCatalogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MedicationsCatalogCountArgs>(args?: Prisma.Subset<T, MedicationsCatalogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MedicationsCatalogCountAggregateOutputType> : number>;
    aggregate<T extends MedicationsCatalogAggregateArgs>(args: Prisma.Subset<T, MedicationsCatalogAggregateArgs>): Prisma.PrismaPromise<GetMedicationsCatalogAggregateType<T>>;
    groupBy<T extends MedicationsCatalogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MedicationsCatalogGroupByArgs['orderBy'];
    } : {
        orderBy?: MedicationsCatalogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MedicationsCatalogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicationsCatalogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MedicationsCatalogFieldRefs;
}
export interface Prisma__MedicationsCatalogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MedicationsCatalogFieldRefs {
    readonly id: Prisma.FieldRef<"MedicationsCatalog", 'String'>;
    readonly nombreGenerico: Prisma.FieldRef<"MedicationsCatalog", 'String'>;
    readonly nombreComercial: Prisma.FieldRef<"MedicationsCatalog", 'String'>;
    readonly presentacion: Prisma.FieldRef<"MedicationsCatalog", 'String'>;
    readonly viaAdministracion: Prisma.FieldRef<"MedicationsCatalog", 'String'>;
    readonly isActive: Prisma.FieldRef<"MedicationsCatalog", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"MedicationsCatalog", 'DateTime'>;
}
export type MedicationsCatalogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicationsCatalogSelect<ExtArgs> | null;
    omit?: Prisma.MedicationsCatalogOmit<ExtArgs> | null;
    where: Prisma.MedicationsCatalogWhereUniqueInput;
};
export type MedicationsCatalogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicationsCatalogSelect<ExtArgs> | null;
    omit?: Prisma.MedicationsCatalogOmit<ExtArgs> | null;
    where: Prisma.MedicationsCatalogWhereUniqueInput;
};
export type MedicationsCatalogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicationsCatalogSelect<ExtArgs> | null;
    omit?: Prisma.MedicationsCatalogOmit<ExtArgs> | null;
    where?: Prisma.MedicationsCatalogWhereInput;
    orderBy?: Prisma.MedicationsCatalogOrderByWithRelationInput | Prisma.MedicationsCatalogOrderByWithRelationInput[];
    cursor?: Prisma.MedicationsCatalogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MedicationsCatalogScalarFieldEnum | Prisma.MedicationsCatalogScalarFieldEnum[];
};
export type MedicationsCatalogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicationsCatalogSelect<ExtArgs> | null;
    omit?: Prisma.MedicationsCatalogOmit<ExtArgs> | null;
    where?: Prisma.MedicationsCatalogWhereInput;
    orderBy?: Prisma.MedicationsCatalogOrderByWithRelationInput | Prisma.MedicationsCatalogOrderByWithRelationInput[];
    cursor?: Prisma.MedicationsCatalogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MedicationsCatalogScalarFieldEnum | Prisma.MedicationsCatalogScalarFieldEnum[];
};
export type MedicationsCatalogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicationsCatalogSelect<ExtArgs> | null;
    omit?: Prisma.MedicationsCatalogOmit<ExtArgs> | null;
    where?: Prisma.MedicationsCatalogWhereInput;
    orderBy?: Prisma.MedicationsCatalogOrderByWithRelationInput | Prisma.MedicationsCatalogOrderByWithRelationInput[];
    cursor?: Prisma.MedicationsCatalogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MedicationsCatalogScalarFieldEnum | Prisma.MedicationsCatalogScalarFieldEnum[];
};
export type MedicationsCatalogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicationsCatalogSelect<ExtArgs> | null;
    omit?: Prisma.MedicationsCatalogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MedicationsCatalogCreateInput, Prisma.MedicationsCatalogUncheckedCreateInput>;
};
export type MedicationsCatalogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MedicationsCatalogCreateManyInput | Prisma.MedicationsCatalogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MedicationsCatalogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicationsCatalogSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MedicationsCatalogOmit<ExtArgs> | null;
    data: Prisma.MedicationsCatalogCreateManyInput | Prisma.MedicationsCatalogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MedicationsCatalogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicationsCatalogSelect<ExtArgs> | null;
    omit?: Prisma.MedicationsCatalogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MedicationsCatalogUpdateInput, Prisma.MedicationsCatalogUncheckedUpdateInput>;
    where: Prisma.MedicationsCatalogWhereUniqueInput;
};
export type MedicationsCatalogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MedicationsCatalogUpdateManyMutationInput, Prisma.MedicationsCatalogUncheckedUpdateManyInput>;
    where?: Prisma.MedicationsCatalogWhereInput;
    limit?: number;
};
export type MedicationsCatalogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicationsCatalogSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MedicationsCatalogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MedicationsCatalogUpdateManyMutationInput, Prisma.MedicationsCatalogUncheckedUpdateManyInput>;
    where?: Prisma.MedicationsCatalogWhereInput;
    limit?: number;
};
export type MedicationsCatalogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicationsCatalogSelect<ExtArgs> | null;
    omit?: Prisma.MedicationsCatalogOmit<ExtArgs> | null;
    where: Prisma.MedicationsCatalogWhereUniqueInput;
    create: Prisma.XOR<Prisma.MedicationsCatalogCreateInput, Prisma.MedicationsCatalogUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MedicationsCatalogUpdateInput, Prisma.MedicationsCatalogUncheckedUpdateInput>;
};
export type MedicationsCatalogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicationsCatalogSelect<ExtArgs> | null;
    omit?: Prisma.MedicationsCatalogOmit<ExtArgs> | null;
    where: Prisma.MedicationsCatalogWhereUniqueInput;
};
export type MedicationsCatalogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MedicationsCatalogWhereInput;
    limit?: number;
};
export type MedicationsCatalogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicationsCatalogSelect<ExtArgs> | null;
    omit?: Prisma.MedicationsCatalogOmit<ExtArgs> | null;
};

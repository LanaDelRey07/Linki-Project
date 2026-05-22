import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BoliviaCityModel = runtime.Types.Result.DefaultSelection<Prisma.$BoliviaCityPayload>;
export type AggregateBoliviaCity = {
    _count: BoliviaCityCountAggregateOutputType | null;
    _min: BoliviaCityMinAggregateOutputType | null;
    _max: BoliviaCityMaxAggregateOutputType | null;
};
export type BoliviaCityMinAggregateOutputType = {
    id: string | null;
    departamento: $Enums.Department | null;
    nombre: string | null;
    isActive: boolean | null;
};
export type BoliviaCityMaxAggregateOutputType = {
    id: string | null;
    departamento: $Enums.Department | null;
    nombre: string | null;
    isActive: boolean | null;
};
export type BoliviaCityCountAggregateOutputType = {
    id: number;
    departamento: number;
    nombre: number;
    isActive: number;
    _all: number;
};
export type BoliviaCityMinAggregateInputType = {
    id?: true;
    departamento?: true;
    nombre?: true;
    isActive?: true;
};
export type BoliviaCityMaxAggregateInputType = {
    id?: true;
    departamento?: true;
    nombre?: true;
    isActive?: true;
};
export type BoliviaCityCountAggregateInputType = {
    id?: true;
    departamento?: true;
    nombre?: true;
    isActive?: true;
    _all?: true;
};
export type BoliviaCityAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BoliviaCityWhereInput;
    orderBy?: Prisma.BoliviaCityOrderByWithRelationInput | Prisma.BoliviaCityOrderByWithRelationInput[];
    cursor?: Prisma.BoliviaCityWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BoliviaCityCountAggregateInputType;
    _min?: BoliviaCityMinAggregateInputType;
    _max?: BoliviaCityMaxAggregateInputType;
};
export type GetBoliviaCityAggregateType<T extends BoliviaCityAggregateArgs> = {
    [P in keyof T & keyof AggregateBoliviaCity]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBoliviaCity[P]> : Prisma.GetScalarType<T[P], AggregateBoliviaCity[P]>;
};
export type BoliviaCityGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BoliviaCityWhereInput;
    orderBy?: Prisma.BoliviaCityOrderByWithAggregationInput | Prisma.BoliviaCityOrderByWithAggregationInput[];
    by: Prisma.BoliviaCityScalarFieldEnum[] | Prisma.BoliviaCityScalarFieldEnum;
    having?: Prisma.BoliviaCityScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BoliviaCityCountAggregateInputType | true;
    _min?: BoliviaCityMinAggregateInputType;
    _max?: BoliviaCityMaxAggregateInputType;
};
export type BoliviaCityGroupByOutputType = {
    id: string;
    departamento: $Enums.Department;
    nombre: string;
    isActive: boolean;
    _count: BoliviaCityCountAggregateOutputType | null;
    _min: BoliviaCityMinAggregateOutputType | null;
    _max: BoliviaCityMaxAggregateOutputType | null;
};
export type GetBoliviaCityGroupByPayload<T extends BoliviaCityGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BoliviaCityGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BoliviaCityGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BoliviaCityGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BoliviaCityGroupByOutputType[P]>;
}>>;
export type BoliviaCityWhereInput = {
    AND?: Prisma.BoliviaCityWhereInput | Prisma.BoliviaCityWhereInput[];
    OR?: Prisma.BoliviaCityWhereInput[];
    NOT?: Prisma.BoliviaCityWhereInput | Prisma.BoliviaCityWhereInput[];
    id?: Prisma.StringFilter<"BoliviaCity"> | string;
    departamento?: Prisma.EnumDepartmentFilter<"BoliviaCity"> | $Enums.Department;
    nombre?: Prisma.StringFilter<"BoliviaCity"> | string;
    isActive?: Prisma.BoolFilter<"BoliviaCity"> | boolean;
};
export type BoliviaCityOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    departamento?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type BoliviaCityWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    departamento_nombre?: Prisma.BoliviaCityDepartamentoNombreCompoundUniqueInput;
    AND?: Prisma.BoliviaCityWhereInput | Prisma.BoliviaCityWhereInput[];
    OR?: Prisma.BoliviaCityWhereInput[];
    NOT?: Prisma.BoliviaCityWhereInput | Prisma.BoliviaCityWhereInput[];
    departamento?: Prisma.EnumDepartmentFilter<"BoliviaCity"> | $Enums.Department;
    nombre?: Prisma.StringFilter<"BoliviaCity"> | string;
    isActive?: Prisma.BoolFilter<"BoliviaCity"> | boolean;
}, "id" | "departamento_nombre">;
export type BoliviaCityOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    departamento?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    _count?: Prisma.BoliviaCityCountOrderByAggregateInput;
    _max?: Prisma.BoliviaCityMaxOrderByAggregateInput;
    _min?: Prisma.BoliviaCityMinOrderByAggregateInput;
};
export type BoliviaCityScalarWhereWithAggregatesInput = {
    AND?: Prisma.BoliviaCityScalarWhereWithAggregatesInput | Prisma.BoliviaCityScalarWhereWithAggregatesInput[];
    OR?: Prisma.BoliviaCityScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BoliviaCityScalarWhereWithAggregatesInput | Prisma.BoliviaCityScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"BoliviaCity"> | string;
    departamento?: Prisma.EnumDepartmentWithAggregatesFilter<"BoliviaCity"> | $Enums.Department;
    nombre?: Prisma.StringWithAggregatesFilter<"BoliviaCity"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"BoliviaCity"> | boolean;
};
export type BoliviaCityCreateInput = {
    id?: string;
    departamento: $Enums.Department;
    nombre: string;
    isActive?: boolean;
};
export type BoliviaCityUncheckedCreateInput = {
    id?: string;
    departamento: $Enums.Department;
    nombre: string;
    isActive?: boolean;
};
export type BoliviaCityUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    departamento?: Prisma.EnumDepartmentFieldUpdateOperationsInput | $Enums.Department;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type BoliviaCityUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    departamento?: Prisma.EnumDepartmentFieldUpdateOperationsInput | $Enums.Department;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type BoliviaCityCreateManyInput = {
    id?: string;
    departamento: $Enums.Department;
    nombre: string;
    isActive?: boolean;
};
export type BoliviaCityUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    departamento?: Prisma.EnumDepartmentFieldUpdateOperationsInput | $Enums.Department;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type BoliviaCityUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    departamento?: Prisma.EnumDepartmentFieldUpdateOperationsInput | $Enums.Department;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type BoliviaCityDepartamentoNombreCompoundUniqueInput = {
    departamento: $Enums.Department;
    nombre: string;
};
export type BoliviaCityCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    departamento?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type BoliviaCityMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    departamento?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type BoliviaCityMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    departamento?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type BoliviaCitySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    departamento?: boolean;
    nombre?: boolean;
    isActive?: boolean;
}, ExtArgs["result"]["boliviaCity"]>;
export type BoliviaCitySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    departamento?: boolean;
    nombre?: boolean;
    isActive?: boolean;
}, ExtArgs["result"]["boliviaCity"]>;
export type BoliviaCitySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    departamento?: boolean;
    nombre?: boolean;
    isActive?: boolean;
}, ExtArgs["result"]["boliviaCity"]>;
export type BoliviaCitySelectScalar = {
    id?: boolean;
    departamento?: boolean;
    nombre?: boolean;
    isActive?: boolean;
};
export type BoliviaCityOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "departamento" | "nombre" | "isActive", ExtArgs["result"]["boliviaCity"]>;
export type $BoliviaCityPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BoliviaCity";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        departamento: $Enums.Department;
        nombre: string;
        isActive: boolean;
    }, ExtArgs["result"]["boliviaCity"]>;
    composites: {};
};
export type BoliviaCityGetPayload<S extends boolean | null | undefined | BoliviaCityDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BoliviaCityPayload, S>;
export type BoliviaCityCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BoliviaCityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BoliviaCityCountAggregateInputType | true;
};
export interface BoliviaCityDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BoliviaCity'];
        meta: {
            name: 'BoliviaCity';
        };
    };
    findUnique<T extends BoliviaCityFindUniqueArgs>(args: Prisma.SelectSubset<T, BoliviaCityFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BoliviaCityClient<runtime.Types.Result.GetResult<Prisma.$BoliviaCityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BoliviaCityFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BoliviaCityFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BoliviaCityClient<runtime.Types.Result.GetResult<Prisma.$BoliviaCityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BoliviaCityFindFirstArgs>(args?: Prisma.SelectSubset<T, BoliviaCityFindFirstArgs<ExtArgs>>): Prisma.Prisma__BoliviaCityClient<runtime.Types.Result.GetResult<Prisma.$BoliviaCityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BoliviaCityFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BoliviaCityFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BoliviaCityClient<runtime.Types.Result.GetResult<Prisma.$BoliviaCityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BoliviaCityFindManyArgs>(args?: Prisma.SelectSubset<T, BoliviaCityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BoliviaCityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BoliviaCityCreateArgs>(args: Prisma.SelectSubset<T, BoliviaCityCreateArgs<ExtArgs>>): Prisma.Prisma__BoliviaCityClient<runtime.Types.Result.GetResult<Prisma.$BoliviaCityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BoliviaCityCreateManyArgs>(args?: Prisma.SelectSubset<T, BoliviaCityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BoliviaCityCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BoliviaCityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BoliviaCityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BoliviaCityDeleteArgs>(args: Prisma.SelectSubset<T, BoliviaCityDeleteArgs<ExtArgs>>): Prisma.Prisma__BoliviaCityClient<runtime.Types.Result.GetResult<Prisma.$BoliviaCityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BoliviaCityUpdateArgs>(args: Prisma.SelectSubset<T, BoliviaCityUpdateArgs<ExtArgs>>): Prisma.Prisma__BoliviaCityClient<runtime.Types.Result.GetResult<Prisma.$BoliviaCityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BoliviaCityDeleteManyArgs>(args?: Prisma.SelectSubset<T, BoliviaCityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BoliviaCityUpdateManyArgs>(args: Prisma.SelectSubset<T, BoliviaCityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BoliviaCityUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BoliviaCityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BoliviaCityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BoliviaCityUpsertArgs>(args: Prisma.SelectSubset<T, BoliviaCityUpsertArgs<ExtArgs>>): Prisma.Prisma__BoliviaCityClient<runtime.Types.Result.GetResult<Prisma.$BoliviaCityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BoliviaCityCountArgs>(args?: Prisma.Subset<T, BoliviaCityCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BoliviaCityCountAggregateOutputType> : number>;
    aggregate<T extends BoliviaCityAggregateArgs>(args: Prisma.Subset<T, BoliviaCityAggregateArgs>): Prisma.PrismaPromise<GetBoliviaCityAggregateType<T>>;
    groupBy<T extends BoliviaCityGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BoliviaCityGroupByArgs['orderBy'];
    } : {
        orderBy?: BoliviaCityGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BoliviaCityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoliviaCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BoliviaCityFieldRefs;
}
export interface Prisma__BoliviaCityClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BoliviaCityFieldRefs {
    readonly id: Prisma.FieldRef<"BoliviaCity", 'String'>;
    readonly departamento: Prisma.FieldRef<"BoliviaCity", 'Department'>;
    readonly nombre: Prisma.FieldRef<"BoliviaCity", 'String'>;
    readonly isActive: Prisma.FieldRef<"BoliviaCity", 'Boolean'>;
}
export type BoliviaCityFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoliviaCitySelect<ExtArgs> | null;
    omit?: Prisma.BoliviaCityOmit<ExtArgs> | null;
    where: Prisma.BoliviaCityWhereUniqueInput;
};
export type BoliviaCityFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoliviaCitySelect<ExtArgs> | null;
    omit?: Prisma.BoliviaCityOmit<ExtArgs> | null;
    where: Prisma.BoliviaCityWhereUniqueInput;
};
export type BoliviaCityFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoliviaCitySelect<ExtArgs> | null;
    omit?: Prisma.BoliviaCityOmit<ExtArgs> | null;
    where?: Prisma.BoliviaCityWhereInput;
    orderBy?: Prisma.BoliviaCityOrderByWithRelationInput | Prisma.BoliviaCityOrderByWithRelationInput[];
    cursor?: Prisma.BoliviaCityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BoliviaCityScalarFieldEnum | Prisma.BoliviaCityScalarFieldEnum[];
};
export type BoliviaCityFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoliviaCitySelect<ExtArgs> | null;
    omit?: Prisma.BoliviaCityOmit<ExtArgs> | null;
    where?: Prisma.BoliviaCityWhereInput;
    orderBy?: Prisma.BoliviaCityOrderByWithRelationInput | Prisma.BoliviaCityOrderByWithRelationInput[];
    cursor?: Prisma.BoliviaCityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BoliviaCityScalarFieldEnum | Prisma.BoliviaCityScalarFieldEnum[];
};
export type BoliviaCityFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoliviaCitySelect<ExtArgs> | null;
    omit?: Prisma.BoliviaCityOmit<ExtArgs> | null;
    where?: Prisma.BoliviaCityWhereInput;
    orderBy?: Prisma.BoliviaCityOrderByWithRelationInput | Prisma.BoliviaCityOrderByWithRelationInput[];
    cursor?: Prisma.BoliviaCityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BoliviaCityScalarFieldEnum | Prisma.BoliviaCityScalarFieldEnum[];
};
export type BoliviaCityCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoliviaCitySelect<ExtArgs> | null;
    omit?: Prisma.BoliviaCityOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BoliviaCityCreateInput, Prisma.BoliviaCityUncheckedCreateInput>;
};
export type BoliviaCityCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BoliviaCityCreateManyInput | Prisma.BoliviaCityCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BoliviaCityCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoliviaCitySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BoliviaCityOmit<ExtArgs> | null;
    data: Prisma.BoliviaCityCreateManyInput | Prisma.BoliviaCityCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BoliviaCityUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoliviaCitySelect<ExtArgs> | null;
    omit?: Prisma.BoliviaCityOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BoliviaCityUpdateInput, Prisma.BoliviaCityUncheckedUpdateInput>;
    where: Prisma.BoliviaCityWhereUniqueInput;
};
export type BoliviaCityUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BoliviaCityUpdateManyMutationInput, Prisma.BoliviaCityUncheckedUpdateManyInput>;
    where?: Prisma.BoliviaCityWhereInput;
    limit?: number;
};
export type BoliviaCityUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoliviaCitySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BoliviaCityOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BoliviaCityUpdateManyMutationInput, Prisma.BoliviaCityUncheckedUpdateManyInput>;
    where?: Prisma.BoliviaCityWhereInput;
    limit?: number;
};
export type BoliviaCityUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoliviaCitySelect<ExtArgs> | null;
    omit?: Prisma.BoliviaCityOmit<ExtArgs> | null;
    where: Prisma.BoliviaCityWhereUniqueInput;
    create: Prisma.XOR<Prisma.BoliviaCityCreateInput, Prisma.BoliviaCityUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BoliviaCityUpdateInput, Prisma.BoliviaCityUncheckedUpdateInput>;
};
export type BoliviaCityDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoliviaCitySelect<ExtArgs> | null;
    omit?: Prisma.BoliviaCityOmit<ExtArgs> | null;
    where: Prisma.BoliviaCityWhereUniqueInput;
};
export type BoliviaCityDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BoliviaCityWhereInput;
    limit?: number;
};
export type BoliviaCityDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BoliviaCitySelect<ExtArgs> | null;
    omit?: Prisma.BoliviaCityOmit<ExtArgs> | null;
};

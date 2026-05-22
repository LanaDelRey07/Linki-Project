import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserRoleAssignmentModel = runtime.Types.Result.DefaultSelection<Prisma.$UserRoleAssignmentPayload>;
export type AggregateUserRoleAssignment = {
    _count: UserRoleAssignmentCountAggregateOutputType | null;
    _min: UserRoleAssignmentMinAggregateOutputType | null;
    _max: UserRoleAssignmentMaxAggregateOutputType | null;
};
export type UserRoleAssignmentMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    role: string | null;
    assignedAt: Date | null;
};
export type UserRoleAssignmentMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    role: string | null;
    assignedAt: Date | null;
};
export type UserRoleAssignmentCountAggregateOutputType = {
    id: number;
    userId: number;
    role: number;
    assignedAt: number;
    _all: number;
};
export type UserRoleAssignmentMinAggregateInputType = {
    id?: true;
    userId?: true;
    role?: true;
    assignedAt?: true;
};
export type UserRoleAssignmentMaxAggregateInputType = {
    id?: true;
    userId?: true;
    role?: true;
    assignedAt?: true;
};
export type UserRoleAssignmentCountAggregateInputType = {
    id?: true;
    userId?: true;
    role?: true;
    assignedAt?: true;
    _all?: true;
};
export type UserRoleAssignmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserRoleAssignmentWhereInput;
    orderBy?: Prisma.UserRoleAssignmentOrderByWithRelationInput | Prisma.UserRoleAssignmentOrderByWithRelationInput[];
    cursor?: Prisma.UserRoleAssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserRoleAssignmentCountAggregateInputType;
    _min?: UserRoleAssignmentMinAggregateInputType;
    _max?: UserRoleAssignmentMaxAggregateInputType;
};
export type GetUserRoleAssignmentAggregateType<T extends UserRoleAssignmentAggregateArgs> = {
    [P in keyof T & keyof AggregateUserRoleAssignment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUserRoleAssignment[P]> : Prisma.GetScalarType<T[P], AggregateUserRoleAssignment[P]>;
};
export type UserRoleAssignmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserRoleAssignmentWhereInput;
    orderBy?: Prisma.UserRoleAssignmentOrderByWithAggregationInput | Prisma.UserRoleAssignmentOrderByWithAggregationInput[];
    by: Prisma.UserRoleAssignmentScalarFieldEnum[] | Prisma.UserRoleAssignmentScalarFieldEnum;
    having?: Prisma.UserRoleAssignmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserRoleAssignmentCountAggregateInputType | true;
    _min?: UserRoleAssignmentMinAggregateInputType;
    _max?: UserRoleAssignmentMaxAggregateInputType;
};
export type UserRoleAssignmentGroupByOutputType = {
    id: string;
    userId: string;
    role: string;
    assignedAt: Date;
    _count: UserRoleAssignmentCountAggregateOutputType | null;
    _min: UserRoleAssignmentMinAggregateOutputType | null;
    _max: UserRoleAssignmentMaxAggregateOutputType | null;
};
export type GetUserRoleAssignmentGroupByPayload<T extends UserRoleAssignmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserRoleAssignmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserRoleAssignmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserRoleAssignmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserRoleAssignmentGroupByOutputType[P]>;
}>>;
export type UserRoleAssignmentWhereInput = {
    AND?: Prisma.UserRoleAssignmentWhereInput | Prisma.UserRoleAssignmentWhereInput[];
    OR?: Prisma.UserRoleAssignmentWhereInput[];
    NOT?: Prisma.UserRoleAssignmentWhereInput | Prisma.UserRoleAssignmentWhereInput[];
    id?: Prisma.StringFilter<"UserRoleAssignment"> | string;
    userId?: Prisma.StringFilter<"UserRoleAssignment"> | string;
    role?: Prisma.StringFilter<"UserRoleAssignment"> | string;
    assignedAt?: Prisma.DateTimeFilter<"UserRoleAssignment"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type UserRoleAssignmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type UserRoleAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_role?: Prisma.UserRoleAssignmentUserIdRoleCompoundUniqueInput;
    AND?: Prisma.UserRoleAssignmentWhereInput | Prisma.UserRoleAssignmentWhereInput[];
    OR?: Prisma.UserRoleAssignmentWhereInput[];
    NOT?: Prisma.UserRoleAssignmentWhereInput | Prisma.UserRoleAssignmentWhereInput[];
    userId?: Prisma.StringFilter<"UserRoleAssignment"> | string;
    role?: Prisma.StringFilter<"UserRoleAssignment"> | string;
    assignedAt?: Prisma.DateTimeFilter<"UserRoleAssignment"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "userId_role">;
export type UserRoleAssignmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
    _count?: Prisma.UserRoleAssignmentCountOrderByAggregateInput;
    _max?: Prisma.UserRoleAssignmentMaxOrderByAggregateInput;
    _min?: Prisma.UserRoleAssignmentMinOrderByAggregateInput;
};
export type UserRoleAssignmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserRoleAssignmentScalarWhereWithAggregatesInput | Prisma.UserRoleAssignmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserRoleAssignmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserRoleAssignmentScalarWhereWithAggregatesInput | Prisma.UserRoleAssignmentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"UserRoleAssignment"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"UserRoleAssignment"> | string;
    role?: Prisma.StringWithAggregatesFilter<"UserRoleAssignment"> | string;
    assignedAt?: Prisma.DateTimeWithAggregatesFilter<"UserRoleAssignment"> | Date | string;
};
export type UserRoleAssignmentCreateInput = {
    id?: string;
    role: string;
    assignedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutRolesInput;
};
export type UserRoleAssignmentUncheckedCreateInput = {
    id?: string;
    userId: string;
    role: string;
    assignedAt?: Date | string;
};
export type UserRoleAssignmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutRolesNestedInput;
};
export type UserRoleAssignmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserRoleAssignmentCreateManyInput = {
    id?: string;
    userId: string;
    role: string;
    assignedAt?: Date | string;
};
export type UserRoleAssignmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserRoleAssignmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserRoleAssignmentListRelationFilter = {
    every?: Prisma.UserRoleAssignmentWhereInput;
    some?: Prisma.UserRoleAssignmentWhereInput;
    none?: Prisma.UserRoleAssignmentWhereInput;
};
export type UserRoleAssignmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserRoleAssignmentUserIdRoleCompoundUniqueInput = {
    userId: string;
    role: string;
};
export type UserRoleAssignmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
};
export type UserRoleAssignmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
};
export type UserRoleAssignmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
};
export type UserRoleAssignmentCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserRoleAssignmentCreateWithoutUserInput, Prisma.UserRoleAssignmentUncheckedCreateWithoutUserInput> | Prisma.UserRoleAssignmentCreateWithoutUserInput[] | Prisma.UserRoleAssignmentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserRoleAssignmentCreateOrConnectWithoutUserInput | Prisma.UserRoleAssignmentCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserRoleAssignmentCreateManyUserInputEnvelope;
    connect?: Prisma.UserRoleAssignmentWhereUniqueInput | Prisma.UserRoleAssignmentWhereUniqueInput[];
};
export type UserRoleAssignmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserRoleAssignmentCreateWithoutUserInput, Prisma.UserRoleAssignmentUncheckedCreateWithoutUserInput> | Prisma.UserRoleAssignmentCreateWithoutUserInput[] | Prisma.UserRoleAssignmentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserRoleAssignmentCreateOrConnectWithoutUserInput | Prisma.UserRoleAssignmentCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserRoleAssignmentCreateManyUserInputEnvelope;
    connect?: Prisma.UserRoleAssignmentWhereUniqueInput | Prisma.UserRoleAssignmentWhereUniqueInput[];
};
export type UserRoleAssignmentUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserRoleAssignmentCreateWithoutUserInput, Prisma.UserRoleAssignmentUncheckedCreateWithoutUserInput> | Prisma.UserRoleAssignmentCreateWithoutUserInput[] | Prisma.UserRoleAssignmentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserRoleAssignmentCreateOrConnectWithoutUserInput | Prisma.UserRoleAssignmentCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserRoleAssignmentUpsertWithWhereUniqueWithoutUserInput | Prisma.UserRoleAssignmentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserRoleAssignmentCreateManyUserInputEnvelope;
    set?: Prisma.UserRoleAssignmentWhereUniqueInput | Prisma.UserRoleAssignmentWhereUniqueInput[];
    disconnect?: Prisma.UserRoleAssignmentWhereUniqueInput | Prisma.UserRoleAssignmentWhereUniqueInput[];
    delete?: Prisma.UserRoleAssignmentWhereUniqueInput | Prisma.UserRoleAssignmentWhereUniqueInput[];
    connect?: Prisma.UserRoleAssignmentWhereUniqueInput | Prisma.UserRoleAssignmentWhereUniqueInput[];
    update?: Prisma.UserRoleAssignmentUpdateWithWhereUniqueWithoutUserInput | Prisma.UserRoleAssignmentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserRoleAssignmentUpdateManyWithWhereWithoutUserInput | Prisma.UserRoleAssignmentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserRoleAssignmentScalarWhereInput | Prisma.UserRoleAssignmentScalarWhereInput[];
};
export type UserRoleAssignmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserRoleAssignmentCreateWithoutUserInput, Prisma.UserRoleAssignmentUncheckedCreateWithoutUserInput> | Prisma.UserRoleAssignmentCreateWithoutUserInput[] | Prisma.UserRoleAssignmentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserRoleAssignmentCreateOrConnectWithoutUserInput | Prisma.UserRoleAssignmentCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserRoleAssignmentUpsertWithWhereUniqueWithoutUserInput | Prisma.UserRoleAssignmentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserRoleAssignmentCreateManyUserInputEnvelope;
    set?: Prisma.UserRoleAssignmentWhereUniqueInput | Prisma.UserRoleAssignmentWhereUniqueInput[];
    disconnect?: Prisma.UserRoleAssignmentWhereUniqueInput | Prisma.UserRoleAssignmentWhereUniqueInput[];
    delete?: Prisma.UserRoleAssignmentWhereUniqueInput | Prisma.UserRoleAssignmentWhereUniqueInput[];
    connect?: Prisma.UserRoleAssignmentWhereUniqueInput | Prisma.UserRoleAssignmentWhereUniqueInput[];
    update?: Prisma.UserRoleAssignmentUpdateWithWhereUniqueWithoutUserInput | Prisma.UserRoleAssignmentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserRoleAssignmentUpdateManyWithWhereWithoutUserInput | Prisma.UserRoleAssignmentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserRoleAssignmentScalarWhereInput | Prisma.UserRoleAssignmentScalarWhereInput[];
};
export type UserRoleAssignmentCreateWithoutUserInput = {
    id?: string;
    role: string;
    assignedAt?: Date | string;
};
export type UserRoleAssignmentUncheckedCreateWithoutUserInput = {
    id?: string;
    role: string;
    assignedAt?: Date | string;
};
export type UserRoleAssignmentCreateOrConnectWithoutUserInput = {
    where: Prisma.UserRoleAssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserRoleAssignmentCreateWithoutUserInput, Prisma.UserRoleAssignmentUncheckedCreateWithoutUserInput>;
};
export type UserRoleAssignmentCreateManyUserInputEnvelope = {
    data: Prisma.UserRoleAssignmentCreateManyUserInput | Prisma.UserRoleAssignmentCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type UserRoleAssignmentUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserRoleAssignmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserRoleAssignmentUpdateWithoutUserInput, Prisma.UserRoleAssignmentUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.UserRoleAssignmentCreateWithoutUserInput, Prisma.UserRoleAssignmentUncheckedCreateWithoutUserInput>;
};
export type UserRoleAssignmentUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserRoleAssignmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserRoleAssignmentUpdateWithoutUserInput, Prisma.UserRoleAssignmentUncheckedUpdateWithoutUserInput>;
};
export type UserRoleAssignmentUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.UserRoleAssignmentScalarWhereInput;
    data: Prisma.XOR<Prisma.UserRoleAssignmentUpdateManyMutationInput, Prisma.UserRoleAssignmentUncheckedUpdateManyWithoutUserInput>;
};
export type UserRoleAssignmentScalarWhereInput = {
    AND?: Prisma.UserRoleAssignmentScalarWhereInput | Prisma.UserRoleAssignmentScalarWhereInput[];
    OR?: Prisma.UserRoleAssignmentScalarWhereInput[];
    NOT?: Prisma.UserRoleAssignmentScalarWhereInput | Prisma.UserRoleAssignmentScalarWhereInput[];
    id?: Prisma.StringFilter<"UserRoleAssignment"> | string;
    userId?: Prisma.StringFilter<"UserRoleAssignment"> | string;
    role?: Prisma.StringFilter<"UserRoleAssignment"> | string;
    assignedAt?: Prisma.DateTimeFilter<"UserRoleAssignment"> | Date | string;
};
export type UserRoleAssignmentCreateManyUserInput = {
    id?: string;
    role: string;
    assignedAt?: Date | string;
};
export type UserRoleAssignmentUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserRoleAssignmentUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserRoleAssignmentUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserRoleAssignmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    role?: boolean;
    assignedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userRoleAssignment"]>;
export type UserRoleAssignmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    role?: boolean;
    assignedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userRoleAssignment"]>;
export type UserRoleAssignmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    role?: boolean;
    assignedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userRoleAssignment"]>;
export type UserRoleAssignmentSelectScalar = {
    id?: boolean;
    userId?: boolean;
    role?: boolean;
    assignedAt?: boolean;
};
export type UserRoleAssignmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "role" | "assignedAt", ExtArgs["result"]["userRoleAssignment"]>;
export type UserRoleAssignmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type UserRoleAssignmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type UserRoleAssignmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $UserRoleAssignmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UserRoleAssignment";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        role: string;
        assignedAt: Date;
    }, ExtArgs["result"]["userRoleAssignment"]>;
    composites: {};
};
export type UserRoleAssignmentGetPayload<S extends boolean | null | undefined | UserRoleAssignmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserRoleAssignmentPayload, S>;
export type UserRoleAssignmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserRoleAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserRoleAssignmentCountAggregateInputType | true;
};
export interface UserRoleAssignmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UserRoleAssignment'];
        meta: {
            name: 'UserRoleAssignment';
        };
    };
    findUnique<T extends UserRoleAssignmentFindUniqueArgs>(args: Prisma.SelectSubset<T, UserRoleAssignmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserRoleAssignmentClient<runtime.Types.Result.GetResult<Prisma.$UserRoleAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserRoleAssignmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserRoleAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserRoleAssignmentClient<runtime.Types.Result.GetResult<Prisma.$UserRoleAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserRoleAssignmentFindFirstArgs>(args?: Prisma.SelectSubset<T, UserRoleAssignmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserRoleAssignmentClient<runtime.Types.Result.GetResult<Prisma.$UserRoleAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserRoleAssignmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserRoleAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserRoleAssignmentClient<runtime.Types.Result.GetResult<Prisma.$UserRoleAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserRoleAssignmentFindManyArgs>(args?: Prisma.SelectSubset<T, UserRoleAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserRoleAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserRoleAssignmentCreateArgs>(args: Prisma.SelectSubset<T, UserRoleAssignmentCreateArgs<ExtArgs>>): Prisma.Prisma__UserRoleAssignmentClient<runtime.Types.Result.GetResult<Prisma.$UserRoleAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserRoleAssignmentCreateManyArgs>(args?: Prisma.SelectSubset<T, UserRoleAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserRoleAssignmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserRoleAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserRoleAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserRoleAssignmentDeleteArgs>(args: Prisma.SelectSubset<T, UserRoleAssignmentDeleteArgs<ExtArgs>>): Prisma.Prisma__UserRoleAssignmentClient<runtime.Types.Result.GetResult<Prisma.$UserRoleAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserRoleAssignmentUpdateArgs>(args: Prisma.SelectSubset<T, UserRoleAssignmentUpdateArgs<ExtArgs>>): Prisma.Prisma__UserRoleAssignmentClient<runtime.Types.Result.GetResult<Prisma.$UserRoleAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserRoleAssignmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserRoleAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserRoleAssignmentUpdateManyArgs>(args: Prisma.SelectSubset<T, UserRoleAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserRoleAssignmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserRoleAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserRoleAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserRoleAssignmentUpsertArgs>(args: Prisma.SelectSubset<T, UserRoleAssignmentUpsertArgs<ExtArgs>>): Prisma.Prisma__UserRoleAssignmentClient<runtime.Types.Result.GetResult<Prisma.$UserRoleAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserRoleAssignmentCountArgs>(args?: Prisma.Subset<T, UserRoleAssignmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserRoleAssignmentCountAggregateOutputType> : number>;
    aggregate<T extends UserRoleAssignmentAggregateArgs>(args: Prisma.Subset<T, UserRoleAssignmentAggregateArgs>): Prisma.PrismaPromise<GetUserRoleAssignmentAggregateType<T>>;
    groupBy<T extends UserRoleAssignmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserRoleAssignmentGroupByArgs['orderBy'];
    } : {
        orderBy?: UserRoleAssignmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserRoleAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserRoleAssignmentFieldRefs;
}
export interface Prisma__UserRoleAssignmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserRoleAssignmentFieldRefs {
    readonly id: Prisma.FieldRef<"UserRoleAssignment", 'String'>;
    readonly userId: Prisma.FieldRef<"UserRoleAssignment", 'String'>;
    readonly role: Prisma.FieldRef<"UserRoleAssignment", 'String'>;
    readonly assignedAt: Prisma.FieldRef<"UserRoleAssignment", 'DateTime'>;
}
export type UserRoleAssignmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserRoleAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.UserRoleAssignmentOmit<ExtArgs> | null;
    include?: Prisma.UserRoleAssignmentInclude<ExtArgs> | null;
    where: Prisma.UserRoleAssignmentWhereUniqueInput;
};
export type UserRoleAssignmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserRoleAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.UserRoleAssignmentOmit<ExtArgs> | null;
    include?: Prisma.UserRoleAssignmentInclude<ExtArgs> | null;
    where: Prisma.UserRoleAssignmentWhereUniqueInput;
};
export type UserRoleAssignmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserRoleAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.UserRoleAssignmentOmit<ExtArgs> | null;
    include?: Prisma.UserRoleAssignmentInclude<ExtArgs> | null;
    where?: Prisma.UserRoleAssignmentWhereInput;
    orderBy?: Prisma.UserRoleAssignmentOrderByWithRelationInput | Prisma.UserRoleAssignmentOrderByWithRelationInput[];
    cursor?: Prisma.UserRoleAssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserRoleAssignmentScalarFieldEnum | Prisma.UserRoleAssignmentScalarFieldEnum[];
};
export type UserRoleAssignmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserRoleAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.UserRoleAssignmentOmit<ExtArgs> | null;
    include?: Prisma.UserRoleAssignmentInclude<ExtArgs> | null;
    where?: Prisma.UserRoleAssignmentWhereInput;
    orderBy?: Prisma.UserRoleAssignmentOrderByWithRelationInput | Prisma.UserRoleAssignmentOrderByWithRelationInput[];
    cursor?: Prisma.UserRoleAssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserRoleAssignmentScalarFieldEnum | Prisma.UserRoleAssignmentScalarFieldEnum[];
};
export type UserRoleAssignmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserRoleAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.UserRoleAssignmentOmit<ExtArgs> | null;
    include?: Prisma.UserRoleAssignmentInclude<ExtArgs> | null;
    where?: Prisma.UserRoleAssignmentWhereInput;
    orderBy?: Prisma.UserRoleAssignmentOrderByWithRelationInput | Prisma.UserRoleAssignmentOrderByWithRelationInput[];
    cursor?: Prisma.UserRoleAssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserRoleAssignmentScalarFieldEnum | Prisma.UserRoleAssignmentScalarFieldEnum[];
};
export type UserRoleAssignmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserRoleAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.UserRoleAssignmentOmit<ExtArgs> | null;
    include?: Prisma.UserRoleAssignmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserRoleAssignmentCreateInput, Prisma.UserRoleAssignmentUncheckedCreateInput>;
};
export type UserRoleAssignmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserRoleAssignmentCreateManyInput | Prisma.UserRoleAssignmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserRoleAssignmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserRoleAssignmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserRoleAssignmentOmit<ExtArgs> | null;
    data: Prisma.UserRoleAssignmentCreateManyInput | Prisma.UserRoleAssignmentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.UserRoleAssignmentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type UserRoleAssignmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserRoleAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.UserRoleAssignmentOmit<ExtArgs> | null;
    include?: Prisma.UserRoleAssignmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserRoleAssignmentUpdateInput, Prisma.UserRoleAssignmentUncheckedUpdateInput>;
    where: Prisma.UserRoleAssignmentWhereUniqueInput;
};
export type UserRoleAssignmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserRoleAssignmentUpdateManyMutationInput, Prisma.UserRoleAssignmentUncheckedUpdateManyInput>;
    where?: Prisma.UserRoleAssignmentWhereInput;
    limit?: number;
};
export type UserRoleAssignmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserRoleAssignmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserRoleAssignmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserRoleAssignmentUpdateManyMutationInput, Prisma.UserRoleAssignmentUncheckedUpdateManyInput>;
    where?: Prisma.UserRoleAssignmentWhereInput;
    limit?: number;
    include?: Prisma.UserRoleAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type UserRoleAssignmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserRoleAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.UserRoleAssignmentOmit<ExtArgs> | null;
    include?: Prisma.UserRoleAssignmentInclude<ExtArgs> | null;
    where: Prisma.UserRoleAssignmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserRoleAssignmentCreateInput, Prisma.UserRoleAssignmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserRoleAssignmentUpdateInput, Prisma.UserRoleAssignmentUncheckedUpdateInput>;
};
export type UserRoleAssignmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserRoleAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.UserRoleAssignmentOmit<ExtArgs> | null;
    include?: Prisma.UserRoleAssignmentInclude<ExtArgs> | null;
    where: Prisma.UserRoleAssignmentWhereUniqueInput;
};
export type UserRoleAssignmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserRoleAssignmentWhereInput;
    limit?: number;
};
export type UserRoleAssignmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserRoleAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.UserRoleAssignmentOmit<ExtArgs> | null;
    include?: Prisma.UserRoleAssignmentInclude<ExtArgs> | null;
};

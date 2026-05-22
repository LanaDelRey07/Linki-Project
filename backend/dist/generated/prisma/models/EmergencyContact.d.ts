import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EmergencyContactModel = runtime.Types.Result.DefaultSelection<Prisma.$EmergencyContactPayload>;
export type AggregateEmergencyContact = {
    _count: EmergencyContactCountAggregateOutputType | null;
    _min: EmergencyContactMinAggregateOutputType | null;
    _max: EmergencyContactMaxAggregateOutputType | null;
};
export type EmergencyContactMinAggregateOutputType = {
    id: string | null;
    patientProfileId: string | null;
    nombreCompleto: string | null;
    parentesco: $Enums.Kinship | null;
    telefono: string | null;
    createdAt: Date | null;
};
export type EmergencyContactMaxAggregateOutputType = {
    id: string | null;
    patientProfileId: string | null;
    nombreCompleto: string | null;
    parentesco: $Enums.Kinship | null;
    telefono: string | null;
    createdAt: Date | null;
};
export type EmergencyContactCountAggregateOutputType = {
    id: number;
    patientProfileId: number;
    nombreCompleto: number;
    parentesco: number;
    telefono: number;
    createdAt: number;
    _all: number;
};
export type EmergencyContactMinAggregateInputType = {
    id?: true;
    patientProfileId?: true;
    nombreCompleto?: true;
    parentesco?: true;
    telefono?: true;
    createdAt?: true;
};
export type EmergencyContactMaxAggregateInputType = {
    id?: true;
    patientProfileId?: true;
    nombreCompleto?: true;
    parentesco?: true;
    telefono?: true;
    createdAt?: true;
};
export type EmergencyContactCountAggregateInputType = {
    id?: true;
    patientProfileId?: true;
    nombreCompleto?: true;
    parentesco?: true;
    telefono?: true;
    createdAt?: true;
    _all?: true;
};
export type EmergencyContactAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmergencyContactWhereInput;
    orderBy?: Prisma.EmergencyContactOrderByWithRelationInput | Prisma.EmergencyContactOrderByWithRelationInput[];
    cursor?: Prisma.EmergencyContactWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EmergencyContactCountAggregateInputType;
    _min?: EmergencyContactMinAggregateInputType;
    _max?: EmergencyContactMaxAggregateInputType;
};
export type GetEmergencyContactAggregateType<T extends EmergencyContactAggregateArgs> = {
    [P in keyof T & keyof AggregateEmergencyContact]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEmergencyContact[P]> : Prisma.GetScalarType<T[P], AggregateEmergencyContact[P]>;
};
export type EmergencyContactGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmergencyContactWhereInput;
    orderBy?: Prisma.EmergencyContactOrderByWithAggregationInput | Prisma.EmergencyContactOrderByWithAggregationInput[];
    by: Prisma.EmergencyContactScalarFieldEnum[] | Prisma.EmergencyContactScalarFieldEnum;
    having?: Prisma.EmergencyContactScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmergencyContactCountAggregateInputType | true;
    _min?: EmergencyContactMinAggregateInputType;
    _max?: EmergencyContactMaxAggregateInputType;
};
export type EmergencyContactGroupByOutputType = {
    id: string;
    patientProfileId: string;
    nombreCompleto: string;
    parentesco: $Enums.Kinship;
    telefono: string;
    createdAt: Date;
    _count: EmergencyContactCountAggregateOutputType | null;
    _min: EmergencyContactMinAggregateOutputType | null;
    _max: EmergencyContactMaxAggregateOutputType | null;
};
export type GetEmergencyContactGroupByPayload<T extends EmergencyContactGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EmergencyContactGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EmergencyContactGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EmergencyContactGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EmergencyContactGroupByOutputType[P]>;
}>>;
export type EmergencyContactWhereInput = {
    AND?: Prisma.EmergencyContactWhereInput | Prisma.EmergencyContactWhereInput[];
    OR?: Prisma.EmergencyContactWhereInput[];
    NOT?: Prisma.EmergencyContactWhereInput | Prisma.EmergencyContactWhereInput[];
    id?: Prisma.StringFilter<"EmergencyContact"> | string;
    patientProfileId?: Prisma.StringFilter<"EmergencyContact"> | string;
    nombreCompleto?: Prisma.StringFilter<"EmergencyContact"> | string;
    parentesco?: Prisma.EnumKinshipFilter<"EmergencyContact"> | $Enums.Kinship;
    telefono?: Prisma.StringFilter<"EmergencyContact"> | string;
    createdAt?: Prisma.DateTimeFilter<"EmergencyContact"> | Date | string;
    patientProfile?: Prisma.XOR<Prisma.PatientProfileScalarRelationFilter, Prisma.PatientProfileWhereInput>;
};
export type EmergencyContactOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    patientProfileId?: Prisma.SortOrder;
    nombreCompleto?: Prisma.SortOrder;
    parentesco?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    patientProfile?: Prisma.PatientProfileOrderByWithRelationInput;
};
export type EmergencyContactWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.EmergencyContactWhereInput | Prisma.EmergencyContactWhereInput[];
    OR?: Prisma.EmergencyContactWhereInput[];
    NOT?: Prisma.EmergencyContactWhereInput | Prisma.EmergencyContactWhereInput[];
    patientProfileId?: Prisma.StringFilter<"EmergencyContact"> | string;
    nombreCompleto?: Prisma.StringFilter<"EmergencyContact"> | string;
    parentesco?: Prisma.EnumKinshipFilter<"EmergencyContact"> | $Enums.Kinship;
    telefono?: Prisma.StringFilter<"EmergencyContact"> | string;
    createdAt?: Prisma.DateTimeFilter<"EmergencyContact"> | Date | string;
    patientProfile?: Prisma.XOR<Prisma.PatientProfileScalarRelationFilter, Prisma.PatientProfileWhereInput>;
}, "id">;
export type EmergencyContactOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    patientProfileId?: Prisma.SortOrder;
    nombreCompleto?: Prisma.SortOrder;
    parentesco?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.EmergencyContactCountOrderByAggregateInput;
    _max?: Prisma.EmergencyContactMaxOrderByAggregateInput;
    _min?: Prisma.EmergencyContactMinOrderByAggregateInput;
};
export type EmergencyContactScalarWhereWithAggregatesInput = {
    AND?: Prisma.EmergencyContactScalarWhereWithAggregatesInput | Prisma.EmergencyContactScalarWhereWithAggregatesInput[];
    OR?: Prisma.EmergencyContactScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EmergencyContactScalarWhereWithAggregatesInput | Prisma.EmergencyContactScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"EmergencyContact"> | string;
    patientProfileId?: Prisma.StringWithAggregatesFilter<"EmergencyContact"> | string;
    nombreCompleto?: Prisma.StringWithAggregatesFilter<"EmergencyContact"> | string;
    parentesco?: Prisma.EnumKinshipWithAggregatesFilter<"EmergencyContact"> | $Enums.Kinship;
    telefono?: Prisma.StringWithAggregatesFilter<"EmergencyContact"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"EmergencyContact"> | Date | string;
};
export type EmergencyContactCreateInput = {
    id?: string;
    nombreCompleto: string;
    parentesco: $Enums.Kinship;
    telefono: string;
    createdAt?: Date | string;
    patientProfile: Prisma.PatientProfileCreateNestedOneWithoutEmergencyContactsInput;
};
export type EmergencyContactUncheckedCreateInput = {
    id?: string;
    patientProfileId: string;
    nombreCompleto: string;
    parentesco: $Enums.Kinship;
    telefono: string;
    createdAt?: Date | string;
};
export type EmergencyContactUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreCompleto?: Prisma.StringFieldUpdateOperationsInput | string;
    parentesco?: Prisma.EnumKinshipFieldUpdateOperationsInput | $Enums.Kinship;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patientProfile?: Prisma.PatientProfileUpdateOneRequiredWithoutEmergencyContactsNestedInput;
};
export type EmergencyContactUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    patientProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreCompleto?: Prisma.StringFieldUpdateOperationsInput | string;
    parentesco?: Prisma.EnumKinshipFieldUpdateOperationsInput | $Enums.Kinship;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmergencyContactCreateManyInput = {
    id?: string;
    patientProfileId: string;
    nombreCompleto: string;
    parentesco: $Enums.Kinship;
    telefono: string;
    createdAt?: Date | string;
};
export type EmergencyContactUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreCompleto?: Prisma.StringFieldUpdateOperationsInput | string;
    parentesco?: Prisma.EnumKinshipFieldUpdateOperationsInput | $Enums.Kinship;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmergencyContactUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    patientProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreCompleto?: Prisma.StringFieldUpdateOperationsInput | string;
    parentesco?: Prisma.EnumKinshipFieldUpdateOperationsInput | $Enums.Kinship;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmergencyContactListRelationFilter = {
    every?: Prisma.EmergencyContactWhereInput;
    some?: Prisma.EmergencyContactWhereInput;
    none?: Prisma.EmergencyContactWhereInput;
};
export type EmergencyContactOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EmergencyContactCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    patientProfileId?: Prisma.SortOrder;
    nombreCompleto?: Prisma.SortOrder;
    parentesco?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EmergencyContactMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    patientProfileId?: Prisma.SortOrder;
    nombreCompleto?: Prisma.SortOrder;
    parentesco?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EmergencyContactMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    patientProfileId?: Prisma.SortOrder;
    nombreCompleto?: Prisma.SortOrder;
    parentesco?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EmergencyContactCreateNestedManyWithoutPatientProfileInput = {
    create?: Prisma.XOR<Prisma.EmergencyContactCreateWithoutPatientProfileInput, Prisma.EmergencyContactUncheckedCreateWithoutPatientProfileInput> | Prisma.EmergencyContactCreateWithoutPatientProfileInput[] | Prisma.EmergencyContactUncheckedCreateWithoutPatientProfileInput[];
    connectOrCreate?: Prisma.EmergencyContactCreateOrConnectWithoutPatientProfileInput | Prisma.EmergencyContactCreateOrConnectWithoutPatientProfileInput[];
    createMany?: Prisma.EmergencyContactCreateManyPatientProfileInputEnvelope;
    connect?: Prisma.EmergencyContactWhereUniqueInput | Prisma.EmergencyContactWhereUniqueInput[];
};
export type EmergencyContactUncheckedCreateNestedManyWithoutPatientProfileInput = {
    create?: Prisma.XOR<Prisma.EmergencyContactCreateWithoutPatientProfileInput, Prisma.EmergencyContactUncheckedCreateWithoutPatientProfileInput> | Prisma.EmergencyContactCreateWithoutPatientProfileInput[] | Prisma.EmergencyContactUncheckedCreateWithoutPatientProfileInput[];
    connectOrCreate?: Prisma.EmergencyContactCreateOrConnectWithoutPatientProfileInput | Prisma.EmergencyContactCreateOrConnectWithoutPatientProfileInput[];
    createMany?: Prisma.EmergencyContactCreateManyPatientProfileInputEnvelope;
    connect?: Prisma.EmergencyContactWhereUniqueInput | Prisma.EmergencyContactWhereUniqueInput[];
};
export type EmergencyContactUpdateManyWithoutPatientProfileNestedInput = {
    create?: Prisma.XOR<Prisma.EmergencyContactCreateWithoutPatientProfileInput, Prisma.EmergencyContactUncheckedCreateWithoutPatientProfileInput> | Prisma.EmergencyContactCreateWithoutPatientProfileInput[] | Prisma.EmergencyContactUncheckedCreateWithoutPatientProfileInput[];
    connectOrCreate?: Prisma.EmergencyContactCreateOrConnectWithoutPatientProfileInput | Prisma.EmergencyContactCreateOrConnectWithoutPatientProfileInput[];
    upsert?: Prisma.EmergencyContactUpsertWithWhereUniqueWithoutPatientProfileInput | Prisma.EmergencyContactUpsertWithWhereUniqueWithoutPatientProfileInput[];
    createMany?: Prisma.EmergencyContactCreateManyPatientProfileInputEnvelope;
    set?: Prisma.EmergencyContactWhereUniqueInput | Prisma.EmergencyContactWhereUniqueInput[];
    disconnect?: Prisma.EmergencyContactWhereUniqueInput | Prisma.EmergencyContactWhereUniqueInput[];
    delete?: Prisma.EmergencyContactWhereUniqueInput | Prisma.EmergencyContactWhereUniqueInput[];
    connect?: Prisma.EmergencyContactWhereUniqueInput | Prisma.EmergencyContactWhereUniqueInput[];
    update?: Prisma.EmergencyContactUpdateWithWhereUniqueWithoutPatientProfileInput | Prisma.EmergencyContactUpdateWithWhereUniqueWithoutPatientProfileInput[];
    updateMany?: Prisma.EmergencyContactUpdateManyWithWhereWithoutPatientProfileInput | Prisma.EmergencyContactUpdateManyWithWhereWithoutPatientProfileInput[];
    deleteMany?: Prisma.EmergencyContactScalarWhereInput | Prisma.EmergencyContactScalarWhereInput[];
};
export type EmergencyContactUncheckedUpdateManyWithoutPatientProfileNestedInput = {
    create?: Prisma.XOR<Prisma.EmergencyContactCreateWithoutPatientProfileInput, Prisma.EmergencyContactUncheckedCreateWithoutPatientProfileInput> | Prisma.EmergencyContactCreateWithoutPatientProfileInput[] | Prisma.EmergencyContactUncheckedCreateWithoutPatientProfileInput[];
    connectOrCreate?: Prisma.EmergencyContactCreateOrConnectWithoutPatientProfileInput | Prisma.EmergencyContactCreateOrConnectWithoutPatientProfileInput[];
    upsert?: Prisma.EmergencyContactUpsertWithWhereUniqueWithoutPatientProfileInput | Prisma.EmergencyContactUpsertWithWhereUniqueWithoutPatientProfileInput[];
    createMany?: Prisma.EmergencyContactCreateManyPatientProfileInputEnvelope;
    set?: Prisma.EmergencyContactWhereUniqueInput | Prisma.EmergencyContactWhereUniqueInput[];
    disconnect?: Prisma.EmergencyContactWhereUniqueInput | Prisma.EmergencyContactWhereUniqueInput[];
    delete?: Prisma.EmergencyContactWhereUniqueInput | Prisma.EmergencyContactWhereUniqueInput[];
    connect?: Prisma.EmergencyContactWhereUniqueInput | Prisma.EmergencyContactWhereUniqueInput[];
    update?: Prisma.EmergencyContactUpdateWithWhereUniqueWithoutPatientProfileInput | Prisma.EmergencyContactUpdateWithWhereUniqueWithoutPatientProfileInput[];
    updateMany?: Prisma.EmergencyContactUpdateManyWithWhereWithoutPatientProfileInput | Prisma.EmergencyContactUpdateManyWithWhereWithoutPatientProfileInput[];
    deleteMany?: Prisma.EmergencyContactScalarWhereInput | Prisma.EmergencyContactScalarWhereInput[];
};
export type EnumKinshipFieldUpdateOperationsInput = {
    set?: $Enums.Kinship;
};
export type EmergencyContactCreateWithoutPatientProfileInput = {
    id?: string;
    nombreCompleto: string;
    parentesco: $Enums.Kinship;
    telefono: string;
    createdAt?: Date | string;
};
export type EmergencyContactUncheckedCreateWithoutPatientProfileInput = {
    id?: string;
    nombreCompleto: string;
    parentesco: $Enums.Kinship;
    telefono: string;
    createdAt?: Date | string;
};
export type EmergencyContactCreateOrConnectWithoutPatientProfileInput = {
    where: Prisma.EmergencyContactWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmergencyContactCreateWithoutPatientProfileInput, Prisma.EmergencyContactUncheckedCreateWithoutPatientProfileInput>;
};
export type EmergencyContactCreateManyPatientProfileInputEnvelope = {
    data: Prisma.EmergencyContactCreateManyPatientProfileInput | Prisma.EmergencyContactCreateManyPatientProfileInput[];
    skipDuplicates?: boolean;
};
export type EmergencyContactUpsertWithWhereUniqueWithoutPatientProfileInput = {
    where: Prisma.EmergencyContactWhereUniqueInput;
    update: Prisma.XOR<Prisma.EmergencyContactUpdateWithoutPatientProfileInput, Prisma.EmergencyContactUncheckedUpdateWithoutPatientProfileInput>;
    create: Prisma.XOR<Prisma.EmergencyContactCreateWithoutPatientProfileInput, Prisma.EmergencyContactUncheckedCreateWithoutPatientProfileInput>;
};
export type EmergencyContactUpdateWithWhereUniqueWithoutPatientProfileInput = {
    where: Prisma.EmergencyContactWhereUniqueInput;
    data: Prisma.XOR<Prisma.EmergencyContactUpdateWithoutPatientProfileInput, Prisma.EmergencyContactUncheckedUpdateWithoutPatientProfileInput>;
};
export type EmergencyContactUpdateManyWithWhereWithoutPatientProfileInput = {
    where: Prisma.EmergencyContactScalarWhereInput;
    data: Prisma.XOR<Prisma.EmergencyContactUpdateManyMutationInput, Prisma.EmergencyContactUncheckedUpdateManyWithoutPatientProfileInput>;
};
export type EmergencyContactScalarWhereInput = {
    AND?: Prisma.EmergencyContactScalarWhereInput | Prisma.EmergencyContactScalarWhereInput[];
    OR?: Prisma.EmergencyContactScalarWhereInput[];
    NOT?: Prisma.EmergencyContactScalarWhereInput | Prisma.EmergencyContactScalarWhereInput[];
    id?: Prisma.StringFilter<"EmergencyContact"> | string;
    patientProfileId?: Prisma.StringFilter<"EmergencyContact"> | string;
    nombreCompleto?: Prisma.StringFilter<"EmergencyContact"> | string;
    parentesco?: Prisma.EnumKinshipFilter<"EmergencyContact"> | $Enums.Kinship;
    telefono?: Prisma.StringFilter<"EmergencyContact"> | string;
    createdAt?: Prisma.DateTimeFilter<"EmergencyContact"> | Date | string;
};
export type EmergencyContactCreateManyPatientProfileInput = {
    id?: string;
    nombreCompleto: string;
    parentesco: $Enums.Kinship;
    telefono: string;
    createdAt?: Date | string;
};
export type EmergencyContactUpdateWithoutPatientProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreCompleto?: Prisma.StringFieldUpdateOperationsInput | string;
    parentesco?: Prisma.EnumKinshipFieldUpdateOperationsInput | $Enums.Kinship;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmergencyContactUncheckedUpdateWithoutPatientProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreCompleto?: Prisma.StringFieldUpdateOperationsInput | string;
    parentesco?: Prisma.EnumKinshipFieldUpdateOperationsInput | $Enums.Kinship;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmergencyContactUncheckedUpdateManyWithoutPatientProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreCompleto?: Prisma.StringFieldUpdateOperationsInput | string;
    parentesco?: Prisma.EnumKinshipFieldUpdateOperationsInput | $Enums.Kinship;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmergencyContactSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    patientProfileId?: boolean;
    nombreCompleto?: boolean;
    parentesco?: boolean;
    telefono?: boolean;
    createdAt?: boolean;
    patientProfile?: boolean | Prisma.PatientProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["emergencyContact"]>;
export type EmergencyContactSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    patientProfileId?: boolean;
    nombreCompleto?: boolean;
    parentesco?: boolean;
    telefono?: boolean;
    createdAt?: boolean;
    patientProfile?: boolean | Prisma.PatientProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["emergencyContact"]>;
export type EmergencyContactSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    patientProfileId?: boolean;
    nombreCompleto?: boolean;
    parentesco?: boolean;
    telefono?: boolean;
    createdAt?: boolean;
    patientProfile?: boolean | Prisma.PatientProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["emergencyContact"]>;
export type EmergencyContactSelectScalar = {
    id?: boolean;
    patientProfileId?: boolean;
    nombreCompleto?: boolean;
    parentesco?: boolean;
    telefono?: boolean;
    createdAt?: boolean;
};
export type EmergencyContactOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "patientProfileId" | "nombreCompleto" | "parentesco" | "telefono" | "createdAt", ExtArgs["result"]["emergencyContact"]>;
export type EmergencyContactInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patientProfile?: boolean | Prisma.PatientProfileDefaultArgs<ExtArgs>;
};
export type EmergencyContactIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patientProfile?: boolean | Prisma.PatientProfileDefaultArgs<ExtArgs>;
};
export type EmergencyContactIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patientProfile?: boolean | Prisma.PatientProfileDefaultArgs<ExtArgs>;
};
export type $EmergencyContactPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EmergencyContact";
    objects: {
        patientProfile: Prisma.$PatientProfilePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        patientProfileId: string;
        nombreCompleto: string;
        parentesco: $Enums.Kinship;
        telefono: string;
        createdAt: Date;
    }, ExtArgs["result"]["emergencyContact"]>;
    composites: {};
};
export type EmergencyContactGetPayload<S extends boolean | null | undefined | EmergencyContactDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EmergencyContactPayload, S>;
export type EmergencyContactCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EmergencyContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EmergencyContactCountAggregateInputType | true;
};
export interface EmergencyContactDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EmergencyContact'];
        meta: {
            name: 'EmergencyContact';
        };
    };
    findUnique<T extends EmergencyContactFindUniqueArgs>(args: Prisma.SelectSubset<T, EmergencyContactFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EmergencyContactClient<runtime.Types.Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EmergencyContactFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EmergencyContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmergencyContactClient<runtime.Types.Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EmergencyContactFindFirstArgs>(args?: Prisma.SelectSubset<T, EmergencyContactFindFirstArgs<ExtArgs>>): Prisma.Prisma__EmergencyContactClient<runtime.Types.Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EmergencyContactFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EmergencyContactFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmergencyContactClient<runtime.Types.Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EmergencyContactFindManyArgs>(args?: Prisma.SelectSubset<T, EmergencyContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EmergencyContactCreateArgs>(args: Prisma.SelectSubset<T, EmergencyContactCreateArgs<ExtArgs>>): Prisma.Prisma__EmergencyContactClient<runtime.Types.Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EmergencyContactCreateManyArgs>(args?: Prisma.SelectSubset<T, EmergencyContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EmergencyContactCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EmergencyContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EmergencyContactDeleteArgs>(args: Prisma.SelectSubset<T, EmergencyContactDeleteArgs<ExtArgs>>): Prisma.Prisma__EmergencyContactClient<runtime.Types.Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EmergencyContactUpdateArgs>(args: Prisma.SelectSubset<T, EmergencyContactUpdateArgs<ExtArgs>>): Prisma.Prisma__EmergencyContactClient<runtime.Types.Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EmergencyContactDeleteManyArgs>(args?: Prisma.SelectSubset<T, EmergencyContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EmergencyContactUpdateManyArgs>(args: Prisma.SelectSubset<T, EmergencyContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EmergencyContactUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EmergencyContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EmergencyContactUpsertArgs>(args: Prisma.SelectSubset<T, EmergencyContactUpsertArgs<ExtArgs>>): Prisma.Prisma__EmergencyContactClient<runtime.Types.Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EmergencyContactCountArgs>(args?: Prisma.Subset<T, EmergencyContactCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EmergencyContactCountAggregateOutputType> : number>;
    aggregate<T extends EmergencyContactAggregateArgs>(args: Prisma.Subset<T, EmergencyContactAggregateArgs>): Prisma.PrismaPromise<GetEmergencyContactAggregateType<T>>;
    groupBy<T extends EmergencyContactGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EmergencyContactGroupByArgs['orderBy'];
    } : {
        orderBy?: EmergencyContactGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EmergencyContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmergencyContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EmergencyContactFieldRefs;
}
export interface Prisma__EmergencyContactClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    patientProfile<T extends Prisma.PatientProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PatientProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__PatientProfileClient<runtime.Types.Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EmergencyContactFieldRefs {
    readonly id: Prisma.FieldRef<"EmergencyContact", 'String'>;
    readonly patientProfileId: Prisma.FieldRef<"EmergencyContact", 'String'>;
    readonly nombreCompleto: Prisma.FieldRef<"EmergencyContact", 'String'>;
    readonly parentesco: Prisma.FieldRef<"EmergencyContact", 'Kinship'>;
    readonly telefono: Prisma.FieldRef<"EmergencyContact", 'String'>;
    readonly createdAt: Prisma.FieldRef<"EmergencyContact", 'DateTime'>;
}
export type EmergencyContactFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmergencyContactSelect<ExtArgs> | null;
    omit?: Prisma.EmergencyContactOmit<ExtArgs> | null;
    include?: Prisma.EmergencyContactInclude<ExtArgs> | null;
    where: Prisma.EmergencyContactWhereUniqueInput;
};
export type EmergencyContactFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmergencyContactSelect<ExtArgs> | null;
    omit?: Prisma.EmergencyContactOmit<ExtArgs> | null;
    include?: Prisma.EmergencyContactInclude<ExtArgs> | null;
    where: Prisma.EmergencyContactWhereUniqueInput;
};
export type EmergencyContactFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmergencyContactSelect<ExtArgs> | null;
    omit?: Prisma.EmergencyContactOmit<ExtArgs> | null;
    include?: Prisma.EmergencyContactInclude<ExtArgs> | null;
    where?: Prisma.EmergencyContactWhereInput;
    orderBy?: Prisma.EmergencyContactOrderByWithRelationInput | Prisma.EmergencyContactOrderByWithRelationInput[];
    cursor?: Prisma.EmergencyContactWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmergencyContactScalarFieldEnum | Prisma.EmergencyContactScalarFieldEnum[];
};
export type EmergencyContactFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmergencyContactSelect<ExtArgs> | null;
    omit?: Prisma.EmergencyContactOmit<ExtArgs> | null;
    include?: Prisma.EmergencyContactInclude<ExtArgs> | null;
    where?: Prisma.EmergencyContactWhereInput;
    orderBy?: Prisma.EmergencyContactOrderByWithRelationInput | Prisma.EmergencyContactOrderByWithRelationInput[];
    cursor?: Prisma.EmergencyContactWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmergencyContactScalarFieldEnum | Prisma.EmergencyContactScalarFieldEnum[];
};
export type EmergencyContactFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmergencyContactSelect<ExtArgs> | null;
    omit?: Prisma.EmergencyContactOmit<ExtArgs> | null;
    include?: Prisma.EmergencyContactInclude<ExtArgs> | null;
    where?: Prisma.EmergencyContactWhereInput;
    orderBy?: Prisma.EmergencyContactOrderByWithRelationInput | Prisma.EmergencyContactOrderByWithRelationInput[];
    cursor?: Prisma.EmergencyContactWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmergencyContactScalarFieldEnum | Prisma.EmergencyContactScalarFieldEnum[];
};
export type EmergencyContactCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmergencyContactSelect<ExtArgs> | null;
    omit?: Prisma.EmergencyContactOmit<ExtArgs> | null;
    include?: Prisma.EmergencyContactInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmergencyContactCreateInput, Prisma.EmergencyContactUncheckedCreateInput>;
};
export type EmergencyContactCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EmergencyContactCreateManyInput | Prisma.EmergencyContactCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EmergencyContactCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmergencyContactSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EmergencyContactOmit<ExtArgs> | null;
    data: Prisma.EmergencyContactCreateManyInput | Prisma.EmergencyContactCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EmergencyContactIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EmergencyContactUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmergencyContactSelect<ExtArgs> | null;
    omit?: Prisma.EmergencyContactOmit<ExtArgs> | null;
    include?: Prisma.EmergencyContactInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmergencyContactUpdateInput, Prisma.EmergencyContactUncheckedUpdateInput>;
    where: Prisma.EmergencyContactWhereUniqueInput;
};
export type EmergencyContactUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EmergencyContactUpdateManyMutationInput, Prisma.EmergencyContactUncheckedUpdateManyInput>;
    where?: Prisma.EmergencyContactWhereInput;
    limit?: number;
};
export type EmergencyContactUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmergencyContactSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EmergencyContactOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmergencyContactUpdateManyMutationInput, Prisma.EmergencyContactUncheckedUpdateManyInput>;
    where?: Prisma.EmergencyContactWhereInput;
    limit?: number;
    include?: Prisma.EmergencyContactIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EmergencyContactUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmergencyContactSelect<ExtArgs> | null;
    omit?: Prisma.EmergencyContactOmit<ExtArgs> | null;
    include?: Prisma.EmergencyContactInclude<ExtArgs> | null;
    where: Prisma.EmergencyContactWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmergencyContactCreateInput, Prisma.EmergencyContactUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EmergencyContactUpdateInput, Prisma.EmergencyContactUncheckedUpdateInput>;
};
export type EmergencyContactDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmergencyContactSelect<ExtArgs> | null;
    omit?: Prisma.EmergencyContactOmit<ExtArgs> | null;
    include?: Prisma.EmergencyContactInclude<ExtArgs> | null;
    where: Prisma.EmergencyContactWhereUniqueInput;
};
export type EmergencyContactDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmergencyContactWhereInput;
    limit?: number;
};
export type EmergencyContactDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmergencyContactSelect<ExtArgs> | null;
    omit?: Prisma.EmergencyContactOmit<ExtArgs> | null;
    include?: Prisma.EmergencyContactInclude<ExtArgs> | null;
};

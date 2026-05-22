import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ClinicalAddendumModel = runtime.Types.Result.DefaultSelection<Prisma.$ClinicalAddendumPayload>;
export type AggregateClinicalAddendum = {
    _count: ClinicalAddendumCountAggregateOutputType | null;
    _min: ClinicalAddendumMinAggregateOutputType | null;
    _max: ClinicalAddendumMaxAggregateOutputType | null;
};
export type ClinicalAddendumMinAggregateOutputType = {
    id: string | null;
    encounterId: string | null;
    autorId: string | null;
    motivoAclaracion: string | null;
    contenido: string | null;
    createdAt: Date | null;
};
export type ClinicalAddendumMaxAggregateOutputType = {
    id: string | null;
    encounterId: string | null;
    autorId: string | null;
    motivoAclaracion: string | null;
    contenido: string | null;
    createdAt: Date | null;
};
export type ClinicalAddendumCountAggregateOutputType = {
    id: number;
    encounterId: number;
    autorId: number;
    motivoAclaracion: number;
    contenido: number;
    createdAt: number;
    _all: number;
};
export type ClinicalAddendumMinAggregateInputType = {
    id?: true;
    encounterId?: true;
    autorId?: true;
    motivoAclaracion?: true;
    contenido?: true;
    createdAt?: true;
};
export type ClinicalAddendumMaxAggregateInputType = {
    id?: true;
    encounterId?: true;
    autorId?: true;
    motivoAclaracion?: true;
    contenido?: true;
    createdAt?: true;
};
export type ClinicalAddendumCountAggregateInputType = {
    id?: true;
    encounterId?: true;
    autorId?: true;
    motivoAclaracion?: true;
    contenido?: true;
    createdAt?: true;
    _all?: true;
};
export type ClinicalAddendumAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClinicalAddendumWhereInput;
    orderBy?: Prisma.ClinicalAddendumOrderByWithRelationInput | Prisma.ClinicalAddendumOrderByWithRelationInput[];
    cursor?: Prisma.ClinicalAddendumWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ClinicalAddendumCountAggregateInputType;
    _min?: ClinicalAddendumMinAggregateInputType;
    _max?: ClinicalAddendumMaxAggregateInputType;
};
export type GetClinicalAddendumAggregateType<T extends ClinicalAddendumAggregateArgs> = {
    [P in keyof T & keyof AggregateClinicalAddendum]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateClinicalAddendum[P]> : Prisma.GetScalarType<T[P], AggregateClinicalAddendum[P]>;
};
export type ClinicalAddendumGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClinicalAddendumWhereInput;
    orderBy?: Prisma.ClinicalAddendumOrderByWithAggregationInput | Prisma.ClinicalAddendumOrderByWithAggregationInput[];
    by: Prisma.ClinicalAddendumScalarFieldEnum[] | Prisma.ClinicalAddendumScalarFieldEnum;
    having?: Prisma.ClinicalAddendumScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClinicalAddendumCountAggregateInputType | true;
    _min?: ClinicalAddendumMinAggregateInputType;
    _max?: ClinicalAddendumMaxAggregateInputType;
};
export type ClinicalAddendumGroupByOutputType = {
    id: string;
    encounterId: string;
    autorId: string;
    motivoAclaracion: string;
    contenido: string;
    createdAt: Date;
    _count: ClinicalAddendumCountAggregateOutputType | null;
    _min: ClinicalAddendumMinAggregateOutputType | null;
    _max: ClinicalAddendumMaxAggregateOutputType | null;
};
export type GetClinicalAddendumGroupByPayload<T extends ClinicalAddendumGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClinicalAddendumGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClinicalAddendumGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClinicalAddendumGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClinicalAddendumGroupByOutputType[P]>;
}>>;
export type ClinicalAddendumWhereInput = {
    AND?: Prisma.ClinicalAddendumWhereInput | Prisma.ClinicalAddendumWhereInput[];
    OR?: Prisma.ClinicalAddendumWhereInput[];
    NOT?: Prisma.ClinicalAddendumWhereInput | Prisma.ClinicalAddendumWhereInput[];
    id?: Prisma.StringFilter<"ClinicalAddendum"> | string;
    encounterId?: Prisma.StringFilter<"ClinicalAddendum"> | string;
    autorId?: Prisma.StringFilter<"ClinicalAddendum"> | string;
    motivoAclaracion?: Prisma.StringFilter<"ClinicalAddendum"> | string;
    contenido?: Prisma.StringFilter<"ClinicalAddendum"> | string;
    createdAt?: Prisma.DateTimeFilter<"ClinicalAddendum"> | Date | string;
    encounter?: Prisma.XOR<Prisma.ClinicalEncounterScalarRelationFilter, Prisma.ClinicalEncounterWhereInput>;
    autor?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type ClinicalAddendumOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    encounterId?: Prisma.SortOrder;
    autorId?: Prisma.SortOrder;
    motivoAclaracion?: Prisma.SortOrder;
    contenido?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    encounter?: Prisma.ClinicalEncounterOrderByWithRelationInput;
    autor?: Prisma.UserOrderByWithRelationInput;
};
export type ClinicalAddendumWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ClinicalAddendumWhereInput | Prisma.ClinicalAddendumWhereInput[];
    OR?: Prisma.ClinicalAddendumWhereInput[];
    NOT?: Prisma.ClinicalAddendumWhereInput | Prisma.ClinicalAddendumWhereInput[];
    encounterId?: Prisma.StringFilter<"ClinicalAddendum"> | string;
    autorId?: Prisma.StringFilter<"ClinicalAddendum"> | string;
    motivoAclaracion?: Prisma.StringFilter<"ClinicalAddendum"> | string;
    contenido?: Prisma.StringFilter<"ClinicalAddendum"> | string;
    createdAt?: Prisma.DateTimeFilter<"ClinicalAddendum"> | Date | string;
    encounter?: Prisma.XOR<Prisma.ClinicalEncounterScalarRelationFilter, Prisma.ClinicalEncounterWhereInput>;
    autor?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type ClinicalAddendumOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    encounterId?: Prisma.SortOrder;
    autorId?: Prisma.SortOrder;
    motivoAclaracion?: Prisma.SortOrder;
    contenido?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ClinicalAddendumCountOrderByAggregateInput;
    _max?: Prisma.ClinicalAddendumMaxOrderByAggregateInput;
    _min?: Prisma.ClinicalAddendumMinOrderByAggregateInput;
};
export type ClinicalAddendumScalarWhereWithAggregatesInput = {
    AND?: Prisma.ClinicalAddendumScalarWhereWithAggregatesInput | Prisma.ClinicalAddendumScalarWhereWithAggregatesInput[];
    OR?: Prisma.ClinicalAddendumScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ClinicalAddendumScalarWhereWithAggregatesInput | Prisma.ClinicalAddendumScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ClinicalAddendum"> | string;
    encounterId?: Prisma.StringWithAggregatesFilter<"ClinicalAddendum"> | string;
    autorId?: Prisma.StringWithAggregatesFilter<"ClinicalAddendum"> | string;
    motivoAclaracion?: Prisma.StringWithAggregatesFilter<"ClinicalAddendum"> | string;
    contenido?: Prisma.StringWithAggregatesFilter<"ClinicalAddendum"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ClinicalAddendum"> | Date | string;
};
export type ClinicalAddendumCreateInput = {
    id?: string;
    motivoAclaracion: string;
    contenido: string;
    createdAt?: Date | string;
    encounter: Prisma.ClinicalEncounterCreateNestedOneWithoutAddendumsInput;
    autor: Prisma.UserCreateNestedOneWithoutAddendumsInput;
};
export type ClinicalAddendumUncheckedCreateInput = {
    id?: string;
    encounterId: string;
    autorId: string;
    motivoAclaracion: string;
    contenido: string;
    createdAt?: Date | string;
};
export type ClinicalAddendumUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    motivoAclaracion?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    encounter?: Prisma.ClinicalEncounterUpdateOneRequiredWithoutAddendumsNestedInput;
    autor?: Prisma.UserUpdateOneRequiredWithoutAddendumsNestedInput;
};
export type ClinicalAddendumUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    encounterId?: Prisma.StringFieldUpdateOperationsInput | string;
    autorId?: Prisma.StringFieldUpdateOperationsInput | string;
    motivoAclaracion?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClinicalAddendumCreateManyInput = {
    id?: string;
    encounterId: string;
    autorId: string;
    motivoAclaracion: string;
    contenido: string;
    createdAt?: Date | string;
};
export type ClinicalAddendumUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    motivoAclaracion?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClinicalAddendumUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    encounterId?: Prisma.StringFieldUpdateOperationsInput | string;
    autorId?: Prisma.StringFieldUpdateOperationsInput | string;
    motivoAclaracion?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClinicalAddendumListRelationFilter = {
    every?: Prisma.ClinicalAddendumWhereInput;
    some?: Prisma.ClinicalAddendumWhereInput;
    none?: Prisma.ClinicalAddendumWhereInput;
};
export type ClinicalAddendumOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ClinicalAddendumCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    encounterId?: Prisma.SortOrder;
    autorId?: Prisma.SortOrder;
    motivoAclaracion?: Prisma.SortOrder;
    contenido?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ClinicalAddendumMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    encounterId?: Prisma.SortOrder;
    autorId?: Prisma.SortOrder;
    motivoAclaracion?: Prisma.SortOrder;
    contenido?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ClinicalAddendumMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    encounterId?: Prisma.SortOrder;
    autorId?: Prisma.SortOrder;
    motivoAclaracion?: Prisma.SortOrder;
    contenido?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ClinicalAddendumCreateNestedManyWithoutAutorInput = {
    create?: Prisma.XOR<Prisma.ClinicalAddendumCreateWithoutAutorInput, Prisma.ClinicalAddendumUncheckedCreateWithoutAutorInput> | Prisma.ClinicalAddendumCreateWithoutAutorInput[] | Prisma.ClinicalAddendumUncheckedCreateWithoutAutorInput[];
    connectOrCreate?: Prisma.ClinicalAddendumCreateOrConnectWithoutAutorInput | Prisma.ClinicalAddendumCreateOrConnectWithoutAutorInput[];
    createMany?: Prisma.ClinicalAddendumCreateManyAutorInputEnvelope;
    connect?: Prisma.ClinicalAddendumWhereUniqueInput | Prisma.ClinicalAddendumWhereUniqueInput[];
};
export type ClinicalAddendumUncheckedCreateNestedManyWithoutAutorInput = {
    create?: Prisma.XOR<Prisma.ClinicalAddendumCreateWithoutAutorInput, Prisma.ClinicalAddendumUncheckedCreateWithoutAutorInput> | Prisma.ClinicalAddendumCreateWithoutAutorInput[] | Prisma.ClinicalAddendumUncheckedCreateWithoutAutorInput[];
    connectOrCreate?: Prisma.ClinicalAddendumCreateOrConnectWithoutAutorInput | Prisma.ClinicalAddendumCreateOrConnectWithoutAutorInput[];
    createMany?: Prisma.ClinicalAddendumCreateManyAutorInputEnvelope;
    connect?: Prisma.ClinicalAddendumWhereUniqueInput | Prisma.ClinicalAddendumWhereUniqueInput[];
};
export type ClinicalAddendumUpdateManyWithoutAutorNestedInput = {
    create?: Prisma.XOR<Prisma.ClinicalAddendumCreateWithoutAutorInput, Prisma.ClinicalAddendumUncheckedCreateWithoutAutorInput> | Prisma.ClinicalAddendumCreateWithoutAutorInput[] | Prisma.ClinicalAddendumUncheckedCreateWithoutAutorInput[];
    connectOrCreate?: Prisma.ClinicalAddendumCreateOrConnectWithoutAutorInput | Prisma.ClinicalAddendumCreateOrConnectWithoutAutorInput[];
    upsert?: Prisma.ClinicalAddendumUpsertWithWhereUniqueWithoutAutorInput | Prisma.ClinicalAddendumUpsertWithWhereUniqueWithoutAutorInput[];
    createMany?: Prisma.ClinicalAddendumCreateManyAutorInputEnvelope;
    set?: Prisma.ClinicalAddendumWhereUniqueInput | Prisma.ClinicalAddendumWhereUniqueInput[];
    disconnect?: Prisma.ClinicalAddendumWhereUniqueInput | Prisma.ClinicalAddendumWhereUniqueInput[];
    delete?: Prisma.ClinicalAddendumWhereUniqueInput | Prisma.ClinicalAddendumWhereUniqueInput[];
    connect?: Prisma.ClinicalAddendumWhereUniqueInput | Prisma.ClinicalAddendumWhereUniqueInput[];
    update?: Prisma.ClinicalAddendumUpdateWithWhereUniqueWithoutAutorInput | Prisma.ClinicalAddendumUpdateWithWhereUniqueWithoutAutorInput[];
    updateMany?: Prisma.ClinicalAddendumUpdateManyWithWhereWithoutAutorInput | Prisma.ClinicalAddendumUpdateManyWithWhereWithoutAutorInput[];
    deleteMany?: Prisma.ClinicalAddendumScalarWhereInput | Prisma.ClinicalAddendumScalarWhereInput[];
};
export type ClinicalAddendumUncheckedUpdateManyWithoutAutorNestedInput = {
    create?: Prisma.XOR<Prisma.ClinicalAddendumCreateWithoutAutorInput, Prisma.ClinicalAddendumUncheckedCreateWithoutAutorInput> | Prisma.ClinicalAddendumCreateWithoutAutorInput[] | Prisma.ClinicalAddendumUncheckedCreateWithoutAutorInput[];
    connectOrCreate?: Prisma.ClinicalAddendumCreateOrConnectWithoutAutorInput | Prisma.ClinicalAddendumCreateOrConnectWithoutAutorInput[];
    upsert?: Prisma.ClinicalAddendumUpsertWithWhereUniqueWithoutAutorInput | Prisma.ClinicalAddendumUpsertWithWhereUniqueWithoutAutorInput[];
    createMany?: Prisma.ClinicalAddendumCreateManyAutorInputEnvelope;
    set?: Prisma.ClinicalAddendumWhereUniqueInput | Prisma.ClinicalAddendumWhereUniqueInput[];
    disconnect?: Prisma.ClinicalAddendumWhereUniqueInput | Prisma.ClinicalAddendumWhereUniqueInput[];
    delete?: Prisma.ClinicalAddendumWhereUniqueInput | Prisma.ClinicalAddendumWhereUniqueInput[];
    connect?: Prisma.ClinicalAddendumWhereUniqueInput | Prisma.ClinicalAddendumWhereUniqueInput[];
    update?: Prisma.ClinicalAddendumUpdateWithWhereUniqueWithoutAutorInput | Prisma.ClinicalAddendumUpdateWithWhereUniqueWithoutAutorInput[];
    updateMany?: Prisma.ClinicalAddendumUpdateManyWithWhereWithoutAutorInput | Prisma.ClinicalAddendumUpdateManyWithWhereWithoutAutorInput[];
    deleteMany?: Prisma.ClinicalAddendumScalarWhereInput | Prisma.ClinicalAddendumScalarWhereInput[];
};
export type ClinicalAddendumCreateNestedManyWithoutEncounterInput = {
    create?: Prisma.XOR<Prisma.ClinicalAddendumCreateWithoutEncounterInput, Prisma.ClinicalAddendumUncheckedCreateWithoutEncounterInput> | Prisma.ClinicalAddendumCreateWithoutEncounterInput[] | Prisma.ClinicalAddendumUncheckedCreateWithoutEncounterInput[];
    connectOrCreate?: Prisma.ClinicalAddendumCreateOrConnectWithoutEncounterInput | Prisma.ClinicalAddendumCreateOrConnectWithoutEncounterInput[];
    createMany?: Prisma.ClinicalAddendumCreateManyEncounterInputEnvelope;
    connect?: Prisma.ClinicalAddendumWhereUniqueInput | Prisma.ClinicalAddendumWhereUniqueInput[];
};
export type ClinicalAddendumUncheckedCreateNestedManyWithoutEncounterInput = {
    create?: Prisma.XOR<Prisma.ClinicalAddendumCreateWithoutEncounterInput, Prisma.ClinicalAddendumUncheckedCreateWithoutEncounterInput> | Prisma.ClinicalAddendumCreateWithoutEncounterInput[] | Prisma.ClinicalAddendumUncheckedCreateWithoutEncounterInput[];
    connectOrCreate?: Prisma.ClinicalAddendumCreateOrConnectWithoutEncounterInput | Prisma.ClinicalAddendumCreateOrConnectWithoutEncounterInput[];
    createMany?: Prisma.ClinicalAddendumCreateManyEncounterInputEnvelope;
    connect?: Prisma.ClinicalAddendumWhereUniqueInput | Prisma.ClinicalAddendumWhereUniqueInput[];
};
export type ClinicalAddendumUpdateManyWithoutEncounterNestedInput = {
    create?: Prisma.XOR<Prisma.ClinicalAddendumCreateWithoutEncounterInput, Prisma.ClinicalAddendumUncheckedCreateWithoutEncounterInput> | Prisma.ClinicalAddendumCreateWithoutEncounterInput[] | Prisma.ClinicalAddendumUncheckedCreateWithoutEncounterInput[];
    connectOrCreate?: Prisma.ClinicalAddendumCreateOrConnectWithoutEncounterInput | Prisma.ClinicalAddendumCreateOrConnectWithoutEncounterInput[];
    upsert?: Prisma.ClinicalAddendumUpsertWithWhereUniqueWithoutEncounterInput | Prisma.ClinicalAddendumUpsertWithWhereUniqueWithoutEncounterInput[];
    createMany?: Prisma.ClinicalAddendumCreateManyEncounterInputEnvelope;
    set?: Prisma.ClinicalAddendumWhereUniqueInput | Prisma.ClinicalAddendumWhereUniqueInput[];
    disconnect?: Prisma.ClinicalAddendumWhereUniqueInput | Prisma.ClinicalAddendumWhereUniqueInput[];
    delete?: Prisma.ClinicalAddendumWhereUniqueInput | Prisma.ClinicalAddendumWhereUniqueInput[];
    connect?: Prisma.ClinicalAddendumWhereUniqueInput | Prisma.ClinicalAddendumWhereUniqueInput[];
    update?: Prisma.ClinicalAddendumUpdateWithWhereUniqueWithoutEncounterInput | Prisma.ClinicalAddendumUpdateWithWhereUniqueWithoutEncounterInput[];
    updateMany?: Prisma.ClinicalAddendumUpdateManyWithWhereWithoutEncounterInput | Prisma.ClinicalAddendumUpdateManyWithWhereWithoutEncounterInput[];
    deleteMany?: Prisma.ClinicalAddendumScalarWhereInput | Prisma.ClinicalAddendumScalarWhereInput[];
};
export type ClinicalAddendumUncheckedUpdateManyWithoutEncounterNestedInput = {
    create?: Prisma.XOR<Prisma.ClinicalAddendumCreateWithoutEncounterInput, Prisma.ClinicalAddendumUncheckedCreateWithoutEncounterInput> | Prisma.ClinicalAddendumCreateWithoutEncounterInput[] | Prisma.ClinicalAddendumUncheckedCreateWithoutEncounterInput[];
    connectOrCreate?: Prisma.ClinicalAddendumCreateOrConnectWithoutEncounterInput | Prisma.ClinicalAddendumCreateOrConnectWithoutEncounterInput[];
    upsert?: Prisma.ClinicalAddendumUpsertWithWhereUniqueWithoutEncounterInput | Prisma.ClinicalAddendumUpsertWithWhereUniqueWithoutEncounterInput[];
    createMany?: Prisma.ClinicalAddendumCreateManyEncounterInputEnvelope;
    set?: Prisma.ClinicalAddendumWhereUniqueInput | Prisma.ClinicalAddendumWhereUniqueInput[];
    disconnect?: Prisma.ClinicalAddendumWhereUniqueInput | Prisma.ClinicalAddendumWhereUniqueInput[];
    delete?: Prisma.ClinicalAddendumWhereUniqueInput | Prisma.ClinicalAddendumWhereUniqueInput[];
    connect?: Prisma.ClinicalAddendumWhereUniqueInput | Prisma.ClinicalAddendumWhereUniqueInput[];
    update?: Prisma.ClinicalAddendumUpdateWithWhereUniqueWithoutEncounterInput | Prisma.ClinicalAddendumUpdateWithWhereUniqueWithoutEncounterInput[];
    updateMany?: Prisma.ClinicalAddendumUpdateManyWithWhereWithoutEncounterInput | Prisma.ClinicalAddendumUpdateManyWithWhereWithoutEncounterInput[];
    deleteMany?: Prisma.ClinicalAddendumScalarWhereInput | Prisma.ClinicalAddendumScalarWhereInput[];
};
export type ClinicalAddendumCreateWithoutAutorInput = {
    id?: string;
    motivoAclaracion: string;
    contenido: string;
    createdAt?: Date | string;
    encounter: Prisma.ClinicalEncounterCreateNestedOneWithoutAddendumsInput;
};
export type ClinicalAddendumUncheckedCreateWithoutAutorInput = {
    id?: string;
    encounterId: string;
    motivoAclaracion: string;
    contenido: string;
    createdAt?: Date | string;
};
export type ClinicalAddendumCreateOrConnectWithoutAutorInput = {
    where: Prisma.ClinicalAddendumWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClinicalAddendumCreateWithoutAutorInput, Prisma.ClinicalAddendumUncheckedCreateWithoutAutorInput>;
};
export type ClinicalAddendumCreateManyAutorInputEnvelope = {
    data: Prisma.ClinicalAddendumCreateManyAutorInput | Prisma.ClinicalAddendumCreateManyAutorInput[];
    skipDuplicates?: boolean;
};
export type ClinicalAddendumUpsertWithWhereUniqueWithoutAutorInput = {
    where: Prisma.ClinicalAddendumWhereUniqueInput;
    update: Prisma.XOR<Prisma.ClinicalAddendumUpdateWithoutAutorInput, Prisma.ClinicalAddendumUncheckedUpdateWithoutAutorInput>;
    create: Prisma.XOR<Prisma.ClinicalAddendumCreateWithoutAutorInput, Prisma.ClinicalAddendumUncheckedCreateWithoutAutorInput>;
};
export type ClinicalAddendumUpdateWithWhereUniqueWithoutAutorInput = {
    where: Prisma.ClinicalAddendumWhereUniqueInput;
    data: Prisma.XOR<Prisma.ClinicalAddendumUpdateWithoutAutorInput, Prisma.ClinicalAddendumUncheckedUpdateWithoutAutorInput>;
};
export type ClinicalAddendumUpdateManyWithWhereWithoutAutorInput = {
    where: Prisma.ClinicalAddendumScalarWhereInput;
    data: Prisma.XOR<Prisma.ClinicalAddendumUpdateManyMutationInput, Prisma.ClinicalAddendumUncheckedUpdateManyWithoutAutorInput>;
};
export type ClinicalAddendumScalarWhereInput = {
    AND?: Prisma.ClinicalAddendumScalarWhereInput | Prisma.ClinicalAddendumScalarWhereInput[];
    OR?: Prisma.ClinicalAddendumScalarWhereInput[];
    NOT?: Prisma.ClinicalAddendumScalarWhereInput | Prisma.ClinicalAddendumScalarWhereInput[];
    id?: Prisma.StringFilter<"ClinicalAddendum"> | string;
    encounterId?: Prisma.StringFilter<"ClinicalAddendum"> | string;
    autorId?: Prisma.StringFilter<"ClinicalAddendum"> | string;
    motivoAclaracion?: Prisma.StringFilter<"ClinicalAddendum"> | string;
    contenido?: Prisma.StringFilter<"ClinicalAddendum"> | string;
    createdAt?: Prisma.DateTimeFilter<"ClinicalAddendum"> | Date | string;
};
export type ClinicalAddendumCreateWithoutEncounterInput = {
    id?: string;
    motivoAclaracion: string;
    contenido: string;
    createdAt?: Date | string;
    autor: Prisma.UserCreateNestedOneWithoutAddendumsInput;
};
export type ClinicalAddendumUncheckedCreateWithoutEncounterInput = {
    id?: string;
    autorId: string;
    motivoAclaracion: string;
    contenido: string;
    createdAt?: Date | string;
};
export type ClinicalAddendumCreateOrConnectWithoutEncounterInput = {
    where: Prisma.ClinicalAddendumWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClinicalAddendumCreateWithoutEncounterInput, Prisma.ClinicalAddendumUncheckedCreateWithoutEncounterInput>;
};
export type ClinicalAddendumCreateManyEncounterInputEnvelope = {
    data: Prisma.ClinicalAddendumCreateManyEncounterInput | Prisma.ClinicalAddendumCreateManyEncounterInput[];
    skipDuplicates?: boolean;
};
export type ClinicalAddendumUpsertWithWhereUniqueWithoutEncounterInput = {
    where: Prisma.ClinicalAddendumWhereUniqueInput;
    update: Prisma.XOR<Prisma.ClinicalAddendumUpdateWithoutEncounterInput, Prisma.ClinicalAddendumUncheckedUpdateWithoutEncounterInput>;
    create: Prisma.XOR<Prisma.ClinicalAddendumCreateWithoutEncounterInput, Prisma.ClinicalAddendumUncheckedCreateWithoutEncounterInput>;
};
export type ClinicalAddendumUpdateWithWhereUniqueWithoutEncounterInput = {
    where: Prisma.ClinicalAddendumWhereUniqueInput;
    data: Prisma.XOR<Prisma.ClinicalAddendumUpdateWithoutEncounterInput, Prisma.ClinicalAddendumUncheckedUpdateWithoutEncounterInput>;
};
export type ClinicalAddendumUpdateManyWithWhereWithoutEncounterInput = {
    where: Prisma.ClinicalAddendumScalarWhereInput;
    data: Prisma.XOR<Prisma.ClinicalAddendumUpdateManyMutationInput, Prisma.ClinicalAddendumUncheckedUpdateManyWithoutEncounterInput>;
};
export type ClinicalAddendumCreateManyAutorInput = {
    id?: string;
    encounterId: string;
    motivoAclaracion: string;
    contenido: string;
    createdAt?: Date | string;
};
export type ClinicalAddendumUpdateWithoutAutorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    motivoAclaracion?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    encounter?: Prisma.ClinicalEncounterUpdateOneRequiredWithoutAddendumsNestedInput;
};
export type ClinicalAddendumUncheckedUpdateWithoutAutorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    encounterId?: Prisma.StringFieldUpdateOperationsInput | string;
    motivoAclaracion?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClinicalAddendumUncheckedUpdateManyWithoutAutorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    encounterId?: Prisma.StringFieldUpdateOperationsInput | string;
    motivoAclaracion?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClinicalAddendumCreateManyEncounterInput = {
    id?: string;
    autorId: string;
    motivoAclaracion: string;
    contenido: string;
    createdAt?: Date | string;
};
export type ClinicalAddendumUpdateWithoutEncounterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    motivoAclaracion?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    autor?: Prisma.UserUpdateOneRequiredWithoutAddendumsNestedInput;
};
export type ClinicalAddendumUncheckedUpdateWithoutEncounterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    autorId?: Prisma.StringFieldUpdateOperationsInput | string;
    motivoAclaracion?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClinicalAddendumUncheckedUpdateManyWithoutEncounterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    autorId?: Prisma.StringFieldUpdateOperationsInput | string;
    motivoAclaracion?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClinicalAddendumSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    encounterId?: boolean;
    autorId?: boolean;
    motivoAclaracion?: boolean;
    contenido?: boolean;
    createdAt?: boolean;
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
    autor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["clinicalAddendum"]>;
export type ClinicalAddendumSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    encounterId?: boolean;
    autorId?: boolean;
    motivoAclaracion?: boolean;
    contenido?: boolean;
    createdAt?: boolean;
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
    autor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["clinicalAddendum"]>;
export type ClinicalAddendumSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    encounterId?: boolean;
    autorId?: boolean;
    motivoAclaracion?: boolean;
    contenido?: boolean;
    createdAt?: boolean;
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
    autor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["clinicalAddendum"]>;
export type ClinicalAddendumSelectScalar = {
    id?: boolean;
    encounterId?: boolean;
    autorId?: boolean;
    motivoAclaracion?: boolean;
    contenido?: boolean;
    createdAt?: boolean;
};
export type ClinicalAddendumOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "encounterId" | "autorId" | "motivoAclaracion" | "contenido" | "createdAt", ExtArgs["result"]["clinicalAddendum"]>;
export type ClinicalAddendumInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
    autor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ClinicalAddendumIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
    autor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ClinicalAddendumIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
    autor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ClinicalAddendumPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ClinicalAddendum";
    objects: {
        encounter: Prisma.$ClinicalEncounterPayload<ExtArgs>;
        autor: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        encounterId: string;
        autorId: string;
        motivoAclaracion: string;
        contenido: string;
        createdAt: Date;
    }, ExtArgs["result"]["clinicalAddendum"]>;
    composites: {};
};
export type ClinicalAddendumGetPayload<S extends boolean | null | undefined | ClinicalAddendumDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ClinicalAddendumPayload, S>;
export type ClinicalAddendumCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ClinicalAddendumFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClinicalAddendumCountAggregateInputType | true;
};
export interface ClinicalAddendumDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ClinicalAddendum'];
        meta: {
            name: 'ClinicalAddendum';
        };
    };
    findUnique<T extends ClinicalAddendumFindUniqueArgs>(args: Prisma.SelectSubset<T, ClinicalAddendumFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ClinicalAddendumClient<runtime.Types.Result.GetResult<Prisma.$ClinicalAddendumPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ClinicalAddendumFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ClinicalAddendumFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClinicalAddendumClient<runtime.Types.Result.GetResult<Prisma.$ClinicalAddendumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ClinicalAddendumFindFirstArgs>(args?: Prisma.SelectSubset<T, ClinicalAddendumFindFirstArgs<ExtArgs>>): Prisma.Prisma__ClinicalAddendumClient<runtime.Types.Result.GetResult<Prisma.$ClinicalAddendumPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ClinicalAddendumFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ClinicalAddendumFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClinicalAddendumClient<runtime.Types.Result.GetResult<Prisma.$ClinicalAddendumPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ClinicalAddendumFindManyArgs>(args?: Prisma.SelectSubset<T, ClinicalAddendumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClinicalAddendumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ClinicalAddendumCreateArgs>(args: Prisma.SelectSubset<T, ClinicalAddendumCreateArgs<ExtArgs>>): Prisma.Prisma__ClinicalAddendumClient<runtime.Types.Result.GetResult<Prisma.$ClinicalAddendumPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ClinicalAddendumCreateManyArgs>(args?: Prisma.SelectSubset<T, ClinicalAddendumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ClinicalAddendumCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ClinicalAddendumCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClinicalAddendumPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ClinicalAddendumDeleteArgs>(args: Prisma.SelectSubset<T, ClinicalAddendumDeleteArgs<ExtArgs>>): Prisma.Prisma__ClinicalAddendumClient<runtime.Types.Result.GetResult<Prisma.$ClinicalAddendumPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ClinicalAddendumUpdateArgs>(args: Prisma.SelectSubset<T, ClinicalAddendumUpdateArgs<ExtArgs>>): Prisma.Prisma__ClinicalAddendumClient<runtime.Types.Result.GetResult<Prisma.$ClinicalAddendumPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ClinicalAddendumDeleteManyArgs>(args?: Prisma.SelectSubset<T, ClinicalAddendumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ClinicalAddendumUpdateManyArgs>(args: Prisma.SelectSubset<T, ClinicalAddendumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ClinicalAddendumUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ClinicalAddendumUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClinicalAddendumPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ClinicalAddendumUpsertArgs>(args: Prisma.SelectSubset<T, ClinicalAddendumUpsertArgs<ExtArgs>>): Prisma.Prisma__ClinicalAddendumClient<runtime.Types.Result.GetResult<Prisma.$ClinicalAddendumPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ClinicalAddendumCountArgs>(args?: Prisma.Subset<T, ClinicalAddendumCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClinicalAddendumCountAggregateOutputType> : number>;
    aggregate<T extends ClinicalAddendumAggregateArgs>(args: Prisma.Subset<T, ClinicalAddendumAggregateArgs>): Prisma.PrismaPromise<GetClinicalAddendumAggregateType<T>>;
    groupBy<T extends ClinicalAddendumGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ClinicalAddendumGroupByArgs['orderBy'];
    } : {
        orderBy?: ClinicalAddendumGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ClinicalAddendumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClinicalAddendumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ClinicalAddendumFieldRefs;
}
export interface Prisma__ClinicalAddendumClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    encounter<T extends Prisma.ClinicalEncounterDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClinicalEncounterDefaultArgs<ExtArgs>>): Prisma.Prisma__ClinicalEncounterClient<runtime.Types.Result.GetResult<Prisma.$ClinicalEncounterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    autor<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ClinicalAddendumFieldRefs {
    readonly id: Prisma.FieldRef<"ClinicalAddendum", 'String'>;
    readonly encounterId: Prisma.FieldRef<"ClinicalAddendum", 'String'>;
    readonly autorId: Prisma.FieldRef<"ClinicalAddendum", 'String'>;
    readonly motivoAclaracion: Prisma.FieldRef<"ClinicalAddendum", 'String'>;
    readonly contenido: Prisma.FieldRef<"ClinicalAddendum", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ClinicalAddendum", 'DateTime'>;
}
export type ClinicalAddendumFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClinicalAddendumSelect<ExtArgs> | null;
    omit?: Prisma.ClinicalAddendumOmit<ExtArgs> | null;
    include?: Prisma.ClinicalAddendumInclude<ExtArgs> | null;
    where: Prisma.ClinicalAddendumWhereUniqueInput;
};
export type ClinicalAddendumFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClinicalAddendumSelect<ExtArgs> | null;
    omit?: Prisma.ClinicalAddendumOmit<ExtArgs> | null;
    include?: Prisma.ClinicalAddendumInclude<ExtArgs> | null;
    where: Prisma.ClinicalAddendumWhereUniqueInput;
};
export type ClinicalAddendumFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClinicalAddendumSelect<ExtArgs> | null;
    omit?: Prisma.ClinicalAddendumOmit<ExtArgs> | null;
    include?: Prisma.ClinicalAddendumInclude<ExtArgs> | null;
    where?: Prisma.ClinicalAddendumWhereInput;
    orderBy?: Prisma.ClinicalAddendumOrderByWithRelationInput | Prisma.ClinicalAddendumOrderByWithRelationInput[];
    cursor?: Prisma.ClinicalAddendumWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClinicalAddendumScalarFieldEnum | Prisma.ClinicalAddendumScalarFieldEnum[];
};
export type ClinicalAddendumFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClinicalAddendumSelect<ExtArgs> | null;
    omit?: Prisma.ClinicalAddendumOmit<ExtArgs> | null;
    include?: Prisma.ClinicalAddendumInclude<ExtArgs> | null;
    where?: Prisma.ClinicalAddendumWhereInput;
    orderBy?: Prisma.ClinicalAddendumOrderByWithRelationInput | Prisma.ClinicalAddendumOrderByWithRelationInput[];
    cursor?: Prisma.ClinicalAddendumWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClinicalAddendumScalarFieldEnum | Prisma.ClinicalAddendumScalarFieldEnum[];
};
export type ClinicalAddendumFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClinicalAddendumSelect<ExtArgs> | null;
    omit?: Prisma.ClinicalAddendumOmit<ExtArgs> | null;
    include?: Prisma.ClinicalAddendumInclude<ExtArgs> | null;
    where?: Prisma.ClinicalAddendumWhereInput;
    orderBy?: Prisma.ClinicalAddendumOrderByWithRelationInput | Prisma.ClinicalAddendumOrderByWithRelationInput[];
    cursor?: Prisma.ClinicalAddendumWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClinicalAddendumScalarFieldEnum | Prisma.ClinicalAddendumScalarFieldEnum[];
};
export type ClinicalAddendumCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClinicalAddendumSelect<ExtArgs> | null;
    omit?: Prisma.ClinicalAddendumOmit<ExtArgs> | null;
    include?: Prisma.ClinicalAddendumInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClinicalAddendumCreateInput, Prisma.ClinicalAddendumUncheckedCreateInput>;
};
export type ClinicalAddendumCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ClinicalAddendumCreateManyInput | Prisma.ClinicalAddendumCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ClinicalAddendumCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClinicalAddendumSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClinicalAddendumOmit<ExtArgs> | null;
    data: Prisma.ClinicalAddendumCreateManyInput | Prisma.ClinicalAddendumCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ClinicalAddendumIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ClinicalAddendumUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClinicalAddendumSelect<ExtArgs> | null;
    omit?: Prisma.ClinicalAddendumOmit<ExtArgs> | null;
    include?: Prisma.ClinicalAddendumInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClinicalAddendumUpdateInput, Prisma.ClinicalAddendumUncheckedUpdateInput>;
    where: Prisma.ClinicalAddendumWhereUniqueInput;
};
export type ClinicalAddendumUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ClinicalAddendumUpdateManyMutationInput, Prisma.ClinicalAddendumUncheckedUpdateManyInput>;
    where?: Prisma.ClinicalAddendumWhereInput;
    limit?: number;
};
export type ClinicalAddendumUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClinicalAddendumSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClinicalAddendumOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClinicalAddendumUpdateManyMutationInput, Prisma.ClinicalAddendumUncheckedUpdateManyInput>;
    where?: Prisma.ClinicalAddendumWhereInput;
    limit?: number;
    include?: Prisma.ClinicalAddendumIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ClinicalAddendumUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClinicalAddendumSelect<ExtArgs> | null;
    omit?: Prisma.ClinicalAddendumOmit<ExtArgs> | null;
    include?: Prisma.ClinicalAddendumInclude<ExtArgs> | null;
    where: Prisma.ClinicalAddendumWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClinicalAddendumCreateInput, Prisma.ClinicalAddendumUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ClinicalAddendumUpdateInput, Prisma.ClinicalAddendumUncheckedUpdateInput>;
};
export type ClinicalAddendumDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClinicalAddendumSelect<ExtArgs> | null;
    omit?: Prisma.ClinicalAddendumOmit<ExtArgs> | null;
    include?: Prisma.ClinicalAddendumInclude<ExtArgs> | null;
    where: Prisma.ClinicalAddendumWhereUniqueInput;
};
export type ClinicalAddendumDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClinicalAddendumWhereInput;
    limit?: number;
};
export type ClinicalAddendumDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClinicalAddendumSelect<ExtArgs> | null;
    omit?: Prisma.ClinicalAddendumOmit<ExtArgs> | null;
    include?: Prisma.ClinicalAddendumInclude<ExtArgs> | null;
};

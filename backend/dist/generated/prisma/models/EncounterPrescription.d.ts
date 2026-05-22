import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EncounterPrescriptionModel = runtime.Types.Result.DefaultSelection<Prisma.$EncounterPrescriptionPayload>;
export type AggregateEncounterPrescription = {
    _count: EncounterPrescriptionCountAggregateOutputType | null;
    _min: EncounterPrescriptionMinAggregateOutputType | null;
    _max: EncounterPrescriptionMaxAggregateOutputType | null;
};
export type EncounterPrescriptionMinAggregateOutputType = {
    id: string | null;
    encounterId: string | null;
    medicamento: string | null;
    presentacion: $Enums.Presentation | null;
    dosis: string | null;
    viaAdministracion: $Enums.AdministrationRoute | null;
    frecuencia: $Enums.MedicationFrequency | null;
    duracion: string | null;
    instruccionesEspeciales: string | null;
    createdAt: Date | null;
};
export type EncounterPrescriptionMaxAggregateOutputType = {
    id: string | null;
    encounterId: string | null;
    medicamento: string | null;
    presentacion: $Enums.Presentation | null;
    dosis: string | null;
    viaAdministracion: $Enums.AdministrationRoute | null;
    frecuencia: $Enums.MedicationFrequency | null;
    duracion: string | null;
    instruccionesEspeciales: string | null;
    createdAt: Date | null;
};
export type EncounterPrescriptionCountAggregateOutputType = {
    id: number;
    encounterId: number;
    medicamento: number;
    presentacion: number;
    dosis: number;
    viaAdministracion: number;
    frecuencia: number;
    duracion: number;
    instruccionesEspeciales: number;
    createdAt: number;
    _all: number;
};
export type EncounterPrescriptionMinAggregateInputType = {
    id?: true;
    encounterId?: true;
    medicamento?: true;
    presentacion?: true;
    dosis?: true;
    viaAdministracion?: true;
    frecuencia?: true;
    duracion?: true;
    instruccionesEspeciales?: true;
    createdAt?: true;
};
export type EncounterPrescriptionMaxAggregateInputType = {
    id?: true;
    encounterId?: true;
    medicamento?: true;
    presentacion?: true;
    dosis?: true;
    viaAdministracion?: true;
    frecuencia?: true;
    duracion?: true;
    instruccionesEspeciales?: true;
    createdAt?: true;
};
export type EncounterPrescriptionCountAggregateInputType = {
    id?: true;
    encounterId?: true;
    medicamento?: true;
    presentacion?: true;
    dosis?: true;
    viaAdministracion?: true;
    frecuencia?: true;
    duracion?: true;
    instruccionesEspeciales?: true;
    createdAt?: true;
    _all?: true;
};
export type EncounterPrescriptionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EncounterPrescriptionWhereInput;
    orderBy?: Prisma.EncounterPrescriptionOrderByWithRelationInput | Prisma.EncounterPrescriptionOrderByWithRelationInput[];
    cursor?: Prisma.EncounterPrescriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EncounterPrescriptionCountAggregateInputType;
    _min?: EncounterPrescriptionMinAggregateInputType;
    _max?: EncounterPrescriptionMaxAggregateInputType;
};
export type GetEncounterPrescriptionAggregateType<T extends EncounterPrescriptionAggregateArgs> = {
    [P in keyof T & keyof AggregateEncounterPrescription]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEncounterPrescription[P]> : Prisma.GetScalarType<T[P], AggregateEncounterPrescription[P]>;
};
export type EncounterPrescriptionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EncounterPrescriptionWhereInput;
    orderBy?: Prisma.EncounterPrescriptionOrderByWithAggregationInput | Prisma.EncounterPrescriptionOrderByWithAggregationInput[];
    by: Prisma.EncounterPrescriptionScalarFieldEnum[] | Prisma.EncounterPrescriptionScalarFieldEnum;
    having?: Prisma.EncounterPrescriptionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EncounterPrescriptionCountAggregateInputType | true;
    _min?: EncounterPrescriptionMinAggregateInputType;
    _max?: EncounterPrescriptionMaxAggregateInputType;
};
export type EncounterPrescriptionGroupByOutputType = {
    id: string;
    encounterId: string;
    medicamento: string;
    presentacion: $Enums.Presentation;
    dosis: string;
    viaAdministracion: $Enums.AdministrationRoute;
    frecuencia: $Enums.MedicationFrequency;
    duracion: string;
    instruccionesEspeciales: string | null;
    createdAt: Date;
    _count: EncounterPrescriptionCountAggregateOutputType | null;
    _min: EncounterPrescriptionMinAggregateOutputType | null;
    _max: EncounterPrescriptionMaxAggregateOutputType | null;
};
export type GetEncounterPrescriptionGroupByPayload<T extends EncounterPrescriptionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EncounterPrescriptionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EncounterPrescriptionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EncounterPrescriptionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EncounterPrescriptionGroupByOutputType[P]>;
}>>;
export type EncounterPrescriptionWhereInput = {
    AND?: Prisma.EncounterPrescriptionWhereInput | Prisma.EncounterPrescriptionWhereInput[];
    OR?: Prisma.EncounterPrescriptionWhereInput[];
    NOT?: Prisma.EncounterPrescriptionWhereInput | Prisma.EncounterPrescriptionWhereInput[];
    id?: Prisma.StringFilter<"EncounterPrescription"> | string;
    encounterId?: Prisma.StringFilter<"EncounterPrescription"> | string;
    medicamento?: Prisma.StringFilter<"EncounterPrescription"> | string;
    presentacion?: Prisma.EnumPresentationFilter<"EncounterPrescription"> | $Enums.Presentation;
    dosis?: Prisma.StringFilter<"EncounterPrescription"> | string;
    viaAdministracion?: Prisma.EnumAdministrationRouteFilter<"EncounterPrescription"> | $Enums.AdministrationRoute;
    frecuencia?: Prisma.EnumMedicationFrequencyFilter<"EncounterPrescription"> | $Enums.MedicationFrequency;
    duracion?: Prisma.StringFilter<"EncounterPrescription"> | string;
    instruccionesEspeciales?: Prisma.StringNullableFilter<"EncounterPrescription"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"EncounterPrescription"> | Date | string;
    encounter?: Prisma.XOR<Prisma.ClinicalEncounterScalarRelationFilter, Prisma.ClinicalEncounterWhereInput>;
};
export type EncounterPrescriptionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    encounterId?: Prisma.SortOrder;
    medicamento?: Prisma.SortOrder;
    presentacion?: Prisma.SortOrder;
    dosis?: Prisma.SortOrder;
    viaAdministracion?: Prisma.SortOrder;
    frecuencia?: Prisma.SortOrder;
    duracion?: Prisma.SortOrder;
    instruccionesEspeciales?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    encounter?: Prisma.ClinicalEncounterOrderByWithRelationInput;
};
export type EncounterPrescriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.EncounterPrescriptionWhereInput | Prisma.EncounterPrescriptionWhereInput[];
    OR?: Prisma.EncounterPrescriptionWhereInput[];
    NOT?: Prisma.EncounterPrescriptionWhereInput | Prisma.EncounterPrescriptionWhereInput[];
    encounterId?: Prisma.StringFilter<"EncounterPrescription"> | string;
    medicamento?: Prisma.StringFilter<"EncounterPrescription"> | string;
    presentacion?: Prisma.EnumPresentationFilter<"EncounterPrescription"> | $Enums.Presentation;
    dosis?: Prisma.StringFilter<"EncounterPrescription"> | string;
    viaAdministracion?: Prisma.EnumAdministrationRouteFilter<"EncounterPrescription"> | $Enums.AdministrationRoute;
    frecuencia?: Prisma.EnumMedicationFrequencyFilter<"EncounterPrescription"> | $Enums.MedicationFrequency;
    duracion?: Prisma.StringFilter<"EncounterPrescription"> | string;
    instruccionesEspeciales?: Prisma.StringNullableFilter<"EncounterPrescription"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"EncounterPrescription"> | Date | string;
    encounter?: Prisma.XOR<Prisma.ClinicalEncounterScalarRelationFilter, Prisma.ClinicalEncounterWhereInput>;
}, "id">;
export type EncounterPrescriptionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    encounterId?: Prisma.SortOrder;
    medicamento?: Prisma.SortOrder;
    presentacion?: Prisma.SortOrder;
    dosis?: Prisma.SortOrder;
    viaAdministracion?: Prisma.SortOrder;
    frecuencia?: Prisma.SortOrder;
    duracion?: Prisma.SortOrder;
    instruccionesEspeciales?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.EncounterPrescriptionCountOrderByAggregateInput;
    _max?: Prisma.EncounterPrescriptionMaxOrderByAggregateInput;
    _min?: Prisma.EncounterPrescriptionMinOrderByAggregateInput;
};
export type EncounterPrescriptionScalarWhereWithAggregatesInput = {
    AND?: Prisma.EncounterPrescriptionScalarWhereWithAggregatesInput | Prisma.EncounterPrescriptionScalarWhereWithAggregatesInput[];
    OR?: Prisma.EncounterPrescriptionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EncounterPrescriptionScalarWhereWithAggregatesInput | Prisma.EncounterPrescriptionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"EncounterPrescription"> | string;
    encounterId?: Prisma.StringWithAggregatesFilter<"EncounterPrescription"> | string;
    medicamento?: Prisma.StringWithAggregatesFilter<"EncounterPrescription"> | string;
    presentacion?: Prisma.EnumPresentationWithAggregatesFilter<"EncounterPrescription"> | $Enums.Presentation;
    dosis?: Prisma.StringWithAggregatesFilter<"EncounterPrescription"> | string;
    viaAdministracion?: Prisma.EnumAdministrationRouteWithAggregatesFilter<"EncounterPrescription"> | $Enums.AdministrationRoute;
    frecuencia?: Prisma.EnumMedicationFrequencyWithAggregatesFilter<"EncounterPrescription"> | $Enums.MedicationFrequency;
    duracion?: Prisma.StringWithAggregatesFilter<"EncounterPrescription"> | string;
    instruccionesEspeciales?: Prisma.StringNullableWithAggregatesFilter<"EncounterPrescription"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"EncounterPrescription"> | Date | string;
};
export type EncounterPrescriptionCreateInput = {
    id?: string;
    medicamento: string;
    presentacion: $Enums.Presentation;
    dosis: string;
    viaAdministracion: $Enums.AdministrationRoute;
    frecuencia: $Enums.MedicationFrequency;
    duracion: string;
    instruccionesEspeciales?: string | null;
    createdAt?: Date | string;
    encounter: Prisma.ClinicalEncounterCreateNestedOneWithoutPrescriptionsInput;
};
export type EncounterPrescriptionUncheckedCreateInput = {
    id?: string;
    encounterId: string;
    medicamento: string;
    presentacion: $Enums.Presentation;
    dosis: string;
    viaAdministracion: $Enums.AdministrationRoute;
    frecuencia: $Enums.MedicationFrequency;
    duracion: string;
    instruccionesEspeciales?: string | null;
    createdAt?: Date | string;
};
export type EncounterPrescriptionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    medicamento?: Prisma.StringFieldUpdateOperationsInput | string;
    presentacion?: Prisma.EnumPresentationFieldUpdateOperationsInput | $Enums.Presentation;
    dosis?: Prisma.StringFieldUpdateOperationsInput | string;
    viaAdministracion?: Prisma.EnumAdministrationRouteFieldUpdateOperationsInput | $Enums.AdministrationRoute;
    frecuencia?: Prisma.EnumMedicationFrequencyFieldUpdateOperationsInput | $Enums.MedicationFrequency;
    duracion?: Prisma.StringFieldUpdateOperationsInput | string;
    instruccionesEspeciales?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    encounter?: Prisma.ClinicalEncounterUpdateOneRequiredWithoutPrescriptionsNestedInput;
};
export type EncounterPrescriptionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    encounterId?: Prisma.StringFieldUpdateOperationsInput | string;
    medicamento?: Prisma.StringFieldUpdateOperationsInput | string;
    presentacion?: Prisma.EnumPresentationFieldUpdateOperationsInput | $Enums.Presentation;
    dosis?: Prisma.StringFieldUpdateOperationsInput | string;
    viaAdministracion?: Prisma.EnumAdministrationRouteFieldUpdateOperationsInput | $Enums.AdministrationRoute;
    frecuencia?: Prisma.EnumMedicationFrequencyFieldUpdateOperationsInput | $Enums.MedicationFrequency;
    duracion?: Prisma.StringFieldUpdateOperationsInput | string;
    instruccionesEspeciales?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EncounterPrescriptionCreateManyInput = {
    id?: string;
    encounterId: string;
    medicamento: string;
    presentacion: $Enums.Presentation;
    dosis: string;
    viaAdministracion: $Enums.AdministrationRoute;
    frecuencia: $Enums.MedicationFrequency;
    duracion: string;
    instruccionesEspeciales?: string | null;
    createdAt?: Date | string;
};
export type EncounterPrescriptionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    medicamento?: Prisma.StringFieldUpdateOperationsInput | string;
    presentacion?: Prisma.EnumPresentationFieldUpdateOperationsInput | $Enums.Presentation;
    dosis?: Prisma.StringFieldUpdateOperationsInput | string;
    viaAdministracion?: Prisma.EnumAdministrationRouteFieldUpdateOperationsInput | $Enums.AdministrationRoute;
    frecuencia?: Prisma.EnumMedicationFrequencyFieldUpdateOperationsInput | $Enums.MedicationFrequency;
    duracion?: Prisma.StringFieldUpdateOperationsInput | string;
    instruccionesEspeciales?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EncounterPrescriptionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    encounterId?: Prisma.StringFieldUpdateOperationsInput | string;
    medicamento?: Prisma.StringFieldUpdateOperationsInput | string;
    presentacion?: Prisma.EnumPresentationFieldUpdateOperationsInput | $Enums.Presentation;
    dosis?: Prisma.StringFieldUpdateOperationsInput | string;
    viaAdministracion?: Prisma.EnumAdministrationRouteFieldUpdateOperationsInput | $Enums.AdministrationRoute;
    frecuencia?: Prisma.EnumMedicationFrequencyFieldUpdateOperationsInput | $Enums.MedicationFrequency;
    duracion?: Prisma.StringFieldUpdateOperationsInput | string;
    instruccionesEspeciales?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EncounterPrescriptionListRelationFilter = {
    every?: Prisma.EncounterPrescriptionWhereInput;
    some?: Prisma.EncounterPrescriptionWhereInput;
    none?: Prisma.EncounterPrescriptionWhereInput;
};
export type EncounterPrescriptionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EncounterPrescriptionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    encounterId?: Prisma.SortOrder;
    medicamento?: Prisma.SortOrder;
    presentacion?: Prisma.SortOrder;
    dosis?: Prisma.SortOrder;
    viaAdministracion?: Prisma.SortOrder;
    frecuencia?: Prisma.SortOrder;
    duracion?: Prisma.SortOrder;
    instruccionesEspeciales?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EncounterPrescriptionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    encounterId?: Prisma.SortOrder;
    medicamento?: Prisma.SortOrder;
    presentacion?: Prisma.SortOrder;
    dosis?: Prisma.SortOrder;
    viaAdministracion?: Prisma.SortOrder;
    frecuencia?: Prisma.SortOrder;
    duracion?: Prisma.SortOrder;
    instruccionesEspeciales?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EncounterPrescriptionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    encounterId?: Prisma.SortOrder;
    medicamento?: Prisma.SortOrder;
    presentacion?: Prisma.SortOrder;
    dosis?: Prisma.SortOrder;
    viaAdministracion?: Prisma.SortOrder;
    frecuencia?: Prisma.SortOrder;
    duracion?: Prisma.SortOrder;
    instruccionesEspeciales?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EncounterPrescriptionCreateNestedManyWithoutEncounterInput = {
    create?: Prisma.XOR<Prisma.EncounterPrescriptionCreateWithoutEncounterInput, Prisma.EncounterPrescriptionUncheckedCreateWithoutEncounterInput> | Prisma.EncounterPrescriptionCreateWithoutEncounterInput[] | Prisma.EncounterPrescriptionUncheckedCreateWithoutEncounterInput[];
    connectOrCreate?: Prisma.EncounterPrescriptionCreateOrConnectWithoutEncounterInput | Prisma.EncounterPrescriptionCreateOrConnectWithoutEncounterInput[];
    createMany?: Prisma.EncounterPrescriptionCreateManyEncounterInputEnvelope;
    connect?: Prisma.EncounterPrescriptionWhereUniqueInput | Prisma.EncounterPrescriptionWhereUniqueInput[];
};
export type EncounterPrescriptionUncheckedCreateNestedManyWithoutEncounterInput = {
    create?: Prisma.XOR<Prisma.EncounterPrescriptionCreateWithoutEncounterInput, Prisma.EncounterPrescriptionUncheckedCreateWithoutEncounterInput> | Prisma.EncounterPrescriptionCreateWithoutEncounterInput[] | Prisma.EncounterPrescriptionUncheckedCreateWithoutEncounterInput[];
    connectOrCreate?: Prisma.EncounterPrescriptionCreateOrConnectWithoutEncounterInput | Prisma.EncounterPrescriptionCreateOrConnectWithoutEncounterInput[];
    createMany?: Prisma.EncounterPrescriptionCreateManyEncounterInputEnvelope;
    connect?: Prisma.EncounterPrescriptionWhereUniqueInput | Prisma.EncounterPrescriptionWhereUniqueInput[];
};
export type EncounterPrescriptionUpdateManyWithoutEncounterNestedInput = {
    create?: Prisma.XOR<Prisma.EncounterPrescriptionCreateWithoutEncounterInput, Prisma.EncounterPrescriptionUncheckedCreateWithoutEncounterInput> | Prisma.EncounterPrescriptionCreateWithoutEncounterInput[] | Prisma.EncounterPrescriptionUncheckedCreateWithoutEncounterInput[];
    connectOrCreate?: Prisma.EncounterPrescriptionCreateOrConnectWithoutEncounterInput | Prisma.EncounterPrescriptionCreateOrConnectWithoutEncounterInput[];
    upsert?: Prisma.EncounterPrescriptionUpsertWithWhereUniqueWithoutEncounterInput | Prisma.EncounterPrescriptionUpsertWithWhereUniqueWithoutEncounterInput[];
    createMany?: Prisma.EncounterPrescriptionCreateManyEncounterInputEnvelope;
    set?: Prisma.EncounterPrescriptionWhereUniqueInput | Prisma.EncounterPrescriptionWhereUniqueInput[];
    disconnect?: Prisma.EncounterPrescriptionWhereUniqueInput | Prisma.EncounterPrescriptionWhereUniqueInput[];
    delete?: Prisma.EncounterPrescriptionWhereUniqueInput | Prisma.EncounterPrescriptionWhereUniqueInput[];
    connect?: Prisma.EncounterPrescriptionWhereUniqueInput | Prisma.EncounterPrescriptionWhereUniqueInput[];
    update?: Prisma.EncounterPrescriptionUpdateWithWhereUniqueWithoutEncounterInput | Prisma.EncounterPrescriptionUpdateWithWhereUniqueWithoutEncounterInput[];
    updateMany?: Prisma.EncounterPrescriptionUpdateManyWithWhereWithoutEncounterInput | Prisma.EncounterPrescriptionUpdateManyWithWhereWithoutEncounterInput[];
    deleteMany?: Prisma.EncounterPrescriptionScalarWhereInput | Prisma.EncounterPrescriptionScalarWhereInput[];
};
export type EncounterPrescriptionUncheckedUpdateManyWithoutEncounterNestedInput = {
    create?: Prisma.XOR<Prisma.EncounterPrescriptionCreateWithoutEncounterInput, Prisma.EncounterPrescriptionUncheckedCreateWithoutEncounterInput> | Prisma.EncounterPrescriptionCreateWithoutEncounterInput[] | Prisma.EncounterPrescriptionUncheckedCreateWithoutEncounterInput[];
    connectOrCreate?: Prisma.EncounterPrescriptionCreateOrConnectWithoutEncounterInput | Prisma.EncounterPrescriptionCreateOrConnectWithoutEncounterInput[];
    upsert?: Prisma.EncounterPrescriptionUpsertWithWhereUniqueWithoutEncounterInput | Prisma.EncounterPrescriptionUpsertWithWhereUniqueWithoutEncounterInput[];
    createMany?: Prisma.EncounterPrescriptionCreateManyEncounterInputEnvelope;
    set?: Prisma.EncounterPrescriptionWhereUniqueInput | Prisma.EncounterPrescriptionWhereUniqueInput[];
    disconnect?: Prisma.EncounterPrescriptionWhereUniqueInput | Prisma.EncounterPrescriptionWhereUniqueInput[];
    delete?: Prisma.EncounterPrescriptionWhereUniqueInput | Prisma.EncounterPrescriptionWhereUniqueInput[];
    connect?: Prisma.EncounterPrescriptionWhereUniqueInput | Prisma.EncounterPrescriptionWhereUniqueInput[];
    update?: Prisma.EncounterPrescriptionUpdateWithWhereUniqueWithoutEncounterInput | Prisma.EncounterPrescriptionUpdateWithWhereUniqueWithoutEncounterInput[];
    updateMany?: Prisma.EncounterPrescriptionUpdateManyWithWhereWithoutEncounterInput | Prisma.EncounterPrescriptionUpdateManyWithWhereWithoutEncounterInput[];
    deleteMany?: Prisma.EncounterPrescriptionScalarWhereInput | Prisma.EncounterPrescriptionScalarWhereInput[];
};
export type EnumPresentationFieldUpdateOperationsInput = {
    set?: $Enums.Presentation;
};
export type EnumAdministrationRouteFieldUpdateOperationsInput = {
    set?: $Enums.AdministrationRoute;
};
export type EnumMedicationFrequencyFieldUpdateOperationsInput = {
    set?: $Enums.MedicationFrequency;
};
export type EncounterPrescriptionCreateWithoutEncounterInput = {
    id?: string;
    medicamento: string;
    presentacion: $Enums.Presentation;
    dosis: string;
    viaAdministracion: $Enums.AdministrationRoute;
    frecuencia: $Enums.MedicationFrequency;
    duracion: string;
    instruccionesEspeciales?: string | null;
    createdAt?: Date | string;
};
export type EncounterPrescriptionUncheckedCreateWithoutEncounterInput = {
    id?: string;
    medicamento: string;
    presentacion: $Enums.Presentation;
    dosis: string;
    viaAdministracion: $Enums.AdministrationRoute;
    frecuencia: $Enums.MedicationFrequency;
    duracion: string;
    instruccionesEspeciales?: string | null;
    createdAt?: Date | string;
};
export type EncounterPrescriptionCreateOrConnectWithoutEncounterInput = {
    where: Prisma.EncounterPrescriptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.EncounterPrescriptionCreateWithoutEncounterInput, Prisma.EncounterPrescriptionUncheckedCreateWithoutEncounterInput>;
};
export type EncounterPrescriptionCreateManyEncounterInputEnvelope = {
    data: Prisma.EncounterPrescriptionCreateManyEncounterInput | Prisma.EncounterPrescriptionCreateManyEncounterInput[];
    skipDuplicates?: boolean;
};
export type EncounterPrescriptionUpsertWithWhereUniqueWithoutEncounterInput = {
    where: Prisma.EncounterPrescriptionWhereUniqueInput;
    update: Prisma.XOR<Prisma.EncounterPrescriptionUpdateWithoutEncounterInput, Prisma.EncounterPrescriptionUncheckedUpdateWithoutEncounterInput>;
    create: Prisma.XOR<Prisma.EncounterPrescriptionCreateWithoutEncounterInput, Prisma.EncounterPrescriptionUncheckedCreateWithoutEncounterInput>;
};
export type EncounterPrescriptionUpdateWithWhereUniqueWithoutEncounterInput = {
    where: Prisma.EncounterPrescriptionWhereUniqueInput;
    data: Prisma.XOR<Prisma.EncounterPrescriptionUpdateWithoutEncounterInput, Prisma.EncounterPrescriptionUncheckedUpdateWithoutEncounterInput>;
};
export type EncounterPrescriptionUpdateManyWithWhereWithoutEncounterInput = {
    where: Prisma.EncounterPrescriptionScalarWhereInput;
    data: Prisma.XOR<Prisma.EncounterPrescriptionUpdateManyMutationInput, Prisma.EncounterPrescriptionUncheckedUpdateManyWithoutEncounterInput>;
};
export type EncounterPrescriptionScalarWhereInput = {
    AND?: Prisma.EncounterPrescriptionScalarWhereInput | Prisma.EncounterPrescriptionScalarWhereInput[];
    OR?: Prisma.EncounterPrescriptionScalarWhereInput[];
    NOT?: Prisma.EncounterPrescriptionScalarWhereInput | Prisma.EncounterPrescriptionScalarWhereInput[];
    id?: Prisma.StringFilter<"EncounterPrescription"> | string;
    encounterId?: Prisma.StringFilter<"EncounterPrescription"> | string;
    medicamento?: Prisma.StringFilter<"EncounterPrescription"> | string;
    presentacion?: Prisma.EnumPresentationFilter<"EncounterPrescription"> | $Enums.Presentation;
    dosis?: Prisma.StringFilter<"EncounterPrescription"> | string;
    viaAdministracion?: Prisma.EnumAdministrationRouteFilter<"EncounterPrescription"> | $Enums.AdministrationRoute;
    frecuencia?: Prisma.EnumMedicationFrequencyFilter<"EncounterPrescription"> | $Enums.MedicationFrequency;
    duracion?: Prisma.StringFilter<"EncounterPrescription"> | string;
    instruccionesEspeciales?: Prisma.StringNullableFilter<"EncounterPrescription"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"EncounterPrescription"> | Date | string;
};
export type EncounterPrescriptionCreateManyEncounterInput = {
    id?: string;
    medicamento: string;
    presentacion: $Enums.Presentation;
    dosis: string;
    viaAdministracion: $Enums.AdministrationRoute;
    frecuencia: $Enums.MedicationFrequency;
    duracion: string;
    instruccionesEspeciales?: string | null;
    createdAt?: Date | string;
};
export type EncounterPrescriptionUpdateWithoutEncounterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    medicamento?: Prisma.StringFieldUpdateOperationsInput | string;
    presentacion?: Prisma.EnumPresentationFieldUpdateOperationsInput | $Enums.Presentation;
    dosis?: Prisma.StringFieldUpdateOperationsInput | string;
    viaAdministracion?: Prisma.EnumAdministrationRouteFieldUpdateOperationsInput | $Enums.AdministrationRoute;
    frecuencia?: Prisma.EnumMedicationFrequencyFieldUpdateOperationsInput | $Enums.MedicationFrequency;
    duracion?: Prisma.StringFieldUpdateOperationsInput | string;
    instruccionesEspeciales?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EncounterPrescriptionUncheckedUpdateWithoutEncounterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    medicamento?: Prisma.StringFieldUpdateOperationsInput | string;
    presentacion?: Prisma.EnumPresentationFieldUpdateOperationsInput | $Enums.Presentation;
    dosis?: Prisma.StringFieldUpdateOperationsInput | string;
    viaAdministracion?: Prisma.EnumAdministrationRouteFieldUpdateOperationsInput | $Enums.AdministrationRoute;
    frecuencia?: Prisma.EnumMedicationFrequencyFieldUpdateOperationsInput | $Enums.MedicationFrequency;
    duracion?: Prisma.StringFieldUpdateOperationsInput | string;
    instruccionesEspeciales?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EncounterPrescriptionUncheckedUpdateManyWithoutEncounterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    medicamento?: Prisma.StringFieldUpdateOperationsInput | string;
    presentacion?: Prisma.EnumPresentationFieldUpdateOperationsInput | $Enums.Presentation;
    dosis?: Prisma.StringFieldUpdateOperationsInput | string;
    viaAdministracion?: Prisma.EnumAdministrationRouteFieldUpdateOperationsInput | $Enums.AdministrationRoute;
    frecuencia?: Prisma.EnumMedicationFrequencyFieldUpdateOperationsInput | $Enums.MedicationFrequency;
    duracion?: Prisma.StringFieldUpdateOperationsInput | string;
    instruccionesEspeciales?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EncounterPrescriptionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    encounterId?: boolean;
    medicamento?: boolean;
    presentacion?: boolean;
    dosis?: boolean;
    viaAdministracion?: boolean;
    frecuencia?: boolean;
    duracion?: boolean;
    instruccionesEspeciales?: boolean;
    createdAt?: boolean;
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["encounterPrescription"]>;
export type EncounterPrescriptionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    encounterId?: boolean;
    medicamento?: boolean;
    presentacion?: boolean;
    dosis?: boolean;
    viaAdministracion?: boolean;
    frecuencia?: boolean;
    duracion?: boolean;
    instruccionesEspeciales?: boolean;
    createdAt?: boolean;
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["encounterPrescription"]>;
export type EncounterPrescriptionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    encounterId?: boolean;
    medicamento?: boolean;
    presentacion?: boolean;
    dosis?: boolean;
    viaAdministracion?: boolean;
    frecuencia?: boolean;
    duracion?: boolean;
    instruccionesEspeciales?: boolean;
    createdAt?: boolean;
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["encounterPrescription"]>;
export type EncounterPrescriptionSelectScalar = {
    id?: boolean;
    encounterId?: boolean;
    medicamento?: boolean;
    presentacion?: boolean;
    dosis?: boolean;
    viaAdministracion?: boolean;
    frecuencia?: boolean;
    duracion?: boolean;
    instruccionesEspeciales?: boolean;
    createdAt?: boolean;
};
export type EncounterPrescriptionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "encounterId" | "medicamento" | "presentacion" | "dosis" | "viaAdministracion" | "frecuencia" | "duracion" | "instruccionesEspeciales" | "createdAt", ExtArgs["result"]["encounterPrescription"]>;
export type EncounterPrescriptionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
};
export type EncounterPrescriptionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
};
export type EncounterPrescriptionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    encounter?: boolean | Prisma.ClinicalEncounterDefaultArgs<ExtArgs>;
};
export type $EncounterPrescriptionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EncounterPrescription";
    objects: {
        encounter: Prisma.$ClinicalEncounterPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        encounterId: string;
        medicamento: string;
        presentacion: $Enums.Presentation;
        dosis: string;
        viaAdministracion: $Enums.AdministrationRoute;
        frecuencia: $Enums.MedicationFrequency;
        duracion: string;
        instruccionesEspeciales: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["encounterPrescription"]>;
    composites: {};
};
export type EncounterPrescriptionGetPayload<S extends boolean | null | undefined | EncounterPrescriptionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EncounterPrescriptionPayload, S>;
export type EncounterPrescriptionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EncounterPrescriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EncounterPrescriptionCountAggregateInputType | true;
};
export interface EncounterPrescriptionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EncounterPrescription'];
        meta: {
            name: 'EncounterPrescription';
        };
    };
    findUnique<T extends EncounterPrescriptionFindUniqueArgs>(args: Prisma.SelectSubset<T, EncounterPrescriptionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EncounterPrescriptionClient<runtime.Types.Result.GetResult<Prisma.$EncounterPrescriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EncounterPrescriptionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EncounterPrescriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EncounterPrescriptionClient<runtime.Types.Result.GetResult<Prisma.$EncounterPrescriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EncounterPrescriptionFindFirstArgs>(args?: Prisma.SelectSubset<T, EncounterPrescriptionFindFirstArgs<ExtArgs>>): Prisma.Prisma__EncounterPrescriptionClient<runtime.Types.Result.GetResult<Prisma.$EncounterPrescriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EncounterPrescriptionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EncounterPrescriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EncounterPrescriptionClient<runtime.Types.Result.GetResult<Prisma.$EncounterPrescriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EncounterPrescriptionFindManyArgs>(args?: Prisma.SelectSubset<T, EncounterPrescriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EncounterPrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EncounterPrescriptionCreateArgs>(args: Prisma.SelectSubset<T, EncounterPrescriptionCreateArgs<ExtArgs>>): Prisma.Prisma__EncounterPrescriptionClient<runtime.Types.Result.GetResult<Prisma.$EncounterPrescriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EncounterPrescriptionCreateManyArgs>(args?: Prisma.SelectSubset<T, EncounterPrescriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EncounterPrescriptionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EncounterPrescriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EncounterPrescriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EncounterPrescriptionDeleteArgs>(args: Prisma.SelectSubset<T, EncounterPrescriptionDeleteArgs<ExtArgs>>): Prisma.Prisma__EncounterPrescriptionClient<runtime.Types.Result.GetResult<Prisma.$EncounterPrescriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EncounterPrescriptionUpdateArgs>(args: Prisma.SelectSubset<T, EncounterPrescriptionUpdateArgs<ExtArgs>>): Prisma.Prisma__EncounterPrescriptionClient<runtime.Types.Result.GetResult<Prisma.$EncounterPrescriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EncounterPrescriptionDeleteManyArgs>(args?: Prisma.SelectSubset<T, EncounterPrescriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EncounterPrescriptionUpdateManyArgs>(args: Prisma.SelectSubset<T, EncounterPrescriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EncounterPrescriptionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EncounterPrescriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EncounterPrescriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EncounterPrescriptionUpsertArgs>(args: Prisma.SelectSubset<T, EncounterPrescriptionUpsertArgs<ExtArgs>>): Prisma.Prisma__EncounterPrescriptionClient<runtime.Types.Result.GetResult<Prisma.$EncounterPrescriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EncounterPrescriptionCountArgs>(args?: Prisma.Subset<T, EncounterPrescriptionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EncounterPrescriptionCountAggregateOutputType> : number>;
    aggregate<T extends EncounterPrescriptionAggregateArgs>(args: Prisma.Subset<T, EncounterPrescriptionAggregateArgs>): Prisma.PrismaPromise<GetEncounterPrescriptionAggregateType<T>>;
    groupBy<T extends EncounterPrescriptionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EncounterPrescriptionGroupByArgs['orderBy'];
    } : {
        orderBy?: EncounterPrescriptionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EncounterPrescriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEncounterPrescriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EncounterPrescriptionFieldRefs;
}
export interface Prisma__EncounterPrescriptionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    encounter<T extends Prisma.ClinicalEncounterDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClinicalEncounterDefaultArgs<ExtArgs>>): Prisma.Prisma__ClinicalEncounterClient<runtime.Types.Result.GetResult<Prisma.$ClinicalEncounterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EncounterPrescriptionFieldRefs {
    readonly id: Prisma.FieldRef<"EncounterPrescription", 'String'>;
    readonly encounterId: Prisma.FieldRef<"EncounterPrescription", 'String'>;
    readonly medicamento: Prisma.FieldRef<"EncounterPrescription", 'String'>;
    readonly presentacion: Prisma.FieldRef<"EncounterPrescription", 'Presentation'>;
    readonly dosis: Prisma.FieldRef<"EncounterPrescription", 'String'>;
    readonly viaAdministracion: Prisma.FieldRef<"EncounterPrescription", 'AdministrationRoute'>;
    readonly frecuencia: Prisma.FieldRef<"EncounterPrescription", 'MedicationFrequency'>;
    readonly duracion: Prisma.FieldRef<"EncounterPrescription", 'String'>;
    readonly instruccionesEspeciales: Prisma.FieldRef<"EncounterPrescription", 'String'>;
    readonly createdAt: Prisma.FieldRef<"EncounterPrescription", 'DateTime'>;
}
export type EncounterPrescriptionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterPrescriptionSelect<ExtArgs> | null;
    omit?: Prisma.EncounterPrescriptionOmit<ExtArgs> | null;
    include?: Prisma.EncounterPrescriptionInclude<ExtArgs> | null;
    where: Prisma.EncounterPrescriptionWhereUniqueInput;
};
export type EncounterPrescriptionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterPrescriptionSelect<ExtArgs> | null;
    omit?: Prisma.EncounterPrescriptionOmit<ExtArgs> | null;
    include?: Prisma.EncounterPrescriptionInclude<ExtArgs> | null;
    where: Prisma.EncounterPrescriptionWhereUniqueInput;
};
export type EncounterPrescriptionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterPrescriptionSelect<ExtArgs> | null;
    omit?: Prisma.EncounterPrescriptionOmit<ExtArgs> | null;
    include?: Prisma.EncounterPrescriptionInclude<ExtArgs> | null;
    where?: Prisma.EncounterPrescriptionWhereInput;
    orderBy?: Prisma.EncounterPrescriptionOrderByWithRelationInput | Prisma.EncounterPrescriptionOrderByWithRelationInput[];
    cursor?: Prisma.EncounterPrescriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EncounterPrescriptionScalarFieldEnum | Prisma.EncounterPrescriptionScalarFieldEnum[];
};
export type EncounterPrescriptionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterPrescriptionSelect<ExtArgs> | null;
    omit?: Prisma.EncounterPrescriptionOmit<ExtArgs> | null;
    include?: Prisma.EncounterPrescriptionInclude<ExtArgs> | null;
    where?: Prisma.EncounterPrescriptionWhereInput;
    orderBy?: Prisma.EncounterPrescriptionOrderByWithRelationInput | Prisma.EncounterPrescriptionOrderByWithRelationInput[];
    cursor?: Prisma.EncounterPrescriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EncounterPrescriptionScalarFieldEnum | Prisma.EncounterPrescriptionScalarFieldEnum[];
};
export type EncounterPrescriptionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterPrescriptionSelect<ExtArgs> | null;
    omit?: Prisma.EncounterPrescriptionOmit<ExtArgs> | null;
    include?: Prisma.EncounterPrescriptionInclude<ExtArgs> | null;
    where?: Prisma.EncounterPrescriptionWhereInput;
    orderBy?: Prisma.EncounterPrescriptionOrderByWithRelationInput | Prisma.EncounterPrescriptionOrderByWithRelationInput[];
    cursor?: Prisma.EncounterPrescriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EncounterPrescriptionScalarFieldEnum | Prisma.EncounterPrescriptionScalarFieldEnum[];
};
export type EncounterPrescriptionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterPrescriptionSelect<ExtArgs> | null;
    omit?: Prisma.EncounterPrescriptionOmit<ExtArgs> | null;
    include?: Prisma.EncounterPrescriptionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EncounterPrescriptionCreateInput, Prisma.EncounterPrescriptionUncheckedCreateInput>;
};
export type EncounterPrescriptionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EncounterPrescriptionCreateManyInput | Prisma.EncounterPrescriptionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EncounterPrescriptionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterPrescriptionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EncounterPrescriptionOmit<ExtArgs> | null;
    data: Prisma.EncounterPrescriptionCreateManyInput | Prisma.EncounterPrescriptionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EncounterPrescriptionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EncounterPrescriptionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterPrescriptionSelect<ExtArgs> | null;
    omit?: Prisma.EncounterPrescriptionOmit<ExtArgs> | null;
    include?: Prisma.EncounterPrescriptionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EncounterPrescriptionUpdateInput, Prisma.EncounterPrescriptionUncheckedUpdateInput>;
    where: Prisma.EncounterPrescriptionWhereUniqueInput;
};
export type EncounterPrescriptionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EncounterPrescriptionUpdateManyMutationInput, Prisma.EncounterPrescriptionUncheckedUpdateManyInput>;
    where?: Prisma.EncounterPrescriptionWhereInput;
    limit?: number;
};
export type EncounterPrescriptionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterPrescriptionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EncounterPrescriptionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EncounterPrescriptionUpdateManyMutationInput, Prisma.EncounterPrescriptionUncheckedUpdateManyInput>;
    where?: Prisma.EncounterPrescriptionWhereInput;
    limit?: number;
    include?: Prisma.EncounterPrescriptionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EncounterPrescriptionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterPrescriptionSelect<ExtArgs> | null;
    omit?: Prisma.EncounterPrescriptionOmit<ExtArgs> | null;
    include?: Prisma.EncounterPrescriptionInclude<ExtArgs> | null;
    where: Prisma.EncounterPrescriptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.EncounterPrescriptionCreateInput, Prisma.EncounterPrescriptionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EncounterPrescriptionUpdateInput, Prisma.EncounterPrescriptionUncheckedUpdateInput>;
};
export type EncounterPrescriptionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterPrescriptionSelect<ExtArgs> | null;
    omit?: Prisma.EncounterPrescriptionOmit<ExtArgs> | null;
    include?: Prisma.EncounterPrescriptionInclude<ExtArgs> | null;
    where: Prisma.EncounterPrescriptionWhereUniqueInput;
};
export type EncounterPrescriptionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EncounterPrescriptionWhereInput;
    limit?: number;
};
export type EncounterPrescriptionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EncounterPrescriptionSelect<ExtArgs> | null;
    omit?: Prisma.EncounterPrescriptionOmit<ExtArgs> | null;
    include?: Prisma.EncounterPrescriptionInclude<ExtArgs> | null;
};

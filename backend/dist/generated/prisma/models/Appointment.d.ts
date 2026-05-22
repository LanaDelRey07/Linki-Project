import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AppointmentModel = runtime.Types.Result.DefaultSelection<Prisma.$AppointmentPayload>;
export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null;
    _min: AppointmentMinAggregateOutputType | null;
    _max: AppointmentMaxAggregateOutputType | null;
};
export type AppointmentMinAggregateOutputType = {
    id: string | null;
    patientProfileId: string | null;
    doctorProfileId: string | null;
    fechaHora: Date | null;
    estado: $Enums.AppointmentStatus | null;
    motivoConsulta: string | null;
    tiempoMolestia: $Enums.SymptomDuration | null;
    notasAdicionales: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AppointmentMaxAggregateOutputType = {
    id: string | null;
    patientProfileId: string | null;
    doctorProfileId: string | null;
    fechaHora: Date | null;
    estado: $Enums.AppointmentStatus | null;
    motivoConsulta: string | null;
    tiempoMolestia: $Enums.SymptomDuration | null;
    notasAdicionales: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AppointmentCountAggregateOutputType = {
    id: number;
    patientProfileId: number;
    doctorProfileId: number;
    fechaHora: number;
    estado: number;
    motivoConsulta: number;
    tiempoMolestia: number;
    notasAdicionales: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AppointmentMinAggregateInputType = {
    id?: true;
    patientProfileId?: true;
    doctorProfileId?: true;
    fechaHora?: true;
    estado?: true;
    motivoConsulta?: true;
    tiempoMolestia?: true;
    notasAdicionales?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AppointmentMaxAggregateInputType = {
    id?: true;
    patientProfileId?: true;
    doctorProfileId?: true;
    fechaHora?: true;
    estado?: true;
    motivoConsulta?: true;
    tiempoMolestia?: true;
    notasAdicionales?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AppointmentCountAggregateInputType = {
    id?: true;
    patientProfileId?: true;
    doctorProfileId?: true;
    fechaHora?: true;
    estado?: true;
    motivoConsulta?: true;
    tiempoMolestia?: true;
    notasAdicionales?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AppointmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AppointmentWhereInput;
    orderBy?: Prisma.AppointmentOrderByWithRelationInput | Prisma.AppointmentOrderByWithRelationInput[];
    cursor?: Prisma.AppointmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AppointmentCountAggregateInputType;
    _min?: AppointmentMinAggregateInputType;
    _max?: AppointmentMaxAggregateInputType;
};
export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
    [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAppointment[P]> : Prisma.GetScalarType<T[P], AggregateAppointment[P]>;
};
export type AppointmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AppointmentWhereInput;
    orderBy?: Prisma.AppointmentOrderByWithAggregationInput | Prisma.AppointmentOrderByWithAggregationInput[];
    by: Prisma.AppointmentScalarFieldEnum[] | Prisma.AppointmentScalarFieldEnum;
    having?: Prisma.AppointmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AppointmentCountAggregateInputType | true;
    _min?: AppointmentMinAggregateInputType;
    _max?: AppointmentMaxAggregateInputType;
};
export type AppointmentGroupByOutputType = {
    id: string;
    patientProfileId: string;
    doctorProfileId: string;
    fechaHora: Date;
    estado: $Enums.AppointmentStatus;
    motivoConsulta: string;
    tiempoMolestia: $Enums.SymptomDuration | null;
    notasAdicionales: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: AppointmentCountAggregateOutputType | null;
    _min: AppointmentMinAggregateOutputType | null;
    _max: AppointmentMaxAggregateOutputType | null;
};
export type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AppointmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AppointmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AppointmentGroupByOutputType[P]>;
}>>;
export type AppointmentWhereInput = {
    AND?: Prisma.AppointmentWhereInput | Prisma.AppointmentWhereInput[];
    OR?: Prisma.AppointmentWhereInput[];
    NOT?: Prisma.AppointmentWhereInput | Prisma.AppointmentWhereInput[];
    id?: Prisma.StringFilter<"Appointment"> | string;
    patientProfileId?: Prisma.StringFilter<"Appointment"> | string;
    doctorProfileId?: Prisma.StringFilter<"Appointment"> | string;
    fechaHora?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    estado?: Prisma.EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus;
    motivoConsulta?: Prisma.StringFilter<"Appointment"> | string;
    tiempoMolestia?: Prisma.EnumSymptomDurationNullableFilter<"Appointment"> | $Enums.SymptomDuration | null;
    notasAdicionales?: Prisma.StringNullableFilter<"Appointment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    patientProfile?: Prisma.XOR<Prisma.PatientProfileScalarRelationFilter, Prisma.PatientProfileWhereInput>;
    doctorProfile?: Prisma.XOR<Prisma.DoctorProfileScalarRelationFilter, Prisma.DoctorProfileWhereInput>;
    encounter?: Prisma.XOR<Prisma.ClinicalEncounterNullableScalarRelationFilter, Prisma.ClinicalEncounterWhereInput> | null;
};
export type AppointmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    patientProfileId?: Prisma.SortOrder;
    doctorProfileId?: Prisma.SortOrder;
    fechaHora?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    motivoConsulta?: Prisma.SortOrder;
    tiempoMolestia?: Prisma.SortOrderInput | Prisma.SortOrder;
    notasAdicionales?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    patientProfile?: Prisma.PatientProfileOrderByWithRelationInput;
    doctorProfile?: Prisma.DoctorProfileOrderByWithRelationInput;
    encounter?: Prisma.ClinicalEncounterOrderByWithRelationInput;
};
export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AppointmentWhereInput | Prisma.AppointmentWhereInput[];
    OR?: Prisma.AppointmentWhereInput[];
    NOT?: Prisma.AppointmentWhereInput | Prisma.AppointmentWhereInput[];
    patientProfileId?: Prisma.StringFilter<"Appointment"> | string;
    doctorProfileId?: Prisma.StringFilter<"Appointment"> | string;
    fechaHora?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    estado?: Prisma.EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus;
    motivoConsulta?: Prisma.StringFilter<"Appointment"> | string;
    tiempoMolestia?: Prisma.EnumSymptomDurationNullableFilter<"Appointment"> | $Enums.SymptomDuration | null;
    notasAdicionales?: Prisma.StringNullableFilter<"Appointment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    patientProfile?: Prisma.XOR<Prisma.PatientProfileScalarRelationFilter, Prisma.PatientProfileWhereInput>;
    doctorProfile?: Prisma.XOR<Prisma.DoctorProfileScalarRelationFilter, Prisma.DoctorProfileWhereInput>;
    encounter?: Prisma.XOR<Prisma.ClinicalEncounterNullableScalarRelationFilter, Prisma.ClinicalEncounterWhereInput> | null;
}, "id">;
export type AppointmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    patientProfileId?: Prisma.SortOrder;
    doctorProfileId?: Prisma.SortOrder;
    fechaHora?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    motivoConsulta?: Prisma.SortOrder;
    tiempoMolestia?: Prisma.SortOrderInput | Prisma.SortOrder;
    notasAdicionales?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AppointmentCountOrderByAggregateInput;
    _max?: Prisma.AppointmentMaxOrderByAggregateInput;
    _min?: Prisma.AppointmentMinOrderByAggregateInput;
};
export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.AppointmentScalarWhereWithAggregatesInput | Prisma.AppointmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.AppointmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AppointmentScalarWhereWithAggregatesInput | Prisma.AppointmentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Appointment"> | string;
    patientProfileId?: Prisma.StringWithAggregatesFilter<"Appointment"> | string;
    doctorProfileId?: Prisma.StringWithAggregatesFilter<"Appointment"> | string;
    fechaHora?: Prisma.DateTimeWithAggregatesFilter<"Appointment"> | Date | string;
    estado?: Prisma.EnumAppointmentStatusWithAggregatesFilter<"Appointment"> | $Enums.AppointmentStatus;
    motivoConsulta?: Prisma.StringWithAggregatesFilter<"Appointment"> | string;
    tiempoMolestia?: Prisma.EnumSymptomDurationNullableWithAggregatesFilter<"Appointment"> | $Enums.SymptomDuration | null;
    notasAdicionales?: Prisma.StringNullableWithAggregatesFilter<"Appointment"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Appointment"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Appointment"> | Date | string;
};
export type AppointmentCreateInput = {
    id?: string;
    fechaHora: Date | string;
    estado?: $Enums.AppointmentStatus;
    motivoConsulta: string;
    tiempoMolestia?: $Enums.SymptomDuration | null;
    notasAdicionales?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patientProfile: Prisma.PatientProfileCreateNestedOneWithoutAppointmentsInput;
    doctorProfile: Prisma.DoctorProfileCreateNestedOneWithoutAppointmentsInput;
    encounter?: Prisma.ClinicalEncounterCreateNestedOneWithoutAppointmentInput;
};
export type AppointmentUncheckedCreateInput = {
    id?: string;
    patientProfileId: string;
    doctorProfileId: string;
    fechaHora: Date | string;
    estado?: $Enums.AppointmentStatus;
    motivoConsulta: string;
    tiempoMolestia?: $Enums.SymptomDuration | null;
    notasAdicionales?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    encounter?: Prisma.ClinicalEncounterUncheckedCreateNestedOneWithoutAppointmentInput;
};
export type AppointmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    motivoConsulta?: Prisma.StringFieldUpdateOperationsInput | string;
    tiempoMolestia?: Prisma.NullableEnumSymptomDurationFieldUpdateOperationsInput | $Enums.SymptomDuration | null;
    notasAdicionales?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patientProfile?: Prisma.PatientProfileUpdateOneRequiredWithoutAppointmentsNestedInput;
    doctorProfile?: Prisma.DoctorProfileUpdateOneRequiredWithoutAppointmentsNestedInput;
    encounter?: Prisma.ClinicalEncounterUpdateOneWithoutAppointmentNestedInput;
};
export type AppointmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    patientProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    doctorProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    motivoConsulta?: Prisma.StringFieldUpdateOperationsInput | string;
    tiempoMolestia?: Prisma.NullableEnumSymptomDurationFieldUpdateOperationsInput | $Enums.SymptomDuration | null;
    notasAdicionales?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    encounter?: Prisma.ClinicalEncounterUncheckedUpdateOneWithoutAppointmentNestedInput;
};
export type AppointmentCreateManyInput = {
    id?: string;
    patientProfileId: string;
    doctorProfileId: string;
    fechaHora: Date | string;
    estado?: $Enums.AppointmentStatus;
    motivoConsulta: string;
    tiempoMolestia?: $Enums.SymptomDuration | null;
    notasAdicionales?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AppointmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    motivoConsulta?: Prisma.StringFieldUpdateOperationsInput | string;
    tiempoMolestia?: Prisma.NullableEnumSymptomDurationFieldUpdateOperationsInput | $Enums.SymptomDuration | null;
    notasAdicionales?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AppointmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    patientProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    doctorProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    motivoConsulta?: Prisma.StringFieldUpdateOperationsInput | string;
    tiempoMolestia?: Prisma.NullableEnumSymptomDurationFieldUpdateOperationsInput | $Enums.SymptomDuration | null;
    notasAdicionales?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AppointmentListRelationFilter = {
    every?: Prisma.AppointmentWhereInput;
    some?: Prisma.AppointmentWhereInput;
    none?: Prisma.AppointmentWhereInput;
};
export type AppointmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AppointmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    patientProfileId?: Prisma.SortOrder;
    doctorProfileId?: Prisma.SortOrder;
    fechaHora?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    motivoConsulta?: Prisma.SortOrder;
    tiempoMolestia?: Prisma.SortOrder;
    notasAdicionales?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AppointmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    patientProfileId?: Prisma.SortOrder;
    doctorProfileId?: Prisma.SortOrder;
    fechaHora?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    motivoConsulta?: Prisma.SortOrder;
    tiempoMolestia?: Prisma.SortOrder;
    notasAdicionales?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AppointmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    patientProfileId?: Prisma.SortOrder;
    doctorProfileId?: Prisma.SortOrder;
    fechaHora?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    motivoConsulta?: Prisma.SortOrder;
    tiempoMolestia?: Prisma.SortOrder;
    notasAdicionales?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AppointmentScalarRelationFilter = {
    is?: Prisma.AppointmentWhereInput;
    isNot?: Prisma.AppointmentWhereInput;
};
export type AppointmentCreateNestedManyWithoutPatientProfileInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutPatientProfileInput, Prisma.AppointmentUncheckedCreateWithoutPatientProfileInput> | Prisma.AppointmentCreateWithoutPatientProfileInput[] | Prisma.AppointmentUncheckedCreateWithoutPatientProfileInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutPatientProfileInput | Prisma.AppointmentCreateOrConnectWithoutPatientProfileInput[];
    createMany?: Prisma.AppointmentCreateManyPatientProfileInputEnvelope;
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
};
export type AppointmentUncheckedCreateNestedManyWithoutPatientProfileInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutPatientProfileInput, Prisma.AppointmentUncheckedCreateWithoutPatientProfileInput> | Prisma.AppointmentCreateWithoutPatientProfileInput[] | Prisma.AppointmentUncheckedCreateWithoutPatientProfileInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutPatientProfileInput | Prisma.AppointmentCreateOrConnectWithoutPatientProfileInput[];
    createMany?: Prisma.AppointmentCreateManyPatientProfileInputEnvelope;
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
};
export type AppointmentUpdateManyWithoutPatientProfileNestedInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutPatientProfileInput, Prisma.AppointmentUncheckedCreateWithoutPatientProfileInput> | Prisma.AppointmentCreateWithoutPatientProfileInput[] | Prisma.AppointmentUncheckedCreateWithoutPatientProfileInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutPatientProfileInput | Prisma.AppointmentCreateOrConnectWithoutPatientProfileInput[];
    upsert?: Prisma.AppointmentUpsertWithWhereUniqueWithoutPatientProfileInput | Prisma.AppointmentUpsertWithWhereUniqueWithoutPatientProfileInput[];
    createMany?: Prisma.AppointmentCreateManyPatientProfileInputEnvelope;
    set?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    disconnect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    delete?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    update?: Prisma.AppointmentUpdateWithWhereUniqueWithoutPatientProfileInput | Prisma.AppointmentUpdateWithWhereUniqueWithoutPatientProfileInput[];
    updateMany?: Prisma.AppointmentUpdateManyWithWhereWithoutPatientProfileInput | Prisma.AppointmentUpdateManyWithWhereWithoutPatientProfileInput[];
    deleteMany?: Prisma.AppointmentScalarWhereInput | Prisma.AppointmentScalarWhereInput[];
};
export type AppointmentUncheckedUpdateManyWithoutPatientProfileNestedInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutPatientProfileInput, Prisma.AppointmentUncheckedCreateWithoutPatientProfileInput> | Prisma.AppointmentCreateWithoutPatientProfileInput[] | Prisma.AppointmentUncheckedCreateWithoutPatientProfileInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutPatientProfileInput | Prisma.AppointmentCreateOrConnectWithoutPatientProfileInput[];
    upsert?: Prisma.AppointmentUpsertWithWhereUniqueWithoutPatientProfileInput | Prisma.AppointmentUpsertWithWhereUniqueWithoutPatientProfileInput[];
    createMany?: Prisma.AppointmentCreateManyPatientProfileInputEnvelope;
    set?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    disconnect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    delete?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    update?: Prisma.AppointmentUpdateWithWhereUniqueWithoutPatientProfileInput | Prisma.AppointmentUpdateWithWhereUniqueWithoutPatientProfileInput[];
    updateMany?: Prisma.AppointmentUpdateManyWithWhereWithoutPatientProfileInput | Prisma.AppointmentUpdateManyWithWhereWithoutPatientProfileInput[];
    deleteMany?: Prisma.AppointmentScalarWhereInput | Prisma.AppointmentScalarWhereInput[];
};
export type AppointmentCreateNestedManyWithoutDoctorProfileInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutDoctorProfileInput, Prisma.AppointmentUncheckedCreateWithoutDoctorProfileInput> | Prisma.AppointmentCreateWithoutDoctorProfileInput[] | Prisma.AppointmentUncheckedCreateWithoutDoctorProfileInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutDoctorProfileInput | Prisma.AppointmentCreateOrConnectWithoutDoctorProfileInput[];
    createMany?: Prisma.AppointmentCreateManyDoctorProfileInputEnvelope;
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
};
export type AppointmentUncheckedCreateNestedManyWithoutDoctorProfileInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutDoctorProfileInput, Prisma.AppointmentUncheckedCreateWithoutDoctorProfileInput> | Prisma.AppointmentCreateWithoutDoctorProfileInput[] | Prisma.AppointmentUncheckedCreateWithoutDoctorProfileInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutDoctorProfileInput | Prisma.AppointmentCreateOrConnectWithoutDoctorProfileInput[];
    createMany?: Prisma.AppointmentCreateManyDoctorProfileInputEnvelope;
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
};
export type AppointmentUpdateManyWithoutDoctorProfileNestedInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutDoctorProfileInput, Prisma.AppointmentUncheckedCreateWithoutDoctorProfileInput> | Prisma.AppointmentCreateWithoutDoctorProfileInput[] | Prisma.AppointmentUncheckedCreateWithoutDoctorProfileInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutDoctorProfileInput | Prisma.AppointmentCreateOrConnectWithoutDoctorProfileInput[];
    upsert?: Prisma.AppointmentUpsertWithWhereUniqueWithoutDoctorProfileInput | Prisma.AppointmentUpsertWithWhereUniqueWithoutDoctorProfileInput[];
    createMany?: Prisma.AppointmentCreateManyDoctorProfileInputEnvelope;
    set?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    disconnect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    delete?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    update?: Prisma.AppointmentUpdateWithWhereUniqueWithoutDoctorProfileInput | Prisma.AppointmentUpdateWithWhereUniqueWithoutDoctorProfileInput[];
    updateMany?: Prisma.AppointmentUpdateManyWithWhereWithoutDoctorProfileInput | Prisma.AppointmentUpdateManyWithWhereWithoutDoctorProfileInput[];
    deleteMany?: Prisma.AppointmentScalarWhereInput | Prisma.AppointmentScalarWhereInput[];
};
export type AppointmentUncheckedUpdateManyWithoutDoctorProfileNestedInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutDoctorProfileInput, Prisma.AppointmentUncheckedCreateWithoutDoctorProfileInput> | Prisma.AppointmentCreateWithoutDoctorProfileInput[] | Prisma.AppointmentUncheckedCreateWithoutDoctorProfileInput[];
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutDoctorProfileInput | Prisma.AppointmentCreateOrConnectWithoutDoctorProfileInput[];
    upsert?: Prisma.AppointmentUpsertWithWhereUniqueWithoutDoctorProfileInput | Prisma.AppointmentUpsertWithWhereUniqueWithoutDoctorProfileInput[];
    createMany?: Prisma.AppointmentCreateManyDoctorProfileInputEnvelope;
    set?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    disconnect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    delete?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    connect?: Prisma.AppointmentWhereUniqueInput | Prisma.AppointmentWhereUniqueInput[];
    update?: Prisma.AppointmentUpdateWithWhereUniqueWithoutDoctorProfileInput | Prisma.AppointmentUpdateWithWhereUniqueWithoutDoctorProfileInput[];
    updateMany?: Prisma.AppointmentUpdateManyWithWhereWithoutDoctorProfileInput | Prisma.AppointmentUpdateManyWithWhereWithoutDoctorProfileInput[];
    deleteMany?: Prisma.AppointmentScalarWhereInput | Prisma.AppointmentScalarWhereInput[];
};
export type EnumAppointmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentStatus;
};
export type NullableEnumSymptomDurationFieldUpdateOperationsInput = {
    set?: $Enums.SymptomDuration | null;
};
export type AppointmentCreateNestedOneWithoutEncounterInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutEncounterInput, Prisma.AppointmentUncheckedCreateWithoutEncounterInput>;
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutEncounterInput;
    connect?: Prisma.AppointmentWhereUniqueInput;
};
export type AppointmentUpdateOneRequiredWithoutEncounterNestedInput = {
    create?: Prisma.XOR<Prisma.AppointmentCreateWithoutEncounterInput, Prisma.AppointmentUncheckedCreateWithoutEncounterInput>;
    connectOrCreate?: Prisma.AppointmentCreateOrConnectWithoutEncounterInput;
    upsert?: Prisma.AppointmentUpsertWithoutEncounterInput;
    connect?: Prisma.AppointmentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AppointmentUpdateToOneWithWhereWithoutEncounterInput, Prisma.AppointmentUpdateWithoutEncounterInput>, Prisma.AppointmentUncheckedUpdateWithoutEncounterInput>;
};
export type AppointmentCreateWithoutPatientProfileInput = {
    id?: string;
    fechaHora: Date | string;
    estado?: $Enums.AppointmentStatus;
    motivoConsulta: string;
    tiempoMolestia?: $Enums.SymptomDuration | null;
    notasAdicionales?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    doctorProfile: Prisma.DoctorProfileCreateNestedOneWithoutAppointmentsInput;
    encounter?: Prisma.ClinicalEncounterCreateNestedOneWithoutAppointmentInput;
};
export type AppointmentUncheckedCreateWithoutPatientProfileInput = {
    id?: string;
    doctorProfileId: string;
    fechaHora: Date | string;
    estado?: $Enums.AppointmentStatus;
    motivoConsulta: string;
    tiempoMolestia?: $Enums.SymptomDuration | null;
    notasAdicionales?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    encounter?: Prisma.ClinicalEncounterUncheckedCreateNestedOneWithoutAppointmentInput;
};
export type AppointmentCreateOrConnectWithoutPatientProfileInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AppointmentCreateWithoutPatientProfileInput, Prisma.AppointmentUncheckedCreateWithoutPatientProfileInput>;
};
export type AppointmentCreateManyPatientProfileInputEnvelope = {
    data: Prisma.AppointmentCreateManyPatientProfileInput | Prisma.AppointmentCreateManyPatientProfileInput[];
    skipDuplicates?: boolean;
};
export type AppointmentUpsertWithWhereUniqueWithoutPatientProfileInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.AppointmentUpdateWithoutPatientProfileInput, Prisma.AppointmentUncheckedUpdateWithoutPatientProfileInput>;
    create: Prisma.XOR<Prisma.AppointmentCreateWithoutPatientProfileInput, Prisma.AppointmentUncheckedCreateWithoutPatientProfileInput>;
};
export type AppointmentUpdateWithWhereUniqueWithoutPatientProfileInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.AppointmentUpdateWithoutPatientProfileInput, Prisma.AppointmentUncheckedUpdateWithoutPatientProfileInput>;
};
export type AppointmentUpdateManyWithWhereWithoutPatientProfileInput = {
    where: Prisma.AppointmentScalarWhereInput;
    data: Prisma.XOR<Prisma.AppointmentUpdateManyMutationInput, Prisma.AppointmentUncheckedUpdateManyWithoutPatientProfileInput>;
};
export type AppointmentScalarWhereInput = {
    AND?: Prisma.AppointmentScalarWhereInput | Prisma.AppointmentScalarWhereInput[];
    OR?: Prisma.AppointmentScalarWhereInput[];
    NOT?: Prisma.AppointmentScalarWhereInput | Prisma.AppointmentScalarWhereInput[];
    id?: Prisma.StringFilter<"Appointment"> | string;
    patientProfileId?: Prisma.StringFilter<"Appointment"> | string;
    doctorProfileId?: Prisma.StringFilter<"Appointment"> | string;
    fechaHora?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    estado?: Prisma.EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus;
    motivoConsulta?: Prisma.StringFilter<"Appointment"> | string;
    tiempoMolestia?: Prisma.EnumSymptomDurationNullableFilter<"Appointment"> | $Enums.SymptomDuration | null;
    notasAdicionales?: Prisma.StringNullableFilter<"Appointment"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Appointment"> | Date | string;
};
export type AppointmentCreateWithoutDoctorProfileInput = {
    id?: string;
    fechaHora: Date | string;
    estado?: $Enums.AppointmentStatus;
    motivoConsulta: string;
    tiempoMolestia?: $Enums.SymptomDuration | null;
    notasAdicionales?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patientProfile: Prisma.PatientProfileCreateNestedOneWithoutAppointmentsInput;
    encounter?: Prisma.ClinicalEncounterCreateNestedOneWithoutAppointmentInput;
};
export type AppointmentUncheckedCreateWithoutDoctorProfileInput = {
    id?: string;
    patientProfileId: string;
    fechaHora: Date | string;
    estado?: $Enums.AppointmentStatus;
    motivoConsulta: string;
    tiempoMolestia?: $Enums.SymptomDuration | null;
    notasAdicionales?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    encounter?: Prisma.ClinicalEncounterUncheckedCreateNestedOneWithoutAppointmentInput;
};
export type AppointmentCreateOrConnectWithoutDoctorProfileInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AppointmentCreateWithoutDoctorProfileInput, Prisma.AppointmentUncheckedCreateWithoutDoctorProfileInput>;
};
export type AppointmentCreateManyDoctorProfileInputEnvelope = {
    data: Prisma.AppointmentCreateManyDoctorProfileInput | Prisma.AppointmentCreateManyDoctorProfileInput[];
    skipDuplicates?: boolean;
};
export type AppointmentUpsertWithWhereUniqueWithoutDoctorProfileInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.AppointmentUpdateWithoutDoctorProfileInput, Prisma.AppointmentUncheckedUpdateWithoutDoctorProfileInput>;
    create: Prisma.XOR<Prisma.AppointmentCreateWithoutDoctorProfileInput, Prisma.AppointmentUncheckedCreateWithoutDoctorProfileInput>;
};
export type AppointmentUpdateWithWhereUniqueWithoutDoctorProfileInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.AppointmentUpdateWithoutDoctorProfileInput, Prisma.AppointmentUncheckedUpdateWithoutDoctorProfileInput>;
};
export type AppointmentUpdateManyWithWhereWithoutDoctorProfileInput = {
    where: Prisma.AppointmentScalarWhereInput;
    data: Prisma.XOR<Prisma.AppointmentUpdateManyMutationInput, Prisma.AppointmentUncheckedUpdateManyWithoutDoctorProfileInput>;
};
export type AppointmentCreateWithoutEncounterInput = {
    id?: string;
    fechaHora: Date | string;
    estado?: $Enums.AppointmentStatus;
    motivoConsulta: string;
    tiempoMolestia?: $Enums.SymptomDuration | null;
    notasAdicionales?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patientProfile: Prisma.PatientProfileCreateNestedOneWithoutAppointmentsInput;
    doctorProfile: Prisma.DoctorProfileCreateNestedOneWithoutAppointmentsInput;
};
export type AppointmentUncheckedCreateWithoutEncounterInput = {
    id?: string;
    patientProfileId: string;
    doctorProfileId: string;
    fechaHora: Date | string;
    estado?: $Enums.AppointmentStatus;
    motivoConsulta: string;
    tiempoMolestia?: $Enums.SymptomDuration | null;
    notasAdicionales?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AppointmentCreateOrConnectWithoutEncounterInput = {
    where: Prisma.AppointmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AppointmentCreateWithoutEncounterInput, Prisma.AppointmentUncheckedCreateWithoutEncounterInput>;
};
export type AppointmentUpsertWithoutEncounterInput = {
    update: Prisma.XOR<Prisma.AppointmentUpdateWithoutEncounterInput, Prisma.AppointmentUncheckedUpdateWithoutEncounterInput>;
    create: Prisma.XOR<Prisma.AppointmentCreateWithoutEncounterInput, Prisma.AppointmentUncheckedCreateWithoutEncounterInput>;
    where?: Prisma.AppointmentWhereInput;
};
export type AppointmentUpdateToOneWithWhereWithoutEncounterInput = {
    where?: Prisma.AppointmentWhereInput;
    data: Prisma.XOR<Prisma.AppointmentUpdateWithoutEncounterInput, Prisma.AppointmentUncheckedUpdateWithoutEncounterInput>;
};
export type AppointmentUpdateWithoutEncounterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    motivoConsulta?: Prisma.StringFieldUpdateOperationsInput | string;
    tiempoMolestia?: Prisma.NullableEnumSymptomDurationFieldUpdateOperationsInput | $Enums.SymptomDuration | null;
    notasAdicionales?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patientProfile?: Prisma.PatientProfileUpdateOneRequiredWithoutAppointmentsNestedInput;
    doctorProfile?: Prisma.DoctorProfileUpdateOneRequiredWithoutAppointmentsNestedInput;
};
export type AppointmentUncheckedUpdateWithoutEncounterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    patientProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    doctorProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    motivoConsulta?: Prisma.StringFieldUpdateOperationsInput | string;
    tiempoMolestia?: Prisma.NullableEnumSymptomDurationFieldUpdateOperationsInput | $Enums.SymptomDuration | null;
    notasAdicionales?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AppointmentCreateManyPatientProfileInput = {
    id?: string;
    doctorProfileId: string;
    fechaHora: Date | string;
    estado?: $Enums.AppointmentStatus;
    motivoConsulta: string;
    tiempoMolestia?: $Enums.SymptomDuration | null;
    notasAdicionales?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AppointmentUpdateWithoutPatientProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    motivoConsulta?: Prisma.StringFieldUpdateOperationsInput | string;
    tiempoMolestia?: Prisma.NullableEnumSymptomDurationFieldUpdateOperationsInput | $Enums.SymptomDuration | null;
    notasAdicionales?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    doctorProfile?: Prisma.DoctorProfileUpdateOneRequiredWithoutAppointmentsNestedInput;
    encounter?: Prisma.ClinicalEncounterUpdateOneWithoutAppointmentNestedInput;
};
export type AppointmentUncheckedUpdateWithoutPatientProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    doctorProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    motivoConsulta?: Prisma.StringFieldUpdateOperationsInput | string;
    tiempoMolestia?: Prisma.NullableEnumSymptomDurationFieldUpdateOperationsInput | $Enums.SymptomDuration | null;
    notasAdicionales?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    encounter?: Prisma.ClinicalEncounterUncheckedUpdateOneWithoutAppointmentNestedInput;
};
export type AppointmentUncheckedUpdateManyWithoutPatientProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    doctorProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    motivoConsulta?: Prisma.StringFieldUpdateOperationsInput | string;
    tiempoMolestia?: Prisma.NullableEnumSymptomDurationFieldUpdateOperationsInput | $Enums.SymptomDuration | null;
    notasAdicionales?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AppointmentCreateManyDoctorProfileInput = {
    id?: string;
    patientProfileId: string;
    fechaHora: Date | string;
    estado?: $Enums.AppointmentStatus;
    motivoConsulta: string;
    tiempoMolestia?: $Enums.SymptomDuration | null;
    notasAdicionales?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AppointmentUpdateWithoutDoctorProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    motivoConsulta?: Prisma.StringFieldUpdateOperationsInput | string;
    tiempoMolestia?: Prisma.NullableEnumSymptomDurationFieldUpdateOperationsInput | $Enums.SymptomDuration | null;
    notasAdicionales?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patientProfile?: Prisma.PatientProfileUpdateOneRequiredWithoutAppointmentsNestedInput;
    encounter?: Prisma.ClinicalEncounterUpdateOneWithoutAppointmentNestedInput;
};
export type AppointmentUncheckedUpdateWithoutDoctorProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    patientProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    motivoConsulta?: Prisma.StringFieldUpdateOperationsInput | string;
    tiempoMolestia?: Prisma.NullableEnumSymptomDurationFieldUpdateOperationsInput | $Enums.SymptomDuration | null;
    notasAdicionales?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    encounter?: Prisma.ClinicalEncounterUncheckedUpdateOneWithoutAppointmentNestedInput;
};
export type AppointmentUncheckedUpdateManyWithoutDoctorProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    patientProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus;
    motivoConsulta?: Prisma.StringFieldUpdateOperationsInput | string;
    tiempoMolestia?: Prisma.NullableEnumSymptomDurationFieldUpdateOperationsInput | $Enums.SymptomDuration | null;
    notasAdicionales?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AppointmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    patientProfileId?: boolean;
    doctorProfileId?: boolean;
    fechaHora?: boolean;
    estado?: boolean;
    motivoConsulta?: boolean;
    tiempoMolestia?: boolean;
    notasAdicionales?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    patientProfile?: boolean | Prisma.PatientProfileDefaultArgs<ExtArgs>;
    doctorProfile?: boolean | Prisma.DoctorProfileDefaultArgs<ExtArgs>;
    encounter?: boolean | Prisma.Appointment$encounterArgs<ExtArgs>;
}, ExtArgs["result"]["appointment"]>;
export type AppointmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    patientProfileId?: boolean;
    doctorProfileId?: boolean;
    fechaHora?: boolean;
    estado?: boolean;
    motivoConsulta?: boolean;
    tiempoMolestia?: boolean;
    notasAdicionales?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    patientProfile?: boolean | Prisma.PatientProfileDefaultArgs<ExtArgs>;
    doctorProfile?: boolean | Prisma.DoctorProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["appointment"]>;
export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    patientProfileId?: boolean;
    doctorProfileId?: boolean;
    fechaHora?: boolean;
    estado?: boolean;
    motivoConsulta?: boolean;
    tiempoMolestia?: boolean;
    notasAdicionales?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    patientProfile?: boolean | Prisma.PatientProfileDefaultArgs<ExtArgs>;
    doctorProfile?: boolean | Prisma.DoctorProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["appointment"]>;
export type AppointmentSelectScalar = {
    id?: boolean;
    patientProfileId?: boolean;
    doctorProfileId?: boolean;
    fechaHora?: boolean;
    estado?: boolean;
    motivoConsulta?: boolean;
    tiempoMolestia?: boolean;
    notasAdicionales?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AppointmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "patientProfileId" | "doctorProfileId" | "fechaHora" | "estado" | "motivoConsulta" | "tiempoMolestia" | "notasAdicionales" | "createdAt" | "updatedAt", ExtArgs["result"]["appointment"]>;
export type AppointmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patientProfile?: boolean | Prisma.PatientProfileDefaultArgs<ExtArgs>;
    doctorProfile?: boolean | Prisma.DoctorProfileDefaultArgs<ExtArgs>;
    encounter?: boolean | Prisma.Appointment$encounterArgs<ExtArgs>;
};
export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patientProfile?: boolean | Prisma.PatientProfileDefaultArgs<ExtArgs>;
    doctorProfile?: boolean | Prisma.DoctorProfileDefaultArgs<ExtArgs>;
};
export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patientProfile?: boolean | Prisma.PatientProfileDefaultArgs<ExtArgs>;
    doctorProfile?: boolean | Prisma.DoctorProfileDefaultArgs<ExtArgs>;
};
export type $AppointmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Appointment";
    objects: {
        patientProfile: Prisma.$PatientProfilePayload<ExtArgs>;
        doctorProfile: Prisma.$DoctorProfilePayload<ExtArgs>;
        encounter: Prisma.$ClinicalEncounterPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        patientProfileId: string;
        doctorProfileId: string;
        fechaHora: Date;
        estado: $Enums.AppointmentStatus;
        motivoConsulta: string;
        tiempoMolestia: $Enums.SymptomDuration | null;
        notasAdicionales: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["appointment"]>;
    composites: {};
};
export type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AppointmentPayload, S>;
export type AppointmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AppointmentCountAggregateInputType | true;
};
export interface AppointmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Appointment'];
        meta: {
            name: 'Appointment';
        };
    };
    findUnique<T extends AppointmentFindUniqueArgs>(args: Prisma.SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AppointmentClient<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AppointmentClient<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AppointmentFindFirstArgs>(args?: Prisma.SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__AppointmentClient<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AppointmentClient<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AppointmentFindManyArgs>(args?: Prisma.SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AppointmentCreateArgs>(args: Prisma.SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma.Prisma__AppointmentClient<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AppointmentCreateManyArgs>(args?: Prisma.SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AppointmentDeleteArgs>(args: Prisma.SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma.Prisma__AppointmentClient<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AppointmentUpdateArgs>(args: Prisma.SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma.Prisma__AppointmentClient<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AppointmentUpdateManyArgs>(args: Prisma.SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AppointmentUpsertArgs>(args: Prisma.SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma.Prisma__AppointmentClient<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AppointmentCountArgs>(args?: Prisma.Subset<T, AppointmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AppointmentCountAggregateOutputType> : number>;
    aggregate<T extends AppointmentAggregateArgs>(args: Prisma.Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>;
    groupBy<T extends AppointmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AppointmentGroupByArgs['orderBy'];
    } : {
        orderBy?: AppointmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AppointmentFieldRefs;
}
export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    patientProfile<T extends Prisma.PatientProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PatientProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__PatientProfileClient<runtime.Types.Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    doctorProfile<T extends Prisma.DoctorProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DoctorProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__DoctorProfileClient<runtime.Types.Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    encounter<T extends Prisma.Appointment$encounterArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Appointment$encounterArgs<ExtArgs>>): Prisma.Prisma__ClinicalEncounterClient<runtime.Types.Result.GetResult<Prisma.$ClinicalEncounterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AppointmentFieldRefs {
    readonly id: Prisma.FieldRef<"Appointment", 'String'>;
    readonly patientProfileId: Prisma.FieldRef<"Appointment", 'String'>;
    readonly doctorProfileId: Prisma.FieldRef<"Appointment", 'String'>;
    readonly fechaHora: Prisma.FieldRef<"Appointment", 'DateTime'>;
    readonly estado: Prisma.FieldRef<"Appointment", 'AppointmentStatus'>;
    readonly motivoConsulta: Prisma.FieldRef<"Appointment", 'String'>;
    readonly tiempoMolestia: Prisma.FieldRef<"Appointment", 'SymptomDuration'>;
    readonly notasAdicionales: Prisma.FieldRef<"Appointment", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Appointment", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Appointment", 'DateTime'>;
}
export type AppointmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    include?: Prisma.AppointmentInclude<ExtArgs> | null;
    where: Prisma.AppointmentWhereUniqueInput;
};
export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    include?: Prisma.AppointmentInclude<ExtArgs> | null;
    where: Prisma.AppointmentWhereUniqueInput;
};
export type AppointmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    include?: Prisma.AppointmentInclude<ExtArgs> | null;
    where?: Prisma.AppointmentWhereInput;
    orderBy?: Prisma.AppointmentOrderByWithRelationInput | Prisma.AppointmentOrderByWithRelationInput[];
    cursor?: Prisma.AppointmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AppointmentScalarFieldEnum | Prisma.AppointmentScalarFieldEnum[];
};
export type AppointmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    include?: Prisma.AppointmentInclude<ExtArgs> | null;
    where?: Prisma.AppointmentWhereInput;
    orderBy?: Prisma.AppointmentOrderByWithRelationInput | Prisma.AppointmentOrderByWithRelationInput[];
    cursor?: Prisma.AppointmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AppointmentScalarFieldEnum | Prisma.AppointmentScalarFieldEnum[];
};
export type AppointmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    include?: Prisma.AppointmentInclude<ExtArgs> | null;
    where?: Prisma.AppointmentWhereInput;
    orderBy?: Prisma.AppointmentOrderByWithRelationInput | Prisma.AppointmentOrderByWithRelationInput[];
    cursor?: Prisma.AppointmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AppointmentScalarFieldEnum | Prisma.AppointmentScalarFieldEnum[];
};
export type AppointmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    include?: Prisma.AppointmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AppointmentCreateInput, Prisma.AppointmentUncheckedCreateInput>;
};
export type AppointmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AppointmentCreateManyInput | Prisma.AppointmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AppointmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    data: Prisma.AppointmentCreateManyInput | Prisma.AppointmentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AppointmentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AppointmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    include?: Prisma.AppointmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AppointmentUpdateInput, Prisma.AppointmentUncheckedUpdateInput>;
    where: Prisma.AppointmentWhereUniqueInput;
};
export type AppointmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AppointmentUpdateManyMutationInput, Prisma.AppointmentUncheckedUpdateManyInput>;
    where?: Prisma.AppointmentWhereInput;
    limit?: number;
};
export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AppointmentUpdateManyMutationInput, Prisma.AppointmentUncheckedUpdateManyInput>;
    where?: Prisma.AppointmentWhereInput;
    limit?: number;
    include?: Prisma.AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AppointmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    include?: Prisma.AppointmentInclude<ExtArgs> | null;
    where: Prisma.AppointmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AppointmentCreateInput, Prisma.AppointmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AppointmentUpdateInput, Prisma.AppointmentUncheckedUpdateInput>;
};
export type AppointmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    include?: Prisma.AppointmentInclude<ExtArgs> | null;
    where: Prisma.AppointmentWhereUniqueInput;
};
export type AppointmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AppointmentWhereInput;
    limit?: number;
};
export type Appointment$encounterArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClinicalEncounterSelect<ExtArgs> | null;
    omit?: Prisma.ClinicalEncounterOmit<ExtArgs> | null;
    include?: Prisma.ClinicalEncounterInclude<ExtArgs> | null;
    where?: Prisma.ClinicalEncounterWhereInput;
};
export type AppointmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppointmentSelect<ExtArgs> | null;
    omit?: Prisma.AppointmentOmit<ExtArgs> | null;
    include?: Prisma.AppointmentInclude<ExtArgs> | null;
};

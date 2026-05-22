import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PatientProfileModel = runtime.Types.Result.DefaultSelection<Prisma.$PatientProfilePayload>;
export type AggregatePatientProfile = {
    _count: PatientProfileCountAggregateOutputType | null;
    _avg: PatientProfileAvgAggregateOutputType | null;
    _sum: PatientProfileSumAggregateOutputType | null;
    _min: PatientProfileMinAggregateOutputType | null;
    _max: PatientProfileMaxAggregateOutputType | null;
};
export type PatientProfileAvgAggregateOutputType = {
    currentStep: number | null;
    completedSteps: number | null;
};
export type PatientProfileSumAggregateOutputType = {
    currentStep: number | null;
    completedSteps: number[];
};
export type PatientProfileMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    onboardingCompleted: boolean | null;
    currentStep: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PatientProfileMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    onboardingCompleted: boolean | null;
    currentStep: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PatientProfileCountAggregateOutputType = {
    id: number;
    userId: number;
    onboardingCompleted: number;
    currentStep: number;
    completedSteps: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PatientProfileAvgAggregateInputType = {
    currentStep?: true;
    completedSteps?: true;
};
export type PatientProfileSumAggregateInputType = {
    currentStep?: true;
    completedSteps?: true;
};
export type PatientProfileMinAggregateInputType = {
    id?: true;
    userId?: true;
    onboardingCompleted?: true;
    currentStep?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PatientProfileMaxAggregateInputType = {
    id?: true;
    userId?: true;
    onboardingCompleted?: true;
    currentStep?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PatientProfileCountAggregateInputType = {
    id?: true;
    userId?: true;
    onboardingCompleted?: true;
    currentStep?: true;
    completedSteps?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PatientProfileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientProfileWhereInput;
    orderBy?: Prisma.PatientProfileOrderByWithRelationInput | Prisma.PatientProfileOrderByWithRelationInput[];
    cursor?: Prisma.PatientProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PatientProfileCountAggregateInputType;
    _avg?: PatientProfileAvgAggregateInputType;
    _sum?: PatientProfileSumAggregateInputType;
    _min?: PatientProfileMinAggregateInputType;
    _max?: PatientProfileMaxAggregateInputType;
};
export type GetPatientProfileAggregateType<T extends PatientProfileAggregateArgs> = {
    [P in keyof T & keyof AggregatePatientProfile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePatientProfile[P]> : Prisma.GetScalarType<T[P], AggregatePatientProfile[P]>;
};
export type PatientProfileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientProfileWhereInput;
    orderBy?: Prisma.PatientProfileOrderByWithAggregationInput | Prisma.PatientProfileOrderByWithAggregationInput[];
    by: Prisma.PatientProfileScalarFieldEnum[] | Prisma.PatientProfileScalarFieldEnum;
    having?: Prisma.PatientProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PatientProfileCountAggregateInputType | true;
    _avg?: PatientProfileAvgAggregateInputType;
    _sum?: PatientProfileSumAggregateInputType;
    _min?: PatientProfileMinAggregateInputType;
    _max?: PatientProfileMaxAggregateInputType;
};
export type PatientProfileGroupByOutputType = {
    id: string;
    userId: string;
    onboardingCompleted: boolean;
    currentStep: number;
    completedSteps: number[];
    createdAt: Date;
    updatedAt: Date;
    _count: PatientProfileCountAggregateOutputType | null;
    _avg: PatientProfileAvgAggregateOutputType | null;
    _sum: PatientProfileSumAggregateOutputType | null;
    _min: PatientProfileMinAggregateOutputType | null;
    _max: PatientProfileMaxAggregateOutputType | null;
};
export type GetPatientProfileGroupByPayload<T extends PatientProfileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PatientProfileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PatientProfileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PatientProfileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PatientProfileGroupByOutputType[P]>;
}>>;
export type PatientProfileWhereInput = {
    AND?: Prisma.PatientProfileWhereInput | Prisma.PatientProfileWhereInput[];
    OR?: Prisma.PatientProfileWhereInput[];
    NOT?: Prisma.PatientProfileWhereInput | Prisma.PatientProfileWhereInput[];
    id?: Prisma.StringFilter<"PatientProfile"> | string;
    userId?: Prisma.StringFilter<"PatientProfile"> | string;
    onboardingCompleted?: Prisma.BoolFilter<"PatientProfile"> | boolean;
    currentStep?: Prisma.IntFilter<"PatientProfile"> | number;
    completedSteps?: Prisma.IntNullableListFilter<"PatientProfile">;
    createdAt?: Prisma.DateTimeFilter<"PatientProfile"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PatientProfile"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    identification?: Prisma.XOR<Prisma.PatientIdentificationNullableScalarRelationFilter, Prisma.PatientIdentificationWhereInput> | null;
    emergencyContacts?: Prisma.EmergencyContactListRelationFilter;
    background?: Prisma.XOR<Prisma.PatientBackgroundNullableScalarRelationFilter, Prisma.PatientBackgroundWhereInput> | null;
    backgroundVersions?: Prisma.PatientBackgroundVersionListRelationFilter;
    appointments?: Prisma.AppointmentListRelationFilter;
    grantedAccess?: Prisma.PatientDoctorAccessListRelationFilter;
};
export type PatientProfileOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    onboardingCompleted?: Prisma.SortOrder;
    currentStep?: Prisma.SortOrder;
    completedSteps?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    identification?: Prisma.PatientIdentificationOrderByWithRelationInput;
    emergencyContacts?: Prisma.EmergencyContactOrderByRelationAggregateInput;
    background?: Prisma.PatientBackgroundOrderByWithRelationInput;
    backgroundVersions?: Prisma.PatientBackgroundVersionOrderByRelationAggregateInput;
    appointments?: Prisma.AppointmentOrderByRelationAggregateInput;
    grantedAccess?: Prisma.PatientDoctorAccessOrderByRelationAggregateInput;
};
export type PatientProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    AND?: Prisma.PatientProfileWhereInput | Prisma.PatientProfileWhereInput[];
    OR?: Prisma.PatientProfileWhereInput[];
    NOT?: Prisma.PatientProfileWhereInput | Prisma.PatientProfileWhereInput[];
    onboardingCompleted?: Prisma.BoolFilter<"PatientProfile"> | boolean;
    currentStep?: Prisma.IntFilter<"PatientProfile"> | number;
    completedSteps?: Prisma.IntNullableListFilter<"PatientProfile">;
    createdAt?: Prisma.DateTimeFilter<"PatientProfile"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PatientProfile"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    identification?: Prisma.XOR<Prisma.PatientIdentificationNullableScalarRelationFilter, Prisma.PatientIdentificationWhereInput> | null;
    emergencyContacts?: Prisma.EmergencyContactListRelationFilter;
    background?: Prisma.XOR<Prisma.PatientBackgroundNullableScalarRelationFilter, Prisma.PatientBackgroundWhereInput> | null;
    backgroundVersions?: Prisma.PatientBackgroundVersionListRelationFilter;
    appointments?: Prisma.AppointmentListRelationFilter;
    grantedAccess?: Prisma.PatientDoctorAccessListRelationFilter;
}, "id" | "userId">;
export type PatientProfileOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    onboardingCompleted?: Prisma.SortOrder;
    currentStep?: Prisma.SortOrder;
    completedSteps?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PatientProfileCountOrderByAggregateInput;
    _avg?: Prisma.PatientProfileAvgOrderByAggregateInput;
    _max?: Prisma.PatientProfileMaxOrderByAggregateInput;
    _min?: Prisma.PatientProfileMinOrderByAggregateInput;
    _sum?: Prisma.PatientProfileSumOrderByAggregateInput;
};
export type PatientProfileScalarWhereWithAggregatesInput = {
    AND?: Prisma.PatientProfileScalarWhereWithAggregatesInput | Prisma.PatientProfileScalarWhereWithAggregatesInput[];
    OR?: Prisma.PatientProfileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PatientProfileScalarWhereWithAggregatesInput | Prisma.PatientProfileScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PatientProfile"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"PatientProfile"> | string;
    onboardingCompleted?: Prisma.BoolWithAggregatesFilter<"PatientProfile"> | boolean;
    currentStep?: Prisma.IntWithAggregatesFilter<"PatientProfile"> | number;
    completedSteps?: Prisma.IntNullableListFilter<"PatientProfile">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PatientProfile"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"PatientProfile"> | Date | string;
};
export type PatientProfileCreateInput = {
    id?: string;
    onboardingCompleted?: boolean;
    currentStep?: number;
    completedSteps?: Prisma.PatientProfileCreatecompletedStepsInput | number[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPatientProfileInput;
    identification?: Prisma.PatientIdentificationCreateNestedOneWithoutPatientProfileInput;
    emergencyContacts?: Prisma.EmergencyContactCreateNestedManyWithoutPatientProfileInput;
    background?: Prisma.PatientBackgroundCreateNestedOneWithoutPatientProfileInput;
    backgroundVersions?: Prisma.PatientBackgroundVersionCreateNestedManyWithoutPatientProfileInput;
    appointments?: Prisma.AppointmentCreateNestedManyWithoutPatientProfileInput;
    grantedAccess?: Prisma.PatientDoctorAccessCreateNestedManyWithoutPatientProfileInput;
};
export type PatientProfileUncheckedCreateInput = {
    id?: string;
    userId: string;
    onboardingCompleted?: boolean;
    currentStep?: number;
    completedSteps?: Prisma.PatientProfileCreatecompletedStepsInput | number[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    identification?: Prisma.PatientIdentificationUncheckedCreateNestedOneWithoutPatientProfileInput;
    emergencyContacts?: Prisma.EmergencyContactUncheckedCreateNestedManyWithoutPatientProfileInput;
    background?: Prisma.PatientBackgroundUncheckedCreateNestedOneWithoutPatientProfileInput;
    backgroundVersions?: Prisma.PatientBackgroundVersionUncheckedCreateNestedManyWithoutPatientProfileInput;
    appointments?: Prisma.AppointmentUncheckedCreateNestedManyWithoutPatientProfileInput;
    grantedAccess?: Prisma.PatientDoctorAccessUncheckedCreateNestedManyWithoutPatientProfileInput;
};
export type PatientProfileUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    onboardingCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    currentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    completedSteps?: Prisma.PatientProfileUpdatecompletedStepsInput | number[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPatientProfileNestedInput;
    identification?: Prisma.PatientIdentificationUpdateOneWithoutPatientProfileNestedInput;
    emergencyContacts?: Prisma.EmergencyContactUpdateManyWithoutPatientProfileNestedInput;
    background?: Prisma.PatientBackgroundUpdateOneWithoutPatientProfileNestedInput;
    backgroundVersions?: Prisma.PatientBackgroundVersionUpdateManyWithoutPatientProfileNestedInput;
    appointments?: Prisma.AppointmentUpdateManyWithoutPatientProfileNestedInput;
    grantedAccess?: Prisma.PatientDoctorAccessUpdateManyWithoutPatientProfileNestedInput;
};
export type PatientProfileUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    onboardingCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    currentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    completedSteps?: Prisma.PatientProfileUpdatecompletedStepsInput | number[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    identification?: Prisma.PatientIdentificationUncheckedUpdateOneWithoutPatientProfileNestedInput;
    emergencyContacts?: Prisma.EmergencyContactUncheckedUpdateManyWithoutPatientProfileNestedInput;
    background?: Prisma.PatientBackgroundUncheckedUpdateOneWithoutPatientProfileNestedInput;
    backgroundVersions?: Prisma.PatientBackgroundVersionUncheckedUpdateManyWithoutPatientProfileNestedInput;
    appointments?: Prisma.AppointmentUncheckedUpdateManyWithoutPatientProfileNestedInput;
    grantedAccess?: Prisma.PatientDoctorAccessUncheckedUpdateManyWithoutPatientProfileNestedInput;
};
export type PatientProfileCreateManyInput = {
    id?: string;
    userId: string;
    onboardingCompleted?: boolean;
    currentStep?: number;
    completedSteps?: Prisma.PatientProfileCreatecompletedStepsInput | number[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PatientProfileUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    onboardingCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    currentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    completedSteps?: Prisma.PatientProfileUpdatecompletedStepsInput | number[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientProfileUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    onboardingCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    currentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    completedSteps?: Prisma.PatientProfileUpdatecompletedStepsInput | number[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PatientProfileNullableScalarRelationFilter = {
    is?: Prisma.PatientProfileWhereInput | null;
    isNot?: Prisma.PatientProfileWhereInput | null;
};
export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    has?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    hasEvery?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    hasSome?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type PatientProfileCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    onboardingCompleted?: Prisma.SortOrder;
    currentStep?: Prisma.SortOrder;
    completedSteps?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PatientProfileAvgOrderByAggregateInput = {
    currentStep?: Prisma.SortOrder;
    completedSteps?: Prisma.SortOrder;
};
export type PatientProfileMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    onboardingCompleted?: Prisma.SortOrder;
    currentStep?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PatientProfileMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    onboardingCompleted?: Prisma.SortOrder;
    currentStep?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PatientProfileSumOrderByAggregateInput = {
    currentStep?: Prisma.SortOrder;
    completedSteps?: Prisma.SortOrder;
};
export type PatientProfileScalarRelationFilter = {
    is?: Prisma.PatientProfileWhereInput;
    isNot?: Prisma.PatientProfileWhereInput;
};
export type PatientProfileCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PatientProfileCreateWithoutUserInput, Prisma.PatientProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.PatientProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.PatientProfileWhereUniqueInput;
};
export type PatientProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PatientProfileCreateWithoutUserInput, Prisma.PatientProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.PatientProfileCreateOrConnectWithoutUserInput;
    connect?: Prisma.PatientProfileWhereUniqueInput;
};
export type PatientProfileUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PatientProfileCreateWithoutUserInput, Prisma.PatientProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.PatientProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.PatientProfileUpsertWithoutUserInput;
    disconnect?: Prisma.PatientProfileWhereInput | boolean;
    delete?: Prisma.PatientProfileWhereInput | boolean;
    connect?: Prisma.PatientProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PatientProfileUpdateToOneWithWhereWithoutUserInput, Prisma.PatientProfileUpdateWithoutUserInput>, Prisma.PatientProfileUncheckedUpdateWithoutUserInput>;
};
export type PatientProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PatientProfileCreateWithoutUserInput, Prisma.PatientProfileUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.PatientProfileCreateOrConnectWithoutUserInput;
    upsert?: Prisma.PatientProfileUpsertWithoutUserInput;
    disconnect?: Prisma.PatientProfileWhereInput | boolean;
    delete?: Prisma.PatientProfileWhereInput | boolean;
    connect?: Prisma.PatientProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PatientProfileUpdateToOneWithWhereWithoutUserInput, Prisma.PatientProfileUpdateWithoutUserInput>, Prisma.PatientProfileUncheckedUpdateWithoutUserInput>;
};
export type PatientProfileCreatecompletedStepsInput = {
    set: number[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type PatientProfileUpdatecompletedStepsInput = {
    set?: number[];
    push?: number | number[];
};
export type PatientProfileCreateNestedOneWithoutIdentificationInput = {
    create?: Prisma.XOR<Prisma.PatientProfileCreateWithoutIdentificationInput, Prisma.PatientProfileUncheckedCreateWithoutIdentificationInput>;
    connectOrCreate?: Prisma.PatientProfileCreateOrConnectWithoutIdentificationInput;
    connect?: Prisma.PatientProfileWhereUniqueInput;
};
export type PatientProfileUpdateOneRequiredWithoutIdentificationNestedInput = {
    create?: Prisma.XOR<Prisma.PatientProfileCreateWithoutIdentificationInput, Prisma.PatientProfileUncheckedCreateWithoutIdentificationInput>;
    connectOrCreate?: Prisma.PatientProfileCreateOrConnectWithoutIdentificationInput;
    upsert?: Prisma.PatientProfileUpsertWithoutIdentificationInput;
    connect?: Prisma.PatientProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PatientProfileUpdateToOneWithWhereWithoutIdentificationInput, Prisma.PatientProfileUpdateWithoutIdentificationInput>, Prisma.PatientProfileUncheckedUpdateWithoutIdentificationInput>;
};
export type PatientProfileCreateNestedOneWithoutEmergencyContactsInput = {
    create?: Prisma.XOR<Prisma.PatientProfileCreateWithoutEmergencyContactsInput, Prisma.PatientProfileUncheckedCreateWithoutEmergencyContactsInput>;
    connectOrCreate?: Prisma.PatientProfileCreateOrConnectWithoutEmergencyContactsInput;
    connect?: Prisma.PatientProfileWhereUniqueInput;
};
export type PatientProfileUpdateOneRequiredWithoutEmergencyContactsNestedInput = {
    create?: Prisma.XOR<Prisma.PatientProfileCreateWithoutEmergencyContactsInput, Prisma.PatientProfileUncheckedCreateWithoutEmergencyContactsInput>;
    connectOrCreate?: Prisma.PatientProfileCreateOrConnectWithoutEmergencyContactsInput;
    upsert?: Prisma.PatientProfileUpsertWithoutEmergencyContactsInput;
    connect?: Prisma.PatientProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PatientProfileUpdateToOneWithWhereWithoutEmergencyContactsInput, Prisma.PatientProfileUpdateWithoutEmergencyContactsInput>, Prisma.PatientProfileUncheckedUpdateWithoutEmergencyContactsInput>;
};
export type PatientProfileCreateNestedOneWithoutBackgroundInput = {
    create?: Prisma.XOR<Prisma.PatientProfileCreateWithoutBackgroundInput, Prisma.PatientProfileUncheckedCreateWithoutBackgroundInput>;
    connectOrCreate?: Prisma.PatientProfileCreateOrConnectWithoutBackgroundInput;
    connect?: Prisma.PatientProfileWhereUniqueInput;
};
export type PatientProfileUpdateOneRequiredWithoutBackgroundNestedInput = {
    create?: Prisma.XOR<Prisma.PatientProfileCreateWithoutBackgroundInput, Prisma.PatientProfileUncheckedCreateWithoutBackgroundInput>;
    connectOrCreate?: Prisma.PatientProfileCreateOrConnectWithoutBackgroundInput;
    upsert?: Prisma.PatientProfileUpsertWithoutBackgroundInput;
    connect?: Prisma.PatientProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PatientProfileUpdateToOneWithWhereWithoutBackgroundInput, Prisma.PatientProfileUpdateWithoutBackgroundInput>, Prisma.PatientProfileUncheckedUpdateWithoutBackgroundInput>;
};
export type PatientProfileCreateNestedOneWithoutBackgroundVersionsInput = {
    create?: Prisma.XOR<Prisma.PatientProfileCreateWithoutBackgroundVersionsInput, Prisma.PatientProfileUncheckedCreateWithoutBackgroundVersionsInput>;
    connectOrCreate?: Prisma.PatientProfileCreateOrConnectWithoutBackgroundVersionsInput;
    connect?: Prisma.PatientProfileWhereUniqueInput;
};
export type PatientProfileUpdateOneRequiredWithoutBackgroundVersionsNestedInput = {
    create?: Prisma.XOR<Prisma.PatientProfileCreateWithoutBackgroundVersionsInput, Prisma.PatientProfileUncheckedCreateWithoutBackgroundVersionsInput>;
    connectOrCreate?: Prisma.PatientProfileCreateOrConnectWithoutBackgroundVersionsInput;
    upsert?: Prisma.PatientProfileUpsertWithoutBackgroundVersionsInput;
    connect?: Prisma.PatientProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PatientProfileUpdateToOneWithWhereWithoutBackgroundVersionsInput, Prisma.PatientProfileUpdateWithoutBackgroundVersionsInput>, Prisma.PatientProfileUncheckedUpdateWithoutBackgroundVersionsInput>;
};
export type PatientProfileCreateNestedOneWithoutAppointmentsInput = {
    create?: Prisma.XOR<Prisma.PatientProfileCreateWithoutAppointmentsInput, Prisma.PatientProfileUncheckedCreateWithoutAppointmentsInput>;
    connectOrCreate?: Prisma.PatientProfileCreateOrConnectWithoutAppointmentsInput;
    connect?: Prisma.PatientProfileWhereUniqueInput;
};
export type PatientProfileUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: Prisma.XOR<Prisma.PatientProfileCreateWithoutAppointmentsInput, Prisma.PatientProfileUncheckedCreateWithoutAppointmentsInput>;
    connectOrCreate?: Prisma.PatientProfileCreateOrConnectWithoutAppointmentsInput;
    upsert?: Prisma.PatientProfileUpsertWithoutAppointmentsInput;
    connect?: Prisma.PatientProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PatientProfileUpdateToOneWithWhereWithoutAppointmentsInput, Prisma.PatientProfileUpdateWithoutAppointmentsInput>, Prisma.PatientProfileUncheckedUpdateWithoutAppointmentsInput>;
};
export type PatientProfileCreateNestedOneWithoutGrantedAccessInput = {
    create?: Prisma.XOR<Prisma.PatientProfileCreateWithoutGrantedAccessInput, Prisma.PatientProfileUncheckedCreateWithoutGrantedAccessInput>;
    connectOrCreate?: Prisma.PatientProfileCreateOrConnectWithoutGrantedAccessInput;
    connect?: Prisma.PatientProfileWhereUniqueInput;
};
export type PatientProfileUpdateOneRequiredWithoutGrantedAccessNestedInput = {
    create?: Prisma.XOR<Prisma.PatientProfileCreateWithoutGrantedAccessInput, Prisma.PatientProfileUncheckedCreateWithoutGrantedAccessInput>;
    connectOrCreate?: Prisma.PatientProfileCreateOrConnectWithoutGrantedAccessInput;
    upsert?: Prisma.PatientProfileUpsertWithoutGrantedAccessInput;
    connect?: Prisma.PatientProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PatientProfileUpdateToOneWithWhereWithoutGrantedAccessInput, Prisma.PatientProfileUpdateWithoutGrantedAccessInput>, Prisma.PatientProfileUncheckedUpdateWithoutGrantedAccessInput>;
};
export type PatientProfileCreateWithoutUserInput = {
    id?: string;
    onboardingCompleted?: boolean;
    currentStep?: number;
    completedSteps?: Prisma.PatientProfileCreatecompletedStepsInput | number[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    identification?: Prisma.PatientIdentificationCreateNestedOneWithoutPatientProfileInput;
    emergencyContacts?: Prisma.EmergencyContactCreateNestedManyWithoutPatientProfileInput;
    background?: Prisma.PatientBackgroundCreateNestedOneWithoutPatientProfileInput;
    backgroundVersions?: Prisma.PatientBackgroundVersionCreateNestedManyWithoutPatientProfileInput;
    appointments?: Prisma.AppointmentCreateNestedManyWithoutPatientProfileInput;
    grantedAccess?: Prisma.PatientDoctorAccessCreateNestedManyWithoutPatientProfileInput;
};
export type PatientProfileUncheckedCreateWithoutUserInput = {
    id?: string;
    onboardingCompleted?: boolean;
    currentStep?: number;
    completedSteps?: Prisma.PatientProfileCreatecompletedStepsInput | number[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    identification?: Prisma.PatientIdentificationUncheckedCreateNestedOneWithoutPatientProfileInput;
    emergencyContacts?: Prisma.EmergencyContactUncheckedCreateNestedManyWithoutPatientProfileInput;
    background?: Prisma.PatientBackgroundUncheckedCreateNestedOneWithoutPatientProfileInput;
    backgroundVersions?: Prisma.PatientBackgroundVersionUncheckedCreateNestedManyWithoutPatientProfileInput;
    appointments?: Prisma.AppointmentUncheckedCreateNestedManyWithoutPatientProfileInput;
    grantedAccess?: Prisma.PatientDoctorAccessUncheckedCreateNestedManyWithoutPatientProfileInput;
};
export type PatientProfileCreateOrConnectWithoutUserInput = {
    where: Prisma.PatientProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientProfileCreateWithoutUserInput, Prisma.PatientProfileUncheckedCreateWithoutUserInput>;
};
export type PatientProfileUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.PatientProfileUpdateWithoutUserInput, Prisma.PatientProfileUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.PatientProfileCreateWithoutUserInput, Prisma.PatientProfileUncheckedCreateWithoutUserInput>;
    where?: Prisma.PatientProfileWhereInput;
};
export type PatientProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.PatientProfileWhereInput;
    data: Prisma.XOR<Prisma.PatientProfileUpdateWithoutUserInput, Prisma.PatientProfileUncheckedUpdateWithoutUserInput>;
};
export type PatientProfileUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    onboardingCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    currentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    completedSteps?: Prisma.PatientProfileUpdatecompletedStepsInput | number[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    identification?: Prisma.PatientIdentificationUpdateOneWithoutPatientProfileNestedInput;
    emergencyContacts?: Prisma.EmergencyContactUpdateManyWithoutPatientProfileNestedInput;
    background?: Prisma.PatientBackgroundUpdateOneWithoutPatientProfileNestedInput;
    backgroundVersions?: Prisma.PatientBackgroundVersionUpdateManyWithoutPatientProfileNestedInput;
    appointments?: Prisma.AppointmentUpdateManyWithoutPatientProfileNestedInput;
    grantedAccess?: Prisma.PatientDoctorAccessUpdateManyWithoutPatientProfileNestedInput;
};
export type PatientProfileUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    onboardingCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    currentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    completedSteps?: Prisma.PatientProfileUpdatecompletedStepsInput | number[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    identification?: Prisma.PatientIdentificationUncheckedUpdateOneWithoutPatientProfileNestedInput;
    emergencyContacts?: Prisma.EmergencyContactUncheckedUpdateManyWithoutPatientProfileNestedInput;
    background?: Prisma.PatientBackgroundUncheckedUpdateOneWithoutPatientProfileNestedInput;
    backgroundVersions?: Prisma.PatientBackgroundVersionUncheckedUpdateManyWithoutPatientProfileNestedInput;
    appointments?: Prisma.AppointmentUncheckedUpdateManyWithoutPatientProfileNestedInput;
    grantedAccess?: Prisma.PatientDoctorAccessUncheckedUpdateManyWithoutPatientProfileNestedInput;
};
export type PatientProfileCreateWithoutIdentificationInput = {
    id?: string;
    onboardingCompleted?: boolean;
    currentStep?: number;
    completedSteps?: Prisma.PatientProfileCreatecompletedStepsInput | number[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPatientProfileInput;
    emergencyContacts?: Prisma.EmergencyContactCreateNestedManyWithoutPatientProfileInput;
    background?: Prisma.PatientBackgroundCreateNestedOneWithoutPatientProfileInput;
    backgroundVersions?: Prisma.PatientBackgroundVersionCreateNestedManyWithoutPatientProfileInput;
    appointments?: Prisma.AppointmentCreateNestedManyWithoutPatientProfileInput;
    grantedAccess?: Prisma.PatientDoctorAccessCreateNestedManyWithoutPatientProfileInput;
};
export type PatientProfileUncheckedCreateWithoutIdentificationInput = {
    id?: string;
    userId: string;
    onboardingCompleted?: boolean;
    currentStep?: number;
    completedSteps?: Prisma.PatientProfileCreatecompletedStepsInput | number[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    emergencyContacts?: Prisma.EmergencyContactUncheckedCreateNestedManyWithoutPatientProfileInput;
    background?: Prisma.PatientBackgroundUncheckedCreateNestedOneWithoutPatientProfileInput;
    backgroundVersions?: Prisma.PatientBackgroundVersionUncheckedCreateNestedManyWithoutPatientProfileInput;
    appointments?: Prisma.AppointmentUncheckedCreateNestedManyWithoutPatientProfileInput;
    grantedAccess?: Prisma.PatientDoctorAccessUncheckedCreateNestedManyWithoutPatientProfileInput;
};
export type PatientProfileCreateOrConnectWithoutIdentificationInput = {
    where: Prisma.PatientProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientProfileCreateWithoutIdentificationInput, Prisma.PatientProfileUncheckedCreateWithoutIdentificationInput>;
};
export type PatientProfileUpsertWithoutIdentificationInput = {
    update: Prisma.XOR<Prisma.PatientProfileUpdateWithoutIdentificationInput, Prisma.PatientProfileUncheckedUpdateWithoutIdentificationInput>;
    create: Prisma.XOR<Prisma.PatientProfileCreateWithoutIdentificationInput, Prisma.PatientProfileUncheckedCreateWithoutIdentificationInput>;
    where?: Prisma.PatientProfileWhereInput;
};
export type PatientProfileUpdateToOneWithWhereWithoutIdentificationInput = {
    where?: Prisma.PatientProfileWhereInput;
    data: Prisma.XOR<Prisma.PatientProfileUpdateWithoutIdentificationInput, Prisma.PatientProfileUncheckedUpdateWithoutIdentificationInput>;
};
export type PatientProfileUpdateWithoutIdentificationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    onboardingCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    currentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    completedSteps?: Prisma.PatientProfileUpdatecompletedStepsInput | number[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPatientProfileNestedInput;
    emergencyContacts?: Prisma.EmergencyContactUpdateManyWithoutPatientProfileNestedInput;
    background?: Prisma.PatientBackgroundUpdateOneWithoutPatientProfileNestedInput;
    backgroundVersions?: Prisma.PatientBackgroundVersionUpdateManyWithoutPatientProfileNestedInput;
    appointments?: Prisma.AppointmentUpdateManyWithoutPatientProfileNestedInput;
    grantedAccess?: Prisma.PatientDoctorAccessUpdateManyWithoutPatientProfileNestedInput;
};
export type PatientProfileUncheckedUpdateWithoutIdentificationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    onboardingCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    currentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    completedSteps?: Prisma.PatientProfileUpdatecompletedStepsInput | number[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    emergencyContacts?: Prisma.EmergencyContactUncheckedUpdateManyWithoutPatientProfileNestedInput;
    background?: Prisma.PatientBackgroundUncheckedUpdateOneWithoutPatientProfileNestedInput;
    backgroundVersions?: Prisma.PatientBackgroundVersionUncheckedUpdateManyWithoutPatientProfileNestedInput;
    appointments?: Prisma.AppointmentUncheckedUpdateManyWithoutPatientProfileNestedInput;
    grantedAccess?: Prisma.PatientDoctorAccessUncheckedUpdateManyWithoutPatientProfileNestedInput;
};
export type PatientProfileCreateWithoutEmergencyContactsInput = {
    id?: string;
    onboardingCompleted?: boolean;
    currentStep?: number;
    completedSteps?: Prisma.PatientProfileCreatecompletedStepsInput | number[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPatientProfileInput;
    identification?: Prisma.PatientIdentificationCreateNestedOneWithoutPatientProfileInput;
    background?: Prisma.PatientBackgroundCreateNestedOneWithoutPatientProfileInput;
    backgroundVersions?: Prisma.PatientBackgroundVersionCreateNestedManyWithoutPatientProfileInput;
    appointments?: Prisma.AppointmentCreateNestedManyWithoutPatientProfileInput;
    grantedAccess?: Prisma.PatientDoctorAccessCreateNestedManyWithoutPatientProfileInput;
};
export type PatientProfileUncheckedCreateWithoutEmergencyContactsInput = {
    id?: string;
    userId: string;
    onboardingCompleted?: boolean;
    currentStep?: number;
    completedSteps?: Prisma.PatientProfileCreatecompletedStepsInput | number[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    identification?: Prisma.PatientIdentificationUncheckedCreateNestedOneWithoutPatientProfileInput;
    background?: Prisma.PatientBackgroundUncheckedCreateNestedOneWithoutPatientProfileInput;
    backgroundVersions?: Prisma.PatientBackgroundVersionUncheckedCreateNestedManyWithoutPatientProfileInput;
    appointments?: Prisma.AppointmentUncheckedCreateNestedManyWithoutPatientProfileInput;
    grantedAccess?: Prisma.PatientDoctorAccessUncheckedCreateNestedManyWithoutPatientProfileInput;
};
export type PatientProfileCreateOrConnectWithoutEmergencyContactsInput = {
    where: Prisma.PatientProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientProfileCreateWithoutEmergencyContactsInput, Prisma.PatientProfileUncheckedCreateWithoutEmergencyContactsInput>;
};
export type PatientProfileUpsertWithoutEmergencyContactsInput = {
    update: Prisma.XOR<Prisma.PatientProfileUpdateWithoutEmergencyContactsInput, Prisma.PatientProfileUncheckedUpdateWithoutEmergencyContactsInput>;
    create: Prisma.XOR<Prisma.PatientProfileCreateWithoutEmergencyContactsInput, Prisma.PatientProfileUncheckedCreateWithoutEmergencyContactsInput>;
    where?: Prisma.PatientProfileWhereInput;
};
export type PatientProfileUpdateToOneWithWhereWithoutEmergencyContactsInput = {
    where?: Prisma.PatientProfileWhereInput;
    data: Prisma.XOR<Prisma.PatientProfileUpdateWithoutEmergencyContactsInput, Prisma.PatientProfileUncheckedUpdateWithoutEmergencyContactsInput>;
};
export type PatientProfileUpdateWithoutEmergencyContactsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    onboardingCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    currentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    completedSteps?: Prisma.PatientProfileUpdatecompletedStepsInput | number[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPatientProfileNestedInput;
    identification?: Prisma.PatientIdentificationUpdateOneWithoutPatientProfileNestedInput;
    background?: Prisma.PatientBackgroundUpdateOneWithoutPatientProfileNestedInput;
    backgroundVersions?: Prisma.PatientBackgroundVersionUpdateManyWithoutPatientProfileNestedInput;
    appointments?: Prisma.AppointmentUpdateManyWithoutPatientProfileNestedInput;
    grantedAccess?: Prisma.PatientDoctorAccessUpdateManyWithoutPatientProfileNestedInput;
};
export type PatientProfileUncheckedUpdateWithoutEmergencyContactsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    onboardingCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    currentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    completedSteps?: Prisma.PatientProfileUpdatecompletedStepsInput | number[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    identification?: Prisma.PatientIdentificationUncheckedUpdateOneWithoutPatientProfileNestedInput;
    background?: Prisma.PatientBackgroundUncheckedUpdateOneWithoutPatientProfileNestedInput;
    backgroundVersions?: Prisma.PatientBackgroundVersionUncheckedUpdateManyWithoutPatientProfileNestedInput;
    appointments?: Prisma.AppointmentUncheckedUpdateManyWithoutPatientProfileNestedInput;
    grantedAccess?: Prisma.PatientDoctorAccessUncheckedUpdateManyWithoutPatientProfileNestedInput;
};
export type PatientProfileCreateWithoutBackgroundInput = {
    id?: string;
    onboardingCompleted?: boolean;
    currentStep?: number;
    completedSteps?: Prisma.PatientProfileCreatecompletedStepsInput | number[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPatientProfileInput;
    identification?: Prisma.PatientIdentificationCreateNestedOneWithoutPatientProfileInput;
    emergencyContacts?: Prisma.EmergencyContactCreateNestedManyWithoutPatientProfileInput;
    backgroundVersions?: Prisma.PatientBackgroundVersionCreateNestedManyWithoutPatientProfileInput;
    appointments?: Prisma.AppointmentCreateNestedManyWithoutPatientProfileInput;
    grantedAccess?: Prisma.PatientDoctorAccessCreateNestedManyWithoutPatientProfileInput;
};
export type PatientProfileUncheckedCreateWithoutBackgroundInput = {
    id?: string;
    userId: string;
    onboardingCompleted?: boolean;
    currentStep?: number;
    completedSteps?: Prisma.PatientProfileCreatecompletedStepsInput | number[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    identification?: Prisma.PatientIdentificationUncheckedCreateNestedOneWithoutPatientProfileInput;
    emergencyContacts?: Prisma.EmergencyContactUncheckedCreateNestedManyWithoutPatientProfileInput;
    backgroundVersions?: Prisma.PatientBackgroundVersionUncheckedCreateNestedManyWithoutPatientProfileInput;
    appointments?: Prisma.AppointmentUncheckedCreateNestedManyWithoutPatientProfileInput;
    grantedAccess?: Prisma.PatientDoctorAccessUncheckedCreateNestedManyWithoutPatientProfileInput;
};
export type PatientProfileCreateOrConnectWithoutBackgroundInput = {
    where: Prisma.PatientProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientProfileCreateWithoutBackgroundInput, Prisma.PatientProfileUncheckedCreateWithoutBackgroundInput>;
};
export type PatientProfileUpsertWithoutBackgroundInput = {
    update: Prisma.XOR<Prisma.PatientProfileUpdateWithoutBackgroundInput, Prisma.PatientProfileUncheckedUpdateWithoutBackgroundInput>;
    create: Prisma.XOR<Prisma.PatientProfileCreateWithoutBackgroundInput, Prisma.PatientProfileUncheckedCreateWithoutBackgroundInput>;
    where?: Prisma.PatientProfileWhereInput;
};
export type PatientProfileUpdateToOneWithWhereWithoutBackgroundInput = {
    where?: Prisma.PatientProfileWhereInput;
    data: Prisma.XOR<Prisma.PatientProfileUpdateWithoutBackgroundInput, Prisma.PatientProfileUncheckedUpdateWithoutBackgroundInput>;
};
export type PatientProfileUpdateWithoutBackgroundInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    onboardingCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    currentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    completedSteps?: Prisma.PatientProfileUpdatecompletedStepsInput | number[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPatientProfileNestedInput;
    identification?: Prisma.PatientIdentificationUpdateOneWithoutPatientProfileNestedInput;
    emergencyContacts?: Prisma.EmergencyContactUpdateManyWithoutPatientProfileNestedInput;
    backgroundVersions?: Prisma.PatientBackgroundVersionUpdateManyWithoutPatientProfileNestedInput;
    appointments?: Prisma.AppointmentUpdateManyWithoutPatientProfileNestedInput;
    grantedAccess?: Prisma.PatientDoctorAccessUpdateManyWithoutPatientProfileNestedInput;
};
export type PatientProfileUncheckedUpdateWithoutBackgroundInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    onboardingCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    currentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    completedSteps?: Prisma.PatientProfileUpdatecompletedStepsInput | number[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    identification?: Prisma.PatientIdentificationUncheckedUpdateOneWithoutPatientProfileNestedInput;
    emergencyContacts?: Prisma.EmergencyContactUncheckedUpdateManyWithoutPatientProfileNestedInput;
    backgroundVersions?: Prisma.PatientBackgroundVersionUncheckedUpdateManyWithoutPatientProfileNestedInput;
    appointments?: Prisma.AppointmentUncheckedUpdateManyWithoutPatientProfileNestedInput;
    grantedAccess?: Prisma.PatientDoctorAccessUncheckedUpdateManyWithoutPatientProfileNestedInput;
};
export type PatientProfileCreateWithoutBackgroundVersionsInput = {
    id?: string;
    onboardingCompleted?: boolean;
    currentStep?: number;
    completedSteps?: Prisma.PatientProfileCreatecompletedStepsInput | number[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPatientProfileInput;
    identification?: Prisma.PatientIdentificationCreateNestedOneWithoutPatientProfileInput;
    emergencyContacts?: Prisma.EmergencyContactCreateNestedManyWithoutPatientProfileInput;
    background?: Prisma.PatientBackgroundCreateNestedOneWithoutPatientProfileInput;
    appointments?: Prisma.AppointmentCreateNestedManyWithoutPatientProfileInput;
    grantedAccess?: Prisma.PatientDoctorAccessCreateNestedManyWithoutPatientProfileInput;
};
export type PatientProfileUncheckedCreateWithoutBackgroundVersionsInput = {
    id?: string;
    userId: string;
    onboardingCompleted?: boolean;
    currentStep?: number;
    completedSteps?: Prisma.PatientProfileCreatecompletedStepsInput | number[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    identification?: Prisma.PatientIdentificationUncheckedCreateNestedOneWithoutPatientProfileInput;
    emergencyContacts?: Prisma.EmergencyContactUncheckedCreateNestedManyWithoutPatientProfileInput;
    background?: Prisma.PatientBackgroundUncheckedCreateNestedOneWithoutPatientProfileInput;
    appointments?: Prisma.AppointmentUncheckedCreateNestedManyWithoutPatientProfileInput;
    grantedAccess?: Prisma.PatientDoctorAccessUncheckedCreateNestedManyWithoutPatientProfileInput;
};
export type PatientProfileCreateOrConnectWithoutBackgroundVersionsInput = {
    where: Prisma.PatientProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientProfileCreateWithoutBackgroundVersionsInput, Prisma.PatientProfileUncheckedCreateWithoutBackgroundVersionsInput>;
};
export type PatientProfileUpsertWithoutBackgroundVersionsInput = {
    update: Prisma.XOR<Prisma.PatientProfileUpdateWithoutBackgroundVersionsInput, Prisma.PatientProfileUncheckedUpdateWithoutBackgroundVersionsInput>;
    create: Prisma.XOR<Prisma.PatientProfileCreateWithoutBackgroundVersionsInput, Prisma.PatientProfileUncheckedCreateWithoutBackgroundVersionsInput>;
    where?: Prisma.PatientProfileWhereInput;
};
export type PatientProfileUpdateToOneWithWhereWithoutBackgroundVersionsInput = {
    where?: Prisma.PatientProfileWhereInput;
    data: Prisma.XOR<Prisma.PatientProfileUpdateWithoutBackgroundVersionsInput, Prisma.PatientProfileUncheckedUpdateWithoutBackgroundVersionsInput>;
};
export type PatientProfileUpdateWithoutBackgroundVersionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    onboardingCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    currentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    completedSteps?: Prisma.PatientProfileUpdatecompletedStepsInput | number[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPatientProfileNestedInput;
    identification?: Prisma.PatientIdentificationUpdateOneWithoutPatientProfileNestedInput;
    emergencyContacts?: Prisma.EmergencyContactUpdateManyWithoutPatientProfileNestedInput;
    background?: Prisma.PatientBackgroundUpdateOneWithoutPatientProfileNestedInput;
    appointments?: Prisma.AppointmentUpdateManyWithoutPatientProfileNestedInput;
    grantedAccess?: Prisma.PatientDoctorAccessUpdateManyWithoutPatientProfileNestedInput;
};
export type PatientProfileUncheckedUpdateWithoutBackgroundVersionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    onboardingCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    currentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    completedSteps?: Prisma.PatientProfileUpdatecompletedStepsInput | number[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    identification?: Prisma.PatientIdentificationUncheckedUpdateOneWithoutPatientProfileNestedInput;
    emergencyContacts?: Prisma.EmergencyContactUncheckedUpdateManyWithoutPatientProfileNestedInput;
    background?: Prisma.PatientBackgroundUncheckedUpdateOneWithoutPatientProfileNestedInput;
    appointments?: Prisma.AppointmentUncheckedUpdateManyWithoutPatientProfileNestedInput;
    grantedAccess?: Prisma.PatientDoctorAccessUncheckedUpdateManyWithoutPatientProfileNestedInput;
};
export type PatientProfileCreateWithoutAppointmentsInput = {
    id?: string;
    onboardingCompleted?: boolean;
    currentStep?: number;
    completedSteps?: Prisma.PatientProfileCreatecompletedStepsInput | number[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPatientProfileInput;
    identification?: Prisma.PatientIdentificationCreateNestedOneWithoutPatientProfileInput;
    emergencyContacts?: Prisma.EmergencyContactCreateNestedManyWithoutPatientProfileInput;
    background?: Prisma.PatientBackgroundCreateNestedOneWithoutPatientProfileInput;
    backgroundVersions?: Prisma.PatientBackgroundVersionCreateNestedManyWithoutPatientProfileInput;
    grantedAccess?: Prisma.PatientDoctorAccessCreateNestedManyWithoutPatientProfileInput;
};
export type PatientProfileUncheckedCreateWithoutAppointmentsInput = {
    id?: string;
    userId: string;
    onboardingCompleted?: boolean;
    currentStep?: number;
    completedSteps?: Prisma.PatientProfileCreatecompletedStepsInput | number[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    identification?: Prisma.PatientIdentificationUncheckedCreateNestedOneWithoutPatientProfileInput;
    emergencyContacts?: Prisma.EmergencyContactUncheckedCreateNestedManyWithoutPatientProfileInput;
    background?: Prisma.PatientBackgroundUncheckedCreateNestedOneWithoutPatientProfileInput;
    backgroundVersions?: Prisma.PatientBackgroundVersionUncheckedCreateNestedManyWithoutPatientProfileInput;
    grantedAccess?: Prisma.PatientDoctorAccessUncheckedCreateNestedManyWithoutPatientProfileInput;
};
export type PatientProfileCreateOrConnectWithoutAppointmentsInput = {
    where: Prisma.PatientProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientProfileCreateWithoutAppointmentsInput, Prisma.PatientProfileUncheckedCreateWithoutAppointmentsInput>;
};
export type PatientProfileUpsertWithoutAppointmentsInput = {
    update: Prisma.XOR<Prisma.PatientProfileUpdateWithoutAppointmentsInput, Prisma.PatientProfileUncheckedUpdateWithoutAppointmentsInput>;
    create: Prisma.XOR<Prisma.PatientProfileCreateWithoutAppointmentsInput, Prisma.PatientProfileUncheckedCreateWithoutAppointmentsInput>;
    where?: Prisma.PatientProfileWhereInput;
};
export type PatientProfileUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: Prisma.PatientProfileWhereInput;
    data: Prisma.XOR<Prisma.PatientProfileUpdateWithoutAppointmentsInput, Prisma.PatientProfileUncheckedUpdateWithoutAppointmentsInput>;
};
export type PatientProfileUpdateWithoutAppointmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    onboardingCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    currentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    completedSteps?: Prisma.PatientProfileUpdatecompletedStepsInput | number[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPatientProfileNestedInput;
    identification?: Prisma.PatientIdentificationUpdateOneWithoutPatientProfileNestedInput;
    emergencyContacts?: Prisma.EmergencyContactUpdateManyWithoutPatientProfileNestedInput;
    background?: Prisma.PatientBackgroundUpdateOneWithoutPatientProfileNestedInput;
    backgroundVersions?: Prisma.PatientBackgroundVersionUpdateManyWithoutPatientProfileNestedInput;
    grantedAccess?: Prisma.PatientDoctorAccessUpdateManyWithoutPatientProfileNestedInput;
};
export type PatientProfileUncheckedUpdateWithoutAppointmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    onboardingCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    currentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    completedSteps?: Prisma.PatientProfileUpdatecompletedStepsInput | number[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    identification?: Prisma.PatientIdentificationUncheckedUpdateOneWithoutPatientProfileNestedInput;
    emergencyContacts?: Prisma.EmergencyContactUncheckedUpdateManyWithoutPatientProfileNestedInput;
    background?: Prisma.PatientBackgroundUncheckedUpdateOneWithoutPatientProfileNestedInput;
    backgroundVersions?: Prisma.PatientBackgroundVersionUncheckedUpdateManyWithoutPatientProfileNestedInput;
    grantedAccess?: Prisma.PatientDoctorAccessUncheckedUpdateManyWithoutPatientProfileNestedInput;
};
export type PatientProfileCreateWithoutGrantedAccessInput = {
    id?: string;
    onboardingCompleted?: boolean;
    currentStep?: number;
    completedSteps?: Prisma.PatientProfileCreatecompletedStepsInput | number[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPatientProfileInput;
    identification?: Prisma.PatientIdentificationCreateNestedOneWithoutPatientProfileInput;
    emergencyContacts?: Prisma.EmergencyContactCreateNestedManyWithoutPatientProfileInput;
    background?: Prisma.PatientBackgroundCreateNestedOneWithoutPatientProfileInput;
    backgroundVersions?: Prisma.PatientBackgroundVersionCreateNestedManyWithoutPatientProfileInput;
    appointments?: Prisma.AppointmentCreateNestedManyWithoutPatientProfileInput;
};
export type PatientProfileUncheckedCreateWithoutGrantedAccessInput = {
    id?: string;
    userId: string;
    onboardingCompleted?: boolean;
    currentStep?: number;
    completedSteps?: Prisma.PatientProfileCreatecompletedStepsInput | number[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    identification?: Prisma.PatientIdentificationUncheckedCreateNestedOneWithoutPatientProfileInput;
    emergencyContacts?: Prisma.EmergencyContactUncheckedCreateNestedManyWithoutPatientProfileInput;
    background?: Prisma.PatientBackgroundUncheckedCreateNestedOneWithoutPatientProfileInput;
    backgroundVersions?: Prisma.PatientBackgroundVersionUncheckedCreateNestedManyWithoutPatientProfileInput;
    appointments?: Prisma.AppointmentUncheckedCreateNestedManyWithoutPatientProfileInput;
};
export type PatientProfileCreateOrConnectWithoutGrantedAccessInput = {
    where: Prisma.PatientProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientProfileCreateWithoutGrantedAccessInput, Prisma.PatientProfileUncheckedCreateWithoutGrantedAccessInput>;
};
export type PatientProfileUpsertWithoutGrantedAccessInput = {
    update: Prisma.XOR<Prisma.PatientProfileUpdateWithoutGrantedAccessInput, Prisma.PatientProfileUncheckedUpdateWithoutGrantedAccessInput>;
    create: Prisma.XOR<Prisma.PatientProfileCreateWithoutGrantedAccessInput, Prisma.PatientProfileUncheckedCreateWithoutGrantedAccessInput>;
    where?: Prisma.PatientProfileWhereInput;
};
export type PatientProfileUpdateToOneWithWhereWithoutGrantedAccessInput = {
    where?: Prisma.PatientProfileWhereInput;
    data: Prisma.XOR<Prisma.PatientProfileUpdateWithoutGrantedAccessInput, Prisma.PatientProfileUncheckedUpdateWithoutGrantedAccessInput>;
};
export type PatientProfileUpdateWithoutGrantedAccessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    onboardingCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    currentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    completedSteps?: Prisma.PatientProfileUpdatecompletedStepsInput | number[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPatientProfileNestedInput;
    identification?: Prisma.PatientIdentificationUpdateOneWithoutPatientProfileNestedInput;
    emergencyContacts?: Prisma.EmergencyContactUpdateManyWithoutPatientProfileNestedInput;
    background?: Prisma.PatientBackgroundUpdateOneWithoutPatientProfileNestedInput;
    backgroundVersions?: Prisma.PatientBackgroundVersionUpdateManyWithoutPatientProfileNestedInput;
    appointments?: Prisma.AppointmentUpdateManyWithoutPatientProfileNestedInput;
};
export type PatientProfileUncheckedUpdateWithoutGrantedAccessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    onboardingCompleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    currentStep?: Prisma.IntFieldUpdateOperationsInput | number;
    completedSteps?: Prisma.PatientProfileUpdatecompletedStepsInput | number[];
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    identification?: Prisma.PatientIdentificationUncheckedUpdateOneWithoutPatientProfileNestedInput;
    emergencyContacts?: Prisma.EmergencyContactUncheckedUpdateManyWithoutPatientProfileNestedInput;
    background?: Prisma.PatientBackgroundUncheckedUpdateOneWithoutPatientProfileNestedInput;
    backgroundVersions?: Prisma.PatientBackgroundVersionUncheckedUpdateManyWithoutPatientProfileNestedInput;
    appointments?: Prisma.AppointmentUncheckedUpdateManyWithoutPatientProfileNestedInput;
};
export type PatientProfileCountOutputType = {
    emergencyContacts: number;
    backgroundVersions: number;
    appointments: number;
    grantedAccess: number;
};
export type PatientProfileCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    emergencyContacts?: boolean | PatientProfileCountOutputTypeCountEmergencyContactsArgs;
    backgroundVersions?: boolean | PatientProfileCountOutputTypeCountBackgroundVersionsArgs;
    appointments?: boolean | PatientProfileCountOutputTypeCountAppointmentsArgs;
    grantedAccess?: boolean | PatientProfileCountOutputTypeCountGrantedAccessArgs;
};
export type PatientProfileCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientProfileCountOutputTypeSelect<ExtArgs> | null;
};
export type PatientProfileCountOutputTypeCountEmergencyContactsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmergencyContactWhereInput;
};
export type PatientProfileCountOutputTypeCountBackgroundVersionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientBackgroundVersionWhereInput;
};
export type PatientProfileCountOutputTypeCountAppointmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AppointmentWhereInput;
};
export type PatientProfileCountOutputTypeCountGrantedAccessArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientDoctorAccessWhereInput;
};
export type PatientProfileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    onboardingCompleted?: boolean;
    currentStep?: boolean;
    completedSteps?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    identification?: boolean | Prisma.PatientProfile$identificationArgs<ExtArgs>;
    emergencyContacts?: boolean | Prisma.PatientProfile$emergencyContactsArgs<ExtArgs>;
    background?: boolean | Prisma.PatientProfile$backgroundArgs<ExtArgs>;
    backgroundVersions?: boolean | Prisma.PatientProfile$backgroundVersionsArgs<ExtArgs>;
    appointments?: boolean | Prisma.PatientProfile$appointmentsArgs<ExtArgs>;
    grantedAccess?: boolean | Prisma.PatientProfile$grantedAccessArgs<ExtArgs>;
    _count?: boolean | Prisma.PatientProfileCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patientProfile"]>;
export type PatientProfileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    onboardingCompleted?: boolean;
    currentStep?: boolean;
    completedSteps?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patientProfile"]>;
export type PatientProfileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    onboardingCompleted?: boolean;
    currentStep?: boolean;
    completedSteps?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patientProfile"]>;
export type PatientProfileSelectScalar = {
    id?: boolean;
    userId?: boolean;
    onboardingCompleted?: boolean;
    currentStep?: boolean;
    completedSteps?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PatientProfileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "onboardingCompleted" | "currentStep" | "completedSteps" | "createdAt" | "updatedAt", ExtArgs["result"]["patientProfile"]>;
export type PatientProfileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    identification?: boolean | Prisma.PatientProfile$identificationArgs<ExtArgs>;
    emergencyContacts?: boolean | Prisma.PatientProfile$emergencyContactsArgs<ExtArgs>;
    background?: boolean | Prisma.PatientProfile$backgroundArgs<ExtArgs>;
    backgroundVersions?: boolean | Prisma.PatientProfile$backgroundVersionsArgs<ExtArgs>;
    appointments?: boolean | Prisma.PatientProfile$appointmentsArgs<ExtArgs>;
    grantedAccess?: boolean | Prisma.PatientProfile$grantedAccessArgs<ExtArgs>;
    _count?: boolean | Prisma.PatientProfileCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PatientProfileIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type PatientProfileIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $PatientProfilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PatientProfile";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        identification: Prisma.$PatientIdentificationPayload<ExtArgs> | null;
        emergencyContacts: Prisma.$EmergencyContactPayload<ExtArgs>[];
        background: Prisma.$PatientBackgroundPayload<ExtArgs> | null;
        backgroundVersions: Prisma.$PatientBackgroundVersionPayload<ExtArgs>[];
        appointments: Prisma.$AppointmentPayload<ExtArgs>[];
        grantedAccess: Prisma.$PatientDoctorAccessPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        onboardingCompleted: boolean;
        currentStep: number;
        completedSteps: number[];
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["patientProfile"]>;
    composites: {};
};
export type PatientProfileGetPayload<S extends boolean | null | undefined | PatientProfileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PatientProfilePayload, S>;
export type PatientProfileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PatientProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PatientProfileCountAggregateInputType | true;
};
export interface PatientProfileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PatientProfile'];
        meta: {
            name: 'PatientProfile';
        };
    };
    findUnique<T extends PatientProfileFindUniqueArgs>(args: Prisma.SelectSubset<T, PatientProfileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PatientProfileClient<runtime.Types.Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PatientProfileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PatientProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PatientProfileClient<runtime.Types.Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PatientProfileFindFirstArgs>(args?: Prisma.SelectSubset<T, PatientProfileFindFirstArgs<ExtArgs>>): Prisma.Prisma__PatientProfileClient<runtime.Types.Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PatientProfileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PatientProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PatientProfileClient<runtime.Types.Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PatientProfileFindManyArgs>(args?: Prisma.SelectSubset<T, PatientProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PatientProfileCreateArgs>(args: Prisma.SelectSubset<T, PatientProfileCreateArgs<ExtArgs>>): Prisma.Prisma__PatientProfileClient<runtime.Types.Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PatientProfileCreateManyArgs>(args?: Prisma.SelectSubset<T, PatientProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PatientProfileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PatientProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PatientProfileDeleteArgs>(args: Prisma.SelectSubset<T, PatientProfileDeleteArgs<ExtArgs>>): Prisma.Prisma__PatientProfileClient<runtime.Types.Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PatientProfileUpdateArgs>(args: Prisma.SelectSubset<T, PatientProfileUpdateArgs<ExtArgs>>): Prisma.Prisma__PatientProfileClient<runtime.Types.Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PatientProfileDeleteManyArgs>(args?: Prisma.SelectSubset<T, PatientProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PatientProfileUpdateManyArgs>(args: Prisma.SelectSubset<T, PatientProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PatientProfileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PatientProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PatientProfileUpsertArgs>(args: Prisma.SelectSubset<T, PatientProfileUpsertArgs<ExtArgs>>): Prisma.Prisma__PatientProfileClient<runtime.Types.Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PatientProfileCountArgs>(args?: Prisma.Subset<T, PatientProfileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PatientProfileCountAggregateOutputType> : number>;
    aggregate<T extends PatientProfileAggregateArgs>(args: Prisma.Subset<T, PatientProfileAggregateArgs>): Prisma.PrismaPromise<GetPatientProfileAggregateType<T>>;
    groupBy<T extends PatientProfileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PatientProfileGroupByArgs['orderBy'];
    } : {
        orderBy?: PatientProfileGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PatientProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PatientProfileFieldRefs;
}
export interface Prisma__PatientProfileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    identification<T extends Prisma.PatientProfile$identificationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PatientProfile$identificationArgs<ExtArgs>>): Prisma.Prisma__PatientIdentificationClient<runtime.Types.Result.GetResult<Prisma.$PatientIdentificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    emergencyContacts<T extends Prisma.PatientProfile$emergencyContactsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PatientProfile$emergencyContactsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    background<T extends Prisma.PatientProfile$backgroundArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PatientProfile$backgroundArgs<ExtArgs>>): Prisma.Prisma__PatientBackgroundClient<runtime.Types.Result.GetResult<Prisma.$PatientBackgroundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    backgroundVersions<T extends Prisma.PatientProfile$backgroundVersionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PatientProfile$backgroundVersionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientBackgroundVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    appointments<T extends Prisma.PatientProfile$appointmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PatientProfile$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    grantedAccess<T extends Prisma.PatientProfile$grantedAccessArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PatientProfile$grantedAccessArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatientDoctorAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PatientProfileFieldRefs {
    readonly id: Prisma.FieldRef<"PatientProfile", 'String'>;
    readonly userId: Prisma.FieldRef<"PatientProfile", 'String'>;
    readonly onboardingCompleted: Prisma.FieldRef<"PatientProfile", 'Boolean'>;
    readonly currentStep: Prisma.FieldRef<"PatientProfile", 'Int'>;
    readonly completedSteps: Prisma.FieldRef<"PatientProfile", 'Int[]'>;
    readonly createdAt: Prisma.FieldRef<"PatientProfile", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"PatientProfile", 'DateTime'>;
}
export type PatientProfileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientProfileSelect<ExtArgs> | null;
    omit?: Prisma.PatientProfileOmit<ExtArgs> | null;
    include?: Prisma.PatientProfileInclude<ExtArgs> | null;
    where: Prisma.PatientProfileWhereUniqueInput;
};
export type PatientProfileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientProfileSelect<ExtArgs> | null;
    omit?: Prisma.PatientProfileOmit<ExtArgs> | null;
    include?: Prisma.PatientProfileInclude<ExtArgs> | null;
    where: Prisma.PatientProfileWhereUniqueInput;
};
export type PatientProfileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientProfileSelect<ExtArgs> | null;
    omit?: Prisma.PatientProfileOmit<ExtArgs> | null;
    include?: Prisma.PatientProfileInclude<ExtArgs> | null;
    where?: Prisma.PatientProfileWhereInput;
    orderBy?: Prisma.PatientProfileOrderByWithRelationInput | Prisma.PatientProfileOrderByWithRelationInput[];
    cursor?: Prisma.PatientProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientProfileScalarFieldEnum | Prisma.PatientProfileScalarFieldEnum[];
};
export type PatientProfileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientProfileSelect<ExtArgs> | null;
    omit?: Prisma.PatientProfileOmit<ExtArgs> | null;
    include?: Prisma.PatientProfileInclude<ExtArgs> | null;
    where?: Prisma.PatientProfileWhereInput;
    orderBy?: Prisma.PatientProfileOrderByWithRelationInput | Prisma.PatientProfileOrderByWithRelationInput[];
    cursor?: Prisma.PatientProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientProfileScalarFieldEnum | Prisma.PatientProfileScalarFieldEnum[];
};
export type PatientProfileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientProfileSelect<ExtArgs> | null;
    omit?: Prisma.PatientProfileOmit<ExtArgs> | null;
    include?: Prisma.PatientProfileInclude<ExtArgs> | null;
    where?: Prisma.PatientProfileWhereInput;
    orderBy?: Prisma.PatientProfileOrderByWithRelationInput | Prisma.PatientProfileOrderByWithRelationInput[];
    cursor?: Prisma.PatientProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientProfileScalarFieldEnum | Prisma.PatientProfileScalarFieldEnum[];
};
export type PatientProfileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientProfileSelect<ExtArgs> | null;
    omit?: Prisma.PatientProfileOmit<ExtArgs> | null;
    include?: Prisma.PatientProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientProfileCreateInput, Prisma.PatientProfileUncheckedCreateInput>;
};
export type PatientProfileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PatientProfileCreateManyInput | Prisma.PatientProfileCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PatientProfileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientProfileSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PatientProfileOmit<ExtArgs> | null;
    data: Prisma.PatientProfileCreateManyInput | Prisma.PatientProfileCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PatientProfileIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PatientProfileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientProfileSelect<ExtArgs> | null;
    omit?: Prisma.PatientProfileOmit<ExtArgs> | null;
    include?: Prisma.PatientProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientProfileUpdateInput, Prisma.PatientProfileUncheckedUpdateInput>;
    where: Prisma.PatientProfileWhereUniqueInput;
};
export type PatientProfileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PatientProfileUpdateManyMutationInput, Prisma.PatientProfileUncheckedUpdateManyInput>;
    where?: Prisma.PatientProfileWhereInput;
    limit?: number;
};
export type PatientProfileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientProfileSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PatientProfileOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatientProfileUpdateManyMutationInput, Prisma.PatientProfileUncheckedUpdateManyInput>;
    where?: Prisma.PatientProfileWhereInput;
    limit?: number;
    include?: Prisma.PatientProfileIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PatientProfileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientProfileSelect<ExtArgs> | null;
    omit?: Prisma.PatientProfileOmit<ExtArgs> | null;
    include?: Prisma.PatientProfileInclude<ExtArgs> | null;
    where: Prisma.PatientProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatientProfileCreateInput, Prisma.PatientProfileUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PatientProfileUpdateInput, Prisma.PatientProfileUncheckedUpdateInput>;
};
export type PatientProfileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientProfileSelect<ExtArgs> | null;
    omit?: Prisma.PatientProfileOmit<ExtArgs> | null;
    include?: Prisma.PatientProfileInclude<ExtArgs> | null;
    where: Prisma.PatientProfileWhereUniqueInput;
};
export type PatientProfileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatientProfileWhereInput;
    limit?: number;
};
export type PatientProfile$identificationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientIdentificationSelect<ExtArgs> | null;
    omit?: Prisma.PatientIdentificationOmit<ExtArgs> | null;
    include?: Prisma.PatientIdentificationInclude<ExtArgs> | null;
    where?: Prisma.PatientIdentificationWhereInput;
};
export type PatientProfile$emergencyContactsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PatientProfile$backgroundArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientBackgroundSelect<ExtArgs> | null;
    omit?: Prisma.PatientBackgroundOmit<ExtArgs> | null;
    include?: Prisma.PatientBackgroundInclude<ExtArgs> | null;
    where?: Prisma.PatientBackgroundWhereInput;
};
export type PatientProfile$backgroundVersionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientBackgroundVersionSelect<ExtArgs> | null;
    omit?: Prisma.PatientBackgroundVersionOmit<ExtArgs> | null;
    include?: Prisma.PatientBackgroundVersionInclude<ExtArgs> | null;
    where?: Prisma.PatientBackgroundVersionWhereInput;
    orderBy?: Prisma.PatientBackgroundVersionOrderByWithRelationInput | Prisma.PatientBackgroundVersionOrderByWithRelationInput[];
    cursor?: Prisma.PatientBackgroundVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientBackgroundVersionScalarFieldEnum | Prisma.PatientBackgroundVersionScalarFieldEnum[];
};
export type PatientProfile$appointmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PatientProfile$grantedAccessArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientDoctorAccessSelect<ExtArgs> | null;
    omit?: Prisma.PatientDoctorAccessOmit<ExtArgs> | null;
    include?: Prisma.PatientDoctorAccessInclude<ExtArgs> | null;
    where?: Prisma.PatientDoctorAccessWhereInput;
    orderBy?: Prisma.PatientDoctorAccessOrderByWithRelationInput | Prisma.PatientDoctorAccessOrderByWithRelationInput[];
    cursor?: Prisma.PatientDoctorAccessWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatientDoctorAccessScalarFieldEnum | Prisma.PatientDoctorAccessScalarFieldEnum[];
};
export type PatientProfileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientProfileSelect<ExtArgs> | null;
    omit?: Prisma.PatientProfileOmit<ExtArgs> | null;
    include?: Prisma.PatientProfileInclude<ExtArgs> | null;
};

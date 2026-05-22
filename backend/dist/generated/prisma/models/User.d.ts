import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    passwordHash: string | null;
    emailVerifiedAt: Date | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    passwordHash: string | null;
    emailVerifiedAt: Date | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    passwordHash: number;
    emailVerifiedAt: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    emailVerifiedAt?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    emailVerifiedAt?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    emailVerifiedAt?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    email: string;
    passwordHash: string;
    emailVerifiedAt: Date | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    passwordHash?: Prisma.StringFilter<"User"> | string;
    emailVerifiedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    isActive?: Prisma.BoolFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    roles?: Prisma.UserRoleAssignmentListRelationFilter;
    patientProfile?: Prisma.XOR<Prisma.PatientProfileNullableScalarRelationFilter, Prisma.PatientProfileWhereInput> | null;
    doctorProfile?: Prisma.XOR<Prisma.DoctorProfileNullableScalarRelationFilter, Prisma.DoctorProfileWhereInput> | null;
    closedEncounters?: Prisma.ClinicalEncounterListRelationFilter;
    addendums?: Prisma.ClinicalAddendumListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    emailVerifiedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    roles?: Prisma.UserRoleAssignmentOrderByRelationAggregateInput;
    patientProfile?: Prisma.PatientProfileOrderByWithRelationInput;
    doctorProfile?: Prisma.DoctorProfileOrderByWithRelationInput;
    closedEncounters?: Prisma.ClinicalEncounterOrderByRelationAggregateInput;
    addendums?: Prisma.ClinicalAddendumOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    passwordHash?: Prisma.StringFilter<"User"> | string;
    emailVerifiedAt?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    isActive?: Prisma.BoolFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    roles?: Prisma.UserRoleAssignmentListRelationFilter;
    patientProfile?: Prisma.XOR<Prisma.PatientProfileNullableScalarRelationFilter, Prisma.PatientProfileWhereInput> | null;
    doctorProfile?: Prisma.XOR<Prisma.DoctorProfileNullableScalarRelationFilter, Prisma.DoctorProfileWhereInput> | null;
    closedEncounters?: Prisma.ClinicalEncounterListRelationFilter;
    addendums?: Prisma.ClinicalAddendumListRelationFilter;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    emailVerifiedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    passwordHash?: Prisma.StringWithAggregatesFilter<"User"> | string;
    emailVerifiedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id?: string;
    email: string;
    passwordHash: string;
    emailVerifiedAt?: Date | string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    roles?: Prisma.UserRoleAssignmentCreateNestedManyWithoutUserInput;
    patientProfile?: Prisma.PatientProfileCreateNestedOneWithoutUserInput;
    doctorProfile?: Prisma.DoctorProfileCreateNestedOneWithoutUserInput;
    closedEncounters?: Prisma.ClinicalEncounterCreateNestedManyWithoutClosedByInput;
    addendums?: Prisma.ClinicalAddendumCreateNestedManyWithoutAutorInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    passwordHash: string;
    emailVerifiedAt?: Date | string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    roles?: Prisma.UserRoleAssignmentUncheckedCreateNestedManyWithoutUserInput;
    patientProfile?: Prisma.PatientProfileUncheckedCreateNestedOneWithoutUserInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedCreateNestedOneWithoutUserInput;
    closedEncounters?: Prisma.ClinicalEncounterUncheckedCreateNestedManyWithoutClosedByInput;
    addendums?: Prisma.ClinicalAddendumUncheckedCreateNestedManyWithoutAutorInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: Prisma.UserRoleAssignmentUpdateManyWithoutUserNestedInput;
    patientProfile?: Prisma.PatientProfileUpdateOneWithoutUserNestedInput;
    doctorProfile?: Prisma.DoctorProfileUpdateOneWithoutUserNestedInput;
    closedEncounters?: Prisma.ClinicalEncounterUpdateManyWithoutClosedByNestedInput;
    addendums?: Prisma.ClinicalAddendumUpdateManyWithoutAutorNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: Prisma.UserRoleAssignmentUncheckedUpdateManyWithoutUserNestedInput;
    patientProfile?: Prisma.PatientProfileUncheckedUpdateOneWithoutUserNestedInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedUpdateOneWithoutUserNestedInput;
    closedEncounters?: Prisma.ClinicalEncounterUncheckedUpdateManyWithoutClosedByNestedInput;
    addendums?: Prisma.ClinicalAddendumUncheckedUpdateManyWithoutAutorNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    email: string;
    passwordHash: string;
    emailVerifiedAt?: Date | string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    emailVerifiedAt?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    emailVerifiedAt?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    emailVerifiedAt?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UserCreateNestedOneWithoutRolesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRolesInput, Prisma.UserUncheckedCreateWithoutRolesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRolesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutRolesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRolesInput, Prisma.UserUncheckedCreateWithoutRolesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRolesInput;
    upsert?: Prisma.UserUpsertWithoutRolesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutRolesInput, Prisma.UserUpdateWithoutRolesInput>, Prisma.UserUncheckedUpdateWithoutRolesInput>;
};
export type UserCreateNestedOneWithoutPatientProfileInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPatientProfileInput, Prisma.UserUncheckedCreateWithoutPatientProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPatientProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutPatientProfileNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPatientProfileInput, Prisma.UserUncheckedCreateWithoutPatientProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPatientProfileInput;
    upsert?: Prisma.UserUpsertWithoutPatientProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutPatientProfileInput, Prisma.UserUpdateWithoutPatientProfileInput>, Prisma.UserUncheckedUpdateWithoutPatientProfileInput>;
};
export type UserCreateNestedOneWithoutDoctorProfileInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutDoctorProfileInput, Prisma.UserUncheckedCreateWithoutDoctorProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutDoctorProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutDoctorProfileNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutDoctorProfileInput, Prisma.UserUncheckedCreateWithoutDoctorProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutDoctorProfileInput;
    upsert?: Prisma.UserUpsertWithoutDoctorProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutDoctorProfileInput, Prisma.UserUpdateWithoutDoctorProfileInput>, Prisma.UserUncheckedUpdateWithoutDoctorProfileInput>;
};
export type UserCreateNestedOneWithoutClosedEncountersInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutClosedEncountersInput, Prisma.UserUncheckedCreateWithoutClosedEncountersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutClosedEncountersInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutClosedEncountersNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutClosedEncountersInput, Prisma.UserUncheckedCreateWithoutClosedEncountersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutClosedEncountersInput;
    upsert?: Prisma.UserUpsertWithoutClosedEncountersInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutClosedEncountersInput, Prisma.UserUpdateWithoutClosedEncountersInput>, Prisma.UserUncheckedUpdateWithoutClosedEncountersInput>;
};
export type UserCreateNestedOneWithoutAddendumsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAddendumsInput, Prisma.UserUncheckedCreateWithoutAddendumsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAddendumsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutAddendumsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAddendumsInput, Prisma.UserUncheckedCreateWithoutAddendumsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAddendumsInput;
    upsert?: Prisma.UserUpsertWithoutAddendumsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAddendumsInput, Prisma.UserUpdateWithoutAddendumsInput>, Prisma.UserUncheckedUpdateWithoutAddendumsInput>;
};
export type UserCreateWithoutRolesInput = {
    id?: string;
    email: string;
    passwordHash: string;
    emailVerifiedAt?: Date | string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patientProfile?: Prisma.PatientProfileCreateNestedOneWithoutUserInput;
    doctorProfile?: Prisma.DoctorProfileCreateNestedOneWithoutUserInput;
    closedEncounters?: Prisma.ClinicalEncounterCreateNestedManyWithoutClosedByInput;
    addendums?: Prisma.ClinicalAddendumCreateNestedManyWithoutAutorInput;
};
export type UserUncheckedCreateWithoutRolesInput = {
    id?: string;
    email: string;
    passwordHash: string;
    emailVerifiedAt?: Date | string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patientProfile?: Prisma.PatientProfileUncheckedCreateNestedOneWithoutUserInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedCreateNestedOneWithoutUserInput;
    closedEncounters?: Prisma.ClinicalEncounterUncheckedCreateNestedManyWithoutClosedByInput;
    addendums?: Prisma.ClinicalAddendumUncheckedCreateNestedManyWithoutAutorInput;
};
export type UserCreateOrConnectWithoutRolesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutRolesInput, Prisma.UserUncheckedCreateWithoutRolesInput>;
};
export type UserUpsertWithoutRolesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutRolesInput, Prisma.UserUncheckedUpdateWithoutRolesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutRolesInput, Prisma.UserUncheckedCreateWithoutRolesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutRolesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutRolesInput, Prisma.UserUncheckedUpdateWithoutRolesInput>;
};
export type UserUpdateWithoutRolesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patientProfile?: Prisma.PatientProfileUpdateOneWithoutUserNestedInput;
    doctorProfile?: Prisma.DoctorProfileUpdateOneWithoutUserNestedInput;
    closedEncounters?: Prisma.ClinicalEncounterUpdateManyWithoutClosedByNestedInput;
    addendums?: Prisma.ClinicalAddendumUpdateManyWithoutAutorNestedInput;
};
export type UserUncheckedUpdateWithoutRolesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patientProfile?: Prisma.PatientProfileUncheckedUpdateOneWithoutUserNestedInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedUpdateOneWithoutUserNestedInput;
    closedEncounters?: Prisma.ClinicalEncounterUncheckedUpdateManyWithoutClosedByNestedInput;
    addendums?: Prisma.ClinicalAddendumUncheckedUpdateManyWithoutAutorNestedInput;
};
export type UserCreateWithoutPatientProfileInput = {
    id?: string;
    email: string;
    passwordHash: string;
    emailVerifiedAt?: Date | string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    roles?: Prisma.UserRoleAssignmentCreateNestedManyWithoutUserInput;
    doctorProfile?: Prisma.DoctorProfileCreateNestedOneWithoutUserInput;
    closedEncounters?: Prisma.ClinicalEncounterCreateNestedManyWithoutClosedByInput;
    addendums?: Prisma.ClinicalAddendumCreateNestedManyWithoutAutorInput;
};
export type UserUncheckedCreateWithoutPatientProfileInput = {
    id?: string;
    email: string;
    passwordHash: string;
    emailVerifiedAt?: Date | string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    roles?: Prisma.UserRoleAssignmentUncheckedCreateNestedManyWithoutUserInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedCreateNestedOneWithoutUserInput;
    closedEncounters?: Prisma.ClinicalEncounterUncheckedCreateNestedManyWithoutClosedByInput;
    addendums?: Prisma.ClinicalAddendumUncheckedCreateNestedManyWithoutAutorInput;
};
export type UserCreateOrConnectWithoutPatientProfileInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutPatientProfileInput, Prisma.UserUncheckedCreateWithoutPatientProfileInput>;
};
export type UserUpsertWithoutPatientProfileInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutPatientProfileInput, Prisma.UserUncheckedUpdateWithoutPatientProfileInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutPatientProfileInput, Prisma.UserUncheckedCreateWithoutPatientProfileInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutPatientProfileInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutPatientProfileInput, Prisma.UserUncheckedUpdateWithoutPatientProfileInput>;
};
export type UserUpdateWithoutPatientProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: Prisma.UserRoleAssignmentUpdateManyWithoutUserNestedInput;
    doctorProfile?: Prisma.DoctorProfileUpdateOneWithoutUserNestedInput;
    closedEncounters?: Prisma.ClinicalEncounterUpdateManyWithoutClosedByNestedInput;
    addendums?: Prisma.ClinicalAddendumUpdateManyWithoutAutorNestedInput;
};
export type UserUncheckedUpdateWithoutPatientProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: Prisma.UserRoleAssignmentUncheckedUpdateManyWithoutUserNestedInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedUpdateOneWithoutUserNestedInput;
    closedEncounters?: Prisma.ClinicalEncounterUncheckedUpdateManyWithoutClosedByNestedInput;
    addendums?: Prisma.ClinicalAddendumUncheckedUpdateManyWithoutAutorNestedInput;
};
export type UserCreateWithoutDoctorProfileInput = {
    id?: string;
    email: string;
    passwordHash: string;
    emailVerifiedAt?: Date | string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    roles?: Prisma.UserRoleAssignmentCreateNestedManyWithoutUserInput;
    patientProfile?: Prisma.PatientProfileCreateNestedOneWithoutUserInput;
    closedEncounters?: Prisma.ClinicalEncounterCreateNestedManyWithoutClosedByInput;
    addendums?: Prisma.ClinicalAddendumCreateNestedManyWithoutAutorInput;
};
export type UserUncheckedCreateWithoutDoctorProfileInput = {
    id?: string;
    email: string;
    passwordHash: string;
    emailVerifiedAt?: Date | string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    roles?: Prisma.UserRoleAssignmentUncheckedCreateNestedManyWithoutUserInput;
    patientProfile?: Prisma.PatientProfileUncheckedCreateNestedOneWithoutUserInput;
    closedEncounters?: Prisma.ClinicalEncounterUncheckedCreateNestedManyWithoutClosedByInput;
    addendums?: Prisma.ClinicalAddendumUncheckedCreateNestedManyWithoutAutorInput;
};
export type UserCreateOrConnectWithoutDoctorProfileInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutDoctorProfileInput, Prisma.UserUncheckedCreateWithoutDoctorProfileInput>;
};
export type UserUpsertWithoutDoctorProfileInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutDoctorProfileInput, Prisma.UserUncheckedUpdateWithoutDoctorProfileInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutDoctorProfileInput, Prisma.UserUncheckedCreateWithoutDoctorProfileInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutDoctorProfileInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutDoctorProfileInput, Prisma.UserUncheckedUpdateWithoutDoctorProfileInput>;
};
export type UserUpdateWithoutDoctorProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: Prisma.UserRoleAssignmentUpdateManyWithoutUserNestedInput;
    patientProfile?: Prisma.PatientProfileUpdateOneWithoutUserNestedInput;
    closedEncounters?: Prisma.ClinicalEncounterUpdateManyWithoutClosedByNestedInput;
    addendums?: Prisma.ClinicalAddendumUpdateManyWithoutAutorNestedInput;
};
export type UserUncheckedUpdateWithoutDoctorProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: Prisma.UserRoleAssignmentUncheckedUpdateManyWithoutUserNestedInput;
    patientProfile?: Prisma.PatientProfileUncheckedUpdateOneWithoutUserNestedInput;
    closedEncounters?: Prisma.ClinicalEncounterUncheckedUpdateManyWithoutClosedByNestedInput;
    addendums?: Prisma.ClinicalAddendumUncheckedUpdateManyWithoutAutorNestedInput;
};
export type UserCreateWithoutClosedEncountersInput = {
    id?: string;
    email: string;
    passwordHash: string;
    emailVerifiedAt?: Date | string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    roles?: Prisma.UserRoleAssignmentCreateNestedManyWithoutUserInput;
    patientProfile?: Prisma.PatientProfileCreateNestedOneWithoutUserInput;
    doctorProfile?: Prisma.DoctorProfileCreateNestedOneWithoutUserInput;
    addendums?: Prisma.ClinicalAddendumCreateNestedManyWithoutAutorInput;
};
export type UserUncheckedCreateWithoutClosedEncountersInput = {
    id?: string;
    email: string;
    passwordHash: string;
    emailVerifiedAt?: Date | string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    roles?: Prisma.UserRoleAssignmentUncheckedCreateNestedManyWithoutUserInput;
    patientProfile?: Prisma.PatientProfileUncheckedCreateNestedOneWithoutUserInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedCreateNestedOneWithoutUserInput;
    addendums?: Prisma.ClinicalAddendumUncheckedCreateNestedManyWithoutAutorInput;
};
export type UserCreateOrConnectWithoutClosedEncountersInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutClosedEncountersInput, Prisma.UserUncheckedCreateWithoutClosedEncountersInput>;
};
export type UserUpsertWithoutClosedEncountersInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutClosedEncountersInput, Prisma.UserUncheckedUpdateWithoutClosedEncountersInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutClosedEncountersInput, Prisma.UserUncheckedCreateWithoutClosedEncountersInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutClosedEncountersInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutClosedEncountersInput, Prisma.UserUncheckedUpdateWithoutClosedEncountersInput>;
};
export type UserUpdateWithoutClosedEncountersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: Prisma.UserRoleAssignmentUpdateManyWithoutUserNestedInput;
    patientProfile?: Prisma.PatientProfileUpdateOneWithoutUserNestedInput;
    doctorProfile?: Prisma.DoctorProfileUpdateOneWithoutUserNestedInput;
    addendums?: Prisma.ClinicalAddendumUpdateManyWithoutAutorNestedInput;
};
export type UserUncheckedUpdateWithoutClosedEncountersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: Prisma.UserRoleAssignmentUncheckedUpdateManyWithoutUserNestedInput;
    patientProfile?: Prisma.PatientProfileUncheckedUpdateOneWithoutUserNestedInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedUpdateOneWithoutUserNestedInput;
    addendums?: Prisma.ClinicalAddendumUncheckedUpdateManyWithoutAutorNestedInput;
};
export type UserCreateWithoutAddendumsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    emailVerifiedAt?: Date | string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    roles?: Prisma.UserRoleAssignmentCreateNestedManyWithoutUserInput;
    patientProfile?: Prisma.PatientProfileCreateNestedOneWithoutUserInput;
    doctorProfile?: Prisma.DoctorProfileCreateNestedOneWithoutUserInput;
    closedEncounters?: Prisma.ClinicalEncounterCreateNestedManyWithoutClosedByInput;
};
export type UserUncheckedCreateWithoutAddendumsInput = {
    id?: string;
    email: string;
    passwordHash: string;
    emailVerifiedAt?: Date | string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    roles?: Prisma.UserRoleAssignmentUncheckedCreateNestedManyWithoutUserInput;
    patientProfile?: Prisma.PatientProfileUncheckedCreateNestedOneWithoutUserInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedCreateNestedOneWithoutUserInput;
    closedEncounters?: Prisma.ClinicalEncounterUncheckedCreateNestedManyWithoutClosedByInput;
};
export type UserCreateOrConnectWithoutAddendumsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAddendumsInput, Prisma.UserUncheckedCreateWithoutAddendumsInput>;
};
export type UserUpsertWithoutAddendumsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAddendumsInput, Prisma.UserUncheckedUpdateWithoutAddendumsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAddendumsInput, Prisma.UserUncheckedCreateWithoutAddendumsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAddendumsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAddendumsInput, Prisma.UserUncheckedUpdateWithoutAddendumsInput>;
};
export type UserUpdateWithoutAddendumsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: Prisma.UserRoleAssignmentUpdateManyWithoutUserNestedInput;
    patientProfile?: Prisma.PatientProfileUpdateOneWithoutUserNestedInput;
    doctorProfile?: Prisma.DoctorProfileUpdateOneWithoutUserNestedInput;
    closedEncounters?: Prisma.ClinicalEncounterUpdateManyWithoutClosedByNestedInput;
};
export type UserUncheckedUpdateWithoutAddendumsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    emailVerifiedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    roles?: Prisma.UserRoleAssignmentUncheckedUpdateManyWithoutUserNestedInput;
    patientProfile?: Prisma.PatientProfileUncheckedUpdateOneWithoutUserNestedInput;
    doctorProfile?: Prisma.DoctorProfileUncheckedUpdateOneWithoutUserNestedInput;
    closedEncounters?: Prisma.ClinicalEncounterUncheckedUpdateManyWithoutClosedByNestedInput;
};
export type UserCountOutputType = {
    roles: number;
    closedEncounters: number;
    addendums: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    roles?: boolean | UserCountOutputTypeCountRolesArgs;
    closedEncounters?: boolean | UserCountOutputTypeCountClosedEncountersArgs;
    addendums?: boolean | UserCountOutputTypeCountAddendumsArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountRolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserRoleAssignmentWhereInput;
};
export type UserCountOutputTypeCountClosedEncountersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClinicalEncounterWhereInput;
};
export type UserCountOutputTypeCountAddendumsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClinicalAddendumWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    emailVerifiedAt?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    roles?: boolean | Prisma.User$rolesArgs<ExtArgs>;
    patientProfile?: boolean | Prisma.User$patientProfileArgs<ExtArgs>;
    doctorProfile?: boolean | Prisma.User$doctorProfileArgs<ExtArgs>;
    closedEncounters?: boolean | Prisma.User$closedEncountersArgs<ExtArgs>;
    addendums?: boolean | Prisma.User$addendumsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    emailVerifiedAt?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    emailVerifiedAt?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    emailVerifiedAt?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "passwordHash" | "emailVerifiedAt" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    roles?: boolean | Prisma.User$rolesArgs<ExtArgs>;
    patientProfile?: boolean | Prisma.User$patientProfileArgs<ExtArgs>;
    doctorProfile?: boolean | Prisma.User$doctorProfileArgs<ExtArgs>;
    closedEncounters?: boolean | Prisma.User$closedEncountersArgs<ExtArgs>;
    addendums?: boolean | Prisma.User$addendumsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        roles: Prisma.$UserRoleAssignmentPayload<ExtArgs>[];
        patientProfile: Prisma.$PatientProfilePayload<ExtArgs> | null;
        doctorProfile: Prisma.$DoctorProfilePayload<ExtArgs> | null;
        closedEncounters: Prisma.$ClinicalEncounterPayload<ExtArgs>[];
        addendums: Prisma.$ClinicalAddendumPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string;
        passwordHash: string;
        emailVerifiedAt: Date | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    roles<T extends Prisma.User$rolesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserRoleAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    patientProfile<T extends Prisma.User$patientProfileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$patientProfileArgs<ExtArgs>>): Prisma.Prisma__PatientProfileClient<runtime.Types.Result.GetResult<Prisma.$PatientProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    doctorProfile<T extends Prisma.User$doctorProfileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$doctorProfileArgs<ExtArgs>>): Prisma.Prisma__DoctorProfileClient<runtime.Types.Result.GetResult<Prisma.$DoctorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    closedEncounters<T extends Prisma.User$closedEncountersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$closedEncountersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClinicalEncounterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    addendums<T extends Prisma.User$addendumsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$addendumsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClinicalAddendumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly passwordHash: Prisma.FieldRef<"User", 'String'>;
    readonly emailVerifiedAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly isActive: Prisma.FieldRef<"User", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$rolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$patientProfileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatientProfileSelect<ExtArgs> | null;
    omit?: Prisma.PatientProfileOmit<ExtArgs> | null;
    include?: Prisma.PatientProfileInclude<ExtArgs> | null;
    where?: Prisma.PatientProfileWhereInput;
};
export type User$doctorProfileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DoctorProfileSelect<ExtArgs> | null;
    omit?: Prisma.DoctorProfileOmit<ExtArgs> | null;
    include?: Prisma.DoctorProfileInclude<ExtArgs> | null;
    where?: Prisma.DoctorProfileWhereInput;
};
export type User$closedEncountersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClinicalEncounterSelect<ExtArgs> | null;
    omit?: Prisma.ClinicalEncounterOmit<ExtArgs> | null;
    include?: Prisma.ClinicalEncounterInclude<ExtArgs> | null;
    where?: Prisma.ClinicalEncounterWhereInput;
    orderBy?: Prisma.ClinicalEncounterOrderByWithRelationInput | Prisma.ClinicalEncounterOrderByWithRelationInput[];
    cursor?: Prisma.ClinicalEncounterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClinicalEncounterScalarFieldEnum | Prisma.ClinicalEncounterScalarFieldEnum[];
};
export type User$addendumsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};

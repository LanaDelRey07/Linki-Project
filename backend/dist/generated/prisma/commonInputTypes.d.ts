import type * as runtime from "@prisma/client/runtime/client";
import * as $Enums from "./enums.js";
import type * as Prisma from "./internal/prismaNamespace.js";
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type IntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type EnumDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | Prisma.EnumDocumentTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.DocumentType[] | Prisma.ListEnumDocumentTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DocumentType[] | Prisma.ListEnumDocumentTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDocumentTypeFilter<$PrismaModel> | $Enums.DocumentType;
};
export type EnumDepartmentNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Department | Prisma.EnumDepartmentFieldRefInput<$PrismaModel> | null;
    in?: $Enums.Department[] | Prisma.ListEnumDepartmentFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.Department[] | Prisma.ListEnumDepartmentFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumDepartmentNullableFilter<$PrismaModel> | $Enums.Department | null;
};
export type EnumSexBiologicalFilter<$PrismaModel = never> = {
    equals?: $Enums.SexBiological | Prisma.EnumSexBiologicalFieldRefInput<$PrismaModel>;
    in?: $Enums.SexBiological[] | Prisma.ListEnumSexBiologicalFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SexBiological[] | Prisma.ListEnumSexBiologicalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSexBiologicalFilter<$PrismaModel> | $Enums.SexBiological;
};
export type EnumGenderIdentityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.GenderIdentity | Prisma.EnumGenderIdentityFieldRefInput<$PrismaModel> | null;
    in?: $Enums.GenderIdentity[] | Prisma.ListEnumGenderIdentityFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.GenderIdentity[] | Prisma.ListEnumGenderIdentityFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumGenderIdentityNullableFilter<$PrismaModel> | $Enums.GenderIdentity | null;
};
export type EnumMaritalStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | Prisma.EnumMaritalStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.MaritalStatus[] | Prisma.ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.MaritalStatus[] | Prisma.ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumMaritalStatusNullableFilter<$PrismaModel> | $Enums.MaritalStatus | null;
};
export type EnumDepartmentFilter<$PrismaModel = never> = {
    equals?: $Enums.Department | Prisma.EnumDepartmentFieldRefInput<$PrismaModel>;
    in?: $Enums.Department[] | Prisma.ListEnumDepartmentFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Department[] | Prisma.ListEnumDepartmentFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDepartmentFilter<$PrismaModel> | $Enums.Department;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type EnumDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | Prisma.EnumDocumentTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.DocumentType[] | Prisma.ListEnumDocumentTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DocumentType[] | Prisma.ListEnumDocumentTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDocumentTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDocumentTypeFilter<$PrismaModel>;
};
export type EnumDepartmentNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Department | Prisma.EnumDepartmentFieldRefInput<$PrismaModel> | null;
    in?: $Enums.Department[] | Prisma.ListEnumDepartmentFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.Department[] | Prisma.ListEnumDepartmentFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumDepartmentNullableWithAggregatesFilter<$PrismaModel> | $Enums.Department | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDepartmentNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDepartmentNullableFilter<$PrismaModel>;
};
export type EnumSexBiologicalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SexBiological | Prisma.EnumSexBiologicalFieldRefInput<$PrismaModel>;
    in?: $Enums.SexBiological[] | Prisma.ListEnumSexBiologicalFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SexBiological[] | Prisma.ListEnumSexBiologicalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSexBiologicalWithAggregatesFilter<$PrismaModel> | $Enums.SexBiological;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSexBiologicalFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSexBiologicalFilter<$PrismaModel>;
};
export type EnumGenderIdentityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GenderIdentity | Prisma.EnumGenderIdentityFieldRefInput<$PrismaModel> | null;
    in?: $Enums.GenderIdentity[] | Prisma.ListEnumGenderIdentityFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.GenderIdentity[] | Prisma.ListEnumGenderIdentityFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumGenderIdentityNullableWithAggregatesFilter<$PrismaModel> | $Enums.GenderIdentity | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumGenderIdentityNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumGenderIdentityNullableFilter<$PrismaModel>;
};
export type EnumMaritalStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | Prisma.EnumMaritalStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.MaritalStatus[] | Prisma.ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.MaritalStatus[] | Prisma.ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumMaritalStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.MaritalStatus | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMaritalStatusNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMaritalStatusNullableFilter<$PrismaModel>;
};
export type EnumDepartmentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Department | Prisma.EnumDepartmentFieldRefInput<$PrismaModel>;
    in?: $Enums.Department[] | Prisma.ListEnumDepartmentFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Department[] | Prisma.ListEnumDepartmentFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDepartmentWithAggregatesFilter<$PrismaModel> | $Enums.Department;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDepartmentFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDepartmentFilter<$PrismaModel>;
};
export type EnumKinshipFilter<$PrismaModel = never> = {
    equals?: $Enums.Kinship | Prisma.EnumKinshipFieldRefInput<$PrismaModel>;
    in?: $Enums.Kinship[] | Prisma.ListEnumKinshipFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Kinship[] | Prisma.ListEnumKinshipFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumKinshipFilter<$PrismaModel> | $Enums.Kinship;
};
export type EnumKinshipWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Kinship | Prisma.EnumKinshipFieldRefInput<$PrismaModel>;
    in?: $Enums.Kinship[] | Prisma.ListEnumKinshipFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Kinship[] | Prisma.ListEnumKinshipFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumKinshipWithAggregatesFilter<$PrismaModel> | $Enums.Kinship;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumKinshipFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumKinshipFilter<$PrismaModel>;
};
export type EnumBackgroundToggleFilter<$PrismaModel = never> = {
    equals?: $Enums.BackgroundToggle | Prisma.EnumBackgroundToggleFieldRefInput<$PrismaModel>;
    in?: $Enums.BackgroundToggle[] | Prisma.ListEnumBackgroundToggleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BackgroundToggle[] | Prisma.ListEnumBackgroundToggleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBackgroundToggleFilter<$PrismaModel> | $Enums.BackgroundToggle;
};
export type EnumSmokingStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SmokingStatus | Prisma.EnumSmokingStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.SmokingStatus[] | Prisma.ListEnumSmokingStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.SmokingStatus[] | Prisma.ListEnumSmokingStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumSmokingStatusNullableFilter<$PrismaModel> | $Enums.SmokingStatus | null;
};
export type EnumAlcoholConsumptionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AlcoholConsumption | Prisma.EnumAlcoholConsumptionFieldRefInput<$PrismaModel> | null;
    in?: $Enums.AlcoholConsumption[] | Prisma.ListEnumAlcoholConsumptionFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.AlcoholConsumption[] | Prisma.ListEnumAlcoholConsumptionFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumAlcoholConsumptionNullableFilter<$PrismaModel> | $Enums.AlcoholConsumption | null;
};
export type EnumPhysicalActivityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PhysicalActivity | Prisma.EnumPhysicalActivityFieldRefInput<$PrismaModel> | null;
    in?: $Enums.PhysicalActivity[] | Prisma.ListEnumPhysicalActivityFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.PhysicalActivity[] | Prisma.ListEnumPhysicalActivityFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumPhysicalActivityNullableFilter<$PrismaModel> | $Enums.PhysicalActivity | null;
};
export type EnumPregnancyStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PregnancyStatus | Prisma.EnumPregnancyStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.PregnancyStatus[] | Prisma.ListEnumPregnancyStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.PregnancyStatus[] | Prisma.ListEnumPregnancyStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumPregnancyStatusNullableFilter<$PrismaModel> | $Enums.PregnancyStatus | null;
};
export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type EnumContraceptiveMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ContraceptiveMethod | Prisma.EnumContraceptiveMethodFieldRefInput<$PrismaModel> | null;
    in?: $Enums.ContraceptiveMethod[] | Prisma.ListEnumContraceptiveMethodFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.ContraceptiveMethod[] | Prisma.ListEnumContraceptiveMethodFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumContraceptiveMethodNullableFilter<$PrismaModel> | $Enums.ContraceptiveMethod | null;
};
export type EnumBackgroundToggleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BackgroundToggle | Prisma.EnumBackgroundToggleFieldRefInput<$PrismaModel>;
    in?: $Enums.BackgroundToggle[] | Prisma.ListEnumBackgroundToggleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BackgroundToggle[] | Prisma.ListEnumBackgroundToggleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBackgroundToggleWithAggregatesFilter<$PrismaModel> | $Enums.BackgroundToggle;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumBackgroundToggleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumBackgroundToggleFilter<$PrismaModel>;
};
export type EnumSmokingStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SmokingStatus | Prisma.EnumSmokingStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.SmokingStatus[] | Prisma.ListEnumSmokingStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.SmokingStatus[] | Prisma.ListEnumSmokingStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumSmokingStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.SmokingStatus | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSmokingStatusNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSmokingStatusNullableFilter<$PrismaModel>;
};
export type EnumAlcoholConsumptionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlcoholConsumption | Prisma.EnumAlcoholConsumptionFieldRefInput<$PrismaModel> | null;
    in?: $Enums.AlcoholConsumption[] | Prisma.ListEnumAlcoholConsumptionFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.AlcoholConsumption[] | Prisma.ListEnumAlcoholConsumptionFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumAlcoholConsumptionNullableWithAggregatesFilter<$PrismaModel> | $Enums.AlcoholConsumption | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAlcoholConsumptionNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAlcoholConsumptionNullableFilter<$PrismaModel>;
};
export type EnumPhysicalActivityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PhysicalActivity | Prisma.EnumPhysicalActivityFieldRefInput<$PrismaModel> | null;
    in?: $Enums.PhysicalActivity[] | Prisma.ListEnumPhysicalActivityFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.PhysicalActivity[] | Prisma.ListEnumPhysicalActivityFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumPhysicalActivityNullableWithAggregatesFilter<$PrismaModel> | $Enums.PhysicalActivity | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPhysicalActivityNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPhysicalActivityNullableFilter<$PrismaModel>;
};
export type EnumPregnancyStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PregnancyStatus | Prisma.EnumPregnancyStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.PregnancyStatus[] | Prisma.ListEnumPregnancyStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.PregnancyStatus[] | Prisma.ListEnumPregnancyStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumPregnancyStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.PregnancyStatus | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPregnancyStatusNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPregnancyStatusNullableFilter<$PrismaModel>;
};
export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type EnumContraceptiveMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContraceptiveMethod | Prisma.EnumContraceptiveMethodFieldRefInput<$PrismaModel> | null;
    in?: $Enums.ContraceptiveMethod[] | Prisma.ListEnumContraceptiveMethodFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.ContraceptiveMethod[] | Prisma.ListEnumContraceptiveMethodFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumContraceptiveMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.ContraceptiveMethod | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumContraceptiveMethodNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumContraceptiveMethodNullableFilter<$PrismaModel>;
};
export type EnumAllergyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AllergyType | Prisma.EnumAllergyTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.AllergyType[] | Prisma.ListEnumAllergyTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AllergyType[] | Prisma.ListEnumAllergyTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAllergyTypeFilter<$PrismaModel> | $Enums.AllergyType;
};
export type EnumAllergyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AllergyType | Prisma.EnumAllergyTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.AllergyType[] | Prisma.ListEnumAllergyTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AllergyType[] | Prisma.ListEnumAllergyTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAllergyTypeWithAggregatesFilter<$PrismaModel> | $Enums.AllergyType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAllergyTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAllergyTypeFilter<$PrismaModel>;
};
export type EnumChronicConditionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ChronicConditionType | Prisma.EnumChronicConditionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ChronicConditionType[] | Prisma.ListEnumChronicConditionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ChronicConditionType[] | Prisma.ListEnumChronicConditionTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumChronicConditionTypeFilter<$PrismaModel> | $Enums.ChronicConditionType;
};
export type EnumChronicConditionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChronicConditionType | Prisma.EnumChronicConditionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ChronicConditionType[] | Prisma.ListEnumChronicConditionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ChronicConditionType[] | Prisma.ListEnumChronicConditionTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumChronicConditionTypeWithAggregatesFilter<$PrismaModel> | $Enums.ChronicConditionType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumChronicConditionTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumChronicConditionTypeFilter<$PrismaModel>;
};
export type EnumFamilyRelationFilter<$PrismaModel = never> = {
    equals?: $Enums.FamilyRelation | Prisma.EnumFamilyRelationFieldRefInput<$PrismaModel>;
    in?: $Enums.FamilyRelation[] | Prisma.ListEnumFamilyRelationFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FamilyRelation[] | Prisma.ListEnumFamilyRelationFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFamilyRelationFilter<$PrismaModel> | $Enums.FamilyRelation;
};
export type EnumFamilyDiseaseFilter<$PrismaModel = never> = {
    equals?: $Enums.FamilyDisease | Prisma.EnumFamilyDiseaseFieldRefInput<$PrismaModel>;
    in?: $Enums.FamilyDisease[] | Prisma.ListEnumFamilyDiseaseFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FamilyDisease[] | Prisma.ListEnumFamilyDiseaseFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFamilyDiseaseFilter<$PrismaModel> | $Enums.FamilyDisease;
};
export type EnumFamilyRelationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FamilyRelation | Prisma.EnumFamilyRelationFieldRefInput<$PrismaModel>;
    in?: $Enums.FamilyRelation[] | Prisma.ListEnumFamilyRelationFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FamilyRelation[] | Prisma.ListEnumFamilyRelationFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFamilyRelationWithAggregatesFilter<$PrismaModel> | $Enums.FamilyRelation;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumFamilyRelationFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumFamilyRelationFilter<$PrismaModel>;
};
export type EnumFamilyDiseaseWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FamilyDisease | Prisma.EnumFamilyDiseaseFieldRefInput<$PrismaModel>;
    in?: $Enums.FamilyDisease[] | Prisma.ListEnumFamilyDiseaseFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FamilyDisease[] | Prisma.ListEnumFamilyDiseaseFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFamilyDiseaseWithAggregatesFilter<$PrismaModel> | $Enums.FamilyDisease;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumFamilyDiseaseFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumFamilyDiseaseFilter<$PrismaModel>;
};
export type JsonFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>, Required<JsonFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>;
export type JsonFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type JsonWithAggregatesFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>, Required<JsonWithAggregatesFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;
export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedJsonFilter<$PrismaModel>;
    _max?: Prisma.NestedJsonFilter<$PrismaModel>;
};
export type EnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | Prisma.EnumAppointmentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AppointmentStatus[] | Prisma.ListEnumAppointmentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AppointmentStatus[] | Prisma.ListEnumAppointmentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus;
};
export type EnumSymptomDurationNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SymptomDuration | Prisma.EnumSymptomDurationFieldRefInput<$PrismaModel> | null;
    in?: $Enums.SymptomDuration[] | Prisma.ListEnumSymptomDurationFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.SymptomDuration[] | Prisma.ListEnumSymptomDurationFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumSymptomDurationNullableFilter<$PrismaModel> | $Enums.SymptomDuration | null;
};
export type EnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | Prisma.EnumAppointmentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AppointmentStatus[] | Prisma.ListEnumAppointmentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AppointmentStatus[] | Prisma.ListEnumAppointmentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAppointmentStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAppointmentStatusFilter<$PrismaModel>;
};
export type EnumSymptomDurationNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SymptomDuration | Prisma.EnumSymptomDurationFieldRefInput<$PrismaModel> | null;
    in?: $Enums.SymptomDuration[] | Prisma.ListEnumSymptomDurationFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.SymptomDuration[] | Prisma.ListEnumSymptomDurationFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumSymptomDurationNullableWithAggregatesFilter<$PrismaModel> | $Enums.SymptomDuration | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSymptomDurationNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSymptomDurationNullableFilter<$PrismaModel>;
};
export type EnumEncounterStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EncounterStatus | Prisma.EnumEncounterStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.EncounterStatus[] | Prisma.ListEnumEncounterStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EncounterStatus[] | Prisma.ListEnumEncounterStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEncounterStatusFilter<$PrismaModel> | $Enums.EncounterStatus;
};
export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type EnumBMIClassificationNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BMIClassification | Prisma.EnumBMIClassificationFieldRefInput<$PrismaModel> | null;
    in?: $Enums.BMIClassification[] | Prisma.ListEnumBMIClassificationFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.BMIClassification[] | Prisma.ListEnumBMIClassificationFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumBMIClassificationNullableFilter<$PrismaModel> | $Enums.BMIClassification | null;
};
export type EnumDiagnosisTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DiagnosisType | Prisma.EnumDiagnosisTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.DiagnosisType[] | Prisma.ListEnumDiagnosisTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DiagnosisType[] | Prisma.ListEnumDiagnosisTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDiagnosisTypeFilter<$PrismaModel> | $Enums.DiagnosisType;
};
export type EnumFollowUpIntervalNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.FollowUpInterval | Prisma.EnumFollowUpIntervalFieldRefInput<$PrismaModel> | null;
    in?: $Enums.FollowUpInterval[] | Prisma.ListEnumFollowUpIntervalFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.FollowUpInterval[] | Prisma.ListEnumFollowUpIntervalFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumFollowUpIntervalNullableFilter<$PrismaModel> | $Enums.FollowUpInterval | null;
};
export type EnumEncounterStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EncounterStatus | Prisma.EnumEncounterStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.EncounterStatus[] | Prisma.ListEnumEncounterStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EncounterStatus[] | Prisma.ListEnumEncounterStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEncounterStatusWithAggregatesFilter<$PrismaModel> | $Enums.EncounterStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEncounterStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEncounterStatusFilter<$PrismaModel>;
};
export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
};
export type EnumBMIClassificationNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BMIClassification | Prisma.EnumBMIClassificationFieldRefInput<$PrismaModel> | null;
    in?: $Enums.BMIClassification[] | Prisma.ListEnumBMIClassificationFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.BMIClassification[] | Prisma.ListEnumBMIClassificationFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumBMIClassificationNullableWithAggregatesFilter<$PrismaModel> | $Enums.BMIClassification | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumBMIClassificationNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumBMIClassificationNullableFilter<$PrismaModel>;
};
export type EnumDiagnosisTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DiagnosisType | Prisma.EnumDiagnosisTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.DiagnosisType[] | Prisma.ListEnumDiagnosisTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DiagnosisType[] | Prisma.ListEnumDiagnosisTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDiagnosisTypeWithAggregatesFilter<$PrismaModel> | $Enums.DiagnosisType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDiagnosisTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDiagnosisTypeFilter<$PrismaModel>;
};
export type EnumFollowUpIntervalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FollowUpInterval | Prisma.EnumFollowUpIntervalFieldRefInput<$PrismaModel> | null;
    in?: $Enums.FollowUpInterval[] | Prisma.ListEnumFollowUpIntervalFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.FollowUpInterval[] | Prisma.ListEnumFollowUpIntervalFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumFollowUpIntervalNullableWithAggregatesFilter<$PrismaModel> | $Enums.FollowUpInterval | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumFollowUpIntervalNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumFollowUpIntervalNullableFilter<$PrismaModel>;
};
export type EnumSystemReviewFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemReview | Prisma.EnumSystemReviewFieldRefInput<$PrismaModel>;
    in?: $Enums.SystemReview[] | Prisma.ListEnumSystemReviewFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SystemReview[] | Prisma.ListEnumSystemReviewFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSystemReviewFilter<$PrismaModel> | $Enums.SystemReview;
};
export type EnumSystemReviewWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemReview | Prisma.EnumSystemReviewFieldRefInput<$PrismaModel>;
    in?: $Enums.SystemReview[] | Prisma.ListEnumSystemReviewFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SystemReview[] | Prisma.ListEnumSystemReviewFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSystemReviewWithAggregatesFilter<$PrismaModel> | $Enums.SystemReview;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSystemReviewFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSystemReviewFilter<$PrismaModel>;
};
export type EnumPresentationFilter<$PrismaModel = never> = {
    equals?: $Enums.Presentation | Prisma.EnumPresentationFieldRefInput<$PrismaModel>;
    in?: $Enums.Presentation[] | Prisma.ListEnumPresentationFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Presentation[] | Prisma.ListEnumPresentationFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPresentationFilter<$PrismaModel> | $Enums.Presentation;
};
export type EnumAdministrationRouteFilter<$PrismaModel = never> = {
    equals?: $Enums.AdministrationRoute | Prisma.EnumAdministrationRouteFieldRefInput<$PrismaModel>;
    in?: $Enums.AdministrationRoute[] | Prisma.ListEnumAdministrationRouteFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AdministrationRoute[] | Prisma.ListEnumAdministrationRouteFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAdministrationRouteFilter<$PrismaModel> | $Enums.AdministrationRoute;
};
export type EnumMedicationFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.MedicationFrequency | Prisma.EnumMedicationFrequencyFieldRefInput<$PrismaModel>;
    in?: $Enums.MedicationFrequency[] | Prisma.ListEnumMedicationFrequencyFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MedicationFrequency[] | Prisma.ListEnumMedicationFrequencyFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMedicationFrequencyFilter<$PrismaModel> | $Enums.MedicationFrequency;
};
export type EnumPresentationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Presentation | Prisma.EnumPresentationFieldRefInput<$PrismaModel>;
    in?: $Enums.Presentation[] | Prisma.ListEnumPresentationFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Presentation[] | Prisma.ListEnumPresentationFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPresentationWithAggregatesFilter<$PrismaModel> | $Enums.Presentation;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPresentationFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPresentationFilter<$PrismaModel>;
};
export type EnumAdministrationRouteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdministrationRoute | Prisma.EnumAdministrationRouteFieldRefInput<$PrismaModel>;
    in?: $Enums.AdministrationRoute[] | Prisma.ListEnumAdministrationRouteFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AdministrationRoute[] | Prisma.ListEnumAdministrationRouteFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAdministrationRouteWithAggregatesFilter<$PrismaModel> | $Enums.AdministrationRoute;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAdministrationRouteFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAdministrationRouteFilter<$PrismaModel>;
};
export type EnumMedicationFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MedicationFrequency | Prisma.EnumMedicationFrequencyFieldRefInput<$PrismaModel>;
    in?: $Enums.MedicationFrequency[] | Prisma.ListEnumMedicationFrequencyFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MedicationFrequency[] | Prisma.ListEnumMedicationFrequencyFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMedicationFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.MedicationFrequency;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMedicationFrequencyFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMedicationFrequencyFilter<$PrismaModel>;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedEnumDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | Prisma.EnumDocumentTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.DocumentType[] | Prisma.ListEnumDocumentTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DocumentType[] | Prisma.ListEnumDocumentTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDocumentTypeFilter<$PrismaModel> | $Enums.DocumentType;
};
export type NestedEnumDepartmentNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Department | Prisma.EnumDepartmentFieldRefInput<$PrismaModel> | null;
    in?: $Enums.Department[] | Prisma.ListEnumDepartmentFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.Department[] | Prisma.ListEnumDepartmentFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumDepartmentNullableFilter<$PrismaModel> | $Enums.Department | null;
};
export type NestedEnumSexBiologicalFilter<$PrismaModel = never> = {
    equals?: $Enums.SexBiological | Prisma.EnumSexBiologicalFieldRefInput<$PrismaModel>;
    in?: $Enums.SexBiological[] | Prisma.ListEnumSexBiologicalFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SexBiological[] | Prisma.ListEnumSexBiologicalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSexBiologicalFilter<$PrismaModel> | $Enums.SexBiological;
};
export type NestedEnumGenderIdentityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.GenderIdentity | Prisma.EnumGenderIdentityFieldRefInput<$PrismaModel> | null;
    in?: $Enums.GenderIdentity[] | Prisma.ListEnumGenderIdentityFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.GenderIdentity[] | Prisma.ListEnumGenderIdentityFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumGenderIdentityNullableFilter<$PrismaModel> | $Enums.GenderIdentity | null;
};
export type NestedEnumMaritalStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | Prisma.EnumMaritalStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.MaritalStatus[] | Prisma.ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.MaritalStatus[] | Prisma.ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumMaritalStatusNullableFilter<$PrismaModel> | $Enums.MaritalStatus | null;
};
export type NestedEnumDepartmentFilter<$PrismaModel = never> = {
    equals?: $Enums.Department | Prisma.EnumDepartmentFieldRefInput<$PrismaModel>;
    in?: $Enums.Department[] | Prisma.ListEnumDepartmentFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Department[] | Prisma.ListEnumDepartmentFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDepartmentFilter<$PrismaModel> | $Enums.Department;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | Prisma.EnumDocumentTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.DocumentType[] | Prisma.ListEnumDocumentTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DocumentType[] | Prisma.ListEnumDocumentTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDocumentTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDocumentTypeFilter<$PrismaModel>;
};
export type NestedEnumDepartmentNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Department | Prisma.EnumDepartmentFieldRefInput<$PrismaModel> | null;
    in?: $Enums.Department[] | Prisma.ListEnumDepartmentFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.Department[] | Prisma.ListEnumDepartmentFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumDepartmentNullableWithAggregatesFilter<$PrismaModel> | $Enums.Department | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDepartmentNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDepartmentNullableFilter<$PrismaModel>;
};
export type NestedEnumSexBiologicalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SexBiological | Prisma.EnumSexBiologicalFieldRefInput<$PrismaModel>;
    in?: $Enums.SexBiological[] | Prisma.ListEnumSexBiologicalFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SexBiological[] | Prisma.ListEnumSexBiologicalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSexBiologicalWithAggregatesFilter<$PrismaModel> | $Enums.SexBiological;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSexBiologicalFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSexBiologicalFilter<$PrismaModel>;
};
export type NestedEnumGenderIdentityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GenderIdentity | Prisma.EnumGenderIdentityFieldRefInput<$PrismaModel> | null;
    in?: $Enums.GenderIdentity[] | Prisma.ListEnumGenderIdentityFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.GenderIdentity[] | Prisma.ListEnumGenderIdentityFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumGenderIdentityNullableWithAggregatesFilter<$PrismaModel> | $Enums.GenderIdentity | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumGenderIdentityNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumGenderIdentityNullableFilter<$PrismaModel>;
};
export type NestedEnumMaritalStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | Prisma.EnumMaritalStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.MaritalStatus[] | Prisma.ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.MaritalStatus[] | Prisma.ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumMaritalStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.MaritalStatus | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMaritalStatusNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMaritalStatusNullableFilter<$PrismaModel>;
};
export type NestedEnumDepartmentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Department | Prisma.EnumDepartmentFieldRefInput<$PrismaModel>;
    in?: $Enums.Department[] | Prisma.ListEnumDepartmentFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Department[] | Prisma.ListEnumDepartmentFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDepartmentWithAggregatesFilter<$PrismaModel> | $Enums.Department;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDepartmentFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDepartmentFilter<$PrismaModel>;
};
export type NestedEnumKinshipFilter<$PrismaModel = never> = {
    equals?: $Enums.Kinship | Prisma.EnumKinshipFieldRefInput<$PrismaModel>;
    in?: $Enums.Kinship[] | Prisma.ListEnumKinshipFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Kinship[] | Prisma.ListEnumKinshipFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumKinshipFilter<$PrismaModel> | $Enums.Kinship;
};
export type NestedEnumKinshipWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Kinship | Prisma.EnumKinshipFieldRefInput<$PrismaModel>;
    in?: $Enums.Kinship[] | Prisma.ListEnumKinshipFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Kinship[] | Prisma.ListEnumKinshipFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumKinshipWithAggregatesFilter<$PrismaModel> | $Enums.Kinship;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumKinshipFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumKinshipFilter<$PrismaModel>;
};
export type NestedEnumBackgroundToggleFilter<$PrismaModel = never> = {
    equals?: $Enums.BackgroundToggle | Prisma.EnumBackgroundToggleFieldRefInput<$PrismaModel>;
    in?: $Enums.BackgroundToggle[] | Prisma.ListEnumBackgroundToggleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BackgroundToggle[] | Prisma.ListEnumBackgroundToggleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBackgroundToggleFilter<$PrismaModel> | $Enums.BackgroundToggle;
};
export type NestedEnumSmokingStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SmokingStatus | Prisma.EnumSmokingStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.SmokingStatus[] | Prisma.ListEnumSmokingStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.SmokingStatus[] | Prisma.ListEnumSmokingStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumSmokingStatusNullableFilter<$PrismaModel> | $Enums.SmokingStatus | null;
};
export type NestedEnumAlcoholConsumptionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AlcoholConsumption | Prisma.EnumAlcoholConsumptionFieldRefInput<$PrismaModel> | null;
    in?: $Enums.AlcoholConsumption[] | Prisma.ListEnumAlcoholConsumptionFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.AlcoholConsumption[] | Prisma.ListEnumAlcoholConsumptionFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumAlcoholConsumptionNullableFilter<$PrismaModel> | $Enums.AlcoholConsumption | null;
};
export type NestedEnumPhysicalActivityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PhysicalActivity | Prisma.EnumPhysicalActivityFieldRefInput<$PrismaModel> | null;
    in?: $Enums.PhysicalActivity[] | Prisma.ListEnumPhysicalActivityFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.PhysicalActivity[] | Prisma.ListEnumPhysicalActivityFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumPhysicalActivityNullableFilter<$PrismaModel> | $Enums.PhysicalActivity | null;
};
export type NestedEnumPregnancyStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PregnancyStatus | Prisma.EnumPregnancyStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.PregnancyStatus[] | Prisma.ListEnumPregnancyStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.PregnancyStatus[] | Prisma.ListEnumPregnancyStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumPregnancyStatusNullableFilter<$PrismaModel> | $Enums.PregnancyStatus | null;
};
export type NestedEnumContraceptiveMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ContraceptiveMethod | Prisma.EnumContraceptiveMethodFieldRefInput<$PrismaModel> | null;
    in?: $Enums.ContraceptiveMethod[] | Prisma.ListEnumContraceptiveMethodFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.ContraceptiveMethod[] | Prisma.ListEnumContraceptiveMethodFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumContraceptiveMethodNullableFilter<$PrismaModel> | $Enums.ContraceptiveMethod | null;
};
export type NestedEnumBackgroundToggleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BackgroundToggle | Prisma.EnumBackgroundToggleFieldRefInput<$PrismaModel>;
    in?: $Enums.BackgroundToggle[] | Prisma.ListEnumBackgroundToggleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BackgroundToggle[] | Prisma.ListEnumBackgroundToggleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBackgroundToggleWithAggregatesFilter<$PrismaModel> | $Enums.BackgroundToggle;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumBackgroundToggleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumBackgroundToggleFilter<$PrismaModel>;
};
export type NestedEnumSmokingStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SmokingStatus | Prisma.EnumSmokingStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.SmokingStatus[] | Prisma.ListEnumSmokingStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.SmokingStatus[] | Prisma.ListEnumSmokingStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumSmokingStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.SmokingStatus | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSmokingStatusNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSmokingStatusNullableFilter<$PrismaModel>;
};
export type NestedEnumAlcoholConsumptionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlcoholConsumption | Prisma.EnumAlcoholConsumptionFieldRefInput<$PrismaModel> | null;
    in?: $Enums.AlcoholConsumption[] | Prisma.ListEnumAlcoholConsumptionFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.AlcoholConsumption[] | Prisma.ListEnumAlcoholConsumptionFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumAlcoholConsumptionNullableWithAggregatesFilter<$PrismaModel> | $Enums.AlcoholConsumption | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAlcoholConsumptionNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAlcoholConsumptionNullableFilter<$PrismaModel>;
};
export type NestedEnumPhysicalActivityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PhysicalActivity | Prisma.EnumPhysicalActivityFieldRefInput<$PrismaModel> | null;
    in?: $Enums.PhysicalActivity[] | Prisma.ListEnumPhysicalActivityFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.PhysicalActivity[] | Prisma.ListEnumPhysicalActivityFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumPhysicalActivityNullableWithAggregatesFilter<$PrismaModel> | $Enums.PhysicalActivity | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPhysicalActivityNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPhysicalActivityNullableFilter<$PrismaModel>;
};
export type NestedEnumPregnancyStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PregnancyStatus | Prisma.EnumPregnancyStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.PregnancyStatus[] | Prisma.ListEnumPregnancyStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.PregnancyStatus[] | Prisma.ListEnumPregnancyStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumPregnancyStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.PregnancyStatus | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPregnancyStatusNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPregnancyStatusNullableFilter<$PrismaModel>;
};
export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type NestedEnumContraceptiveMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContraceptiveMethod | Prisma.EnumContraceptiveMethodFieldRefInput<$PrismaModel> | null;
    in?: $Enums.ContraceptiveMethod[] | Prisma.ListEnumContraceptiveMethodFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.ContraceptiveMethod[] | Prisma.ListEnumContraceptiveMethodFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumContraceptiveMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.ContraceptiveMethod | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumContraceptiveMethodNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumContraceptiveMethodNullableFilter<$PrismaModel>;
};
export type NestedEnumAllergyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AllergyType | Prisma.EnumAllergyTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.AllergyType[] | Prisma.ListEnumAllergyTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AllergyType[] | Prisma.ListEnumAllergyTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAllergyTypeFilter<$PrismaModel> | $Enums.AllergyType;
};
export type NestedEnumAllergyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AllergyType | Prisma.EnumAllergyTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.AllergyType[] | Prisma.ListEnumAllergyTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AllergyType[] | Prisma.ListEnumAllergyTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAllergyTypeWithAggregatesFilter<$PrismaModel> | $Enums.AllergyType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAllergyTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAllergyTypeFilter<$PrismaModel>;
};
export type NestedEnumChronicConditionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ChronicConditionType | Prisma.EnumChronicConditionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ChronicConditionType[] | Prisma.ListEnumChronicConditionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ChronicConditionType[] | Prisma.ListEnumChronicConditionTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumChronicConditionTypeFilter<$PrismaModel> | $Enums.ChronicConditionType;
};
export type NestedEnumChronicConditionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChronicConditionType | Prisma.EnumChronicConditionTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ChronicConditionType[] | Prisma.ListEnumChronicConditionTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ChronicConditionType[] | Prisma.ListEnumChronicConditionTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumChronicConditionTypeWithAggregatesFilter<$PrismaModel> | $Enums.ChronicConditionType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumChronicConditionTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumChronicConditionTypeFilter<$PrismaModel>;
};
export type NestedEnumFamilyRelationFilter<$PrismaModel = never> = {
    equals?: $Enums.FamilyRelation | Prisma.EnumFamilyRelationFieldRefInput<$PrismaModel>;
    in?: $Enums.FamilyRelation[] | Prisma.ListEnumFamilyRelationFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FamilyRelation[] | Prisma.ListEnumFamilyRelationFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFamilyRelationFilter<$PrismaModel> | $Enums.FamilyRelation;
};
export type NestedEnumFamilyDiseaseFilter<$PrismaModel = never> = {
    equals?: $Enums.FamilyDisease | Prisma.EnumFamilyDiseaseFieldRefInput<$PrismaModel>;
    in?: $Enums.FamilyDisease[] | Prisma.ListEnumFamilyDiseaseFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FamilyDisease[] | Prisma.ListEnumFamilyDiseaseFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFamilyDiseaseFilter<$PrismaModel> | $Enums.FamilyDisease;
};
export type NestedEnumFamilyRelationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FamilyRelation | Prisma.EnumFamilyRelationFieldRefInput<$PrismaModel>;
    in?: $Enums.FamilyRelation[] | Prisma.ListEnumFamilyRelationFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FamilyRelation[] | Prisma.ListEnumFamilyRelationFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFamilyRelationWithAggregatesFilter<$PrismaModel> | $Enums.FamilyRelation;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumFamilyRelationFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumFamilyRelationFilter<$PrismaModel>;
};
export type NestedEnumFamilyDiseaseWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FamilyDisease | Prisma.EnumFamilyDiseaseFieldRefInput<$PrismaModel>;
    in?: $Enums.FamilyDisease[] | Prisma.ListEnumFamilyDiseaseFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FamilyDisease[] | Prisma.ListEnumFamilyDiseaseFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFamilyDiseaseWithAggregatesFilter<$PrismaModel> | $Enums.FamilyDisease;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumFamilyDiseaseFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumFamilyDiseaseFilter<$PrismaModel>;
};
export type NestedJsonFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>, Required<NestedJsonFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>;
export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type NestedEnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | Prisma.EnumAppointmentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AppointmentStatus[] | Prisma.ListEnumAppointmentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AppointmentStatus[] | Prisma.ListEnumAppointmentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus;
};
export type NestedEnumSymptomDurationNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SymptomDuration | Prisma.EnumSymptomDurationFieldRefInput<$PrismaModel> | null;
    in?: $Enums.SymptomDuration[] | Prisma.ListEnumSymptomDurationFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.SymptomDuration[] | Prisma.ListEnumSymptomDurationFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumSymptomDurationNullableFilter<$PrismaModel> | $Enums.SymptomDuration | null;
};
export type NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | Prisma.EnumAppointmentStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.AppointmentStatus[] | Prisma.ListEnumAppointmentStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AppointmentStatus[] | Prisma.ListEnumAppointmentStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAppointmentStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAppointmentStatusFilter<$PrismaModel>;
};
export type NestedEnumSymptomDurationNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SymptomDuration | Prisma.EnumSymptomDurationFieldRefInput<$PrismaModel> | null;
    in?: $Enums.SymptomDuration[] | Prisma.ListEnumSymptomDurationFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.SymptomDuration[] | Prisma.ListEnumSymptomDurationFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumSymptomDurationNullableWithAggregatesFilter<$PrismaModel> | $Enums.SymptomDuration | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSymptomDurationNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSymptomDurationNullableFilter<$PrismaModel>;
};
export type NestedEnumEncounterStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EncounterStatus | Prisma.EnumEncounterStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.EncounterStatus[] | Prisma.ListEnumEncounterStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EncounterStatus[] | Prisma.ListEnumEncounterStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEncounterStatusFilter<$PrismaModel> | $Enums.EncounterStatus;
};
export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type NestedEnumBMIClassificationNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BMIClassification | Prisma.EnumBMIClassificationFieldRefInput<$PrismaModel> | null;
    in?: $Enums.BMIClassification[] | Prisma.ListEnumBMIClassificationFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.BMIClassification[] | Prisma.ListEnumBMIClassificationFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumBMIClassificationNullableFilter<$PrismaModel> | $Enums.BMIClassification | null;
};
export type NestedEnumDiagnosisTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DiagnosisType | Prisma.EnumDiagnosisTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.DiagnosisType[] | Prisma.ListEnumDiagnosisTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DiagnosisType[] | Prisma.ListEnumDiagnosisTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDiagnosisTypeFilter<$PrismaModel> | $Enums.DiagnosisType;
};
export type NestedEnumFollowUpIntervalNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.FollowUpInterval | Prisma.EnumFollowUpIntervalFieldRefInput<$PrismaModel> | null;
    in?: $Enums.FollowUpInterval[] | Prisma.ListEnumFollowUpIntervalFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.FollowUpInterval[] | Prisma.ListEnumFollowUpIntervalFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumFollowUpIntervalNullableFilter<$PrismaModel> | $Enums.FollowUpInterval | null;
};
export type NestedEnumEncounterStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EncounterStatus | Prisma.EnumEncounterStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.EncounterStatus[] | Prisma.ListEnumEncounterStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EncounterStatus[] | Prisma.ListEnumEncounterStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEncounterStatusWithAggregatesFilter<$PrismaModel> | $Enums.EncounterStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEncounterStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEncounterStatusFilter<$PrismaModel>;
};
export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
};
export type NestedEnumBMIClassificationNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BMIClassification | Prisma.EnumBMIClassificationFieldRefInput<$PrismaModel> | null;
    in?: $Enums.BMIClassification[] | Prisma.ListEnumBMIClassificationFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.BMIClassification[] | Prisma.ListEnumBMIClassificationFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumBMIClassificationNullableWithAggregatesFilter<$PrismaModel> | $Enums.BMIClassification | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumBMIClassificationNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumBMIClassificationNullableFilter<$PrismaModel>;
};
export type NestedEnumDiagnosisTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DiagnosisType | Prisma.EnumDiagnosisTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.DiagnosisType[] | Prisma.ListEnumDiagnosisTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DiagnosisType[] | Prisma.ListEnumDiagnosisTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDiagnosisTypeWithAggregatesFilter<$PrismaModel> | $Enums.DiagnosisType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDiagnosisTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDiagnosisTypeFilter<$PrismaModel>;
};
export type NestedEnumFollowUpIntervalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FollowUpInterval | Prisma.EnumFollowUpIntervalFieldRefInput<$PrismaModel> | null;
    in?: $Enums.FollowUpInterval[] | Prisma.ListEnumFollowUpIntervalFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.FollowUpInterval[] | Prisma.ListEnumFollowUpIntervalFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumFollowUpIntervalNullableWithAggregatesFilter<$PrismaModel> | $Enums.FollowUpInterval | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumFollowUpIntervalNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumFollowUpIntervalNullableFilter<$PrismaModel>;
};
export type NestedEnumSystemReviewFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemReview | Prisma.EnumSystemReviewFieldRefInput<$PrismaModel>;
    in?: $Enums.SystemReview[] | Prisma.ListEnumSystemReviewFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SystemReview[] | Prisma.ListEnumSystemReviewFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSystemReviewFilter<$PrismaModel> | $Enums.SystemReview;
};
export type NestedEnumSystemReviewWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemReview | Prisma.EnumSystemReviewFieldRefInput<$PrismaModel>;
    in?: $Enums.SystemReview[] | Prisma.ListEnumSystemReviewFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SystemReview[] | Prisma.ListEnumSystemReviewFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSystemReviewWithAggregatesFilter<$PrismaModel> | $Enums.SystemReview;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSystemReviewFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSystemReviewFilter<$PrismaModel>;
};
export type NestedEnumPresentationFilter<$PrismaModel = never> = {
    equals?: $Enums.Presentation | Prisma.EnumPresentationFieldRefInput<$PrismaModel>;
    in?: $Enums.Presentation[] | Prisma.ListEnumPresentationFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Presentation[] | Prisma.ListEnumPresentationFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPresentationFilter<$PrismaModel> | $Enums.Presentation;
};
export type NestedEnumAdministrationRouteFilter<$PrismaModel = never> = {
    equals?: $Enums.AdministrationRoute | Prisma.EnumAdministrationRouteFieldRefInput<$PrismaModel>;
    in?: $Enums.AdministrationRoute[] | Prisma.ListEnumAdministrationRouteFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AdministrationRoute[] | Prisma.ListEnumAdministrationRouteFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAdministrationRouteFilter<$PrismaModel> | $Enums.AdministrationRoute;
};
export type NestedEnumMedicationFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.MedicationFrequency | Prisma.EnumMedicationFrequencyFieldRefInput<$PrismaModel>;
    in?: $Enums.MedicationFrequency[] | Prisma.ListEnumMedicationFrequencyFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MedicationFrequency[] | Prisma.ListEnumMedicationFrequencyFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMedicationFrequencyFilter<$PrismaModel> | $Enums.MedicationFrequency;
};
export type NestedEnumPresentationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Presentation | Prisma.EnumPresentationFieldRefInput<$PrismaModel>;
    in?: $Enums.Presentation[] | Prisma.ListEnumPresentationFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Presentation[] | Prisma.ListEnumPresentationFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPresentationWithAggregatesFilter<$PrismaModel> | $Enums.Presentation;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPresentationFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPresentationFilter<$PrismaModel>;
};
export type NestedEnumAdministrationRouteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdministrationRoute | Prisma.EnumAdministrationRouteFieldRefInput<$PrismaModel>;
    in?: $Enums.AdministrationRoute[] | Prisma.ListEnumAdministrationRouteFieldRefInput<$PrismaModel>;
    notIn?: $Enums.AdministrationRoute[] | Prisma.ListEnumAdministrationRouteFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumAdministrationRouteWithAggregatesFilter<$PrismaModel> | $Enums.AdministrationRoute;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAdministrationRouteFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAdministrationRouteFilter<$PrismaModel>;
};
export type NestedEnumMedicationFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MedicationFrequency | Prisma.EnumMedicationFrequencyFieldRefInput<$PrismaModel>;
    in?: $Enums.MedicationFrequency[] | Prisma.ListEnumMedicationFrequencyFieldRefInput<$PrismaModel>;
    notIn?: $Enums.MedicationFrequency[] | Prisma.ListEnumMedicationFrequencyFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumMedicationFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.MedicationFrequency;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMedicationFrequencyFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMedicationFrequencyFilter<$PrismaModel>;
};

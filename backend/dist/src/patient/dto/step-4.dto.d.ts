export declare class FamilyHistoryDto {
    parentesco: string;
    enfermedad: string;
    detalleOtra?: string;
}
export declare class CreateStep4Dto {
    tieneAntecedentesFamiliares: boolean;
    familyHistory?: FamilyHistoryDto[];
}

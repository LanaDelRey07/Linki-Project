export declare class AllergyDto {
    tipoAlergia: string;
    detalle: string;
}
export declare class ChronicConditionDto {
    tipo: string;
    detalleOtra?: string;
}
export declare class MedicationDto {
    nombre: string;
    dosis: string;
    frecuencia?: string;
}
export declare class SurgeryDto {
    tipoCirugia: string;
    anoAproximado?: number;
}
export declare class HospitalizationDto {
    motivo: string;
    anoAproximado?: number;
}
export declare class CreateStep3Dto {
    tieneAlergias: string;
    allergies?: AllergyDto[];
    tieneEnfermedadesCronicas: string;
    chronicConditions?: ChronicConditionDto[];
    tomaMedicamentos: boolean;
    medications?: MedicationDto[];
    haSidoOperado: boolean;
    surgeries?: SurgeryDto[];
    haSidoHospitalizado?: boolean;
    hospitalizations?: HospitalizationDto[];
}

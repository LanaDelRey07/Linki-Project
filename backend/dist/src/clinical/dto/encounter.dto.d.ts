export declare class CreateEncounterDto {
    appointmentId: string;
    motivoConsultaValidado: string;
    historiaEnfermedadActual: string;
    presionArterialSistolica?: number;
    presionArterialDiastolica?: number;
    frecuenciaCardiaca?: number;
    frecuenciaRespiratoria?: number;
    temperatura?: number;
    saturacionOxigeno?: number;
    peso?: number;
    talla?: number;
    examenFisicoGeneral: string;
    examenFisicoSegmentario?: string;
    tipoDiagnostico: string;
    observacionesDiagnosticas?: string;
    indicacionesNoFarmacologicas?: string;
    proximaCitaSugerida?: string;
    notasInternas?: string;
    diagnoses?: EncounterDiagnosisDto[];
    prescriptions?: EncounterPrescriptionDto[];
    labOrders?: EncounterLabOrderDto[];
    imagingOrders?: EncounterImagingOrderDto[];
    referrals?: EncounterReferralDto[];
}
export declare class EncounterDiagnosisDto {
    cie10Code: string;
    esDiagnosticoPrincipal: boolean;
}
export declare class EncounterPrescriptionDto {
    medicamento: string;
    presentacion: string;
    dosis: string;
    viaAdministracion: string;
    frecuencia: string;
    duracion: string;
    instruccionesEspeciales?: string;
}
export declare class EncounterLabOrderDto {
    estudio: string;
}
export declare class EncounterImagingOrderDto {
    estudio: string;
}
export declare class EncounterReferralDto {
    especialidadDestino: string;
    motivo?: string;
}
export declare class CloseEncounterDto {
}
export declare class AddendumDto {
    motivoAclaracion: string;
    contenido: string;
}

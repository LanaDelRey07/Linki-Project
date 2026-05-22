"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddendumDto = exports.CloseEncounterDto = exports.EncounterReferralDto = exports.EncounterImagingOrderDto = exports.EncounterLabOrderDto = exports.EncounterPrescriptionDto = exports.EncounterDiagnosisDto = exports.CreateEncounterDto = void 0;
const class_validator_1 = require("class-validator");
class CreateEncounterDto {
    appointmentId;
    motivoConsultaValidado;
    historiaEnfermedadActual;
    presionArterialSistolica;
    presionArterialDiastolica;
    frecuenciaCardiaca;
    frecuenciaRespiratoria;
    temperatura;
    saturacionOxigeno;
    peso;
    talla;
    examenFisicoGeneral;
    examenFisicoSegmentario;
    tipoDiagnostico;
    observacionesDiagnosticas;
    indicacionesNoFarmacologicas;
    proximaCitaSugerida;
    notasInternas;
    diagnoses;
    prescriptions;
    labOrders;
    imagingOrders;
    referrals;
}
exports.CreateEncounterDto = CreateEncounterDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEncounterDto.prototype, "appointmentId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEncounterDto.prototype, "motivoConsultaValidado", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEncounterDto.prototype, "historiaEnfermedadActual", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateEncounterDto.prototype, "presionArterialSistolica", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateEncounterDto.prototype, "presionArterialDiastolica", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateEncounterDto.prototype, "frecuenciaCardiaca", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateEncounterDto.prototype, "frecuenciaRespiratoria", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateEncounterDto.prototype, "temperatura", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateEncounterDto.prototype, "saturacionOxigeno", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateEncounterDto.prototype, "peso", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateEncounterDto.prototype, "talla", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEncounterDto.prototype, "examenFisicoGeneral", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEncounterDto.prototype, "examenFisicoSegmentario", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['PRESUNTIVO', 'DEFINITIVO']),
    __metadata("design:type", String)
], CreateEncounterDto.prototype, "tipoDiagnostico", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEncounterDto.prototype, "observacionesDiagnosticas", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEncounterDto.prototype, "indicacionesNoFarmacologicas", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['UNA_SEMANA', 'DOS_SEMANAS', 'UN_MES', 'TRES_MESES', 'SEIS_MESES', 'A_DEMANDA']),
    __metadata("design:type", String)
], CreateEncounterDto.prototype, "proximaCitaSugerida", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEncounterDto.prototype, "notasInternas", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateEncounterDto.prototype, "diagnoses", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateEncounterDto.prototype, "prescriptions", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateEncounterDto.prototype, "labOrders", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateEncounterDto.prototype, "imagingOrders", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateEncounterDto.prototype, "referrals", void 0);
class EncounterDiagnosisDto {
    cie10Code;
    esDiagnosticoPrincipal;
}
exports.EncounterDiagnosisDto = EncounterDiagnosisDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EncounterDiagnosisDto.prototype, "cie10Code", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], EncounterDiagnosisDto.prototype, "esDiagnosticoPrincipal", void 0);
class EncounterPrescriptionDto {
    medicamento;
    presentacion;
    dosis;
    viaAdministracion;
    frecuencia;
    duracion;
    instruccionesEspeciales;
}
exports.EncounterPrescriptionDto = EncounterPrescriptionDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EncounterPrescriptionDto.prototype, "medicamento", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['TABLETA', 'CAPSULA', 'JARABE', 'AMPOLLA', 'CREMA', 'GOTAS', 'SUSPENSION', 'OTRO']),
    __metadata("design:type", String)
], EncounterPrescriptionDto.prototype, "presentacion", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EncounterPrescriptionDto.prototype, "dosis", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['ORAL', 'INTRAMUSCULAR', 'INTRAVENOSA', 'TOPICA', 'SUBLINGUAL', 'INHALATORIA', 'RECTAL', 'OTRA']),
    __metadata("design:type", String)
], EncounterPrescriptionDto.prototype, "viaAdministracion", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['CADA_4H', 'CADA_6H', 'CADA_8H', 'CADA_12H', 'CADA_24H', 'DOSIS_UNICA', 'PRN', 'OTRA']),
    __metadata("design:type", String)
], EncounterPrescriptionDto.prototype, "frecuencia", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EncounterPrescriptionDto.prototype, "duracion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EncounterPrescriptionDto.prototype, "instruccionesEspeciales", void 0);
class EncounterLabOrderDto {
    estudio;
}
exports.EncounterLabOrderDto = EncounterLabOrderDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EncounterLabOrderDto.prototype, "estudio", void 0);
class EncounterImagingOrderDto {
    estudio;
}
exports.EncounterImagingOrderDto = EncounterImagingOrderDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EncounterImagingOrderDto.prototype, "estudio", void 0);
class EncounterReferralDto {
    especialidadDestino;
    motivo;
}
exports.EncounterReferralDto = EncounterReferralDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EncounterReferralDto.prototype, "especialidadDestino", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], EncounterReferralDto.prototype, "motivo", void 0);
class CloseEncounterDto {
}
exports.CloseEncounterDto = CloseEncounterDto;
class AddendumDto {
    motivoAclaracion;
    contenido;
}
exports.AddendumDto = AddendumDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddendumDto.prototype, "motivoAclaracion", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddendumDto.prototype, "contenido", void 0);
//# sourceMappingURL=encounter.dto.js.map
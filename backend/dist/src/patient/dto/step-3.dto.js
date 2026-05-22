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
exports.CreateStep3Dto = exports.HospitalizationDto = exports.SurgeryDto = exports.MedicationDto = exports.ChronicConditionDto = exports.AllergyDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class AllergyDto {
    tipoAlergia;
    detalle;
}
exports.AllergyDto = AllergyDto;
__decorate([
    (0, class_validator_1.IsEnum)(['MEDICAMENTOS', 'ALIMENTOS', 'AMBIENTALES', 'LATEX', 'OTRAS']),
    __metadata("design:type", String)
], AllergyDto.prototype, "tipoAlergia", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AllergyDto.prototype, "detalle", void 0);
class ChronicConditionDto {
    tipo;
    detalleOtra;
}
exports.ChronicConditionDto = ChronicConditionDto;
__decorate([
    (0, class_validator_1.IsEnum)([
        'DIABETES_TIPO_1', 'DIABETES_TIPO_2', 'HIPERTENSION', 'ASMA',
        'HIPOTIROIDISMO', 'EPILEPSIA', 'CARDIOPATIA', 'OTRA',
    ]),
    __metadata("design:type", String)
], ChronicConditionDto.prototype, "tipo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChronicConditionDto.prototype, "detalleOtra", void 0);
class MedicationDto {
    nombre;
    dosis;
    frecuencia;
}
exports.MedicationDto = MedicationDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MedicationDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MedicationDto.prototype, "dosis", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MedicationDto.prototype, "frecuencia", void 0);
class SurgeryDto {
    tipoCirugia;
    anoAproximado;
}
exports.SurgeryDto = SurgeryDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SurgeryDto.prototype, "tipoCirugia", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], SurgeryDto.prototype, "anoAproximado", void 0);
class HospitalizationDto {
    motivo;
    anoAproximado;
}
exports.HospitalizationDto = HospitalizationDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], HospitalizationDto.prototype, "motivo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], HospitalizationDto.prototype, "anoAproximado", void 0);
class CreateStep3Dto {
    tieneAlergias;
    allergies;
    tieneEnfermedadesCronicas;
    chronicConditions;
    tomaMedicamentos;
    medications;
    haSidoOperado;
    surgeries;
    haSidoHospitalizado;
    hospitalizations;
}
exports.CreateStep3Dto = CreateStep3Dto;
__decorate([
    (0, class_validator_1.IsEnum)(['SI', 'NO', 'NO_SE']),
    __metadata("design:type", String)
], CreateStep3Dto.prototype, "tieneAlergias", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => AllergyDto),
    __metadata("design:type", Array)
], CreateStep3Dto.prototype, "allergies", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['SI', 'NO', 'NO_SE']),
    __metadata("design:type", String)
], CreateStep3Dto.prototype, "tieneEnfermedadesCronicas", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ChronicConditionDto),
    __metadata("design:type", Array)
], CreateStep3Dto.prototype, "chronicConditions", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateStep3Dto.prototype, "tomaMedicamentos", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => MedicationDto),
    __metadata("design:type", Array)
], CreateStep3Dto.prototype, "medications", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateStep3Dto.prototype, "haSidoOperado", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => SurgeryDto),
    __metadata("design:type", Array)
], CreateStep3Dto.prototype, "surgeries", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateStep3Dto.prototype, "haSidoHospitalizado", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => HospitalizationDto),
    __metadata("design:type", Array)
], CreateStep3Dto.prototype, "hospitalizations", void 0);
//# sourceMappingURL=step-3.dto.js.map
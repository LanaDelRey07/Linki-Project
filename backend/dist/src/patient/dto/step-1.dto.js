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
exports.CreateStep1Dto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CreateStep1Dto {
    nombres;
    apellidoPaterno;
    apellidoMaterno;
    tipoDocumento;
    numeroDocumento;
    extensionDepartamento;
    fechaNacimiento;
    sexoBiologico;
    estadoCivil;
    ocupacion;
    telefonoPrincipal;
    telefonoSecundario;
    correoElectronico;
    direccion;
    ciudad;
    departamento;
}
exports.CreateStep1Dto = CreateStep1Dto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStep1Dto.prototype, "nombres", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStep1Dto.prototype, "apellidoPaterno", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStep1Dto.prototype, "apellidoMaterno", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['CI', 'PASAPORTE', 'CARNET_EXTRANJERIA']),
    __metadata("design:type", String)
], CreateStep1Dto.prototype, "tipoDocumento", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStep1Dto.prototype, "numeroDocumento", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => (value === '' ? undefined : value)),
    (0, class_validator_1.IsEnum)(['LP', 'CB', 'SC', 'OR', 'PT', 'TJ', 'CH', 'BE', 'PA']),
    __metadata("design:type", String)
], CreateStep1Dto.prototype, "extensionDepartamento", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateStep1Dto.prototype, "fechaNacimiento", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['MASCULINO', 'FEMENINO']),
    __metadata("design:type", String)
], CreateStep1Dto.prototype, "sexoBiologico", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['SOLTERO', 'CASADO', 'UNION_LIBRE', 'DIVORCIADO', 'VIUDO']),
    __metadata("design:type", String)
], CreateStep1Dto.prototype, "estadoCivil", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStep1Dto.prototype, "ocupacion", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStep1Dto.prototype, "telefonoPrincipal", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStep1Dto.prototype, "telefonoSecundario", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateStep1Dto.prototype, "correoElectronico", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStep1Dto.prototype, "direccion", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStep1Dto.prototype, "ciudad", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['LP', 'CB', 'SC', 'OR', 'PT', 'TJ', 'CH', 'BE', 'PA']),
    __metadata("design:type", String)
], CreateStep1Dto.prototype, "departamento", void 0);
//# sourceMappingURL=step-1.dto.js.map
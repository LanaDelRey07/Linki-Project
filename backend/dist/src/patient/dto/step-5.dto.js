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
exports.CreateStep5Dto = void 0;
const class_validator_1 = require("class-validator");
class CreateStep5Dto {
    tabaquismo;
    consumoAlcohol;
    actividadFisica;
    consumeOtrasSustancias;
    detalleOtrasSustancias;
}
exports.CreateStep5Dto = CreateStep5Dto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['NO', 'OCASIONAL', 'DIARIO', 'EX_FUMADOR']),
    __metadata("design:type", String)
], CreateStep5Dto.prototype, "tabaquismo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['NO', 'OCASIONAL', 'REGULAR', 'EX_BEBEDOR']),
    __metadata("design:type", String)
], CreateStep5Dto.prototype, "consumoAlcohol", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['SEDENTARIO', 'UNO_DOS_VECES', 'TRES_CINCO_VECES', 'DIARIO']),
    __metadata("design:type", String)
], CreateStep5Dto.prototype, "actividadFisica", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateStep5Dto.prototype, "consumeOtrasSustancias", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStep5Dto.prototype, "detalleOtrasSustancias", void 0);
//# sourceMappingURL=step-5.dto.js.map
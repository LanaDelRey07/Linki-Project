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
exports.CreateStep6Dto = void 0;
const class_validator_1 = require("class-validator");
class CreateStep6Dto {
    actualmenteEmbarazada;
    gestas;
    partos;
    cesareas;
    abortos;
    fechaUltimaMenstruacion;
    metodoAnticonceptivo;
    otroMetodoAnticonceptivo;
}
exports.CreateStep6Dto = CreateStep6Dto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['SI', 'NO', 'NO_SE']),
    __metadata("design:type", String)
], CreateStep6Dto.prototype, "actualmenteEmbarazada", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateStep6Dto.prototype, "gestas", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateStep6Dto.prototype, "partos", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateStep6Dto.prototype, "cesareas", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateStep6Dto.prototype, "abortos", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateStep6Dto.prototype, "fechaUltimaMenstruacion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['NINGUNO', 'HORMONAL_ORAL', 'DIU', 'IMPLANTE', 'PRESERVATIVO', 'OTRO']),
    __metadata("design:type", String)
], CreateStep6Dto.prototype, "metodoAnticonceptivo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStep6Dto.prototype, "otroMetodoAnticonceptivo", void 0);
//# sourceMappingURL=step-6.dto.js.map
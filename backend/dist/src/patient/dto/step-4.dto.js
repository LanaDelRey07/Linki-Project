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
exports.CreateStep4Dto = exports.FamilyHistoryDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class FamilyHistoryDto {
    parentesco;
    enfermedad;
    detalleOtra;
}
exports.FamilyHistoryDto = FamilyHistoryDto;
__decorate([
    (0, class_validator_1.IsEnum)(['PADRE', 'MADRE', 'HERMANO']),
    __metadata("design:type", String)
], FamilyHistoryDto.prototype, "parentesco", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['DIABETES', 'HTA', 'CANCER', 'CARDIOPATIA', 'ACV', 'ENFERMEDAD_MENTAL', 'OTRA']),
    __metadata("design:type", String)
], FamilyHistoryDto.prototype, "enfermedad", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FamilyHistoryDto.prototype, "detalleOtra", void 0);
class CreateStep4Dto {
    tieneAntecedentesFamiliares;
    familyHistory;
}
exports.CreateStep4Dto = CreateStep4Dto;
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateStep4Dto.prototype, "tieneAntecedentesFamiliares", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => FamilyHistoryDto),
    __metadata("design:type", Array)
], CreateStep4Dto.prototype, "familyHistory", void 0);
//# sourceMappingURL=step-4.dto.js.map
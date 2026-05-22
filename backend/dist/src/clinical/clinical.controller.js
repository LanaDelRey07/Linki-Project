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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClinicalController = void 0;
const common_1 = require("@nestjs/common");
const clinical_service_1 = require("./clinical.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const current_user_decorator_1 = require("../common/decorators/current-user.decorator");
const encounter_dto_1 = require("./dto/encounter.dto");
let ClinicalController = class ClinicalController {
    clinicalService;
    constructor(clinicalService) {
        this.clinicalService = clinicalService;
    }
    async createEncounter(userId, dto) {
        return this.clinicalService.createEncounter(userId, dto);
    }
    async updateEncounter(userId, id, dto) {
        return this.clinicalService.updateEncounter(userId, id, dto);
    }
    async closeEncounter(userId, id) {
        return this.clinicalService.closeEncounter(userId, id);
    }
    async getEncounter(id) {
        return this.clinicalService.getEncounter(id);
    }
    async addAddendum(userId, id, dto) {
        return this.clinicalService.addAddendum(userId, id, dto);
    }
    async getPatientSummary(userId, patientProfileId) {
        return this.clinicalService.getPatientSummary(userId, patientProfileId);
    }
};
exports.ClinicalController = ClinicalController;
__decorate([
    (0, common_1.Post)('encounters'),
    __param(0, (0, current_user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, encounter_dto_1.CreateEncounterDto]),
    __metadata("design:returntype", Promise)
], ClinicalController.prototype, "createEncounter", null);
__decorate([
    (0, common_1.Patch)('encounters/:id'),
    __param(0, (0, current_user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], ClinicalController.prototype, "updateEncounter", null);
__decorate([
    (0, common_1.Post)('encounters/:id/close'),
    __param(0, (0, current_user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ClinicalController.prototype, "closeEncounter", null);
__decorate([
    (0, common_1.Get)('encounters/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClinicalController.prototype, "getEncounter", null);
__decorate([
    (0, common_1.Post)('encounters/:id/addendum'),
    __param(0, (0, current_user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, encounter_dto_1.AddendumDto]),
    __metadata("design:returntype", Promise)
], ClinicalController.prototype, "addAddendum", null);
__decorate([
    (0, common_1.Get)('patient/:patientProfileId/summary'),
    __param(0, (0, current_user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Param)('patientProfileId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ClinicalController.prototype, "getPatientSummary", null);
exports.ClinicalController = ClinicalController = __decorate([
    (0, common_1.Controller)('clinical'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('DOCTOR'),
    __metadata("design:paramtypes", [clinical_service_1.ClinicalService])
], ClinicalController);
//# sourceMappingURL=clinical.controller.js.map
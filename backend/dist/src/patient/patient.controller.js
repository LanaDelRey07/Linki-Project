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
exports.PatientController = void 0;
const common_1 = require("@nestjs/common");
const patient_service_1 = require("./patient.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const current_user_decorator_1 = require("../common/decorators/current-user.decorator");
const step_1_dto_1 = require("./dto/step-1.dto");
const step_2_dto_1 = require("./dto/step-2.dto");
const step_3_dto_1 = require("./dto/step-3.dto");
const step_4_dto_1 = require("./dto/step-4.dto");
const step_5_dto_1 = require("./dto/step-5.dto");
const step_6_dto_1 = require("./dto/step-6.dto");
let PatientController = class PatientController {
    patientService;
    constructor(patientService) {
        this.patientService = patientService;
    }
    async getProfile(userId) {
        return this.patientService.getProfile(userId);
    }
    async saveStep1(userId, dto) {
        return this.patientService.saveStep1(userId, dto);
    }
    async updateStep1(userId, dto) {
        return this.patientService.saveStep1(userId, dto);
    }
    async saveStep2(userId, dto) {
        return this.patientService.saveStep2(userId, dto);
    }
    async saveStep3(userId, dto) {
        return this.patientService.saveStep3(userId, dto);
    }
    async updateStep3(userId, dto) {
        return this.patientService.saveStep3(userId, dto);
    }
    async saveStep4(userId, dto) {
        return this.patientService.saveStep4(userId, dto);
    }
    async saveStep5(userId, dto) {
        return this.patientService.saveStep5(userId, dto);
    }
    async saveStep6(userId, dto) {
        return this.patientService.saveStep6(userId, dto);
    }
    async getVersions(userId) {
        return this.patientService.getVersions(userId);
    }
    async getVersion(userId, versionNumber) {
        return this.patientService.getVersion(userId, versionNumber);
    }
};
exports.PatientController = PatientController;
__decorate([
    (0, common_1.Get)('profile'),
    __param(0, (0, current_user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Post)('profile/step-1'),
    __param(0, (0, current_user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, step_1_dto_1.CreateStep1Dto]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "saveStep1", null);
__decorate([
    (0, common_1.Patch)('profile/step-1'),
    __param(0, (0, current_user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, step_1_dto_1.CreateStep1Dto]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "updateStep1", null);
__decorate([
    (0, common_1.Post)('profile/step-2'),
    __param(0, (0, current_user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, step_2_dto_1.CreateStep2Dto]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "saveStep2", null);
__decorate([
    (0, common_1.Post)('profile/step-3'),
    __param(0, (0, current_user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, step_3_dto_1.CreateStep3Dto]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "saveStep3", null);
__decorate([
    (0, common_1.Patch)('profile/step-3'),
    __param(0, (0, current_user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, step_3_dto_1.CreateStep3Dto]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "updateStep3", null);
__decorate([
    (0, common_1.Post)('profile/step-4'),
    __param(0, (0, current_user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, step_4_dto_1.CreateStep4Dto]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "saveStep4", null);
__decorate([
    (0, common_1.Post)('profile/step-5'),
    __param(0, (0, current_user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, step_5_dto_1.CreateStep5Dto]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "saveStep5", null);
__decorate([
    (0, common_1.Post)('profile/step-6'),
    __param(0, (0, current_user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, step_6_dto_1.CreateStep6Dto]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "saveStep6", null);
__decorate([
    (0, common_1.Get)('profile/versions'),
    __param(0, (0, current_user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "getVersions", null);
__decorate([
    (0, common_1.Get)('profile/versions/:versionNumber'),
    __param(0, (0, current_user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Param)('versionNumber')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "getVersion", null);
exports.PatientController = PatientController = __decorate([
    (0, common_1.Controller)('patient'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [patient_service_1.PatientService])
], PatientController);
//# sourceMappingURL=patient.controller.js.map
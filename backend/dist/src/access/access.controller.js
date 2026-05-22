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
exports.AccessController = void 0;
const common_1 = require("@nestjs/common");
const access_service_1 = require("./access.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const roles_guard_1 = require("../auth/guards/roles.guard");
const current_user_decorator_1 = require("../common/decorators/current-user.decorator");
const access_dto_1 = require("./dto/access.dto");
let AccessController = class AccessController {
    accessService;
    constructor(accessService) {
        this.accessService = accessService;
    }
    async grantAccess(userId, dto) {
        return this.accessService.grantAccess(userId, dto.doctorProfileId);
    }
    async revokeAccess(userId, doctorProfileId) {
        return this.accessService.revokeAccess(userId, doctorProfileId);
    }
    async getGrantedAccessList(userId) {
        return this.accessService.getGrantedAccessList(userId);
    }
};
exports.AccessController = AccessController;
__decorate([
    (0, common_1.Post)('grant'),
    __param(0, (0, current_user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, access_dto_1.GrantAccessDto]),
    __metadata("design:returntype", Promise)
], AccessController.prototype, "grantAccess", null);
__decorate([
    (0, common_1.Delete)(':doctorProfileId'),
    __param(0, (0, current_user_decorator_1.CurrentUser)('id')),
    __param(1, (0, common_1.Param)('doctorProfileId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AccessController.prototype, "revokeAccess", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AccessController.prototype, "getGrantedAccessList", null);
exports.AccessController = AccessController = __decorate([
    (0, common_1.Controller)('access'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('PATIENT'),
    __metadata("design:paramtypes", [access_service_1.AccessService])
], AccessController);
//# sourceMappingURL=access.controller.js.map
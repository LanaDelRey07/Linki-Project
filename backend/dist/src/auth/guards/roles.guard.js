"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesGuard = void 0;
const common_1 = require("@nestjs/common");
let RolesGuard = class RolesGuard {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        const requiredRoles = this.getMetadataRoles(context);
        if (!requiredRoles || requiredRoles.length === 0) {
            return true;
        }
        const hasRole = requiredRoles.some((role) => user.roles.includes(role));
        if (!hasRole) {
            throw new common_1.ForbiddenException('No tiene permisos para realizar esta acción');
        }
        return true;
    }
    getMetadataRoles(context) {
        const handler = context.getHandler();
        const classRef = context.getClass();
        const handlerRoles = Reflect.getMetadata('roles', handler) || [];
        const classRoles = Reflect.getMetadata('roles', classRef) || [];
        return handlerRoles.length > 0 ? handlerRoles : classRoles;
    }
};
exports.RolesGuard = RolesGuard;
exports.RolesGuard = RolesGuard = __decorate([
    (0, common_1.Injectable)()
], RolesGuard);
//# sourceMappingURL=roles.guard.js.map
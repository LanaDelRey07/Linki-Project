import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';

@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const requiredRoles = this.getMetadataRoles(context);

    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    const hasRole = requiredRoles.some((role: string) =>
      user.roles.includes(role),
    );

    if (!hasRole) {
      throw new ForbiddenException('No tiene permisos para realizar esta acción');
    }

    return true;
  }

  private getMetadataRoles(context: ExecutionContext): string[] {
    const handler = context.getHandler();
    const classRef = context.getClass();

    const handlerRoles = Reflect.getMetadata('roles', handler) || [];
    const classRoles = Reflect.getMetadata('roles', classRef) || [];

    return handlerRoles.length > 0 ? handlerRoles : classRoles;
  }
}
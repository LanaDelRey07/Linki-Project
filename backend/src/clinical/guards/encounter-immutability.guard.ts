import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class EncounterImmutabilityGuard implements CanActivate {
  constructor(private prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const encounterId = request.params?.id;

    if (!encounterId) return true;

    const encounter = await this.prisma.clinicalEncounter.findUnique({
      where: { id: encounterId },
    });

    if (encounter?.status === 'CLOSED') {
      const method = request.method;
      if (['PATCH', 'PUT', 'DELETE'].includes(method)) {
        throw new ForbiddenException(
          'No se puede modificar un encuentro clínico cerrado (RM 0090/2008). Use una Nota Aclaratoria para correcciones.',
        );
      }
    }

    return true;
  }
}
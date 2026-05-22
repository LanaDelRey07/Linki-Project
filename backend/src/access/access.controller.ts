import { Controller, Get, Post, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { AccessService } from './access.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../auth/guards/roles.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { GrantAccessDto } from './dto/access.dto';

@Controller('access')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('PATIENT')
export class AccessController {
  constructor(private accessService: AccessService) {}

  @Post('grant')
  async grantAccess(@CurrentUser('id') userId: string, @Body() dto: GrantAccessDto) {
    return this.accessService.grantAccess(userId, dto.doctorProfileId);
  }

  @Delete(':doctorProfileId')
  async revokeAccess(
    @CurrentUser('id') userId: string,
    @Param('doctorProfileId') doctorProfileId: string,
  ) {
    return this.accessService.revokeAccess(userId, doctorProfileId);
  }

  @Get()
  async getGrantedAccessList(@CurrentUser('id') userId: string) {
    return this.accessService.getGrantedAccessList(userId);
  }
}
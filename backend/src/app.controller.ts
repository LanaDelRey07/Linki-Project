import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getRoot() {
    return { status: 'ok', service: 'linki-backend' };
  }

  @Get('health')
  getHealth() {
    return { status: 'ok' };
  }
}

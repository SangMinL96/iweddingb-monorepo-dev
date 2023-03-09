import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from '@iweddingb-workspace/shared';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string | User {
    return this.appService.getHello();
  }
}

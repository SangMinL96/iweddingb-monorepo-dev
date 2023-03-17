import { MysqlService } from '@common/DB/mysql.service';
import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('/api/v1/auth')
export class AuthController {
  constructor() {
    // private readonly connectionService: MysqlService, // private readonly authService: AuthService,
    //
  }
  @Get('signIn')
  signIn(): string {
    return 'string';
  }
}

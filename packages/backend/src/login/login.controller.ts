import { MysqlService } from '@common/DB/mysql.service';
import { Jwt } from '@common/jwt/jwt';
import { JwtAuthGuard } from '@common/jwt/jwt-auth.guard';
import {
  ExecResultItf,
  LoginParamsItf,
  UserInfoItf,
} from '@iweddingb-workspace/shared';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';

import { LoginService } from './login.service';
import { getUserQuery } from './query';

@Controller('/api/v1/login')
export class LoginController {
  constructor(
    private readonly loginService: LoginService,
    private readonly mysqlService: MysqlService,
  ) {}

  @Get('/getUser')
  @UseGuards(JwtAuthGuard)
  async getUser(@Jwt() jwt: UserInfoItf): Promise<UserInfoItf[]> {
    const result = await this.mysqlService.getQuery<UserInfoItf[]>(
      getUserQuery(),
      {
        id: 'co_sl_s312',
      },
    );
    return result;
  }

  @Post('hp-login')
  async login(
    @Body() body: LoginParamsItf,
  ): Promise<ExecResultItf & { access_token: string; refresh_token: string }> {
    const params = {
      ...body,
    };
    const { access_token, refresh_token } = await this.loginService.login(
      params,
    );
    return { result: 'success', access_token, refresh_token };
  }
}

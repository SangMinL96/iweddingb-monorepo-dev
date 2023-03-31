import { MysqlService } from '@common/DB/mysql.service';
import { UserInfoItf } from '@iweddingb-workspace/shared';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { getRefreshTokenQuery, hpAuthNumberSendQuery } from './query';
import { LoginParamsItf } from '@iweddingb-workspace/shared';
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly mysqlService: MysqlService,
  ) {
    //
  }
  createToken(payload: UserInfoItf): string {
    const token = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: '30m',
      privateKey: process.env.JWT_SECRET,
    });
    return token;
  }
  createRefreshToken(payload: UserInfoItf): string {
    const token = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: '14d',
      privateKey: process.env.JWT_SECRET,
    });
    return token;
  }
  async hpAuthNumberSend(params: { hp: string; authnum: string }) {
    const result = await this.mysqlService.execQuery(
      hpAuthNumberSendQuery(),
      params,
    );
    return result;
  }

  async refreshTokenUser(params: { ent_code: string; name: string }) {
    const [result] = await this.mysqlService.getQuery<
      { refresh_token: string }[]
    >(getRefreshTokenQuery(), params);
    return result;
  }
}

import { MysqlService } from '@common/DB/mysql.service';
import { UserInfoItf } from '@iweddingb-workspace/shared';
import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { userDataQuery } from './query';

@Injectable()
export class LoginService {
  constructor(
    private readonly authService: AuthService,
    private readonly MysqlService: MysqlService,
  ) {
    //
  }
  async login({ hp }) {
    const result = await this.MysqlService.getQuery<UserInfoItf[]>(
      userDataQuery(),
      { hp },
    );
    const token = await this.authService.createToken(result[0]);
    return token;
  }
}

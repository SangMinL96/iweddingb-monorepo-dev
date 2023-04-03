import { MysqlService } from "@common/DB/mysql.service";
import { LoginParamsItf, UserInfoItf } from "@iweddingb-workspace/shared";
import { Injectable } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";
import { updateRefreshTokenQuery, userDataQuery } from "./query";

@Injectable()
export class LoginService {
  constructor(
    private readonly authService: AuthService,
    private readonly MysqlService: MysqlService
  ) {
    //
  }
  async login({ hp, name }: LoginParamsItf) {
    const [user] = await this.MysqlService.getQuery<UserInfoItf[]>(
      userDataQuery(),
      { hp, name }
    );
    const access_token = await this.authService.createToken(user);
    const refresh_token = await this.authService.createRefreshToken(user);
    const { result } = await this.MysqlService.execQuery(
      updateRefreshTokenQuery(),
      {
        refresh_token,
        hp,
        name,
      }
    );
    if (result === "fail") {
      throw new Error("리프레쉬 토큰 발급 에러");
    }
    return { access_token, refresh_token };
  }
}

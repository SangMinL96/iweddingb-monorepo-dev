import { Jwt } from "@common/jwt/jwt";
import { JwtAuthGuard } from "@common/jwt/jwt-auth.guard";
import { ExecResultItf, UserInfoItf } from "@iweddingb-workspace/shared";
import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthService } from "./auth.service";

@Controller("/api/v1/auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private jwtService: JwtService
  ) {
    // private readonly connectionService: MysqlService, // private readonly authService: AuthService,
    //
  }
  @Post("hpAuthNum-send")
  async signIn(
    @Body() body: { hp: string; authnum: string }
  ): Promise<ExecResultItf> {
    const params = {
      ...body,
    };
    const result = await this.authService.hpAuthNumberSend(params);
    if (result) {
      return { result: "success" };
    } else {
      return { result: "fail" };
    }
  }

  @Post("refresh-validate")
  async authRefreshToken(
    @Jwt() jwt: UserInfoItf
  ): Promise<ExecResultItf & { access_token }> {
    const params = {
      name: jwt.name,
      ent_code: jwt.ent_code,
    };
    const { refresh_token } = await this.authService.refreshTokenUser(params);
    const verified = (await this.jwtService.verify(refresh_token, {
      publicKey: process.env.JWT_SECRET,
    })) as UserInfoItf;
    if (jwt.name === verified.name && jwt.ent_code === verified.ent_code) {
      const access_token = await this.authService.createToken(jwt);
      return { result: "success", access_token };
    } else {
      return { result: "fail", access_token: "" };
    }
  }
}

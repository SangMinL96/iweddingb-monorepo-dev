import { UserInfoItf } from '@iweddingb-workspace/shared';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {
    //
  }
  createToken(payload: UserInfoItf): string {
    const token = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: '3s',
      privateKey: process.env.JWT_SECRET,
    });
    return token;
  }
}

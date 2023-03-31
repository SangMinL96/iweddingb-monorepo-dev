import { MysqlService } from '@common/DB/mysql.service';
import { JwtStrategy } from '@common/jwt/jwtStrategy';
import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService, MysqlService, JwtService, JwtStrategy],
})
export class AuthModule {}

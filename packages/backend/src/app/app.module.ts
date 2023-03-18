import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/auth/auth.module';
import { LoginModule } from 'src/login/login.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: dotEnv(),
    }),
    LoginModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

function dotEnv() {
  return process.env.NODE_ENV === 'dev'
    ? '.env.dev'
    : process.env.NODE_ENV === 'production'
    ? '.env.production'
    : '.env.production';
}
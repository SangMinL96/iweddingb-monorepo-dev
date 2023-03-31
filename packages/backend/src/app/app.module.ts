import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/auth/auth.module';
import { EnterpriseModule } from 'src/enterprise/enterprise.module';
import { LoginModule } from 'src/login/login.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from 'src/schedule/schedule.module';

@Module({
  imports: [
    LoginModule,
    AuthModule,
    EnterpriseModule,
    ScheduleModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: dotEnv(),
    }),
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

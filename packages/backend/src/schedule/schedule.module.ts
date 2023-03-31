import { MysqlService } from '@common/DB/mysql.service';
import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ScheduleController } from './schedule.controller';
import { ScheduleService } from './schedule.service';

@Module({
  imports: [],
  controllers: [ScheduleController],
  providers: [ScheduleService, MysqlService, JwtService],
})
export class ScheduleModule {}

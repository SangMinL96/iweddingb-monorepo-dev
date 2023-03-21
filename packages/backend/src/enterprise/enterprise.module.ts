import { MysqlService } from '@common/DB/mysql.service';
import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { EnterpriseController } from './enterprise.controller';
import { EnterpriseService } from './enterprise.service';

@Module({
  imports: [],
  controllers: [EnterpriseController],
  providers: [EnterpriseService, MysqlService, JwtService],
})
export class EnterpriseModule {}

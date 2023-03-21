import { MysqlService } from '@common/DB/mysql.service';
import {
  HallInfoItf,
  EnterPriseResultIft,
  HallTypeItf,
  UserInfoItf,
  HallScheduleItf,
} from '@iweddingb-workspace/shared';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { hallInfoQuery, hallScheduleQuery, hallTypeQuery } from './query';

@Injectable()
export class EnterpriseService {
  constructor(
    private jwtService: JwtService,
    private readonly mysqlService: MysqlService,
  ) {
    //
  }
  async hallInfoData(params: {
    ent_code: string;
  }): Promise<EnterPriseResultIft> {
    const [hallInfo] = await this.mysqlService.getQuery<HallInfoItf[]>(
      hallInfoQuery(),
      params,
    );
    const hallType = await this.mysqlService.getQuery<HallTypeItf[]>(
      hallTypeQuery(),
      params,
    );
    return { info: hallInfo, products: hallType };
  }
  async hallScheduleData(params: {
    ent_code: string;
  }): Promise<HallScheduleItf[]> {
    const schedule = await this.mysqlService.getQuery<HallScheduleItf[]>(
      hallScheduleQuery(),
      params,
    );
    return schedule;
  }
}

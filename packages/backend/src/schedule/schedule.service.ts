import { MysqlService } from '@common/DB/mysql.service';
import {
  ExecResultItf,
  isEmpty,
  ScheduleItf,
  scheduleTimeUpdateParams,
} from '@iweddingb-workspace/shared';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { scheduleQuery, timeUpdateQuery } from './query';

@Injectable()
export class ScheduleService {
  constructor(
    private jwtService: JwtService,
    private readonly mysqlService: MysqlService,
  ) {
    //
  }

  async scheduleData(params: any): Promise<ScheduleItf[]> {
    let date = {};
    if (isEmpty(params.day)) {
      date = {
        startDate: `${params.year}-${params.month}-${params.day}`,
        endDate: `${params.year}-${params.month}-${params.day}`,
      };
    } else {
      date = {
        startDate: `${params.year}-${params.month}-01`,
        endDate: `${params.year}-${params.month}-31`,
      };
    }
    const schedule = await this.mysqlService.getQuery<ScheduleItf[]>(
      scheduleQuery(),
      { ...params, ...date },
    );
    return schedule;
  }
  async timeUpdate(params: scheduleTimeUpdateParams): Promise<ExecResultItf> {
    const schedule = await this.mysqlService.execQuery(
      timeUpdateQuery(),
      params,
    );
    return schedule;
  }
}

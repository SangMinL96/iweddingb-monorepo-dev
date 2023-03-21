import {
  HallInfoItf,
  EnterPriseResultIft,
  HallScheduleItf,
} from '@iweddingb-workspace/shared';
import { Controller, Get } from '@nestjs/common';
import { EnterpriseService } from './enterprise.service';

@Controller('/api/v1/enterprise')
export class EnterpriseController {
  constructor(private readonly enterpriseService: EnterpriseService) {
    // private readonly authService: AuthService,
  }

  @Get('/info')
  getInfo(): any {
    return 'string';
  }
  @Get('/hallInfo')
  async getHallInfo(): Promise<EnterPriseResultIft> {
    const parmas = {
      ent_code: '1486016390',
    };
    const result = this.enterpriseService.hallInfoData(parmas);
    return result;
  }
  @Get('/hallSchedule')
  async getHallSchedule(): Promise<HallScheduleItf[]> {
    const parmas = {
      ent_code: '1486016390',
    };
    const result = this.enterpriseService.hallScheduleData(parmas);
    return result;
  }
}

import { Jwt } from '@common/jwt/jwt';
import { JwtAuthGuard } from '@common/jwt/jwt-auth.guard';
import {
  EnterPriseResultIft,
  ScheduleItf,
  UserInfoItf,
} from '@iweddingb-workspace/shared';
import { Controller, Get, Put, Query, UseGuards } from '@nestjs/common';
import { EnterpriseService } from './enterprise.service';

@Controller('/api/v1/enterprise')
export class EnterpriseController {
  constructor(private readonly enterpriseService: EnterpriseService) {
    // private readonly authService: AuthService,
  }

  @Get('/info')
  @UseGuards(JwtAuthGuard)
  getInfo(@Jwt() jwt: UserInfoItf): Promise<EnterPriseResultIft> {
    const parmas = {
      ent_code: jwt.ent_code,
    };
    const result = this.enterpriseService.infoData(parmas);
    return result;
  }
  @Get('/hallInfo')
  async getHallInfo(): Promise<EnterPriseResultIft> {
    const parmas = {
      ent_code: '1486016390',
    };
    const result = this.enterpriseService.hallInfoData(parmas);
    return result;
  }
}

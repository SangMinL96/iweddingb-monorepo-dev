import { MysqlService } from '@common/DB/mysql.service';
import {
  EnterPriseResultIft,
  HallInfoItf,
  HallTypeItf,
  InfoItf,
  ProductItf,
} from '@iweddingb-workspace/shared';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  hallInfoQuery,
  hallTypeQuery,
  infoProductQuery,
  infoQuery,
} from './query';

@Injectable()
export class EnterpriseService {
  constructor(
    private jwtService: JwtService,
    private readonly mysqlService: MysqlService,
  ) {
    //
  }
  async infoData(params: { ent_code: string }): Promise<EnterPriseResultIft> {
    const [info] = await this.mysqlService.getQuery<InfoItf[]>(
      infoQuery(),
      params,
    );
    const products = await this.mysqlService.getQuery<ProductItf[]>(
      infoProductQuery(),
      params,
    );
    return { info: info, products };
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
}

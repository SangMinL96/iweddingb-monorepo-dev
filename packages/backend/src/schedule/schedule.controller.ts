import { Jwt } from "@common/jwt/jwt";
import { JwtAuthGuard } from "@common/jwt/jwt-auth.guard";
import {
  ExecResultItf,
  ScheduleItf,
  scheduleTimeUpdateParams,
  UserInfoItf,
} from "@iweddingb-workspace/shared";
import { Body, Controller, Get, Put, Query, UseGuards } from "@nestjs/common";
import { ScheduleService } from "./schedule.service";

@Controller("/api/v1/schedule")
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {
    // private readonly authService: AuthService,
  }

  @Get("/times")
  @UseGuards(JwtAuthGuard)
  async getSchedule(
    @Jwt() jwt: UserInfoItf,
    @Query("year") year: string,
    @Query("month") month: string,
    @Query("day") day: string
  ): Promise<ScheduleItf[]> {
    const parmas = {
      ent_code: jwt.ent_code,
      year,
      month,
      day,
    };
    const result = this.scheduleService.scheduleData(parmas);
    return result;
  }
  @Put("/time/update")
  async putScheduleTimeUpdate(
    @Body() body: scheduleTimeUpdateParams
  ): Promise<ExecResultItf> {
    const parmas = { ...body, status: body.type === "minus" ? 2 : 1 };
    const result = await this.scheduleService.timeUpdate(parmas);
    if (result) {
      return { result: "success" };
    } else {
      return { result: "fail" };
    }
  }
}

export interface ScheduleItf {
  hall_name: string;
  weddinghall_code: number;
  banquet_code: number;
  enterprise_code: string;
  product_no: number;
  name: string;
  local: string;
  no: number;
  schedule: string;
  schedule_date: Date;
  schedule_time: string;
  comment: string;
  status: number;
  icon: number;
  modify_date: Date;
}
export interface scheduleTimeUpdateParams {
  no: number;
  type: "minus" | "plus";
  returnData: ScheduleItf[];
}

export interface getScheduleParams {
  ent_code: number | string;
  year: string;
  month: string;
  day?: string;
}

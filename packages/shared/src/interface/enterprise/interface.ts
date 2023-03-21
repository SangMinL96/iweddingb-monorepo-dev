export interface HallInfoItf {
  checkpoint: string;
  banquet_code: number;
  chk_wedding: string;
  chk_baby: string;
  chk_ani: string;
  name: string;
  name_new: string;
  addr: string;
  new_addr: string;
  rep_tel: string;
  fax_tel: string;
  no_reser: number;
  holiday: string;
  style: string;
  styles: string;
  lat: string;
  lng: string;
  popular_ck: number;
  benefit_ck: number;
  taste_ck: number;
  bpchk: string;
  onlyone_ck: number;
  path: string;
  lo_code: string;
  SIDO: string;
  GUGUN: string;
  DONG: string;
  logo: string;
  brand_ck: string;
  bbs_no: number;
  contents_text: string;
  es_contents: number;
  fb_thumbnail: string;
  thumbnail: string;
  button_type: number;
  typical: string;
  typical_view: string;
  score_avg: string;
}

export interface HallTypeItf {
  weddinghall_code: number;
  banquet_code: number;
  name: string;
  local: string;
  shape: string;
  style: string;
  min_person: number;
  seat_person: number;
  max_person: number;
  food_val: string;
  min_food_fee: string;
  max_food_fee: string;
  time_val: string;
  time_text: null;
  flower_val: string;
  min_flower_fee1: string;
  max_flower_fee1: string;
  min_flower_fee2: string;
  max_flower_fee2: string;
  min_flower_fee3: string;
  max_flower_fee3: string;
  use_val: string;
  min_use_fee: string;
  max_use_fee: string;
  drink_val: string;
  drink_fee: string;
  direct_check: number;
  min_direct_fee: string;
  max_direct_fee: string;
}

export interface HallScheduleItf {
  hall_name: string;
  weddinghall_code: number;
  banquet_code: number;
  name: string;
  local: string;
  no: number;
  schedule_date: Date;
  schedule_time: string;
  comment: string;
  status: number;
  icon: number;
  modify_date: Date;
}

export interface EnterPriseResultIft {
  info: HallInfoItf;
  products: HallTypeItf[];
}

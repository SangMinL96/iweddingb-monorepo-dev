export interface InfoItf {
  thumbnail: string;
  bbs_no: number;
  addr: string;
  logo: string;
  enterprise_name: string;
  bpchk: number;
  contents: string;
  holiday: string;
  parking: string;
  parking_pee: string;
  ent_hour_from: string;
  ent_hour_to: string;
  latlng: string;
  button_type: number;
  contents_text: string;
  fb_thumbnail: string;
  no: number;
  group_no: number;
  group_item_no: number;
  item_value_no: number;
  typical_code: string;
  typical_value: string;
  typical_type: string;
  reg_date: Date;
  category: string;
  category_code: string;
  sub_category: string;
  typical: string;
}
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

export interface ProductItf {
  no: number;
  enterprise_code: string;
  name: string;
  product_type: number;
  thumb: string;
  category: string;
  product_price: number;
  price: number;
  cprice: number;
  event_price: number;
  event_option_price: number;
  price_txt: string;
  icon: number;
  sub_category: string;
  index_order: number;
  limited_sales_cnt: number;
  reset_jaego: number;
  jaego: number;
  reg_date: Date;
  color?: string;
  backgroundColor?: string;
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
  color?: string;
}

export interface EnterPriseResultIft {
  info: InfoItf | HallInfoItf;
  products: ProductItf[] | HallTypeItf[];
}

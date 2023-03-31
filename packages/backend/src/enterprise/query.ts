/**
 * @param ent_code
 */
export const infoQuery = () => {
  return `
      SELECT 
      bbs.thumbnail, 
      bbs.no as bbs_no,
      ent.addr, 
      CONCAT('https://www.iwedding.co.kr/center/logo/', ent.logo) as logo,
      ent.enterprise_name,
      ent.bpchk,
      bbs.contents,
      IF(ent.holiday = '', ent.holiday2 , ent.holiday) AS holiday,
      en.parking,
      en.parking_pee,
      ent.ent_hour_from,
      ent.ent_hour_to,
      ent.latlng,
      bbs.button_type,
      bbs.contents_text,
      bbs.fb_thumbnail,
      typical.*,
      (SELECT typical_value FROM ibrandplus.ibrandplus_typical WHERE bbs_no = bbs.no AND typical_type = 'main_category') as category,
      (SELECT typical_code FROM ibrandplus.ibrandplus_typical WHERE bbs_no = bbs.no AND typical_type = 'main_category') as category_code,
      (SELECT  group_concat(typical_value separator ',') FROM ibrandplus.ibrandplus_typical WHERE bbs_no = bbs.no AND typical_type = 'category_type') as sub_category,
      (SELECT group_concat(typical_value separator ' #') FROM ibrandplus.ibrandplus_typical WHERE bbs_no = bbs.no and typical_type ='typical') as typical
    FROM
      center.enterprise AS ent
      LEFT JOIN  center.enterprise_new AS en ON (ent.enterprise_code = en.enterprise_code)
      LEFT JOIN  ibrandplus.ibrandplus_typical AS typical ON (typical.typical_code = ent.enterprise_code)
      LEFT JOIN  ibrandplus.ibrandplus_bbs AS bbs ON (typical.bbs_no = bbs.no)
    WHERE
      ent.enterprise_code = :ent_code
      AND typical.typical_type = 'enterprise'
      AND bbs.contents_category = '1'
      AND bbs.status = '1'
  `;
};

/**
 * @param ent_code
 */
export const infoProductQuery = () => {
  return `
      SELECT 			    
      wp.no, 				-- 상품번호 
      wp.enterprise_code, 	-- 업체코드 
      wp.name,				-- 상품명 
      wp.product_type,		-- 상품군(번호) 
      wp.thumb,				-- 상품 썸네일 
      wp.category,
      wp.product_price,		-- 상품가 
      wp.price,				-- 상품가 
      wp.cprice,			-- 납품가 
      wp.event_price,		-- 이벤트가 
      wp.event_option_price,
      wp.price_txt,         -- 외부 노출용 금액 
      wp.icon,               -- 아이콘
      ct.sub_category,
      wp.index_order,
      wp.limited_sales_cnt,
      wp.reset_jaego,
      wp.jaego,
      wp.reg_date
    FROM
      center.withmini_product AS wp
    LEFT JOIN 
      user_category.category_type AS ct on (ct.no = wp.product_type)
    WHERE
      wp.enterprise_code = :ent_code -- ex)co_sl_s073
      AND wp.cate_option = '0'					-- 정상상품
      AND wp.use_site = '1'						-- 사이트노출여부
      AND wp.use_list = '1'						-- 리스트 노출여부
      AND wp.main_category != '12'				-- 패키지 상품아닌것
      AND wp.del_ok = '0'
    ORDER BY
    wp.index_order ASC, wp.reg_date DESC
  `;
};

/**
 * @param ent_code
 */
export const hallInfoQuery = () => {
  return `
        SELECT 
        ic.comment AS checkpoint,                 /* 3번 설명 체크 포인트*/
        bq.banquet_code,                            /* 웨딩홀 코드 */
        bq.chk_wedding,                             /* 웨딩홀 여부 1 : 0 */
        bq.chk_baby,                                /* 돌잔치 여부 1: 0  */
        bq.chk_ani,                                 /* 기념 행사일 여부 1: 0 */
        bq.name,
        bq.name_new,                                /* 2번 웨딩홀 이름 */
        bq.addr,	                                /* 주소 */
        bq.new_addr,                                /* 도로명주소 */
        bq.rep_tel,                                 /* 전화 */
        bq.fax_tel,                                 /* 팩스 */
        bq.no_reser,                                /* 예약하기 기능 숨김여부 -- 사용안함 */
        bq.holiday2 as holiday,
        whn.style,                                  /* 홀타입 */
        GROUP_CONCAT(whn.style) AS styles,
        bq.lat,                                 /* 주소 좌표 값 */
        bq.lng,                                 /* 주소 좌표값 */
        bq.popular_ck,                          /* 사이트 노출타입 : 인기(1) */
        bq.benefit_ck,                          /* 사이트 노출타입 : 혜택(1) */
        bq.taste_ck,                            /* 사이트 노출타입 : 시식(1) */
        bq.brand_ck as bpchk,
        bq.onlyone_ck,                          /* 사이트 노출타입 : 단독(1) */
        im.path,                                /* 썸네일 이미지(본문 첫이미지) */
        bq.lo_code,               
        bq.SIDO,                            /* 시도 */                 
        bq.GUGUN,                           /* 구 */
        bq.DONG,                            /* 동 */
        bq.logo,                              /* 업체 로고 */
        bq.brand_ck,                           /* 브랜드 플러스 여부 */
        bbs.no as bbs_no,                                  /* 콘텐츠의 넘버 - 나중에 함께 보면 좋은 웨딩홀에서 필요 */
        bbs.contents_text,
        bbs.es_contents,
        bbs.fb_thumbnail,
        bbs.thumbnail,
        bbs.button_type,
        (SELECT group_concat(typical_value separator ' #') FROM ibrandplus.ibrandplus_typical WHERE bbs_no = bbs.no and typical_type ='typical') as typical,
        (SELECT 
        group_concat(tciv.typical_value separator ' #') 
        FROM 
        ibrandplus.ibrandplus_typical as tciv 
        JOIN 
        ibrandplus.typical_category_item_value AS iv 
        ON 
        iv.no = tciv.item_value_no 
        WHERE 
        tciv.bbs_no = bbs.no 
        and typical_type ='typical' 
        AND iv.filter_view = 1) as typical_view,
        (SELECT AVG(score) AS score_avg FROM center.enterprise_disp_cmt WHERE enterprise_code = :ent_code AND score != '0') as score_avg

        FROM
        center.banquet AS bq
        LEFT JOIN ihall.ihall_event_comment AS iec ON (bq.banquet_code = iec.banquet_code)
        LEFT JOIN ihall.ihall_checkpoint AS ic ON (bq.banquet_code = ic.banquet_code)
        LEFT JOIN center.img_mst as im ON (bq.banquet_code = im.banquet_code AND im.display_val = '1')
        LEFT OUTER JOIN center.wedding_hall_new AS whn ON (bq.banquet_code = whn.banquet_code)
        LEFT JOIN  ibrandplus.ibrandplus_typical AS typical ON (typical.typical_code = bq.banquet_code)
        LEFT JOIN  ibrandplus.ibrandplus_bbs AS bbs ON (typical.bbs_no = bbs.no)
        WHERE
        bq.banquet_code = :ent_code
        AND bq.banquet_code != '0'
        AND typical.typical_type = 'enterprise'
        AND bbs.contents_category = '1'
        AND bbs.status = '1'
        GROUP BY
        bq.banquet_code
`;
};

/**
 * @param ent_code
 */
export const hallTypeQuery = () => {
  return `
      SELECT 
      weddinghall_code,
      banquet_code,					/* 웨딩홀코드 */
      name,							/* 홀이름 */
      local,							/* 층수 */
      shape,							/* 예식 형태 */
      style,							/* 홀타입(스타일) */
      min_person,						/* 수용인원 최소 ~명 */
      seat_person,					/* 수용인원 착석 ~명 */
      max_person,						/* 수용인원 최대 ~ 명 */
      food_val,						/* 식사 메뉴 */
      min_food_fee,					/* 식사 금액 최소 */
      max_food_fee, 					/* 식사 금액 최대 */
      time_val,						/* 예식간격 */
      time_text,						/* time_val 이 11(기타) 일때 입력값  */  
      flower_val,						/* 꽃 */
      min_flower_fee1,				/* 조화일때 최소수수료 */
      max_flower_fee1,				/* 조화일때 최대수수료 */
      min_flower_fee2,				/* 생화일때 최소수수료 */
      max_flower_fee2,				/* 생화일때 최대수수료 */
      min_flower_fee3,				/* 외부업체 반입 일때 최수 수수료 */
      max_flower_fee3,				/* 외부업체 반입 일때 최대 수수료 */
      use_val,						/* 대관료 (01:없음, 02:있음) */
      min_use_fee,					/* 대관료 최소 */
      max_use_fee,					/* 대관료 최대 */  
      drink_val,						/* 음주류 */
      drink_fee,						/* 음주류 가격 */
      direct_check,					/* 연출료 */
      min_direct_fee,					/* 연출료 최소 */
      max_direct_fee				/* 연출료 최대 */
    FROM
      center.wedding_hall_new AS whn
    WHERE
      whn.banquet_code = :ent_code     /*{웨딩홀코드}*/
    ORDER BY name;    
    `;
};

/**
 * @param ent_code
 * @param startDate
 * @param endDate
 */
export const hallScheduleQuery = () => {
  return `
    SELECT 
    DISTINCT
    hall.name as hall_name,
    whn.weddinghall_code,
    whn.banquet_code,					/* 웨딩홀코드 */
    whn.name,							/* 홀이름 */
    whn.local,							/* 층수 */      
    rt.no,
    rt.schedule_date,
    rt.schedule_time,
    IF(rt.person != '0', CONCAT('최소보증인원 ', rt.person,'명이상\r\n',rt.comment), rt.comment) AS comment,
    rt.status,
    rt.icon,
    rt.modify_date
    FROM
    center.remaining_time as rt
    left join
    center.wedding_hall_new AS whn  
    ON
        rt.hall_code = whn.weddinghall_code
    LEFT JOIN
        center.banquet as hall
    ON 
    rt.enterprise_code = hall.banquet_code
    WHERE
    rt.enterprise_code = :ent_code     
    AND 
    rt.schedule_date BETWEEN :startDate AND :endDate
    AND
    rt.view_yn = '1'
    AND
    rt.schedule = '예식'
    order by
    whn.name asc, rt.schedule_time asc
    `;
};

/**
 * @param ent_code
 * @param startDate
 * @param endDate
 */
export const scheduleQuery = () => {
  return `
    SELECT 
    DISTINCT
      rt.no,
      rt.schedule_date,
      rt.schedule_time,
      rt.schedule,  
      rt.comment,
      rt.status,
      rt.icon,
      rt.modify_date,
      p.no as product_no,
      p.name,
      p.enterprise_code,      

      ent.enterprise_name
    FROM
      center.remaining_time_studio as rt
    left join
      center.enterprise as ent
    on
      ent.enterprise_code = rt.enterprise_code
    left join
      center.withmini_product AS p
    ON
        rt.product_no = p.no
    WHERE
      rt.enterprise_code = :ent_code          
    AND
       rt.schedule_date BETWEEN :startDate AND :endDate
    AND
        rt.view_yn = '1'
   order by
   p.name asc, rt.schedule_time asc
    `;
};

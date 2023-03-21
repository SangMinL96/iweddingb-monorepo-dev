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
 * @param year
 * @param month
 * @param day
 * @param hall_code
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
    rt.view_yn = '1'
    AND
    rt.schedule = '예식'
    
    order by
    whn.name asc, rt.schedule_time asc
    `;
};

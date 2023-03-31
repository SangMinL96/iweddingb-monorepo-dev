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

/**
 * @param no
 * @param status
 */
export const timeUpdateQuery = () => {
  return `
    UPDATE
    center.remaining_time_studio
    SET
      status = :status
    WHERE
      no=:no
    `;
};

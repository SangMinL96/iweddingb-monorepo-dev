/**
 * @param hp
 * @param enterprise_code
 */
export const hpAuthNumberSendQuery = () => {
  return `
    INSERT INTO
    smslg2020_alt.SC_TRAN
   (
     TR_SENDDATE,
     TR_SENDSTAT,
     TR_MSGTYPE,
     TR_PHONE,
     TR_CALLBACK,
     TR_MSG,
     TR_ETC1,
     TR_ETC2,
     TR_ETC3
   )
 VALUES
   (
      now(),
     '0',
     '0',
     :hp,
     '025404112',
      CONCAT('[아이웨딩]인증번호는',' ','[',:authnum,']',' ','입니다.'),
     'iwedding',
     '',
     ''
   )
    `;
};
/**
 * @param ent_code
 * @param name
 */
export const getRefreshTokenQuery = () => {
  return `
    SELECT
      refresh_token
    FROM
     center.enterprise_member
    WHERE
      name = :name
    AND
     ent_code = :ent_code
  `;
};

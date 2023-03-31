/**
 * @param id
 * @param enterprise_code
 */
export const getUserQuery = () => {
  return `
    SELECT
    *
    FROM
    center.enterprise
    WHERE
    enterprise_code = :id
    `;
};

/**
 * @param hp
 * @param name
 */
export const userDataQuery = () => {
  return `
        SELECT
          ent_code,
          name,
          cont_yn,
          contact_yn
        FROM
          center.enterprise_member
        WHERE
         REPLACE(hp, '-', '') = REPLACE(:hp, '-', '')
        AND
         name = :name
        AND
         cont_yn='Y'
        AND 
         contact_yn='Y'
      `;
};

/**
 * @param hp
 * @param name
 * @param refresh_token
 */
export const updateRefreshTokenQuery = () => {
  return `
        UPDATE
          center.enterprise_member
        SET
            refresh_token = :refresh_token
        WHERE
          name = :name
        AND
        REPLACE(hp, '-', '') = REPLACE(:hp, '-', '')
      `;
};

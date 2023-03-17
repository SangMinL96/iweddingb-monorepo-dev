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
 * @param title
 * @param contents
 */
export const postUserQuery = () => {
  return `
        INSERT INTO
        type_orm_test.cards
          (
            title,
            contents
          )
        VALUES
          (
             :title,
             :contents
          )
      `;
};

/**
 * @param title
 * @param contents
 */
export const userDataQuery = () => {
  return `
        SELECT
          id,
          name,
          email,
          with_id,
          hp
        FROM
          wedding.user
        WHERE
         hp = :hp
      `;
};

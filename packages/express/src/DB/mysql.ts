import * as dotEnv from 'dotenv';
import mysql, { ResultSetHeader } from 'mysql2/promise';
import { FetcherResultItf } from '@iweddingb-workspace/shared';

const result = dotEnv.config({
  path: `.env.${process.env.NODE_ENV}`,
});
if (result.error) {
  throw result.error;
}

const dbConfig = {
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  port: Number(process.env.DATABASE_PORT),
};
// DB 연결
const dbConn = async () => {
  try {
    const connection = await mysql.createPool({
      ...dbConfig,
      namedPlaceholders: true,
    });
    return connection.getConnection();
  } catch (err) {
    console.log('DB connection Fail');
    throw Error('DB connection Fail');
  }
};

// select query 함수
export async function getQuery<T>(
  sql: string,
  params?: any,
): Promise<{ data: T } | FetcherResultItf> {
  const conn = await dbConn();
  try {
    if (conn) {
      await conn.beginTransaction();
      const [row] = await conn.query(sql, params);
      return { status: 200, data: row as T, result: 'success' };
    }
  } catch (err) {
    conn.rollback();
    return {
      status: 500,
      data: null,
      result: 'fail',
      error: `Query Fail\n${JSON.stringify(err)}`,
    };
  } finally {
    conn.release();
  }
}

// update query 함수
export async function execQuery(
  sql: string,
  params?: any,
): Promise<FetcherResultItf> {
  const conn = await dbConn();
  try {
    if (conn) {
      await conn.beginTransaction();
      const [row] = await conn.query(sql, params);
      if (row) {
        return { status: 200, result: 'success' };
      }
    }
  } catch (err) {
    conn.rollback();
    return {
      status: 500,
      result: 'fail',
      error: `Query Fail\n${JSON.stringify(err)}`,
    };
  } finally {
    conn.release();
  }
}
// update query 함수
export async function insertQuery(
  sql: string,
  params?: any,
): Promise<{ data: { insertId: number } } | FetcherResultItf> {
  const conn = await dbConn();
  try {
    if (conn) {
      await conn.beginTransaction();
      const [row] = await conn.query<ResultSetHeader>(sql, params);
      return {
        status: 200,
        data: { insertId: row.insertId },
        result: 'success',
      };
    }
  } catch (err) {
    conn.rollback();
    return {
      status: 500,
      data: null,
      result: 'fail',
      error: `Query Fail\n${JSON.stringify(err)}`,
    };
  } finally {
    conn.release();
  }
}

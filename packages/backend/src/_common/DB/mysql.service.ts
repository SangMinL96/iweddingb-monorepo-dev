import { FetcherResultItf } from '@iweddingb-workspace/shared';
import { Injectable } from '@nestjs/common';
import {
  createPool,
  Pool,
  PoolConnection,
  ResultSetHeader,
} from 'mysql2/promise';
import { async } from 'rxjs';

@Injectable()
export class MysqlService {
  constructor() {
    //
  }

  async utf8(conn: PoolConnection): Promise<any> {
    await conn.query(`set session character_set_connection=utf8`);
    await conn.query(`set session character_set_client=utf8`);
    await conn.query(`set session character_set_results=utf8`);
    await conn.query(`set collation_connection=utf8_general_ci`);
    await conn.query(`set names utf8`);
  }

  async conn(): Promise<PoolConnection> {
    const dbConfig = {
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      port: Number(process.env.DATABASE_PORT),
    };
    let pool: Pool | undefined = undefined;
    if (typeof pool !== 'undefined') {
      return null;
    }
    pool = await createPool({
      ...dbConfig,
      namedPlaceholders: true,
      charset: 'utf8',
    });
    return pool.getConnection();
  }
  async getQuery<T>(sql: string, params?: any): Promise<T> {
    const conn = await this.conn();
    try {
      if (conn) {
        await conn.beginTransaction();
        await this.utf8(conn);
        const [row] = await conn.query<ResultSetHeader>(sql, params);
        return row as T;
      }
    } catch (err) {
      conn.rollback();
      throw new Error(err);
    } finally {
      conn.release();
    }
  }
  async execQuery(sql: string, params?: any): Promise<void | any> {
    const conn = await this.conn();
    try {
      if (conn) {
        await conn.beginTransaction();
        await this.utf8(conn);
        const [row] = await conn.query<ResultSetHeader>(sql, params);
        if (row) {
          return { result: 'success' };
        }
      }
    } catch (err) {
      conn.rollback();
      throw new Error(err);
    } finally {
      conn.release();
    }
  }
  async insertQuery<T>(sql: string, params?: any): Promise<T> {
    const conn = await this.conn();
    try {
      if (conn) {
        await conn.beginTransaction();
        await this.utf8(conn);
        const [row] = await conn.query<ResultSetHeader>(sql, params);
        return { insertId: row.insertId } as T;
      }
    } catch (err) {
      conn.rollback();
      throw new Error(err);
    } finally {
      conn.release();
    }
  }
}

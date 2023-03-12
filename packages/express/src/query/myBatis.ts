import mysql from 'mysql2/promise';
import mybatisMapper from 'mybatis-mapper';
import fs from 'fs';
import * as dotEnv from 'dotenv';
const result = dotEnv.config({
  path: `.env.${process.env.NODE_ENV}`,
});
if (result.error) {
  throw result.error;
}
const querys = fs.readdirSync(__dirname);
const paths = [];
querys.forEach((query) => {
  if (query === 'myBatis.ts') return null;
  fs.readdirSync(`${__dirname}/${query}`).forEach((file) => {
    if (file.includes('.xml')) {
      paths.push(`${query}/${file}`);
    }
  });
});
const xmlPaths = paths.map((file) => `${__dirname}/${file}`);
const dbConfig = {
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  port: Number(process.env.DATABASE_PORT),
};
// create the connection to database
const connection = mysql.createPool(dbConfig);

// create the myBatisMapper from xml file
mybatisMapper.createMapper(xmlPaths);

// Get SQL Statement
const format = { language: 'sql', indent: '  ' } as any;

export const getQuery = async <T>(
  key: string,
  id: string,
  params?: any,
): Promise<{ status: number; data: T; error?: string }> => {
  const query = mybatisMapper.getStatement(key, id, params, format);
  try {
    const [row] = await connection.query(query);
    return { status: 200, data: row as T };
  } catch (error) {
    return { status: 500, error: `query fail\n${error}`, data: null };
  }
};

export const postQuery = async (
  key: string,
  id: string,
  params?: any,
): Promise<{ status: number; data: any; error?: string }> => {
  const query = mybatisMapper.getStatement(key, id, params, format);
  try {
    const [row] = await connection.query(query);
    return { status: 200, data: row };
  } catch (error) {
    return { status: 500, error: `query fail\n${error}`, data: null };
  }
};

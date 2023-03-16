import { send } from '@common/response';
import { User } from '@iweddingb-workspace/shared';
import { NextFunction, Request, Response } from 'express';
import { execQuery, getQuery, insertQuery } from 'src/DB/mysql';
import { getUserQuery, postUserQuery } from './query';
export default class LoginController {
  public getUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    const { body }: Request = req;
    try {
      const result = await getQuery<User[]>(getUserQuery(), {
        id: 'co_sl_s312',
      });
      send(res, result);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  public postUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    const { body }: Request = req;
    try {
      const result = await insertQuery(postUserQuery(), {
        title: 'test1',
        contents: 'testetsetest',
      });
      send(res, result);
    } catch (err) {
      res.status(500).json(err);
    }
  };
}

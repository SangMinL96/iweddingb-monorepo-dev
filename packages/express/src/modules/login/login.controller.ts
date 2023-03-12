import { send } from '@common/response';
import { User } from '@iweddingb-workspace/shared';
import { NextFunction, Request, Response } from 'express';
import { postQuery, getQuery } from 'src/query/myBatis';
export default class LoginController {
  public getUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    const { body }: Request = req;
    try {
      const result = await getQuery<User[]>('fruits', 'testParameters');
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
      const result = await postQuery('fruits', 'testpost');
      console.log(result);
      send(res, result);
    } catch (err) {
      res.status(500).json(err);
    }
  };
}

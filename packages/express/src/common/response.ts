import { Response } from 'express';
const send = (res: Response, { status, data, error }: any) => {
  if (status === 200) {
    return res.status(status).json(data);
  } else {
    return res.status(status).json(error);
  }
};

export { send };

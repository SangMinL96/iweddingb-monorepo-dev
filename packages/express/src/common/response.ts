import { Response } from 'express';
const send = (res: Response, result) => {
  if (result.status === 200) {
    return res.status(result.status).json(result.data);
  } else {
    return res.status(result.status).json(result);
  }
};

export { send };

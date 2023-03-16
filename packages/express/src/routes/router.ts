import express, { Request, Response } from 'express';
import loginRouter from '@modules/login/login.router';
const router = express.Router();

router.get('/health-check', (req: Request, res: Response) => res.send('OK'));
router.get('/', (req: Request, res: Response) => res.send('OK'));
router.use('/login', loginRouter);

export default router;

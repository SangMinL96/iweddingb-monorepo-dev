import cookieParser from 'cookie-parser';
import cors from 'cors';
import * as dotEnv from 'dotenv';
import express from 'express';
import router from './routes/router';
const result = dotEnv.config({
  path: `.env.${process.env.NODE_ENV}`,
});
if (result.error) {
  throw result.error;
}
async function bootstrap() {
  const app = express();
  app.use(cors());
  app.use(cookieParser());
  app.use('/api/', router);
  const port = 4000;
  app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
  });
}
bootstrap();

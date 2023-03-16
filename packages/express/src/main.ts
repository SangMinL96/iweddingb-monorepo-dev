import cookieParser from 'cookie-parser';
import cors from 'cors';
import * as dotEnv from 'dotenv';
import express from 'express';
import router from './routes/router';
//env 환경 설정
const result = dotEnv.config({
  path: `.env.${process.env.NODE_ENV}`,
});
if (result.error) {
  throw result.error;
}
//#########//

//cors허용 도메인
const corsOption = {
  origin: 'http://localhost:3000', // 허락하는 요청 주소
  credentials: true, // true로 하면 설정한 내용을 response 헤더에 추가 해줍니다.
};
//#########//
async function bootstrap() {
  const app = express();
  app.use(cors(corsOption));
  app.use(cookieParser());
  app.use('/api/v1', router);
  const port = 4000;
  app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
  });
}
bootstrap();

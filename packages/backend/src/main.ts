import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: true, credentials: true });
  const port = 4010;
  await app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
  });
}
bootstrap();
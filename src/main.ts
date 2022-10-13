import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getEnv } from './utils';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(getEnv('APP_PORT') || 9001);
}
bootstrap();

import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create();
  app.setGlobalPrefix('/v1/api');
  await app.listen(3000);
}
bootstrap();

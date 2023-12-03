import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { existsSync, mkdirSync } from 'fs';

async function bootstrap() {
  if (!existsSync("./uploads")) mkdirSync("./uploads")

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { PrismaConfig } from './prisma/prisma.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      enableDebugMessages: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  PrismaConfig.LoggerInstance({
    query: true,
    error: true,
    warn: true,
    info: true,
  });
  await app.listen(3000);
}
bootstrap();

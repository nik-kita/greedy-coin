/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Config } from '@greedy-coin/config';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'ku-api';
  const config = app.get<ConfigService<Config>>(ConfigService);
  const port = config.get('PORT');

  app.setGlobalPrefix(globalPrefix);
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();

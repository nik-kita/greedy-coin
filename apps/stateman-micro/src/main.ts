import { StatemanMicroConfig, StatemanMicroConfigModule } from '@greedy-coin/config';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { TcpOptions } from '@nestjs/microservices';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const logger = new Logger('STATEMAN::main');
  const pseudoApp = await NestFactory.create(StatemanMicroConfigModule);
  const config = pseudoApp.get<ConfigService<StatemanMicroConfig>>(ConfigService);

  await pseudoApp.close();

  const host = config.get('MICRO_STATEMAN_HOST');
  const port = config.get('MICRO_STATEMAN_PORT');
  const app = await NestFactory.createMicroservice<TcpOptions>(AppModule, {
    options: {
      host,
      port,
    },
  });

  await app.listen();
  logger.debug(`${host}:${port}`);
}

bootstrap();

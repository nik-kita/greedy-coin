import { ConfigType } from '@greedy-coin/types/config';
import { MicroChannelEnum } from '@greedy-coin/types/micro';
import { genMicroConnectionOptions } from '@greedy-coin/utils';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('STATEMAN::main');
  const config = app.get<ConfigService<ConfigType>>(ConfigService);
  const host = config.get('STATEMAN_HOST');
  const port = config.get('STATEMAN_PORT');

  app.connectMicroservice(genMicroConnectionOptions(MicroChannelEnum.STATEMAN, config));

  await app.startAllMicroservices();
  logger.debug(`Start ${MicroChannelEnum.STATEMAN} microservice`);

  await app.listen(port);
  logger.debug(`Server listen ${host}:${port}`);
}

bootstrap();

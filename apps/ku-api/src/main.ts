import { ConfigType } from '@greedy-coin/types/config';
import { MicroChannelEnum } from '@greedy-coin/types/micro';
import { genMicroConnectionOptions } from '@greedy-coin/utils';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('KU_API::main');
  const config = app.get<ConfigService<ConfigType>>(ConfigService);
  const host = config.get('KU_API_HOST');
  const port = config.get('KU_API_PORT');

  app.connectMicroservice(genMicroConnectionOptions(MicroChannelEnum.KU_API, config));

  await app.startAllMicroservices();
  logger.debug(`Start ${MicroChannelEnum.KU_API} microservice`);

  await app.listen(port);
  logger.debug(`Server listen ${host}:${port}`);
}

bootstrap();

import { ConfigType } from '@greedy-coin/types/config';
import { MicroChannelEnum } from '@greedy-coin/types/micro';
import { genMicroConnectionOptions, rawHost } from '@greedy-coin/utils';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get<ConfigService<ConfigType>>(ConfigService);
  const host = config.get('KU_API_HOST');
  const microHost = rawHost(host);
  const port = config.get('KU_API_PORT');
  const microPort = port;

  app.connectMicroservice(genMicroConnectionOptions(MicroChannelEnum.KU_API, config));

  await app.startAllMicroservices();
  await app.listen(port);

  const logger = new Logger('KU_API::main');

  logger.log(`Microservice => ${microHost}:${microPort}`);
  logger.log(`Server =======> ${host}:${port}`);
}

bootstrap();

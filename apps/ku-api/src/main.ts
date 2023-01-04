import { KuApiConfig } from '@greedy-coin/config';
import { MicroChannelEnum } from '@greedy-coin/types/micro';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { TcpOptions } from '@nestjs/microservices';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const logger = new Logger('KU_API::main');
  const app = await NestFactory.create(AppModule);
  const config = app.get<ConfigService<KuApiConfig>>(ConfigService);
  const port = config.get('KU_API_PORT');
  const microHost = config.get('MICRO_KU_API_HOST');
  const microPort = config.get('KU_API_PORT');

  app.connectMicroservice<TcpOptions>({
    options: {
      host: microHost,
      port: microPort,
    }
  });

  await app.startAllMicroservices();
  logger.debug(`Start ${MicroChannelEnum.KU_API} microservice on ${microHost}:${microPort}`);

  await app.listen(port);
  logger.debug(`Server listen on ${await app.getUrl()}`);
}

bootstrap();

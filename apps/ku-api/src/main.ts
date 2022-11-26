import { Config } from '@greedy-coin/config';
import { rawHost } from '@greedy-coin/utils';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get<ConfigService<Config>>(ConfigService);
  const host = config.get('KU_API_HOST');
  const microHost = rawHost(host);
  const port = config.get('KU_API_PORT');
  const microPort = port;

  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: microHost,
      port: microPort,
    },
  });

  await app.startAllMicroservices();
  await app.listen(port);

  const logger = new Logger('KU_API::main');

  logger.log(`Microservice => ${microHost}:${microPort}`);
  logger.log(`Server =======> ${host}:${port}`);
}

bootstrap();

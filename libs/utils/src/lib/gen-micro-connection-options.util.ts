import { MicroChannelEnum, MicroMapper } from '@greedy-coin/types/micro';
import { ConfigType } from '@greedy-coin/types/config';
import { ConfigService } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';

export function genMicroConnectionOptions(micro: MicroChannelEnum, config: ConfigService<ConfigType>): {
  transport: Transport,
  options: {
    host: string,
    port: number,
  },
} {
  const { host, port, transport } = MicroMapper[micro].connection;

  return {
    transport,
    options: {
      host: config.get(host),
      port: config.get(port),
    },
  };
}

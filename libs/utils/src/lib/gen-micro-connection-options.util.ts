import { MicroChannelEnum, MicroConnectionOptionsMapper } from '@greedy-coin/types/micro';
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
  const { host, port, transport } = MicroConnectionOptionsMapper[micro];

  return {
    transport,
    options: {
      host: config.get(host),
      port: config.get(port),
    },
  };
}

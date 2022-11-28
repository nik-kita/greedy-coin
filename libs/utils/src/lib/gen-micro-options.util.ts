import { MicroChannelEnum, MicroConnectionOptionsMapper } from '@greedy-coin/types/micro';
import { ConfigType } from '@greedy-coin/types/config';
import { ConfigService } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';

type MicroServiceConnectionOptions = {
  transport: Transport,
  options: {
    host: string,
    port: number,
  },
};

export function genMicroServiceOptions(micro: MicroChannelEnum, config: ConfigService<ConfigType>): MicroServiceConnectionOptions {
  const { host, port, transport } = MicroConnectionOptionsMapper[micro];

  return {
    transport,
    options: {
      host: config.get(host),
      port: config.get(port),
    },
  };
}

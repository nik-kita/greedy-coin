import { Transport } from '@nestjs/microservices';
import { ConfigType } from '../config';
import { anny } from '../utils';

export type MicroMapperType = {
  connection: {
    transport: Transport,
    host: keyof ConfigType & `MICRO_${string}_HOST`,
    port: keyof ConfigType & `MICRO_${string}_PORT`,
  },
  patterns: Record<string, {
    args: anny,
    result: anny,
  }>,
};

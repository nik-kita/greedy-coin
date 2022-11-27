import { Transport } from '@nestjs/microservices';
import { ConfigType } from '../config';

export type MicroMapperType = {
  connection: {
    transport: Transport,
    host: keyof ConfigType & `MICRO_${string}_HOST`,
    port: keyof ConfigType & `MICRO_${string}_PORT`,
  },
};

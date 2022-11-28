import { Transport } from '@nestjs/microservices';
import { ConfigType } from '../../config';

export type MicroConnectionOptionsType = {
  transport: Transport,
  host: keyof ConfigType & `MICRO_${string}_HOST`,
  port: keyof ConfigType & `MICRO_${string}_PORT`,
};

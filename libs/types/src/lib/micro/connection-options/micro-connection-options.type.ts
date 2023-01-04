import { Transport } from '@nestjs/microservices';
import { FullConfigType } from '../../config';

export type MicroConnectionOptionsType = {
  transport: Transport,
  host: keyof FullConfigType & `MICRO_${string}_HOST`,
  port: keyof FullConfigType & `MICRO_${string}_PORT`,
};

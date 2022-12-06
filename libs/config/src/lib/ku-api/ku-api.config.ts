import { FullConfig } from '../full-config';
import { PickType } from '@nestjs/mapped-types';

export class KuApiConfig extends PickType(FullConfig, [
  'KU_API_HOST',
  'KU_API_PORT',
  'MICRO_KU_API_HOST',
  'MICRO_KU_API_PORT',
]) { }

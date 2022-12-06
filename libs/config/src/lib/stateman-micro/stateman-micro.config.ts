import { FullConfig } from '../full-config';
import { PickType } from '@nestjs/mapped-types';

export class StatemanMicroConfig extends PickType(FullConfig, [
  'MICRO_STATEMAN_HOST',
  'MICRO_STATEMAN_PORT',
]) { }

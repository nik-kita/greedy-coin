import { MicroChannelEnum } from '../micro-channel.enum';
import { MicroConnectionOptionsType } from './micro-connection-options.type';
import { Transport } from '@nestjs/microservices';


export const MicroConnectionOptionsMapper: Record<MicroChannelEnum, MicroConnectionOptionsType> = {
  [MicroChannelEnum.KU_API]: {
    transport: Transport.TCP,
    host: 'MICRO_KU_API_HOST',
    port: 'MICRO_KU_API_PORT',
  },
  [MicroChannelEnum.STATEMAN]: {
    transport: Transport.TCP,
    host: 'MICRO_STATEMAN_HOST',
    port: 'MICRO_STATEMAN_PORT',
  },
};

export const MicroKuApiConnectionOptions = MicroConnectionOptionsMapper[MicroChannelEnum.KU_API];
export const MicroStatemanConnectionOptions = MicroConnectionOptionsMapper[MicroChannelEnum.STATEMAN];

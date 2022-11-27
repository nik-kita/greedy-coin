import { MicroChannelEnum } from './micro-channel.enum';
import { MicroMapperType } from './micro-mapper.type';
import { Transport } from '@nestjs/microservices';


export const MicroMapper: Record<MicroChannelEnum, MicroMapperType> = {
  [MicroChannelEnum.KU_API]: {
    connection: {
      transport: Transport.TCP,
      host: 'MICRO_KU_API_HOST',
      port: 'MICRO_KU_API_PORT',
    },
  },
  [MicroChannelEnum.STATEMAN]: {
    connection: {
      transport: Transport.TCP,
      host: 'MICRO_STATEMAN_HOST',
      port: 'MICRO_STATEMAN_PORT',
    },
  },
} as const;

export const MicroKuApi = MicroMapper[MicroChannelEnum.KU_API];

import { MicroChannelEnum } from '../micro-channel.enum';
import { StatemanClient } from './stateman-listener.interface';


type ListenerMapper = {
  [MicroChannelEnum.STATEMAN]: StatemanClient,
  [MicroChannelEnum.KU_API]: null,
};

export type Listener<T extends MicroChannelEnum> = ListenerMapper[T];

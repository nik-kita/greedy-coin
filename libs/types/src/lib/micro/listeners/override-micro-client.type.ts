import { ClientProxy } from '@nestjs/microservices';
import { anny, ValueByKeyType } from '../../utils';

export type OverrideMicroClient<T extends Record<string, anny>> = Omit<ClientProxy, 'send' | 'emit'> & {
  emit<K extends keyof T = keyof T>(pattern: K, ...args: Parameters<ValueByKeyType<T, K>>): ReturnType<ValueByKeyType<T, K>>;
  send<K extends keyof T = keyof T>(pattern: K, ...args: Parameters<ValueByKeyType<T, K>>): ReturnType<ValueByKeyType<T, K>>;
}

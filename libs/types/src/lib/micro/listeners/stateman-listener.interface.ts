import { ValueByKeyType } from '../../utils';

export interface IStatemanListener {
  hello(name: string): void;
}

export type IStatemanMicro<
  T extends 'pattern' | 'arg' | 'result', K extends keyof IStatemanListener
> = ValueByKeyType<{
  pattern: K,
  arg: Parameters<IStatemanListener[K]>[0],
  result: ReturnType<IStatemanListener[K]>,
}, T>;

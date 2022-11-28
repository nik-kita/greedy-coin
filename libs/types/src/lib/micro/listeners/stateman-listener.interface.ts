import { OverrideMicroClient } from './override-micro-client.type';

export interface IStatemanListener {
  hello(name: string): void;
}

export type StatemanClient = OverrideMicroClient<IStatemanListener>;

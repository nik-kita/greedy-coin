import { ConfigType } from '@coin-rime/types';

declare global {
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface ProcessEnv extends ConfigType { }
  }
}

export { };

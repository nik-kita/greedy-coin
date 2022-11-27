import { EnvColor } from './env-color.enum';

export type ConfigType = {
  NODE_ENV: 'development' | 'production';

  API_PASSPHRASE: string;

  API_KEY: string;

  API_SECRET: string;

  ENV_COLOR: EnvColor;

  KU_API_HOST: string,

  KU_API_PORT: number,

  MICRO_KU_API_HOST: string,

  MICRO_KU_API_PORT: number,

  STATEMAN_HOST: string,

  STATEMAN_PORT: number,

  MICRO_STATEMAN_HOST: string,

  MICRO_STATEMAN_PORT: number,
}

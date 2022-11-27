import { EnvColor } from './env-color.enum';

export type ConfigType = {
  NODE_ENV: 'development' | 'production';

  API_PASSPHRASE: string;

  API_KEY: string;

  API_SECRET: string;

  ENV_COLOR: EnvColor;
}

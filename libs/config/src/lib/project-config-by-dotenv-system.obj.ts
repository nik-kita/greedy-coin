import { configValidate } from './config.validate';
import { FullConfig } from './full-config';
import { config } from 'dotenv';
import { getPathToEnv } from './get-path-to-env';


export const ProjectConfigByDotenvSystem = (envPath?: string) => {
  config({ path: envPath || getPathToEnv() });

  return configValidate(process.env) as FullConfig;
};

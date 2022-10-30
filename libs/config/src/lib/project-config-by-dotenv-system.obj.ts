import { configValidate } from './config.validate';
import { Config } from './config';
import { config } from 'dotenv';
import { getPathToEnv } from './get-path-to-env';


export const ProjectConfigByDotenvSystem = (envPath?: string) => {
  config({ path: envPath || getPathToEnv() });

  return configValidate(process.env) as Config;
};

import { configValidate } from './config.validate';
import { Config } from './config';
import { config } from 'dotenv';
import { getPathToEnv } from './get-path-to-env';

config({ path: getPathToEnv() });

export const ProjectConfigByDotenvSystem = configValidate(process.env) as Config;

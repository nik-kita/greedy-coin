import 'dotenv/config';
import { anny } from '@greedy-coin/types/utils';
import { ConfigModuleOptions } from '@nestjs/config';
import { configValidate } from './config.validate';

export function genConfigOptions(Expected: new () => anny): ConfigModuleOptions {
  return {
    isGlobal: true,
    validate: configValidate(Expected),
    envFilePath: process.env.ENV_FILES,
  };
}

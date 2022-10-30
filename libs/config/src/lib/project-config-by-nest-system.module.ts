import { ConfigModule } from '@nestjs/config';
import { configValidate } from './config.validate';
import { getPathToEnv } from './get-path-to-env';
import { DynamicModule } from '@nestjs/common';

export const ProjectConfigByNestSystem:
  (envPath?: string) => DynamicModule = (envPath?: string) => ConfigModule
    .forRoot({
      isGlobal: true,
      validate: configValidate,
      envFilePath: envPath ? envPath : getPathToEnv(),
    });

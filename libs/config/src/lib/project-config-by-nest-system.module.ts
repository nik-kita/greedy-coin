import { ConfigModule } from '@nestjs/config';
import { configValidate } from './config.validate';
import { getPathToEnv } from './get-path-to-env';

export const ProjectConfigByNestSystem = (envPath?: string) => ConfigModule.forRoot({
  isGlobal: true,
  validate: configValidate,
  envFilePath: envPath ? envPath : getPathToEnv(),
});

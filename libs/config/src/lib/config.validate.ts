import { anny } from '@coin-rime/types';
import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { Config } from './config';

export function configValidate(config: Record<string, anny>) {
  const validatedConf = plainToInstance(Config, {
    NODE_ENV: process.env.NODE_ENV,
    ...config,
  }, {
    exposeDefaultValues: true,
  });
  const errors = validateSync(validatedConf);

  if (errors.length) throw new Error(errors.toString());

  return validatedConf;
}

import { anny } from '@greedy-coin/types/utils';
import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';


export function configValidate(Expected: new () => anny) {
  return (config: Record<string, unknown>) => {
    const validatedConf = plainToInstance(Expected, {
      NODE_ENV: process.env.NODE_ENV,
      ...config,
    }, {
      exposeDefaultValues: true,
    });
    const errors = validateSync(validatedConf);

    if (errors.length) throw new Error(errors.toString());

    return validatedConf;
  };
}

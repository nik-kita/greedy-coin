import { ConfigType, EnvColor } from '@greedy-coin/types';
import { Transform } from 'class-transformer';
import { IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class Config implements ConfigType {
  @IsIn(Object.values(EnvColor))
  ENV_COLOR!: EnvColor;

  @IsIn([
    'development',
    'production',
  ])
  NODE_ENV!: 'development' | 'production';

  @IsString()
  @IsNotEmpty()
  API_PASSPHRASE!: string;

  @IsString()
  @IsNotEmpty()
  API_KEY!: string;

  @IsString()
  @IsNotEmpty()
  API_SECRET!: string;

  @Transform(({ value }) => +value)
  @IsNumber()
  KU_API_PORT = 3000;

  @IsString()
  @IsNotEmpty()
  KU_API_HOST = 'http://0.0.0.0';
}

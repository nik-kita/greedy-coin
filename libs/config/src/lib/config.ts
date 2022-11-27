import { ConfigType, EnvColor } from '@greedy-coin/types/config';
import { rawHost } from '@greedy-coin/utils';
import { Transform } from 'class-transformer';
import { IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';

const localhost = 'http://0.0.0.0' as const;
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
  KU_API_HOST = localhost;

  @Transform(({ value }) => +value)
  @IsNumber()
  MICRO_KU_API_PORT = this.KU_API_PORT;

  @IsString()
  @IsNotEmpty()
  MICRO_KU_API_HOST = rawHost(this.KU_API_HOST);

  @IsString()
  @IsNotEmpty()
  STATEMAN_HOST = localhost;

  @Transform(({ value }) => +value)
  @IsNumber()
  STATEMAN_PORT = 4000;

  @IsString()
  @IsNotEmpty()
  MICRO_STATEMAN_HOST = rawHost(this.STATEMAN_HOST);

  @Transform(({ value }) => +value)
  @IsNumber()
  MICRO_STATEMAN_PORT = this.STATEMAN_PORT;
}

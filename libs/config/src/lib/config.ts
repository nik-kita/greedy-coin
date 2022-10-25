import { ConfigType, EnvColor } from '@coin-rime/types';
import { IsIn, IsNotEmpty, IsString } from 'class-validator';

export class Config implements ConfigType {
  @IsIn(Object.values(EnvColor))
  ENV_COLOR!: EnvColor;

  @IsIn(['development',
'production'])
  NODE_ENV: 'development' | 'production' = 'development';

  @IsString()
  @IsNotEmpty()
  API_PASSPHRASE!: string;

  @IsString()
  @IsNotEmpty()
  API_KEY!: string;

  @IsString()
  @IsNotEmpty()
  API_SECRET!: string;
}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { genConfigOptions } from '../gen-config-options';
import { KuApiConfig } from './ku-api.config';

@Module({
  imports: [ConfigModule.forRoot(genConfigOptions(KuApiConfig))],
})
export class KuApiConfigModule { }

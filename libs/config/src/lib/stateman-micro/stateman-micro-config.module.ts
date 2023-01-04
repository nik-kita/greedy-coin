import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { genConfigOptions } from '../gen-config-options';
import { StatemanMicroConfig } from './stateman-micro.config';

@Module({
  imports: [ConfigModule.forRoot(genConfigOptions(StatemanMicroConfig))],
})
export class StatemanMicroConfigModule { }

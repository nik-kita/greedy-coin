import { ProjectConfigByNestSystem } from '@greedy-coin/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { StatemanListener } from './stateman.listener';

@Module({
  imports: [ProjectConfigByNestSystem()],
  controllers: [
    AppController,
    StatemanListener,
  ],
})
export class AppModule { }

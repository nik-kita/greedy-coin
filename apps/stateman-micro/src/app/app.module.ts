import { StatemanMicroConfigModule } from '@greedy-coin/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { StatemanListener } from './stateman.listener';

@Module({
  imports: [StatemanMicroConfigModule],
  controllers: [
    AppController,
    StatemanListener,
  ],
})
export class AppModule { }

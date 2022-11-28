import { ProjectConfigByNestSystem } from '@greedy-coin/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  imports: [ProjectConfigByNestSystem()],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

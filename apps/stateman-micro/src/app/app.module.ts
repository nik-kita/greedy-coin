import { ProjectConfigByNestSystem } from '@greedy-coin/config';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ProjectConfigByNestSystem()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

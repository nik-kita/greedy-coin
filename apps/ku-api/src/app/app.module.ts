import { ProjectConfigByNestSystem } from '@greedy-coin/config';
import { ConfigType } from '@greedy-coin/types/config';
import { MicroChannelEnum } from '@greedy-coin/types/micro';
import { anny } from '@greedy-coin/types/utils';
import { genMicroServiceOptions } from '@greedy-coin/utils';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientsModule } from '@nestjs/microservices';
import { AppController } from './app.controller';

@Module({
  imports: [
    ProjectConfigByNestSystem(),
    ClientsModule.registerAsync([
      {
        inject: [ConfigService],
        name: MicroChannelEnum.STATEMAN,
        useFactory(config: ConfigService<ConfigType>) {
          return genMicroServiceOptions(MicroChannelEnum.STATEMAN, config) as anny; // TODO
        },
      }
    ])
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }

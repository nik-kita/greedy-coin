import { KuApiConfig, KuApiConfigModule } from '@greedy-coin/config';
import { MicroChannelEnum } from '@greedy-coin/types/micro';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    KuApiConfigModule,
    ClientsModule.registerAsync([
      {
        inject: [ConfigService],
        name: MicroChannelEnum.STATEMAN,
        useFactory(config: ConfigService<KuApiConfig>) {
          return {
            transport: Transport.TCP,
            options: {
              host: config.get('MICRO_STATEMAN_HOST'),
              port: config.get('MICRO_STATEMAN_PORT'),
            },
          };
        },
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

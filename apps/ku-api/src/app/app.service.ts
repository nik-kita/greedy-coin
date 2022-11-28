import { Listener, MicroChannelEnum } from '@greedy-coin/types/micro';
import { Inject, Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';

@Injectable()
export class AppService implements OnApplicationBootstrap {

  constructor(
    @Inject(MicroChannelEnum.STATEMAN) private stateman: Listener<MicroChannelEnum.STATEMAN>,
  ) { }

  testHi(name: string) {
    this.stateman.emit('hello', name);
  }

  testOk() {
    this.stateman.emit('ok');
  }

  async onApplicationBootstrap() {
    await this.stateman.connect();

    this.logger.debug(`${MicroChannelEnum.STATEMAN} is connected`);
  }

  logger = new Logger(`KU_API ${AppService.name}`);
}

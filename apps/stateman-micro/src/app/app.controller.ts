import { MicroChannelEnum } from '@greedy-coin/types/micro';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  helloWorld() {
    return {
      hello: 'world',
      from: MicroChannelEnum.STATEMAN,
    };
  }
}

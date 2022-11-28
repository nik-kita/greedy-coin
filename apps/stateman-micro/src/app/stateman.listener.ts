import { IStatemanListener } from '@greedy-coin/types/micro';
import { Controller, Logger } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class StatemanListener implements IStatemanListener {
  @EventPattern('hello')
  hello(
    @Payload() name: string,
  ) {
    this.logger.debug(`hello, ${name}`);
  }

  @EventPattern('ok')
  ok() {
    this.logger.debug('ok, google!');
  }

  logger = new Logger(StatemanListener.name);
}

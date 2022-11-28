import { IStatemanListener } from '@greedy-coin/types/micro';
import { EventPatternByMethodName } from '@greedy-coin/utils';
import { Controller, Logger } from '@nestjs/common';
import { Payload } from '@nestjs/microservices';

@Controller()
export class StatemanListener implements IStatemanListener {
  @EventPatternByMethodName()
  hello(
    @Payload() name: string,
  ) {
    this.logger.debug(`hello, ${name}`);
  }

  logger = new Logger(StatemanListener.name);
}

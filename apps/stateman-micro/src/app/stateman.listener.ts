import { IStatemanListener } from '@greedy-coin/types/micro';
import { Controller, Logger } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class StatemanListener implements IStatemanListener {
  logger = new Logger(StatemanListener.name);

  @EventPattern()
  hello(@Payload() name: string) {
    this.logger.debug(`hello, ${name}`);
  }
}

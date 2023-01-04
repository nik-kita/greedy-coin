import { anny } from '@greedy-coin/types/utils';
import { EventPattern } from '@nestjs/microservices';

export function EventPatternByMethodName() {
  return function (target: anny, propertyKey: string, descriptor: PropertyDescriptor) {
    EventPattern(propertyKey)(target, propertyKey, descriptor);
  };
}

import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  helloWorld() {
    return {
      hello: 'world',
      from: 'KU_API',
    };
  }
}

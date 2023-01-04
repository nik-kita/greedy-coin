import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) { }


  @Get('_/hello-world')
  _helloWorld() {
    return {
      hello: 'world',
      from: 'KU_API',
    };
  }

  @Get('_/say-hi/:name')
  _sayHi(
    @Param('name') name: string,
  ) {
    return this.appService.testHi(name);
  }
}

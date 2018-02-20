import {Get, Controller, Param, Req} from '@nestjs/common';

@Controller()
export class AppController {
	@Get()
	root(@Param() params): string {
    let p = params;
    console.log(`p: ${JSON.stringify(p)}`);
    // request.params[param]
    return 'Hello World!';
  }
}

import {Controller, Get, Query} from '@nestjs/common';
import {isNumber} from "util";


@Controller()
export class AppController {
  @Get()
  root(@Query() params): number | string {
    try {
      let value = params.value;
      console.log(`value: ${JSON.stringify(value)}`);
      let result = value * 67.50;
      if (isNumber(result) && result !== null && result !== undefined && !isNaN(result)) {
        return result;
      } else {
        throw new Error('Not a number');
      }
    } catch (error) {
      console.error(error);
      return 'Something went wrong';
    }
  }
}

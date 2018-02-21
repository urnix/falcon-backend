import {Controller, Get, Query} from '@nestjs/common';
import {isNumber} from 'util';

let fetch = require('node-fetch');

const CURRENCIES = ['RUB', 'USD', 'EUR'];

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
            // console.error(error);
            console.log('ERROR');
            // return 'Something went wrong';
            return 'Visit application here <a href="https://converter-6e915.firebaseapp.com">https://converter-6e915.firebaseapp.com</a>';
        }
    }

    @Get('rates')
    async rates(): Promise<object | string> {
        try {
            let result = {};
            for (let currency of CURRENCIES) {
                let rest = CURRENCIES.filter(item => item !== currency).join();
                const response = await fetch(`https://api.fixer.io/latest?base=${currency}&symbols=${rest}`);
                const json = await response.json();
                let rates = json.rates;
                result[currency] = rates;
            }
            return result;
        } catch (error) {
            console.error(error);
            return 'Something went wrong';
        }
    }
}

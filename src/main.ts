import {NestFactory} from '@nestjs/core';
import {ApplicationModule} from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule);
    await app.listen(process.env.PORT || 5000)
}

bootstrap();

let http = require('http');
if ((new Date()).getHours() > 6) {
    setInterval(function () {
        http.get('http://falcon-converter.herokuapp.com?value=1&comment=just%20for%20wake%20up');
    }, 300001);
}

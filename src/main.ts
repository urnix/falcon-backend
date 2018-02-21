import {NestFactory} from '@nestjs/core';
import {ApplicationModule} from './app.module';

let  cors = require('cors');

async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule);
    app.use(cors());
    await app.listen(process.env.PORT || 3000)
}

bootstrap();

let http = require('http');
if ((new Date()).getHours() > 3 && (new Date()).getHours() < 21) {
    setInterval(function () {
        http.get('http://falcon-converter.herokuapp.com?value=1&comment=just%20for%20wake%20up');
    }, 300000);
}

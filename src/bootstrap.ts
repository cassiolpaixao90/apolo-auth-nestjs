import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';

import { AppModule } from './app.module';

(async () => {
	const app = await NestFactory.create(AppModule);
	app.enableCors();
	app.use(helmet());
	app.use(
		rateLimit({
			windowMs: 15 * 60 * 1000, // 15 minutes
			max: 100 // limit each IP to 100 requests per windowMs
		})
	);

	const options = new DocumentBuilder()
		.setTitle('Apolo Auth')
		.setDescription('The Apolo Auth API description')
		.setVersion('1.0')
		.build();
	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('api/docs', app, document);

	app.setGlobalPrefix('api/v1/');
	app.useGlobalPipes(new ValidationPipe());
	await app.listen(3000);
})();

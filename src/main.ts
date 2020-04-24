import { NestFactory } from '@nestjs/core';
import {
    FastifyAdapter,
    NestFastifyApplication,
  } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';
import { ExceptionErrorFilter, LoggingInterceptor, ValidationPipe } from 'src/infraestructure/shared';
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

    app.useGlobalFilters(new ExceptionErrorFilter());
    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalInterceptors(new LoggingInterceptor())

	const options = new DocumentBuilder()
		.setTitle('Apolo Auth')
		.setDescription('The Apolo Auth API description')
		.setVersion('1.0')
        .build();

	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('api/docs', app, document);

	await app.listen(3000);
})();

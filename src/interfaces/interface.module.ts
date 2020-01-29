import { Module } from '@nestjs/common';
import { APP_PIPE, APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';

import { UserController, AuthController } from 'src/interfaces/http/modules';
import { ValidationPipe } from 'src/interfaces/http/pipes';
import { HttpErrorFilter } from 'src/interfaces/http/filters';
import { LoggingInterceptor } from 'src/interfaces/http/interceptors';

const CONTROLLERS = [UserController, AuthController];
@Module({
	imports: [...CONTROLLERS],
	controllers: [...CONTROLLERS],
	providers: [
		{
			provide: APP_PIPE,
			useClass: ValidationPipe
		},
		{
			provide: APP_FILTER,
			useClass: HttpErrorFilter
		},
		{
			provide: APP_INTERCEPTOR,
			useClass: LoggingInterceptor
		}
	]
})
export class InterfaceModule {}

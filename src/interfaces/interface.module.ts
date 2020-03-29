import { Module, Global } from '@nestjs/common';
import { APP_PIPE, APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';

import { UserController, AuthController } from 'src/interfaces/http/modules';
import { ValidationPipe } from 'src/interfaces/http/pipes';
import { HttpErrorFilter } from 'src/interfaces/http/filters';
import { LoggingInterceptor } from 'src/interfaces/http/interceptors';

import { IsUserAlreadyExist } from 'src/interfaces/http/decorators';

const CONTROLLERS = [UserController, AuthController];
const PROVIDERS = [
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
	},
	IsUserAlreadyExist
];

@Global()
@Module({
	controllers: [...CONTROLLERS],
	providers: [...PROVIDERS]
})
export class InterfaceModule {}

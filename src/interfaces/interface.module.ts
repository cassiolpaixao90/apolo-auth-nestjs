import { Global, Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import {
	AuthController,
	HttpErrorFilter,
	IsUserAlreadyExist,
	LoggingInterceptor,
	UserController,
	ValidationPipe
} from 'src/interfaces/http';

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

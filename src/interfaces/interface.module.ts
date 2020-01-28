import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';

import { UserController } from 'src/interfaces/http/modules/user';
import { ValidationPipe } from 'src/interfaces/http/pipes';

@Module({
	imports: [UserController],
	controllers: [UserController],
	providers: [
		{
			provide: APP_PIPE,
			useClass: ValidationPipe
		}
	]
})
export class InterfaceModule {}

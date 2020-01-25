import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/application/use_cases/auth.use-case';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	getHello(): string {
		return this.appService.getHello();
	}
}

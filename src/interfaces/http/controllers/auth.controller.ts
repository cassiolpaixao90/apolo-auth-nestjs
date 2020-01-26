import { Controller, Get } from '@nestjs/common';
import { AuthUseCase } from 'src/application/use_cases/auth.usecase';

@Controller()
export class AuthController {
	constructor(private readonly appService: AuthUseCase) {}

	@Get()
	getHello(): string {
		return this.appService.getHello();
	}
}

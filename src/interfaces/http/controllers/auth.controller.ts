import { Controller, Get } from '@nestjs/common';
import { AuthUseCase } from 'src/application/use_cases/auth.usecase';

@Controller()
export class AuthController {
	constructor(private readonly appService: AuthUseCase) {}

	@Get()
	async getHello(): Promise<any> {
		return await this.appService.getHello();
	}
}

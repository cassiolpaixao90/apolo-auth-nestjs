import { Controller, Get, Body } from '@nestjs/common';
import { AuthUseCase } from 'src/application/use_cases/auth.usecase';
import { UserDto } from 'src/interfaces/http/validators/user.validator';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller()
export class AuthController {
	constructor(private readonly appService: AuthUseCase) {}

	@Get()
	async getHello(@Body() userDto: UserDto): Promise<any> {
		return await this.appService.getHello();
	}
}

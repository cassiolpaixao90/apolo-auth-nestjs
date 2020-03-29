import { Controller, Body, Post } from '@nestjs/common';
import { UserUseCase } from 'src/application/use_cases';
import { UserSignupRequest } from 'src/interfaces/http/modules/auth/request';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('api/v1/auth')
export class AuthController {
	constructor(private readonly userUseCase: UserUseCase) { }

	@Post('signup')
	async createUser(@Body() userSignupRequest: UserSignupRequest) {
		return await this.userUseCase.createUser(userSignupRequest);
	}
}

import { Controller, Body, Post, UsePipes } from '@nestjs/common';
import { UserUseCase } from 'src/application/use_cases';
import { UserSignupRequest } from 'src/interfaces/http/modules/auth/request';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('api/v1/users')
export class UserController {
	constructor(private readonly userUseCase: UserUseCase) {}

	@Post('signup')
	async createUser(@Body() userSignupRequest: UserSignupRequest) {
		return await this.userUseCase.createUser(userSignupRequest);
	}
}

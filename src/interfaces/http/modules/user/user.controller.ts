import { Controller, Get, Body, Post } from '@nestjs/common';
import { UserUseCase } from 'src/application/use_cases';
import { UserSignupDto } from 'src/interfaces/http/modules/user/request';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('api/v1/users')
export class UserController {
	constructor(private readonly userUseCase: UserUseCase) {}

	@Post('signup')
	async createUser(@Body() userSignupDto: UserSignupDto) {
		return await this.userUseCase.createUser(userSignupDto);
	}
}

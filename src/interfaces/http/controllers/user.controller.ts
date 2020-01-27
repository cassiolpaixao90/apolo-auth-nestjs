import { Controller, Get, Body, Post } from '@nestjs/common';
import { UserUseCase } from 'src/application/use_cases';
import { UserCreateRequest } from 'src/interfaces/http/serializers/request';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('api/user')
export class UserController {
	constructor(private readonly userUseCase: UserUseCase) {}

	@Post()
	async createUser(@Body() userCreateRequest: UserCreateRequest) {
		return await this.userUseCase.createUser(userCreateRequest);
	}
}

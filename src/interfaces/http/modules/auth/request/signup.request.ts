import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Validate } from 'class-validator';
import { IsUserAlreadyExist } from 'src/interfaces/http/decorators';

export class AuthSignupRequest {
	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	name: string;

	@ApiProperty()
	@IsEmail()
	@Validate(IsUserAlreadyExist)
	email: string;

	@ApiProperty()
	@IsString()
	password: string;

	@ApiProperty()
	@IsString()
	passwordConfirm: string;
}

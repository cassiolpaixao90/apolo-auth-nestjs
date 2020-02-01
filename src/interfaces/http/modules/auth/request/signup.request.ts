import { IsEmail, IsString, IsNotEmpty, Validate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IsUserAlreadyExist } from 'src/interfaces/http/decorators';

export class UserSignupRequest {
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

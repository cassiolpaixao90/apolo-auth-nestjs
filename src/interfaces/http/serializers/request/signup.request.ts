import { IsEmail, IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserSignupDto {
	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	name: string;

	@ApiProperty()
	@IsEmail()
	email: string;

	@ApiProperty()
	@IsString()
	password: string;

	@ApiProperty()
	@IsString()
	passwordConfirm: string;
}
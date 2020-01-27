import { IsEmail, IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserSignupDto {
	@ApiProperty({})
	@IsNotEmpty()
	@IsString()
	readonly name: string;

	@ApiProperty()
	@IsEmail()
	readonly email: string;

	@ApiProperty()
	@IsString()
	readonly password: string;

	@ApiProperty()
	@IsString()
	readonly passwordConfirm: string;
}

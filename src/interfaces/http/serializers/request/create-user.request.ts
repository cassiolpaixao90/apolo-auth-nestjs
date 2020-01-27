import { ApiProperty } from '@nestjs/swagger';

export class UserCreateRequest {
	@ApiProperty()
	name: string;

	@ApiProperty()
	email: string;

	@ApiProperty()
	password: string;
}

import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
	@ApiProperty()
	name: string;

	@ApiProperty()
	age: string;

	@ApiProperty()
	breed: string;
}

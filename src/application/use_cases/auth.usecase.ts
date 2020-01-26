import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthUseCase {
	getHello(): string {
		return 'Hello World!';
	}
}

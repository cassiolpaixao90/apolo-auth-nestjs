import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/application/repositories/user.repository';

@Injectable()
export class AuthUseCase {
	constructor(private readonly useRepository: UserRepository) {}
	async getHello(): Promise<any> {
		return await this.useRepository.find();
	}
}

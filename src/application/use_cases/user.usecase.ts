import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/application/repositories/user.repository';

@Injectable()
export class UserUseCase {
	constructor(private readonly useRepository: UserRepository) {}

	async getAll(): Promise<any> {
		return await this.useRepository.find();
	}

	async createUser(user: object): Promise<any> {
		return await this.useRepository.create(user);
	}
}

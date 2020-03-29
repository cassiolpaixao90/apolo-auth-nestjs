import { Inject, Injectable } from '@nestjs/common';
import { BaseRepository, UserEntity } from 'src/infraestructure/database';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository extends BaseRepository<UserEntity> {
	constructor(
		@Inject('USER_ENTITY')
		private readonly userRepository: Repository<UserEntity>
	) {
		super(userRepository);
	}

	async findByEmail(email: string): Promise<object> {
		return this.userRepository.findOne({
			where: {
				email
			}
		});
	}
}

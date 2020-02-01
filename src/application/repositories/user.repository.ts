import { Repository } from 'typeorm';
import { Injectable, Inject } from '@nestjs/common';
import { UserEntity } from 'src/infraestructure/database/entity';
import { BaseRepository } from 'src/infraestructure/database/repository';

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

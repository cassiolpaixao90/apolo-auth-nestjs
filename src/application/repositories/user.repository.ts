import { Repository } from 'typeorm';
import { Injectable, Inject } from '@nestjs/common';
import { UserEntity } from 'src/infraestructure/database/entity/user.entity';
import { MongoRepository } from 'src/infraestructure/database/repository/mongo.repository';

@Injectable()
export class UserRepository extends MongoRepository<UserEntity> {
	constructor(
		@Inject('USER_ENTITY')
		private readonly userRepository: Repository<UserEntity>
	) {
		super(userRepository);
	}
}

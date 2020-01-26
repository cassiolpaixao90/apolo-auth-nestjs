import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { UserDocument } from 'src/infraestructure/database/mappers/mongo.mapper';
import { MongoRepository } from 'src/infraestructure/database/repository/mongo.repository';

@Injectable()
export class UserRepository extends MongoRepository {
	constructor(@Inject('USER_SCHEMA') userModel: Model<UserDocument>) {
		super(userModel);
	}

	async create(createCatDto: object): Promise<any> {
		return await this.create(createCatDto);
	}

	async findAll(): Promise<any[]> {
		return await this.findAll();
	}
}

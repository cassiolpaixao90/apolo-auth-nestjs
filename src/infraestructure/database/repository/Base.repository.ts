import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseEntity } from '../entity';
import { IBaseRepository } from './IBase.repository';

@Injectable()
export class BaseRepository<T extends BaseEntity> implements IBaseRepository<T> {
	constructor(private readonly repository: Repository<T>) {}

	async find(): Promise<T[]> {
		return await this.repository.find();
	}

	async get(id: string): Promise<T> {
		throw new Error('Method not implemented.');
	}

	async update(entity: T): Promise<T> {
		throw new Error('Method not implemented.');
	}

	async create(entity: any): Promise<T> {
		return await this.repository.save(entity);
	}

	async delete(id: string): Promise<void> {
		throw new Error('Method not implemented.');
	}
}

import { ObjectID } from 'typeorm';

export class BaseEntity {
	@ObjectID()
	public id: string;
}

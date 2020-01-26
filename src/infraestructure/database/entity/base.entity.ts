import { ObjectIdColumn, ObjectID } from 'typeorm';

export class BaseEntity {
	@ObjectIdColumn()
	id: ObjectID;
}

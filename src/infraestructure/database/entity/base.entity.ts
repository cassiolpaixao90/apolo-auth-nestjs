import { ObjectID, ObjectIdColumn } from 'typeorm';

export class BaseEntity {
	@ObjectIdColumn()
	id: ObjectID;
}

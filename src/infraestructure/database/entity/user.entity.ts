import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('users')
export class UserEntity extends BaseEntity {
	@Column({ length: 50 })
	readonly name: string;

	@Column({ length: 50 })
	readonly age: number;

	constructor(o: object) {
		super();
		Object.assign(this, o);
	}
}

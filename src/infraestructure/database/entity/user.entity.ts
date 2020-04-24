import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('users')
export class UserEntity extends BaseEntity {
	@Column({ length: 50 })
	readonly email: string;

	@Column({ length: 50 })
	readonly password: number;

	constructor(o: object) {
		super();
		Object.assign(this, o);
	}
}

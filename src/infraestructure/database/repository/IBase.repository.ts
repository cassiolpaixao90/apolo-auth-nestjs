export interface IBaseRepository<T> {
	find(): Promise<T[]>;
	get(id: string): Promise<T>;
	update(entity: T): Promise<T>;
	create(entity: T): Promise<T>;
	delete(id: string): Promise<void>;
}

export interface IBaseRepository<T> {
	getAll(): Promise<T[]>;
	get(id: string): Promise<T>;
	update(entity: T): Promise<T>;
	create(entity: T): Promise<T>;
	delete(id: string);
}

export class MongoRepository<T extends BaseEntity> implements IBaseService<T> {
	private readonly model: any;

	constructor(model) {
		this.model = model;
	}

	async create(data: object): Promise<any> {
		const created = new this.model(data);
		return created.save();
	}

	async findAll(): Promise<any> {
		return [];
	}
}

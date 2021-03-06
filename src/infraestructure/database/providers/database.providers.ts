import { UserEntity } from 'src/infraestructure/database';
import { Connection, createConnection } from 'typeorm';
export const databaseProviders = [
	{
		provide: 'DATABASE_CONNECTION',
		useFactory: async () =>
			await createConnection({
				type: 'mongodb',
				host: 'localhost',
				port: 27017,
				database: 'test',
				entities: [__dirname + '/../**/*.entity{.ts,.js}'],
				synchronize: true
			})
	},
	{
		provide: 'USER_ENTITY',
		useFactory: (connection: Connection) => connection.getRepository(UserEntity),
		inject: ['DATABASE_CONNECTION']
	}
];

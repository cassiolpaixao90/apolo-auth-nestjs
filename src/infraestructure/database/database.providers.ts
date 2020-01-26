import * as mongoose from 'mongoose';
import { Connection } from 'mongoose';
import { UserSchema } from 'src/infraestructure/database/schema/user.schema';

export const databaseProviders = [
	{
		provide: 'DATABASE_CONNECTION',
		useFactory: (): Promise<typeof mongoose> => mongoose.connect('mongodb://localhost/nest')
	},
	{
		provide: 'USER_SCHEMA',
		useFactory: (connection: Connection) => connection.model('User', UserSchema),
		inject: ['DATABASE_CONNECTION']
	}
];

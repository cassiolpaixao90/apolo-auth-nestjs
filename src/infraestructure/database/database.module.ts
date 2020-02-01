import { Module, Global } from '@nestjs/common';
import { databaseProviders } from './database.providers';

const PROVIDERS = [...databaseProviders];
@Global()
@Module({
	providers: [...PROVIDERS],
	exports: [...PROVIDERS]
})
export class DatabaseModule {}

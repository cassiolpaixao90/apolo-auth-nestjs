import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

const PROVIDERS = [...databaseProviders];

@Module({
	providers: [...PROVIDERS],
	exports: [...PROVIDERS]
})
export class DatabaseModule {}

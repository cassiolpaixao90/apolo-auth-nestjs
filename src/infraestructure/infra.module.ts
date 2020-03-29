import { Module, Global } from '@nestjs/common';
import { databaseProviders } from 'src/infraestructure/database';

const PROVIDERS = [...databaseProviders];
@Global()
@Module({
	providers: [...PROVIDERS],
	exports: [...PROVIDERS]
})
export class InfraModule {}

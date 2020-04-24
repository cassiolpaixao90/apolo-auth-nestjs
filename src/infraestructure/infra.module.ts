import { Global, Module } from '@nestjs/common';
import { databaseProviders } from 'src/infraestructure/database';
import { JwtStrategy } from 'src/infraestructure/security/passport/jwt.strategy';

const PROVIDERS = [...databaseProviders, JwtStrategy];
@Global()
@Module({
	providers: [...PROVIDERS],
	exports: [...PROVIDERS]
})
export class InfraModule {}

import { Global, Module } from '@nestjs/common';
import { UserRepository } from 'src/application/repositories';
import { UserUseCase } from 'src/application/use_cases';

const EXPORTS = [UserUseCase, UserRepository];
const PROVIDERS = [UserUseCase, UserRepository];
@Global()
@Module({
	exports: [...EXPORTS],
	providers: [...PROVIDERS]
})
export class ApplicationModule {}

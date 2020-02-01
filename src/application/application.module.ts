import { Module, Global } from '@nestjs/common';
import { UserUseCase } from 'src/application/use_cases';
import { UserRepository } from 'src/application/repositories';

const EXPORTS = [UserUseCase, UserRepository];
const PROVIDERS = [UserUseCase, UserRepository];
@Global()
@Module({
	exports: [...EXPORTS],
	providers: [...PROVIDERS]
})
export class ApplicationModule {}

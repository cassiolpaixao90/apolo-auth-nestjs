import { Module, Global } from '@nestjs/common';
import { UserUseCase } from 'src/application/use_cases';
import { UserRepository } from 'src/application/repositories/user.repository';

@Global()
@Module({
	exports: [UserUseCase, UserRepository],
	providers: [UserUseCase, UserRepository]
})
export class ApplicationModule {}

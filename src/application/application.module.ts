import { Module } from '@nestjs/common';
import { UserUseCase } from 'src/application/use_cases';
import { UserRepository } from 'src/application/repositories/user.repository';

@Module({
	exports: [UserUseCase, UserRepository],
	providers: [UserUseCase, UserRepository]
})
export class ApplicationModule {}

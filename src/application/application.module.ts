import { Module } from '@nestjs/common';
import { AuthUseCase } from 'src/application/use_cases/auth.usecase';
import { UserRepository } from 'src/application/repositories/user.repository';

@Module({
	exports: [AuthUseCase, UserRepository],
	providers: [AuthUseCase, UserRepository]
})
export class ApplicationModule {}

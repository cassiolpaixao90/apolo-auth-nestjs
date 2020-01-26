import { Module } from '@nestjs/common';
import { AuthUseCase } from 'src/application/use_cases/auth.usecase';

@Module({
	exports: [AuthUseCase],
	providers: [AuthUseCase]
})
export class ApplicationModule {}

import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserRepository } from 'src/application/repositories';
import { AuthUseCase, UserUseCase } from 'src/application/use_cases';
import { InfraModule } from 'src/infraestructure/infra.module';

const EXPORTS = [UserUseCase, AuthUseCase, UserRepository];
const PROVIDERS = [UserUseCase, AuthUseCase, UserRepository];
const MODULES = [InfraModule, PassportModule]
@Global()
@Module({
    imports: [
        ...MODULES,
        JwtModule.register({
          secret: 'jskajskjas',
          signOptions: { expiresIn: '60s' },
        }),
      ],
	exports: [...EXPORTS],
	providers: [...PROVIDERS]
})
export class ApplicationModule {}

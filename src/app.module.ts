import { Module, Global } from '@nestjs/common';
import { InterfaceModule } from 'src/interfaces/interface.module';
import { ApplicationModule } from 'src/application/application.module';
import { InfraModule } from 'src/infraestructure/infra.module';

const APP_MODULES = [ApplicationModule, InterfaceModule, InfraModule];
@Global()
@Module({
	providers: [...APP_MODULES],
	imports: [...APP_MODULES],
	exports: [...APP_MODULES]
})
export class AppModule {}

import { Module, Global } from '@nestjs/common';
import { InterfaceModule } from 'src/interfaces/interface.module';
import { ApplicationModule } from 'src/application/application.module';
import { DatabaseModule } from 'src/infraestructure/database/database.module';

const APP_MODULES = [ApplicationModule, InterfaceModule, DatabaseModule];
@Global()
@Module({
	imports: [...APP_MODULES],
	exports: [...APP_MODULES]
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from 'src/interfaces/http/controllers/auth.controller';
import { AppService } from 'src/application/use_cases/auth.use-case';

@Module({
	imports: [],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}

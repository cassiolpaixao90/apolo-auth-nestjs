import { Module } from '@nestjs/common';
import { AuthController } from 'src/interfaces/http/controllers/auth.controller';

@Module({
	imports: [AuthController],
	controllers: [AuthController]
})
export class InterfaceModule {}

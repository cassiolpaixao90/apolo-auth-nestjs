import { Module } from '@nestjs/common';
import { UserController } from 'src/interfaces/http/controllers';

@Module({
	imports: [UserController],
	controllers: [UserController]
})
export class InterfaceModule {}

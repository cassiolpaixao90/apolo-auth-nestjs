import { Global, Module } from '@nestjs/common';
import { AuthController, IsUserAlreadyExist } from 'src/interfaces/http';

const CONTROLLERS = [AuthController];
const PROVIDERS = [ IsUserAlreadyExist];

@Global()
@Module({
	controllers: [...CONTROLLERS],
	providers: [...PROVIDERS]
})
export class InterfaceModule {}

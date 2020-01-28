import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from 'src/interfaces/http/modules/user/user.controller';
import { UserUseCase } from 'src/application/use_cases/user.usecase';

describe('AppController', () => {
	let userController: UserController;

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			controllers: [UserController],
			providers: [UserUseCase]
		}).compile();

		userController = app.get<UserController>(UserController);
	});
});

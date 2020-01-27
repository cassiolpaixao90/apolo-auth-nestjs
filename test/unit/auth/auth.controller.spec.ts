import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from 'src/interfaces/http/controllers/user.controller';
import { AppService } from 'src/application/use_cases/user.usecase';

describe('AppController', () => {
	let appController: AppController;

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			controllers: [AppController],
			providers: [AppService]
		}).compile();

		appController = app.get<AppController>(AppController);
	});

	describe('root', () => {
		it('should return "Hello World!"', () => {
			expect(appController.getHello()).toBe('Hello World!');
		});
	});
});

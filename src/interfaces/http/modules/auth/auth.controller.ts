import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthUseCase, UserUseCase } from 'src/application/use_cases';
import { JwtAuthGuard } from 'src/interfaces/http/guards';
import { AuthLoginRequestDTO, AuthSignupRequest } from 'src/interfaces/http/modules/auth/request';

@ApiTags('auth')
@Controller('api/v1/auth')
export class AuthController {
    constructor(
        private readonly userUseCase: UserUseCase,
        private readonly authUseCase: AuthUseCase
        ) {}

    @UseGuards(JwtAuthGuard)
	@Post('signup')
	async signup(@Body() authSignupRequest: AuthSignupRequest) {
		return await this.userUseCase.createUser(authSignupRequest);
    }

    @Post('login')
	async login(@Body() authLoginRequestDTO: AuthLoginRequestDTO): Promise<any> {
		return await this.authUseCase.login(authLoginRequestDTO.email, authLoginRequestDTO.password);
    }
}

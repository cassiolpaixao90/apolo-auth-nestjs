import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from 'src/application/repositories';
import { UserDomain } from 'src/domain/models';

@Injectable()
export class AuthUseCase {
  constructor(
    private readonly useRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async login(email: string, password: string): Promise<any> {
    const userDomain = new UserDomain(email, password);
    const user = await this.useRepository.findByEmail(userDomain);
    const access_token = this.jwtService.sign(user);
    return { access_token };
  }
}

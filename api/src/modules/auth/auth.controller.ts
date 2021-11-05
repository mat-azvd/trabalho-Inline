import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor (
    private readonly authService: AuthService
  ) {}

  @Post()
  async login(@Body() input: LoginDto) {
    return await this.authService.login(input.cpf, input.senha);
  }
}

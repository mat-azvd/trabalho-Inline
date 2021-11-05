import { Body, Controller, Delete, Get, Post, Put, UseGuards } from '@nestjs/common';
import { UsuarioPayload } from '../auth/dto/login.dto';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';
import { CurrentUser } from '../auth/strategies/jwt.strategy';
import { LojaDto } from './dto/loja.dto';
import { LojasService } from './lojas.service';

@Controller('lojas')
export class LojasController {
  constructor(private lojasService: LojasService) {}

  @UseGuards(LocalAuthGuard)
  @Get()
  buscar(@CurrentUser() usuario: UsuarioPayload) {
    return this.lojasService.buscar(usuario.lojaId);
  }

  @UseGuards(LocalAuthGuard)
  @Put()
  atualizar() {
    return {};
  }

  @Post()
  async cadastrar(@Body() input: LojaDto) {
    return await this.lojasService.cadastrar(input);
  }
}

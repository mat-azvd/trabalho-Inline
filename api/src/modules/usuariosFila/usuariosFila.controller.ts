import { Body, Controller, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { UsuarioPayload } from '../auth/dto/login.dto';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';
import { CurrentUser } from '../auth/strategies/jwt.strategy';
import { UsuariosFilaService } from './usuariosFila.service';

@Controller('usuarios-fila')
export class UsuariosFilaController {
  constructor (
    private readonly usuariosFilaService: UsuariosFilaService
  ) {}

  @UseGuards(LocalAuthGuard)
  @Get('/:filaId')
  buscar(@CurrentUser() usuario: UsuarioPayload, @Param('filaId') filaId: string) {
    return this.usuariosFilaService.buscar(filaId, usuario.id);
  }
}

import { Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsuarioPayload } from '../auth/dto/login.dto';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';
import { CurrentUser } from '../auth/strategies/jwt.strategy';
import { UsuariosFilaService } from './usuariosFila.service';
@ApiTags('usuarios-fila')
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

  @UseGuards(LocalAuthGuard)
  @Post('/:codigoFila/ingressar')
  async ingressar(@CurrentUser() usuario: UsuarioPayload, @Param('codigoFila') codigoFila: string) {
    return await this.usuariosFilaService.ingressar(codigoFila, usuario.id);
  }

  @UseGuards(LocalAuthGuard)
  @Delete('/:filaId/sair')
  async sair(@CurrentUser() usuario: UsuarioPayload, @Param('filaId') filaId: string) {
    return await this.usuariosFilaService.sairDaFila(filaId, usuario.id);
  }

  @UseGuards(LocalAuthGuard)
  @Delete('/:filaId/remover/:usuarioId')
  async remover(@CurrentUser() usuario: UsuarioPayload, @Param('usuarioId') usuarioId: string, @Param('filaId') filaId: string) {
    return await this.usuariosFilaService.removerUsuarioFila(usuario.lojaId, filaId, usuarioId);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/:filaId/atender/:usuarioId')
  async atender(@CurrentUser() usuario: UsuarioPayload, @Param('usuarioId') usuarioId: string, @Param('filaId') filaId: string) {
    return await this.usuariosFilaService.atender(usuario, filaId, usuarioId);
  }
}


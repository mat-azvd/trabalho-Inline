import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UsuarioPayload } from '../auth/dto/login.dto';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';
import { CurrentUser } from '../auth/strategies/jwt.strategy';
import { FilaDto } from './dto/fila.dto';
import { FilasService } from './filas.service';

@ApiTags('filas')
@ApiBearerAuth()
@Controller('filas')
export class FilasController {
  constructor(private readonly filasService: FilasService) {}

  @UseGuards(LocalAuthGuard)
  @Post()
  async cadastrar(@CurrentUser() usuario: UsuarioPayload, @Body() input: FilaDto) {
    return await this.filasService.cadastrar(usuario.lojaId, input);
  }

  @UseGuards(LocalAuthGuard)
  @Get('/:filaId')
  async buscar(@Param('filaId') filaId: string) {
    return await this.filasService.buscar(filaId);
  }

  @UseGuards(LocalAuthGuard)
  @Put('/:filaId/pausar')
  async pausar(@CurrentUser() usuario: UsuarioPayload, @Param('filaId') filaId: string) {
    return await this.filasService.pausar(filaId, usuario.lojaId);
  }

  @UseGuards(LocalAuthGuard)
  @Put('/:filaId/retomar')
  async retomar(@CurrentUser() usuario: UsuarioPayload, @Param('filaId') filaId: string) {
    return await this.filasService.retomar(filaId, usuario.lojaId);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/:codigo/ingressar')
  async ingressar(@CurrentUser() usuario: UsuarioPayload, @Param('codigo') codigo: string) {
    return await this.filasService.ingressar(codigo, usuario.id);
  }

  @UseGuards(LocalAuthGuard)
  @Delete('/:filaId/sair')
  async sair(@CurrentUser() usuario: UsuarioPayload, @Param('filaId') filaId: string) {
    return await this.filasService.sairDaFila(filaId, usuario.id);
  }

  @UseGuards(LocalAuthGuard)
  @Delete('/:filaId/remover/:usuarioId')
  async remover(@CurrentUser() usuario: UsuarioPayload, @Param('usuarioId') usuarioId: string, @Param('filaId') filaId: string) {
    return await this.filasService.removerUsuarioFila(usuario.lojaId, filaId, usuarioId);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/:filaId/atender/:usuarioId')
  async atender(@CurrentUser() usuario: UsuarioPayload, @Param('usuarioId') usuarioId: string, @Param('filaId') filaId: string) {
    return await this.filasService.atender(usuario, filaId, usuarioId);
  }
}

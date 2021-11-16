import { Body, Controller, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UsuarioPayload } from '../auth/dto/login.dto';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';
import { CurrentUser } from '../auth/strategies/jwt.strategy';
import { ParametrosUsuariosDto, UsuarioDto } from './dto/usuario.dto';
import { UsuariosService } from './usuarios.service';

@ApiTags('usuarios')
@ApiBearerAuth()
@Controller('usuarios')
export class UsuariosController {
  constructor (
    private readonly usuariosService: UsuariosService
  ) {}

  @UseGuards(LocalAuthGuard)
  @Get('/detalhes/:id')
  buscar(@CurrentUser() usuario: UsuarioPayload, @Param('id') id: string) {
    return this.usuariosService.buscar(id, usuario.lojaId);
  }

  @UseGuards(LocalAuthGuard)
  @Get('/logado')
  buscarUsuarioLogado(@CurrentUser() usuario: UsuarioPayload) {
    return this.usuariosService.buscarUsuarioLogado(usuario.id);
  }

  @UseGuards(LocalAuthGuard)
  @Get()
  listar(@CurrentUser() usuario: UsuarioPayload, @Query() parametros: ParametrosUsuariosDto) {
    return this.usuariosService.listar(usuario.lojaId, parametros)
  }

  @UseGuards(LocalAuthGuard)
  @Put('/:id')
  atualizar(@Param('id') id: string, @Body() input: UsuarioDto) {
    return this.usuariosService.atualizar(id, input);
  }

  @Post()
  async cadastrar(@Body() input: UsuarioDto) {
    return await this.usuariosService.cadastrar(input);
  }
}

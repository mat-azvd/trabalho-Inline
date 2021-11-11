import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsuarioFila, UsuarioFilaDocument } from 'src/models/usuario.fila.schema';
import { ParametrosUsuariosFilaDto } from './dto/usuarioFila.dto';

@Injectable()
export class UsuariosFilaService {
  constructor(
    @InjectModel(UsuarioFila.name) private readonly usuarioFilaModel: Model<UsuarioFilaDocument>
  ) {}

  buscar (filaId: string, usuarioId: string) {
    if (!filaId) {
      throw new UnauthorizedException('É necessário informar uma fila para buscar um usuario na fila');
    }

    if (!usuarioId) {
      throw new UnauthorizedException('É necessário estar logado para buscar o usuário na fila');
    }

    return this.usuarioFilaModel
      .findOne({ filaId, usuarioId, atendido: false })
      .select('__v')
  }
}

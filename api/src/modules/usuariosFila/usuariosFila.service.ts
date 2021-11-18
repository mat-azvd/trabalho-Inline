import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Fila, FilaDocument } from 'src/models/fila.schema';
import { UsuarioFila, UsuarioFilaDocument } from 'src/models/usuario.fila.schema';
import { UsuarioPayload } from '../auth/dto/login.dto';

@Injectable()
export class UsuariosFilaService {
  constructor(
    @InjectModel(UsuarioFila.name) private readonly usuarioFilaModel: Model<UsuarioFilaDocument>,
    @InjectModel(Fila.name) private readonly filaModel: Model<FilaDocument>
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
      .select('-__v')
  }

  async ingressar (filaId: string, usuarioId: string) {
    const fila = await this.filaModel.findById(filaId);

    if (!fila) {
      throw new NotFoundException('Fila não encontrada');
    }

    if (!fila.ativo) {
      throw new UnauthorizedException('Fila não está ativa');
    }

    const usuarioFila = await this.usuarioFilaModel.findOne({ filaId: fila.id, usuarioId, atendido: false });

    if (usuarioFila) {
      throw new BadRequestException('Usuário já está na fila');
    }

    const quantidadeFila = await this.usuarioFilaModel.countDocuments({ filaId: fila.id, atendido: false });

    return this.usuarioFilaModel.create({
      filaId: fila.id,
      usuarioId,
      posicao: quantidadeFila + 1,
      atendido: false
    });
  }

  async sairDaFila (filaId: string, usuarioId: string) {
    const fila = await this.filaModel.findById(filaId);

    if (!fila) {
      throw new NotFoundException('Fila não encontrada');
    }

    return this.usuarioFilaModel.findOneAndDelete({ filaId, usuarioId });
  }

  async removerUsuarioFila (lojaId: string, filaId: string, usuarioId: string) {
    const fila = await this.filaModel.findOne({ _id: filaId, lojaId });

    if (!fila) {
      throw new NotFoundException('Fila não encontrada');
    }

    return this.usuarioFilaModel.findOneAndDelete({ filaId, usuarioId });
  }

  async atender (atendente: UsuarioPayload, filaId: string, usuarioId: string) {
    const fila = await this.filaModel.findOne({ _id: filaId, lojaId: atendente.lojaId });

    if (!fila) {
      throw new NotFoundException('Fila não encontrada');
    }

    const usuarioFila = await this.usuarioFilaModel.updateOne(
      { filaId, usuarioId, atendido: false },
      { atendido: true, atendidoEm: new Date(), atendidoPor: atendente.id }
    );

    if (usuarioFila.ok === 0) {
      throw new NotFoundException('Usuário não encontrado na fila');
    }

    return {
      mensagem: 'Usuário atendido com sucesso'
    };
  }
}
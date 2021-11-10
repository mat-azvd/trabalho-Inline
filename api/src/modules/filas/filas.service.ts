import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Fila, FilaDocument } from 'src/models/fila.schema';
import { UsuarioFila, UsuarioFilaDocument } from 'src/models/usuario.fila.schema';
import { FilaDto } from './dto/fila.dto';

@Injectable()
export class FilasService {
  constructor(
    @InjectModel(Fila.name) private readonly filaModel: Model<FilaDocument>,
    @InjectModel(UsuarioFila.name) private readonly usuarioFilaModel: Model<UsuarioFilaDocument>
  ) {}

  async buscar (filaId: string) {
    const fila = await this.filaModel
      .findById(filaId)
      .select('-__v')
      .lean();

    if (!fila) {
      throw new NotFoundException('Fila não encontrada');
    }

    fila['usuarios'] = await this.usuarioFilaModel
      .find({ filaId })
      .select('-__v -_id')
      .lean();

    return fila;
  }

  async ingressar (filaId: string, usuarioId: string) {
    const fila = await this.filaModel.findById(filaId);

    if (!fila) {
      throw new NotFoundException('Fila não encontrada');
    }

    if (!fila.ativo) {
      throw new UnauthorizedException('Fila não está ativa');
    }

    const usuarioFila = await this.usuarioFilaModel.findOne({ filaId, usuarioId, atendido: false });

    if (usuarioFila) {
      throw new BadRequestException('Usuário já está na fila');
    }

    const quantidadeFila = await this.usuarioFilaModel.countDocuments({ filaId, atendido: false });

    return this.usuarioFilaModel.create({
      filaId,
      usuarioId,
      posicao: quantidadeFila + 1,
      atendido: false
    });
  }

  async cadastrar (lojaId: string, data: FilaDto) {
    if (!lojaId) {
      throw new UnauthorizedException('Usuário não tem acesso a este recurso');
    }

    if (!data.inicio) {
      throw new UnauthorizedException('Fila precisa ter horário de inicio');
    }

    if (!data.fim) {
      throw new UnauthorizedException('Fila precisa ter horário de término');
    }

    if (data.inicio > data.fim) {
      throw new UnauthorizedException('Início deve ser menor que o fim');
    }

    const fila = new this.filaModel(data);
    fila.lojaId = lojaId;
    fila.codigo = Math.random().toString(36).toUpperCase();
    fila.nome = `Fila #${fila.codigo}`

    return fila.save();
  }

  pausar (filaId: string, lojaId: string) {
    return this.toggleStatus(lojaId, filaId, false);
  }

  retomar (filaId: string, lojaId: string) {
    return this.toggleStatus(lojaId, filaId, true);
  }

  async sairDaFila (filaId: string, usuarioId: string) {
    const fila = await this.filaModel.findById(filaId);

    if (!fila) {
      throw new NotFoundException('Fila não encontrada');
    }

    return this.usuarioFilaModel.deleteOne({ filaId, usuarioId });
  }

  async removerUsuarioFila (lojaId: string, filaId: string, usuarioId: string) {
    const fila = await this.filaModel.findOne({ _id: filaId, lojaId });

    if (!fila) {
      throw new NotFoundException('Fila não encontrada');
    }

    return this.usuarioFilaModel.deleteOne({ filaId, usuarioId });
  }

  private async toggleStatus (lojaId: string, filaId: string, ativo: boolean) {
    if (!lojaId) {
      throw new UnauthorizedException('Usuário não tem acesso a este recurso');
    }

    const fila = await this.filaModel.findOneAndUpdate({ _id: filaId, lojaId }, { ativo });

    if (!fila) {
      throw new NotFoundException('Fila não encontrada');
    }

    return fila;
  }
}

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
      .populate({
        path: 'usuarioId',
        select: '-__v -senha'
      })
      .lean();

    return fila;
  }

  async listar (lojaId) {
    if (!lojaId) {
      throw new UnauthorizedException('Usuário não tem acesso a este recurso');
    }

    return await this.filaModel
      .find({ lojaId })
      .sort( { inicio: -1 })
      .select('-__v')
      .lean();
  }

  async cadastrar (lojaId: string, data: FilaDto) {
    if (!lojaId) {
      throw new UnauthorizedException('Usuário não tem acesso a este recurso');
    }

    if (data.inicio > data.fim) {
      throw new UnauthorizedException('Início deve ser menor que o fim');
    }

    const fila = new this.filaModel(data);
    fila.lojaId = lojaId;
    fila.codigo = Math.random().toString(36).substr(2, 8).toUpperCase();
    fila.ativo = true;
    fila.nome = `Fila #${fila.codigo}`

    try {
      await fila.save();
    } catch (error) {
      throw new BadRequestException((error as Error).message);
    }

    return fila;
  }

  pausar (filaId: string, lojaId: string) {
    return this.toggleStatus(lojaId, filaId, false);
  }

  retomar (filaId: string, lojaId: string) {
    return this.toggleStatus(lojaId, filaId, true);
  }

  private async toggleStatus (lojaId: string, filaId: string, ativo: boolean) {
    if (!lojaId) {
      throw new UnauthorizedException('Usuário não tem acesso a este recurso');
    }

    const fila = await this.filaModel.updateOne({ _id: filaId, lojaId }, { ativo });

    if (fila.ok === 0) {
      throw new NotFoundException('Fila não encontrada');
    }

    return {
      mensagem: ativo ? 'Fila retomada' : 'Fila pausada'
    };
  }
}

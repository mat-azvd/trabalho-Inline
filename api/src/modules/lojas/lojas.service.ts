import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Loja, LojaDocument } from 'src/models/loja.schema';
import { LojaDto } from './dto/loja.dto';

@Injectable()
export class LojasService {
  constructor(
    @InjectModel(Loja.name) private readonly lojaModel: Model<LojaDocument>
  ) {}

  buscar (id: string) {
    if (!id) {
      throw new UnauthorizedException('Usuário não tem acesso a este recurso');
    }

    return this.lojaModel.findById(id);
  }

  async cadastrar (data: LojaDto) {
    const loja = new this.lojaModel(data);

    return loja.save();
  }
}

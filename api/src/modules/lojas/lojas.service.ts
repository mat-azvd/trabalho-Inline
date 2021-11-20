import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Loja, LojaDocument } from 'src/models/loja.schema';
import { LojaDto } from './dto/loja.dto';
import { validarCNPJ } from 'src/utils';

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
    if (!validarCNPJ(data.cnpj)) {
      throw new BadRequestException('CNPJ inválido')
    }
    data.cnpj = data.cnpj.replace(/[^\d]+/g, '');
    const loja = new this.lojaModel(data);

    return loja.save();
  }
}

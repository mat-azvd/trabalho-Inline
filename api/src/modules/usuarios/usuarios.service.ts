import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario, UsuarioDocument } from 'src/models/usuario.schema';
import { ParametrosUsuariosDto, UsuarioDto } from './dto/usuario.dto';
import * as argon2 from 'argon2';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel(Usuario.name) private readonly usuarioModel: Model<UsuarioDocument>
  ) {}

  buscar (id: string, lojaId: string) {
    if (!lojaId) {
      throw new UnauthorizedException('Usuário não tem acesso a este recurso');
    }

    return this.usuarioModel
      .findOne({ _id: id, lojaId })
      .select('-senha');
  }

  async listar (lojaId: string, parametros: ParametrosUsuariosDto) {
    if (!lojaId) {
      throw new UnauthorizedException('Usuário não tem acesso a este recurso');
    }

    const total = await this.usuarioModel.countDocuments({ lojaId });
    const usuarios = await this.usuarioModel
      .find({ lojaId })
      .select('-senha')
      .skip(parametros.limite * (parametros.pagina - 1))
      .limit(parametros.limite);

    return {
      usuarios,
      paginacao: {
        total,
        pagina: parametros.pagina,
      }
    }
  }

  async atualizar (id: string, data: UsuarioDto) {
    const usuario = await this.usuarioModel.findById(id);

    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado');
    }

    if (data.senha) {
      const hash = await argon2.hash(data.senha);
      usuario.senha = hash;
    }

    const response = await this.usuarioModel.updateOne({ _id: id }, data);

    return response;
  }

  async cadastrar (data: UsuarioDto) {
    data.senha = await argon2.hash(data.senha);
    const usuario = new this.usuarioModel(data);

    return usuario.save();
  }
}

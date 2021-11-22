import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario, UsuarioDocument } from 'src/models/usuario.schema';
import { ParametrosUsuariosDto, UsuarioDto } from './dto/usuario.dto';
import * as argon2 from 'argon2';
import { Loja, LojaDocument } from 'src/models/loja.schema';
import { validarCPF } from 'src/utils';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel(Usuario.name) private readonly usuarioModel: Model<UsuarioDocument>,
    @InjectModel(Loja.name) private readonly lojaModel: Model<LojaDocument>

  ) {}

  buscar (id: string, lojaId: string) {
    if (!lojaId) {
      throw new UnauthorizedException('Usuário não tem acesso a este recurso');
    }

    return this.usuarioModel
      .findOne({ _id: id, lojaId })
      .select('-senha');
  }

  async buscarUsuarioLogado (id: string) {
    const usuario = await this.usuarioModel
      .findOne({ _id: id })
      .select('-senha')
      .lean();

    usuario['loja'] = await this.lojaModel.findById(usuario.lojaId);

    return usuario;
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
    const usuario = await this.usuarioModel.findById(id).lean();

    if (data.cpf && !validarCPF(data.cpf)) {
      throw new BadRequestException('CPF inválido')
    }

    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado');
    }

    if (data.senha) {
      data.senha = await argon2.hash(data.senha);
    } else {
      delete data.senha;
    }

    const response = await this.usuarioModel.updateOne({ _id: id }, { $set: data });

    return response;
  }

  async cadastrar (data: UsuarioDto) {
    if (!validarCPF(data.cpf)) {
      throw new BadRequestException('CPF inválido')
    }

    data.senha = await argon2.hash(data.senha);
    data.cpf = data.cpf.replace(/[^\d]+/g, '');
    const usuario = new this.usuarioModel(data);

    try {
      await usuario.save();
    } catch (error) {
      throw new BadRequestException((error as Error).message)
    }

    return {
      mensagem: 'Usuário cadastrado com sucesso',
      usuario: {
        _id: usuario._id,
        nome: usuario.nome,
        cpf: usuario.cpf,
      }
    }
  }
}

import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import * as argon2 from 'argon2';
import { Model } from 'mongoose';
import { Usuario, UsuarioDocument } from 'src/models/usuario.schema';
import { validarCPF } from 'src/utils';


@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Usuario.name) private readonly usuarioModel: Model<UsuarioDocument>,
    private jwtService: JwtService
  ) {}

  async login(cpf: string, senha: string) {
    if (!validarCPF(cpf)) {
      throw new BadRequestException('CNPJ inválido')
    }

    const user = await this.usuarioModel.findOne({ cpf: cpf.replace(/[^\d]+/g, '') });

    if (!user || !(await argon2.verify(user.senha, senha))) {
      throw new UnauthorizedException('Credenciais inválidas.');
    }

    const token = this.jwtService.sign({
      id: user.id,
      cpf: user.cpf,
      lojaId: user.lojaId
    });

    return {
      token
    }
  }
}

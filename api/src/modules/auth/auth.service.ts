import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import * as argon2 from 'argon2';
import { Model } from 'mongoose';
import { Usuario, UsuarioDocument } from 'src/models/usuario.schema';


@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Usuario.name) private readonly usuarioModel: Model<UsuarioDocument>,
    private jwtService: JwtService
  ) {}

  async login(cpf: string, senha: string) {
    const user = await this.usuarioModel.findOne({ cpf });

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

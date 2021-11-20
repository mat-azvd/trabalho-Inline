import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuario, UsuarioSchema } from 'src/models/usuario.schema';
import { Loja, LojaSchema } from 'src/models/loja.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: Usuario.name,
        schema: UsuarioSchema,
      },
      {
        name: Loja.name,
        schema: LojaSchema,
      },
    ])
  ],
  providers: [UsuariosService],
  controllers: [UsuariosController]
})
export class UsuariosModule {}

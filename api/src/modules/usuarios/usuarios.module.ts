import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuario, UsuarioSchema } from 'src/models/usuario.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: Usuario.name,
        schema: UsuarioSchema,
      },
    ])
  ],
  providers: [UsuariosService],
  controllers: [UsuariosController]
})
export class UsuariosModule {}

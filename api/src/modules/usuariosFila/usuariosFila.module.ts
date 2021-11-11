import { Module } from '@nestjs/common';
import { UsuariosFilaService } from './usuariosFila.service';
import { UsuariosFilaController } from './usuariosFila.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioFila, UsuarioFilaSchema } from 'src/models/usuario.fila.schema';
import { Fila, FilaSchema } from 'src/models/fila.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: UsuarioFila.name,
        schema: UsuarioFilaSchema,
      },
      {
        name: Fila.name,
        schema: FilaSchema
      }
    ])
  ],
  providers: [UsuariosFilaService],
  controllers: [UsuariosFilaController]
})

export class UsuariosFilaModule {}

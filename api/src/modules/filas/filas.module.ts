import { Module } from '@nestjs/common';
import { FilasService } from './filas.service';
import { FilasController } from './filas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Fila, FilaSchema } from 'src/models/fila.schema';
import { UsuarioFila, UsuarioFilaSchema } from 'src/models/usuario.fila.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: Fila.name,
        schema: FilaSchema,
      },
      {
        name: UsuarioFila.name,
        schema: UsuarioFilaSchema,
      }
    ])
  ],
  providers: [FilasService],
  controllers: [FilasController]
})
export class FilasModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Fila, FilaSchema } from 'src/models/fila.schema';
import { UsuarioFila, UsuarioFilaSchema } from 'src/models/usuario.fila.schema';
import { Usuario, UsuarioSchema } from 'src/models/usuario.schema';
import { TempoAtendimentoWorker } from './tempo-atendimento.worker';
import { NotificaUsuarioWorker } from './notifica-usuario.worker';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: UsuarioFila.name,
        schema: UsuarioFilaSchema,
      },
      {
        name: Fila.name,
        schema: FilaSchema,
      },
      {
        name: Usuario.name,
        schema: UsuarioSchema,
      },
    ])
  ],
  providers: [TempoAtendimentoWorker, NotificaUsuarioWorker]
})

export class WorkersModule {}

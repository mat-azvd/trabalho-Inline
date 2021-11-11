import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Fila, FilaSchema } from 'src/models/fila.schema';
import { UsuarioFila, UsuarioFilaSchema } from 'src/models/usuario.fila.schema';
import { TempoAtendimentoWorker } from './tempo-atendimento.worker';

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
    ])
  ],
  providers: [TempoAtendimentoWorker]
})

export class WorkersModule {}

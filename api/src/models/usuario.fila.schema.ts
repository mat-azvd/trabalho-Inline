import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Fila } from './fila.schema';
import { Usuario } from './usuario.schema';

export type UsuarioFilaDocument = UsuarioFila & Document;

@Schema()
export class UsuarioFila {
  @Prop({ required: true, ref: Usuario.name })
  usuarioId: string;

  @Prop({
    default: new Date()
  })
  dataCriacao: Date;

  @Prop()
  dataAtualizacao: Date;

  @Prop({ required: true, ref: Fila.name })
  filaId: string;

  @Prop({ required: true })
  posicao: number;

  @Prop({
    default: false
  })
  atendido: boolean;

  @Prop()
  atendidoEm: Date;

  @Prop()
  atendidoPor: string;

  @Prop()
  tempoPrevistoAtendimento: number;
}

export const UsuarioFilaSchema = SchemaFactory.createForClass(UsuarioFila);
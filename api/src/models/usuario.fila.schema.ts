import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsuarioFilaDocument = UsuarioFila & Document;

@Schema()
export class UsuarioFila {
  @Prop({ required: true })
  usuarioId: string;

  @Prop({
    default: new Date()
  })
  dataCriacao: Date;

  @Prop()
  dataAtualizacao: Date;

  @Prop({ required: true })
  filaId: string;

  @Prop({ required: true })
  posicao: number;

  @Prop()
  atendido: boolean;

  @Prop()
  atendidoEm: Date;

  @Prop()
  atendidoPor: string;
}

export const UsuarioFilaSchema = SchemaFactory.createForClass(UsuarioFila);
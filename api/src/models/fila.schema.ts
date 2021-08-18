import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FilaDocument = Fila & Document;

@Schema()
export class Fila {
  @Prop()
  deletado: boolean;
  @Prop()
  dataCriacao: Date;
  @Prop()
  dataAtualizacao: Date;
}

export const FilaSchema = SchemaFactory.createForClass(Fila);
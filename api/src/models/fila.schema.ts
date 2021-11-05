import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FilaDocument = Fila & Document;

@Schema()
export class Fila {
  @Prop({ required: true })
  nome: string;
  @Prop({ required: true })
  codigo: string;
  @Prop()
  ativo: boolean;
  @Prop({ required: true })
  inicio: Date;
  @Prop({ required: true })
  fim: Date;
  @Prop()
  deletado: boolean;
  @Prop({
    default: new Date(),
  })
  dataCriacao: Date;
  @Prop()
  dataAtualizacao: Date;
  @Prop({ required: true })
  lojaId: string;
}

export const FilaSchema = SchemaFactory.createForClass(Fila);
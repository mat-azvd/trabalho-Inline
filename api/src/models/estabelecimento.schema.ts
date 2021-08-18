import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EstabelecimentoDocument = Estabelecimento & Document;

@Schema()
export class Estabelecimento {
  @Prop()
  deletado: boolean;
  @Prop()
  dataCriacao: Date;
  @Prop()
  dataAtualizacao: Date;
}

export const EstabelecimentoSchema = SchemaFactory.createForClass(Estabelecimento);
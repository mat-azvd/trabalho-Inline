import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LojaDocument = Loja & Document;

@Schema()
export class Loja {
  @Prop({ required: true })
  nome: string;
  @Prop({ required: true })
  cnpj: string;
  @Prop({ required: true })
  endereco: string;
  @Prop({ required: true })
  telefone: string;
  @Prop({ required: true })
  email: string;
  @Prop({
    required: true,
    enum: ['BASICO', 'ESSENCIAL', 'PREMIUM'],
  })
  plano: string;
  @Prop()
  deletado: boolean;
  @Prop({
    default: new Date(),
  })
  dataCriacao: Date;
  @Prop()
  dataAtualizacao: Date;
}

export const LojaSchema = SchemaFactory.createForClass(Loja);
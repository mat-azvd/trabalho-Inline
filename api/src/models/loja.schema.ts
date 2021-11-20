import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  IsNotEmpty,
  IsEmail
} from 'class-validator';

export type LojaDocument = Loja & Document;

@Schema()
export class Loja {
  @Prop({ required: true })
  nome: string;

  @Prop({
    required: true,
    unique: true,
    minlength: 14,
    maxlength: 14
  })
  cnpj: string;

  @Prop({ required: true })
  endereco: string;

  @Prop({ required: true })
  telefone: string;

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
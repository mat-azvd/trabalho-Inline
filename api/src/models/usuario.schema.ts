import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  IsEmail
} from 'class-validator';


export type UsuarioDocument = Usuario & Document;

@Schema()
export class Usuario {
  @Prop({
    default: new Date(),
  })
  dataCriacao: Date;

  @Prop()
  dataAtualizacao: Date;

  @Prop({
    required: true,
    unique: true
  })
  cpf: string;

  @Prop({
    required: true,
  })
  senha: string;

  @Prop({
    required: true,
  })
  nome: string;

  @Prop()
  telefone: string;

  @Prop()
  lojaId: string;

  @Prop()
  @IsEmail()
  email: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
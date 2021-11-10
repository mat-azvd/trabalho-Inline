import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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
    unique: true,
    minlength: 11
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
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
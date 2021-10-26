import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsuarioDocument = Usuario & Document;

@Schema()
export class Usuario {
  @Prop()
  deletado: boolean;
  @Prop()
  dataCriacao: Date;
  @Prop()
  dataAtualizacao: Date;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
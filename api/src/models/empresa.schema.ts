import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EmpresaDocument = Empresa & Document;

@Schema()
export class Empresa {
  @Prop({ required: true })
  nome: string;
  @Prop()
  deletado: boolean;
  @Prop()
  dataCriacao: Date;
  @Prop()
  dataAtualizacao: Date;
}

export const EmpresaSchema = SchemaFactory.createForClass(Empresa);
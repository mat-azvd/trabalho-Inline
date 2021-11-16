import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  IsDate,
  IsNotEmpty
} from 'class-validator';

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
  lojaId: string;

  @Prop({ required: true })
  @IsDate()
  @IsNotEmpty()
  inicio: Date;

  @Prop({ required: true })
  @IsDate()
  @IsNotEmpty()
  fim: Date;

  @Prop({
    default: new Date(),
  })
  dataCriacao: Date;

  @Prop()
  dataAtualizacao: Date;
}

export const FilaSchema = SchemaFactory.createForClass(Fila);
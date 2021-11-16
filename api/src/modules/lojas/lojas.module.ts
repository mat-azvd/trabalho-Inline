import { Module } from '@nestjs/common';
import { LojasService } from './lojas.service';
import { LojasController } from './lojas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Loja, LojaSchema } from 'src/models/loja.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: Loja.name,
        schema: LojaSchema,
      }
    ])
  ],
  providers: [LojasService],
  controllers: [LojasController]
})
export class LojasModule {}

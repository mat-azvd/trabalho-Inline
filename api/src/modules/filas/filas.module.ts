import { Module } from '@nestjs/common';
import { FilasService } from './filas.service';
import { FilasController } from './filas.controller';

@Module({
  providers: [FilasService],
  controllers: [FilasController]
})
export class FilasModule {}

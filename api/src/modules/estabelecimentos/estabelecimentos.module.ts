import { Module } from '@nestjs/common';
import { EstabelecimentosService } from './estabelecimentos.service';
import { EstabelecimentosController } from './estabelecimentos.controller';

@Module({
  providers: [EstabelecimentosService],
  controllers: [EstabelecimentosController]
})
export class EstabelecimentosModule {}

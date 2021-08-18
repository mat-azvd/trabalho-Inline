import { Module } from '@nestjs/common';
import { FilasModule } from './modules/filas/filas.module';
import { EmpresasModule } from './modules/empresas/empresas.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { EstabelecimentosModule } from './modules/estabelecimentos/estabelecimentos.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_CONNECTION_STRING),
    FilasModule,
    EmpresasModule,
    UsuariosModule,
    EstabelecimentosModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

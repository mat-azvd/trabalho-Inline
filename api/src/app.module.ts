import { Module } from '@nestjs/common';
import { FilasModule } from './modules/filas/filas.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { LojasModule } from './modules/lojas/lojas.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION_STRING, {
      useCreateIndex: true,
    }),
    FilasModule,
    UsuariosModule,
    LojasModule,
    AuthModule
  ],
  controllers: [],
  providers: [
  ],
})
export class AppModule {}

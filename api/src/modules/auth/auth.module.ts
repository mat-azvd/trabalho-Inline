import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsuariosModule } from '../usuarios/usuarios.module';

import { AuthService } from './auth.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthController } from './auth.controller';
import { Usuario, UsuarioSchema } from 'src/models/usuario.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      {
        name: Usuario.name,
        schema: UsuarioSchema,
      }
    ]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
      }),
      inject: [ConfigService],
    }),
    UsuariosModule,
  ],
  exports: [JwtModule, AuthModule, JwtStrategy, AuthService],
  providers: [AuthService, JwtModule, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}

import { Module } from '@nestjs/common';
import { FilasModule } from './modules/filas/filas.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { LojasModule } from './modules/lojas/lojas.module';
import { UsuariosFilaModule } from './modules/usuariosFila/usuariosFila.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { ScheduleModule } from '@nestjs/schedule';
import { WorkersModule } from './modules/workers/workers.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION_STRING, {
      useCreateIndex: true,
    }),
    FilasModule,
    UsuariosModule,
    LojasModule,
    UsuariosFilaModule,
    AuthModule,
    WorkersModule,
    MailerModule.forRoot({
      transport: {
        host: process.env.MAILER_HOST,
        ignoreTLS: true,
        secure: false,
        auth: {
          user: process.env.MAILER_USER,
          pass: process.env.MAILER_PASS
        }
      },
      defaults: {
        from: '"nest-modules" <modules@nestjs.com>',
      },
      template: {
        dir: __dirname + '/templates',
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: [],
  providers: [
  ],
})
export class AppModule {}

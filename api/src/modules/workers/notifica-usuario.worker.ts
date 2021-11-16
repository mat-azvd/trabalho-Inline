import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Model } from 'mongoose';
import { Fila, FilaDocument } from 'src/models/fila.schema';
import { UsuarioFila, UsuarioFilaDocument } from 'src/models/usuario.fila.schema';
import { Usuario, UsuarioDocument } from 'src/models/usuario.schema';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class NotificaUsuarioWorker {
  private readonly logger = new Logger(NotificaUsuarioWorker.name);

  constructor(
    @InjectModel(UsuarioFila.name) private readonly usuarioFilaModel: Model<UsuarioFilaDocument>,
    @InjectModel(Fila.name) private readonly filaModel: Model<FilaDocument>,
    @InjectModel(Usuario.name) private readonly usuarioModel: Model<UsuarioDocument>,
    private readonly mailerService: MailerService
  ) {}

  @Cron(CronExpression.EVERY_30_SECONDS)
  async handleCron() {
    const filas = await this.filaModel.find({ ativo: true });

    for (const fila of filas) {
      const proximoUsuarioInline = await this.usuarioFilaModel.findOne({ posicao: 1, filaId: fila._id, atendido: false });

      const usuarioInline = await this.usuarioModel.findOne({ _id: proximoUsuarioInline.usuarioId })

      if (!usuarioInline) {
        throw new BadRequestException('Nenhum usuário na fila');
      }

      try {
        await this.mailerService
        .sendMail({
          to: usuarioInline.email, // list of receivers
          from: process.env.MAILER_FROM, // sender address
          subject: 'Testing Nest MailerModule ✔', // Subject line
          text: 'Você é o próximo da fila', // plaintext body
          html: '<b>Hello</b>', // HTML body content
        })

      } catch (error) {
        this.logger.error(`Ocorreu um erro ao enviar email .: ${error}.`)
      }

      this.logger.log(`Enviando notificação de fila`);
    }
  }
}
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Model } from 'mongoose';
import { Fila, FilaDocument } from 'src/models/fila.schema';
import { UsuarioFila, UsuarioFilaDocument } from 'src/models/usuario.fila.schema';

@Injectable()
export class TempoAtendimentoWorker {
  private readonly logger = new Logger(TempoAtendimentoWorker.name);

  constructor(
    @InjectModel(UsuarioFila.name) private readonly usuarioFilaModel: Model<UsuarioFilaDocument>,
    @InjectModel(Fila.name) private readonly filaModel: Model<FilaDocument>,
  ) {}

  @Cron(CronExpression.EVERY_10_SECONDS)
  async handleCron() {
    const TEMPO_ATENDIMENTO_PADRAO = 60; // em segundos
    const filas = await this.filaModel.find({ ativo: true });

    for (const fila of filas) {
      const usuariosAtendidos = await this.usuarioFilaModel.find({ atendido: true, filaId: fila._id });
      const usuariosNaoAtendidos = await this.usuarioFilaModel.find({ atendido: false, filaId: fila._id });

      const tempoAtendimento = usuariosAtendidos.reduce((total, usuario) => {
        const tempo = usuario.atendidoEm.getTime() - usuario.dataCriacao.getTime();

        return total + (tempo / 1000);
      }, 0);

      const tempoMedioAtendimento = Math.round(tempoAtendimento / usuariosAtendidos.length) || TEMPO_ATENDIMENTO_PADRAO;

      this.logger.log(`Tempo médio de atendimento: ${tempoMedioAtendimento}s da fila ${fila.nome}`);

      const promises = usuariosNaoAtendidos.map(async usuario => {
        usuario.tempoPrevistoAtendimento = tempoMedioAtendimento * usuario.posicao;

        return usuario.save();
      });

      await Promise.all(promises);

      this.logger.log(`Atualizando tempo previsto de atendimento`);
    }
  }
}
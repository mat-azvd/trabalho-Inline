import { ApiProperty } from '@nestjs/swagger';

export class LojaDto {
  @ApiProperty()
  nome: string
  @ApiProperty()
  cnpj: string;
  @ApiProperty()
  endereco: string;
  @ApiProperty()
  telefone: string;
  @ApiProperty()
  email: string;
  @ApiProperty({
    enum: ['BASICO', 'PREMIUM', 'ESSENCIAL'],
  })
  plano: EnumPlano;
}

enum EnumPlano {
  BASICO = 'BASICO',
  ESSENCIAL = 'ESSENCIAL',
  PREMIUM = 'PREMIUM'
}
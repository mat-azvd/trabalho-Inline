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

}


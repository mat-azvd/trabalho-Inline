import { ApiProperty } from '@nestjs/swagger'

export class UsuarioDto {
  @ApiProperty()
  nome: string
  @ApiProperty()
  senha: string
  @ApiProperty()
  telefone: string
  @ApiProperty()
  lojaId?: string
  @ApiProperty()
  cpf: string
  @ApiProperty()
  email: string
}

export class ParametrosUsuariosDto {
  pagina: number = 1
  limite: number = 10
}
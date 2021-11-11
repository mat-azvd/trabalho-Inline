import { ApiProperty } from '@nestjs/swagger'

export class UsuarioFilaDto {
  @ApiProperty()
  filaId: string
  @ApiProperty()
  usuarioId: string
  @ApiProperty()
  posicao: string
}

export class ParametrosUsuariosFilaDto {
  pagina: number = 1
  limite: number = 10
}
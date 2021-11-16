import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty()
  cpf!: string;
  @ApiProperty()
  senha!: string;
}

export interface UsuarioPayload {
  id: string;
  cpf: string;
  lojaId: string;
}
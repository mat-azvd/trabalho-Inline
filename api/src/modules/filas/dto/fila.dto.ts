import { ApiProperty } from '@nestjs/swagger';

export class FilaDto {
  @ApiProperty()
  nome: string;
  @ApiProperty()
  inicio: Date;
  @ApiProperty()
  fim: Date;
}
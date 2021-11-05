import { ApiProperty } from '@nestjs/swagger';

export class FilaDto {
  @ApiProperty()
  inicio: Date;
  @ApiProperty()
  fim: Date;
}
import { ApiProperty } from '@nestjs/swagger';

export class DeleteTaskResponseDto {
  @ApiProperty({ type: 'number' })
  id: number;
}
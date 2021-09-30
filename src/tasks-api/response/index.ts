import { SerializeOptions } from '@nestjsx/crud';
import { DeleteTaskResponseDto } from './delete-task-response.dto';

export const serialize: SerializeOptions = {
  delete: DeleteTaskResponseDto,
};
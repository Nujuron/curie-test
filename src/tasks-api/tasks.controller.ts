import { Controller } from '@nestjs/common';
// import { ApiTags } from '@nestjs/swagger';
import { Crud } from '@nestjsx/crud';

import { Task } from './task.entity';
import { TasksService } from './tasks.service';
import { serialize } from './response';

@Crud({
  model: { type: Task },
  serialize,
  routes: {
    deleteOneBase: {
      returnDeleted: true,
    },
  },
})
// @ApiTags('tasks')
@Controller('/tasks')
export class TasksController {
  constructor(public service: TasksService) {}
}
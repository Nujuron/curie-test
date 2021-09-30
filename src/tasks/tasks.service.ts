import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { CreateTaskInput } from './dto/create-task.input';
import { TasksArgs } from './dto/tasks.args';
import { UpdateTaskInput } from './dto/update-task.input';
import { Task } from 'src/common/task.entity';

@Injectable()

export class TasksService {

  async create(data: CreateTaskInput): Promise<Task> {
    return getRepository(Task).save(data);
  }

  async findAll(tasksArgs: TasksArgs): Promise<Task[]> {
    return getRepository(Task).find(tasksArgs)
  }

  async findOne(id: number) {
    return getRepository(Task).findOne(id);
  }

  async update(id: number, updateTaskInput: UpdateTaskInput) {
    return getRepository(Task).update(id, updateTaskInput);
  }

  async remove(id: number) {
    return getRepository(Task).delete(id);
  }
}

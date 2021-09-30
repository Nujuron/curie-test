import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  private readonly cats: Array<Task & { ownerId?: number }> = [
    { id: 1, title: 'Cat', state: 'cancelled', priority: "low", endDate: new Date},
  ];

  create(createTaskInput: CreateTaskInput) {
    return 'This action adds a new task';
  }

  findAll(): Task[] {
    return this.cats;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskInput: UpdateTaskInput) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}

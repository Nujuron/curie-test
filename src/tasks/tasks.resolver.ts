import { Resolver, Query, Mutation, Args, ID, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { TasksService } from './tasks.service';
import { Task } from 'src/common/task.entity';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { TasksArgs } from './dto/tasks.args';

const pubSub = new PubSub();

@Resolver(() => Task)
export class TasksResolver {
  constructor(private readonly tasksService: TasksService) {}

  @Query(() => [Task], { name: 'tasks' })
  findAll(@Args() tasksArgs: TasksArgs): Promise<Task[]> {
    return this.tasksService.findAll(tasksArgs);
  }

  @Query(() => Task, { name: 'task' })
  findOne(@Args('id', { type: () => ID }) id: number) {
    return this.tasksService.findOne(id);
  }

  @Mutation(() => Task)
  updateTask(@Args('updateTaskInput') updateTaskInput: UpdateTaskInput) {
    return this.tasksService.update(updateTaskInput.id, updateTaskInput);
  }

  @Mutation(() => Task)
  async createTask(
    @Args('createTaskInput') createTaskInput: CreateTaskInput
  ): Promise<Task> {
    const task = await this.tasksService.create(createTaskInput);
    pubSub.publish('taskAdded', { taskAdded: task });
    return task;
  }

  @Mutation(() => Task)
  async deleteTask(@Args('id', { type: () => ID }) id: number) {
    return this.tasksService.softDelete(id);
  }

  @Mutation(() => Task)
  async restoreTask(@Args('id', { type: () => ID }) id: number) {
    return this.tasksService.restoreTask(id);
  }

  @Subscription(returns => Task)
  taskAdded() {
    return pubSub.asyncIterator('taskAdded');
  }
}

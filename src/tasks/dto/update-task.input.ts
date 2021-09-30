import { CreateTaskInput } from './create-task.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';
import { State, Priority } from '../../common/fieldTypes';

@InputType()
export class UpdateTaskInput extends PartialType(CreateTaskInput) {
  @Field(() => ID)
  id: number;
  @Field()
  title: string;

  @Field({ defaultValue: "pending" })
  state: State;

  @Field()
  priority: Priority;

  @Field()
  endDate: Date;
}

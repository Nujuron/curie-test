import { InputType, Field, ID } from '@nestjs/graphql';
import { State, Priority } from '../../common/fieldTypes';

@InputType()
export class CreateTaskInput {
  
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field({ defaultValue: 'pending' })
  state: State;

  @Field({ defaultValue: 'low' })
  priority: Priority;

  @Field()
  endDate: Date;
}

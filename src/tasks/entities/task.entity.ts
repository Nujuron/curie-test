import { ObjectType, Field, ID } from '@nestjs/graphql';
import { State, Priority } from '../../common/fieldTypes';

@ObjectType()
export class Task {
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

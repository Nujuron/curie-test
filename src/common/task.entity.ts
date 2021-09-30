import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { State, Priority } from './fieldTypes';

@Entity('tasks')
@ObjectType()
export class Task {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field({ defaultValue: "pending" })
  @Column()
  state: State;

  @Field()
  @Column()
  priority: Priority;

  @Field()
  @Column()
  endDate: Date;
}

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TasksModule } from './tasks/tasks.module';
// typeorm api
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksORMModule } from './tasks-api/task.module';
import { withCache } from './orm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(withCache),
    TasksORMModule,
    TasksModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
  ],
})
export class AppModule {}

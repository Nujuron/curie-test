import { join } from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const withCache: TypeOrmModuleOptions = {
    type: 'postgres',
    url: 'postgres://ujiztigb:tCyQq9KAySm2e8eiU5YoJvy5Q0T64xtZ@tai.db.elephantsql.com/ujiztigb',
    database: 'ujiztigb',
    username: 'ujiztigb', // testing only
    password: 'tCyQq9KAySm2e8eiU5YoJvy5Q0T64xtZ', // testing only
    synchronize: true, // automatic migration
    entities: [join(__dirname, './tasks-api/*.entity{.ts,.js}')],
};
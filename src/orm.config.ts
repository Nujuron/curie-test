import { join } from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import {postgressURL, database} from './keys/devKeys';

export const withCache: TypeOrmModuleOptions = {
    type: 'postgres',
    url: postgressURL,
    database: database.name,
    username: database.user, // testing only
    password: database.password, // testing only
    synchronize: true, // automatic migration
    entities: [join(__dirname, './**/*.entity{.ts,.js}')],
};
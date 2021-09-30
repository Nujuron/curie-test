import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { State, Priority } from '../common/fieldTypes';

@Entity('tasks')
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    state: State;

    @Column()
    priority: Priority;

    @Column()
    endDate: Date;
}
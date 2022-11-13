import { Double } from 'typeorm';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

export class Exam {
  @PrimaryGeneratedColumn()
  examId: number;
  @Column()
  name: string;
  @Column()
  level: number;
  @Column()
  fee: Double;
}

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

export class TestExam {
  @PrimaryGeneratedColumn()
  testId: number;
  @Column()
  examId: number;
  @Column()
  taoId: number;
  @Column()
  date: Date;
}

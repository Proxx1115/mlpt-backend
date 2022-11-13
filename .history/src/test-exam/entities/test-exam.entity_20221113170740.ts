import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
@Entity()
export class TestExam {
  @PrimaryGeneratedColumn()
  testId: number;
  @Column()
  examId: number;
  @Column()
  taoId: number;
  @Column()
  date: Date;
  user: any;
}

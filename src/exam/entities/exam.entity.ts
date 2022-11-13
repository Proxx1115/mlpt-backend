import { TestExam } from 'src/test-exam/entities/test-exam.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';
@Entity()
export class Exam {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  level: number;
  @Column()
  fee: number;

  @OneToOne(() => TestExam, (test) => test.exam)
  test: TestExam;
}

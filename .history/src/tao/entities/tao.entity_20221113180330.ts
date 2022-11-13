import { TestExam } from 'src/test-exam/entities/test-exam.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  OneToMany,
} from 'typeorm';
@Entity()
export class Tao {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  date: Date;
  @Column()
  Link: string;
  @OneToOne(() => TestExam)
  exam: TestExam;
}

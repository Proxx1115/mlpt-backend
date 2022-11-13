import { Exam } from 'src/exam/entities/exam.entity';
import { Tao } from 'src/tao/entities/tao.entity';
import { UserToTest } from 'src/user-to-test/entities/user-to-test.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
@Entity()
export class TestExam {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  date: Date;

  @OneToOne(() => Tao, (tao) => tao.exam)
  @JoinColumn()
  tao: Tao;

  @OneToOne(() => Exam, (exam) => exam.test)
  @JoinColumn()
  exam: Exam;

  @OneToOne(() => UserToTest, (test) => test.testExam)
  userToTest: UserToTest;
}

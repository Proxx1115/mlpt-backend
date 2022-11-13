import { Interview } from 'src/interview/entities/interview.entity';
import { TestExam } from 'src/test-exam/entities/test-exam.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Double,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
@Entity()
export class UserToTest {
  @PrimaryGeneratedColumn()
  id: number;
  //   @Column()
  //   userId: number;
  //   @Column()
  //   testId: number;
  @Column()
  testScore: number;
  @Column()
  status: number;

  @OneToOne(() => User, (user) => user.userToTest)
  @JoinColumn()
  user: User;

  @OneToOne(() => TestExam, (testExam) => testExam.userToTest)
  @JoinColumn()
  testExam: TestExam;

  @ManyToOne(() => Interview, (interview) => interview.userToTest)
  interview: Interview;
}

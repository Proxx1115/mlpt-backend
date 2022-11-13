import { Examiner } from 'src/examiner/entities/examiner.entity';
import { UserToTest } from 'src/user-to-test/entities/user-to-test.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Interview {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  examComment: string;
  @Column()
  interviewScore: number;

  @ManyToOne(() => UserToTest, (userToTest) => userToTest.interview)
  userToTest: UserToTest;

  @ManyToOne(() => Examiner, (examiner) => examiner.interview)
  examiner: Examiner;
}

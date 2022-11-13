import { UserToTest } from 'src/user-to-test/entities/user-to-test.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToOne,
} from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  phoneNo: number;
  @Column()
  nation: string;
  @Column()
  fname: string;
  @Column()
  lname: string;
  @OneToOne(() => UserToTest, (exam) => exam.user)
  userToTest: UserToTest;
}

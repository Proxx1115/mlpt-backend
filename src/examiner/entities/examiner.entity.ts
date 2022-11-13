import { Interview } from 'src/interview/entities/interview.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
@Entity()
export class Examiner {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  fname: string;
  @Column()
  lname: string;
  @Column()
  email: number;
  @Column()
  password: string;

  @OneToMany(() => Interview, (interview) => interview.examiner)
  interview: Interview[];
}

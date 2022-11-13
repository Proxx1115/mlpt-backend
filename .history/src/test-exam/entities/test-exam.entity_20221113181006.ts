import { Tao } from 'src/tao/entities/tao.entity';
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

  @ManyToMany(() => User, (user) => user.testExams)
  users: User[];

  @OneToOne(() => Tao, (tao) => tao.exam)
  @JoinColumn()
  tao: Tao;
}

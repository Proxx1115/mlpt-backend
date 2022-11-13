import { Tao } from 'src/tao/entities/tao.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToOne,
} from 'typeorm';
@Entity()
export class TestExam {
  @PrimaryGeneratedColumn()
  testId: number;
  @Column()
  examId: number;
  //   @Column()
  //   taoId: number;
  @Column()
  date: Date;
  user: any;

  //   @ManyToMany(() => User, (user) => user.testExams)
  //   users: User[];

  @OneToOne(() => Tao, (tao) => tao.taoId)
  tao: Tao;
  @OneToOne(() => Author, (author) => author.books)
  author: Author;
}

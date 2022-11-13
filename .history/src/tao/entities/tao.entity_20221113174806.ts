import { TestExam } from 'src/test-exam/entities/test-exam.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
@Entity()
export class Tao {
  @PrimaryGeneratedColumn()
  taoId: number;
  @Column()
  name: string;
  @Column()
  date: Date;
  @Column()
  Link: string;
  @OneToMany(() => TestExam, (exam) => book.author)
  books: Book[];
}

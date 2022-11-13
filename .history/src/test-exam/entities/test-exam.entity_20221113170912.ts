import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
@Entity()
export class TestExam {
  @PrimaryGeneratedColumn()
  testId: number;
  @Column()
  examId: number;
  @Column()
  taoId: number;
  @Column()
  date: Date;
  user: any;

  @ManyToMany(() => Book, (book) => book.author)
  books: Book[];
}

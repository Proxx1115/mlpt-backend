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

  @ManyToMany(() => User, (user) => user.testExam)
  user: User[];
}

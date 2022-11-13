import { TestExam } from 'src/test-exam/entities/test-exam.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
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

  @ManyToMany(() => TestExam, (testExam) => testExam.user)
  testExams: TestExam[];
}

import { Examiner } from 'src/examiner/entities/examiner.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Interview {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  interviewId: number;
  @Column()
  userToTestId: number;
  @Column()
  examinerId: number;
  @Column()
  examComment: string;
  @Column()
  interviewScore: number;

  @ManyToOne(() => Examiner, (examiner) => examiner.interviews)
  examiner: Examiner[];
}

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import User
@Entity()
export class Interview {
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
}

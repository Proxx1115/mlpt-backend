import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

export class Interview {
  @PrimaryGeneratedColumn()
  interviewId: number;
  @Column()
  userToIntTestId: number;
  @Column()
  examinerId: number;
  @Column()
  examComment: string;
  @Column()
  interviewScore: number;
}

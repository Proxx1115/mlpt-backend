import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

export class Examiner {
  @PrimaryGeneratedColumn()
  examinerId: number;
  @Column()
  fname: string;
  @Column()
  lname: string;
  @Column()
  email: number;
  @Column()
  password: string;
}

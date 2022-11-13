import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
@Entity()
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

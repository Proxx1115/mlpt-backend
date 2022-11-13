import { Interview } from 'src/interview/entities/interview.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
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

  @OneToMany(() => Interview, (interview) => interview.examiners)
  interview: Interview[];
}

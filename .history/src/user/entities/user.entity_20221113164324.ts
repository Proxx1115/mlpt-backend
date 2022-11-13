import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number;
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
}

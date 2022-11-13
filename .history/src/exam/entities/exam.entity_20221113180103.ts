import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
@Entity()
export class Exam {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  level: number;
  @Column()
  fee: number;
}

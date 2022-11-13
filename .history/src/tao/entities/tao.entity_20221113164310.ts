import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
@Entity()
export class Tao {
  @PrimaryGeneratedColumn()
  taoId: number;
  @Column()
  name: string;
  @Column()
  date: Date;
  @Column()
  Link: string;
}

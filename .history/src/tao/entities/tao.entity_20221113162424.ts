import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

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

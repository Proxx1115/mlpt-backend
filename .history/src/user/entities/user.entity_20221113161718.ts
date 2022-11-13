import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  name: string;
  @Column()
  name: string;
  @Column()
  name: string;
  @Column()
  name: string;

  @Column()
  description: string;
}

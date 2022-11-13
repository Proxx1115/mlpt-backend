import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

export class NewsEmail {
  @PrimaryGeneratedColumn()
  newsEmailId: number;
  @Column()
  email: string;
}

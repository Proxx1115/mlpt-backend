import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
@Entity()
export class NewsEmail {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
}

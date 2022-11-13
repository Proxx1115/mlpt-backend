import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
@Entity()
export class NewsEmail {
  @PrimaryGeneratedColumn()
  newsEmailId: number;
  @Column()
  email: string;
}

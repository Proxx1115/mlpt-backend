import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

export class Payment {
  @PrimaryGeneratedColumn()
  paymentId: number;
  @Column()
  userId: number;
  @Column()
  examId: number;
  @Column()
  isPaid: string;
}

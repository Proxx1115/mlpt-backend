import { Entity, Column, PrimaryGeneratedColumn, Double } from 'typeorm';
@Entity()
export class UserToTest {
  @PrimaryGeneratedColumn()
  userToTestId: number;
  @Column()
  userId: number;
  @Column()
  testId: number;
  @Column()
  testScore: Double;
  @Column()
  status: number;
}

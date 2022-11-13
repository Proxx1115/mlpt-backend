import { Module } from '@nestjs/common';
import { ExaminerService } from './examiner.service';
import { ExaminerController } from './examiner.controller';

@Module({
  controllers: [ExaminerController],
  providers: [ExaminerService]
})
export class ExaminerModule {}

import { Module } from '@nestjs/common';
import { TestExamService } from './test-exam.service';
import { TestExamController } from './test-exam.controller';

@Module({
  controllers: [TestExamController],
  providers: [TestExamService]
})
export class TestExamModule {}

import { Injectable } from '@nestjs/common';
import { CreateTestExamDto } from './dto/create-test-exam.dto';
import { UpdateTestExamDto } from './dto/update-test-exam.dto';

@Injectable()
export class TestExamService {
  create(createTestExamDto: CreateTestExamDto) {
    return 'This action adds a new testExam';
  }

  findAll() {
    return `This action returns all testExam`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testExam`;
  }

  update(id: number, updateTestExamDto: UpdateTestExamDto) {
    return `This action updates a #${id} testExam`;
  }

  remove(id: number) {
    return `This action removes a #${id} testExam`;
  }
}

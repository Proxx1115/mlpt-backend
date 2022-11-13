import { Injectable } from '@nestjs/common';
import { CreateExaminerDto } from './dto/create-examiner.dto';
import { UpdateExaminerDto } from './dto/update-examiner.dto';

@Injectable()
export class ExaminerService {
  create(createExaminerDto: CreateExaminerDto) {
    return 'This action adds a new examiner';
  }

  findAll() {
    return `This action returns all examiner`;
  }

  findOne(id: number) {
    return `This action returns a #${id} examiner`;
  }

  update(id: number, updateExaminerDto: UpdateExaminerDto) {
    return `This action updates a #${id} examiner`;
  }

  remove(id: number) {
    return `This action removes a #${id} examiner`;
  }
}

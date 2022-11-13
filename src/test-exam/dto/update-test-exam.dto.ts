import { PartialType } from '@nestjs/mapped-types';
import { CreateTestExamDto } from './create-test-exam.dto';

export class UpdateTestExamDto extends PartialType(CreateTestExamDto) {}

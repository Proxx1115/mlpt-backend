import { PartialType } from '@nestjs/mapped-types';
import { CreateExaminerDto } from './create-examiner.dto';

export class UpdateExaminerDto extends PartialType(CreateExaminerDto) {}

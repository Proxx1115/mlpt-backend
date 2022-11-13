import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExaminerService } from './examiner.service';
import { CreateExaminerDto } from './dto/create-examiner.dto';
import { UpdateExaminerDto } from './dto/update-examiner.dto';

@Controller('examiner')
export class ExaminerController {
  constructor(private readonly examinerService: ExaminerService) {}

  @Post()
  create(@Body() createExaminerDto: CreateExaminerDto) {
    return this.examinerService.create(createExaminerDto);
  }

  @Get()
  findAll() {
    return this.examinerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.examinerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExaminerDto: UpdateExaminerDto) {
    return this.examinerService.update(+id, updateExaminerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.examinerService.remove(+id);
  }
}

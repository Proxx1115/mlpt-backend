import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestExamService } from './test-exam.service';
import { CreateTestExamDto } from './dto/create-test-exam.dto';
import { UpdateTestExamDto } from './dto/update-test-exam.dto';

@Controller('test-exam')
export class TestExamController {
  constructor(private readonly testExamService: TestExamService) {}

  @Post()
  create(@Body() createTestExamDto: CreateTestExamDto) {
    return this.testExamService.create(createTestExamDto);
  }

  @Get()
  findAll() {
    return this.testExamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testExamService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestExamDto: UpdateTestExamDto) {
    return this.testExamService.update(+id, updateTestExamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testExamService.remove(+id);
  }
}

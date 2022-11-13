import { Test, TestingModule } from '@nestjs/testing';
import { ExaminerController } from './examiner.controller';
import { ExaminerService } from './examiner.service';

describe('ExaminerController', () => {
  let controller: ExaminerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExaminerController],
      providers: [ExaminerService],
    }).compile();

    controller = module.get<ExaminerController>(ExaminerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

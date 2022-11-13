import { Test, TestingModule } from '@nestjs/testing';
import { TestExamController } from './test-exam.controller';
import { TestExamService } from './test-exam.service';

describe('TestExamController', () => {
  let controller: TestExamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestExamController],
      providers: [TestExamService],
    }).compile();

    controller = module.get<TestExamController>(TestExamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

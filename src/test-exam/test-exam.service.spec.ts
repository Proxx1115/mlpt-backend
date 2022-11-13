import { Test, TestingModule } from '@nestjs/testing';
import { TestExamService } from './test-exam.service';

describe('TestExamService', () => {
  let service: TestExamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestExamService],
    }).compile();

    service = module.get<TestExamService>(TestExamService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

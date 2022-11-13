import { Test, TestingModule } from '@nestjs/testing';
import { UserToTestService } from './user-to-test.service';

describe('UserToTestService', () => {
  let service: UserToTestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserToTestService],
    }).compile();

    service = module.get<UserToTestService>(UserToTestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

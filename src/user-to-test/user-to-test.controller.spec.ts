import { Test, TestingModule } from '@nestjs/testing';
import { UserToTestController } from './user-to-test.controller';
import { UserToTestService } from './user-to-test.service';

describe('UserToTestController', () => {
  let controller: UserToTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserToTestController],
      providers: [UserToTestService],
    }).compile();

    controller = module.get<UserToTestController>(UserToTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

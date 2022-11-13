import { Test, TestingModule } from '@nestjs/testing';
import { NewsEmailsController } from './news-emails.controller';
import { NewsEmailsService } from './news-emails.service';

describe('NewsEmailsController', () => {
  let controller: NewsEmailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewsEmailsController],
      providers: [NewsEmailsService],
    }).compile();

    controller = module.get<NewsEmailsController>(NewsEmailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { NewsEmailsService } from './news-emails.service';

describe('NewsEmailsService', () => {
  let service: NewsEmailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewsEmailsService],
    }).compile();

    service = module.get<NewsEmailsService>(NewsEmailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

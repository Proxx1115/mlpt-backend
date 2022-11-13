import { Test, TestingModule } from '@nestjs/testing';
import { TaoService } from './tao.service';

describe('TaoService', () => {
  let service: TaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaoService],
    }).compile();

    service = module.get<TaoService>(TaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

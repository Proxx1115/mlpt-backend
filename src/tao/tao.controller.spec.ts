import { Test, TestingModule } from '@nestjs/testing';
import { TaoController } from './tao.controller';
import { TaoService } from './tao.service';

describe('TaoController', () => {
  let controller: TaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaoController],
      providers: [TaoService],
    }).compile();

    controller = module.get<TaoController>(TaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

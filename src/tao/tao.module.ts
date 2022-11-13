import { Module } from '@nestjs/common';
import { TaoService } from './tao.service';
import { TaoController } from './tao.controller';

@Module({
  controllers: [TaoController],
  providers: [TaoService]
})
export class TaoModule {}

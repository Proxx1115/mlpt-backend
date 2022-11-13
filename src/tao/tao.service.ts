import { Injectable } from '@nestjs/common';
import { CreateTaoDto } from './dto/create-tao.dto';
import { UpdateTaoDto } from './dto/update-tao.dto';

@Injectable()
export class TaoService {
  create(createTaoDto: CreateTaoDto) {
    return 'This action adds a new tao';
  }

  findAll() {
    return `This action returns all tao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tao`;
  }

  update(id: number, updateTaoDto: UpdateTaoDto) {
    return `This action updates a #${id} tao`;
  }

  remove(id: number) {
    return `This action removes a #${id} tao`;
  }
}

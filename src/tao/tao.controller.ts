import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaoService } from './tao.service';
import { CreateTaoDto } from './dto/create-tao.dto';
import { UpdateTaoDto } from './dto/update-tao.dto';

@Controller('tao')
export class TaoController {
  constructor(private readonly taoService: TaoService) {}

  @Post()
  create(@Body() createTaoDto: CreateTaoDto) {
    return this.taoService.create(createTaoDto);
  }

  @Get()
  findAll() {
    return this.taoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaoDto: UpdateTaoDto) {
    return this.taoService.update(+id, updateTaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taoService.remove(+id);
  }
}

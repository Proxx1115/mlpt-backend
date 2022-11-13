import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NewsEmailsService } from './news-emails.service';
import { CreateNewsEmailDto } from './dto/create-news-email.dto';
import { UpdateNewsEmailDto } from './dto/update-news-email.dto';

@Controller('news-emails')
export class NewsEmailsController {
  constructor(private readonly newsEmailsService: NewsEmailsService) {}

  @Post()
  create(@Body() createNewsEmailDto: CreateNewsEmailDto) {
    return this.newsEmailsService.create(createNewsEmailDto);
  }

  @Get()
  findAll() {
    return this.newsEmailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newsEmailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNewsEmailDto: UpdateNewsEmailDto) {
    return this.newsEmailsService.update(+id, updateNewsEmailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newsEmailsService.remove(+id);
  }
}

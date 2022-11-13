import { Injectable } from '@nestjs/common';
import { CreateNewsEmailDto } from './dto/create-news-email.dto';
import { UpdateNewsEmailDto } from './dto/update-news-email.dto';

@Injectable()
export class NewsEmailsService {
  create(createNewsEmailDto: CreateNewsEmailDto) {
    return 'This action adds a new newsEmail';
  }

  findAll() {
    return `This action returns all newsEmails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} newsEmail`;
  }

  update(id: number, updateNewsEmailDto: UpdateNewsEmailDto) {
    return `This action updates a #${id} newsEmail`;
  }

  remove(id: number) {
    return `This action removes a #${id} newsEmail`;
  }
}

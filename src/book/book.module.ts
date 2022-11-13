import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Author } from './entities/author.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Author])],
  exports: [TypeOrmModule],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}

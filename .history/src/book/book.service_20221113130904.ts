import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  async create(createBookDto: CreateBookDto) {
    try {
      return await this.bookRepository.save(createBookDto);
    } catch (ex) {
      console.log(ex);
    }
  }

  findAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  findOne(id: number): Promise<Book> {
    return this.bookRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
    let book: Book;
    try {
      book = await this.findOne(id);
    } catch (e) {
      Logger.log(e.message());
    }
    if (!book) throw new BadRequestException('Тохирох мэдээлэл олдсонгүй');
    try {
      book.name = updateBookDto.name;
      book.description = updateBookDto.description;
      return await this.bookRepository.save(book);
    } catch (e) {
      Logger.log(e.message());
      if (!book) throw new BadRequestException('Мэдээллийг хадгалж чадсангүй');
    }
  }

  update1(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
    return new Promise<Book>((resolve, reject) => {
      this.findOne(id)
        .then((book) => {
          book.name = updateBookDto.name;
          book.description = updateBookDto.description;
          this.bookRepository
            .save(book)
            .then((newBook) => {
              resolve(newBook);
            })
            .catch(() => {
              reject('Мэдээллийг хадгалж чадсангүй21');
            });
        })
        .catch(() => {
          reject('Тохирох мэдээлэл олдсонгүй');
        });
    });
  }

  remove(id: number) {
    return new Promise<void>((resolve, reject) => {
      this.findOne(id)
        .then((book) => {
          this.bookRepository
            .delete(book)
            .then((newBook) => {
              if (newBook.affected === 1) resolve();
              reject('Мэдээллийг устгаж чадсангүй');
            })
            .catch(() => {
              reject('Мэдээллийг устгаж чадсангүй');
            });
        })
        .catch(() => {
          reject('Тохирох мэдээлэл олдсонгүй');
        });
    });
  }
}

import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  // update(id: number, updateUserDto: UpdateUserDto): Promise<Book> {
  //   let book: Book;
  //   try {
  //     book = await this.findOne(id);
  //   } catch (e) {
  //     Logger.log(e.message());
  //   }
  //   if (!book) throw new BadRequestException('Тохирох мэдээлэл олдсонгүй');
  //   try {
  //     book.name = updateBookDto.name;
  //     book.description = updateBookDto.description;
  //     return await this.bookRepository.save(book);
  //   } catch (e) {
  //     Logger.log(e.message());
  //     if (!book) throw new BadRequestException('Мэдээллийг хадгалж чадсангүй');
  //   }
  //   return `This action updates a #${id} user`;
  // }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

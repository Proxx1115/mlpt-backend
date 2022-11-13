import { Injectable } from '@nestjs/common';
import { CreateUserToTestDto } from './dto/create-user-to-test.dto';
import { UpdateUserToTestDto } from './dto/update-user-to-test.dto';

@Injectable()
export class UserToTestService {
  create(createUserToTestDto: CreateUserToTestDto) {
    return 'This action adds a new userToTest';
  }

  findAll() {
    return `This action returns all userToTest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userToTest`;
  }

  update(id: number, updateUserToTestDto: UpdateUserToTestDto) {
    return `This action updates a #${id} userToTest`;
  }

  remove(id: number) {
    return `This action removes a #${id} userToTest`;
  }
}

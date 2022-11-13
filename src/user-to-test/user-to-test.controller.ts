import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserToTestService } from './user-to-test.service';
import { CreateUserToTestDto } from './dto/create-user-to-test.dto';
import { UpdateUserToTestDto } from './dto/update-user-to-test.dto';

@Controller('user-to-test')
export class UserToTestController {
  constructor(private readonly userToTestService: UserToTestService) {}

  @Post()
  create(@Body() createUserToTestDto: CreateUserToTestDto) {
    return this.userToTestService.create(createUserToTestDto);
  }

  @Get()
  findAll() {
    return this.userToTestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userToTestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserToTestDto: UpdateUserToTestDto) {
    return this.userToTestService.update(+id, updateUserToTestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userToTestService.remove(+id);
  }
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateUserToTestDto } from './create-user-to-test.dto';

export class UpdateUserToTestDto extends PartialType(CreateUserToTestDto) {}

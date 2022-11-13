import { PartialType } from '@nestjs/mapped-types';
import { CreateTaoDto } from './create-tao.dto';

export class UpdateTaoDto extends PartialType(CreateTaoDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateNewsEmailDto } from './create-news-email.dto';

export class UpdateNewsEmailDto extends PartialType(CreateNewsEmailDto) {}

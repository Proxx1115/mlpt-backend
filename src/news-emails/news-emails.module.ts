import { Module } from '@nestjs/common';
import { NewsEmailsService } from './news-emails.service';
import { NewsEmailsController } from './news-emails.controller';

@Module({
  controllers: [NewsEmailsController],
  providers: [NewsEmailsService]
})
export class NewsEmailsModule {}

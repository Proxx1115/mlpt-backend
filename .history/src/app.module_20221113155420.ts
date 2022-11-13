import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book/entities/book.entity';
import { ExamModule } from './exam/exam.module';
import { Author } from './book/entities/author.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '172.104.34.197',
      port: 3306,
      username: 'mlptteam',
      database: 'mlpt',
      entities: [Book, Author],
      synchronize: true,
      ssl: false,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    }),
    BookModule,
    ExamModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

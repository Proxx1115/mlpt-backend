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
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nanzaa',
      password: 'P@ssw0rd',
      database: 'test_db',
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
export class AppModule {
}

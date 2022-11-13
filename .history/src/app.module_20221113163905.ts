import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book/entities/book.entity';
import { ExamModule } from './exam/exam.module';
import { AuthorModule } from './author/author.module';
import { Author } from './book/entities/author.entity';
import { UserModule } from './user/user.module';
import { TaoModule } from './tao/tao.module';
import { UserToTestModule } from './user-to-test/user-to-test.module';
import { PaymentModule } from './payment/payment.module';
import { NewsEmailsModule } from './news-emails/news-emails.module';
import { InterviewModule } from './interview/interview.module';
import { ExaminerModule } from './examiner/examiner.module';
import { Exam } from './exam/entities/exam.entity';
import { Examiner } from './examiner/entities/examiner.entity';
import { Interview } from './interview/entities/interview.entity';
import { NewsEmail } from './news-emails/entities/news-email.entity';
import { Payment } from './payment/entities/payment.entity';
import { Tao } from './tao/entities/tao.entity';
import { TestExam } from './test-exam/entities/test-exam.entity';
import { User } from './user/entities/user.entity';
import { UserToTest } from './user-to-test/entities/user-to-test.entity';
// import { ExamModule } from './exam/exam.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '172.104.34.197',
      port: 3306,
      username: 'mlptteam',
      database: 'mlpt',
      entities: [
        Book,
        Author,
        Exam,
        Examiner,
        Interview,
        NewsEmail,
        Payment,
        Tao,
        TestExam,
        User,
        UserToTest,
      ],
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
    UserModule,
    TaoModule,
    UserToTestModule,
    PaymentModule,
    NewsEmailsModule,
    InterviewModule,
    ExaminerModule,
    AuthorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { UserToTestService } from './user-to-test.service';
import { UserToTestController } from './user-to-test.controller';

@Module({
  controllers: [UserToTestController],
  providers: [UserToTestService]
})
export class UserToTestModule {}

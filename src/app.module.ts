import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [TasksModule, AuthModule, UserModule, PaymentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

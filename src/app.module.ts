import { Module } from '@nestjs/common';
import { Page } from './page/page.module'
import { UserModule } from './user/user.module';

@Module({
  imports: [Page, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

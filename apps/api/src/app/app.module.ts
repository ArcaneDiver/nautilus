import { Module } from '@nestjs/common';

import { AuthorizationModule } from '@nautilus/features/backend/authorization';
import { UserModule } from '@nautilus/features/backend/user';
@Module({
  imports: [AuthorizationModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

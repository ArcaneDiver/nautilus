import { Module } from '@nestjs/common';

import { AuthorizationModule } from '@nautilus/features/backend/authorization';
import { UserModule } from '@nautilus/features/backend/user';
import { ChatModule } from '@nautilus/features/backend/chat';
import { LobbyModule } from '@nautilus/features/backend/lobby';

@Module({
  imports: [AuthorizationModule, UserModule, LobbyModule, ChatModule],
})
export class AppModule {}

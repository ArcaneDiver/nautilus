import { Module } from '@nestjs/common';

import { AuthzModule } from '@nautilus/features/backend/authz';
import { UserModule } from '@nautilus/features/backend/user';
import { ChatModule } from '@nautilus/features/backend/chat';
import { LobbyModule } from '@nautilus/features/backend/lobby';

@Module({
  imports: [AuthzModule, UserModule, LobbyModule, ChatModule],
})
export class AppModule {}

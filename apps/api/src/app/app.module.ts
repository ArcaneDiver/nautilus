import { Module } from '@nestjs/common';

import { AuthzModule } from '@nautilus/features/backend/authz';
import { ChatModule } from '@nautilus/features/backend/chat';
import { LobbyModule } from '@nautilus/features/backend/lobby';

@Module({
  imports: [AuthzModule, LobbyModule, ChatModule],
})
export class AppModule {}

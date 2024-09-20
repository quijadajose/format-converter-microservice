import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideoConversionModule } from './video-conversion/video-conversion.module';
import { StorageModule } from './storage/storage.module';
import { QueueHandlingModule } from './queue-handling/queue-handling.module';

@Module({
  imports: [VideoConversionModule, StorageModule, QueueHandlingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

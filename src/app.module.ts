import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideoConversionModule } from './video-conversion/video-conversion.module';
import { StorageModule } from './storage/storage.module';

@Module({
  imports: [VideoConversionModule, StorageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

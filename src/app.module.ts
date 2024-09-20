import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideoConversionModule } from './video-conversion/video-conversion.module';

@Module({
  imports: [VideoConversionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { VideoConversionQueueController } from './infrastructure/controllers/video-conversion/video-conversion.queue';
import { VideoConversionService } from './domain/services/video-conversion/video-conversion.service';
import { QueueHandlingModule } from 'src/queue-handling/queue-handling.module';
import { StorageModule } from 'src/storage/storage.module';
// import { PruebaController } from './infrastructure/controllers/prueba/prueba.controller';

@Module({
    providers: [VideoConversionService],
    controllers: [VideoConversionQueueController],
    exports: [VideoConversionService],
    imports: [StorageModule, QueueHandlingModule],
})
export class VideoConversionModule { }

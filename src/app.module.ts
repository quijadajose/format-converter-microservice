import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { VideoConversionModule } from './video-conversion/video-conversion.module';
import { appConfig } from './config/app.config';
import { rabbitMqConfig } from './config/rabbitmq.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig, rabbitMqConfig],
      isGlobal: true,
    }),
    VideoConversionModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {
    console.log('AppModule');
  }
}
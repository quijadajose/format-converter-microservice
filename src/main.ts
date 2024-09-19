import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],  // URL de RabbitMQ (puedes cambiarla por tu config)
      queue: 'video_conversion_queue',   // Nombre de la cola que estarás utilizando
      queueOptions: {
        durable: false,
      },
    },
  });

  await app.listen();
}
bootstrap();

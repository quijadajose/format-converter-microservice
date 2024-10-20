import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  // Crear la aplicación principal
  const app = await NestFactory.create(AppModule);

  // Obtener ConfigService del contexto de la aplicación
  const configService = app.get(ConfigService);

  // Obtener los valores desde las variables de entorno
  const rabbitMqHost = configService.get('rabbitMqConfig.rabbitMqHost');
  const rabbitMqPort = configService.get('rabbitMqConfig.rabbitMqAmqPort');
  const rabbitMqUser = configService.get('rabbitMqConfig.rabbitMqUser');
  const rabbitMqPassword = configService.get('rabbitMqConfig.rabbitMqPassword');

  // Construir la URL de RabbitMQ
  const rabbitMqUrl = `amqp://${rabbitMqUser}:${rabbitMqPassword}@${rabbitMqHost}:${rabbitMqPort}`;
  console.log('rabbitMqUrl', rabbitMqUrl);

  // Configurar el microservicio
  for (const queue of ['video_conversion_queue', 'my_queue']) {
    console.log('queue', queue);

    app.connectMicroservice<MicroserviceOptions>({
      transport: Transport.RMQ,
      options: {
        urls: [rabbitMqUrl],
        queue,
        // queue: 'video_conversion_queue',
        queueOptions: {
          durable: true,
        },
      },
    });
  }

  // Iniciar el microservicio
  await app.startAllMicroservices();

  // Si necesitas que la app principal escuche HTTP también (opcional)
  await app.listen(3000);
}
bootstrap();




// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { MicroserviceOptions, Transport } from '@nestjs/microservices';
// import { ConfigService } from '@nestjs/config';


// async function bootstrap() {
//   const appContext = await NestFactory.createApplicationContext(AppModule); // Crear el contexto de la app
//   const configService = appContext.get(ConfigService); // Obtener ConfigService del contexto

//   // Obtener los valores desde las variables de entorno
//   const rabbitMqHost = configService.get('rabbitMqConfig.rabbitMqHost');
//   const rabbitMqPort = configService.get('rabbitMqConfig.rabbitMqAmqPort');
//   const rabbitMqUser = configService.get('rabbitMqConfig.rabbitMqUser');  // Usuario de RabbitMQ
//   const rabbitMqPassword = configService.get('rabbitMqConfig.rabbitMqPassword');  // Contraseña de RabbitMQ

//   const rabbitMqUrl = `amqp://${rabbitMqUser}:${rabbitMqPassword}@${rabbitMqHost}:${rabbitMqPort}`;
//   // console.log('rabbitMqUrl', rabbitMqUrl);

//   const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {

//     transport: Transport.RMQ,
//     options: {
//       urls: [rabbitMqUrl],
//       queue: 'video_conversion_queue',
//       queueOptions: {
//         durable: true,
//       },
//     },
//   });

//   await app.listen();
// }
// bootstrap();

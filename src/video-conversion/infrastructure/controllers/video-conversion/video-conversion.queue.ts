import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, NatsContext, Payload } from '@nestjs/microservices';
import { VideoConversionService } from 'src/video-conversion/domain/services/video-conversion/video-conversion.service';
import { RabbitMQVideoConversionMessage } from '../../interfaces/rabbitMQVideoConversionMessage';

@Controller()
export class VideoConversionQueueController {
    constructor(private readonly videoConversionService: VideoConversionService) {
        console.log('VideoConversionQueueController');
    }

    @EventPattern('video_conversion_queue')  // Se suscribe a la cola
    async handleVideoConversion(@Payload() data: RabbitMQVideoConversionMessage) {
        console.log('Mensaje recibido:', data);
        // const { video, format } = data; // Asumiendo que el formato está en el payload
        // await this.v ideoConversionService.convertVideo(video, format);
    }

    @EventPattern('my_queue')  // Nombre de la cola que estás escuchando
    async handleQueueMessage(@Payload() data: any) {
        console.log('Mensaje recibido desde RabbitMQ:', data);
        // Aquí puedes procesar el mensaje
    }
    // @EventPattern('video_conversion_queue')  // Se suscribe a la cola
    // async handleVideoConversion(@Payload() data: RabbitMQVideoConversionMessage, @Ctx() context: NatsContext) {
    //     console.log('context', context);

    //     console.log('Mensaje recibido:', data);
    //     if (!data) {
    //         console.error('No data received in the payload');
    //         return;
    //     }
    //     const { video, format } = data; // Asumiendo que el formato está en el payload
    //     if (!video || !format) {
    //         console.error('Invalid data received:', data);
    //         return;
    //     }
    //     console.log('Starting video conversion for:', video, 'to format:', format);
    //     await this.videoConversionService.convertVideo(video, format);
    //     console.log('Video conversion completed for:', video);
    // }
}

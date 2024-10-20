import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class QueueHandlingService {
    constructor(@Inject('RABBITMQ_CLIENT') private client: ClientProxy) { }

    sendMessageToQueue(data: any) {
        this.client.emit('convert_video', data);
    }
}

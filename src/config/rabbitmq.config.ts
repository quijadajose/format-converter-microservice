import { registerAs } from '@nestjs/config';

export const appConfig = registerAs('rabbitMqConfig', () => ({
    rabbitMqHost: process.env.RABBITMQ_HOST,
    rabbitMqUser: process.env.RABBITMQ_DEFAULT_USER,
    rabbitMqPassword: process.env.RABBITMQ_DEFAULT_PASS,
    rabbitMqWebAdminPort: +process.env.RABBITMQ_WEB_ADMIN_PORT,
    rabbitMqAmqPort: +process.env.RABBITMQ_AMQ_PORT,
}));

import { registerAs } from '@nestjs/config';

export const appConfig = registerAs('appConfig', () => ({
    port: +process.env.PORT,
}));

import { Injectable } from '@nestjs/common';
import { VideoConversionStrategy } from '../../interfaces/video-conversion-strategy.interface';
import { ConvertToMp3Strategy } from './convert-to-mp3.strategy';
import { ConvertToOggStrategy } from './convert-to-ogg.strategy';
@Injectable()
export class VideoConversionService {
    private strategies: { [format: string]: VideoConversionStrategy } = {
        mp3: new ConvertToMp3Strategy(),
        ogg: new ConvertToOggStrategy(),
    };

    async convertVideo(videoData: any, format: string): Promise<void> {
        console.log('videoData', videoData);
        console.log('format', format);
        const strategy = this.strategies[format];
        if (!strategy) {
            throw new Error(`Formato no soportado: ${format}`);
        }
        await strategy.convert(videoData);
    }
}
import { VideoConversionStrategy } from "../../interfaces/video-conversion-strategy.interface";
import * as ffmpeg from 'fluent-ffmpeg';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';

export class ConvertToMp3Strategy implements VideoConversionStrategy {
    // constructor() {
    //     ffmpeg.setFfmpegPath(ffmpegInstaller.path);
    // }
    async convert(videoData: VideoData): Promise<void> {
        console.log('videoData', videoData);
        return new Promise((resolve, reject) => { });
        // return new Promise((resolve, reject) => {
        //     console.log('Convirtiendo a MP3...', videoData);

        //     const outputPath = videoData.outputPath || `${videoData.sourceFile.split('.').slice(0, -1).join('.')}.mp3`;

        //     ffmpeg(videoData.sourceFile)
        //         .audioCodec('libmp3lame')
        //         .audioBitrate(videoData.options?.bitrate || '128k')
        //         .audioChannels(videoData.options?.channels || 2)
        //         .audioFrequency(videoData.options?.sampleRate || 44100)
        //         .output(outputPath)
        //         .on('end', () => {
        //             console.log('Conversión a MP3 completada');
        //             resolve();
        //         })
        //         .on('error', (err) => {
        //             console.error('Error en la conversión a MP3:', err);
        //             reject(err);
        //         })
        //         .run();
        // });
    }
}
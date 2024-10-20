import { VideoConversionStrategy } from "../../interfaces/video-conversion-strategy.interface";

export class ConvertToOggStrategy implements VideoConversionStrategy {
    async convert(videoData: any): Promise<void> {
        console.log('Convirtiendo a OGG...', videoData);
        // Lógica específica para convertir a OGG
    }
}
import { StorageService } from "src/storage/domain/services/storage/storage.service";
import { VideoConversionService } from "src/video-conversion/domain/services/video-conversion/video-conversion.service";

export class ConvertVideoUseCase {
    constructor(
        private readonly videoConversionService: VideoConversionService,
        private readonly storageService: StorageService
    ) { }

    async execute(videoId: string): Promise<void> {
        // const video = await this.storageService.getVideo(videoId);
        // console.log('video', video);
        // const audio = await this.videoConversionService.convertToAudio(video);
        // await this.storageService.saveAudio(audio);
    }
}
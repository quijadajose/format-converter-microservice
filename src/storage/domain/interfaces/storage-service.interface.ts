export interface IStorageService {
    getVideo(videoId: string): Promise<Video>;
    saveAudio(audio: Audio): Promise<void>;
}
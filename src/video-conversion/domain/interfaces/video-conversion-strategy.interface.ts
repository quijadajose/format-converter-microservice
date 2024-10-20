export interface VideoConversionStrategy {
    convert(videoData: any): Promise<void>;
}

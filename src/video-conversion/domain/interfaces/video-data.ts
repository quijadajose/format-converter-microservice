interface VideoData {
    sourceFile: string;
    outputPath?: string;
    options?: {
        bitrate?: string;
        channels?: number;
        sampleRate?: number;
    };
}
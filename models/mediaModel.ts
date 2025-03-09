export class MediaModel {
    filePath1: string;
    filePath2: string;
    metadata: object;
    hlsUrl: string;

    constructor(filePath1: string, filePath2: string, metadata: object, hlsUrl: string) {
        this.filePath1 = filePath1;
        this.filePath2 = filePath2;
        this.metadata = metadata;
        this.hlsUrl = hlsUrl;
    }

    // Function to validate media files (for example, file extension check)
    validateMediaFiles(): boolean {
        return this.filePath1 && this.filePath2 && this.hlsUrl ? true : false;
    }
    // Example function to generate HLS URL (could be expanded)
    async generateHLS(): Promise<string> {
        // Here you could implement actual logic to generate an HLS stream if necessary
        return `/hls_output/${this.metadata.title}.m3u8`;
    }
    // Add more methods to interact with your media if needed, like fetching additional metadata, etc.
}

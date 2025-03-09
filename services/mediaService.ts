// services/mediaService.ts
import { ThirdPartyApiClient } from './ThirdPartyApiClient';
import { MediaModel } from '../models/mediaModel';

export class MediaService {
    // Method to fetch media data using the third-party API client
    static async getMediaById(id: string): Promise<MediaModel | null> {
        try {
            // Fetch data from third-party API
            const mediaData = await ThirdPartyApiClient.getMediaDataById(id);

            const { filePath1, filePath2, metadata } = mediaData;
            return new MediaModel(filePath1, filePath2, metadata, '');
        } catch (error) {
            console.error('Error fetching media data:', error);
            throw new Error('Failed to fetch media data');
        }
    }
}

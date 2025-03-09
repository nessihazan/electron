import { ThirdPartyApiClient } from './ThirdPartyApiClient';

export class MediaService {
    static async getMediaById(id: string): Promise<any> {
        try {
            return await ThirdPartyApiClient.getMediaDataById(id);
        } catch (error) {
            console.error('Error fetching media data:', error);
            throw new Error('Failed to fetch media data');
        }
    }
}

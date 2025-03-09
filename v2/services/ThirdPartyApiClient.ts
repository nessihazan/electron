import axios from 'axios';

export class ThirdPartyApiClient {
    static async getMediaDataById(id: string): Promise<any> {
        try {
            const response = await axios.get(`https://third-party-api.com/media/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching media:', error);
            throw new Error('Failed to retrieve media data');
        }
    }
}

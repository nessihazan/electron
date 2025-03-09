// services/ThirdPartyApiClient.ts
import axios from 'axios';

export class ThirdPartyApiClient {
    private static apiBaseUrl: string = 'https://third-party-service.com/api/media/';

    static async getMediaDataById(id: string): Promise<any> {
        try {
            const response = await axios.get(`${this.apiBaseUrl}${id}`);
            if (!response.data) throw new Error('Invalid data from API');
            return response.data;
        } catch (error) {
            console.error('Error fetching data from third-party API:', error);
            throw new Error('Failed to fetch data from third-party API');
        }
    }
}

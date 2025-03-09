// controllers/mediaController.ts
import { ipcMain } from 'electron';
import { MediaService } from '../services/mediaService';

export class MediaController {
    // Method to handle the media request from the renderer process
    static async handleMediaRequest(event, id: string) {
        if (!id) {
            event.reply('media-error', 'Missing media ID');
            return;
        }

        try {
            // Fetch media data from the media service
            const media = await MediaService.getMediaById(id);

            if (!media) {
                event.reply('media-error', 'Media not found');
                return;
            }

            // Return the media data (file paths, metadata, and HLS URL)
            event.reply('media-response', media);
        } catch (error) {
            event.reply('media-error', 'Error fetching media data');
        }
    }
}
